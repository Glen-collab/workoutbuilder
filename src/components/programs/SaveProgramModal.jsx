import { useState, useEffect } from 'react';
import Modal from '../shared/Modal';

export default function SaveProgramModal({ isOpen, onClose, onSave, loadedProgram, loading }) {
  const [programName, setProgramName] = useState('');
  const [programNickname, setProgramNickname] = useState('');
  const [trainerEmail, setTrainerEmail] = useState('wisco.barbell@gmail.com');
  const [optionalTrainerEmail, setOptionalTrainerEmail] = useState('');
  const [regenerateCode, setRegenerateCode] = useState(false);

  const isUpdate = !!loadedProgram;
  const hasOldCodeFormat = isUpdate && loadedProgram.accessCode && loadedProgram.accessCode.includes('-');

  useEffect(() => {
    if (isOpen && loadedProgram) {
      setProgramName(loadedProgram.name || '');
      setRegenerateCode(false); // Reset on open
    }
  }, [isOpen, loadedProgram]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!programName.trim()) return;
    onSave({
      programName: programName.trim(),
      programNickname: programNickname.trim(),
      trainerEmail: trainerEmail.trim(),
      optionalTrainerEmail: optionalTrainerEmail.trim(),
      regenerateCode: isUpdate ? regenerateCode : false,
    });
  };

  const title = isUpdate ? 'Update Program' : 'Save Program';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="480px">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {isUpdate && (
          <div className="p-3 rounded-lg bg-[#667eea]/15 border border-[#667eea]/30 text-sm text-[#a0b4f8]">
            <div>
              Updating: <span className="font-bold text-[#c0cfff]">{loadedProgram.name}</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Access Code: {loadedProgram.accessCode}
            </div>
            {hasOldCodeFormat && (
              <label className="flex items-center gap-2 mt-2 cursor-pointer text-xs text-amber-400">
                <input
                  type="checkbox"
                  checked={regenerateCode}
                  onChange={(e) => setRegenerateCode(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-[#667eea] focus:ring-[#667eea]"
                />
                Generate new 4-digit access code
              </label>
            )}
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Program Name *</label>
          <input
            className="px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-[#667eea]"
            type="text"
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            placeholder="e.g. Summer Strength Phase 1"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Program Nickname</label>
          <input
            className="px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-[#667eea]"
            type="text"
            value={programNickname}
            onChange={(e) => setProgramNickname(e.target.value)}
            placeholder="Optional short name"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Trainer Email</label>
          <input
            className="px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-[#667eea]"
            type="email"
            value={trainerEmail}
            onChange={(e) => setTrainerEmail(e.target.value)}
            placeholder="trainer@email.com"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Optional CC Email</label>
          <input
            className="px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-[#667eea]"
            type="email"
            value={optionalTrainerEmail}
            onChange={(e) => setOptionalTrainerEmail(e.target.value)}
            placeholder="cc@email.com"
          />
        </div>

        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            className={`flex-1 py-3.5 px-6 text-[15px] font-bold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-[10px] transition-opacity ${loading || !programName.trim() ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}`}
            disabled={loading || !programName.trim()}
          >
            {loading ? 'Saving...' : isUpdate ? 'Update Program' : 'Save Program'}
          </button>
          <button type="button" className="py-3.5 px-6 text-[15px] font-semibold bg-transparent text-gray-500 border border-white/[0.12] rounded-[10px] cursor-pointer hover:bg-white/[0.06] transition" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
