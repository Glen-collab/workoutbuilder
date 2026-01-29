import { useState, useCallback } from 'react';

function getApiBase() {
  return (
    (typeof window !== 'undefined' && window.gwbConfig?.apiBase) ||
    'https://bestrongagain.com/workout-programs/api/general/'
  );
}

export default function useProgramAPI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (endpoint, body) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${getApiBase()}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      setError(err.message || 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const saveProgram = useCallback(
    (programData) => request('save-program.php', programData),
    [request]
  );

  const updateProgram = useCallback(
    (programData) => request('update-program.php', programData),
    [request]
  );

  const listPrograms = useCallback(
    (email) => request('list-programs.php', { email }),
    [request]
  );

  return { saveProgram, updateProgram, listPrograms, loading, error };
}
