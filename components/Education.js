export default function Education() {
  return (
    <section id="education" className="edu-section section-pad">
      <div className="section-container">
        <div className="edu-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">Education &amp; Credentials</div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Academic &amp; Certifications</h2>
        </div>

        <div className="edu-grid">
          {/* Education Card */}
          <div className="edu-card reveal">
            <div className="edu-card-top">
              <div className="edu-icon-badge">🎓</div>
              <span className="edu-category-tag">Academic Degree</span>
            </div>
            <div className="edu-card-content">
              <h3 className="edu-title">Bachelor of Computer Applications (BCA)</h3>
              <p className="edu-inst accent-text">JNVU, Jodhpur</p>
              <p className="edu-sub">Ankeruya College of Education, Jodhpur</p>
              <div className="edu-field">
                <span className="field-label">Major:</span> Computer Applications
              </div>
            </div>
            <div className="edu-card-footer">
              <span className="date-badge">📅 July 2022 – March 2025</span>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="edu-card reveal">
            <div className="edu-card-top">
              <div className="edu-icon-badge">🏆</div>
              <span className="edu-category-tag">Professional Certification</span>
            </div>
            <div className="edu-card-content">
              <h3 className="edu-title">Full Stack Web Development</h3>
              <p className="edu-inst accent-text">StackCode Training Institute</p>
              <p className="edu-sub">Ahmedabad, Gujarat</p>
              <div className="edu-field">
                <span className="field-label">Specialization:</span> MERN Stack Architecture
              </div>
            </div>
            <div className="edu-card-footer">
              <span className="date-badge">📜 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
