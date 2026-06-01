import { useState } from 'react';
import WeekDaySelector from './WeekDaySelector';
import BlockList from './BlockList';
import PercentageMaxInputs from '../shared/PercentageMaxInputs';
import DailySummary from './DailySummary';
import SmartImportModal from './SmartImportModal';

export default function BuilderScreen({
  workoutState,
  onBack,
  onSave,
  onManage,
  overrideContext,
  overrideSaveStatus,
  onRevertOverride,
  onGoToDashboard,
  onExitOverrideMode,
  onSaveTravel,
  onProgressions,
  onVolume,
}) {
  const {
    currentWeek,
    currentDay,
    totalWeeks,
    daysPerWeek,
    blocks,
    mainMaxes,
    setMainMaxes,
    allWorkouts,
    switchDay,
    switchWeek,
    copyWeek,
    copyAllWeeks,
    copyDay,
    insertWeek,
    addWeeks,
    setDaysPerWeek,
    addBlock,
    importBlocks,
    importMultiDay,
    deleteBlock,
    toggleCollapse,
    insertAbove,
    insertBelow,
    updateBlock,
    addExercise,
    replaceExercise,
    removeExercise,
    updateExercise,
    updateSet,
    addSet,
    removeSet,
    duplicateSet,
  } = workoutState;

  const [smartImportOpen, setSmartImportOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-5">
      {/* Override mode banner */}
      {overrideContext && (
        <div className="flex flex-col gap-0.5 bg-gradient-to-br from-yellow-300 to-yellow-400 text-amber-900 px-4 py-3 rounded-xl mb-4 text-sm">
          <span className="font-semibold">Override Mode</span>
          <span className="text-[13px]">
            Editing overrides for <strong>{overrideContext.email}</strong> (code: {overrideContext.accessCode})
          </span>
          <span className="text-xs opacity-80">
            Changes save per week/day — base program is not modified
          </span>
        </div>
      )}

      {/* Override save status toast */}
      {overrideSaveStatus === 'saved' && (
        <div className="bg-green-500 text-white px-4 py-2.5 rounded-lg mb-3 text-sm font-semibold text-center">
          Override saved successfully!
        </div>
      )}
      {overrideSaveStatus === 'error' && (
        <div className="bg-red-600 text-white px-4 py-2.5 rounded-lg mb-3 text-sm font-semibold text-center">
          Failed to save override. Please try again.
        </div>
      )}

      <div className="mb-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start">
          <div>
            <h2 className="text-[22px] font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-1">
              Workout Builder
            </h2>
            <p className="text-[13px] text-gray-400 m-0">
              Week {currentWeek} &middot; Day {currentDay}
            </p>
          </div>
          {/* Equal-sized 2x2 action grid (full width on mobile) */}
          <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSmartImportOpen(true)}
              className="w-full px-3 py-2 text-[13px] font-semibold text-center bg-emerald-500 text-white border-none rounded-lg cursor-pointer whitespace-nowrap hover:bg-emerald-600 transition-colors duration-200"
              title="Paste a workout from anywhere — Claude maps it to your library"
            >
              ✨ Smart Import
            </button>
            {onProgressions && (
              <button
                onClick={onProgressions}
                className="w-full px-3 py-2 text-[13px] font-semibold text-center bg-gray-800 text-white border-none rounded-lg cursor-pointer whitespace-nowrap hover:bg-gray-700 transition-colors duration-200"
              >
                Progressions
              </button>
            )}
            {onVolume && (
              <button
                onClick={onVolume}
                className="w-full px-3 py-2 text-[13px] font-semibold text-center bg-teal-700 text-white border-none rounded-lg cursor-pointer whitespace-nowrap hover:bg-teal-800 transition-colors duration-200"
              >
                Volume
              </button>
            )}
            {onGoToDashboard && (
              <button
                onClick={onGoToDashboard}
                className="w-full px-3 py-2 text-[13px] font-semibold text-center bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg cursor-pointer whitespace-nowrap hover:opacity-90 transition-opacity duration-200"
              >
                Trainer Dashboard
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Editable Main Maxes */}
      <div className="mb-4">
        <PercentageMaxInputs mainMaxes={mainMaxes} onUpdate={setMainMaxes} />
      </div>

      <WeekDaySelector
        currentWeek={currentWeek}
        currentDay={currentDay}
        totalWeeks={totalWeeks}
        daysPerWeek={daysPerWeek}
        onSwitchDay={switchDay}
        onSwitchWeek={switchWeek}
        onCopyWeek={copyWeek}
        onCopyAllWeeks={copyAllWeeks}
        onCopyDay={copyDay}
        onInsertWeek={insertWeek}
        onAddWeeks={addWeeks}
        onAddDay={() => setDaysPerWeek(daysPerWeek + 1)}
        onRemoveDay={daysPerWeek > 1 ? () => { if (confirm(`Remove Day ${daysPerWeek}? Any workouts on that day will be hidden.`)) setDaysPerWeek(daysPerWeek - 1); } : null}
      />

      <BlockList
        blocks={blocks}
        onAddBlock={addBlock}
        onDeleteBlock={deleteBlock}
        onToggleCollapse={toggleCollapse}
        onInsertAbove={insertAbove}
        onInsertBelow={insertBelow}
        onUpdateBlock={updateBlock}
        onAddExercise={addExercise}
        onReplaceExercise={replaceExercise}
        onRemoveExercise={removeExercise}
        onUpdateExercise={updateExercise}
        onUpdateSet={updateSet}
        onAddSet={addSet}
        onRemoveSet={removeSet}
        onDuplicateSet={duplicateSet}
        mainMaxes={mainMaxes}
      />

      <DailySummary
        blocks={blocks}
        mainMaxes={mainMaxes}
        currentDay={currentDay}
        currentWeek={currentWeek}
        daysPerWeek={daysPerWeek}
        totalWeeks={totalWeeks}
        allWorkouts={allWorkouts}
      />

      <div className="flex gap-3 flex-wrap mt-7 pt-5 border-t border-gray-200">
        {overrideContext ? (
          <>
            {/* Save override — stays in builder so you can keep editing */}
            <button
              className="flex-1 min-w-[140px] w-full sm:w-auto py-3.5 px-6 text-[15px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-xl cursor-pointer hover:opacity-90 transition-opacity duration-200"
              onClick={onSave}
            >
              Save Override (W{currentWeek} D{currentDay})
            </button>
            {onRevertOverride && (
              <button
                className="w-full sm:w-auto py-3.5 px-6 text-[15px] font-semibold bg-transparent text-red-500 border-2 border-red-500 rounded-xl cursor-pointer hover:bg-red-50 transition-colors duration-200"
                onClick={onRevertOverride}
              >
                Revert to Base
              </button>
            )}
            {/* Opens dashboard in new tab so builder stays alive */}
            <button
              className="w-full sm:w-auto py-3.5 px-6 text-[15px] font-semibold bg-transparent text-[#667eea] border-2 border-[#667eea] rounded-xl cursor-pointer hover:bg-[#667eea]/10 transition-colors duration-200"
              onClick={onGoToDashboard}
            >
              Open Dashboard
            </button>
            {/* Exit override mode — go back to normal builder */}
            {onExitOverrideMode && (
              <button
                className="w-full sm:w-auto py-3.5 px-6 text-[15px] font-semibold bg-transparent text-gray-500 border-2 border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={onExitOverrideMode}
              >
                Exit Override Mode
              </button>
            )}
          </>
        ) : (
          <>
            <button
              className="flex-1 min-w-[140px] w-full sm:w-auto py-3.5 px-6 text-[15px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-xl cursor-pointer hover:opacity-90 transition-opacity duration-200"
              onClick={onSave}
            >
              Save Program
            </button>
            {onSaveTravel && (
              <button
                className="w-full sm:w-auto py-3.5 px-6 text-[15px] font-semibold bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none rounded-xl cursor-pointer hover:opacity-90 transition-opacity duration-200"
                onClick={onSaveTravel}
              >
                Save as Travel Workout
              </button>
            )}
            {onManage && (
              <button
                className="w-full sm:w-auto py-3.5 px-6 text-[15px] font-semibold bg-transparent text-[#667eea] border-2 border-[#667eea] rounded-xl cursor-pointer hover:bg-[#667eea]/10 transition-colors duration-200"
                onClick={onManage}
              >
                Manage Programs
              </button>
            )}
            <button
              className="w-full sm:w-auto py-3.5 px-6 text-[15px] font-semibold bg-transparent text-gray-500 border-2 border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              onClick={onBack}
            >
              Back
            </button>
          </>
        )}
      </div>

      <SmartImportModal
        isOpen={smartImportOpen}
        onClose={() => setSmartImportOpen(false)}
        currentMaxes={mainMaxes}
        currentWeek={currentWeek}
        currentDay={currentDay}
        onImportSingle={(blocks, mode) => importBlocks(blocks, mode)}
        onImportMulti={(days, startWeek, startDay, mode) => importMultiDay(days, startWeek, startDay, mode)}
      />
    </div>
  );
}
