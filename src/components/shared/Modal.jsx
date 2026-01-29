import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, children, maxWidth = '600px' }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[10000] p-5" onClick={onClose}>
      <div
        className="bg-[#1e1e2f] rounded-xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-white/[0.08]"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-[#6c5ce7] to-[#4a90d9] px-5 py-4 flex items-center justify-between rounded-t-xl">
          <h2 className="text-white text-lg font-bold m-0">{title}</h2>
          <button className="bg-white/15 border-none text-white text-xl w-8 h-8 rounded-lg cursor-pointer flex items-center justify-center leading-none hover:bg-white/25 transition" onClick={onClose} title="Close">
            &times;
          </button>
        </div>
        <div className="p-5 overflow-y-auto flex-1 text-gray-200">{children}</div>
      </div>
    </div>
  );
}
