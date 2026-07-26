export default function Skills() {
  const marqueeItems = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript',
    'REST API', 'JWT Auth', 'MySQL', 'PostgreSQL', 'Git & GitHub',
    'Tailwind CSS', 'Vercel'
  ];

  return (
    <section id="skills" className="techstack section-pad">
      <div className="techstack-bg-orb"></div>
      <div className="section-container">
        <div className="section-tag">Tech Stack</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>My Technical Skills</h2>
        <div className="skills-categories">
          <div className="skill-cat">
            <h3 className="skill-cat-title">
              <span className="cat-icon">⚛️</span> Frontend
            </h3>
            <div className="skill-pills">
              <span className="skill-pill">HTML5</span>
              <span className="skill-pill">CSS3</span>
              <span className="skill-pill">JavaScript (ES6+)</span>
              <span className="skill-pill accent">React.js</span>
              <span className="skill-pill">React Hooks</span>
              <span className="skill-pill">Context API</span>
              <span className="skill-pill">Tailwind CSS</span>
              <span className="skill-pill">Bootstrap</span>
            </div>
          </div>

          <div className="skill-cat">
            <h3 className="skill-cat-title">
              <span className="cat-icon">⚙️</span> Backend
            </h3>
            <div className="skill-pills">
              <span className="skill-pill accent">Node.js</span>
              <span className="skill-pill accent">Express.js</span>
              <span className="skill-pill">REST API Design</span>
              <span className="skill-pill">JWT Authentication</span>
              <span className="skill-pill">JSON</span>
              <span className="skill-pill">MVC Architecture</span>
            </div>
          </div>

          <div className="skill-cat">
            <h3 className="skill-cat-title">
              <span className="cat-icon">🗄️</span> Database
            </h3>
            <div className="skill-pills">
              <span className="skill-pill">MySQL</span>
              <span className="skill-pill">PostgreSQL</span>
              <span className="skill-pill accent">MongoDB</span>
              <span className="skill-pill">CRUD Operations</span>
              <span className="skill-pill">Schema Design</span>
            </div>
          </div>

          <div className="skill-cat">
            <h3 className="skill-cat-title">
              <span className="cat-icon">🚀</span> Deployment
            </h3>
            <div className="skill-pills">
              <span className="skill-pill">Render</span>
              <span className="skill-pill">Vercel</span>
              <span className="skill-pill">Netlify</span>
            </div>
          </div>

          <div className="skill-cat">
            <h3 className="skill-cat-title">
              <span className="cat-icon">🛠️</span> Tools &amp; AI
            </h3>
            <div className="skill-pills">
              <span className="skill-pill">Git</span>
              <span className="skill-pill">GitHub</span>
              <span className="skill-pill">Postman</span>
              <span className="skill-pill accent">Claude</span>
              <span className="skill-pill accent">ChatGPT</span>
              <span className="skill-pill">Cursor</span>
              <span className="skill-pill">GitHub Copilot</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee tech strip */}
      <div className="tech-marquee-wrap">
        <div className="tech-marquee">
          <div className="tech-marquee-track">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span key={idx}>
                {item}
                <span className="sep">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
