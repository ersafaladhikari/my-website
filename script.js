// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Scroll reveal =====
const revealTargets = document.querySelectorAll(
  '.ticket, .deployment, .spec-row, .cred-item, .section-head, .about-body'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => io.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

// ===== Ticket form -> mailto =====
const ticketForm = document.getElementById('ticketForm');
const formNote = document.getElementById('formNote');

ticketForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('tf-name').value.trim();
  const email = document.getElementById('tf-email').value.trim();
  const subject = document.getElementById('tf-subject').value.trim() || 'New ticket from portfolio site';
  const message = document.getElementById('tf-message').value.trim();

  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:safaladhikari.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
  formNote.textContent = 'Opening your email client…';
});

// ===== Hero network canvas (ambient, subtle) =====
const canvas = document.getElementById('netCanvas');

if (canvas && !prefersReducedMotion) {
  const ctx = canvas.getContext('2d');
  let width, height, nodes;

  const AMBER = '184, 117, 47';
  const MOSS = '92, 107, 79';

  function resize() {
    const hero = canvas.parentElement;
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function initNodes() {
    const count = Math.max(18, Math.floor((width * height) / 60000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 1,
      color: Math.random() > 0.85 ? MOSS : AMBER,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;
        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.35;
          ctx.strokeStyle = `rgba(${AMBER}, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.color}, 0.6)`;
      ctx.fill();
    });

    requestAnimationFrame(step);
  }

  resize();
  initNodes();
  step();

  window.addEventListener('resize', () => {
    resize();
    initNodes();
  });
}

// ===== Nav background on scroll (subtle shadow) =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 12) {
    nav.style.boxShadow = '0 1px 0 rgba(32,27,20,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
