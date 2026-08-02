// ============================================================
//  HERO BACKGROUND SLIDESHOW
//  • Auto-advances every 5 s with a 1.2 s CSS opacity fade
//  • IntersectionObserver resets to slide 0 when hero re-enters view
//  • Pauses when the hero is fully scrolled out of the viewport
//  • Respects prefers-reduced-motion: skips animation, shows slide 0
// ============================================================
(function heroSlideshow() {
  const INTERVAL_MS = 5000;

  // Exit early if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const slides = document.querySelectorAll('.hero-slide');
  const hero   = document.querySelector('.hero');
  if (!slides.length || !hero) return;

  let current  = 0;
  let timer    = null;

  /** Activate a specific slide by index */
  function goTo(index) {
    slides[current].classList.remove('active');
    current = index % slides.length;
    slides[current].classList.add('active');
  }

  /** Advance to the next slide */
  function advance() {
    goTo((current + 1) % slides.length);
  }

  /** Start (or restart) the auto-play interval */
  function startTimer() {
    if (timer) return;                     // already running
    timer = setInterval(advance, INTERVAL_MS);
  }

  /** Stop the interval */
  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  /** Reset to the first slide and restart the interval */
  function reset() {
    stopTimer();
    goTo(0);
    startTimer();
  }

  // Watch when the hero section enters / leaves the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reset();          // re-entering: restart from slide 0
        } else {
          stopTimer();      // fully off-screen: pause to save resources
        }
      });
    },
    { threshold: 0.01 }   // fire as soon as even 1% of the hero is visible
  );

  observer.observe(hero);
})();

// ---- mobile nav toggle ----
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // ---- animated counters on hero strip ----
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const animate = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      let cur = 0;
      const step = Math.max(1, Math.round(target / 40));
      const tick = () => {
        cur += step;
        if (cur >= target) {
          el.textContent = target + suffix;
        } else {
          el.textContent = cur + suffix;
          requestAnimationFrame(tick);
        }
      };
      tick();
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => io.observe(c));
  }

  // ---- gallery filter ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        galleryItems.forEach(item => {
          const show = cat === 'all' || item.dataset.category === cat;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // ---- lightbox ----
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    const lbCap = lightbox.querySelector('.lightbox-cap');
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lbCap.textContent = img.alt;
        lightbox.classList.add('open');
      });
    });
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
      lightbox.classList.remove('open');
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }

  // ---- contact form (demo only, no backend) ----
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      status.textContent = "Thanks — your message has been noted. Our team will reach out shortly.";
      status.classList.add('show', 'ok');
      form.reset();
    });
  }
});
