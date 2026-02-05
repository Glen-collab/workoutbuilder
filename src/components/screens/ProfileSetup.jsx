import { useState } from 'react';

const GOALS = [
  'Strength',
  'Hypertrophy',
  'Weight Loss',
  'Sports Performance',
  'General Fitness',
  'First Responder',
];

const EXPERIENCE_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export default function ProfileSetup({ onComplete, onBack }) {
  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState('');
  const [goal, setGoal] = useState('Strength');
  const [experience, setExperience] = useState('Intermediate');
  const [daysPerWeek, setDaysPerWeek] = useState(4);
  const [totalWeeks, setTotalWeeks] = useState(4);

  const handleSubmit = () => {
    onComplete({
      gender,
      age: parseInt(age, 10) || 0,
      goal,
      experience,
      daysPerWeek: parseInt(daysPerWeek, 10) || 4,
      totalWeeks: parseInt(totalWeeks, 10) || 4,
    });
  };

  return (
    <div className="flex flex-col items-center px-5 py-10 min-h-[80vh]">
      <div className="bg-white rounded-2xl shadow-lg px-8 py-9 max-w-lg w-full">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-2">
          Profile Setup
        </h2>
        <p className="text-sm text-gray-400 mb-7">Tell us about yourself to customize your program.</p>

        {/* Gender */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Gender</label>
          <div className="flex gap-2.5 flex-wrap">
            {['Male', 'Female', 'Other'].map((g) => (
              <button
                key={g}
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  gender === g
                    ? 'border-[#667eea] bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white'
                    : 'border-gray-300 bg-white text-gray-500 hover:border-gray-400'
                }`}
                onClick={() => setGender(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Age */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Age</label>
          <input
            type="number"
            className="w-full px-3.5 py-2.5 text-[15px] border-[1.5px] border-gray-300 rounded-lg outline-none transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="e.g. 30"
            min="1"
            max="120"
          />
        </div>

        {/* Goal */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Goal</label>
          <select
            className="w-full px-3.5 py-2.5 text-[15px] border-[1.5px] border-gray-300 rounded-lg outline-none bg-white cursor-pointer focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            {GOALS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        {/* Experience */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Experience Level</label>
          <div className="flex gap-2.5 flex-wrap">
            {EXPERIENCE_LEVELS.map((lvl) => (
              <button
                key={lvl}
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  experience === lvl
                    ? 'border-[#667eea] bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white'
                    : 'border-gray-300 bg-white text-gray-500 hover:border-gray-400'
                }`}
                onClick={() => setExperience(lvl)}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Days per week & Total weeks */}
        <div className="flex gap-4">
          <div className="flex-1 mb-5">
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Days Per Week</label>
            <input
              type="number"
              className="w-full px-3.5 py-2.5 text-[15px] border-[1.5px] border-gray-300 rounded-lg outline-none transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(e.target.value)}
              min="1"
              max="7"
            />
          </div>
          <div className="flex-1 mb-5">
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Total Weeks</label>
            <input
              type="number"
              className="w-full px-3.5 py-2.5 text-[15px] border-[1.5px] border-gray-300 rounded-lg outline-none transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={totalWeeks}
              onChange={(e) => setTotalWeeks(e.target.value)}
              min="1"
              max="52"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-7">
          <button
            className="shrink-0 bg-transparent text-[#667eea] border-2 border-[#667eea] rounded-xl py-3 px-6 text-[15px] font-semibold cursor-pointer hover:bg-[#667eea]/10 transition-colors duration-200"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="flex-1 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-xl py-3.5 px-7 text-base font-semibold cursor-pointer hover:opacity-90 transition-opacity duration-200"
            onClick={handleSubmit}
          >
            Start Building
          </button>
        </div>
      </div>
    </div>
  );
}
