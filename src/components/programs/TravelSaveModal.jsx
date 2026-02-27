import { useState, useMemo } from 'react';
import Modal from '../shared/Modal';

export default function TravelSaveModal({ isOpen, onClose, onSave, loading, daysPerWeek, getAllWorkouts }) {
  const [equipmentType, setEquipmentType] = useState('bodyweight');
  const [nameTemplate, setNameTemplate] = useState('');
  const [saving, setSaving] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [result, setResult] = useState(null); // { success: true, count } | { success: false, saved, failed, error }

  const equipLabels = { bodyweight: 'Bodyweight', hotel_gym: 'Hotel Gym', bands_bodyweight: 'Bands & Bodyweight' };
  const equipLabel = equipLabels[equipmentType] || 'Bodyweight';

  // Build day info from getAllWorkouts
  const dayInfo = useMemo(() => {
    if (!isOpen || !getAllWorkouts) return [];
    const data = getAllWorkouts();
    const days = [];
    for (let d = 1; d <= (daysPerWeek || 1); d++) {
      const key = `1-${d}`;
      const blocks = data.allWorkouts?.[key] || [];
      days.push({ day: d, key, blocks, blockCount: blocks.length, hasBlocks: blocks.length > 0 });
    }
    return days;
  }, [isOpen, getAllWorkouts, daysPerWeek]);

  const nonEmptyDays = dayInfo.filter((d) => d.hasBlocks);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nonEmptyDays.length === 0) return;

    setSaving(true);
    setProgress({ current: 0, total: nonEmptyDays.length });
    setResult(null);

    let savedCount = 0;
    for (const dayData of nonEmptyDays) {
      try {
        const autoName = nameTemplate.trim()
          ? `${nameTemplate.trim()} Day ${dayData.day}`
          : `${equipLabel} Day ${dayData.day}`;

        await onSave({
          trainerEmail: 'wisco.barbell@gmail.com',
          equipmentType,
          dayNumber: dayData.day,
          workoutName: autoName,
          workoutData: dayData.blocks,
        });
        savedCount++;
        setProgress({ current: savedCount, total: nonEmptyDays.length });
      } catch (err) {
        console.error(`Failed saving day ${dayData.day}:`, err);
        setResult({ success: false, saved: savedCount, failed: dayData.day, error: err.message || 'Unknown error' });
        setSaving(false);
        return;
      }
    }

    setResult({ success: true, count: savedCount });
    setSaving(false);
  };

  const handleClose = () => {
    // Reset state on close
    setSaving(false);
    setProgress({ current: 0, total: 0 });
    setResult(null);
    setNameTemplate('');
    onClose();
  };

  // Success state
  if (result?.success) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} title="Travel Workout Saved" maxWidth="440px">
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-200">{result.count} day{result.count !== 1 ? 's' : ''} saved!</div>
            <div className="text-sm text-gray-500 mt-1">{equipLabel} travel workout{result.count !== 1 ? 's' : ''} ready for clients</div>
          </div>
          <button
            className="mt-2 py-3 px-8 text-[15px] font-bold bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity"
            onClick={handleClose}
          >
            Done
          </button>
        </div>
      </Modal>
    );
  }

  // Error state
  if (result && !result.success) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} title="Save Error" maxWidth="440px">
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-200">Failed on Day {result.failed}</div>
            <div className="text-sm text-gray-500 mt-1">
              {result.saved > 0 ? `${result.saved} day${result.saved !== 1 ? 's' : ''} saved before error` : 'No days were saved'}
            </div>
            <div className="text-xs text-red-400 mt-2">{result.error}</div>
          </div>
          <div className="flex gap-3 mt-2">
            <button
              className="py-3 px-6 text-[15px] font-bold bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setResult(null)}
            >
              Try Again
            </button>
            <button
              className="py-3 px-6 text-[15px] font-semibold bg-transparent text-gray-500 border border-white/[0.12] rounded-[10px] cursor-pointer hover:bg-white/[0.06] transition"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Save as Travel Workout" maxWidth="440px">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="p-3 rounded-lg bg-orange-500/15 border border-orange-500/30 text-sm text-orange-300">
          Saves all non-empty days as travel workouts. Travel workouts are shared across ALL client programs.
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Equipment Type *</label>
          <select
            className="px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-orange-400"
            value={equipmentType}
            onChange={(e) => setEquipmentType(e.target.value)}
            disabled={saving}
          >
            <option value="bodyweight">Bodyweight Only</option>
            <option value="hotel_gym">Hotel Gym</option>
            <option value="bands_bodyweight">Bands & Bodyweight</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Name Template (optional)</label>
          <input
            className="px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-orange-400"
            type="text"
            value={nameTemplate}
            onChange={(e) => setNameTemplate(e.target.value)}
            placeholder={`e.g. ${equipLabel} Upper/Lower`}
            disabled={saving}
          />
          <div className="text-xs text-gray-600">Auto-appends "Day 1", "Day 2", etc.</div>
        </div>

        {/* Day preview */}
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Days to Save</label>
          <div className="flex gap-2 flex-wrap">
            {dayInfo.map((d) => (
              <div
                key={d.day}
                className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-[13px] font-semibold border ${
                  d.hasBlocks
                    ? 'border-green-500/40 bg-green-500/10 text-green-400'
                    : 'border-white/[0.08] bg-white/[0.02] text-gray-600'
                }`}
              >
                <span className={`inline-block w-2 h-2 rounded-full ${d.hasBlocks ? 'bg-green-400' : 'bg-gray-700'}`} />
                Day {d.day}
                <span className="text-[11px] font-normal ml-0.5">
                  {d.hasBlocks ? `${d.blockCount} block${d.blockCount !== 1 ? 's' : ''}` : 'empty'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar during save */}
        {saving && (
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Saving...</span>
              <span>{progress.current} / {progress.total}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-300"
                style={{ width: `${progress.total > 0 ? (progress.current / progress.total) * 100 : 0}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            className={`flex-1 py-3.5 px-6 text-[15px] font-bold bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none rounded-[10px] transition-opacity ${saving || nonEmptyDays.length === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}`}
            disabled={saving || nonEmptyDays.length === 0}
          >
            {saving ? `Saving Day ${progress.current + 1}...` : `Save ${nonEmptyDays.length} Day${nonEmptyDays.length !== 1 ? 's' : ''} as ${equipLabel}`}
          </button>
          <button
            type="button"
            className="py-3.5 px-6 text-[15px] font-semibold bg-transparent text-gray-500 border border-white/[0.12] rounded-[10px] cursor-pointer hover:bg-white/[0.06] transition"
            onClick={handleClose}
            disabled={saving}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
