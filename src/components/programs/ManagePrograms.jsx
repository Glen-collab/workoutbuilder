import { useState } from 'react';
import Modal from '../shared/Modal';

export default function ManagePrograms({ isOpen, onClose, onLoadProgram, apiHook }) {
  const [email, setEmail] = useState('wisco.barbell@gmail.com');
  const [programs, setPrograms] = useState([]);
  const [searched, setSearched] = useState(false);

  const { listPrograms, loading, error } = apiHook;

  const handleSearch = async () => {
    if (!email.trim()) return;
    try {
      const result = await listPrograms(email.trim());
      setPrograms(result?.data?.programs || result?.programs || []);
      setSearched(true);
    } catch {
      setSearched(true);
      setPrograms([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Manage Programs" maxWidth="560px">
      <div className="flex gap-2.5 mb-5">
        <input
          className="flex-1 px-3.5 py-3 text-[15px] rounded-lg border border-white/[0.12] bg-white/[0.06] text-gray-200 outline-none focus:border-[#667eea] transition-colors"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Trainer email address"
          onKeyDown={handleKeyDown}
        />
        <button
          className={`py-3 px-5 text-sm font-bold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg whitespace-nowrap transition-opacity ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}`}
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <div className="px-4 py-3 rounded-lg bg-red-500/15 border border-red-500/30 text-red-300 text-[13px] mb-4">{error}</div>}

      {loading && <div className="text-center py-8 text-gray-500 text-sm">Loading programs...</div>}

      {!loading && searched && programs.length === 0 && (
        <div className="text-center text-gray-500 py-8 text-sm">No programs found for this email.</div>
      )}

      {!loading && programs.length > 0 && (
        <div className="flex flex-col gap-2.5">
          {programs.map((program) => (
            <div key={program.id || program.accessCode} className="flex items-center justify-between py-3.5 px-4 rounded-[10px] bg-white/[0.04] border border-white/[0.08]">
              <div className="flex-1">
                <div className="text-[15px] font-bold text-gray-200 mb-1">{program.name}</div>
                <div className="text-xs text-gray-500 flex gap-3">
                  <span>Code: {program.accessCode}</span>
                  {program.createdAt && (
                    <span>{new Date(program.createdAt).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
              <button className="py-2 px-[18px] text-[13px] font-bold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg cursor-pointer shrink-0 hover:opacity-90 transition-opacity" onClick={() => onLoadProgram(program)}>
                Load
              </button>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}
