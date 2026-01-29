import React, { useEffect } from 'react';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10000,
  padding: '20px',
};

const containerStyle = (maxWidth) => ({
  background: '#1e1e2f',
  borderRadius: '12px',
  width: '100%',
  maxWidth,
  maxHeight: '90vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
});

const headerStyle = {
  background: 'linear-gradient(135deg, #6c5ce7, #4a90d9)',
  padding: '16px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '12px 12px 0 0',
};

const titleStyle = {
  color: '#fff',
  fontSize: '18px',
  fontWeight: '700',
  margin: 0,
};

const closeBtnStyle = {
  background: 'rgba(255, 255, 255, 0.15)',
  border: 'none',
  color: '#fff',
  fontSize: '20px',
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
};

const bodyStyle = {
  padding: '20px',
  overflowY: 'auto',
  flex: 1,
  color: '#e0e0e0',
};

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
    <div style={overlayStyle} onClick={onClose}>
      <div style={containerStyle(maxWidth)} onClick={(e) => e.stopPropagation()}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>{title}</h2>
          <button style={closeBtnStyle} onClick={onClose} title="Close">
            &times;
          </button>
        </div>
        <div style={bodyStyle}>{children}</div>
      </div>
    </div>
  );
}
