// ExerciseVideoLibrary — standalone "Exercises & Videos" manager, opened from
// the Welcome screen so a coach can add custom exercises and upload demo videos
// WITHOUT building a program. Uploads land in the coach's video library
// (trainer_media) and immediately attach to that exercise everywhere.

import { useEffect, useMemo, useState } from 'react';
import useProgramAPI from '../../hooks/useProgramAPI';
import { useCoachVideos } from '../CoachVideosContext';
import AddVideoButton from './AddVideoButton';
import { exerciseCategories } from '../../data/exerciseLibrary';
import { mobilityCategories } from '../../data/mobilityExercises';
import { generalMovements } from '../../data/generalMovements';
import { martialArtsCategories } from '../../data/martialArtsLibrary';
import { placementOptions, prettyKey } from '../../utils/customExercises';

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
    setSearch(''); setNewName(''); setPreview(null);
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
    return [...byNorm.values()].sort((a, b) => a.localeCompare(b));
  }, [customs, list]);

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
      setSearch(name); // jump to it so they can upload a video right away
      // Saving works name-only — no video required. Confirm it so it doesn't
      // feel like nothing happened.
      const where = placeCat
        ? ` It'll sit at the top of ${prettyKey(placeCat)}${placeSub ? ` → ${prettyKey(placeSub)}` : ''} in the picker.`
        : ' Find it by searching in the picker (pick a spot above to file it in a category too).';
      setFeedback({ type: 'ok', text: `✓ Saved “${name}” to your exercises — no video needed.${where}` });
      setTimeout(() => setFeedback(null), 8000);
    } catch {
      setFeedback({ type: 'err', text: `Couldn’t save “${name}” — check your connection and try again.` });
    }
    setSavingNew(false);
  };

  // Re-file an existing custom into a different spot (re-saving the same name
  // updates its placement rather than creating a duplicate).
  const refile = async (ce, cat, sub) => {
    try {
      await saveCustomExercise(coachEmail, ce.name, ce.video_uid || '', cat, sub);
      loadCustoms();
    } catch {
      setFeedback({ type: 'err', text: `Couldn’t move “${ce.name}”. Try again.` });
    }
  };

  // ONE row type for everything. Custom exercises and uploaded videos used to
  // render as two separate lists, so anything that was both — a custom exercise
  // WITH a video, which is the normal end state — appeared twice with different
  // controls on each copy (placement dropdowns on one, the orange preview button
  // on the other). Same exercise, one row, every control it can have.
  const Row = ({ name }) => {
    const ce = customByName[name.trim().toLowerCase()];
    const subs = placements.find((p) => p.key === ce?.category)?.subs || [];
    const vid = getVideo(name);
    const open = preview === name;
    return (
      <div className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 mb-1.5">
        <div className="flex items-center gap-2">
          <span className="flex-1 text-sm font-semibold text-gray-800 break-words">
            {name} {vid && <span className="text-green-600">🎬</span>}
          </span>
          {vid && (
            <button onClick={() => setPreview(open ? null : name)}
              title={open ? 'Hide video' : 'Preview video'}
              className="text-[12px] font-semibold rounded-md px-2 py-1 cursor-pointer border-none text-white"
              style={{ background: open ? 'linear-gradient(135deg,#1565c0,#42a5f5)' : 'linear-gradient(135deg,#f5851f,#f6a623)' }}>
              {open ? '✖' : '📹'}
            </button>
          )}
          <AddVideoButton exercise={{ name }} onUploaded={reload} />
        </div>
        {/* Placement only makes sense for the coach's OWN exercises. A library
            exercise they filmed already has its home in the library. */}
        {ce && (
          <div className="flex gap-2 mt-2">
            <select
              value={ce.category || ''}
              onChange={(e) => refile(ce, e.target.value, '')}
              className="flex-1 px-2 py-1.5 border border-gray-200 rounded-md text-[11.5px] bg-white text-gray-600 outline-none"
            >
              <option value="">Not filed (search only)</option>
              {placements.map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
            </select>
            <select
              value={ce.subcategory || ''}
              onChange={(e) => refile(ce, ce.category || '', e.target.value)}
              disabled={!subs.length}
              className="flex-1 px-2 py-1.5 border border-gray-200 rounded-md text-[11.5px] bg-white text-gray-600 outline-none disabled:opacity-40"
            >
              <option value="">{subs.length ? 'Sub-group…' : '—'}</option>
              {subs.map((sb) => <option key={sb.key} value={sb.key}>{sb.label}</option>)}
            </select>
          </div>
        )}
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
              className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-[13px] outline-none focus:border-[#10b981] transition-colors"
              type="text" placeholder="New custom exercise name…"
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
