import { useState } from 'react';
import ExerciseRow from './ExerciseRow';
import ThemeSelector from './ThemeSelector';

function getBlockIcon(type) {
  const icons = { theme: '📋', warmup: '🔥', mobility: '🧘', movement: '⚡', 'straight-set': '💪', superset: '🔄', triset: '🔁', circuit: '🎯', conditioning: '🏃', cooldown: '❄️' };
  return icons[type] || '📋';
}

function getBlockTypeName(type) {
  const names = { theme: 'Theme / Notes', warmup: 'Warm Up', mobility: 'Mobility', movement: 'Movement', 'straight-set': 'Straight Set', superset: 'Superset', triset: 'Triset', circuit: 'Circuit / MetCon', conditioning: 'Conditioning', cooldown: 'Cool Down' };
  return names[type] || type;
}

function getMaxExercises(type) {
  if (type === 'straight-set') return 1;
  if (type === 'superset') return 2;
  if (type === 'triset') return 3;
  return 999;
}

const blockColors = {
  'straight-set': '#4a90d9',
  superset: '#e67e22',
  triset: '#e74c3c',
  circuit: '#9b59b6',
  conditioning: '#27ae60',
  warmup: '#f39c12',
  cooldown: '#5dade2',
  mobility: '#1abc9c',
  movement: '#3498db',
  theme: '#95a5a6',
};

export default function BlockCard({
  block,
  onDelete,
  onToggleCollapse,
  onInsertAbove,
  onInsertBelow,
  onUpdateBlock,
  onAddExercise,
  onRemoveExercise,
  onUpdateExercise,
  onUpdateSet,
  onAddSet,
  onRemoveSet,
  onDuplicateSet,
  mainMaxes,
}) {
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const color = blockColors[block.type] || '#95a5a6';
  const exercises = block.exercises || [];
  const maxEx = getMaxExercises(block.type);
  const canAdd = exercises.length < maxEx && block.type !== 'theme';

  const handleThemeAppend = (text) => {
    const current = block.themeText || '';
    const separator = current && !current.endsWith(' ') && !current.endsWith('\n') ? ' ' : '';
    onUpdateBlock(block.id, { themeText: current + separator + text });
  };

  return (
    <div className="bg-white rounded-xl shadow-md mb-4 overflow-hidden">
      {/* Header — dynamic color requires inline style for background */}
      <div
        className="flex items-center justify-between px-4 py-3 text-white cursor-pointer"
        style={{ background: color }}
        onClick={() => onToggleCollapse(block.id)}
      >
        <div className="flex items-center gap-2.5 text-[15px] font-bold">
          <span className="text-xs mr-1">{block.collapsed ? '▶' : '▼'}</span>
          <span>{getBlockIcon(block.type)}</span>
          <span>{getBlockTypeName(block.type)}</span>
        </div>
        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          <button className="bg-white/20 border-none text-white rounded-md px-2.5 py-1 text-[13px] cursor-pointer font-semibold" onClick={() => onInsertAbove(block.id)} title="Insert block above">↑+</button>
          <button className="bg-white/20 border-none text-white rounded-md px-2.5 py-1 text-[13px] cursor-pointer font-semibold" onClick={() => onInsertBelow(block.id)} title="Insert block below">↓+</button>
          <button className="bg-white/25 border-none text-white rounded-md px-2.5 py-1 text-sm cursor-pointer" onClick={() => onDelete(block.id)} title="Delete block">🗑</button>
        </div>
      </div>

      {/* Body */}
      {!block.collapsed && (
        <div className="p-4">
          {/* Theme block: textarea + theme picker */}
          {block.type === 'theme' && (
            <div className="flex flex-col gap-2">
              <textarea
                value={block.themeText || ''}
                onChange={(e) => onUpdateBlock(block.id, { themeText: e.target.value })}
                placeholder="Enter theme, focus, or notes for this section... or use the picker below"
                className="w-full min-h-[90px] px-3 py-2.5 rounded-lg border border-gray-300 text-sm font-[inherit] resize-y outline-none box-border"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => setShowThemeSelector(true)}
                  className="px-4 py-2 text-[13px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                >
                  Theme Picker
                </button>
                {block.themeText && (
                  <button
                    onClick={() => onUpdateBlock(block.id, { themeText: '' })}
                    className="px-3 py-2 text-[13px] font-semibold text-red-500 bg-red-50 border border-red-200 rounded-lg cursor-pointer hover:bg-red-100 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              <ThemeSelector
                isOpen={showThemeSelector}
                onClose={() => setShowThemeSelector(false)}
                onAppendText={handleThemeAppend}
              />
            </div>
          )}

          {/* Circuit config */}
          {block.type === 'circuit' && (
            <div className="flex gap-3 flex-wrap mb-3.5">
              {/* Rounds: show for rounds, fortime, or no type selected */}
              {(block.circuitType === 'rounds' || block.circuitType === 'fortime' || !block.circuitType) && (
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] text-gray-400 font-semibold uppercase">Rounds</span>
                  <input
                    type="number"
                    min={1}
                    value={block.rounds || ''}
                    onChange={(e) => onUpdateBlock(block.id, { rounds: parseInt(e.target.value) || 0 })}
                    placeholder="3"
                    className="w-20 px-2 py-[7px] rounded-md border border-gray-300 text-[13px] outline-none"
                  />
                </div>
              )}
              {/* Time Limit: show for AMRAP, EMOM, Tabata, For Time (as cap) */}
              {(block.circuitType === 'amrap' || block.circuitType === 'emom' || block.circuitType === 'tabata' || block.circuitType === 'fortime') && (
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] text-gray-400 font-semibold uppercase">
                    {block.circuitType === 'emom' ? 'Total Minutes' : block.circuitType === 'fortime' ? 'Time Cap' : 'Time Limit'}
                  </span>
                  <input
                    type="text"
                    value={block.timeLimit || ''}
                    onChange={(e) => onUpdateBlock(block.id, { timeLimit: e.target.value })}
                    placeholder={block.circuitType === 'emom' ? '12' : block.circuitType === 'tabata' ? '4' : '20 min'}
                    className="w-20 px-2 py-[7px] rounded-md border border-gray-300 text-[13px] outline-none"
                  />
                </div>
              )}
              {/* Work/Rest intervals for Tabata */}
              {block.circuitType === 'tabata' && (
                <>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] text-gray-400 font-semibold uppercase">Work</span>
                    <input
                      type="text"
                      value={block.workInterval || ''}
                      onChange={(e) => onUpdateBlock(block.id, { workInterval: e.target.value })}
                      placeholder="20s"
                      className="w-16 px-2 py-[7px] rounded-md border border-gray-300 text-[13px] outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] text-gray-400 font-semibold uppercase">Rest</span>
                    <input
                      type="text"
                      value={block.restInterval || ''}
                      onChange={(e) => onUpdateBlock(block.id, { restInterval: e.target.value })}
                      placeholder="10s"
                      className="w-16 px-2 py-[7px] rounded-md border border-gray-300 text-[13px] outline-none"
                    />
                  </div>
                </>
              )}
              {/* Rest Between Rounds: show for all except tabata (has its own rest) and chipper (one pass) */}
              {block.circuitType !== 'tabata' && block.circuitType !== 'chipper' && (
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] text-gray-400 font-semibold uppercase">Rest Between Rounds</span>
                  <input
                    type="text"
                    value={block.restBetweenRounds || ''}
                    onChange={(e) => onUpdateBlock(block.id, { restBetweenRounds: e.target.value })}
                    placeholder="60s"
                    className="w-20 px-2 py-[7px] rounded-md border border-gray-300 text-[13px] outline-none"
                  />
                </div>
              )}
            </div>
          )}

          {/* Exercises list */}
          {block.type !== 'theme' && exercises.map((exercise, idx) => (
            <ExerciseRow
              key={exercise.id || idx}
              exercise={exercise}
              exerciseIndex={idx}
              blockType={block.type}
              onRemove={() => onRemoveExercise(block.id, idx)}
              onUpdate={(updates) => onUpdateExercise(block.id, idx, updates)}
              onUpdateSet={(setId, updates) => onUpdateSet(block.id, idx, setId, updates)}
              onAddSet={() => onAddSet(block.id, idx)}
              onRemoveSet={(setId) => onRemoveSet(block.id, idx, setId)}
              onDuplicateSet={(set) => onDuplicateSet(block.id, idx, set)}
              mainMaxes={mainMaxes}
            />
          ))}

          {/* Add Exercise button */}
          {block.type !== 'theme' && (
            <button
              onClick={canAdd ? () => onAddExercise(block.id, block.type) : undefined}
              className={`bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg px-4.5 py-2.5 text-sm font-semibold cursor-pointer mt-2.5 ${!canAdd ? 'opacity-40 cursor-not-allowed' : ''}`}
              disabled={!canAdd}
            >
              + Add Exercise {maxEx < 999 ? `(${exercises.length}/${maxEx})` : ''}
            </button>
          )}

          {/* Notes */}
          {block.type !== 'theme' && (
            <>
              <div className="text-xs font-semibold text-gray-400 mt-3.5 mb-1 uppercase">Notes</div>
              <textarea
                value={block.notes || ''}
                onChange={(e) => onUpdateBlock(block.id, { notes: e.target.value })}
                placeholder="Block notes..."
                className="w-full min-h-[50px] px-3 py-2.5 rounded-lg border border-gray-300 text-sm font-[inherit] resize-y outline-none box-border"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
