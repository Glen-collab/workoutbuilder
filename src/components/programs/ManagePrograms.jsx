import { useState, useEffect, useMemo } from 'react';
import Modal from '../shared/Modal';

export default function ManagePrograms({ isOpen, onClose, onLoadProgram, apiHook, builderUser }) {
  const [email, setEmail] = useState(builderUser?.email || 'wisco.barbell@gmail.com');
  const [programs, setPrograms] = useState([]);
  const [searched, setSearched] = useState(false);
  const [sortBy, setSortBy] = useState('recent');
  const [expandedGroups, setExpandedGroups] = useState({});

  const { listPrograms, deleteProgram, loading, error } = apiHook;
  const [deletingCode, setDeletingCode] = useState(null);

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

  const handleDelete = async (program) => {
    const label = program.name || program.accessCode;
    if (!window.confirm(
      `Delete "${label}" (code ${program.accessCode})?\n\nThis removes it from your programs list. Clients using this code will lose access.`
    )) return;
    setDeletingCode(program.accessCode);
    try {
      await deleteProgram(program.accessCode, email.trim());
      // Drop it locally so the list updates without a full re-fetch.
      setPrograms((prev) => prev.filter((p) => p.accessCode !== program.accessCode));
    } catch (err) {
      alert('Delete failed: ' + (err.message || 'Unknown error'));
    } finally {
      setDeletingCode(null);
    }
  };

  // Re-search every time the modal opens so updates show up immediately.
  useEffect(() => {
    if (isOpen && builderUser?.email) {
      handleSearch();
    }
  }, [isOpen]);

  // After a fresh fetch, auto-expand the most-recently-touched multi-phase
  // group so a just-updated phase is visible without an extra click.
  useEffect(() => {
    if (programs.length === 0) return;
    const map = new Map();
    for (const p of programs) {
      const key = (p.name || '').trim().toLowerCase() || '(untitled)';
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(p);
    }
    let topKey = null;
    let topTime = -Infinity;
    for (const [key, items] of map) {
      if (items.length < 2) continue;
      const t = Math.max(
        ...items.map((p) => new Date(p.updatedAt || p.createdAt || 0).getTime())
      );
      if (t > topTime) {
        topTime = t;
        topKey = key;
      }
    }
    if (topKey) setExpandedGroups((prev) => ({ ...prev, [topKey]: true }));
  }, [programs]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  // Group programs by normalized name. Phases inside each group sort chronologically
  // (oldest first) so e.g. January -> February -> March reads in phase order.
  const grouped = useMemo(() => {
    const map = new Map();
    for (const p of programs) {
      const key = (p.name || '').trim().toLowerCase() || '(untitled)';
      if (!map.has(key)) map.set(key, { key, name: p.name || '(untitled)', items: [] });
      map.get(key).items.push(p);
    }
    const groups = Array.from(map.values()).map((g) => ({
      ...g,
      items: [...g.items].sort(
        (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0)
      ),
    }));

    const recencyOf = (g) =>
      Math.max(...g.items.map((p) => new Date(p.updatedAt || p.createdAt || 0).getTime()));
    const oldestOf = (g) =>
      Math.min(...g.items.map((p) => new Date(p.createdAt || 0).getTime()));

    if (sortBy === 'name') groups.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'oldest') groups.sort((a, b) => oldestOf(a) - oldestOf(b));
    else groups.sort((a, b) => recencyOf(b) - recencyOf(a));

    return groups;
  }, [programs, sortBy]);

  const toggleGroup = (key) =>
    setExpandedGroups((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Manage Programs" maxWidth="560px">
      <div className="flex gap-2.5 mb-3">
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
      {programs.length > 0 && (
        <div className="flex gap-2 mb-4">
          {['recent', 'name', 'oldest'].map((s) => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                sortBy === s
                  ? 'bg-[#667eea] text-white border-[#667eea]'
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-[#667eea]'
              }`}
            >
              {s === 'recent' ? 'Recent' : s === 'name' ? 'A-Z' : 'Oldest'}
            </button>
          ))}
          <span className="text-xs text-gray-500 self-center ml-auto">
            {programs.length} {programs.length === 1 ? 'program' : 'programs'}
          </span>
        </div>
      )}

      {error && <div className="px-4 py-3 rounded-lg bg-red-500/15 border border-red-500/30 text-red-300 text-[13px] mb-4">{error}</div>}

      {loading && <div className="text-center py-8 text-gray-500 text-sm">Loading programs...</div>}

      {!loading && searched && programs.length === 0 && (
        <div className="text-center text-gray-500 py-8 text-sm">No programs found for this email.</div>
      )}

      {!loading && grouped.length > 0 && (
        <div className="flex flex-col gap-2.5">
          {grouped.map((group) => {
            // Single-phase groups render flat (no folder chrome).
            if (group.items.length === 1) {
              return (
                <PhaseRow
                  key={group.items[0].id || group.items[0].accessCode}
                  program={group.items[0]}
                  onLoadProgram={onLoadProgram}
                  onDelete={handleDelete}
                  deleting={deletingCode === group.items[0].accessCode}
                />
              );
            }

            const isExpanded = !!expandedGroups[group.key];
            return (
              <div key={group.key}>
                <button
                  onClick={() => toggleGroup(group.key)}
                  className="w-full flex items-center justify-between py-3.5 px-4 rounded-[10px] bg-white/[0.06] border border-white/[0.10] hover:bg-white/[0.09] transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-gray-400 text-[11px] w-3 shrink-0">{isExpanded ? '▾' : '▸'}</span>
                    <span className="text-[15px] font-bold text-gray-200 truncate">{group.name}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#a78bfa] bg-[#667eea]/15 border border-[#667eea]/30 rounded-full px-2 py-0.5 shrink-0">
                    {group.items.length} phases
                  </span>
                </button>
                {isExpanded && (
                  <div className="flex flex-col gap-1.5 mt-1.5 ml-3 pl-3 border-l border-white/[0.08]">
                    {group.items.map((program) => (
                      <PhaseRow
                        key={program.id || program.accessCode}
                        program={program}
                        onLoadProgram={onLoadProgram}
                        onDelete={handleDelete}
                        deleting={deletingCode === program.accessCode}
                        compact
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </Modal>
  );
}

function PhaseRow({ program, onLoadProgram, onDelete, deleting = false, compact = false }) {
  const dateStr = program.createdAt ? new Date(program.createdAt).toLocaleDateString() : null;
  const primary = compact
    ? (program.nickname || (dateStr ? `Saved ${dateStr}` : 'Unlabeled phase'))
    : program.name;

  return (
    <div className="flex items-center justify-between py-3 px-4 rounded-[10px] bg-white/[0.04] border border-white/[0.08]">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap mb-1">
          <span className={compact ? 'text-[14px] font-semibold text-gray-200' : 'text-[15px] font-bold text-gray-200'}>
            {primary}
          </span>
          {!compact && program.nickname && (
            <span className="text-[13px] font-medium text-[#a78bfa]">· {program.nickname}</span>
          )}
        </div>
        <div className="text-xs text-gray-500 flex gap-3">
          <span>Code: {program.accessCode}</span>
          {dateStr && <span>{dateStr}</span>}
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          className="py-2 px-[18px] text-[13px] font-bold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => onLoadProgram(program)}
        >
          Load
        </button>
        {onDelete && (
          <button
            className={`py-2 px-3 text-[13px] font-bold border rounded-lg transition-colors ${deleting ? 'opacity-50 cursor-not-allowed border-white/10 text-gray-500' : 'cursor-pointer border-red-500/40 text-red-400 hover:bg-red-500/15'}`}
            onClick={() => onDelete(program)}
            disabled={deleting}
            title="Delete program"
          >
            {deleting ? '…' : 'Delete'}
          </button>
        )}
      </div>
    </div>
  );
}
