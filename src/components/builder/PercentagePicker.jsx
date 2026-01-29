import React, { useState, useRef, useEffect } from 'react';

const TENS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ONES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const DECIMALS = [0, 5];

const ITEM_HEIGHT = 48;
const VISIBLE_ITEMS = 5;
const PICKER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

function parsePercentage(pct) {
  const val = pct || 70;
  const tens = Math.floor(val / 10);
  const ones = Math.floor(val % 10);
  const dec = Math.round((val % 1) * 10);
  return {
    tens: Math.max(1, Math.min(10, tens)),
    ones: Math.max(0, Math.min(9, ones)),
    decimal: dec === 5 ? 5 : 0,
  };
}

function buildPercentage(tens, ones, decimal) {
  return tens * 10 + ones + decimal / 10;
}

function PickerColumn({ items, selected, onChange, label }) {
  const listRef = useRef(null);
  const selectedIndex = items.indexOf(selected);

  useEffect(() => {
    if (listRef.current && selectedIndex >= 0) {
      listRef.current.scrollTop = selectedIndex * ITEM_HEIGHT;
    }
  }, []);

  const handleScroll = () => {
    if (!listRef.current) return;
    const scrollTop = listRef.current.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    if (items[clamped] !== selected) {
      onChange(items[clamped]);
    }
  };

  const handleItemClick = (item, index) => {
    onChange(item);
    if (listRef.current) {
      listRef.current.scrollTo({ top: index * ITEM_HEIGHT, behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.column}>
      <div style={styles.columnLabel}>{label}</div>
      <div style={styles.pickerWrapper}>
        <div style={styles.selectionHighlight} />
        <div
          ref={listRef}
          style={styles.scrollList}
          onScroll={handleScroll}
        >
          {/* Top padding so first item can center */}
          <div style={{ height: ITEM_HEIGHT * 2 }} />
          {items.map((item, index) => {
            const isSelected = item === selected;
            return (
              <div
                key={item}
                onClick={() => handleItemClick(item, index)}
                style={{
                  ...styles.item,
                  ...(isSelected ? styles.itemSelected : {}),
                }}
              >
                {String(item)}
              </div>
            );
          })}
          {/* Bottom padding so last item can center */}
          <div style={{ height: ITEM_HEIGHT * 2 }} />
        </div>
      </div>
    </div>
  );
}

export default function PercentagePicker({ isOpen, currentPercentage, onSelect, onClose }) {
  const parsed = parsePercentage(currentPercentage);
  const [tens, setTens] = useState(parsed.tens);
  const [ones, setOnes] = useState(parsed.ones);
  const [decimal, setDecimal] = useState(parsed.decimal);

  useEffect(() => {
    if (isOpen) {
      const p = parsePercentage(currentPercentage);
      setTens(p.tens);
      setOnes(p.ones);
      setDecimal(p.decimal);
    }
  }, [isOpen, currentPercentage]);

  if (!isOpen) return null;

  const previewValue = buildPercentage(tens, ones, decimal);

  const handleConfirm = () => {
    onSelect(previewValue);
  };

  // Quick preset buttons
  const quickPresets = [40, 50, 60, 65, 70, 75, 80, 85, 90, 95];

  const handleQuickSelect = (pct) => {
    const p = parsePercentage(pct);
    setTens(p.tens);
    setOnes(p.ones);
    setDecimal(p.decimal);
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.headerTitle}>Set Percentage</span>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Preview */}
        <div style={styles.preview}>
          <span style={styles.previewValue}>{previewValue}%</span>
        </div>

        {/* Quick Presets */}
        <div style={styles.quickRow}>
          {quickPresets.map((pct) => (
            <button
              key={pct}
              style={{
                ...styles.quickBtn,
                ...(previewValue === pct ? styles.quickBtnActive : {}),
              }}
              onClick={() => handleQuickSelect(pct)}
            >
              {pct}%
            </button>
          ))}
        </div>

        {/* Ticker Columns */}
        <div style={styles.pickerRow}>
          <PickerColumn items={TENS} selected={tens} onChange={setTens} label="Tens" />
          <PickerColumn items={ONES} selected={ones} onChange={setOnes} label="Ones" />
          <div style={styles.dot}>.</div>
          <PickerColumn items={DECIMALS} selected={decimal} onChange={setDecimal} label="Dec" />
          <div style={styles.percentSign}>%</div>
        </div>

        {/* Confirm */}
        <div style={styles.footer}>
          <button style={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button style={styles.confirmBtn} onClick={handleConfirm}>
            Set {previewValue}%
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
    padding: '16px',
  },
  modal: {
    background: '#fff',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '380px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '14px 18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '700',
  },
  closeBtn: {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    textAlign: 'center',
    padding: '18px 0 8px 0',
  },
  previewValue: {
    fontSize: '42px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  quickRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    padding: '8px 16px 14px',
    justifyContent: 'center',
  },
  quickBtn: {
    padding: '6px 12px',
    fontSize: '13px',
    fontWeight: '600',
    border: '2px solid #e0dff5',
    borderRadius: '20px',
    background: '#fff',
    color: '#555',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
  quickBtnActive: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    borderColor: '#667eea',
  },
  pickerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    padding: '0 20px 16px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnLabel: {
    fontSize: '10px',
    fontWeight: '600',
    color: '#999',
    textTransform: 'uppercase',
    marginBottom: '6px',
    letterSpacing: '0.5px',
  },
  pickerWrapper: {
    position: 'relative',
    height: PICKER_HEIGHT + 'px',
    width: '60px',
    overflow: 'hidden',
    borderRadius: '12px',
    background: '#f8f7ff',
  },
  selectionHighlight: {
    position: 'absolute',
    top: ITEM_HEIGHT * 2 + 'px',
    left: '4px',
    right: '4px',
    height: ITEM_HEIGHT + 'px',
    background: 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(118,75,162,0.15))',
    borderRadius: '8px',
    border: '2px solid #667eea',
    pointerEvents: 'none',
    zIndex: 1,
  },
  scrollList: {
    height: '100%',
    overflowY: 'auto',
    scrollSnapType: 'y mandatory',
    WebkitOverflowScrolling: 'touch',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  },
  item: {
    height: ITEM_HEIGHT + 'px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    fontWeight: '600',
    color: '#aaa',
    cursor: 'pointer',
    scrollSnapAlign: 'start',
    transition: 'color 0.15s',
    userSelect: 'none',
  },
  itemSelected: {
    color: '#333',
    fontSize: '26px',
    fontWeight: '800',
  },
  dot: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#667eea',
    paddingTop: '20px',
  },
  percentSign: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#999',
    paddingTop: '20px',
  },
  footer: {
    display: 'flex',
    gap: '10px',
    padding: '16px',
    borderTop: '1px solid #eee',
  },
  cancelBtn: {
    flex: 1,
    padding: '12px',
    fontSize: '15px',
    fontWeight: '600',
    background: '#f0f0f0',
    color: '#666',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  confirmBtn: {
    flex: 2,
    padding: '12px',
    fontSize: '15px',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};
