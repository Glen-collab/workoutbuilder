// ExerciseVideoLibrary — standalone "Exercises & Videos" manager, opened from
// the Welcome screen so a coach can add custom exercises and upload demo videos
// WITHOUT building a program. Uploads land in the coach's video library
// (trainer_media) and immediately attach to that exercise everywhere.

import { useEffect, useMemo, useRef, useState } from 'react';
import useProgramAPI from '../../hooks/useProgramAPI';
import { useCoachVideos } from '../CoachVideosContext';
import AddVideoButton from './AddVideoButton';
import { exerciseCategories } from '../../data/exerciseLibrary';
import { mobilityCategories } from '../../data/mobilityExercises';
import { generalMovements } from '../../data/generalMovements';
import { martialArtsCategories } from '../../data/martialArtsLibrary';
import { placementOptions, prettyKey, libraryExerciseByName } from '../../utils/customExercises';

function namesFromCategories(cats, out) {
  if (!cats) return;
  Object.values(cats).forEach((cat) => {
    (Array.isArray(cat) ? cat : cat?.exercises || []).forEach((ex) => ex?.name && out.push(ex.name));
    if (cat?.subcategories) {
      Object.values(cat.subcategories).forEach((sub) => {
        (Array.isArray(sub) ? sub : sub?.exercises || []).forEach((ex) => ex?.name && out.push(ex.name));
      });
    }
  });
}

export default function ExerciseVideoLibrary({ isOpen, onClose, coachEmail }) {
  const { list, getVideo, reload } = useCoachVideos();
  const { listCustomExercises, saveCustomExercise } = useProgramAPI();
  const [search, setSearch] = useState('');
  const [customs, setCustoms] = useState([]);
  const [newName, setNewName] = useState('');
  const [preview, setPreview] = useState(null);
  const [savingNew, setSavingNew] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'ok'|'err', text }
  // Where a newly added exercise gets filed in the builder's picker.
  const [placeCat, setPlaceCat] = useState('');
  const [placeSub, setPlaceSub] = useState('');
  // Names added in THIS sitting, newest first — pinned to the top of the list so
  // a just-captured idea never gets lost among 37 alphabetical entries.
  const [recent, setRecent] = useState([]);
  const nameRef = useRef(null);
  const placements = useMemo(() => placementOptions(), []);
  const subsForCat = placements.find((p) => p.key === placeCat)?.subs || [];

  const loadCustoms = () => {
    if (!coachEmail) return;
    listCustomExercises(coachEmail).then((r) => setCustoms(r?.exercises || [])).catch(() => {});
  };
  useEffect(() => {
    if (!isOpen) return;
    reload();
    loadCustoms();
    setSearch(''); setNewName(''); setPreview(null); setRecent([]);
    // Land the cursor in the name box. Opening this screen almost always means
    // "I just thought of something" — one tap from the welcome screen straight
    // to typing, rather than a tap to open then another to aim.
    setTimeout(() => nameRef.current?.focus(), 60);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Custom rows by normalized name, so a row can tell whether it's one of the
  // coach's own exercises (and therefore re-filable) in O(1).
  const customByName = useMemo(() => {
    const m = {};
    customs.forEach((c) => { if (c?.name) m[c.name.trim().toLowerCase()] = c; });
    return m;
  }, [customs]);

  // The default view: everything the coach owns — their custom exercises AND
  // any library exercise they've filmed — as ONE deduped, alphabetical list.
  // These two sets overlap (a custom exercise with a video is in both), which
  // is what made entries appear twice.
  const mine = useMemo(() => {
    const byNorm = new Map();
    [...customs.map((c) => c?.name), ...list.map((v) => v?.name)]
      .filter(Boolean)
      .forEach((n) => {
        const k = n.trim().toLowerCase();
        if (!byNorm.has(k)) byNorm.set(k, n);
      });
    const all = [...byNorm.values()].sort((a, b) => a.localeCompare(b));
    // Just-added ones ride at the top, in the order they were captured, so the
    // thing you're still holding in your head is the thing under your thumb.
    const recentSet = new Set(recent.map((n) => n.toLowerCase()));
    const justAdded = recent.filter((n) => byNorm.has(n.trim().toLowerCase()));
    return [...justAdded, ...all.filter((n) => !recentSet.has(n.toLowerCase()))];
  }, [customs, list, recent]);

  // Every library exercise name + the coach's custom names, deduped.
  const allNames = useMemo(() => {
    const out = [];
    namesFromCategories(exerciseCategories, out);
    namesFromCategories(mobilityCategories, out);
    namesFromCategories(generalMovements, out);
    namesFromCategories(martialArtsCategories, out);
    customs.forEach((c) => c?.name && out.push(c.name));
    return [...new Set(out)].sort((a, b) => a.localeCompare(b));
  }, [customs]);

  if (!isOpen) return null;

  const term = search.trim().toLowerCase();
  const results = term ? allNames.filter((n) => n.toLowerCase().includes(term)).slice(0, 60) : [];

  const addCustom = async () => {
    const name = newName.trim();
    if (!name || !coachEmail) return;
    setSavingNew(true);
    setFeedback(null);
    try {
      await saveCustomExercise(coachEmail, name, '', placeCat, placeSub);
      setNewName('');
      loadCustoms();
      // Keep it at the top of the list (see `mine`) instead of hijacking the
      // search box. Search-jumping showed the new row but left a full search
      // field behind, so rattling off three ideas in a row meant clearing it
      // every time. Now: type, Enter, type the next one — the ones you just
      // added stay pinned above everything with their video + filing controls.
      setRecent((r) => [name, ...r.filter((n) => n.toLowerCase() !== name.toLowerCase())]);
      setSearch('');
      nameRef.current?.focus();
      // Saving works name-only — no video required. Confirm it so it doesn't
      // feel like nothing happened.
      const where = placeCat
        ? ` It'll sit at the top of ${prettyKey(placeCat)}${placeSub ? ` → ${prettyKey(placeSub)}` : ''} in the picker.`
        : ' Find it by searching in the picker (pick a spot above to file it in a category too).';
      setFeedback({ type: 'ok', text: `✓ Saved “${name}” — no video needed.${where}` });
      setTimeout(() => setFeedback(null), 8000);
    } catch {
      setFeedback({ type: 'err', text: `Couldn’t save “${name}” — check your connection and try again.` });
    }
    setSavingNew(false);
  };

  // File (or re-file) ANY exercise onto a shelf — the coach's own inventions and
  // bundled library exercises alike. Filing a library exercise writes the same
  // kind of row; it acts as a pointer, and customToExercise resolves it back to
  // the real library object so nothing is lost. Re-saving a name updates its
  // placement rather than duplicating, so "move" is just a save.
  const refile = async (name, videoUid, cat, sub) => {
    if (!coachEmail) return;
    try {
      await saveCustomExercise(coachEmail, name, videoUid || '', cat, sub);
      loadCustoms();
    } catch {
      setFeedback({ type: 'err', text: `Couldn’t move “${name}”. Try again.` });
    }
  };

  // ONE row type for everything. Custom exercises and uploaded videos used to
  // render as two separate lists, so anything that was both — a custom exercise
  // WITH a video, which is the normal end state — appeared twice with different
  // controls on each copy (placement dropdowns on one, the orange preview button
  // on the other). Same exercise, one row, every control it can have.
  const Row = ({ name }) => {
    const ce = customByName[name.trim().toLowerCase()];
    const cat = ce?.category || '';
    const sub = ce?.subcategory || '';
    const catOpt = placements.find((p) => p.key === cat);
    const subs = catOpt?.subs || [];
    // Coach upload first, then the bundled library — the same order the tracker
    // and the builder rows use.
    //
    // This only ever checked getVideo(), i.e. THIS coach's uploads, so every
    // library exercise showed "+ Add Video" whether or not a bundled clip
    // existed. Searching "reverse l" listed 17 exercises as having no video
    // when 15 of them were already filmed — an invitation to reshoot work that
    // was already done.
    const vid = getVideo(name) || libraryExerciseByName(name)?.youtube || '';
    const isCoachUpload = !!getVideo(name);
    const open = preview === name;
    const filed = !!cat;
    const shelf = filed
      ? `${catOpt?.label || prettyKey(cat)}${sub ? ` → ${subs.find((s) => s.key === sub)?.label || prettyKey(sub)}` : ''}`
      : null;
    return (
      <div className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 mb-1.5">
        <div className="flex items-center gap-2">
          <span className="flex-1 text-sm font-semibold text-gray-800 break-words">
            {name}{' '}
            {vid && (
              <span
                className={isCoachUpload ? 'text-green-600' : 'text-gray-400'}
                title={isCoachUpload ? 'Your upload' : 'Already in the exercise library'}
              >🎬</span>
            )}
          </span>
          {vid && (
            <button onClick={() => setPreview(open ? null : name)}
              title={open ? 'Hide video' : 'Preview video'}
              className="text-[12px] font-semibold rounded-md px-2 py-1 cursor-pointer border-none text-white"
              style={{ background: open ? 'linear-gradient(135deg,#1565c0,#42a5f5)' : 'linear-gradient(135deg,#f5851f,#f6a623)' }}>
              {open ? '✖' : '📹'}
            </button>
          )}
          <AddVideoButton exercise={{ name }} onUploaded={reload} hasVideo={isCoachUpload} />
        </div>

        {/* The check: is this actually reachable in the builder, and where? With
            a list that only grows, "did I file this one?" has to be answerable
            at a glance instead of by opening every dropdown. */}
        <div className={`mt-1.5 text-[11.5px] font-semibold ${filed ? 'text-emerald-700' : 'text-amber-700'}`}>
          {filed ? `✓ In the builder — ${shelf}` : '○ Search only — pick a spot to put it in the builder'}
        </div>

        {/* Every row can be filed, library exercises included. A bundled
            movement preset a coach films and also wants in their Warm Up list
            has nowhere to go otherwise. */}
        <div className="flex gap-2 mt-1.5">
          <select
            value={cat}
            onChange={(e) => refile(name, ce?.video_uid, e.target.value, '')}
            className="flex-1 px-2 py-1.5 border border-gray-200 rounded-md text-[11.5px] bg-white text-gray-600 outline-none"
          >
            <option value="">Not filed (search only)</option>
            {placements.map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
          </select>
          <select
            value={sub}
            onChange={(e) => refile(name, ce?.video_uid, cat, e.target.value)}
            disabled={!subs.length}
            className="flex-1 px-2 py-1.5 border border-gray-200 rounded-md text-[11.5px] bg-white text-gray-600 outline-none disabled:opacity-40"
          >
            <option value="">{subs.length ? 'Sub-group…' : '—'}</option>
            {subs.map((sb) => <option key={sb.key} value={sb.key}>{sb.label}</option>)}
          </select>
        </div>
        {open && vid && (
          <div className="mt-2 rounded-lg overflow-hidden bg-black" style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe src={`${vid}?preload=metadata`} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4" onClick={onClose}>
      <div className="bg-purple-50 rounded-2xl w-full max-w-lg max-h-[88vh] flex flex-col overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] px-5 py-4 flex items-center justify-between">
          <h3 className="text-white text-lg font-bold m-0">Exercises &amp; Videos</h3>
          <button className="bg-white/20 border-none text-white text-lg w-[34px] h-[34px] rounded-full cursor-pointer flex items-center justify-center hover:bg-white/30 transition" onClick={onClose}>✕</button>
        </div>

        <div className="px-4 py-3 bg-white border-b border-gray-200">
          <input
            className="w-full px-3.5 py-2.5 border-2 border-gray-200 rounded-lg text-sm outline-none focus:border-[#667eea] transition-colors"
            type="text" placeholder="Search any exercise to add a video…"
            value={search} onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-2 mt-2.5">
            <input
              ref={nameRef}
              className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-[13px] outline-none focus:border-[#10b981] transition-colors"
              type="text" placeholder="New exercise name…"
              value={newName} onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') addCustom(); }}
            />
            <button onClick={addCustom} disabled={!newName.trim() || savingNew}
              className="px-3 py-2 text-[13px] font-bold rounded-lg border-none text-white cursor-pointer disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg,#10b981,#047857)' }}>
              {savingNew ? '…' : '+ Add'}
            </button>
          </div>
          {/* Where it lands in the picker. Optional — search finds it either
              way — but filing it means you can reach for it where you'd expect. */}
          <div className="flex gap-2 mt-2">
            <select
              value={placeCat}
              onChange={(e) => { setPlaceCat(e.target.value); setPlaceSub(''); }}
              className="flex-1 px-2 py-2 border-2 border-gray-200 rounded-lg text-[12.5px] outline-none bg-white text-gray-700 focus:border-[#667eea]"
            >
              <option value="">File under… (optional)</option>
              {placements.map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
            </select>
            <select
              value={placeSub}
              onChange={(e) => setPlaceSub(e.target.value)}
              disabled={!subsForCat.length}
              className="flex-1 px-2 py-2 border-2 border-gray-200 rounded-lg text-[12.5px] outline-none bg-white text-gray-700 focus:border-[#667eea] disabled:opacity-40"
            >
              <option value="">{subsForCat.length ? 'Sub-group…' : '—'}</option>
              {subsForCat.map((sb) => <option key={sb.key} value={sb.key}>{sb.label}</option>)}
            </select>
          </div>
          {/* The shelf stays selected between adds on purpose — thinking up six
              leg exercises in a row shouldn't mean re-picking Legs six times.
              Said out loud so it can't misfile the next one by surprise. */}
          {placeCat && (
            <div className="mt-1.5 text-[11px] text-emerald-700 font-semibold">
              ↑ Next add goes to the top of {prettyKey(placeCat)}
              {placeSub ? ` → ${prettyKey(placeSub)}` : ''} — stays set until you change it
            </div>
          )}
          {feedback && (
            <div
              className={`mt-2 px-3 py-2 rounded-lg text-[12.5px] font-semibold ${feedback.type === 'ok' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}
            >
              {feedback.text}
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {term ? (
            <>
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2">Results ({results.length})</div>
              {results.length === 0 && <div className="text-sm text-gray-400 italic">No exercise matches “{search}”. Add it as a custom exercise above.</div>}
              {results.map((n) => <Row key={n} name={n} />)}
            </>
          ) : (
            <>
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2">
                ⭐ Your exercises &amp; videos ({mine.length})
              </div>
              {mine.length === 0 && (
                <div className="text-sm text-gray-400 italic mb-2">
                  Nothing yet. Add a custom exercise above, or search any exercise to give it a video.
                </div>
              )}
              {mine.map((n) => <Row key={n} name={n} />)}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
