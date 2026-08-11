// ============================================================
//  HERO BACKGROUND SLIDESHOW
//  • Auto-advances every 5 s with a 1.2 s CSS opacity fade
//  • IntersectionObserver resets to slide 0 when hero re-enters view
//  • Pauses when the hero is fully scrolled out of the viewport
//  • Respects prefers-reduced-motion: skips animation, shows slide 0
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.main-nav ul');
  const activeLink = nav.querySelector('a.active') || nav.querySelector('a');

  // Create the underline element dynamically
  const indicator = document.createElement('div');
  indicator.classList.add('nav-indicator');
  nav.appendChild(indicator);

  // Helper function to set indicator position & width
  function moveIndicator(element) {
    const rect = element.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    indicator.style.width = `${rect.width}px`;
    indicator.style.left = `${rect.left - navRect.left}px`;
  }

  // Initialize line on active link
  if (activeLink) {
    moveIndicator(activeLink);
  }

  // Move indicator on hover over links
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
      moveIndicator(e.target);
    });
  });

  // Return indicator to active link when mouse leaves the nav
  nav.addEventListener('mouseleave', () => {
    if (activeLink) {
      moveIndicator(activeLink);
    }
  });
});

(function heroSlideshow() {
  const INTERVAL_MS = 5000;

  // Exit early if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const slides = document.querySelectorAll('.hero-slide');
  const hero = document.querySelector('.hero');
  if (!slides.length || !hero) return;

  let current = 0;
  let timer = null;

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

// ============================================================
//  SMOOTH SCROLL ENHANCEMENTS
//  • Scroll progress bar  (GPU-composited scaleX — no layout cost)
//  • Smart sticky header  (hides on scroll-down, snaps back on scroll-up)
//  • Scroll-reveal system (IntersectionObserver, auto-discovers elements)
//  • Staggered grid reveals (service cards, gallery items, values, footer)
//  All three features respect prefers-reduced-motion.
// ============================================================

let lastScrollTop = 0;
const header = document.querySelector('header.site-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // At the very top of page -> Reset back to full-width header
  if (currentScroll <= 50) {
    header.classList.remove('scroll-up', 'scroll-down');
    return;
  }

  // Scrolling Down -> Hide the header upward
  if (currentScroll > lastScrollTop && currentScroll > 100) {
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  } 
  // Scrolling Up -> Smoothly reveal as a floating island
  else if (currentScroll < lastScrollTop) {
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

(function smoothScrollEnhancements() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll progress bar ───────────────────────────────────────────
     Inject once; update via scaleX — GPU-composited, no paint/layout. */
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  progressBar.setAttribute('aria-hidden', 'true');
  document.body.prepend(progressBar);

  /* ── Smart sticky header ───────────────────────────────────────────
     Hide on scroll-down past 80 px, reveal on any scroll-up.
     Skipped when mobile nav drawer is open (nav is inaccessible anyway
     once the header is off-screen). */
  const header = document.querySelector('.site-header');
  let lastScrollY = window.scrollY;
  let rafPending = false;

  function onScrollFrame() {
    const y = window.scrollY;
    const maxY = document.documentElement.scrollHeight - window.innerHeight;

    /* Progress bar: scaleX(0→1) mapped to scroll position */
    progressBar.style.transform = 'scaleX(' + (maxY > 0 ? y / maxY : 0) + ')';

    if (header) {
      /* Subtle shadow once user leaves the top */
      header.classList.toggle('scrolled', y > 30);

      /* Hide/reveal — only when reduced-motion is not requested and
         the mobile nav drawer is not currently open */
      if (!prefersReduced && !header.querySelector('.main-nav.open')) {
        if (y > lastScrollY && y > 80) {
          header.classList.add('header-hidden');
        } else if (y < lastScrollY) {
          header.classList.remove('header-hidden');
        }
      }
    }

    lastScrollY = y;
    rafPending = false;
  }

  window.addEventListener('scroll', () => {
    if (!rafPending) {
      requestAnimationFrame(onScrollFrame);
      rafPending = true;
    }
  }, { passive: true });

  /* Seed the initial state (handles page refreshed mid-scroll) */
  onScrollFrame();

  /* ── Scroll-reveal ─────────────────────────────────────────────────
     Skip entirely if the user prefers reduced motion; the CSS safety-net
     rule already guarantees those elements stay fully visible. */
  if (prefersReduced) return;

  /* Elements revealed as a single unit */
  const soloTargets = [
    '.section-head',
    '.process-row',
    '.split',
    '.contact-wrap',
    '.map-embed',
    '.cta-band .container',
    '.filter-bar',
    '.page-header .container',
  ];

  /* Grid containers whose direct children stagger in sequentially.
     parent  → gets .js-stagger class
     item    → selector run on the parent; matches get .js-reveal */
  const staggerTargets = [
    { parent: '.services-grid', item: '.card-link' },
    { parent: '.values-grid', item: '.value-item' },
    { parent: '.gallery-grid', item: '.gallery-item' },
    { parent: '.footer-top', item: ':scope > div' },
  ];

  /* Apply solo reveal classes */
  soloTargets.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('js-reveal');
    });
  });

  /* Apply staggered reveal classes */
  staggerTargets.forEach(({ parent, item }) => {
    document.querySelectorAll(parent).forEach(parentEl => {
      parentEl.classList.add('js-stagger');
      parentEl.querySelectorAll(item).forEach(child => {
        child.classList.add('js-reveal');
      });
    });
  });

  /* Shared observer — keeps watching after first reveal so animations
     replay every time the element re-enters the viewport.

     On ENTRY  → add is-visible  (CSS transition plays: slide-up reveal)
     On EXIT   → instant invisible reset via js-reset class so the next
                 entry always triggers a fresh, smooth entrance animation.

     The double-rAF on exit is critical: it lets the browser commit the
     no-transition invisible state to the compositor in one frame, then
     removes js-reset in the next frame — leaving the element ready for
     a clean entrance on the following intersection. */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        /* Element entered viewport → play the reveal animation */
        el.classList.add('is-visible');
      } else {
        /* Element left viewport → snap back to hidden instantly.
           Step 1: kill transition + remove visible class (snap invisible) */
        el.classList.add('js-reset');
        el.classList.remove('is-visible');
        /* Step 2: two frames later re-enable the transition so the next
           entry plays the full smooth animation */
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.classList.remove('js-reset');
          });
        });
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -24px 0px',
  });

  document.querySelectorAll('.js-reveal').forEach(el => revealObserver.observe(el));
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

  document.querySelectorAll(".slider").forEach(slider => {

    const slides = slider.querySelector(".slides");
    const images = slider.querySelectorAll(".slides img");
    const dots = slider.querySelectorAll(".dot");
    const next = slider.querySelector(".next");
    const prev = slider.querySelector(".prev");

    let index = 0;

    function updateSlider() {
      slides.style.transform = `translateX(-${index * 100}%)`;

      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    next.addEventListener("click", () => {
      if (index < images.length - 1) {
        index++;
      } else {
        index = 0;   // loop back
      }
      updateSlider();
    });

    prev.addEventListener("click", () => {
      if (index > 0) {
        index--;
      } else {
        index = images.length - 1;
      }
      updateSlider();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        updateSlider();
      });
    });

  });

  // ---- 3D Flip Card Mobile Interaction ----
  const flipCards = document.querySelectorAll('.card-link');
  flipCards.forEach(card => {
    card.addEventListener('click', function (e) {
      if (window.matchMedia('(hover: none)').matches) {
        if (!this.classList.contains('flipped')) {
          e.preventDefault();
          flipCards.forEach(c => c !== this && c.classList.remove('flipped'));
          this.classList.add('flipped');
        }
      }
    });
  });

  
});
