import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isTechnologiesDropdownOpen, setIsTechnologiesDropdownOpen] = useState(false);
  const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isMobileIndustriesDropdownOpen, setIsMobileIndustriesDropdownOpen] = useState(false);
  const [isMobileSolutionsDropdownOpen, setIsMobileSolutionsDropdownOpen] = useState(false);
  const [isMobileTechnologiesDropdownOpen, setIsMobileTechnologiesDropdownOpen] = useState(false);
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
      setIsMobileIndustriesDropdownOpen(false);
      setIsMobileSolutionsDropdownOpen(false);
      setIsMobileTechnologiesDropdownOpen(false);
    }
  };

  const handleAboutMouseEnter = () => {
    setIsAboutDropdownOpen(true);
    setIsServicesDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
    setIsSolutionsDropdownOpen(false);
    setIsTechnologiesDropdownOpen(false);
  };

  const handleAboutMouseLeave = () => {
    setIsAboutDropdownOpen(false);
  };

  const handleServicesMouseEnter = () => {
    setIsServicesDropdownOpen(true);
    setIsAboutDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
    setIsSolutionsDropdownOpen(false);
    setIsTechnologiesDropdownOpen(false);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  const handleIndustriesMouseEnter = () => {
    setIsIndustriesDropdownOpen(true);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsSolutionsDropdownOpen(false);
    setIsTechnologiesDropdownOpen(false);
  };

  const handleIndustriesMouseLeave = () => {
    setIsIndustriesDropdownOpen(false);
  };

  const handleSolutionsMouseEnter = () => {
    setIsSolutionsDropdownOpen(true);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
    setIsTechnologiesDropdownOpen(false);
  };

  const handleSolutionsMouseLeave = () => {
    setIsSolutionsDropdownOpen(false);
  };

  const handleTechnologiesMouseEnter = () => {
    setIsTechnologiesDropdownOpen(true);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
    setIsSolutionsDropdownOpen(false);
  };

  const handleTechnologiesMouseLeave = () => {
    setIsTechnologiesDropdownOpen(false);
  };

  const toggleMobileAboutDropdown = () => {
    setIsMobileAboutDropdownOpen(!isMobileAboutDropdownOpen);
    setIsMobileServicesDropdownOpen(false);
    setIsMobileIndustriesDropdownOpen(false);
    setIsMobileSolutionsDropdownOpen(false);
    setIsMobileTechnologiesDropdownOpen(false);
  };

  const toggleMobileServicesDropdown = () => {
    setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
    setIsMobileAboutDropdownOpen(false);
    setIsMobileIndustriesDropdownOpen(false);
    setIsMobileSolutionsDropdownOpen(false);
    setIsMobileTechnologiesDropdownOpen(false);
  };

  const toggleMobileIndustriesDropdown = () => {
    setIsMobileIndustriesDropdownOpen(!isMobileIndustriesDropdownOpen);
    setIsMobileAboutDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
    setIsMobileSolutionsDropdownOpen(false);
    setIsMobileTechnologiesDropdownOpen(false);
  };

  const toggleMobileSolutionsDropdown = () => {
    setIsMobileSolutionsDropdownOpen(!isMobileSolutionsDropdownOpen);
    setIsMobileAboutDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
    setIsMobileIndustriesDropdownOpen(false);
    setIsMobileTechnologiesDropdownOpen(false);
  };

  const toggleMobileTechnologiesDropdown = () => {
    setIsMobileTechnologiesDropdownOpen(!isMobileTechnologiesDropdownOpen);
    setIsMobileAboutDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
    setIsMobileIndustriesDropdownOpen(false);
    setIsMobileSolutionsDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileAboutDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
    setIsMobileIndustriesDropdownOpen(false);
    setIsMobileSolutionsDropdownOpen(false);
    setIsMobileTechnologiesDropdownOpen(false);
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
                
                <div 
                  className="nav-dropdown"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <a href="#services" className="nav-link dropdown-trigger">
                    Services
                    <ChevronDown 
                      size={16} 
                      className={`dropdown-chevron ${isServicesDropdownOpen ? 'rotated' : ''}`}
                    />
                  </a>
                  
                  <div className={`dropdown-menu services-dropdown ${isServicesDropdownOpen ? 'open' : ''}`}>
                    <div className="dropdown-content">
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Development</h4>
                        <a href="/services/software-development" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Software Development</a>
                        <a href="/services/web-development" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Web Development</a>
                        <a href="/services/mobile-app-development" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Mobile App Development</a>
                        <a href="/services/ux-design" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>UX Design</a>
                        <a href="/services/ui-design" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>UI Design</a>
                        <a href="/services/testing-qa" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Testing and QA</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Consulting</h4>
                        <a href="/services/it-consulting" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>IT Consulting</a>
                        <a href="/services/digital-transformation" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Digital Transformation</a>
                        <a href="/services/it-outsourcing" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>IT Outsourcing</a>
                        <a href="/services/managed-it-services" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Managed IT Services</a>
                        <a href="/services/application-services" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Application Services</a>
                        <a href="/services/data-analytics" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Data Analytics</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Support</h4>
                        <a href="/services/it-support" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>IT Support</a>
                        <a href="/services/infrastructure-services" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Infrastructure Services</a>
                        <a href="/services/it-help-desk" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>IT Help Desk</a>
                        <a href="/services/cybersecurity" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Cybersecurity</a>
                        <a href="/services/compliance-services" className="dropdown-link" onClick={() => setIsServicesDropdownOpen(false)}>Compliance Services</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="nav-dropdown"
                  onMouseEnter={handleIndustriesMouseEnter}
                  onMouseLeave={handleIndustriesMouseLeave}
                >
                  <a href="#industries" className="nav-link dropdown-trigger">
                    Industries
                    <ChevronDown 
                      size={16} 
                      className={`dropdown-chevron ${isIndustriesDropdownOpen ? 'rotated' : ''}`}
                    />
                  </a>
                  
                  <div className={`dropdown-menu industries-dropdown ${isIndustriesDropdownOpen ? 'open' : ''}`}>
                    <div className="dropdown-content">
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Healthcare</h4>
                        <a href="/industries/healthcare-providers" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Healthcare Providers</a>
                        <a href="/industries/medical-devices" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Medical Devices & Diagnostics</a>
                        <a href="/industries/medical-laboratories" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Medical Laboratories</a>
                        <a href="/industries/contract-research" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Contract Research Organizations</a>
                        <a href="/industries/biotech-pharma" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Biotech & Pharma</a>
                        <a href="/industries/healthcare-payers" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Healthcare Payers</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Finance</h4>
                        <a href="/industries/financial-services" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Financial Services</a>
                        <a href="/industries/banking" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Banking</a>
                        <a href="/industries/insurance" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Insurance</a>
                        <a href="/industries/lending" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Lending</a>
                        <a href="/industries/investment" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Investment</a>
                        <a href="/industries/fintech" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>FinTech</a>
                        <a href="/industries/payments" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Payments</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Other Industries</h4>
                        <a href="/industries/manufacturing" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Manufacturing</a>
                        <a href="/industries/retail" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Retail</a>
                        <a href="/industries/transportation" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Transportation and Logistics</a>
                        <a href="/industries/oil-gas" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Oil and Gas</a>
                        <a href="/industries/professional-services" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Professional Services</a>
                        <a href="/industries/education" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Education</a>
                        <a href="/industries/government" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Government</a>
                        <a href="/industries/non-profit" className="dropdown-link" onClick={() => setIsIndustriesDropdownOpen(false)}>Non-Profit</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="nav-dropdown"
                  onMouseEnter={handleSolutionsMouseEnter}
                  onMouseLeave={handleSolutionsMouseLeave}
                >
                  <a href="#solutions" className="nav-link dropdown-trigger">
                    Solutions
                    <ChevronDown 
                      size={16} 
                      className={`dropdown-chevron ${isSolutionsDropdownOpen ? 'rotated' : ''}`}
                    />
                  </a>
                  
                  <div className={`dropdown-menu solutions-dropdown ${isSolutionsDropdownOpen ? 'open' : ''}`}>
                    <div className="dropdown-content">
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Corporate Finance</h4>
                        <a href="/solutions/financial-management" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Financial Management</a>
                        <a href="/solutions/payment-management" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Payment Management</a>
                        <a href="/solutions/accounting-software" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Accounting Software</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Analytics</h4>
                        <a href="/solutions/data-analytics" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Data Analytics</a>
                        <a href="/solutions/ai-software" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>AI Software</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Customer Experience</h4>
                        <a href="/solutions/crm" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>CRM</a>
                        <a href="/solutions/ecommerce" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Ecommerce</a>
                        <a href="/solutions/web-portals" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Web Portals</a>
                        <a href="/solutions/content-management" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Content Management</a>
                        <a href="/solutions/marketing-advertising" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Marketing & Advertising</a>
                        <a href="/solutions/kiosk-software" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Kiosk Software</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">HR & Collaboration</h4>
                        <a href="/solutions/human-resources" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Human Resources</a>
                        <a href="/solutions/intranets" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>Intranets</a>
                        <a href="/solutions/elearning" className="dropdown-link" onClick={() => setIsSolutionsDropdownOpen(false)}>eLearning</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="nav-dropdown"
                  onMouseEnter={handleTechnologiesMouseEnter}
                  onMouseLeave={handleTechnologiesMouseLeave}
                >
                  <a href="#technologies" className="nav-link dropdown-trigger">
                    Technologies
                    <ChevronDown 
                      size={16} 
                      className={`dropdown-chevron ${isTechnologiesDropdownOpen ? 'rotated' : ''}`}
                    />
                  </a>
                  
                  <div className={`dropdown-menu technologies-dropdown ${isTechnologiesDropdownOpen ? 'open' : ''}`}>
                    <div className="dropdown-content">
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Programming Languages</h4>
                        <a href="/technologies/developers-for-hire" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Developers for Hire</a>
                        <a href="/technologies/dotnet" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>.NET</a>
                        <a href="/technologies/java" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Java</a>
                        <a href="/technologies/python" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Python</a>
                        <a href="/technologies/php" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>PHP</a>
                        <a href="/technologies/golang" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Golang</a>
                        <a href="/technologies/cpp" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>C++</a>
                        <a href="/technologies/nodejs" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Node.js</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Cloud & Infrastructure</h4>
                        <a href="/technologies/cloud" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Cloud</a>
                        <a href="/technologies/saas" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Software as a Service (SaaS)</a>
                        <a href="/technologies/iot" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Internet of Things</a>
                        <a href="/technologies/big-data" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Big Data</a>
                        <a href="/technologies/data-science" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Data Science</a>
                        <a href="/technologies/machine-learning" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Machine Learning</a>
                        <a href="/technologies/artificial-intelligence" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Artificial Intelligence</a>
                        <a href="/technologies/blockchain" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Blockchain</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Microsoft Ecosystem</h4>
                        <a href="/technologies/microsoft" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Microsoft</a>
                        <a href="/technologies/azure" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Azure</a>
                        <a href="/technologies/power-apps" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Power Apps</a>
                        <a href="/technologies/dynamics-365" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Dynamics 365</a>
                        <a href="/technologies/sharepoint" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>SharePoint and Microsoft 365</a>
                        <a href="/technologies/power-bi" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Power BI</a>
                      </div>
                      
                      <div className="dropdown-section">
                        <h4 className="dropdown-section-title">Other Platforms</h4>
                        <a href="/technologies/aws" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Amazon Web Services</a>
                        <a href="/technologies/adobe-commerce" className="dropdown-link" onClick={() => setIsTechnologiesDropdownOpen(false)}>Adobe Commerce</a>
                      </div>
                    </div>
                  </div>
                </div>
                
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
                      <a href="/aboutcompany" className="mobile-dropdown-link" onClick={closeMobileMenu}>About Company</a>
                      <a href="/about/mission" className="mobile-dropdown-link" onClick={closeMobileMenu}>Mission</a>
                      <a href="/about/leadership" className="mobile-dropdown-link" onClick={closeMobileMenu}>Leadership</a>
                      <a href="/about/team" className="mobile-dropdown-link" onClick={closeMobileMenu}>Our Team</a>
                      <a href="/about/portfolio" className="mobile-dropdown-link" onClick={closeMobileMenu}>Portfolio</a>
                  </div>
                  </div>
                  </div>
                  