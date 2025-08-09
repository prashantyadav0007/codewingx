import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    class HeroAnimations {
      constructor() {
        this.init();
        this.setupIntersectionObserver();
        this.setupScrollEffects();
        this.setupInteractiveElements();
      }

      init() {
        this.animateOnLoad();
      }

      setupIntersectionObserver() {
        const observerOptions = {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const delay = parseFloat(entry.target.dataset.delay) * 1000 || 0;
              
              setTimeout(() => {
                entry.target.classList.add('animate');
              }, delay);
            }
          });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('[data-animate]');
        animatedElements.forEach(el => observer.observe(el));
      }

      animateOnLoad() {
        const elements = document.querySelectorAll('[data-animate]');
        
        elements.forEach((element, index) => {
          const delay = parseFloat(element.dataset.delay) * 1000 || (index * 100);
          
          setTimeout(() => {
            element.classList.add('animate');
          }, delay);
        });

        this.animateFloatingOrbs();
      }

      animateFloatingOrbs() {
        const orbs = document.querySelectorAll('.floating-orb');
        
        orbs.forEach((orb, index) => {
          orb.style.opacity = '0';
          orb.style.transform = 'scale(0.5)';
          
          setTimeout(() => {
            orb.style.transition = 'opacity 2s ease, transform 2s ease';
            orb.style.opacity = '0.6';
            orb.style.transform = 'scale(1)';
          }, 500 + (index * 200));
        });
      }

      setupScrollEffects() {
        let ticking = false;

        const updateScrollEffects = () => {
          const scrollY = window.pageYOffset;
          const windowHeight = window.innerHeight;

          const orbs = document.querySelectorAll('.floating-orb');
          orbs.forEach((orb, index) => {
            const speed = 0.5 + (index * 0.2);
            orb.style.transform += ` translateY(${scrollY * speed}px)`;
          });

          const scrollIndicator = document.querySelector('.scroll-indicator');
          if (scrollIndicator) {
            const opacity = Math.max(0, 1 - (scrollY / windowHeight));
            scrollIndicator.style.opacity = opacity;
          }

          ticking = false;
        };

        const requestScrollUpdate = () => {
          if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
          }
        };

        window.addEventListener('scroll', requestScrollUpdate);

        return () => {
          window.removeEventListener('scroll', requestScrollUpdate);
        };
      }

      setupInteractiveElements() {
        this.setupButtonEffects();
        this.setupPanelEffects();
        this.setupImageEffects();
        this.setupServiceItems();
        this.setupAvatarEffects();
      }

      setupButtonEffects() {
        const buttons = document.querySelectorAll('.discover-btn, .contact-btn');
        
        buttons.forEach(button => {
          button.addEventListener('mouseenter', (e) => {
            this.createRippleEffect(e.target, e);
          });
          
          button.addEventListener('click', (e) => {
            this.createClickEffect(e.target, e);
          });
        });
      }

      createRippleEffect(button, event) {
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('div');
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
          z-index: 1;
        `;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      }

      createClickEffect(button, event) {
        button.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
          button.style.transform = '';
        }, 150);
      }

      setupPanelEffects() {
        const panels = document.querySelectorAll('.services-panel, .trust-panel');
        
        panels.forEach(panel => {
          panel.addEventListener('mouseenter', () => {
            panel.style.transform = 'translateY(-8px) scale(1.02)';
          });
          
          panel.addEventListener('mouseleave', () => {
            panel.style.transform = '';
          });
        });
      }

      setupImageEffects() {
        const imageContainer = document.querySelector('.hero-image-container');
        
        if (imageContainer) {
          imageContainer.addEventListener('mousemove', (e) => {
            const rect = imageContainer.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const rotateX = (y - 0.5) * 10;
            const rotateY = (x - 0.5) * -10;
            
            imageContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          });
          
          imageContainer.addEventListener('mouseleave', () => {
            imageContainer.style.transform = '';
          });
        }
      }

      setupServiceItems() {
        const serviceItems = document.querySelectorAll('.service-item');
        
        serviceItems.forEach((item, index) => {
          item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.color = 'var(--text-primary)';
            
            const icon = item.querySelector('.service-icon');
            if (icon) {
              icon.style.filter = 'drop-shadow(0 0 10px rgba(79, 172, 254, 0.5))';
            }
          });
          
          item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.color = '';
            
            const icon = item.querySelector('.service-icon');
            if (icon) {
              icon.style.filter = '';
            }
          });
        });
      }

      setupAvatarEffects() {
        const avatars = document.querySelectorAll('.avatar');
        
        avatars.forEach(avatar => {
          avatar.addEventListener('mouseenter', () => {
            avatar.style.transform = 'translateY(-5px) scale(1.15)';
            avatar.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))';
          });
          
          avatar.addEventListener('mouseleave', () => {
            avatar.style.transform = '';
            avatar.style.filter = '';
          });
        });
      }
    }

    // Add custom CSS animations
    const addCustomCSS = () => {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .slide-up-animation {
          animation: slideUpFade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `;
      document.head.appendChild(style);
    };

    addCustomCSS();
    const heroAnimations = new HeroAnimations();

    // Cleanup function
    return () => {
      // Remove event listeners and cleanup
      const style = document.querySelector('style[data-hero-animations]');
      if (style) {
        style.remove();
      }
    };
  }, []);

  const handleDiscoverClick = () => {
    console.log('Discover Our Services clicked');
    // Add your navigation logic here
  };

  const handleContactClick = () => {
    console.log('Get in Touch clicked');
    // Add your navigation logic here
  };

  return (
    <div className="landing-page" ref={heroRef}>
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content" data-animate="slide-up" data-delay="0.1">
          <p className="hero-tagline" data-animate="slide-up" data-delay="0.2">
            Empowering Your Digital Vision
          </p>
          <h1 className="hero-title" data-animate="slide-up" data-delay="0.3">
            Innovation For<br/>
            Your Digital<br/>
            <span className="gradient-text">Success</span>
          </h1>
          <p className="hero-subtitle" data-animate="slide-up" data-delay="0.4">
            At Centric, We Fuse Innovation And Purpose To Fuel Your Digital 
            Success. Let's Create Something Extraordinary Together.
          </p>

          <div className="hero-actions" data-animate="slide-up" data-delay="0.5">
            <button className="discover-btn" onClick={handleDiscoverClick}>
              <span>Discover Our Services</span>
              <div className="btn-glow"></div>
            </button>
            <button className="contact-btn" onClick={handleContactClick}>
              <span>Get in Touch</span>
            </button>
          </div>
        </div>

        {/* Right side visual */}
        <div className="hero-visual" data-animate="slide-up" data-delay="0.6">
          <div className="hero-image-container">
            <div className="image-glow"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Team collaboration" 
              className="hero-image"
              loading="lazy"
            />
            
            {/* Services Panel */}
            <div className="services-panel" data-animate="slide-up" data-delay="0.7">
              <div className="panel-blur"></div>
              <h3 className="services-title">Services</h3>
              <div className="service-item">
                <span className="service-icon">✦</span>
                <span className="service-text">Design</span>
              </div>
              <div className="service-item">
                <span className="service-icon">⚡</span>
                <span className="service-text">App Development</span>
              </div>
              <div className="service-item">
                <span className="service-icon">🚀</span>
                <span className="service-text">Digital Strategy</span>
              </div>
            </div>

            {/* Trust Panel */}
            <div className="trust-panel" data-animate="slide-up" data-delay="0.8">
              <div className="panel-blur"></div>
              <h4 className="trust-title">Client Trusted</h4>
              <div className="client-avatars">
                <div className="avatar avatar-1"></div>
                <div className="avatar avatar-2"></div>
                <div className="avatar avatar-3"></div>
                <div className="avatar avatar-4"></div>
              </div>
              <div className="trust-rating">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <span className="rating-text">1K+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" data-animate="fade-in" data-delay="1.0">
        <div className="scroll-dot"></div>
        <div className="scroll-line"></div>
      </div>
    </div>
  );
};

export default Hero;