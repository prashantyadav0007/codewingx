import React from 'react';
import './ApproachtoSD.css';

const ApproachtoSD = () => {
  return (
    <div className="approach-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-content">
          <div className="header-text">
            <h1>How CodeWingX Approaches Software Development Projects</h1>
            <p className="header-description">
              Achieving project goals despite time and budget constraints and changing
              requirements is CodeWingX's top priority. You set the goals, we drive the
              project to achieve them.
            </p>
            <p className="header-description">
              To deliver on our promise, we avoid passive project administration and take
              a proactive stance: seeking optimal solutions, adapting to changing
              conditions, collaborating openly with stakeholders, continuously refining
              processes, and anticipating risks. This page details our approach to
              different project aspects, showing how each contributes to overall project
              success.
            </p>
          </div>
          <div className="header-visual">
            <div className="business-person">
              <div className="person-avatar" role="img" aria-label="Business professional"></div>
              <div className="floating-icons">
                <div className="icon-circle icon-1" role="img" aria-label="Analytics">
                  <span>📊</span>
                </div>
                <div className="icon-circle icon-2" role="img" aria-label="Collaboration">
                  <span>🤝</span>
                </div>
                <div className="icon-circle icon-3" role="img" aria-label="Growth">
                  <span>📈</span>
                </div>
                <div className="icon-circle icon-4" role="img" aria-label="Documentation">
                  <span>🖨️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organizing Cooperation Section */}
      <section className="section">
        <h2 className="section-title">Organizing Our Cooperation & Collaboration</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon" role="img" aria-label="Connection">
              <span>🔗</span>
            </div>
            <h3>Steps to start: client onboarding flow</h3>
            <p>Check details about our 5-step process to start a cooperation and learn the components of our free project proposal.</p>
            <a href="/onboarding" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Partnership">
              <span>🤝</span>
            </div>
            <h3>Collaboration principles, approaches, and models</h3>
            <p>Learn the fundamental principles of our collaboration and explore a spectrum of tactical and strategic collaboration forms we offer.</p>
            <a href="/collaboration" className="learn-more">Learn more →</a>
          </div>
        </div>
      </section>

      {/* Project Management Section */}
      <section className="section">
        <h2 className="section-title">Project Management and Reporting</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon" role="img" aria-label="Settings">
              <span>⚙️</span>
            </div>
            <h3>Scope estimation and management</h3>
            <p>The page outlines our 6-step scoping process and shares fragments of our Project & Scope document, a fragment of our feature list, a sample user journey map, examples of UX wireframes.</p>
            <a href="/scope-management" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Budget">
              <span>💰</span>
            </div>
            <h3>Cost estimation practices</h3>
            <p>The page describes key factors and principles we consider to estimate costs and describes our major cost optimization activities. It also features our sample top-down and bottom-up estimates.</p>
            <a href="/cost-estimation" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Risk">
              <span>⚠️</span>
            </div>
            <h3>Risk management principles and practices</h3>
            <p>Check the risk factors we recognize and the steps we take to control and tackle risks at each stage of software development.</p>
            <a href="/risk-management" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Documentation">
              <span>📋</span>
            </div>
            <h3>Software documentation examples and priorities</h3>
            <p>Explore our documentation practices and examples of general and non-standard documents we deliver throughout the SDLC.</p>
            <a href="/documentation" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Knowledge">
              <span>📚</span>
            </div>
            <h3>How we organize knowledge management</h3>
            <p>Discover our 4-step process for knowledge management and sharing and see examples of our knowledge management techniques and tools.</p>
            <a href="/knowledge-management" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Change">
              <span>🔄</span>
            </div>
            <h3>Change request management practices</h3>
            <p>See our process to handle change requests, from submission and assessment (feasibility, cost, priority) to implementation or rejection.</p>
            <a href="/change-management" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Calendar">
              <span>📅</span>
            </div>
            <h3>Deadline management</h3>
            <p>Explore our key practices to manage the project time and respect our agreements with clients.</p>
            <a href="/deadline-management" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Finance">
              <span>💼</span>
            </div>
            <h3>Budget management</h3>
            <p>Check how we estimate the project cost and monitor the budget spending in the course of the project.</p>
            <a href="/budget-management" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Reports">
              <span>📊</span>
            </div>
            <h3>Reporting process and examples</h3>
            <p>Learn the scope of our software development reports, forecasts, and improvement recommendations and explore report samples.</p>
            <a href="/reporting" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Success">
              <span>📈</span>
            </div>
            <h3>Project success measurement</h3>
            <p>Visit the page to understand how we integrate success measurement into our Agile ceremonies and check examples of OKRs by categories.</p>
            <a href="/success-measurement" className="learn-more">Learn more →</a>
          </div>
        </div>
      </section>

      {/* Quality and Security Section */}
      <section className="section">
        <h2 className="section-title">Quality and Security Management</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon" role="img" aria-label="Quality">
              <span>✅</span>
            </div>
            <h3>How we manage quality</h3>
            <p>Explore the practices and policies behind our ISO 9001-certified quality management system. The page also lists software quality and project health KPIs we use and describes controls specific to each SDLC stage.</p>
            <a href="/quality-management" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Security">
              <span>🔒</span>
            </div>
            <h3>How we manage security</h3>
            <p>We are ISO 27001-certified and guarantee the safety of our clients' data. Check the data and assets we protect, the competencies we offer, and the security management activities we perform during the cooperation.</p>
            <a href="/security-management" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Team">
              <span>👥</span>
            </div>
            <h3>How we structure effective development teams</h3>
            <p>Learn how CodeWingX organizes dynamic, collaborative teams to deliver high-quality software on time and within budget consistently.</p>
            <a href="/team-structure" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Automation">
              <span>🤖</span>
            </div>
            <h3>How we automate development processes</h3>
            <p>Discover how CodeWingX leverages DevOps to enable rapid, reliable software delivery with multiple daily deployments and failure rates under 5%.</p>
            <a href="/automation" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Testing">
              <span>🔧</span>
            </div>
            <h3>How we apply TDD and BDD</h3>
            <p>Explore how CodeWingX combines TDD, BDD, and flexible methodologies to ensure quality while adapting to project needs.</p>
            <a href="/tdd-bdd" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Performance">
              <span>⚡</span>
            </div>
            <h3>How we manage application performance</h3>
            <p>Explore CodeWingX's best practices for application performance planning, development, and management, including benchmarks for various application types.</p>
            <a href="/performance-management" className="learn-more">Learn more →</a>
          </div>
        </div>
      </section>

      {/* SDLC Stages Section */}
      <section className="section">
        <h2 className="section-title">Our Approach to Specific SDLC Stages</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon" role="img" aria-label="Resources">
              <span>👨‍💼</span>
            </div>
            <h3>Project resource selection and assignment</h3>
            <p>The page describes how we plan an optimal team structure and select the best candidates for the required roles. We show how the process of resource assignment differs for full outsourcing and team augmentation models.</p>
            <a href="/resource-selection" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Discovery">
              <span>🔍</span>
            </div>
            <h3>Discovery process</h3>
            <p>Discover our techniques for conducting swift and impactful discovery in software development projects, ensuring active stakeholder engagement throughout. Explore the roles involved, review sample deliverables, and consider various discovery options tailored to the unique needs of different projects.</p>
            <a href="/discovery" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Architecture">
              <span>🏗️</span>
            </div>
            <h3>Architecture design</h3>
            <p>Discover how we design reliable and efficient architectural solutions and explore the core architectural styles we leverage for back-end and front-end development.</p>
            <a href="/architecture" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="UX Design">
              <span>🎨</span>
            </div>
            <h3>UX design approach and examples</h3>
            <p>Explore our UX research methods for each SDLC stage, learn how we design UX for feature-rich apps, and check examples of our deliverables.</p>
            <a href="/ux-design" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="UI Design">
              <span>🖼️</span>
            </div>
            <h3>UI design principles and examples</h3>
            <p>Learn our practices to build unique brand identities via UI design, check what our UI kits include, and see examples of our UIs.</p>
            <a href="/ui-design" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Scrum">
              <span>🔄</span>
            </div>
            <h3>Scrum-based development process</h3>
            <p>See how Scrum is implemented at CodeWingX, how we work closely with our clients, and what they can anticipate at each step of the journey.</p>
            <a href="/scrum" className="learn-more">Learn more →</a>
          </div>
          <div className="card">
            <div className="card-icon" role="img" aria-label="Warranty">
              <span>🛡️</span>
            </div>
            <h3>Post-launch software warranty</h3>
            <p>We discuss software warranty terms individually for each project. Check what is usually covered and what is not covered by our warranty.</p>
            <a href="/warranty" className="learn-more">Learn more →</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Trust CodeWingX with Your Development Needs</h2>
          <p>Join the ranks of our satisfied clients who have benefited from our development practices in over 4,000 successful projects. We look forward to starting this journey with you!</p>
          <button className="cta-button" onClick={() => window.location.href = '/contact'}>
            Let's partner up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApproachtoSD;