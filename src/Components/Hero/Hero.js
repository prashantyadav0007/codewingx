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
        this.setupImageCarousel();
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
            orb.style.opacity = '0.4';
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
            const speed = 0.3 + (index * 0.1);
            orb.style.transform = `translateY(${scrollY * speed}px)`;
          });

          const scrollIndicator = document.querySelector('.scroll-indicator');
          if (scrollIndicator) {
            const opacity = Math.max(0, 1 - (scrollY / windowHeight));
            scrollIndicator.style.opacity = opacity;
          }

          // Parallax effect on background image
          const bgImage = document.querySelector('.hero-bg-image');
          if (bgImage) {
            bgImage.style.transform = `translateY(${scrollY * 0.5}px) scale(1.1)`;
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

      setupImageCarousel() {
        const carousel = document.querySelector('.image-carousel');
        const images = document.querySelectorAll('.carousel-image');
        
        if (!carousel || images.length === 0) return;

        let currentIndex = 0;
        const totalImages = images.length;
        let isTransitioning = false;

        // Show first image
        images[currentIndex].classList.add('active');

        // Auto-slide functionality
        const nextSlide = () => {
          if (isTransitioning) return;
          
          isTransitioning = true;
          
          // Remove active class from current image
          images[currentIndex].classList.remove('active');
          
          // Move to next image
          currentIndex = (currentIndex + 1) % totalImages;
          
          // Add active class to new image
          images[currentIndex].classList.add('active');
          
          // Update indicators
          this.updateIndicators(currentIndex, totalImages);
          
          setTimeout(() => {
            isTransitioning = false;
          }, 1000);
        };

        // Initialize indicators
        this.createSlideIndicators(totalImages, currentIndex);

        // Start auto-sliding
        const autoSlideInterval = setInterval(nextSlide, 5000);

        // Pause on hover
        const heroContainer = document.querySelector('.hero-section');
        if (heroContainer) {
          heroContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
          });

          heroContainer.addEventListener('mouseleave', () => {
            const newInterval = setInterval(nextSlide, 5000);
            heroContainer.autoSlideInterval = newInterval;
          });
        }

        // Cleanup function
        return () => {
          clearInterval(autoSlideInterval);
          if (heroContainer && heroContainer.autoSlideInterval) {
            clearInterval(heroContainer.autoSlideInterval);
          }
        };
      }

      createSlideIndicators(totalImages, currentIndex) {
        const indicatorsContainer = document.querySelector('.carousel-indicators');
        if (!indicatorsContainer) return;

        indicatorsContainer.innerHTML = '';

        for (let i = 0; i < totalImages; i++) {
          const indicator = document.createElement('div');
          indicator.className = `carousel-indicator ${i === currentIndex ? 'active' : ''}`;
          indicator.dataset.index = i;
          indicator.addEventListener('click', () => {
            this.jumpToSlide(i);
          });
          indicatorsContainer.appendChild(indicator);
        }
      }

      updateIndicators(currentIndex, totalImages) {
        const indicators = document.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
          if (index === currentIndex) {
            indicator.classList.add('active');
          } else {
            indicator.classList.remove('active');
          }
        });
      }

      jumpToSlide(index) {
        const images = document.querySelectorAll('.carousel-image');
        const currentActive = document.querySelector('.carousel-image.active');
        
        if (currentActive) {
          currentActive.classList.remove('active');
        }
        
        images[index].classList.add('active');
        this.updateIndicators(index, images.length);
      }

      setupInteractiveElements() {
        this.setupButtonEffects();
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
          background: rgba(255, 255, 255, 0.2);
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
        button.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
          button.style.transform = '';
        }, 150);
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
    };

    addCustomCSS();
    const heroAnimations = new HeroAnimations();

    // Cleanup function
    return () => {
      const style = document.querySelector('style[data-hero-animations]');
      if (style) {
        style.remove();
      }
    };
  }, []);

  const handleDiscoverClick = () => {
    window.location.href = '/solutions';
  };

  const handleContactClick = () => {
    window.location.href = '/contactform';
  };

  return (
    <div className="landing-page" ref={heroRef}>
      {/* Full Page Background Image Carousel */}
      <div className="hero-bg-container">
        <div className="image-carousel">
          <div className="carousel-image active">
            <img 
              src="front.png" 
              alt="Team collaboration" 
              loading="eager"
            />
          </div>
          <div className="carousel-image">
            <img 
              src="front2.png" 
              alt="Digital innovation" 
              loading="lazy"
            />
          </div>
          <div className="carousel-image">
            <img 
              src="front3.png" 
              alt="Technology solutions" 
              loading="lazy"
            />
          </div>
          <div className="carousel-image">
            <img 
              src="front4.png" 
              alt="Business growth" 
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Dark Overlay for better text readability */}
        <div className="hero-overlay"></div>
      </div>

      {/* Animated Background Orbs */}
      <div className="bg-animation">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      {/* Hero Content Overlay */}
      <main className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-content" data-animate="slide-up" data-delay="0.2">
            <p className="hero-tagline" data-animate="slide-up" data-delay="0.3">
              Empowering Your Digital Vision
            </p>
            <h1 className="hero-title" data-animate="slide-up" data-delay="0.4">
              Innovation For<br/>
              Your Digital<br/>
              <span className="gradient-text2">Success</span>
            </h1>
            <p className="hero-subtitle" data-animate="slide-up" data-delay="0.5">
              At Centric, We Fuse Innovation And Purpose To Fuel Your Digital 
              Success. Let's Create Something Extraordinary Together.
            </p>

            <div className="hero-actions" data-animate="slide-up" data-delay="0.6">
              <button 
                className="discover-btn"
                onClick={handleDiscoverClick}
              >
                <span>Discover Our Services</span>
                <div className="btn-glow"></div>
              </button>
              <button 
                className="contact-btn" 
                onClick={handleContactClick}
              >
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators"></div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
          <div className="scroll-line"></div>
        </div>
      </main>
    </div>
  );
};

export default Hero;