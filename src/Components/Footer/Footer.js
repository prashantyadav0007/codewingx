import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Mail, ArrowRight, Sparkles } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Decorative background elements */}
      <div className="footer-decoration">
        <div className="decoration-circle decoration-circle-1"></div>
        <div className="decoration-circle decoration-circle-2"></div>
        <div className="decoration-circle decoration-circle-3"></div>
        <div className="decoration-gradient decoration-gradient-1"></div>
        <div className="decoration-gradient decoration-gradient-2"></div>
      </div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Pages Section */}
          <div className="footer-section">
            <h3 className="footer-title">
              <Sparkles className="title-icon" />
              Pages
            </h3>
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

          {/* Utility Pages Section */}
          <div className="footer-section">
            <h3 className="footer-title">
              <Sparkles className="title-icon" />
              Utility Pages
            </h3>
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
            <h3 className="footer-title">
              <Mail className="title-icon" />
              Subscribe to our newsletter
            </h3>
            <p className="newsletter-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit non amet arcu auctor orci vitae
            </p>
            <div className="newsletter-form">
              <div className="input-wrapper">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="email-input"
                />
                <button className="subscribe-btn">
                  Subscribe
                  <ArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link facebook" title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-link twitter" title="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-link instagram" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-link linkedin" title="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-link youtube" title="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="social-link whatsapp" title="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <div className="logo-section">
              <img src="/c.png" alt="CodeWingX Logo" className="logo-icon1" />
            </div>
            <span className="logo-text">odewingx</span>
          </div>
          <div className="footer-credits">
            <span>Copyright © CodeWingx | Designed by CodeWingx</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;