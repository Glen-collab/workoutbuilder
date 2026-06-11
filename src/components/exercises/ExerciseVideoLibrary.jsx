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
    try { await saveCustomExercise(coachEmail, name, ''); } catch { /* still let them add a video */ }
    setSavingNew(false);
    setNewName('');
    loadCustoms();
    setSearch(name); // jump to it so they can upload a video right away
  };

  const Row = ({ name }) => {
    const vid = getVideo(name);
    const open = preview === name;
    return (
      <div className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 mb-1.5">
        <div className="flex items-center gap-2">
          <span className="flex-1 text-sm font-semibold text-gray-800 break-words">
            {name} {vid && <span className="text-green-600">🎬</span>}
          </span>
          {vid ? (
            <>
              <button onClick={() => setPreview(open ? null : name)}
                className="text-[12px] font-semibold rounded-md px-2 py-1 cursor-pointer border-none text-white"
                style={{ background: open ? 'linear-gradient(135deg,#1565c0,#42a5f5)' : 'linear-gradient(135deg,#f5851f,#f6a623)' }}>
                {open ? '✖' : '📹'}
              </button>
              <AddVideoButton exercise={{ name }} onUploaded={reload} />
            </>
          ) : (
            <AddVideoButton exercise={{ name }} onUploaded={reload} />
          )}
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
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2">🎬 Your videos ({list.length})</div>
              {list.length === 0 && <div className="text-sm text-gray-400 italic mb-2">No videos yet. Search an exercise above and tap “+ Add Video”.</div>}
              {list.map((v) => <Row key={v.name} name={v.name} />)}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
