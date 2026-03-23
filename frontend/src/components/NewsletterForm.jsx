// components/NewsletterForm.jsx  ← reemplaza la lógica del form del JS original
import { useState } from 'react';
import { Notification } from './Notification';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [notif, setNotif] = useState(null); // { message, type }

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setNotif({ message: '¡Gracias por suscribirte!', type: 'success' });
      setEmail('');
    } else {
      setNotif({ message: 'Por favor, ingresa un email válido', type: 'error' });
    }
  };

  return (
    <>
      <div className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
        />
        <button className="btn-subscribe" onClick={handleSubscribe}>
          Suscribirse
        </button>
      </div>

      {notif && (
        <Notification
          message={notif.message}
          type={notif.type}
          onDone={() => setNotif(null)}
        />
      )}
    </>
  );
}