import { useState, useEffect } from 'react';
import Modal from '../shared/Modal';

export default function ManageTravelWorkouts({ isOpen, onClose, onLoadWorkout, apiHook }) {
  const [workouts, setWorkouts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [deleting, setDeleting] = useState(null);

  const { getTravelWorkouts, deleteTravelWorkout, loading } = apiHook;

  useEffect(() => {
    if (isOpen) {
      setLoaded(false);
      getTravelWorkouts('wisco.barbell@gmail.com')
        .then((result) => {
          // API returns array directly in result.data, or wrapped in result.data.workouts
          const list = Array.isArray(result?.data) ? result.data : (result?.data?.workouts || []);
          setWorkouts(list);
          setLoaded(true);
        })
        .catch(() => {
          setWorkouts([]);
          setLoaded(true);
        });
    }
  }, [isOpen, getTravelWorkouts]);

  const handleDelete = async (equipmentType, dayNumber) => {
    const key = `${equipmentType}-${dayNumber}`;
    if (deleting === key) return;
    setDeleting(key);
    try {
      await deleteTravelWorkout(equipmentType, dayNumber);
      setWorkouts((prev) => prev.filter(
        (w) => !(w.equipment_type === equipmentType && w.day_number === dayNumber)
      ));
    } catch (err) {
      console.error('Delete travel workout failed:', err);
    }
    setDeleting(null);
  };

  // Group workouts by equipment type
  const bodyweight = workouts.filter((w) => w.equipment_type === 'bodyweight').sort((a, b) => a.day_number - b.day_number);
  const hotelGym = workouts.filter((w) => w.equipment_type === 'hotel_gym').sort((a, b) => a.day_number - b.day_number);

  const renderGroup = (title, items) => {
    if (items.length === 0) return null;
    return (
      <div className="mb-5">
        <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wide mb-2">{title}</h3>
        <div className="flex flex-col gap-2">
          {items.map((w) => {
            const deleteKey = `${w.equipment_type}-${w.day_number}`;
            return (
              <div key={w.id || deleteKey} className="flex items-center justify-between py-3 px-4 rounded-[10px] bg-white/[0.04] border border-white/[0.08]">
                <div className="flex-1">
                  <div className="text-[15px] font-bold text-gray-200 mb-0.5">
                    Day {w.day_number}{w.workout_name ? ` — ${w.workout_name}` : ''}
                  </div>
                  <div className="text-xs text-gray-500">
                    {Array.isArray(w.workout_data) ? `${w.workout_data.length} block(s)` : ''}
                    {w.created_at && ` | ${new Date(w.created_at).toLocaleDateString()}`}
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    className="py-1.5 px-3.5 text-[12px] font-bold bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => onLoadWorkout(w)}
                  >
                    Load
                  </button>
                  <button
                    className={`py-1.5 px-3.5 text-[12px] font-bold bg-transparent text-red-400 border border-red-400/40 rounded-lg transition-opacity ${deleting === deleteKey ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-red-500/10'}`}
                    onClick={() => handleDelete(w.equipment_type, w.day_number)}
                    disabled={deleting === deleteKey}
                  >
                    {deleting === deleteKey ? '...' : 'Delete'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Travel Workouts" maxWidth="520px">
      {loading && !loaded && (
        <div className="text-center py-8 text-gray-500 text-sm">Loading travel workouts...</div>
      )}

      {loaded && workouts.length === 0 && (
        <div className="text-center py-8 text-gray-500 text-sm">
          No travel workouts saved yet. Build a workout and use "Save as Travel Workout" to add one.
        </div>
      )}

      {loaded && workouts.length > 0 && (
        <>
          {renderGroup('Bodyweight', bodyweight)}
          {renderGroup('Hotel Gym', hotelGym)}
        </>
      )}
    </Modal>
  );
}
