import { useEffect } from 'react';

export default function WelcomeScreen({ onNewProgram, onManagePrograms, onManageTravelWorkouts, onManageVideos, builderUser, onLogout }) {
  // Wake up the backend while the user browses (cold-start mitigation)
  useEffect(() => {
    fetch('/api/load-program.php', { method: 'POST', body: '{}' }).catch(() => {});
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-5 py-10">
      <div className="bg-white rounded-2xl shadow-lg px-8 py-12 max-w-md w-full text-center">
        {builderUser && (
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">{builderUser.first_name} ({builderUser.role})</span>
            {onLogout && <button onClick={onLogout} className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer bg-transparent border-none">Logout</button>}
          </div>
        )}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-3">
          Workout Program Builder
        </h1>
        <p className="text-base text-gray-500 leading-relaxed mb-9">
          Design custom workout programs with blocks, supersets, circuits, and more.
          Build once, train for weeks.
        </p>
        <div className="flex flex-col gap-3.5">
          <button
            className="w-full bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-xl py-3.5 px-7 text-base font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-90"
            onClick={onNewProgram}
          >
            Build New Program
          </button>
          <button
            className="w-full bg-transparent text-[#667eea] border-2 border-[#667eea] rounded-xl py-3 px-7 text-base font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#667eea]/10"
            onClick={onManagePrograms}
          >
            Manage Programs
          </button>
          <button
            className="w-full bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none rounded-xl py-3 px-7 text-base font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-90"
            onClick={onManageTravelWorkouts}
          >
            Travel Workouts
          </button>
          {onManageVideos && (
            <button
              className="w-full bg-transparent text-[#047857] border-2 border-[#10b981] rounded-xl py-3 px-7 text-base font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#10b981]/10"
              onClick={onManageVideos}
            >
              🎬 Exercises &amp; Videos
            </button>
          )}
        </div>
        <a
          href="https://app.bestrongagain.com"
          className="inline-block mt-6 text-sm text-gray-400 hover:text-[#667eea] transition-colors duration-200 no-underline"
        >
          ← Coach Platform
        </a>
      </div>
    </div>
  );
}
