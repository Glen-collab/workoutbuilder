export default function WelcomeScreen({ onNewProgram, onManagePrograms }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-5 py-10">
      <div className="bg-white rounded-2xl shadow-lg px-8 py-12 max-w-md w-full text-center">
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
        </div>
      </div>
    </div>
  );
}
