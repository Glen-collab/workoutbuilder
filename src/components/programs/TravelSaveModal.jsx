import { useState } from 'react';
import Modal from '../shared/Modal';

export default function TravelSaveModal({ isOpen, onClose, onSave, loading }) {
  const [equipmentType, setEquipmentType] = useState('bodyweight');
  const [dayNumber, setDayNumber] = useState(1);
  const [workoutName, setWorkoutName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      equipmentType,
      dayNumber,
      workoutName: workoutName.trim() || null,
    });
  };

  const equipLabel = equipmentType === 'hotel_gym' ? 'Hotel Gym' : 'Bodyweight';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Save as Travel Workout" maxWidth="440px">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="p-3 rounded-lg bg-orange-500/15 border border-orange-500/30 text-sm text-orange-300">
          This saves the current day's blocks as a travel workout. Travel workouts are shared across ALL client programs.
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Equipment Type *</label>
          <select
            className="px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-orange-400"
            value={equipmentType}
            onChange={(e) => setEquipmentType(e.target.value)}
          >
            <option value="bodyweight">Bodyweight Only</option>
            <option value="hotel_gym">Hotel Gym</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Day Number *</label>
          <select
            className="px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-orange-400"
            value={dayNumber}
            onChange={(e) => setDayNumber(Number(e.target.value))}
          >
            <option value={1}>Day 1</option>
            <option value={2}>Day 2</option>
            <option value={3}>Day 3</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Workout Name (optional)</label>
          <input
            className="px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-orange-400"
            type="text"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            placeholder={`e.g. ${equipLabel} Day ${dayNumber} - Upper Body`}
          />
        </div>

        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            className={`flex-1 py-3.5 px-6 text-[15px] font-bold bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none rounded-[10px] transition-opacity ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}`}
            disabled={loading}
          >
            {loading ? 'Saving...' : `Save ${equipLabel} Day ${dayNumber}`}
          </button>
          <button
            type="button"
            className="py-3.5 px-6 text-[15px] font-semibold bg-transparent text-gray-500 border border-white/[0.12] rounded-[10px] cursor-pointer hover:bg-white/[0.06] transition"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
