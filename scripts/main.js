let scrollTop = 0;
window.addEventListener('scroll', function () {
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

  if (windowWidth >= 769) {
    if (scrollTop <= (headerTexr - 50)) {
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

    menu.classList.toggle(`nav--close`);
    btn.classList.toggle(`header__btn--open`);
  })

};
openMenu();

function scroll() {
  const nav = document.querySelector(`nav.nav`);
  const smoothLinks = nav.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      document.querySelector(`.nav`).classList.add(`nav--close`);
      document.querySelector(`.header__btn`).classList.remove(`header__btn--open`);
    });
  };

}

scroll();

function scrollBtn() {
  const body = document.querySelector(`body`);
  body.addEventListener(`click`, evt => {
    if (evt.target.matches(`.services__wrapper-btn`)) {
      evt.preventDefault();
      const id = evt.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      document.querySelector(`.nav`).classList.add(`nav--close`);
      document.querySelector(`.header__btn`).classList.remove(`header__btn--open`);
    }
  })


}
scrollBtn();