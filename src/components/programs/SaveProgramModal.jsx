import { useState, useEffect } from 'react';
import Modal from '../shared/Modal';

export default function SaveProgramModal({ isOpen, onClose, onSave, loadedProgram, loading, builderUser }) {
  const [programName, setProgramName] = useState('');
  const [programNickname, setProgramNickname] = useState('');
  const [trainerEmail, setTrainerEmail] = useState(builderUser?.email || 'wisco.barbell@gmail.com');
  const [optionalTrainerEmail, setOptionalTrainerEmail] = useState('');
  const [regenerateCode, setRegenerateCode] = useState(false);
  const [desiredCode, setDesiredCode] = useState('');

  const isUpdate = !!loadedProgram;
  const hasOldCodeFormat = isUpdate && loadedProgram.accessCode && loadedProgram.accessCode.includes('-');

  // A chosen code is only valid when blank (random) or exactly 4 digits.
  const codeValid = desiredCode === '' || /^\d{4}$/.test(desiredCode);

  useEffect(() => {
    if (isOpen) {
      setProgramName(loadedProgram?.name || '');
      setProgramNickname(loadedProgram?.nickname || '');
      setRegenerateCode(false);
      setDesiredCode('');
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (e, saveAsNew = false) => {
    e.preventDefault();
    if (!programName.trim()) return;
    if (!codeValid) return;
    // A custom code only applies when creating a record (brand-new save or
    // "Save as New"). Updating an existing program keeps its own code.
    const creatingNew = !isUpdate || saveAsNew;
    onSave({
      programName: programName.trim(),
      programNickname: programNickname.trim(),
      trainerEmail: trainerEmail.trim(),
      optionalTrainerEmail: optionalTrainerEmail.trim(),
      regenerateCode: isUpdate && !saveAsNew ? regenerateCode : false,
      desiredCode: creatingNew ? desiredCode.trim() : '',
      saveAsNew,
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
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Program Title *</label>
          <input
            className="px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-[#667eea]"
            type="text"
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            placeholder="e.g. Youth   or   Ryan Nanna"
            required
          />
          <span className="text-xs text-gray-500">
            The program or client this belongs to. All phases with the SAME title group together — so use a unique title per client (a person's name) or program (e.g. “Youth”). Don’t put the month here.
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">Phase / Month</label>
          <input
            className="px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-[#667eea]"
            type="text"
            value={programNickname}
            onChange={(e) => setProgramNickname(e.target.value)}
            placeholder="e.g. June, July, Phase 1"
          />
          <span className="text-xs text-gray-500">
            Which phase of the title above this is. Shows under the title — e.g. Ryan Nanna → June, July, August.
          </span>
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

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide">
            {isUpdate ? 'Access Code (only for Save as New)' : 'Access Code'}
          </label>
          <input
            className={`px-3.5 py-3 text-[15px] rounded-lg border bg-white/[0.06] text-gray-200 outline-none transition-colors focus:border-[#667eea] ${codeValid ? 'border-white/[0.12]' : 'border-red-500/60'}`}
            type="text"
            inputMode="numeric"
            maxLength={4}
            value={desiredCode}
            onChange={(e) => setDesiredCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
            placeholder="Leave blank for a random code"
          />
          <span className={`text-xs ${codeValid ? 'text-gray-500' : 'text-red-400'}`}>
            {codeValid
              ? 'Pick your own 4-digit code, or leave blank to auto-generate.'
              : 'Code must be exactly 4 digits.'}
          </span>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="flex gap-3">
            <button
              type="submit"
              className={`flex-1 py-3.5 px-6 text-[15px] font-bold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-[10px] transition-opacity ${loading || !programName.trim() || !codeValid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}`}
              disabled={loading || !programName.trim() || !codeValid}
            >
              {loading ? 'Saving...' : isUpdate ? 'Update Program' : 'Save Program'}
            </button>
            <button type="button" className="py-3.5 px-6 text-[15px] font-semibold bg-transparent text-gray-500 border border-white/[0.12] rounded-[10px] cursor-pointer hover:bg-white/[0.06] transition" onClick={onClose}>
              Cancel
            </button>
          </div>
          {isUpdate && (
            <button
              type="button"
              onClick={(e) => handleSubmit(e, true)}
              className={`w-full py-3 px-6 text-[14px] font-semibold bg-gradient-to-br from-[#f59e0b] to-[#ef4444] text-white border-none rounded-[10px] transition-opacity ${loading || !programName.trim() || !codeValid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}`}
              disabled={loading || !programName.trim() || !codeValid}
            >
              {loading ? 'Saving...' : 'Save as New Program'}
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
}
