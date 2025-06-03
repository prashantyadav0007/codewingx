import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Pages Section */}
          <div className="footer-section">
            <h3 className="footer-title">Pages</h3>
            <ul className="footer-links">
              <li><a href="/sales-home">Sales Home</a></li>
              <li><a href="/primary-home">Primary Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
              <li>
                <a href="/blog-post">Blog Post</a>
                <span className="cms-badge">CMS</span>
              </li>
              <li><a href="/pricing">Pricing</a></li>
              <li>
                <a href="/pricing-single">Pricing Single</a>
                <span className="cms-badge">CMS</span>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="footer-section">
            <h3 className="footer-title-invisible">Links</h3>
            <ul className="footer-links">
              <li><a href="/integrations">Integrations</a></li>
              <li>
                <a href="/integration-single">Integration Single</a>
                <span className="cms-badge">CMS</span>
              </li>
              <li><a href="/careers">Careers</a></li>
              <li>
                <a href="/careers-single">Careers Single</a>
                <span className="cms-badge">CMS</span>
              </li>
              <li><a href="/features">Features</a></li>
              <li><a href="/team">Team</a></li>
              <li>
                <a href="/team-single">Team Single</a>
                <span className="cms-badge">CMS</span>
              </li>
            </ul>
          </div>

          {/* Utility Pages Section */}
          <div className="footer-section">
            <h3 className="footer-title">Utility Pages</h3>
            <ul className="footer-links">
              <li><a href="/start-here">Start Here</a></li>
              <li><a href="/style-guide">Style Guide</a></li>
              <li><a href="/password-protected">Password Protected</a></li>
              <li><a href="/404">404 Not Found</a></li>
              <li><a href="/licenses">Licenses</a></li>
              <li><a href="/changelog">Changelog</a></li>
              <li><a href="/more-templates" className="more-templates">More Templates</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section newsletter-section">
            <h3 className="footer-title">Subscribe to our newsletter</h3>
            <p className="newsletter-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit non amet arcu auctor orci vitae
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="email-input"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <div className="social-links">
              <a href="#" className="social-link facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link youtube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-link whatsapp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <div className="logo-icon"></div>

              <span style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Codewingx</span>
          </div>
          <div className="footer-credits">
            <span>Copyright © CodeWingx | Designed by CodeWingx </span>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;