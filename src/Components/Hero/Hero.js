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

      setupImageCarousel() {
        const carousel = document.querySelector('.image-carousel');
        const images = document.querySelectorAll('.carousel-image');
        
        if (!carousel || images.length === 0) return;

        let currentIndex = 0;
        const totalImages = images.length;
        let isTransitioning = false;

        // Clone first and last images for seamless loop
        const firstImageClone = images[0].cloneNode(true);
        const lastImageClone = images[totalImages - 1].cloneNode(true);
        
        carousel.appendChild(firstImageClone);
        carousel.insertBefore(lastImageClone, images[0]);

        // Update positions
        const updateCarouselPosition = (index, transition = true) => {
          if (isTransitioning) return;
          
          isTransitioning = true;
          const translateX = -(index + 1) * 100;
          
          carousel.style.transition = transition ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
          carousel.style.transform = `translateX(${translateX}%)`;
          
          setTimeout(() => {
            isTransitioning = false;
          }, transition ? 800 : 50);
        };

        // Auto-slide functionality
        const nextSlide = () => {
          if (isTransitioning) return;
          
          currentIndex++;
          updateCarouselPosition(currentIndex);
          
          // Reset to first image when reaching the end
          if (currentIndex >= totalImages) {
            setTimeout(() => {
              currentIndex = 0;
              updateCarouselPosition(currentIndex, false);
            }, 800);
          }
        };

        // Initialize position
        updateCarouselPosition(0, false);

        // Start auto-sliding
        const autoSlideInterval = setInterval(nextSlide, 4000);

        // Pause on hover
        const carouselContainer = document.querySelector('.hero-image-container');
        if (carouselContainer) {
          carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
          });

          carouselContainer.addEventListener('mouseleave', () => {
            // Resume auto-sliding when mouse leaves
            setTimeout(() => {
              const newInterval = setInterval(nextSlide, 4000);
              // Store interval for cleanup if needed
              carouselContainer.autoSlideInterval = newInterval;
            }, 1000);
          });
        }

        // Add slide indicators
        this.createSlideIndicators(totalImages, currentIndex);

        // Cleanup function
        return () => {
          clearInterval(autoSlideInterval);
          if (carouselContainer && carouselContainer.autoSlideInterval) {
            clearInterval(carouselContainer.autoSlideInterval);
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
          indicator.addEventListener('click', () => {
            // Manual slide control can be added here
            console.log(`Switch to slide ${i}`);
          });
          indicatorsContainer.appendChild(indicator);
        }
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
            
            const rotateX = (y - 0.5) * 5;
            const rotateY = (x - 0.5) * -5;
            
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
            <span className="gradient-text2">Success</span>
          </h1>
          <p className="hero-subtitle" data-animate="slide-up" data-delay="0.4">
            At Centric, We Fuse Innovation And Purpose To Fuel Your Digital 
            Success. Let's Create Something Extraordinary Together.
          </p>

          <div className="hero-actions" data-animate="slide-up" data-delay="0.5">
            <button 
              className="discover-btn"
              onClick={() => window.location.href = '/solutions'}
            >
              <span>Discover Our Services</span>
              <div className="btn-glow"></div>
            </button>
            <button 
              className="contact-btn" 
              onClick={() => window.location.href = '/contactform'}
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>

        {/* Right side visual with Image Carousel */}
        <div className="hero-visual" data-animate="slide-up" data-delay="0.6">
          <div className="hero-image-container">
            <div className="image-glow"></div>
            
            {/* Image Carousel */}
            <div className="carousel-wrapper">
              <div className="image-carousel">
                <img 
                  src="front.png" 
                  alt="Team collaboration" 
                  className="carousel-image"
                  loading="lazy"
                />
                <img 
                  src="front2.png" 
                  alt="Digital innovation" 
                  className="carousel-image"
                  loading="lazy"
                />
                <img 
                  src="front3.png" 
                  alt="Technology solutions" 
                  className="carousel-image"
                  loading="lazy"
                />
                <img 
                  src="front4.png" 
                  alt="Business growth" 
                  className="carousel-image"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="carousel-indicators"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;