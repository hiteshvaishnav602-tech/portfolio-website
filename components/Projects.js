export default function Projects() {
  return (
    <section id="projects" className="projects-section section-pad">
      <div className="section-container">
        <div className="section-tag">Projects</div>
        <h2 className="section-title">My Works</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card reveal">
            <div className="pcard-top">
              <div className="pcard-icon">🛒</div>
              <div className="pcard-links">
                <a
                  href="https://github.com/hiteshvaishnav602-tech"
                  className="plink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
                <a href="#" className="plink live" target="_blank" rel="noopener noreferrer">
                  Live ↗
                </a>
              </div>
            </div>
            <h3 className="pcard-title">E-Commerce Platform</h3>
            <div className="pcard-tags">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <ul className="pcard-bullets">
              <li>
                Full-stack E-Commerce app with <strong>JWT authentication</strong> and role-based access control.
              </li>
              <li>
                Built Admin Dashboard for managing products, users, and orders with complete CRUD operations.
              </li>
              <li>
                Designed RESTful APIs using Node.js, Express.js, and MongoDB following MVC architecture.
              </li>
              <li>
                Implemented product management, shopping cart, order processing, and secure user authentication.
              </li>
              <li>
                Responsive React.js frontend optimized for desktop, tablet, and mobile devices.
              </li>
            </ul>
          </div>

          {/* Project 2: PPMS Project */}
          <div className="project-card reveal">
            <div className="pcard-top">
              <div className="pcard-icon">🏢</div>
              <div className="pcard-links">
                <a
                  href="https://github.com/hiteshvaishnav602-tech"
                  className="plink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
                <a href="#" className="plink live" target="_blank" rel="noopener noreferrer">
                  Live ↗
                </a>
              </div>
            </div>
            <h3 className="pcard-title">PPMS (Role &amp; Vendor Management System)</h3>
            <div className="pcard-tags">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Role &amp; Vendor Model</span>
            </div>
            <ul className="pcard-bullets">
              <li>
                Developed full-stack <strong>PPMS application</strong> architecture featuring robust <strong>Role Model</strong> and <strong>Vendor Model</strong> integrations.
              </li>
              <li>
                Implemented multi-tier <strong>Role-Based Access Control (RBAC)</strong> for Admin, Vendor, and User modules with JWT authentication &amp; route protection.
              </li>
              <li>
                Built complete <strong>Vendor Model</strong> system for vendor onboarding, catalog management, purchase order tracking, and status updates.
              </li>
              <li>
                Designed scalable RESTful APIs with Express.js and optimized MongoDB schemas for handling high-volume operational records.
              </li>
              <li>
                Crafted an interactive React.js admin dashboard featuring real-time data tables, search filtering, and CRUD operations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
