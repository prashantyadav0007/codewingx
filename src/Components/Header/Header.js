import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isMobileSolutionsDropdownOpen, setIsMobileSolutionsDropdownOpen] = useState(false);
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
    if (isMenuOpen) {
      setIsMobileAboutDropdownOpen(false);
      setIsMobileServicesDropdownOpen(false);
      setIsMobileSolutionsDropdownOpen(false);
    }
  };

  const handleAboutMouseEnter = () => {
    setIsAboutDropdownOpen(true);
    setIsServicesDropdownOpen(false);
    setIsSolutionsDropdownOpen(false);
  };

  const handleAboutMouseLeave = () => {
    setIsAboutDropdownOpen(false);
  };

  const handleServicesMouseEnter = () => {
    setIsServicesDropdownOpen(true);
    setIsAboutDropdownOpen(false);
    setIsSolutionsDropdownOpen(false);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  const handleSolutionsMouseEnter = () => {
    setIsSolutionsDropdownOpen(true);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handleSolutionsMouseLeave = () => {
    setIsSolutionsDropdownOpen(false);
  };

  const toggleMobileAboutDropdown = () => {
    setIsMobileAboutDropdownOpen(!isMobileAboutDropdownOpen);
    setIsMobileServicesDropdownOpen(false);
    setIsMobileSolutionsDropdownOpen(false);
  };

  const toggleMobileServicesDropdown = () => {
    setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
    setIsMobileAboutDropdownOpen(false);
    setIsMobileSolutionsDropdownOpen(false);
  };

  const toggleMobileSolutionsDropdown = () => {
    setIsMobileSolutionsDropdownOpen(!isMobileSolutionsDropdownOpen);
    setIsMobileAboutDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileAboutDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
    setIsMobileSolutionsDropdownOpen(false);
  };

  const isMobile = windowWidth <= 768;

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div className="logo-section">
            <img src="/c.png" alt="CodeWingX Logo" className="logo-icon1" />
            <span className="logo-text">CodeWingX</span>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="nav-menu">
              <div 
                className="nav-dropdown"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <button className="nav-link dropdown-trigger">
                  About
                  <ChevronDown 
                    size={16} 
                    className={`dropdown-chevron ${isAboutDropdownOpen ? 'rotated' : ''}`}
                  />
                </button>
                
                <div className={`dropdown-menu ${isAboutDropdownOpen ? 'open' : ''}`}>
                  <div className="dropdown-grid">
                    <div className="dropdown-column">
                      <h4 className="dropdown-column-title">Company</h4>
                      <Link to="/about" className="dropdown-item" onClick={() => setIsAboutDropdownOpen(false)}>
                        <span className="item-text">About Company</span>
                      </Link>
                      <Link to="/about" className="dropdown-item" onClick={() => setIsAboutDropdownOpen(false)}>
                        <span className="item-text">Mission</span>
                      </Link>
                      <Link to="/ourteam" className="dropdown-item" onClick={() => setIsAboutDropdownOpen(false)}>
                        <span className="item-text">Our Team</span>
                      </Link>
                      <Link to="/clientreviews" className="dropdown-item" onClick={() => setIsAboutDropdownOpen(false)}>
                        <span className="item-text">Client Reviews</span>
                      </Link>
                      <Link to="/about/locations" className="dropdown-item" onClick={() => setIsAboutDropdownOpen(false)}>
                        <span className="item-text">Locations</span>
                      </Link>
                    </div>
                    
                    <div className="dropdown-column">
                      <h4 className="dropdown-column-title">Approach</h4>
                      <Link to="/wherestart" className="dropdown-item" onClick={() => setIsAboutDropdownOpen(false)}>
                        <span className="item-text">Where to Start</span>
                      </Link>
                      <Link to="/Approachtosd" className="dropdown-item" onClick={() => setIsAboutDropdownOpen(false)}>
                        <span className="item-text">Software Development</span>
                      </Link>
                      <Link to="/ourpartners" className="dropdown-item" onClick={() => setIsAboutDropdownOpen(false)}>
                        <span className="item-text">Our Partnership</span>
                      </Link>
                      <Link to="/approach/sustainability-policy" className="dropdown-item" onClick={() => setIsAboutDropdownOpen(false)}>
                        <span className="item-text">Sustainability Policy</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className="nav-dropdown"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button className="nav-link dropdown-trigger">
                  Services
                  <ChevronDown 
                    size={16} 
                    className={`dropdown-chevron ${isServicesDropdownOpen ? 'rotated' : ''}`}
                  />
                </button>
                
                <div className={`dropdown-menu dropdown-menu-large ${isServicesDropdownOpen ? 'open' : ''}`}>
                  <div className="dropdown-grid dropdown-grid-3">
                    <div className="dropdown-column">
                      <h4 className="dropdown-column-title">Development</h4>
                      <Link to="/softwaredev" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">Software Development</span>
                      </Link>
                      <Link to="/webdev" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">Web Development</span>
                      </Link>
                      <Link to="/services/mobile-app-development" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">Mobile App Development</span>
                      </Link>
                      <Link to="/services/ux-design" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">UX Design</span>
                      </Link>
                      <Link to="/services/ui-design" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">UI Design</span>
                      </Link>
                      <Link to="/services/testing-qa" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">Testing and QA</span>
                      </Link>
                    </div>
                    
                    <div className="dropdown-column">
                      <h4 className="dropdown-column-title">Consulting</h4>
                      <Link to="/services/it-consulting" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">IT Consulting</span>
                      </Link>
                      <Link to="/services/digital-transformation" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">Digital Transformation</span>
                      </Link>
                      <Link to="/services/it-outsourcing" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">IT Outsourcing</span>
                      </Link>
                      <Link to="/services/managed-it-services" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">Managed IT Services</span>
                      </Link>
                      <Link to="/services/application-services" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">Application Services</span>
                      </Link>
                      <Link to="/services/data-analytics" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">Data Analytics</span>
                      </Link>
                    </div>
                    
                    <div className="dropdown-column">
                      <h4 className="dropdown-column-title">Support</h4>
                      <Link to="/services/it-support" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">IT Support</span>
                      </Link>
                      <Link to="/services/infrastructure-services" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">Infrastructure Services</span>
                      </Link>
                      <Link to="/services/it-help-desk" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">IT Help Desk</span>
                      </Link>
                      <Link to="/services/cybersecurity" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">Cybersecurity</span>
                      </Link>
                      <Link to="/services/compliance-services" className="dropdown-item" onClick={() => setIsServicesDropdownOpen(false)}>
                        <span className="item-text">Compliance Services</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="nav-dropdown"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <button className="nav-link dropdown-trigger">
                  Solutions
                  <ChevronDown 
                    size={16} 
                    className={`dropdown-chevron ${isSolutionsDropdownOpen ? 'rotated' : ''}`}
                  />
                </button>
                
                <div className={`dropdown-menu dropdown-menu-large ${isSolutionsDropdownOpen ? 'open' : ''}`}>
                  <div className="dropdown-grid dropdown-grid-4">
                    <div className="dropdown-column">
                      <h4 className="dropdown-column-title">Corporate Finance</h4>
                      <Link to="/solutions/financial-management" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">Financial Management</span>
                      </Link>
                      <Link to="/solutions/payment-management" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">Payment Management</span>
                      </Link>
                      <Link to="/solutions/accounting-software" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">Accounting Software</span>
                      </Link>
                    </div>
                    
                    <div className="dropdown-column">
                      <h4 className="dropdown-column-title">Analytics</h4>
                      <Link to="/solutions/data-analytics" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">Data Analytics</span>
                      </Link>
                      <Link to="/solutions/ai-software" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">AI Software</span>
                      </Link>
                    </div>
                    
                    <div className="dropdown-column">
                      <h4 className="dropdown-column-title">Customer Experience</h4>
                      <Link to="/solutions/crm" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">CRM</span>
                      </Link>
                      <Link to="/solutions/ecommerce" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">Ecommerce</span>
                      </Link>
                      <Link to="/solutions/web-portals" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">Web Portals</span>
                      </Link>
                      <Link to="/solutions/content-management" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">Content Management</span>
                      </Link>
                      <Link to="/solutions/marketing-advertising" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">Marketing & Advertising</span>
                      </Link>
                      <Link to="/solutions/kiosk-software" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">Kiosk Software</span>
                      </Link>
                    </div>
                    
                    <div className="dropdown-column">
                      <h4 className="dropdown-column-title">HR & Collaboration</h4>
                      <Link to="/solutions/human-resources" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">Human Resources</span>
                      </Link>
                      <Link to="/solutions/intranets" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">Intranets</span>
                      </Link>
                      <Link to="/solutions/elearning" className="dropdown-item" onClick={() => setIsSolutionsDropdownOpen(false)}>
                        <span className="item-text">eLearning</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link to="/projects" className="nav-link">Projects</Link>
            </div>
          )}

          {/* Right Section */}
          <div className="nav-actions">
            {!isMobile && (
              <Link to="/contactform">
                <button className="get-started-btn">Contact Us</button>
              </Link>
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
                <div className="mobile-dropdown-grid">
                  <div className="mobile-dropdown-column">
                    <h4 className="mobile-column-title">Company</h4>
                    <Link to="/about" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">About Company</span>
                    </Link>
                    <Link to="/about" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Mission</span>
                    </Link>
                    <Link to="/ourteam" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Our Team</span>
                    </Link>
                    <Link to="/clientreviews" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Client Reviews</span>
                    </Link>
                    <Link to="/about/locations" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Locations</span>
                    </Link>
                  </div>
                  
                  <div className="mobile-dropdown-column">
                    <h4 className="mobile-column-title">Approach</h4>
                    <Link to="/wherestart" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Where to Start</span>
                    </Link>
                    <Link to="/Approachtosd" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Software Development</span>
                    </Link>
                    <Link to="/ourpartners" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Our Partnership</span>
                    </Link>
                    <Link to="/approach/sustainability-policy" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Sustainability Policy</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Services Dropdown */}
            <div className="mobile-nav-dropdown">
              <button 
                className="mobile-nav-link dropdown-trigger-mobile" 
                onClick={toggleMobileServicesDropdown}
              >
                Services
                <ChevronDown 
                  size={16} 
                  className={`dropdown-chevron-mobile ${isMobileServicesDropdownOpen ? 'rotated' : ''}`}
                />
              </button>
              
              <div className={`mobile-dropdown-menu ${isMobileServicesDropdownOpen ? 'open' : ''}`}>
                <div className="mobile-dropdown-grid">
                  <div className="mobile-dropdown-column">
                    <h4 className="mobile-column-title">Development</h4>
                    <Link to="/softwaredev" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Software Development</span>
                    </Link>
                    <Link to="/webdev" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Web Development</span>
                    </Link>
                    <Link to="/services/mobile-app-development" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Mobile App Development</span>
                    </Link>
                    <Link to="/services/ux-design" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">UX Design</span>
                    </Link>
                    <Link to="/services/ui-design" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">UI Design</span>
                    </Link>
                    <Link to="/services/testing-qa" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Testing and QA</span>
                    </Link>
                  </div>
                  
                  <div className="mobile-dropdown-column">
                    <h4 className="mobile-column-title">Consulting</h4>
                    <Link to="/services/it-consulting" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">IT Consulting</span>
                    </Link>
                    <Link to="/services/digital-transformation" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Digital Transformation</span>
                    </Link>
                    <Link to="/services/it-outsourcing" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">IT Outsourcing</span>
                    </Link>
                    <Link to="/services/managed-it-services" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Managed IT Services</span>
                    </Link>
                    <Link to="/services/application-services" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Application Services</span>
                    </Link>
                    <Link to="/services/data-analytics" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Data Analytics</span>
                    </Link>
                  </div>
                  
                  <div className="mobile-dropdown-column">
                    <h4 className="mobile-column-title">Support</h4>
                    <Link to="/services/it-support" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">IT Support</span>
                    </Link>
                    <Link to="/services/infrastructure-services" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Infrastructure Services</span>
                    </Link>
                    <Link to="/services/it-help-desk" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">IT Help Desk</span>
                    </Link>
                    <Link to="/services/cybersecurity" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Cybersecurity</span>
                    </Link>
                    <Link to="/services/compliance-services" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Compliance Services</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Solutions Dropdown */}
            <div className="mobile-nav-dropdown">
              <button 
                className="mobile-nav-link dropdown-trigger-mobile" 
                onClick={toggleMobileSolutionsDropdown}
              >
                Solutions
                <ChevronDown 
                  size={16} 
                  className={`dropdown-chevron-mobile ${isMobileSolutionsDropdownOpen ? 'rotated' : ''}`}
                />
              </button>
              
              <div className={`mobile-dropdown-menu ${isMobileSolutionsDropdownOpen ? 'open' : ''}`}>
                <div className="mobile-dropdown-grid">
                  <div className="mobile-dropdown-column">
                    <h4 className="mobile-column-title">Corporate Finance</h4>
                    <Link to="/solutions/financial-management" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Financial Management</span>
                    </Link>
                    <Link to="/solutions/payment-management" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Payment Management</span>
                    </Link>
                    <Link to="/solutions/accounting-software" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Accounting Software</span>
                    </Link>
                  </div>
                  
                  <div className="mobile-dropdown-column">
                    <h4 className="mobile-column-title">Analytics</h4>
                    <Link to="/solutions/data-analytics" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Data Analytics</span>
                    </Link>
                    <Link to="/solutions/ai-software" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">AI Software</span>
                    </Link>
                  </div>
                  
                  <div className="mobile-dropdown-column">
                    <h4 className="mobile-column-title">Customer Experience</h4>
                    <Link to="/solutions/crm" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">CRM</span>
                    </Link>
                    <Link to="/solutions/ecommerce" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Ecommerce</span>
                    </Link>
                    <Link to="/solutions/web-portals" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Web Portals</span>
                    </Link>
                    <Link to="/solutions/content-management" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Content Management</span>
                    </Link>
                    <Link to="/solutions/marketing-advertising" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Marketing & Advertising</span>
                    </Link>
                    <Link to="/solutions/kiosk-software" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Kiosk Software</span>
                    </Link>
                  </div>
                  
                  <div className="mobile-dropdown-column">
                    <h4 className="mobile-column-title">HR & Collaboration</h4>
                    <Link to="/solutions/human-resources" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Human Resources</span>
                    </Link>
                    <Link to="/solutions/intranets" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">Intranets</span>
                    </Link>
                    <Link to="/solutions/elearning" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                      <span className="mobile-item-text">eLearning</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/projects" className="mobile-nav-link" onClick={closeMobileMenu}>Projects</Link>

            <div className="mobile-actions">
              <Link to="/contactform">
                <button className="get-started-btn" onClick={closeMobileMenu}>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;