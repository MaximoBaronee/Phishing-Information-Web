// components/Notification.jsx  ← reemplaza al showNotification del JS original
import { useState, useEffect } from 'react';

export function Notification({ message, type, onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = setTimeout(() => setVisible(false), 3000);
    const remove = setTimeout(() => onDone?.(), 3500);
    return () => { clearTimeout(hide); clearTimeout(remove); };
  }, [onDone]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 2rem',
        background: type === 'success' ? '#198754' : '#dc3545',
        color: 'white',
        borderRadius: '10px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
        zIndex: 10000,
        fontWeight: 500,
        animation: visible ? 'slideInRight 0.5s ease' : 'slideOutRight 0.5s ease',
      }}
    >
      {message}
    </div>
  );
}