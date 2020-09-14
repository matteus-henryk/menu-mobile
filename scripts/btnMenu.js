const menu = document.querySelector('.menu');

const btnMenu_open = document.querySelector('.btnMenu_open');

btnMenu_open.addEventListener('click', () => {
  menu.classList.add('menu_open');
})

const btnMenu_close = document.querySelector('.btnMenu_close');

btnMenu_close.addEventListener('click', () => {
  menu.classList.remove('menu_open');
})