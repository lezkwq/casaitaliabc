const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav');
const mobile = matchMedia('(max-width: 640px)');

function setExpanded(expanded) {
  toggle.setAttribute('aria-expanded', String(expanded));
  menu.hidden = mobile.matches && !expanded;
}

function syncMenu() {
  toggle.hidden = !mobile.matches;
  setExpanded(false);
}

toggle.addEventListener('click', () => {
  setExpanded(toggle.getAttribute('aria-expanded') === 'false');
});

menu.addEventListener('click', (event) => {
  if (mobile.matches && event.target.closest('a')) setExpanded(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setExpanded(false);
    toggle.focus();
  }
});

mobile.addEventListener('change', syncMenu);
syncMenu();
