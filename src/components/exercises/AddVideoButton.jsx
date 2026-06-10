// AddVideoButton.jsx — inline "+ Add Video" for an exercise that has no video yet.
//
// Shown on ExerciseRow when exercise.youtube is empty AND a coach/admin is logged
// in. Click → pick a video → it uploads straight to Cloudflare Stream, registers
// in the coach's trainer_media library, and drops the iframe URL onto the exercise
// via onUploaded() so it bakes into the saved program (and the 📹 button appears).
//
// One-time Video Use Agreement is enforced both here (modal) and server-side.

import { useRef, useState } from 'react';
import { useBuilderAuth } from '../auth/BuilderAuth';
import { mediaApi, CF_IFRAME } from '../../utils/mediaApi';

export default function AddVideoButton({ exercise, onUploaded }) {
  const auth = useBuilderAuth();
  const user = auth?.user;
  const inputRef = useRef(null);
  const [state, setState] = useState('idle'); // idle | uploading | error
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [showWaiver, setShowWaiver] = useState(false);
  const pendingFile = useRef(null);

  // Only coaches/admins logged in via the dashboard (SSO token) can upload.
  if (!user?.token) return null;

  const coachName = [user.first_name, user.last_name].filter(Boolean).join(' ').trim();

  const doUpload = async (file) => {
    setState('uploading');
    setProgress(0);
    setError('');
    try {
      // 1. Mint one-time Cloudflare upload URL (tagged with exercise + coach name).
      const { uploadURL, uid } = await mediaApi.mintUploadUrl({
        exerciseName: exercise.name,
        coachName,
      });

      // 2. PUT the bytes straight to Cloudflare (never touches our server).
      await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', uploadURL);
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100));
        };
        xhr.onload = () =>
          xhr.status >= 200 && xhr.status < 300 ? resolve() : reject(new Error(`Upload HTTP ${xhr.status}`));
        xhr.onerror = () => reject(new Error('Upload network error'));
        const fd = new FormData();
        fd.append('file', file);
        xhr.send(fd);
      });

      // 3. Register in trainer_media so the tracker serves it to this coach's clients.
      await mediaApi.registerMedia({
        exercise_name: exercise.name,
        category: exercise.category || null,
        source_library: exercise.sourceLibrary || 'custom',
        media_type: 'video',
        cloudflare_uid: uid,
      });

      // 4. Drop the video onto the exercise so it bakes into the saved program.
      onUploaded(CF_IFRAME(uid));
      setState('idle');
      setProgress(0);
    } catch (err) {
      // Server enforces the waiver too — surface the modal if it asks for it.
      if (err.code === 'waiver_required' || err.status === 403) {
        pendingFile.current = file;
        setState('idle');
        setShowWaiver(true);
        return;
      }
      setError(err.message || 'Upload failed');
      setState('error');
    }
  };

  const handleFile = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('video/')) {
      setError('Please choose a video file');
      setState('error');
      return;
    }
    // Gate on the one-time waiver before the first upload.
    try {
      const w = await mediaApi.waiverStatus();
      if (!w.accepted) {
        pendingFile.current = file;
        setShowWaiver(true);
        return;
      }
    } catch {
      // If the status check fails, let the upload attempt surface the real error.
    }
    doUpload(file);
  };

  const onWaiverAccepted = () => {
    setShowWaiver(false);
    const f = pendingFile.current;
    pendingFile.current = null;
    if (f) doUpload(f);
  };

  return (
    <>
      {state === 'uploading' ? (
        <span className="text-[12px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-2 py-1">
          Uploading {progress}%…
        </span>
      ) : (
        <button
          onClick={() => inputRef.current?.click()}
          className="border border-dashed border-[#667eea] text-[#667eea] bg-[#667eea]/5 rounded-md px-2 py-1 text-[12px] cursor-pointer font-semibold hover:bg-[#667eea]/15 transition-colors"
          title="Upload your own demo video for this exercise"
        >
          + Add Video
        </button>
      )}
      {state === 'error' && (
        <span className="text-[11px] text-red-600" title={error}>⚠ {error}</span>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        style={{ display: 'none' }}
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
      {showWaiver && (
        <VideoWaiverModal onAccept={onWaiverAccepted} onCancel={() => { pendingFile.current = null; setShowWaiver(false); }} />
      )}
    </>
  );
}

// ── One-time Video Use Agreement (ported from coach-platform VideoWaiverModal) ──
function VideoWaiverModal({ onAccept, onCancel }) {
  const [checked, setChecked] = useState(false);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  const handleAgree = async () => {
    if (!checked) return;
    setSaving(true);
    setErr('');
    try {
      await mediaApi.waiverAccept();
      onAccept?.();
    } catch (e) {
      setErr(e.message || 'Failed to save. Try again.');
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/55"
      onClick={(e) => { if (e.target === e.currentTarget) onCancel?.(); }}
    >
      <div className="bg-white rounded-2xl p-5 w-full max-w-[560px] max-h-[90vh] flex flex-col gap-3 shadow-2xl">
        <div className="text-xl font-extrabold text-[#1a1a2e]">Video Use Agreement</div>
        <div className="text-[13px] text-gray-500 -mt-1">Please review and accept before uploading.</div>
        <div className="text-[13px] leading-relaxed text-gray-700 bg-gray-50 border border-gray-200 rounded-lg p-3 overflow-y-auto max-h-[45vh]">
          <p className="mb-2.5">
            By uploading video content ("Content") to the Be Strong Again platform, you ("Coach") grant
            <b> Be Strong Again </b> and its operator <b>Glen Rogers</b> a <b>perpetual, irrevocable,
            worldwide, royalty-free, sublicensable license</b> to host, stream, display, reproduce,
            modify (for format, captioning, and trimming), distribute, and publicly perform the Content
            across any Be Strong Again properties — including the workout tracker, coach dashboard,
            marketing materials, social media, training programs, and derivative products.
          </p>
          <p className="mb-2.5">
            You retain ownership of the Content. You warrant that you have all rights necessary to upload
            it, including rights to any likenesses, music, and third-party material depicted, and that
            the Content does not infringe any third party's rights.
          </p>
          <p className="mb-2.5">
            You may remove individual videos at any time, but Be Strong Again's license to copies already
            incorporated into training programs, materials, or marketing produced prior to removal survives.
          </p>
          <p className="mb-2.5">
            Be Strong Again may flag or remove uploads at its sole discretion for quality, safety, or
            compliance reasons. This Agreement is governed by the laws of the State of Wisconsin.
          </p>
        </div>
        {err && <div className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-[13px]">{err}</div>}
        <label className="flex items-start gap-2 text-[13px] text-gray-800 cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-0.5 scale-110"
          />
          <span>
            I have read and agree to the Video Use Agreement above, and I confirm I have all rights to the
            video content I will upload.
          </span>
        </label>
        <div className="flex gap-2.5 mt-1 justify-end flex-wrap">
          <button
            type="button"
            onClick={onCancel}
            disabled={saving}
            className="px-4 py-2.5 rounded-lg border-none text-[14px] font-semibold cursor-pointer bg-gray-200 text-gray-700 min-h-[44px]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleAgree}
            disabled={!checked || saving}
            className="px-4 py-2.5 rounded-lg border-none text-[14px] font-semibold cursor-pointer text-white min-h-[44px] disabled:cursor-not-allowed"
            style={{ background: checked && !saving ? 'linear-gradient(135deg, #B37602, #8a5b00)' : '#d1d5db' }}
          >
            {saving ? 'Saving…' : 'I Agree — Enable Uploads'}
          </button>
        </div>
      </div>
    </div>
  );
}
