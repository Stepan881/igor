let scrollTop = 0;
window.addEventListener('scroll', function() {
  scrollTop = pageYOffset;
  headerColor();
});

let windowWidth = window.innerWidth;
window.addEventListener(`resize`, () => {
  windowWidth = window.innerWidth;
  console.log('windowWidth: ', windowWidth);
})

function headerColor() {
  const header = document.querySelector(`.header`);
  const headerTexr = document.querySelector(`h1`).getBoundingClientRect().top + pageYOffset;

  if (windowWidth >= 769 ) {
    if (scrollTop <= (headerTexr-50)) {
      header.classList.add(`header--active`)
    } else {
      header.classList.remove(`header--active`)
    }
  } else {
    header.classList.remove(`header--active`)
  }


}
headerColor();

function openMenu() {

  const btn = document.querySelector(`.header__btn`);
  const menu = document.querySelector(`.nav`);
  btn.addEventListener(`click`, evt => {
    evt.preventDefault();

    menu.classList.toggle(`nav--close`)
    btn.classList.toggle(`header__btn--open`)
  })

};
openMenu();
