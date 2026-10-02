/* ============================================================
   GHADEER ALKHODR — PORTFOLIO JAVASCRIPT
   Particles, typing animation, scroll reveals, navbar, form
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTypingAnimation();
  initScrollReveal();
  initNavbar();
  initContactForm();
  initSmoothScroll();
});

/* ===================
   PARTICLE CANVAS
   =================== */
function initParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  // Track mouse for interactive particles
  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.parentElement.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
      // Color: mix of cyan and purple
      const colors = [
        'rgba(0, 229, 255,',
        'rgba(177, 74, 237,',
        'rgba(57, 255, 20,',
      ];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around edges
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.opacity + ')';
      ctx.fill();
    }
  }

  // Create particles based on screen size
  const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 150);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const opacity = (1 - dist / 120) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();
    requestAnimationFrame(animate);
  }

  animate();
}

/* ===================
   TYPING ANIMATION
   =================== */
function initTypingAnimation() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const phrases = [
    'DevOps Engineer',
    'Cloud Infrastructure Builder',
    'CI/CD Pipeline Architect',
    'Kubernetes Orchestrator',
    'Automation Enthusiast',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400; // Pause before next phrase
    }

    setTimeout(type, typeSpeed);
  }

  // Start after a small delay
  setTimeout(type, 1200);
}

/* ===================
   SCROLL REVEAL
   =================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  reveals.forEach(el => observer.observe(el));
}

/* ===================
   NAVBAR
   =================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-links a');

  // Scroll background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active section highlighting
    const sections = document.querySelectorAll('.section, #hero');
    let current = '';

    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
}

/* ===================
   SMOOTH SCROLL
   =================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 70; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ===================
   CONTACT FORM
   =================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#form-name').value.trim();
    const email = form.querySelector('#form-email').value.trim();
    const message = form.querySelector('#form-message').value.trim();
    const status = form.querySelector('#form-status');

    // Basic validation
    if (!name || !email || !message) {
      status.textContent = '$ error: All fields are required';
      status.className = 'form-status error';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = '$ error: Invalid email format';
      status.className = 'form-status error';
      return;
    }

    // Simulate submission
    status.textContent = '$ sending message...';
    status.className = 'form-status success';

    setTimeout(() => {
      status.textContent = '$ Message sent successfully! ✓';
      form.reset();

      setTimeout(() => {
        status.className = 'form-status';
      }, 4000);
    }, 1500);
  });
}
