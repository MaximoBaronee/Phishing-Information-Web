// hooks/useAnimations.js
import { useEffect, useRef } from 'react';

export function useAnimations() {

  // 1. IntersectionObserver para las tarjetas (.info-card)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.info-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect(); // limpieza al desmontar
  }, []);

  // 2. Parallax en el banner
  useEffect(() => {
    const banner = document.querySelector('.banner-img');
    if (!banner) return;

    const handleScroll = () => {
      const rate = window.pageYOffset * 0.3;
      banner.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // limpieza
  }, []);

  // 3. Smooth scroll para enlaces internos (#...)
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const targetId = anchor.getAttribute('href');
      if (targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // 4. Efecto hover en listas (en React esto se hace mejor con CSS,
  //    pero si necesitás mantenerlo en JS:)
  useEffect(() => {
    const items = document.querySelectorAll(
      '.consequences-list li, .recommendations-list li, .scam-type'
    );
    const onEnter = (e) => { e.currentTarget.style.transition = 'all 0.3s ease'; };
    items.forEach((item) => item.addEventListener('mouseenter', onEnter));
    return () => items.forEach((item) => item.removeEventListener('mouseenter', onEnter));
  }, []);

  // 5. Lazy loading de imágenes con data-src
  useEffect(() => {
    const imageObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          obs.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) =>
      imageObserver.observe(img)
    );

    return () => imageObserver.disconnect();
  }, []);

  // 6. Animaciones CSS globales (slideInRight / slideOutRight)
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'custom-animations';
    style.textContent = `
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(100px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideOutRight {
        from { opacity: 1; transform: translateX(0); }
        to   { opacity: 0; transform: translateX(100px); }
      }
    `;
    // Evita duplicados si el componente se monta dos veces (React StrictMode)
    if (!document.getElementById('custom-animations')) {
      document.head.appendChild(style);
    }
    return () => document.getElementById('custom-animations')?.remove();
  }, []);

  // 7. Scroll al inicio al cargar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
}