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

For multi-day paste, label each day:
  Day 1 - Push:     ...
  Day 2 - Pull:     ...
  Day 3 - Legs:     ...

For "auto-fill complementary days" — paste ONE template day,
pick a split style, and we'll design the rest of the week.`;

const SPLIT_OPTIONS = [
  { value: 'auto',         label: 'Auto-detect from template' },
  { value: 'ppl',          label: 'Push / Pull / Legs' },
  { value: 'upper-lower',  label: 'Upper / Lower' },
  { value: 'body-part',    label: 'Body part split (chest/back/legs/etc)' },
];

export default function SmartImportModal({
  isOpen, onClose, onImportSingle, onImportMulti, currentMaxes,
  currentWeek = 1, currentDay = 1,
}) {
  const [text, setText] = useState('');
  const [parseMode, setParseMode] = useState('single');     // single | multi-day | expand
  const [expandToDays, setExpandToDays] = useState(4);
  const [splitStyle, setSplitStyle] = useState('auto');
  const [appendOrReplace, setAppendOrReplace] = useState('replace');
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const reset = () => {
    setText('');
    setResult(null);
    setError('');
    setBusy(false);
    setActiveDayIdx(0);
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
        body: JSON.stringify({
          raw_text: text,
          mode: parseMode,
          expand_to_days: parseMode === 'expand' ? expandToDays : 1,
          split_style: parseMode === 'expand' ? splitStyle : 'auto',
          current_maxes: currentMaxes || null,
        }),
      });
      const data = await r.json();
      if (!r.ok || !data.success) {
        setError(data.error || `Parse failed (${r.status}).`);
      } else {
        setResult(data);
        setActiveDayIdx(0);
      }
    } catch (e) {
      setError(`Network error: ${e.message}`);
    } finally {
      setBusy(false);
    }
  };

  const accept = () => {
    if (!result) return;
    const days = result.days || [];
    if (days.length <= 1) {
      onImportSingle(days[0]?.blocks || result.blocks || [], appendOrReplace);
    } else {
      onImportMulti(days, currentWeek, currentDay, appendOrReplace);
    }
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
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl z-10">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Smart Import</h3>
            <p className="text-[12px] text-gray-500 mt-0.5">
              Paste a workout — Claude maps it to your library and (optionally) generates the rest of the week.
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
              {/* Mode picker */}
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-gray-700">What did you paste?</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <ModeCard
                    active={parseMode === 'single'}
                    title="Single day"
                    sub="One workout — drops into the current day."
                    onClick={() => setParseMode('single')}
                  />
                  <ModeCard
                    active={parseMode === 'multi-day'}
                    title="Multi-day paste"
                    sub="Day 1 / Day 2 / etc. — split into successive days."
                    onClick={() => setParseMode('multi-day')}
                  />
                  <ModeCard
                    active={parseMode === 'expand'}
                    title="Auto-fill week"
                    sub="One template day — Claude designs the rest."
                    onClick={() => setParseMode('expand')}
                  />
                </div>
              </div>

              {parseMode === 'expand' && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-emerald-900">Total days</label>
                    <select
                      value={expandToDays}
                      onChange={(e) => setExpandToDays(Number(e.target.value))}
                      className="text-[13px] px-2 py-2 rounded-lg border border-emerald-300 bg-white"
                    >
                      {[2,3,4,5,6,7].map(n => <option key={n} value={n}>{n} days</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-emerald-900">Split style</label>
                    <select
                      value={splitStyle}
                      onChange={(e) => setSplitStyle(e.target.value)}
                      className="text-[13px] px-2 py-2 rounded-lg border border-emerald-300 bg-white"
                    >
                      {SPLIT_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={
                  parseMode === 'multi-day'
                    ? "Day 1 - Push:\n  Bench 5x5 @75%\n  ...\n\nDay 2 - Pull:\n  Deadlift 5x3 @80%\n  ..."
                    : parseMode === 'expand'
                    ? "Paste ONE template day. Claude will use it as the seed and design the rest of the week to match."
                    : "Paste a workout here (GPT response, magazine page, your own scribbles)…"
                }
                className="w-full min-h-[220px] p-3 border border-gray-300 rounded-xl text-[14px] font-mono leading-snug focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
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
                  {busy
                    ? (parseMode === 'expand' ? 'Designing the week…' : 'Parsing…')
                    : (parseMode === 'expand' ? 'Generate Week' : 'Parse Workout')}
                </button>
              </div>
            </>
          )}

          {result && (
            <ImportPreview
              result={result}
              activeDayIdx={activeDayIdx}
              setActiveDayIdx={setActiveDayIdx}
              appendOrReplace={appendOrReplace}
              setAppendOrReplace={setAppendOrReplace}
              currentWeek={currentWeek}
              currentDay={currentDay}
              onBack={() => setResult(null)}
              onAccept={accept}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function ModeCard({ active, title, sub, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "text-left p-3 rounded-xl border transition-all " +
        (active
          ? "border-[#667eea] bg-indigo-50 ring-2 ring-[#667eea]/20"
          : "border-gray-200 bg-white hover:border-gray-300")
      }
    >
      <div className="text-[13px] font-semibold text-gray-800">{title}</div>
      <div className="text-[11px] text-gray-500 mt-1 leading-tight">{sub}</div>
    </button>
  );
}

function ImportPreview({
  result, activeDayIdx, setActiveDayIdx,
  appendOrReplace, setAppendOrReplace,
  currentWeek, currentDay, onBack, onAccept,
}) {
  const days = result.days || [];
  const isMulti = days.length > 1;
  const day = days[activeDayIdx] || { name: '', blocks: [] };

  const totalUnmatched = days.reduce((acc, d) => {
    return acc + (d.blocks || []).filter(b => (b.exercises || []).some(ex => ex.matched === false)).length;
  }, 0);

  return (
    <>
      <div className="bg-emerald-50 border border-emerald-200 px-4 py-3 rounded-xl text-[13px] text-emerald-900">
        <span className="font-semibold">
          Parsed {days.length} day{days.length !== 1 ? 's' : ''}
          {' · '}
          {days.reduce((a, d) => a + (d.blocks || []).length, 0)} total blocks.
        </span>
        {totalUnmatched > 0 && (
          <span> {totalUnmatched} block{totalUnmatched !== 1 ? 's' : ''} contain exercises needing a manual library match (highlighted yellow).</span>
        )}
      </div>

      {isMulti && (
        <div className="flex gap-1 overflow-x-auto pb-1 -mx-1 px-1">
          {days.map((d, i) => (
            <button
              key={i}
              onClick={() => setActiveDayIdx(i)}
              className={
                "px-3 py-1.5 rounded-lg text-[12px] font-semibold whitespace-nowrap transition-colors " +
                (i === activeDayIdx
                  ? "bg-[#667eea] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200")
              }
            >
              {d.name || `Day ${i + 1}`}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
        {(day.blocks || []).map((b, i) => (
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

      {(result.warnings || []).length > 0 && (
        <div className="bg-amber-50 border border-amber-200 px-3 py-2 rounded-lg text-[12px] text-amber-900">
          <div className="font-semibold mb-1">Notes from the parser:</div>
          <ul className="list-disc list-inside space-y-0.5">
            {result.warnings.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
        </div>
      )}

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 space-y-2">
        <div className="text-[12px] font-semibold text-gray-700">
          {isMulti
            ? `Where should the ${days.length} days land?`
            : 'How should this drop into the current day?'}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] text-gray-700 flex items-center gap-2 cursor-pointer">
            <input type="radio" checked={appendOrReplace === 'replace'} onChange={() => setAppendOrReplace('replace')} />
            <span>
              {isMulti
                ? `Replace days starting at W${currentWeek} D${currentDay}`
                : 'Replace current day'}
            </span>
          </label>
          <label className="text-[13px] text-gray-700 flex items-center gap-2 cursor-pointer">
            <input type="radio" checked={appendOrReplace === 'append'} onChange={() => setAppendOrReplace('append')} />
            <span>
              {isMulti
                ? 'Append to existing days (each parsed day adds to its target day)'
                : 'Append to current day'}
            </span>
          </label>
        </div>
        {isMulti && (
          <div className="text-[11px] text-gray-500 mt-1">
            Lands at W{currentWeek} D{currentDay}. If the week runs out of days, it rolls into next week (program length expands automatically).
          </div>
        )}
      </div>

      {result.tokens_used && (
        <div className="text-[10px] text-gray-400 text-right">
          {result.tokens_used.input}+{result.tokens_used.output} tokens
        </div>
      )}

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
          {isMulti ? `Add ${days.length} Days` : (appendOrReplace === 'replace' ? 'Replace Day' : 'Add Blocks')}
        </button>
      </div>
    </>
  );
}
