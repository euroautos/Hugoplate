/**
 * EuroAutoService - Main JavaScript
 * Optimizat pentru conversii și UX
 */

(function() {
  'use strict';

  // =========================================================================
  // Mobile Menu
  // =========================================================================
  const mobileMenu = {
    init() {
      this.toggle = document.querySelector('[data-menu-toggle]');
      this.menu = document.querySelector('[data-mobile-menu]');
      this.overlay = document.querySelector('[data-menu-overlay]');
      
      if (!this.toggle || !this.menu) return;
      
      this.toggle.addEventListener('click', () => this.toggleMenu());
      this.overlay?.addEventListener('click', () => this.closeMenu());
      
      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.closeMenu();
      });
    },
    
    toggleMenu() {
      const isOpen = this.menu.classList.toggle('is-open');
      this.toggle.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      this.overlay?.classList.toggle('is-visible', isOpen);
    },
    
    closeMenu() {
      this.menu.classList.remove('is-open');
      this.toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
      this.overlay?.classList.remove('is-visible');
    }
  };

  // =========================================================================
  // Accordion / FAQ
  // =========================================================================
  const accordion = {
    init() {
      document.querySelectorAll('[data-accordion]').forEach(container => {
        container.querySelectorAll('[data-accordion-trigger]').forEach(trigger => {
          trigger.addEventListener('click', () => this.toggle(trigger, container));
        });
      });
    },
    
    toggle(trigger, container) {
      const item = trigger.closest('[data-accordion-item]');
      const content = item.querySelector('[data-accordion-content]');
      const isOpen = item.classList.contains('accordion__item--open');
      
      // Close all if single mode
      if (container.dataset.accordion === 'single') {
        container.querySelectorAll('[data-accordion-item]').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('accordion__item--open');
            otherItem.querySelector('[data-accordion-content]').style.maxHeight = null;
          }
        });
      }
      
      // Toggle current
      if (isOpen) {
        item.classList.remove('accordion__item--open');
        content.style.maxHeight = null;
      } else {
        item.classList.add('accordion__item--open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }
  };

  // =========================================================================
  // Smooth Scroll
  // =========================================================================
  const smoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const targetId = anchor.getAttribute('href');
          if (targetId === '#') return;
          
          const target = document.querySelector(targetId);
          if (!target) return;
          
          e.preventDefault();
          
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        });
      });
    }
  };

  // =========================================================================
  // Form Enhancements
  // =========================================================================
  const forms = {
    init() {
      // Add loading state on submit
      document.querySelectorAll('form[data-ajax-form]').forEach(form => {
        form.addEventListener('submit', (e) => this.handleSubmit(e, form));
      });
      
      // Phone number formatting
      document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', (e) => this.formatPhone(e));
      });
    },
    
    async handleSubmit(e, form) {
      e.preventDefault();
      
      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Se trimite...';
      
      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          // Show success message
          this.showMessage(form, 'success', 'Mesajul a fost trimis! Vă contactăm în maxim 15 minute.');
          form.reset();
        } else {
          throw new Error('Eroare la trimitere');
        }
      } catch (error) {
        this.showMessage(form, 'error', 'A apărut o eroare. Vă rugăm sunați-ne direct.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    },
    
    formatPhone(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 10) value = value.slice(0, 10);
      
      // Format: 0741 123 456
      if (value.length > 7) {
        value = value.slice(0, 4) + ' ' + value.slice(4, 7) + ' ' + value.slice(7);
      } else if (value.length > 4) {
        value = value.slice(0, 4) + ' ' + value.slice(4);
      }
      
      e.target.value = value;
    },
    
    showMessage(form, type, message) {
      // Remove existing message
      form.querySelector('.form__message')?.remove();
      
      const messageEl = document.createElement('div');
      messageEl.className = `form__message form__message--${type}`;
      messageEl.textContent = message;
      
      form.appendChild(messageEl);
      
      // Auto remove after 5 seconds
      setTimeout(() => messageEl.remove(), 5000);
    }
  };

  // =========================================================================
  // Scroll Effects
  // =========================================================================
  const scrollEffects = {
    init() {
      // Header shadow on scroll
      const header = document.querySelector('.header');
      if (header) {
        window.addEventListener('scroll', () => {
          header.classList.toggle('header--scrolled', window.scrollY > 10);
        });
      }
      
      // Reveal animations
      this.initRevealAnimations();
    },
    
    initRevealAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      
      document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    }
  };

  // =========================================================================
  // Click to Call Tracking
  // =========================================================================
  const analytics = {
    init() {
      // Track phone clicks
      document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', () => {
          this.trackEvent('Contact', 'Phone Click', link.href);
        });
      });
      
      // Track WhatsApp clicks
      document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(link => {
        link.addEventListener('click', () => {
          this.trackEvent('Contact', 'WhatsApp Click');
        });
      });
      
      // Track form submissions
      document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', () => {
          this.trackEvent('Form', 'Submit', form.dataset.formName || 'Contact');
        });
      });
    },
    
    trackEvent(category, action, label = '') {
      // Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('event', action, {
          event_category: category,
          event_label: label
        });
      }
      
      // Facebook Pixel
      if (typeof fbq !== 'undefined') {
        fbq('trackCustom', action, { category, label });
      }
      
      console.log('Event tracked:', { category, action, label });
    }
  };

  // =========================================================================
  // Lazy Loading Images
  // =========================================================================
  const lazyLoad = {
    init() {
      if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading supported
        document.querySelectorAll('img[data-src]').forEach(img => {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        });
      } else {
        // Fallback with IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
      }
    }
  };

  // =========================================================================
  // Service Worker Registration (for PWA)
  // =========================================================================
  const pwa = {
    init() {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('ServiceWorker registration failed:', err);
          });
        });
      }
    }
  };

  // =========================================================================
  // Initialize Everything
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    mobileMenu.init();
    accordion.init();
    smoothScroll.init();
    forms.init();
    scrollEffects.init();
    analytics.init();
    lazyLoad.init();
    // pwa.init(); // Uncomment when ready for PWA
  });

})();
