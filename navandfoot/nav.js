const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar a');
const navOverlay = document.getElementById('navOverlay');




// Animate nav links
gsap.from(".nav-link", {
  y: -30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "power2.out",
  delay: 0.3
});

gsap.from(".contact-button", {
  y: -30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "power2.out",
  delay: 0.3
});

// Animate brand name
gsap.from(".logo", {
  y: -20,
  opacity: 0,
  duration: 0.6,
  delay: 0.2,
  ease: "power1.out"
});



(() => {
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  const navOverlay = document.getElementById('navOverlay');
  const links = document.querySelectorAll('.navbar a');

  if (hamburger && navbar && navOverlay) {
    const openMenu = () => {
      hamburger.classList.add('active');
      navbar.classList.add('active');
      navOverlay.classList.add('active');
      document.body.classList.add('no-scroll');
      hamburger.setAttribute('aria-expanded', 'true');
      navbar.setAttribute('aria-hidden', 'false');
    };

    const closeMenu = () => {
      hamburger.classList.remove('active');
      navbar.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
      hamburger.setAttribute('aria-expanded', 'false');
      navbar.setAttribute('aria-hidden', 'true');
    };

    const toggleMenu = () => {
      if (navbar.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    hamburger.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', closeMenu);
    links.forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }
})();
