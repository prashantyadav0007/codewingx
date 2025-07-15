import React from 'react';
import './About.css'; // Import the CSS file
// import Header from '../Header/Header';

const About = () => {
  return (
    
    <div className="about-container">
      {/* <Header /> */}
      {/* Decorative Background Elements */}
      <div className="background-decorations">
        <div className="bg-decoration bg-decoration-1"></div>
        <div className="bg-decoration bg-decoration-2"></div>
        <div className="bg-decoration bg-decoration-3"></div>
      </div>


      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-wrapper">
            <div className="story-decorative-header">
              <div className="section-tag">Our Journey</div>
              <h2 className="section-title">
                The <span className="gradient-text">CodeWingx</span> Story
              </h2>
            </div>
            
            <div className="story-content-grid">
              <div className="story-text-content">
                <div className="story-paragraphs">
                  <p>
                    Born from a passion for innovation and a vision to transform ideas into digital reality, 
                    Code Wings emerged as a beacon for businesses seeking cutting-edge software solutions.
                  </p>
                  <p>
                    Our journey began with a simple belief: that every great application starts with 
                    understanding the human story behind it. We don't just write code; we craft experiences 
                    that connect, inspire, and empower.
                  </p>
                  <p>
                    From startups to enterprise solutions, we've been the trusted wings that help 
                    businesses soar to new heights through technology. Our team combines technical 
                    expertise with creative vision to deliver solutions that don't just meet expectations—they exceed them.
                  </p>
                </div>
                
                <div className="story-footer">
                  <div className="story-line"></div>
                  <span className="story-year">Est. 2024</span>
                  <div className="story-line"></div>
                </div>
              </div>

              <div className="story-image">
                <div className="image-glow"></div>
                <div className="image-container">
                  <svg className="story-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="storyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7"/>
                        <stop offset="50%" stopColor="#ec4899"/>
                        <stop offset="100%" stopColor="#3b82f6"/>
                      </linearGradient>
                    </defs>
                    <rect x="50" y="50" width="300" height="200" rx="20" fill="url(#storyGradient)" opacity="0.2"/>
                    <circle cx="120" cy="120" r="30" fill="#a855f7" opacity="0.6"/>
                    <circle cx="200" cy="140" r="25" fill="#ec4899" opacity="0.6"/>
                    <circle cx="280" cy="120" r="35" fill="#3b82f6" opacity="0.6"/>
                    <path d="M80 180 Q200 140 320 180" stroke="url(#storyGradient)" strokeWidth="3" fill="none" opacity="0.8"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-wrapper">
            <div className="mission-decorative-header">
              <div className="mission-tag">Our Purpose</div>
              <h2 className="mission-title">
                Our <span className="gradient-text-blue">Mission</span>
              </h2>
            </div>
            
            <div className="mission-content-grid1">
              <div className="mission-image">
                <div className="mission-glow"></div>
                <div className="mission-container">
                  <svg className="mission-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="missionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6"/>
                        <stop offset="50%" stopColor="#a855f7"/>
                        <stop offset="100%" stopColor="#ec4899"/>
                      </linearGradient>
                    </defs>
                    <rect x="40" y="40" width="320" height="220" rx="25" fill="url(#missionGradient)" opacity="0.15"/>
                    <polygon points="200,80 240,120 200,160 160,120" fill="#3b82f6" opacity="0.7"/>
                    <circle cx="120" cy="180" r="20" fill="#a855f7" opacity="0.6"/>
                    <circle cx="280" cy="180" r="20" fill="#ec4899" opacity="0.6"/>
                    <path d="M100 200 Q200 160 300 200" stroke="url(#missionGradient)" strokeWidth="4" fill="none"/>
                  </svg>
                </div>
              </div>

              <div className="mission-content1">
                <div className="mission-text-content">
                  <div className="mission-paragraphs">
                    <p>
                      To empower businesses with innovative technology solutions that drive growth, 
                      efficiency, and success in the digital age. We believe in creating software 
                      that not only solves problems but opens new possibilities.
                    </p>
                    <p>
                      Our mission extends beyond coding—we're dedicated to understanding your business, 
                      your challenges, and your dreams. Every line of code we write is infused with 
                      purpose and passion.
                    </p>
                    <p>
                      We strive to be more than just developers; we're your technology partners, 
                      committed to helping you navigate the complexities of digital transformation 
                      with confidence and clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <div className="values-tag">What Drives Us</div>
            <h2 className="values-title">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="values-description">
              The principles that guide every decision we make and every solution we create.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card-wrapper">
              <div className="value-card">
                <div className="value-card-overlay"></div>
                <div className="value-card-content">
                  <div className="value-icon">💡</div>
                  <h3 className="value-title">Innovation</h3>
                  <p className="value-description">
                    We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="value-card-wrapper">
              <div className="value-card">
                <div className="value-card-overlay"></div>
                <div className="value-card-content">
                  <div className="value-icon">🎯</div>
                  <h3 className="value-title">Quality</h3>
                  <p className="value-description">
                    Excellence is not negotiable. Every project receives our full attention to detail and craftsmanship.
                  </p>
                </div>
              </div>
            </div>

            <div className="value-card-wrapper">
              <div className="value-card">
                <div className="value-card-overlay"></div>
                <div className="value-card-content">
                  <div className="value-icon">🤝</div>
                  <h3 className="value-title">Partnership</h3>
                  <p className="value-description">
                    We build lasting relationships with our clients, working together as true technology partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="value-card-wrapper">
              <div className="value-card">
                <div className="value-card-overlay"></div>
                <div className="value-card-content">
                  <div className="value-icon">🚀</div>
                  <h3 className="value-title">Growth</h3>
                  <p className="value-description">
                    We're committed to continuous learning and helping our clients achieve sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card-wrapper">
              <div className="stat-card">
                <div className="stat-card-overlay"></div>
                <div className="stat-card-content">
                  <div className="stat-number">
                    50<span className="stat-suffix">+</span>
                  </div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
              </div>
            </div>
            <div className="stat-card-wrapper">
              <div className="stat-card">
                <div className="stat-card-overlay"></div>
                <div className="stat-card-content">
                  <div className="stat-number">
                    100<span className="stat-suffix">+</span>
                  </div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="stat-card-wrapper">
              <div className="stat-card">
                <div className="stat-card-overlay"></div>
                <div className="stat-card-content">
                  <div className="stat-number">
                    500<span className="stat-suffix">+</span>
                  </div>
                  <div className="stat-label">Code Commits</div>
                </div>
              </div>
            </div>
            <div className="stat-card-wrapper">
              <div className="stat-card">
                <div className="stat-card-overlay"></div>
                <div className="stat-card-content">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-container">
            <div className="cta-card">
              <h2 className="cta-title">
                Ready to <span className="gradient-text">Soar Higher</span>?
              </h2>
              <p className="cta-text">
                Let's transform your ideas into powerful digital solutions. 
                Join the businesses that trust Code Wings to elevate their technology.
              </p>
              <button className="cta-button" onClick={() => window.location.href = '/contactform'}>
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;