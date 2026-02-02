import { useState } from 'react';

export default function ExerciseList({ exercises, onSelect, onBack, title }) {
  const [previewIdx, setPreviewIdx] = useState(null);

  if (!exercises || exercises.length === 0) {
    return (
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          {onBack && (
            <button className="bg-transparent border-none text-xl cursor-pointer text-[#667eea] px-2 py-1 rounded-md flex items-center hover:bg-gray-100 transition" onClick={onBack}>←</button>
          )}
          <h3 className="text-lg font-bold text-gray-700 m-0">{title || 'Exercises'}</h3>
        </div>
        <p className="text-gray-400 text-center py-5">No exercises found.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-center gap-3 mb-4">
        {onBack && (
          <button
            className="bg-transparent border-none text-xl cursor-pointer text-[#667eea] px-2 py-1 rounded-md flex items-center hover:bg-gray-100 transition"
            onClick={onBack}
          >
            ←
          </button>
        )}
        <h3 className="text-lg font-bold text-gray-700 m-0">{title || 'Exercises'}</h3>
      </div>
      <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
        {exercises.map((exercise, idx) => (
          <div key={exercise.name + idx}>
            <div
              className="flex items-center justify-between py-3.5 px-4 bg-white rounded-[10px] shadow-sm cursor-pointer text-left w-full transition-all duration-150 hover:bg-purple-50 hover:shadow-md"
              style={{ border: 'none' }}
            >
              <div className="flex-1" onClick={() => onSelect(exercise)}>
                <p className="text-[15px] font-semibold text-gray-700 m-0">{exercise.name}</p>
                {exercise.description && (
                  <p className="text-xs text-gray-400 mt-1 mb-0">{exercise.description}</p>
                )}
              </div>
              {exercise.youtube && (
                <button
                  onClick={(e) => { e.stopPropagation(); setPreviewIdx(previewIdx === idx ? null : idx); }}
                  className="border-none rounded-md px-2 py-1 text-[12px] cursor-pointer font-semibold text-white ml-2 shrink-0 transition-colors"
                  style={{ background: previewIdx === idx ? 'linear-gradient(135deg, #1565c0, #42a5f5)' : 'linear-gradient(135deg, #f5851f, #f6a623)' }}
                  title={previewIdx === idx ? 'Hide preview' : 'Preview video'}
                >
                  {previewIdx === idx ? '✖' : '📹'}
                </button>
              )}
            </div>
            {previewIdx === idx && exercise.youtube && (
              <div className="mt-1 mb-1 rounded-lg overflow-hidden bg-black" style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  src={`${exercise.youtube}?preload=metadata`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
