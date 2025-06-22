import React from 'react';
import './WebDev.css';

const WebDev = () => {
  return (
    <div className="wd-web-container">
      {/* Hero Section */}
      <section className="wd-hero-section">
        <div className="wd-hero-content">
          <div className="wd-hero-text">
            <h1>Web Development Services</h1>
            <p className="wd-hero-subtitle">Smart care for your web development project</p>
            <p className="wd-hero-description">
              Achieve dynamic web experiences with our exceptional web development services. From responsive design, 
              integrations and web security concerns, we ensure seamless and secure web development that delivers 
              remarkable performance and helps your business and drives client satisfaction.
            </p>
            <div className="wd-hero-buttons">
              <button className="wd-btn-primary">Request development service</button>
              <button className="wd-btn-secondary">Get a quote</button>
            </div>
          </div>
          <div className="wd-hero-image">
            <div className="wd-mockup-container">
              <div className="wd-mockup-device">
                <div className="wd-mockup-screen"></div>
              </div>
              <div className="wd-mockup-elements">
                <div className="wd-chart-element"></div>
                <div className="wd-person-element"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="wd-solutions-section">
        <div className="wd-container">
          <h2>What Web Solution Do You Need?</h2>
          <p className="wd-section-description">
            Web development services help create all types of web-based software and ensure great experience for web users. Different 
            types of web solutions may seem similar from the outside, but we approach them differently and know what factors are 
            winning in each case.
          </p>

          <div className="wd-solutions-grid">
            <div className="wd-solution-card">
              <div className="wd-solution-icon">
                <div className="wd-icon-placeholder wd-web-portal"></div>
              </div>
              <h3>Web portals</h3>
              <p>Since 2005, ScienceSoft serves and hosts numerous web portals, intranets, and portals for different industries (healthcare, retail, logistics, education, eCommerce, finance, real estate). These portals we have developed are feature-rich and known to provide experience, which is why we have maintained our perfect quality track record.</p>
            </div>

            <div className="wd-solution-card">
              <div className="wd-solution-icon">
                <div className="wd-icon-placeholder wd-websites"></div>
              </div>
              <h3>Websites</h3>
              <p>HTML technologies drive our corporate sites and support organizations through their digital transformation programs. Our experts are great at landing, they have our services have an established track record for creating websites designed to transform prospects into customers.</p>
            </div>

            <div className="wd-solution-card">
              <div className="wd-solution-icon">
                <div className="wd-icon-placeholder wd-ecommerce"></div>
              </div>
              <h3>Ecommerce</h3>
              <p>All that is encompassed in ecommerce development, like customer-centric and engaging ecommerce solutions built for ecommerce sites and implementations. Our ecommerce developers understand and deliver custom ecommerce and magento ecommerce solutions for an exemplary ecommerce.</p>
            </div>

            <div className="wd-solution-card">
              <div className="wd-solution-icon">
                <div className="wd-icon-placeholder wd-web-apps"></div>
              </div>
              <h3>Web apps</h3>
              <p>In our ecommerce of building web apps for years, you will find our developers have tons of experience in various development platforms. We always retain automation in ecommerce workflows and integrate commerce data together for different operations.</p>
            </div>
          </div>

          <div className="wd-cta-banner">
            <p>Quickly check <span className="wd-highlight">our facts about ScienceSoft</span> - see if we're the right fit for you.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="wd-stats-section">
        <div className="wd-container">
          <h2>ScienceSoft in Figures</h2>
          <p className="wd-stats-description">
            Achieving product goals in spite of time and budget constraints, as well as changing requirements, is ScienceSoft's top priority. 
            You can rely on our project management framework.
          </p>

          <div className="wd-stats-grid">
            <div className="wd-stat-card wd-purple">
              <div className="wd-stat-number">1,500+</div>
              <div className="wd-stat-label">web projects</div>
            </div>
            <div className="wd-stat-card wd-blue">
              <div className="wd-stat-number">240+</div>
              <div className="wd-stat-label">web developers</div>
            </div>
            <div className="wd-stat-card wd-green">
              <div className="wd-stat-number">80+</div>
              <div className="wd-stat-label">project managers</div>
            </div>
            <div className="wd-stat-card wd-orange">
              <div className="wd-stat-number">150+</div>
              <div className="wd-stat-label">client testimonials</div>
            </div>
          </div>

          <div className="wd-team-images">
            <div className="wd-team-image-container">
              <div className="wd-team-member"></div>
              <div className="wd-team-member"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="wd-pricing-section">
        <div className="wd-container">
          <h2>Average Cost of Different Web Solutions</h2>
          <p className="wd-pricing-description">
            The prices are only rough ranges as functionality can greatly vary from project to project across similar system categories. Generally, the range of costs is quite big. Take a look at several examples from our practice and don't hesitate to request a free estimate that will be tailored to your specific business solution.
          </p>

          <div className="wd-pricing-grid">
            <div className="wd-pricing-card">
              <div className="wd-pricing-icon">
                <div className="wd-icon-placeholder wd-pricing"></div>
              </div>
              <div className="wd-price-range">From $20,000</div>
              <p>For a simple business website</p>
            </div>

            <div className="wd-pricing-card">
              <div className="wd-pricing-icon">
                <div className="wd-icon-placeholder wd-pricing"></div>
              </div>
              <div className="wd-price-range">From $75,000</div>
              <p>For a corporate website</p>
            </div>

            <div className="wd-pricing-card">
              <div className="wd-pricing-icon">
                <div className="wd-icon-placeholder wd-pricing"></div>
              </div>
              <div className="wd-price-range">From $200,000</div>
              <p>For a complete enterprise system and several visual interfaces and advanced logic integrated with the basic management system and databases</p>
            </div>

            <div className="wd-pricing-card wd-blog">
              <div className="wd-pricing-icon">
                <div className="wd-icon-placeholder wd-pricing"></div>
              </div>
              <div className="wd-price-range">From $400,000</div>
              <p>For complete enterprise web software, e.g. a massive CRMs system</p>
            </div>
          </div>

          <div className="wd-pricing-cta">
            <div className="wd-cta-content">
              <h3>Want to learn the exact cost of your solution?</h3>
              <p>Fill out our quick questionnaire and we will provide you with a custom quote within one business day.</p>
              <button className="wd-btn-calculate">Calculate the cost</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="wd-services-section">
        <div className="wd-container">
          <h2>Full-Scale Web Development by ScienceSoft</h2>
          <p className="wd-services-description">
            Throughout all web development phases, ScienceSoft adheres to quality assurance practices based on our 150+ certified quality 
            management system. Our comprehensive security management program even includes security controls, policies and 
            procedures to comply with ISO 27001 regulations.
          </p>

          <div className="wd-services-grid">
            <div className="wd-service-card">
              <div className="wd-service-icon">
                <div className="wd-icon-placeholder wd-analysis"></div>
              </div>
              <h3>Business analysis</h3>
              <p>Our business analysts think critically when they need to perform tasks such as requirements collection and analysis, assessment of the solution. They also bridge the gap between business stakeholders and the IT team in terms of the required business needs and features of the solution.</p>
              <div className="wd-service-link">3D+ business analysts</div>
            </div>

            <div className="wd-service-card">
              <div className="wd-service-icon">
                <div className="wd-icon-placeholder wd-design"></div>
              </div>
              <h3>UX and UI design</h3>
              <p>We ensure that the users can meet their requirements through our navigation and layouts. We're a fan of designing that actually works and UI designs, allow that out of designers and enhances the flow of user experience.</p>
              <div className="wd-service-link">30+ UX and UI designers</div>
            </div>

            <div className="wd-service-card">
              <div className="wd-service-icon">
                <div className="wd-icon-placeholder wd-architecture"></div>
              </div>
              <h3>Architecture</h3>
              <p>Our solution architects discuss the software requirements and plan approach to scale and optimize the application. They help us implement a feature and API. They maintain clear to all concerning you in the best possible solution methods, technologies, frameworks.</p>
              <div className="wd-service-link">50+ solution architects</div>
            </div>

            <div className="wd-service-card">
              <div className="wd-service-icon">
                <div className="wd-icon-placeholder wd-frontend"></div>
              </div>
              <h3>Front-end development</h3>
              <p>Our front-end developers are implementing the static visual elements and user experience with tools like UI tools, Java, CSS, HTML, and create solutions with JavaScript frameworks, such as Angular, React, Meteor, Vue, etc. 30+ Javascript developers</p>
              <div className="wd-service-link">240+ front-end developers</div>
            </div>

            <div className="wd-service-card">
              <div className="wd-service-icon">
                <div className="wd-icon-placeholder wd-backend"></div>
              </div>
              <h3>Back-end development</h3>
              <p>Our experienced back-end developers of all relevant technologies and tools are experts in server-side development using languages and frameworks around programming like PHP API.</p>
              <div className="wd-service-link">200+ back-end developers</div>
            </div>

            <div className="wd-service-card">
              <div className="wd-service-icon">
                <div className="wd-icon-placeholder wd-integration"></div>
              </div>
              <h3>Integration</h3>
              <p>We can add to a simple integration and all the concepts of our software integrations and tools. Our customer can also benefit from data migration and business-oriented applications alongside services.</p>
              <div className="wd-service-link">100+ integration engineers</div>
            </div>

            <div className="wd-service-card">
              <div className="wd-service-icon">
                <div className="wd-icon-placeholder wd-testing"></div>
              </div>
              <h3>Testing and QA</h3>
              <p>We guarantee the post-web solutions for the clients financially and help set benchmarks and metrics. We have a personal task of assuring and maintaining these project elements and requirements.</p>
              <div className="wd-service-link">70+ testing engineers</div>
            </div>

            <div className="wd-service-card">
              <div className="wd-service-icon">
                <div className="wd-icon-placeholder wd-helpdesk"></div>
              </div>
              <h3>Help desk</h3>
              <p>Escalating L1 and L2 technical services, we address machine errors, investigate incidents with software and tools and also develop user manuals for management of their web apps.</p>
              <div className="wd-service-link">30+ support engineers</div>
            </div>

            <div className="wd-service-card">
              <div className="wd-service-icon">
                <div className="wd-icon-placeholder wd-support"></div>
              </div>
              <h3>Continuous support and evolution</h3>
              <p>Depending on your specific business needs, our experienced team will comprehend all the internal and external services that marketing business needs. Our development team continues consulting and will guide support and maintenance services 24/7 basis.</p>
              <div className="wd-service-link">50+ support engineers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="wd-process-section">
        <div className="wd-container">
          <h2>How We Ensure Success in Web Development Projects</h2>
          <p className="wd-process-description">
            Approach has proved over the years to drive successful project outcomes and achieve quality ScienceSoft's clients' 
            management at all their meeting. You are welcome to check the descriptions of processes and practices we rely on to deliver 
            best-quality software and systems.
          </p>

          <div className="wd-process-grid">
            <div className="wd-process-card">
              <div className="wd-process-icon">
                <div className="wd-icon-placeholder wd-scoping"></div>
              </div>
              <h3>Scoping</h3>
              <p>The clear development of the web project requires proper due diligence and mapping. I will learning and ensure the scope and requirements become clearer projects.</p>
            </div>

            <div className="wd-process-card">
              <div className="wd-process-icon">
                <div className="wd-icon-placeholder wd-cost-estimation"></div>
              </div>
              <h3>Cost estimation</h3>
              <p>We set optimal costs where accurate project cost estimation is determined and determined cost implementation and project and established control for entire project processes.</p>
            </div>

            <div className="wd-process-card">
              <div className="wd-process-icon">
                <div className="wd-icon-placeholder wd-quality"></div>
              </div>
              <h3>Quality management</h3>
              <p>We capture the controls specified but not FBG specified or validated. We believe that software system and project-based infrastructure should be governed of only during project.</p>
            </div>

            <div className="wd-process-card">
              <div className="wd-process-icon">
                <div className="wd-icon-placeholder wd-collaboration"></div>
              </div>
              <h3>Collaboration</h3>
              <p>The team members and collaboration flow from planning to go-live will ensure more engaging resources, and we monitor all collaboration modes during the entire project execution.</p>
            </div>

            <div className="wd-process-card">
              <div className="wd-process-icon">
                <div className="wd-icon-placeholder wd-security"></div>
              </div>
              <h3>Security management</h3>
              <p>We adhere to security controls and build security and accountability through implementing the top procedures throughout the development project.</p>
            </div>

            <div className="wd-process-card">
              <div className="wd-process-icon">
                <div className="wd-icon-placeholder wd-knowledge"></div>
              </div>
              <h3>Knowledge management</h3>
              <p>We share the responsibility to maintain, design a core knowledge base for the entire team and consistently understand the project effective knowledge throughout.</p>
            </div>

            <div className="wd-process-card">
              <div className="wd-process-icon">
                <div className="wd-icon-placeholder wd-budget"></div>
              </div>
              <h3>Budget management</h3>
              <p>The clear development requires sound project and budget estimations and project maintenance when costs and efficiency must remain within the project budget requirements.</p>
            </div>

            <div className="wd-process-card">
              <div className="wd-process-icon">
                <div className="wd-icon-placeholder wd-timeline"></div>
              </div>
              <h3>Timeline management</h3>
              <p>We always ensure on-time delivery on project schedules and milestones in each client's project timeline requirements and deliver the project requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDev;