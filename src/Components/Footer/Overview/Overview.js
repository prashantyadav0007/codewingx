import React, { useEffect, useState } from 'react';
import './Overview.css';

const Overview = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse movement parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fade in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scs-animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scs-observe-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={`scs-overview-container ${isVisible ? 'scs-fade-in' : ''}`}>
      {/* Animated background layers */}
      <div 
        className="scs-bg-layer-1" 
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      />
      <div 
        className="scs-bg-layer-2"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`
        }}
      />
      <div className="scs-bg-gradient-overlay" />
      
      {/* Hero Section */}
      <section className="scs-hero-section scs-observe-on-scroll">
        <div className="scs-hero-content">
          <div className="scs-image-container">
            <div className="scs-company-image">
              <div className="scs-serpent-logo">
                <span className="scs-logo-s">S</span>ERPENT
                <div className="scs-logo-subtitle">CONSULTING SERVICES PVT. LTD.</div>
              </div>
              <div className="scs-image-overlay"></div>
            </div>
          </div>
          <div className="scs-hero-text">
            <h1 className="scs-hero-title">
              SerpentCS - Where Quality, Time & Accuracy are valued the most!
            </h1>
            <div className="scs-hero-description">
              <p>
                Started in 2011 by two enthusiastic gentlemen in a 12 × 12 room,
                SerpentCS began the journey with a powerful dream of growing with
                everybody and generating an impact for the <strong>MSME Sector Software Solutions</strong>.
              </p>
              <p>
                Serpent Consulting Services Pvt. Ltd. - an <strong>ISO 9001: 2008 certified</strong> and{' '}
                <strong>CMMI3</strong> multinational firm is one of the top contributors in the{' '}
                <strong>ODOO</strong> Community.
              </p>
              <p>
                With the development of 50+ business vertical applications on the Open
                Source ERP and CRM platform ODOO, we are strongly focused on
                delivering high-quality modules to our clients and customers. We make
                sure that we integrate the latest technological trends with the
                development of each and every module that can satiate clients' desired
                needs conveniently.
              </p>
            </div>
          </div>
        </div>
        <div 
          className="scs-scroll-indicator"
          style={{
            opacity: scrollY > 100 ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          <div className="scs-scroll-arrow">▼</div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="scs-quality-section scs-observe-on-scroll">
        <h2 className="scs-section-title">Our Quality Process</h2>
        <p className="scs-section-subtitle">
          We give our best efforts to convert your company into a growing and prosperous
          one. The quality process of Serpent Consulting Services is our main attribute
          and the reasons are described below
        </p>
        
        <div className="scs-quality-timeline">
          <div className="scs-timeline-line"></div>
          
          <div className="scs-quality-item scs-left">
            <div className="scs-quality-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="scs-quality-card">
              <h3>Our Team</h3>
              <p>
                At Serpent Consulting Services, we have a proud team of
                dedicated experts who are always ready for working 24×7 for
                offering the most committed and dedicated services in the
                industry to our customers.
              </p>
            </div>
          </div>

          <div className="scs-quality-item scs-right">
            <div className="scs-quality-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <div className="scs-quality-card">
              <h3>Our Experience</h3>
              <p>
                We are having a working experience of around ten years. We
                appreciate planning and discussing every new project as well
                as have many years of experience and knowledge which we
                bring forward.
              </p>
            </div>
          </div>

          <div className="scs-quality-item scs-left">
            <div className="scs-quality-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div className="scs-quality-card">
              <h3>We Listen</h3>
              <p>
                We listen, discuss and then advise! It sounds very obvious,
                however, we pay attention to your thoughts and plans for your
                desired business and then choose the best solution for it.
              </p>
            </div>
          </div>

          <div className="scs-quality-item scs-right">
            <div className="scs-quality-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div className="scs-quality-card">
              <h3>Passionate</h3>
              <p>
                We enjoy greatly working on any good project together with
                an amazing client. We always care about all our customers
                and also work overtime to make everything 'Perfect'!
              </p>
            </div>
          </div>

          <div className="scs-quality-item scs-left">
            <div className="scs-quality-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div className="scs-quality-card">
              <h3>Our Value</h3>
              <p>
                We put forward what matters like experience and quality. Our
                service offerings and costing can also be modified for the
                exceptional needs of your company. We bring the utmost
                value to the customer's budget.
              </p>
            </div>
          </div>

          <div className="scs-quality-item scs-right">
            <div className="scs-quality-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <polyline points="17 10 17 17 7 17 7 10"></polyline>
              </svg>
            </div>
            <div className="scs-quality-card">
              <h3>Technical yet Innovative</h3>
              <p>
                Whether it is an OpenERP/ODOO, Website, SEO Services,
                Open Source Development or Education Management
                System, we keep all under a single roof for making it simpler
                for all our customers.
              </p>
            </div>
          </div>

          <div className="scs-quality-item scs-left">
            <div className="scs-quality-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="scs-quality-card">
              <h3>Our Relationships</h3>
              <p>
                We have gained great and enduring relationships with several
                clients through the years. We are honored and humbled by
                this fact and also work for creating that trust with our each
                client. We wish to become a long-term partner in success and
                growth of our client's business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="scs-values-section scs-observe-on-scroll">
        <h2 className="scs-section-title">Difference SerpentCS Make</h2>
        <p className="scs-section-subtitle">
          We at SerpentCS have chosen 3 central values – <strong>Teamwork, Leadership and Excellence</strong> as the base of our worldwide corporate culture.
        </p>
        <p className="scs-section-description">
          These values describe how we desire to perform ourselves and also our business. This qualities helps us create value for our clients, people, and organization.
        </p>

        <div className="scs-values-grid">
          <div className="scs-value-cluster">
            <div className="scs-value-circles">
              <div className="scs-value-circle scs-purple">
                <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <line x1="12" y1="12" x2="12" y2="22"></line>
                  <line x1="8" y1="10" x2="8" y2="14"></line>
                  <line x1="16" y1="10" x2="16" y2="14"></line>
                </svg>
                <span>Innovation</span>
              </div>
              <div className="scs-value-circle scs-teal">
                <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"></path>
                </svg>
                <span>Agility</span>
              </div>
              <div className="scs-value-circle scs-blue">
                <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Learning</span>
              </div>
            </div>
            <h3 className="scs-value-label">Excellence</h3>
          </div>

          <div className="scs-value-cluster">
            <div className="scs-value-circles">
              <div className="scs-value-circle scs-purple">
                <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Relationships</span>
              </div>
              <div className="scs-value-circle scs-teal">
                <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Respect</span>
              </div>
              <div className="scs-value-circle scs-blue">
                <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
                <span>Sharing</span>
              </div>
            </div>
            <h3 className="scs-value-label">Teamwork</h3>
          </div>

          <div className="scs-value-cluster">
            <div className="scs-value-circles">
              <div className="scs-value-circle scs-purple">
                <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <span>Courage</span>
              </div>
              <div className="scs-value-circle scs-teal">
                <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Vision</span>
              </div>
              <div className="scs-value-circle scs-blue">
                <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Integrity</span>
              </div>
            </div>
            <h3 className="scs-value-label">Leadership</h3>
          </div>
        </div>
      </section>

      {/* Service Excellence Pledge */}
      <section className="scs-pledge-section scs-observe-on-scroll">
        <h2 className="scs-section-title">Service Excellence Pledge</h2>
        <p className="scs-pledge-tagline">Your Business Requirements, Our Impeccable Solutions!</p>
        <p className="scs-section-description">
          At Serpent Consulting Services, we aim to offer par-excellence solutions to our clients and customers with the latest technology trends. Our dedicated
          professional team is strongly committed to providing high-end Open Source application solutions to your entire business needs. Our solutions and
          services are bound with innovative and progressive strategies, complying with the industry standards.
        </p>

        <div className="scs-pledge-grid">
          <div className="scs-pledge-item">
            <div className="scs-pledge-icon">→</div>
            <p>
              We <em>analyse</em> your queries, <em>match</em> your expectations
              and help you <em>achieve</em> your goals.
            </p>
          </div>

          <div className="scs-pledge-item">
            <div className="scs-pledge-icon">→</div>
            <p>
              We deliver <em>innovative solutions</em> to keep you ahead
              in the competitive market.
            </p>
          </div>

          <div className="scs-pledge-item">
            <div className="scs-pledge-icon">→</div>
            <p>
              We are <em>available 24/7</em> at your service.
            </p>
          </div>

          <div className="scs-pledge-item">
            <div className="scs-pledge-icon">→</div>
            <p>
              We promise to plan everything in the most <em>cost-effective</em> way.
            </p>
          </div>

          <div className="scs-pledge-item">
            <div className="scs-pledge-icon">→</div>
            <p>
              We assist you with <em>experts</em> and industry professionals.
            </p>
          </div>

          <div className="scs-pledge-item">
            <div className="scs-pledge-icon">→</div>
            <p>
              We believe in <em>transparency</em> and offer honest assessments.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates and Awards */}
      <section className="scs-achievements-section scs-observe-on-scroll">
        <div className="scs-certificates-container">
          <h2 className="scs-section-title">Certificates</h2>
          <div className="scs-certificates-grid">
            <div className="scs-certificate-item">
              <div className="scs-certificate-frame scs-gold">
                <div className="scs-certificate-badge">GOLDEN</div>
                <div className="scs-certificate-content">Certificate of Recognition</div>
              </div>
            </div>
            <div className="scs-certificate-item">
              <div className="scs-certificate-frame scs-yellow">
                <div className="scs-certificate-content">Official Certificate</div>
              </div>
            </div>
            <div className="scs-certificate-item">
              <div className="scs-certificate-frame scs-dark">
                <div className="scs-certificate-content">CMMI Level-3</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scs-awards-container">
          <h2 className="scs-section-title">Awards</h2>
          <div className="scs-awards-grid">
            <div className="scs-award-item">
              <div className="scs-award-trophy scs-style-1"></div>
            </div>
            <div className="scs-award-item">
              <div className="scs-award-trophy scs-style-2"></div>
            </div>
            <div className="scs-award-item">
              <div className="scs-award-trophy scs-style-3"></div>
            </div>
            <div className="scs-award-item">
              <div className="scs-award-trophy scs-style-4"></div>
            </div>
            <div className="scs-award-item">
              <div className="scs-award-trophy scs-style-5"></div>
            </div>
            <div className="scs-award-item">
              <div className="scs-award-trophy scs-style-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="scs-team-section scs-observe-on-scroll">
        <div className="scs-team-intro">
          <h2 className="scs-section-title">The Team</h2>
          <div className="scs-ship-captains-card">
            <h3>Ship Captains</h3>
            <p>
              Our experience has always been our key strength &
              that is exactly what we implement along with an
              immense dedication to providing results nothing less
              than the best to our clients. For us, SerpentCS is a
              platform to incise down the old shatters of 'affordable
              but low in quality and good quality but out of my
              range' by providing;
            </p>
            <blockquote>
              "Superior Quality Services which are
              Undoubtedly in Your Means".
            </blockquote>
          </div>
        </div>

        <div className="scs-team-grid">
          <div className="scs-team-member">
            <div className="scs-member-photo scs-photo-1"></div>
            <h3 className="scs-member-name">Jay Vora</h3>
            <p className="scs-member-role">Managing Director / CEO</p>
          </div>

          <div className="scs-team-member">
            <div className="scs-member-photo scs-photo-2"></div>
            <h3 className="scs-member-name">Husen Daudi</h3>
            <p className="scs-member-role">Managing Director / CEO</p>
          </div>

          <div className="scs-team-member">
            <div className="scs-member-photo scs-photo-3"></div>
            <h3 className="scs-member-name">Krunal Soni</h3>
            <p className="scs-member-role">Techno-Geek<br/>Technical Leader</p>
          </div>

          <div className="scs-team-member">
            <div className="scs-member-photo scs-photo-4"></div>
            <h3 className="scs-member-name">Priyanka Radiya</h3>
            <p className="scs-member-role">Happiness Officer<br/>HR Manager</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="scs-overview-footer">
        <p>© 2026 Serpent Consulting Services Pvt. Ltd. - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Overview;