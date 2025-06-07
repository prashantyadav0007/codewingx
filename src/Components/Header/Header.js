import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
              <div className="logo-icon"></div>
              <span className="logo-text">Codewingx</span>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="nav-menu">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#Services" className="nav-link">Services</a>
             
                <a href="#cart" className="nav-link cart-link">Projects </a>
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
              <a href="#home" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#pricing" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#pages" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
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

        {/* Preview Images */}

           
        
  
      </main>
    </div>
  );
};

export default Header;