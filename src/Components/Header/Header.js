import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      color: '#ffffff',
      margin: 0,
      padding: 0
    }}>
      {/* Header Navigation */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${isScrolled ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'}`,
        transition: 'all 0.3s ease'
      }}>
        <nav style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '80px'
          }}>
            {/* Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                borderRadius: '50%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '16px',
                  height: '16px',
                  background: '#0a0a0a',
                  borderRadius: '50%'
                }}></div>
              </div>
              <span style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Codewingx</span>
            </div>

            {/* Desktop Navigation */}
            <div style={{
              display: window.innerWidth <= 768 ? 'none' : 'flex',
              alignItems: 'center',
              gap: '2.5rem'
            }}>
              <a href="#home" style={{
                color: '#e5e7eb',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                 onMouseLeave={(e) => e.target.style.color = '#e5e7eb'}>Home</a>
              <a href="#about" style={{
                color: '#e5e7eb',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                 onMouseLeave={(e) => e.target.style.color = '#e5e7eb'}>About</a>
              <a href="#pricing" style={{
                color: '#e5e7eb',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                 onMouseLeave={(e) => e.target.style.color = '#e5e7eb'}>Pricing</a>
              <div style={{ position: 'relative' }}>
                <a href="#pages" style={{
                  color: '#e5e7eb',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer'
                }} onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                   onMouseLeave={(e) => e.target.style.color = '#e5e7eb'}>
                  Pages <ChevronDown size={16} />
                </a>
              </div>
              <a href="#cart" style={{
                color: '#e5e7eb',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }} onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                 onMouseLeave={(e) => e.target.style.color = '#e5e7eb'}>
                <ShoppingCart size={16} />
                Cart(0)
              </a>
            </div>

            {/* Right Section */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem'
            }}>
              <button style={{
                background: 'none',
                border: 'none',
                color: '#e5e7eb',
                fontWeight: 500,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: window.innerWidth <= 768 ? 'none' : 'block'
              }} onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                 onMouseLeave={(e) => e.target.style.color = '#e5e7eb'}>Sign in</button>
              <button style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                border: 'none',
                color: '#ffffff',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                display: window.innerWidth <= 768 ? 'none' : 'block'
              }} onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.4)';
              }} onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>Get started</button>
              
              {/* Mobile Menu Toggle */}
              <button
                style={{
                  display: window.innerWidth <= 768 ? 'block' : 'none',
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  cursor: 'pointer',
                  padding: '0.5rem'
                }}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div style={{
            display: isMenuOpen ? 'block' : 'none',
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <a href="#home" style={{
                color: '#e5e7eb',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }} onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" style={{
                color: '#e5e7eb',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }} onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#pricing" style={{
                color: '#e5e7eb',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }} onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <a href="#pages" style={{
                color: '#e5e7eb',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }} onClick={() => setIsMenuOpen(false)}>Pages</a>
              <a href="#cart" style={{
                color: '#e5e7eb',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }} onClick={() => setIsMenuOpen(false)}>Cart(0)</a>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginTop: '1rem'
              }}>
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: '#e5e7eb',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'center'
                }}>Sign in</button>
                <button style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                  border: 'none',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'center'
                }}>Get started</button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main style={{
        paddingTop: '140px',
        paddingBottom: '60px',
        textAlign: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        paddingLeft: '2rem',
        paddingRight: '2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          marginBottom: '4rem'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: '#ffffff'
          }}>
             <span style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Codewingx</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#9ca3af',
            lineHeight: 1.6,
            marginBottom: '3rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Presenting Codewingx, the ultimate Technology and SaaS Webflow.
          </p>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
              border: 'none',
              color: '#ffffff',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }} onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 40px rgba(99, 102, 241, 0.5)';
            }} onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>Buy Template</button>
            <button style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}>Browse pages</button>
          </div>
        </div>

        {/* Preview Images */}
        <div style={{ marginTop: '4rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : window.innerWidth <= 1024 ? '1fr 1fr' : '2fr 1fr 1fr 1fr',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[...Array(4)].map((_, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                aspectRatio: index === 0 ? '16/10' : '4/5',
                gridColumn: window.innerWidth <= 1024 && index === 0 ? '1 / -1' : 'auto'
              }} onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }} onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}>
                <div style={{
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
                  gap: window.innerWidth <= 768 ? '0.5rem' : 0,
                  alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ffffff',
                    fontWeight: 600
                  }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                      borderRadius: '50%',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '8px',
                        height: '8px',
                        background: 'rgba(0, 0, 0, 0.8)',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                  </div>
                  {window.innerWidth > 768 && (
                    <>
                      <div style={{
                        display: 'flex',
                        gap: '1rem',
                        color: '#9ca3af'
                      }}>
                        <span style={{ fontSize: '0.7rem' }}>Home</span>
                        <span style={{ fontSize: '0.7rem' }}>About</span>
                        <span style={{ fontSize: '0.7rem' }}>Pricing</span>
                        <span style={{ fontSize: '0.7rem' }}>Pages</span>
                        <span style={{ fontSize: '0.7rem' }}>Contact</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: '#9ca3af'
                      }}>
                        <span>Sign in</span>
                        <button style={{
                          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                          border: 'none',
                          color: '#ffffff',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.65rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}>Get started</button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;