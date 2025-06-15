import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close mobile dropdown when main menu closes
    if (isMenuOpen) {
      setIsMobileAboutDropdownOpen(false);
    }
  };

  const handleAboutMouseEnter = () => {
    setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    setIsAboutDropdownOpen(false);
  };

  const toggleMobileAboutDropdown = () => {
    setIsMobileAboutDropdownOpen(!isMobileAboutDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileAboutDropdownOpen(false);
  };

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024;

  return (
    <div className="landing-page">
      {/* Header Navigation */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo-section">
              <img src="/c.png" alt="CodeWingX Logo" className="logo-icon1" />
              <span className="logo-text">odewingX</span>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="nav-menu">
                <div 
                  className="nav-dropdown"
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  <a href="#about" className="nav-link dropdown-trigger">
                    About
                    <ChevronDown 
                      size={16} 
                      className={`dropdown-chevron ${isAboutDropdownOpen ? 'rotated' : ''}`}
                    />
                  </a>
                  
                  <div className={`dropdown-menu ${isAboutDropdownOpen ? 'open' : ''}`}>
                    <div className="dropdown-content">
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Company</h4>
                        <a href="/about/company" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>About Company</a>
                        <a href="/about/mission" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Mission</a>
                        <a href="/about/leadership" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Leadership</a>
                        <a href="/about/team" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Our Team</a>
                        <a href="/about/portfolio" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Portfolio</a>
                        <a href="/about/client-reviews" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Client Reviews</a>
                        <a href="/about/partners" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Partners</a>
                        <a href="/about/locations" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Locations</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Approach</h4>
                        <a href="/approach/getting-started" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Where to Start</a>
                        <a href="/approach/pricing-models" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Pricing Models</a>
                        <a href="/approach/software-development" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Approach to Software Development</a>
                        <a href="/approach/security-management" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Approach to Security Management</a>
                        <a href="/approach/technology-partnership" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Technology Partnership</a>
                        <a href="/approach/sustainability-policy" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Sustainability Policy</a>
                        <a href="/approach/faq" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>FAQ</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Recognition</h4>
                        <a href="/recognition/testimonials" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Testimonials</a>
                        <a href="/recognition/awards" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Awards</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Join Us</h4>
                        <a href="/careers" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Careers</a>
                        <a href="/careers/become-agent" className="dropdown-link" onClick={() => setIsMobileAboutDropdownOpen(false)}>Become Our Agent</a>
                        <a href="/careers/referral-program" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Referral Program</a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a href="/services" className="nav-link">Services</a>
                <a href="/industries" className="nav-link">Industries</a>
                <a href="/solutions" className="nav-link">Solutions</a>
                <a href="/technologies" className="nav-link">Technologies</a>
                <a href="#projects" className="nav-link cart-link">Projects</a>
              </div>
            )}

            {/* Right Section */}
            <div className="nav-actions">
              {!isMobile && (
                <>
                  <button className="get-started-btn">Contact Us</button>
                </>
              )}
              
              {/* Mobile Menu Toggle */}
              {isMobile && (
                <button
                  className="mobile-menu-toggle"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-content">
              {/* Mobile About Dropdown */}
              <div className="mobile-nav-dropdown">
                <button 
                  className="mobile-nav-link dropdown-trigger-mobile" 
                  onClick={toggleMobileAboutDropdown}
                >
                  About
                  <ChevronDown 
                    size={16} 
                    className={`dropdown-chevron-mobile ${isMobileAboutDropdownOpen ? 'rotated' : ''}`}
                  />
                </button>
                
                <div className={`mobile-dropdown-menu ${isMobileAboutDropdownOpen ? 'open' : ''}`}>
                  <div className="mobile-dropdown-content">
                    <div className="mobile-dropdown-section">
                      <h4 className="mobile-dropdown-section-title">Company</h4>
                      <a href="/about/company" className="mobile-dropdown-link" onClick={closeMobileMenu}>About Company</a>
                      <a href="/about/mission" className="mobile-dropdown-link" onClick={closeMobileMenu}>Mission</a>
                      <a href="/about/leadership" className="mobile-dropdown-link" onClick={closeMobileMenu}>Leadership</a>
                      <a href="/about/team" className="mobile-dropdown-link" onClick={closeMobileMenu}>Our Team</a>
                      <a href="/about/portfolio" className="mobile-dropdown-link" onClick={closeMobileMenu}>Portfolio</a>
                      <a href="/about/client-reviews" className="mobile-dropdown-link" onClick={closeMobileMenu}>Client Reviews</a>
                      <a href="/about/partners" className="mobile-dropdown-link" onClick={closeMobileMenu}>Partners</a>
                      <a href="/about/locations" className="mobile-dropdown-link" onClick={closeMobileMenu}>Locations</a>
                    </div>
                    
                    <div className="mobile-dropdown-section">
                      <h4 className="mobile-dropdown-section-title">Approach</h4>
                      <a href="/approach/getting-started" className="mobile-dropdown-link" onClick={closeMobileMenu}>Where to Start</a>
                      <a href="/approach/pricing-models" className="mobile-dropdown-link" onClick={closeMobileMenu}>Pricing Models</a>
                      <a href="/approach/software-development" className="mobile-dropdown-link" onClick={closeMobileMenu}>Approach to Software Development</a>
                      <a href="/approach/security-management" className="mobile-dropdown-link" onClick={closeMobileMenu}>Approach to Security Management</a>
                      <a href="/approach/technology-partnership" className="mobile-dropdown-link" onClick={closeMobileMenu}>Technology Partnership</a>
                      <a href="/approach/sustainability-policy" className="mobile-dropdown-link" onClick={closeMobileMenu}>Sustainability Policy</a>
                      <a href="/approach/faq" className="mobile-dropdown-link" onClick={closeMobileMenu}>FAQ</a>
                    </div>
                    
                    <div className="mobile-dropdown-section">
                      <h4 className="mobile-dropdown-section-title">Recognition</h4>
                      <a href="/recognition/testimonials" className="mobile-dropdown-link" onClick={closeMobileMenu}>Testimonials</a>
                      <a href="/recognition/awards" className="mobile-dropdown-link" onClick={closeMobileMenu}>Awards</a>
                    </div>
                    
                    <div className="mobile-dropdown-section">
                      <h4 className="mobile-dropdown-section-title">Join Us</h4>
                      <a href="/careers" className="mobile-dropdown-link" onClick={closeMobileMenu}>Careers</a>
                      <a href="/careers/become-agent" className="mobile-dropdown-link" onClick={closeMobileMenu}>Become Our Agent</a>
                      <a href="/careers/referral-program" className="mobile-dropdown-link" onClick={closeMobileMenu}>Referral Program</a>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#services" className="mobile-nav-link" onClick={closeMobileMenu}>Services</a>
              <a href="#industries" className="mobile-nav-link" onClick={closeMobileMenu}>Industries</a>
              <a href="#solutions" className="mobile-nav-link" onClick={closeMobileMenu}>Solutions</a>
              <a href="#technologies" className="mobile-nav-link" onClick={closeMobileMenu}>Technologies</a>
              <a href="#projects" className="mobile-nav-link" onClick={closeMobileMenu}>Projects</a>

              <div className="mobile-actions">
                <button className="get-started-btn">Contact Us</button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */} 
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Codewingx</span>
          </h1>
          <h1 className="hero-subtitle">
           Your Tech Partner from Start to Launch.<br/>
            A New code A New wings Connect with codewingx.
          </h1>

          <div className="hero-actions">
            <button className="buy-template-btn">Recent Projects</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;