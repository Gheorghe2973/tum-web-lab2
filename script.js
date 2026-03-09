// ── Scroll effect ─────────────────────────────────────────
const header = document.getElementById('siteHeader');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Dropdown ──────────────────────────────────────────────
const overlay = document.getElementById('navOverlay');
const productItem = document.getElementById('itemProducts');
const productsToggle = document.getElementById('productsToggle');

productsToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = productItem.classList.contains('open');
  productItem.classList.toggle('open', !isOpen);
  overlay.classList.toggle('visible', !isOpen);
});

overlay.addEventListener('click', () => {
  productItem.classList.remove('open');
  overlay.classList.remove('visible');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    productItem.classList.remove('open');
    overlay.classList.remove('visible');
  }
});

// ── Sidebar tab switching ─────────────────────────────────
document.querySelectorAll('.drop-tab').forEach(tab => {
  tab.addEventListener('mouseenter', () => {
    const panelId = tab.dataset.panel;
    const dropdown = tab.closest('.dropdown');
    dropdown.querySelectorAll('.drop-tab').forEach(t => t.classList.remove('active'));
    dropdown.querySelectorAll('.drop-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    dropdown.querySelector(`#panel-${panelId}`).classList.add('active');
  });
});

// ── Hamburger ─────────────────────────────────────────────
const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});
// Hero slider 
const heroBg = document.querySelector('.hero-bg');
const dots = document.querySelectorAll('.hero-dot');
const images = ['assets/images/hero-1.jpg', 'assets/images/hero-2.jpg', 'assets/images/hero-3.jpg'];
let current = 0;

function goToSlide(index) {
  heroBg.style.backgroundImage = `url('${images[index]}')`;
  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
  current = index;
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});

// Auto-advance every 5 seconds
setInterval(() => {
  goToSlide((current + 1) % images.length);
}, 5000);
