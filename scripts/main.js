let scrollTop = 0;
window.addEventListener('scroll', function() {
  scrollTop = pageYOffset;
  headerColor();
});

function headerColor() {
  const header = document.querySelector(`.header`);
  const headerTexr = document.querySelector(`h1`).getBoundingClientRect().top + pageYOffset;

  if (scrollTop <= (headerTexr-50)) {
    header.classList.add(`header--active`)
  } else {
    header.classList.remove(`header--active`)
  }
}
headerColor();