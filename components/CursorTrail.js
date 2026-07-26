'use client';

import { useEffect } from 'react';

export default function CursorTrail() {
  useEffect(() => {
    const trail = [];
    const TRAIL_COUNT = 8;
    const dotsContainer = document.createElement('div');
    dotsContainer.id = 'cursor-trail-container';
    document.body.appendChild(dotsContainer);

    for (let i = 0; i < TRAIL_COUNT; i++) {
      const dot = document.createElement('div');
      dot.style.cssText = `
        position: fixed;
        width: ${6 - i * 0.5}px;
        height: ${6 - i * 0.5}px;
        border-radius: 50%;
        background: rgba(194, 164, 255, ${0.5 - i * 0.06});
        pointer-events: none;
        z-index: 9999999;
        transition: transform 0.1s;
        mix-blend-mode: screen;
      `;
      dotsContainer.appendChild(dot);
      trail.push({ el: dot, x: 0, y: 0 });
    }

    let mx = 0;
    let my = 0;
    let animId;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animateTrail = () => {
      let x = mx;
      let y = my;
      trail.forEach((dot, i) => {
        const prev = trail[i - 1];
        dot.x = prev ? prev.x + (x - prev.x) * 0.4 : x;
        dot.y = prev ? prev.y + (y - prev.y) * 0.4 : y;
        dot.el.style.left = `${dot.x - 3}px`;
        dot.el.style.top = `${dot.y - 3}px`;
        x = dot.x;
        y = dot.y;
      });
      animId = requestAnimationFrame(animateTrail);
    };

    animateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      if (dotsContainer.parentNode) {
        dotsContainer.parentNode.removeChild(dotsContainer);
      }
    };
  }, []);

  return null;
}
