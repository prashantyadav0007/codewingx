import React, { useState, useCallback } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MessageCircle, 
  Sparkles, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = useCallback((section) => {
    setOpenDropdown((prev) => prev === section ? null : section);
  }, []);

  const handleKeyDown = useCallback((e, section) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown(section);
    }
  }, [toggleDropdown]);

  return (
    <footer className="footer" role="contentinfo">
      {/* Decorative background elements */}
      <div className="footer-decoration" aria-hidden="true">
        <div className="decoration-circle decoration-circle-1" />
        <div className="decoration-circle decoration-circle-2" />
        <div className="decoration-circle decoration-circle-3" />
        <div className="decoration-gradient decoration-gradient-1" />
        <div className="decoration-gradient decoration-gradient-2" />
      </div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Section */}
          <div className="footer-section">
            <h3 
              className="footer-title dropdown-toggle" 
              onClick={() => toggleDropdown('company')}
              onKeyDown={(e) => handleKeyDown(e, 'company')}
              role="button"
              tabIndex={0}
              aria-expanded={openDropdown === 'company'}
              aria-controls="company-links"
            >
              <Sparkles className="title-icon" aria-hidden="true" />
              COMPANY
              <span className="dropdown-icon" aria-hidden="true">
                {openDropdown === 'company' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </h3>
            <ul 
              id="company-links"
              className={`footer-links ${openDropdown === 'company' ? 'open' : ''}`}
            >
              <li><a href="/overview">Overview</a></li>
              <li><a href="/initiative">Initiative by Serpent</a></li>
              <li><a href="/culture">Company Culture</a></li>
              <li><a href="/career">Career</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Discover Section */}
          <div className="footer-section">
            <h3 
              className="footer-title dropdown-toggle" 
              onClick={() => toggleDropdown('discover')}
              onKeyDown={(e) => handleKeyDown(e, 'discover')}
              role="button"
              tabIndex={0}
              aria-expanded={openDropdown === 'discover'}
              aria-controls="discover-links"
            >
              <Sparkles className="title-icon" aria-hidden="true" />
              DISCOVER
              <span className="dropdown-icon" aria-hidden="true">
                {openDropdown === 'discover' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </h3>
            <ul 
              id="discover-links"
              className={`footer-links ${openDropdown === 'discover' ? 'open' : ''}`}
            >
              <li><a href="/about">About Us</a></li>
              <li><a href="/founder">Founder</a></li>
              <li><a href="/contactform">Contact Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="footer-section">
            <h3 
              className="footer-title dropdown-toggle" 
              onClick={() => toggleDropdown('policies')}
              onKeyDown={(e) => handleKeyDown(e, 'policies')}
              role="button"
              tabIndex={0}
              aria-expanded={openDropdown === 'policies'}
              aria-controls="policies-links"
            >
              <Sparkles className="title-icon" aria-hidden="true" />
              POLICIES
              <span className="dropdown-icon" aria-hidden="true">
                {openDropdown === 'policies' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </h3>
            <ul 
              id="policies-links"
              className={`footer-links ${openDropdown === 'policies' ? 'open' : ''}`}
            >
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/terms">Terms &amp; Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section newsletter-section">
            <h3 className="footer-title">
              <Sparkles className="title-icon" aria-hidden="true" />
              Our Social Media
            </h3>
            
            <nav className="social-links" aria-label="Social media links">
              <a 
                href="https://facebook.com/codewingx" 
                className="social-link facebook" 
                aria-label="Follow us on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com/codewingx" 
                className="social-link twitter" 
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com/codewingx" 
                className="social-link instagram" 
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com/company/codewingx" 
                className="social-link linkedin" 
                aria-label="Follow us on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://youtube.com/@codewingx" 
                className="social-link youtube" 
                aria-label="Subscribe to our YouTube channel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                className="social-link whatsapp" 
                aria-label="Contact us on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <div className="logo-section">
              <img src="/c.png" alt="CodeWingX Logo" className="logo-icon1" />
            </div>
            <span className="logo-text">CodeWingX</span>
          </div>
          <div className="footer-credits">
            <p>Copyright &copy; 2026 CodeWingX | All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;