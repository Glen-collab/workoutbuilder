// CoachVideosContext — the coach's own uploaded video library (trainer_media),
// loaded once and keyed by exercise name. Lets the builder auto-attach a coach's
// video to an exercise wherever it's added — so a video uploaded once follows
// the exercise into every future program (the bug Glen hit: re-adding an
// exercise showed the name but not the video). Mirrors how the tracker reads
// per-coach overrides, but for the build side.

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { mediaApi, CF_IFRAME } from '../utils/mediaApi';

const norm = (s) => (s || '').trim().toLowerCase();

const CoachVideosContext = createContext({
  getVideo: () => null,
  addVideo: () => {},
  removeVideo: () => {},
  map: {},
  reload: () => {},
});

export function useCoachVideos() {
  return useContext(CoachVideosContext);
}

export function CoachVideosProvider({ children }) {
  const [map, setMap] = useState({});   // normalized name -> iframe URL
  const [list, setList] = useState([]); // [{ name, url }] with original casing, for the manager

  const reload = useCallback(() => {
    mediaApi.myUploads()
      .then((r) => {
        const next = {};
        const arr = [];
        for (const u of r?.uploads || []) {
          if (u.media_type === 'video' && u.cloudflare_uid && u.status !== 'removed') {
            const url = CF_IFRAME(u.cloudflare_uid);
            next[norm(u.exercise_name)] = url;
            arr.push({ name: u.exercise_name, url });
          }
        }
        setMap(next);
        setList(arr.sort((a, b) => a.name.localeCompare(b.name)));
      })
      .catch(() => { /* not logged in / offline — builder still works */ });
  }, []);

  useEffect(() => { reload(); }, [reload]);

  const getVideo = useCallback((name) => map[norm(name)] || null, [map]);
  const addVideo = useCallback((name, url) => {
    setMap((m) => ({ ...m, [norm(name)]: url }));
    setList((l) => [...l.filter((v) => norm(v.name) !== norm(name)), { name, url }].sort((a, b) => a.name.localeCompare(b.name)));
  }, []);
  const removeVideo = useCallback((name) => {
    setMap((m) => { const n = { ...m }; delete n[norm(name)]; return n; });
    setList((l) => l.filter((v) => norm(v.name) !== norm(name)));
  }, []);

  return (
    <CoachVideosContext.Provider value={{ getVideo, addVideo, removeVideo, map, list, reload }}>
      {children}
    </CoachVideosContext.Provider>
  );
}
