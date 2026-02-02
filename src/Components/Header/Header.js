import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css'; // Import the CSS file
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
    // Close mobile dropdown when main menu closes
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
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4 className="dropdown-section-title">Company</h4>
                      <Link to="/about" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>About Company</Link>
                      <Link to="/about" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Mission</Link>
                      <Link to="/ourteam" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Our Team</Link>
                      <Link to="/clientreviews" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Client Reviews</Link>
                      <Link to="/about/locations" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Locations</Link>
                    </div>
                    
                    <div className="dropdown-section">
                      <h4 className="dropdown-section-title">Approach</h4>
                      <Link to="/wherestart" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Where to Start</Link>
                      <Link to="/Approachtosd" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Approach to Software Development</Link>
                      <Link to="/ourpartners" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Our Partnership</Link>
                      <Link to="/approach/sustainability-policy" className="dropdown-link" onClick={() => setIsAboutDropdownOpen(false)}>Sustainability Policy</Link>
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
                
                <div className={`dropdown-menu services-dropdown ${isServicesDropdownOpen ? 'open' : ''}`}>
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4 className="dropdown-section-title">Development</h4>
                      <Link to="/softwaredev" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Software Development</Link>
                      <Link to="/webdev" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Web Development</Link>
                      <Link to="/services/mobile-app-development" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Mobile App Development</Link>
                      <Link to="/services/ux-design" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>UX Design</Link>
                      <Link to="/services/ui-design" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>UI Design</Link>
                      <Link to="/services/testing-qa" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Testing and QA</Link>
                    </div>
                    
                    <div className="dropdown-section">
                      <h4 className="dropdown-section-title">Consulting</h4>
                      <Link to="/services/it-consulting" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>IT Consulting</Link>
                      <Link to="/services/digital-transformation" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Digital Transformation</Link>
                      <Link to="/services/it-outsourcing" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>IT Outsourcing</Link>
                      <Link to="/services/managed-it-services" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Managed IT Services</Link>
                      <Link to="/services/application-services" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Application Services</Link>
                      <Link to="/services/data-analytics" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Data Analytics</Link>
                    </div>
                    
                    <div className="dropdown-section">
                      <h4 className="dropdown-section-title">Support</h4>
                      <Link to="/services/it-support" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>IT Support</Link>
                      <Link to="/services/infrastructure-services" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Infrastructure Services</Link>
                      <Link to="/services/it-help-desk" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>IT Help Desk</Link>
                      <Link to="/services/cybersecurity" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Cybersecurity</Link>
                      <Link to="/services/compliance-services" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Compliance Services</Link>
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
                
                <div className={`dropdown-menu solutions-dropdown ${isSolutionsDropdownOpen ? 'open' : ''}`}>
                  <div className="dropdown-content">
                    <div className="dropdown-section">
                      <h4 className="dropdown-section-title">Corporate Finance</h4>
                      <Link to="/solutions/financial-management" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Financial Management</Link>
                      <Link to="/solutions/payment-management" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Payment Management</Link>
                      <Link to="/solutions/accounting-software" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Accounting Software</Link>
                    </div>
                    
                    <div className="dropdown-section">
                      <h4 className="dropdown-section-title">Analytics</h4>
                      <Link to="/solutions/data-analytics" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Data Analytics</Link>
                      <Link to="/solutions/ai-software" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>AI Software</Link>
                    </div>
                    
                    <div className="dropdown-section">
                      <h4 className="dropdown-section-title">Customer Experience</h4>
                      <Link to="/solutions/crm" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>CRM</Link>
                      <Link to="/solutions/ecommerce" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Ecommerce</Link>
                      <Link to="/solutions/web-portals" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Web Portals</Link>
                      <Link to="/solutions/content-management" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Content Management</Link>
                      <Link to="/solutions/marketing-advertising" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Marketing & Advertising</Link>
                      <Link to="/solutions/kiosk-software" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Kiosk Software</Link>
                    </div>
                    
                    <div className="dropdown-section">
                      <h4 className="dropdown-section-title">HR & Collaboration</h4>
                      <Link to="/solutions/human-resources" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Human Resources</Link>
                      <Link to="/solutions/intranets" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Intranets</Link>
                      <Link to="/solutions/elearning" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>eLearning</Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link to="/projects" className="nav-link cart-link">Projects</Link>
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
                <div className="mobile-dropdown-content">
                  <div className="mobile-dropdown-section">
                    <h4 className="mobile-dropdown-section-title">Company</h4>
                    <Link to="/about" className="mobile-dropdown-link" onClick={closeMobileMenu}>About Company</Link>
                    <Link to="/about" className="mobile-dropdown-link" onClick={closeMobileMenu}>Mission</Link>
                    <Link to="/ourteam" className="mobile-dropdown-link" onClick={closeMobileMenu}>Our Team</Link>
                    <Link to="/clientreviews" className="mobile-dropdown-link" onClick={closeMobileMenu}>Client Reviews</Link>
                    <Link to="/about/partners" className="mobile-dropdown-link" onClick={closeMobileMenu}>Partners</Link>
                    <Link to="/about/locations" className="mobile-dropdown-link" onClick={closeMobileMenu}>Locations</Link>
                  </div>
                  
                  <div className="mobile-dropdown-section">
                    <h4 className="mobile-dropdown-section-title">Approach</h4>
                    <Link to="/wherestart" className="mobile-dropdown-link" onClick={closeMobileMenu}>Where to Start</Link>
                    <Link to="/approach/pricing-models" className="mobile-dropdown-link" onClick={closeMobileMenu}>Pricing Models</Link>
                    <Link to="/approach/software-development" className="mobile-dropdown-link" onClick={closeMobileMenu}>Approach to Software Development</Link>
                    <Link to="/approach/security-management" className="mobile-dropdown-link" onClick={closeMobileMenu}>Approach to Security Management</Link>
                    <Link to="/approach/technology-partnership" className="mobile-dropdown-link" onClick={closeMobileMenu}>Technology Partnership</Link>
                    <Link to="/approach/sustainability-policy" className="mobile-dropdown-link" onClick={closeMobileMenu}>Sustainability Policy</Link>
                    <Link to="/approach/faq" className="mobile-dropdown-link" onClick={closeMobileMenu}>FAQ</Link>
                  </div>
                  
                  <div className="mobile-dropdown-section">
                    <h4 className="mobile-dropdown-section-title">Recognition</h4>
                    <Link to="/recognition/testimonials" className="mobile-dropdown-link" onClick={closeMobileMenu}>Testimonials</Link>
                    <Link to="/recognition/awards" className="mobile-dropdown-link" onClick={closeMobileMenu}>Awards</Link>
                  </div>
                  
                  <div className="mobile-dropdown-section">
                    <h4 className="mobile-dropdown-section-title">Join Us</h4>
                    <Link to="/careers" className="mobile-dropdown-link" onClick={closeMobileMenu}>Careers</Link>
                    <Link to="/careers/become-agent" className="mobile-dropdown-link" onClick={closeMobileMenu}>Become Our Agent</Link>
                    <Link to="/careers/referral-program" className="mobile-dropdown-link" onClick={closeMobileMenu}>Referral Program</Link>
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
                <div className="mobile-dropdown-content">
                  <div className="mobile-dropdown-section">
                    <h4 className="mobile-dropdown-section-title">Development</h4>
                    <Link to="/softwaredev" className="mobile-dropdown-link" onClick={closeMobileMenu}>Software Development</Link>
                    <Link to="/webdev" className="mobile-dropdown-link" onClick={closeMobileMenu}>Web Development</Link>
                    <Link to="/services/mobile-app-development" className="mobile-dropdown-link" onClick={closeMobileMenu}>Mobile App Development</Link>
                    <Link to="/services/ux-design" className="mobile-dropdown-link" onClick={closeMobileMenu}>UX Design</Link>
                    <Link to="/services/ui-design" className="mobile-dropdown-link" onClick={closeMobileMenu}>UI Design</Link>
                    <Link to="/services/testing-qa" className="mobile-dropdown-link" onClick={closeMobileMenu}>Testing and QA</Link>
                  </div>
                  
                  <div className="mobile-dropdown-section">
                    <h4 className="mobile-dropdown-section-title">Consulting</h4>
                    <Link to="/services/it-consulting" className="mobile-dropdown-link" onClick={closeMobileMenu}>IT Consulting</Link>
                    <Link to="/services/digital-transformation" className="mobile-dropdown-link" onClick={closeMobileMenu}>Digital Transformation</Link>
                    <Link to="/services/it-outsourcing" className="mobile-dropdown-link" onClick={closeMobileMenu}>IT Outsourcing</Link>
                    <Link to="/services/managed-it-services" className="mobile-dropdown-link" onClick={closeMobileMenu}>Managed IT Services</Link>
                    <Link to="/services/application-services" className="mobile-dropdown-link" onClick={closeMobileMenu}>Application Services</Link>
                    <Link to="/services/data-analytics" className="mobile-dropdown-link" onClick={closeMobileMenu}>Data Analytics</Link>
                  </div>
                  
                  <div className="mobile-dropdown-section">
                    <h4 className="mobile-dropdown-section-title">Support</h4>
                    <Link to="/services/it-support" className="mobile-dropdown-link" onClick={closeMobileMenu}>IT Support</Link>
                    <Link to="/services/infrastructure-services" className="mobile-dropdown-link" onClick={closeMobileMenu}>Infrastructure Services</Link>
                    <Link to="/services/it-help-desk" className="mobile-dropdown-link" onClick={closeMobileMenu}>IT Help Desk</Link>
                    <Link to="/services/cybersecurity" className="mobile-dropdown-link" onClick={closeMobileMenu}>Cybersecurity</Link>
                    <Link to="/services/compliance-services" className="mobile-dropdown-link" onClick={closeMobileMenu}>Compliance Services</Link>
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
                <div className="mobile-dropdown-content">
                  <div className="mobile-dropdown-section">
                    <h4 className="mobile-dropdown-section-title">Corporate Finance</h4>
                    <Link to="/solutions/financial-management" className="mobile-dropdown-link" onClick={closeMobileMenu}>Financial Management</Link>
                    <Link to="/solutions/payment-management" className="mobile-dropdown-link" onClick={closeMobileMenu}>Payment Management</Link>
                    <Link to="/solutions/accounting-software" className="mobile-dropdown-link" onClick={closeMobileMenu}>Accounting Software</Link>
                  </div>
                  
                  <div className="mobile-dropdown-section">
                    <h4 className="mobile-dropdown-section-title">Analytics</h4>
                    <Link to="/solutions/data-analytics" className="mobile-dropdown-link" onClick={closeMobileMenu}>Data Analytics</Link>
                    <Link to="/solutions/ai-software" className="mobile-dropdown-link" onClick={closeMobileMenu}>AI Software</Link>
                  </div>
                  
                  <div className="mobile-dropdown-section">
                    <h4 className="mobile-dropdown-section-title">Customer Experience</h4>
                    <Link to="/solutions/crm" className="mobile-dropdown-link" onClick={closeMobileMenu}>CRM</Link>
                    <Link to="/solutions/ecommerce" className="mobile-dropdown-link" onClick={closeMobileMenu}>Ecommerce</Link>
                    <Link to="/solutions/web-portals" className="mobile-dropdown-link" onClick={closeMobileMenu}>Web Portals</Link>
                    <Link to="/solutions/content-management" className="mobile-dropdown-link" onClick={closeMobileMenu}>Content Management</Link>
                    <Link to="/solutions/marketing-advertising" className="mobile-dropdown-link" onClick={closeMobileMenu}>Marketing & Advertising</Link>
                    <Link to="/solutions/kiosk-software" className="mobile-dropdown-link" onClick={closeMobileMenu}>Kiosk Software</Link>
                  </div>
                  
                  <div className="mobile-dropdown-section">
                    <h4 className="mobile-dropdown-section-title">HR & Collaboration</h4>
                    <Link to="/solutions/human-resources" className="mobile-dropdown-link" onClick={closeMobileMenu}>Human Resources</Link>
                    <Link to="/solutions/intranets" className="mobile-dropdown-link" onClick={closeMobileMenu}>Intranets</Link>
                    <Link to="/solutions/elearning" className="mobile-dropdown-link" onClick={closeMobileMenu}>eLearning</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/projects" className="mobile-nav-link" onClick={closeMobileMenu}>Projects</Link>

            <div className="mobile-actions">
              <Link to="/contactform">
                <button className="get-started-btn">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;