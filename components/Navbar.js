'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((section) => {
        const sTop = section.offsetTop - 120;
        if (window.scrollY >= sTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveNav(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Hitesh Vaishnav
        </a>
        <ul className="nav-links">
          {['about', 'skills', 'experience', 'projects', 'contact'].map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={activeNav === sec ? 'active' : ''}
                onClick={(e) => handleNavClick(e, sec)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hiteshvaishnav602@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Hire Me
        </a>
        <button
          className="nav-hamburger"
          id="hamburger"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`} id="nav-mobile">
        {['about', 'skills', 'experience', 'projects', 'contact'].map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className="mob-link"
            onClick={(e) => handleNavClick(e, sec)}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
