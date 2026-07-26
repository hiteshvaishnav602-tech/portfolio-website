export default function Experience() {
  return (
    <section id="experience" className="experience-section section-pad">
      <div className="section-container">
        <div className="section-tag">Experience</div>
        <h2 className="section-title">Work History</h2>
        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="tcard-header">
                <div>
                  <h3 className="tcard-role">Full Stack Developer Trainee</h3>
                  <p className="tcard-company accent-text">StackCode Training Institute</p>
                  <p className="tcard-loc">Ahmedabad, Gujarat, India</p>
                </div>
                <div className="tcard-date">
                  <span className="date-badge">June 2025 – Present</span>
                </div>
              </div>
              <ul className="tcard-bullets">
                <li>
                  Built <strong>3+ full-stack web applications</strong> using React.js and Node.js/Express.js with
                  REST API integration, handling <strong>100+ records</strong> with real-time UI updates.
                </li>
                <li>
                  Designed relational (MySQL, PostgreSQL) and non-relational (MongoDB) databases with scalable schema
                  design and optimized CRUD operations.
                </li>
                <li>
                  Deployed all projects on <strong>Render</strong> and maintained full version control using
                  <strong> Git/GitHub</strong> following industry-standard Agile practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
