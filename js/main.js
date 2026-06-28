const toggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.header__nav');

toggle.addEventListener('click', () => {
  const isOpen = toggle.classList.toggle('is-open');
  nav.classList.toggle('is-open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('is-open');
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', false);
  });
});
