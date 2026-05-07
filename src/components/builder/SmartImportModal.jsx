import { useState } from 'react';

const API_BASE = (typeof window !== 'undefined' && window.gwbConfig?.platformApiBase)
  || 'https://app.bestrongagain.com/api';

const HINTS = `Tip: tag your blocks so they convert cleanly.

  STRAIGHT SET: Bench 5x5 @75%
  SUPERSET:
    A1) Incline DB Press 4x10
    A2) Cable Row 4x12
  TRISET:
    B1) Lateral Raise 3x15
    B2) Curl 3x12
    B3) Pushdown 3x12
  CIRCUIT / METCON / CHIPPER / AMRAP:
    12 min AMRAP
    - 10 burpees
    - 15 KB swings
  WARMUP / COOLDOWN / MOBILITY  -> use these for non-strength blocks

You can also paste raw text from GPT, a PDF screenshot summary,
or a magazine page — the parser will do its best.`;

export default function SmartImportModal({ isOpen, onClose, onImport, currentMaxes }) {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('append');     // append | replace
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);     // { blocks, unmapped, warnings, tokens_used }
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const reset = () => {
    setText('');
    setResult(null);
    setError('');
    setBusy(false);
  };

  const close = () => { reset(); onClose(); };

  const parse = async () => {
    setError('');
    setResult(null);
    if (!text.trim()) {
      setError('Paste a workout first.');
      return;
    }
    setBusy(true);
    try {
      const r = await fetch(`${API_BASE}/workout/parse-import`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ raw_text: text, current_maxes: currentMaxes || null }),
      });
      const data = await r.json();
      if (!r.ok || !data.success) {
        setError(data.error || `Parse failed (${r.status}).`);
      } else {
        setResult(data);
      }
    } catch (e) {
      setError(`Network error: ${e.message}`);
    } finally {
      setBusy(false);
    }
  };

  const accept = () => {
    if (!result) return;
    onImport(result.blocks, mode);
    close();
  };

  return (
    <div
      className="fixed inset-0 bg-black/55 flex items-center justify-center z-[10000] p-3"
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Smart Import</h3>
            <p className="text-[12px] text-gray-500 mt-0.5">
              Paste a workout — Claude maps every exercise to your library.
            </p>
          </div>
          <button
            className="bg-transparent border-none text-2xl text-gray-400 cursor-pointer px-2 hover:text-gray-700"
            onClick={close}
          >
            &times;
          </button>
        </div>

        <div className="p-6 space-y-4">
          {!result && (
            <>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste a workout here (GPT response, magazine page, your own scribbles)…"
                className="w-full min-h-[260px] p-3 border border-gray-300 rounded-xl text-[14px] font-mono leading-snug focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
                disabled={busy}
              />
              <details className="text-[12px] text-gray-600">
                <summary className="cursor-pointer font-semibold text-[#667eea]">Formatting hints</summary>
                <pre className="whitespace-pre-wrap mt-2 bg-gray-50 p-3 rounded-lg">{HINTS}</pre>
              </details>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-[13px] px-3 py-2 rounded-lg">
                  {error}
                </div>
              )}

              <div className="flex gap-2 justify-end pt-1">
                <button
                  className="px-5 py-2.5 text-[14px] font-semibold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                  onClick={close}
                  disabled={busy}
                >
                  Cancel
                </button>
                <button
                  className="px-5 py-2.5 text-[14px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                  onClick={parse}
                  disabled={busy || !text.trim()}
                >
                  {busy ? 'Parsing…' : 'Parse Workout'}
                </button>
              </div>
            </>
          )}

          {result && (
            <ImportPreview
              result={result}
              mode={mode}
              setMode={setMode}
              onBack={() => setResult(null)}
              onAccept={accept}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function ImportPreview({ result, mode, setMode, onBack, onAccept }) {
  const { blocks, unmapped = [], warnings = [], tokens_used } = result;
  const unmatched = blocks.flatMap((b, bi) =>
    (b.exercises || [])
      .map((ex, ei) => ({ ex, bi, ei }))
      .filter(({ ex }) => ex.matched === false)
  );

  return (
    <>
      <div className="bg-emerald-50 border border-emerald-200 px-4 py-3 rounded-xl text-[13px] text-emerald-900">
        <span className="font-semibold">Parsed {blocks.length} block{blocks.length !== 1 ? 's' : ''}.</span>
        {unmatched.length > 0 && (
          <span> {unmatched.length} exercise{unmatched.length !== 1 ? 's' : ''} need a manual library match (highlighted yellow below).</span>
        )}
      </div>

      <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
        {blocks.map((b, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-[13px] text-[#667eea] uppercase tracking-wide">
                {b.type}{b.circuitType ? ` · ${b.circuitType}` : ''}
                {b.timeLimit ? ` · ${b.timeLimit} min` : ''}
                {b.rounds ? ` · ${b.rounds} rounds` : ''}
              </span>
              <span className="text-[11px] text-gray-400">{b.exercises?.length || 0} exercises</span>
            </div>
            {b.themeText && (
              <div className="text-[13px] italic text-gray-700 mb-2">{b.themeText}</div>
            )}
            <ul className="text-[13px] text-gray-700 space-y-1">
              {(b.exercises || []).map((ex, j) => (
                <li
                  key={j}
                  className={
                    ex.matched === false
                      ? 'bg-yellow-50 border-l-2 border-yellow-400 pl-2'
                      : ''
                  }
                >
                  <span className="font-medium">{ex.name}</span>
                  {ex.scheme && <span className="text-gray-500"> · {ex.scheme}</span>}
                  {ex.baseMax && ex.baseMax !== 'manual' && (
                    <span className="text-[11px] text-gray-400"> ({ex.baseMax})</span>
                  )}
                  {ex.matched === false && (
                    <span className="text-[11px] text-yellow-700 font-semibold ml-1">[needs match]</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {warnings.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 px-3 py-2 rounded-lg text-[12px] text-amber-900">
          <div className="font-semibold mb-1">Notes from the parser:</div>
          <ul className="list-disc list-inside space-y-0.5">
            {warnings.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
        </div>
      )}

      {unmapped.length > 0 && (
        <details className="text-[12px] text-gray-600">
          <summary className="cursor-pointer font-semibold">Suggested matches for unmapped items ({unmapped.length})</summary>
          <ul className="mt-2 space-y-1.5">
            {unmapped.map((u, i) => (
              <li key={i} className="bg-gray-50 px-2 py-1.5 rounded">
                <span className="font-medium">"{u.user_text}"</span>
                {u.guesses && u.guesses.length > 0 && (
                  <span className="text-gray-500"> &rarr; {u.guesses.join(', ')}</span>
                )}
              </li>
            ))}
          </ul>
        </details>
      )}

      <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
        <label className="text-[13px] text-gray-700 flex items-center gap-1.5 cursor-pointer">
          <input
            type="radio"
            checked={mode === 'append'}
            onChange={() => setMode('append')}
          />
          Append to current day
        </label>
        <label className="text-[13px] text-gray-700 flex items-center gap-1.5 cursor-pointer">
          <input
            type="radio"
            checked={mode === 'replace'}
            onChange={() => setMode('replace')}
          />
          Replace current day
        </label>
        {tokens_used && (
          <span className="ml-auto text-[10px] text-gray-400">
            {tokens_used.input}+{tokens_used.output} tokens
          </span>
        )}
      </div>

      <div className="flex gap-2 justify-end pt-1">
        <button
          className="px-5 py-2.5 text-[14px] font-semibold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
          onClick={onBack}
        >
          Edit Text
        </button>
        <button
          className="px-5 py-2.5 text-[14px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-xl hover:opacity-90 transition-opacity"
          onClick={onAccept}
        >
          {mode === 'replace' ? 'Replace Day' : 'Add Blocks'}
        </button>
      </div>
    </>
  );
}
