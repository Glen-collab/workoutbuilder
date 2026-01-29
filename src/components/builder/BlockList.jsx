import BlockCard from './BlockCard';

export default function BlockList({
  blocks,
  onAddBlock,
  onDeleteBlock,
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
  if (!blocks || blocks.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <div className="text-center py-15 px-5 bg-white rounded-[14px] shadow-md">
          <div className="text-5xl mb-3">{'\ud83c\udfcb\ufe0f'}</div>
          <h3 className="text-lg font-semibold text-gray-600 mb-1.5">No blocks yet</h3>
          <p className="text-sm text-gray-400 m-0">Add your first block to start building the workout.</p>
        </div>
        <button
          className="flex items-center justify-center gap-2 w-full py-3.5 text-[15px] font-semibold bg-white text-[#667eea] border-2 border-dashed border-gray-300 rounded-xl cursor-pointer transition-colors duration-200 hover:border-[#667eea]"
          onClick={onAddBlock}
        >
          + Add Block
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, index) => (
        <BlockCard
          key={block.id || index}
          block={block}
          onDelete={onDeleteBlock}
          onToggleCollapse={onToggleCollapse}
          onInsertAbove={onInsertAbove}
          onInsertBelow={onInsertBelow}
          onUpdateBlock={onUpdateBlock}
          onAddExercise={onAddExercise}
          onRemoveExercise={onRemoveExercise}
          onUpdateExercise={onUpdateExercise}
          onUpdateSet={onUpdateSet}
          onAddSet={onAddSet}
          onRemoveSet={onRemoveSet}
          onDuplicateSet={onDuplicateSet}
          mainMaxes={mainMaxes}
        />
      ))}
      <button
        className="flex items-center justify-center gap-2 w-full py-3.5 text-[15px] font-semibold bg-white text-[#667eea] border-2 border-dashed border-gray-300 rounded-xl cursor-pointer transition-colors duration-200 hover:border-[#667eea]"
        onClick={onAddBlock}
      >
        + Add Block
      </button>
    </div>
  );
}
