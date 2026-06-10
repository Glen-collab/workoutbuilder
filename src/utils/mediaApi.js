// mediaApi.js — thin client for the coach-platform per-coach video upload API.
//
// The builder is a separate app from app.bestrongagain.com, but it already
// carries the coach/admin JWT via SSO (BuilderAuth → user.token, persisted in
// localStorage 'bsa_builder_auth'). These helpers reuse the SAME endpoints the
// coach-platform MediaLibrary uses, so a video uploaded here lands in the exact
// same trainer_media table and shows for that coach's clients in the tracker.
//
// Flow:  waiverStatus → (waiverAccept) → mintUploadUrl → PUT bytes to CF → registerMedia
// Backend reference: bsa-coach-platform/backend/media.py

const MEDIA_BASE = 'https://app.bestrongagain.com/api/media';
const STORAGE_KEY = 'bsa_builder_auth';

// Pull the JWT straight from the BuilderAuth localStorage blob so callers don't
// have to thread it through. Returns '' when not logged in (localhost dev).
export function getBuilderToken() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return '';
    return JSON.parse(raw).token || '';
  } catch {
    return '';
  }
}

async function mediaRequest(endpoint, { method = 'GET', body } = {}) {
  const token = getBuilderToken();
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${MEDIA_BASE}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || data.message || `Request failed (${res.status})`);
    err.code = data.code;
    err.status = res.status;
    throw err;
  }
  return data;
}

export const mediaApi = {
  waiverStatus: () => mediaRequest('/waiver/status'),
  waiverAccept: () => mediaRequest('/waiver/accept', { method: 'POST' }),

  // Mint a one-time Cloudflare Direct Creator Upload URL. The CF token never
  // leaves EC2 — we only get back a URL the browser can PUT bytes to + the
  // future video uid.
  mintUploadUrl: ({ exerciseName, coachName } = {}) =>
    mediaRequest('/upload-url', {
      method: 'POST',
      body: {
        media_type: 'video',
        max_duration_seconds: 600,
        ...(exerciseName ? { exercise_name: exerciseName } : {}),
        ...(coachName ? { coach_name: coachName } : {}),
      },
    }),

  // Record the finished upload in trainer_media (keyed on exercise_name) so the
  // tracker's /tracker-overrides lookup serves it to this coach's clients.
  registerMedia: (body) => mediaRequest('/register', { method: 'POST', body }),
};

export const CF_IFRAME = (uid) => `https://iframe.videodelivery.net/${uid}`;
