import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

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
            <h3 
              className="footer-title dropdown-toggle" 
              onClick={() => toggleDropdown('discover')}
            >
              <Sparkles className="title-icon" />
              DISCOVER
              <div className="dropdown-icon">
                {openDropdown === 'discover' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </h3>
            <ul className={`footer-links ${openDropdown === 'discover' ? 'open' : ''}`}>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contactform">Contact Us</a></li>
              <li><a href="/about">Services</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* Utility Pages Section */}
          <div className="footer-section">
            <h3 
              className="footer-title dropdown-toggle" 
              onClick={() => toggleDropdown('policies')}
            >
              <Sparkles className="title-icon" />
              POLICIES
              <div className="dropdown-icon">
                {openDropdown === 'policies' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </h3>
            <ul className={`footer-links ${openDropdown === 'policies' ? 'open' : ''}`}>
              <li><a href="/404">FAQs</a></li>
              <li><a href="/licenses">Terms & Conditions</a></li>
              <li><a href="/404">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section newsletter-section">
            <h3 className="footer-title">
              <Sparkles className="title-icon" />
              Our Social Media
            </h3>
            
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