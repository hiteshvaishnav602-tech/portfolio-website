'use client';

export default function About() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section section-pad">
      <div className="section-container">
        <div className="section-tag">About Me</div>
        <h2 className="section-title">Who I Am</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <strong className="accent-text">Motivated Full Stack Web Developer</strong> with hands-on experience
              building MERN stack applications. I've developed scalable E-Commerce platforms featuring JWT authentication, role-based access control,
              Admin Dashboards, and complete CRUD functionality.
            </p>
            <p>
              Proficient in <strong className="accent-text">React.js, Node.js, Express.js, MongoDB</strong>, REST APIs, and
              MVC architecture. I actively use AI tools (Claude, ChatGPT, Cursor, GitHub Copilot) to write cleaner code faster.
            </p>
            <p>
              Seeking a Junior Developer role to contribute and grow within a professional team while building impactful
              software solutions and delivering high-quality user experiences.
            </p>
            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-icon">📍</span>
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📧</span>
                <a href="mailto:hiteshvaishnav602@gmail.com">hiteshvaishnav602@gmail.com</a>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📞</span>
                <a href="tel:+917877613187">+91 7877613187</a>
              </div>
            </div>
            <a
              href="#contact"
              className="btn-primary"
              style={{ display: 'inline-block', marginTop: '2rem' }}
              onClick={handleScrollToContact}
            >
              Let's Connect →
            </a>
          </div>
          <div className="about-cards">
            <div className="stat-card">
              <span className="stat-num accent-text">3+</span>
              <span className="stat-label">Full-Stack Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-num accent-text">100+</span>
              <span className="stat-label">Records Handled</span>
            </div>
            <div className="stat-card">
              <span className="stat-num accent-text">MERN</span>
              <span className="stat-label">Stack Expert</span>
            </div>
            <div className="stat-card">
              <span className="stat-num accent-text">2025</span>
              <span className="stat-label">BCA Graduate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
