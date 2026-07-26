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
                <a href="#" className="plink" target="_blank" rel="noopener noreferrer">
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

          {/* Project 2 */}
          <div className="project-card reveal">
            <div className="pcard-top">
              <div className="pcard-icon">🌐</div>
              <div className="pcard-links">
                <a href="#" className="plink" target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
                <a href="#" className="plink live" target="_blank" rel="noopener noreferrer">
                  Live ↗
                </a>
              </div>
            </div>
            <h3 className="pcard-title">Personal Portfolio Website</h3>
            <div className="pcard-tags">
              <span>Next.js</span>
              <span>React.js</span>
              <span>Tailwind CSS</span>
            </div>
            <ul className="pcard-bullets">
              <li>
                Designed and developed a <strong>fully responsive portfolio</strong> showcasing projects, skills, and
                technical expertise.
              </li>
              <li>Built reusable React/Next.js components and modern UI layouts.</li>
              <li>Optimized performance and user experience across desktop, tablet, and mobile devices.</li>
              <li>
                Deployed on <strong>Vercel</strong> with continuous updates through GitHub.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
