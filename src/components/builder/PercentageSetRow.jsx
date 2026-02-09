import { useState } from 'react';
import { calculateWeight } from '../../utils/percentageCalc';
import PercentagePicker from './PercentagePicker';

export default function PercentageSetRow({ set, setIndex, baseMax, onUpdate, onDuplicate, onRemove, canRemove, isBodyweight, qualifier }) {
  const [showPicker, setShowPicker] = useState(false);
  const [showDropPicker, setShowDropPicker] = useState(false);
  const [showStripPicker, setShowStripPicker] = useState(false);

  const calcLbs = calculateWeight(set.percentage || 0, baseMax || 0);
  const dropCalcLbs = calculateWeight(set.dropPercentage || 0, baseMax || 0);
  const stripCalcLbs = calculateWeight(set.stripPercentage || 0, baseMax || 0);

  const isManual = set.manualWeight != null;
  const label = set.isWarmup ? `Warm ${setIndex + 1}` : `Set ${setIndex + 1}`;

  const isDropSet = qualifier === 'drop set';
  const isStripSet = qualifier === 'strip set';

  const handlePickerSelect = (pct) => {
    onUpdate({ percentage: pct });
    setShowPicker(false);
  };

  // Bodyweight mode: just show set label, reps, duplicate, remove
  if (isBodyweight) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg mb-1.5 flex-wrap bg-gray-50">
        <span className="font-bold text-[13px] min-w-[50px] text-gray-600">{label}</span>
        <input
          type="number"
          min={1}
          max={100}
          value={set.reps || ''}
          onChange={(e) => onUpdate({ reps: parseInt(e.target.value) || 0 })}
          placeholder="Reps"
          className="w-14 md:w-16 px-2 py-1.5 rounded-md border border-gray-300 text-[13px] text-center outline-none"
        />
        <span className="text-[13px] font-semibold text-gray-500">reps</span>
        <span className="text-[12px] text-gray-400 italic">BW</span>
        <button onClick={onDuplicate} className="bg-none border-none cursor-pointer text-base p-1 rounded leading-none" title="Duplicate set">📋</button>
        <button
          onClick={canRemove ? onRemove : undefined}
          className={`bg-none border-none cursor-pointer text-[15px] p-1 rounded leading-none ${canRemove ? 'text-red-600' : 'opacity-30 cursor-not-allowed text-gray-400'}`}
          disabled={!canRemove}
          title="Remove set"
        >🗑</button>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-1.5 flex-wrap ${set.isWarmup ? 'bg-amber-50 border border-amber-300' : 'bg-gray-50'}`}>
      {/* Warmup checkbox */}
      <input
        type="checkbox"
        checked={!!set.isWarmup}
        onChange={(e) => onUpdate({ isWarmup: e.target.checked })}
        title="Mark as warmup"
        className="w-4 h-4 cursor-pointer accent-amber-500"
      />

      {/* Label */}
      <span className={`font-bold text-[13px] min-w-[50px] ${set.isWarmup ? 'text-amber-600' : 'text-gray-600'}`}>
        {label}
      </span>

      {/* Reps */}
      <input
        type="number"
        min={1}
        max={30}
        value={set.reps || ''}
        onChange={(e) => onUpdate({ reps: parseInt(e.target.value) || 0 })}
        placeholder="Reps"
        className="w-14 md:w-16 px-2 py-1.5 rounded-md border border-gray-300 text-[13px] text-center outline-none"
      />

      {!isManual ? (
        <>
          {/* Percentage button */}
          <button
            onClick={() => setShowPicker(true)}
            className="px-3.5 py-1.5 rounded-lg border-2 border-[#667eea] text-sm font-bold bg-gradient-to-br from-[#667eea]/[0.08] to-[#764ba2]/[0.08] text-[#667eea] cursor-pointer transition-all duration-150 min-w-[65px] text-center"
            title="Tap to change percentage"
          >
            {set.percentage || 70}%
          </button>

          {/* Calculated weight */}
          <span className="text-[13px] font-semibold text-[#667eea] min-w-[70px]">= {calcLbs} lbs</span>

          {/* Unlock to manual */}
          <button
            onClick={() => onUpdate({ manualWeight: calcLbs })}
            className="bg-none border-none cursor-pointer text-base p-1 rounded leading-none"
            title="Override with manual weight"
          >
            🔓
          </button>
        </>
      ) : (
        <>
          {/* Strikethrough original calc */}
          <span className="text-xs text-gray-400 line-through">
            {set.percentage}% = {calcLbs} lbs
          </span>

          <span className="text-sm text-gray-600">&rarr;</span>

          {/* Manual weight input */}
          <input
            type="number"
            step={5}
            value={set.manualWeight || ''}
            onChange={(e) => onUpdate({ manualWeight: parseFloat(e.target.value) || 0 })}
            className="w-[72px] md:w-20 px-2 py-1.5 rounded-md border-2 border-blue-500 text-[13px] text-center outline-none bg-blue-50"
          />
          <span className="text-xs text-gray-400">lbs</span>

          {/* Lock to return to percentage */}
          <button
            onClick={() => onUpdate({ manualWeight: null })}
            className="bg-none border-none cursor-pointer text-base p-1 rounded leading-none"
            title="Return to percentage mode"
          >
            🔒
          </button>
        </>
      )}

      {/* Drop Set inputs */}
      {(isDropSet || isStripSet) && !isManual && (
        <>
          <span className="text-[12px] text-orange-500 font-bold">→</span>
          <input
            type="number"
            min={1}
            max={30}
            value={set.dropReps || ''}
            onChange={(e) => onUpdate({ dropReps: parseInt(e.target.value) || 0 })}
            placeholder="Reps"
            className="w-12 px-1.5 py-1.5 rounded-md border border-orange-300 text-[13px] text-center outline-none bg-orange-50"
          />
          <button
            onClick={() => setShowDropPicker(true)}
            className="px-2.5 py-1.5 rounded-lg border-2 border-orange-400 text-sm font-bold bg-orange-50 text-orange-600 cursor-pointer min-w-[55px] text-center"
            title="Drop percentage"
          >
            {set.dropPercentage || 60}%
          </button>
          <span className="text-[12px] font-semibold text-orange-500">= {dropCalcLbs} lbs</span>
        </>
      )}

      {/* Strip Set inputs (3rd drop) */}
      {isStripSet && !isManual && (
        <>
          <span className="text-[12px] text-red-500 font-bold">→</span>
          <input
            type="number"
            min={1}
            max={30}
            value={set.stripReps || ''}
            onChange={(e) => onUpdate({ stripReps: parseInt(e.target.value) || 0 })}
            placeholder="Reps"
            className="w-12 px-1.5 py-1.5 rounded-md border border-red-300 text-[13px] text-center outline-none bg-red-50"
          />
          <button
            onClick={() => setShowStripPicker(true)}
            className="px-2.5 py-1.5 rounded-lg border-2 border-red-400 text-sm font-bold bg-red-50 text-red-600 cursor-pointer min-w-[55px] text-center"
            title="Strip percentage"
          >
            {set.stripPercentage || 50}%
          </button>
          <span className="text-[12px] font-semibold text-red-500">= {stripCalcLbs} lbs</span>
        </>
      )}

      {/* Duplicate */}
      <button onClick={onDuplicate} className="bg-none border-none cursor-pointer text-base p-1 rounded leading-none" title="Duplicate set">
        📋
      </button>

      {/* Remove */}
      <button
        onClick={canRemove ? onRemove : undefined}
        className={`bg-none border-none cursor-pointer text-[15px] p-1 rounded leading-none ${canRemove ? 'text-red-600' : 'opacity-30 cursor-not-allowed text-gray-400'}`}
        disabled={!canRemove}
        title="Remove set"
      >
        🗑
      </button>

      {/* Percentage Picker Modal */}
      <PercentagePicker
        isOpen={showPicker}
        currentPercentage={set.percentage || 70}
        onSelect={handlePickerSelect}
        onClose={() => setShowPicker(false)}
      />

      {/* Drop Percentage Picker Modal */}
      <PercentagePicker
        isOpen={showDropPicker}
        currentPercentage={set.dropPercentage || 60}
        onSelect={(pct) => { onUpdate({ dropPercentage: pct }); setShowDropPicker(false); }}
        onClose={() => setShowDropPicker(false)}
      />

      {/* Strip Percentage Picker Modal */}
      <PercentagePicker
        isOpen={showStripPicker}
        currentPercentage={set.stripPercentage || 50}
        onSelect={(pct) => { onUpdate({ stripPercentage: pct }); setShowStripPicker(false); }}
        onClose={() => setShowStripPicker(false)}
      />
    </div>
  );
}
