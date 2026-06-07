/* ============================================================
   مجموعة الغباري — نظام الحركات التفاعلية
   Alghbari Group — Interactive Animations Engine
   
   01. كشف العناصر عند التمرير (Scroll Reveal Observer)
   02. عداد الأرقام المتحرك (Count-Up Numbers)
   03. تأثير بطاقات تسليط الضوء (Spotlight Cursor Glow)
   04. الجسيمات العائمة في قسم هيرو (Hero Floating Particles)
   05. حركات التحويم المغناطيسية للأزرار (Magnetic Buttons)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initCounters();
  initSpotlightEffect();
  createHeroParticles();
  initMagneticButtons();
});

// ============================================================
// 01. SCROLL REVEAL OBSERVER
// ============================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-scale, .reveal-right, .reveal-left, .animated-underline');
  
  if (revealElements.length === 0) return;
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing once animated in (unless we want repeating animations)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Slightly offset bottom trigger
  });
  
  revealElements.forEach(el => revealObserver.observe(el));
}

// ============================================================
// 02. COUNT-UP NUMBERS
// ============================================================
function initCounters() {
  const counterElements = document.querySelectorAll('.counter-number');
  
  if (counterElements.length === 0) return;
  
  const countToTarget = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const duration = 2000; // Animation duration in ms
    const stepTime = Math.max(Math.floor(duration / target), 15);
    let current = 0;
    
    // Add plus suffix if specified in config
    const suffix = el.getAttribute('data-suffix') || '';
    
    const timer = setInterval(() => {
      current += Math.ceil(target / (duration / stepTime));
      
      if (current >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = current + suffix;
      }
    }, stepTime);
  };
  
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countToTarget(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counterElements.forEach(el => counterObserver.observe(el));
}

// ============================================================
// 03. SPOTLIGHT CURSOR GLOW
// ============================================================
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.spotlight-card');
  
  if (cards.length === 0) return;
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate within the element
      const y = e.clientY - rect.top;  // y coordinate within the element
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// ============================================================
// 04. HERO FLOATING PARTICLES
// ============================================================
function createHeroParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  
  const particleCount = 25;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position, sizes, and delays
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = Math.random() * 3 + 2; // 2px to 5px
    const duration = Math.random() * 6 + 6; // 6s to 12s
    const delay = Math.random() * -10; // Negative delay to start immediately
    
    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.setProperty('--duration', `${duration}s`);
    particle.style.setProperty('--delay', `${delay}s`);
    
    // Apply varying opacity
    particle.style.opacity = Math.random() * 0.4 + 0.1;
    
    container.appendChild(particle);
  }
}

// ============================================================
// 05. MAGNETIC BUTTONS (Framer-like micro-animation)
// ============================================================
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-magnetic');
  
  if (buttons.length === 0) return;
  
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Move button slightly towards cursor
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      // Reset position
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}
