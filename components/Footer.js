'use client';

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-name">Hitesh Vaishnav</span>
        <span className="footer-copy">© 2025 · Built with passion &amp; clean code</span>
        <div className="footer-links">
          <a href="#home" onClick={handleScrollTop}>
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
