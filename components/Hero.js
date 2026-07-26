'use client';

import { useState, useEffect, useRef } from 'react';
import HeroParticles from './HeroParticles';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const visualCardRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const phrases = [
      'MERN Stack Apps',
      'REST APIs',
      'React.js UIs',
      'Scalable Backends',
      'Full Stack Products',
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId;

    const typeLoop = () => {
      const current = phrases[phraseIdx];
      if (!deleting) {
        setTypedText(current.slice(0, charIdx + 1));
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeoutId = setTimeout(typeLoop, 2200);
        } else {
          timeoutId = setTimeout(typeLoop, 100);
        }
      } else {
        setTypedText(current.slice(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          timeoutId = setTimeout(typeLoop, 400);
        } else {
          timeoutId = setTimeout(typeLoop, 60);
        }
      }
    };

    timeoutId = setTimeout(typeLoop, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  // Parallax Orbs & 3D Tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Orbs parallax
      const x = (e.clientX / window.innerWidth - 0.5) * 35;
      const y = (e.clientY / window.innerHeight - 0.5) * 35;
      if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${x}px, ${y}px)`;
      if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${-x * 0.6}px, ${-y * 0.6}px)`;
      if (orb3Ref.current) orb3Ref.current.style.transform = `translate(${x * 0.3}px, ${-y * 0.3}px)`;

      // 3D Card Tilt
      if (visualCardRef.current) {
        const rect = visualCardRef.current.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        const angleX = -(e.clientY - cardY) / 30;
        const angleY = (e.clientX - cardX) / 30;
        visualCardRef.current.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      }
    };

    const handleMouseLeave = () => {
      if (visualCardRef.current) {
        visualCardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <HeroParticles />
      <div ref={orb1Ref} className="hero-bg-orb orb1"></div>
      <div ref={orb2Ref} className="hero-bg-orb orb2"></div>
      <div ref={orb3Ref} className="hero-bg-orb orb3"></div>
      <div className="hero-bg-grid"></div>

      <div className="hero-inner">
        {/* LEFT: Text Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Available for work
          </div>
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name split-h">
            <span>Hitesh</span> <span className="accent-text">Vaishnav</span>
          </h1>
          <div className="hero-title-wrap">
            <span className="hero-static">I build </span>
            <span className="hero-typewriter" id="typewriter">
              {typedText}
            </span>
          </div>
          <p className="hero-desc">
            Motivated Full Stack Web Developer crafting scalable MERN stack applications.
            Experienced in JWT auth, admin dashboards, REST APIs &amp; MVC architecture.
          </p>
          <div className="hero-actions">
            <a
              href="/resume.pdf"
              download="Hitesh_Vaishnav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Resume <span className="btn-arrow">📄</span>
            </a>
            <a
              href="#contact"
              className="btn-outline"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* RIGHT: Visual Code Card */}
        <div className="hero-visual" id="hero-visual" ref={visualCardRef}>
          <div className="hero-code-card">
            <div className="code-card-header">
              <div className="code-dots">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <div className="code-tab">
                <span className="code-tab-icon">⚡</span>
                <span className="code-tab-title">developer.js</span>
              </div>
              <div className="code-status">
                <span className="status-pulse"></span>
                <span>Active</span>
              </div>
            </div>
            <div className="code-card-body">
              <div className="code-line">
                <span className="code-ln">1</span>
                <span className="code-comment">// Full-Stack MERN Developer</span>
              </div>
              <div className="code-line">
                <span className="code-ln">2</span>
                <span className="code-kw">const</span>{' '}
                <span className="code-var">developer</span> = &#123;
              </div>
              <div className="code-line pl">
                <span className="code-ln">3</span>
                <span className="code-key">name</span>: <span className="code-str">"Hitesh Vaishnav"</span>,
              </div>
              <div className="code-line pl">
                <span className="code-ln">4</span>
                <span className="code-key">role</span>: <span className="code-str">"Full Stack Web Developer"</span>,
              </div>
              <div className="code-line pl">
                <span className="code-ln">5</span>
                <span className="code-key">stack</span>: [<span className="code-str">"React"</span>, <span className="code-str">"Node"</span>, <span className="code-str">"Express"</span>, <span className="code-str">"MongoDB"</span>],
              </div>
              <div className="code-line pl">
                <span className="code-ln">6</span>
                <span className="code-key">location</span>: <span className="code-str">"India 🇮🇳"</span>,
              </div>
              <div className="code-line pl">
                <span className="code-ln">7</span>
                <span className="code-key">openToWork</span>: <span className="code-bool">true</span>,
              </div>
              <div className="code-line pl">
                <span className="code-ln">8</span>
                <span className="code-fn">buildProject</span>: <span className="code-kw">async</span> (<span className="code-param">idea</span>) =&gt; &#123;
              </div>
              <div className="code-line pl-2">
                <span className="code-ln">9</span>
                <span className="code-kw">return</span>{' '}
                <span className="code-kw">await</span>{' '}
                <span className="code-fn">deploy</span>(<span className="code-param">idea</span>, &#123; <span className="code-key">quality</span>: <span className="code-str">"100%"</span> &#125;);
              </div>
              <div className="code-line pl">
                <span className="code-ln">10</span>
                &#125;
              </div>
              <div className="code-line">
                <span className="code-ln">11</span>
                &#125;;
              </div>
              <div className="code-line">
                <span className="code-ln">12</span>
                <span className="code-var">developer</span>.<span className="code-fn">buildProject</span>(<span className="code-str">"Your Next Project"</span>);
              </div>
            </div>
          </div>

          <div className="hero-stats-strip">
            <div className="hstat">
              <span className="hstat-num">3+</span>
              <span className="hstat-lbl">Projects</span>
            </div>
            <div className="hstat-sep"></div>
            <div className="hstat">
              <span className="hstat-num">MERN</span>
              <span className="hstat-lbl">Stack</span>
            </div>
            <div className="hstat-sep"></div>
            <div className="hstat">
              <span className="hstat-num">2025</span>
              <span className="hstat-lbl">Graduate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
