import { useState, useEffect, createContext, useContext } from 'react';

const AUTH_API = 'https://app.bestrongagain.com/api/auth';
const STORAGE_KEY = 'bsa_builder_auth';

const AuthContext = createContext(null);

// Tokens are signed for 30 days and were being trusted forever out of
// localStorage. Once expired the app still looked logged in — the builder saves
// programs and custom exercises through email-keyed endpoints that need no auth,
// so those kept working — but every JWT-gated call (all of /api/media/*) came
// back 401. The visible symptom was "+ Add Video does nothing", with no hint
// that the fix was to sign in again. Check the exp claim up front instead.
export function isTokenExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (!payload?.exp) return false; // no exp claim → let the server decide
    return payload.exp * 1000 <= Date.now();
  } catch {
    return true; // unparseable = unusable
  }
}

export function useBuilderAuth() {
  return useContext(AuthContext);
}

export function BuilderAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Check for SSO token from coach platform
      const params = new URLSearchParams(window.location.search);
      const sso = params.get('sso');
      if (sso) {
        const ssoData = JSON.parse(sso);
        if (ssoData.token && ssoData.user) {
          const userData = typeof ssoData.user === 'string' ? JSON.parse(ssoData.user) : ssoData.user;
          const authData = { ...userData, token: ssoData.token };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
          setUser(authData);
          // Clean URL
          window.history.replaceState({}, '', window.location.pathname);
          setLoading(false);
          return;
        }
      }
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.token && isTokenExpired(parsed.token)) {
          // Stale session — drop it so the login screen shows instead of a
          // half-working app whose uploads silently 401.
          localStorage.removeItem(STORAGE_KEY);
        } else {
          setUser(parsed);
        }
      }
    } catch {}
    setLoading(false);
  }, []);

  // Any JWT-gated call that comes back 401 means the session died mid-use.
  // mediaApi fires this; clearing here bounces the coach to the login screen.
  useEffect(() => {
    const onExpired = () => {
      localStorage.removeItem(STORAGE_KEY);
      setUser(null);
    };
    window.addEventListener('bsa-session-expired', onExpired);
    return () => window.removeEventListener('bsa-session-expired', onExpired);
  }, []);

  const login = async (email, password) => {
    const res = await fetch(`${AUTH_API}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok || data.error) throw new Error(data.error || 'Login failed');
    if (data.user.role !== 'admin' && data.user.role !== 'coach') {
      throw new Error('Only coaches and admins can access the builder.');
    }
    const authData = { ...data.user, token: data.token };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
    setUser(authData);
    return authData;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function BuilderLoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await onLogin(email, password);
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] p-5">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">&#128221;</div>
          <h1 className="text-2xl font-bold text-gray-900">Workout Builder</h1>
          <p className="text-sm text-gray-500 mt-1">Log in to build and manage programs</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm mb-4 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base outline-none focus:border-[#667eea] transition mb-4 box-border"
            placeholder="your@email.com"
            required
          />

          <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base outline-none focus:border-[#667eea] transition mb-6 box-border"
            placeholder="Your password"
            required
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-xl text-base cursor-pointer disabled:opacity-50 border-none"
          >
            {submitting ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">Be Strong Again</p>
      </div>
    </div>
  );
}
