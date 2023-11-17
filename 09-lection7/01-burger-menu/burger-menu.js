const menu = document.getElementById('burger-menu');
const menuClose = document.getElementById('burger-menu-close');
const menuOpen = document.getElementById('burger-menu-open');

console.log(menuOpen);

if (menuOpen) {
  menuOpen.addEventListener('click', function () {
    console.log(menu);

    if (menu) {
      menu.setAttribute('data-open', '');
      console.log(menu);
    }
  });
}

if (menuClose) {
  menuClose.addEventListener('click', function () {
    if (menu) {
      menu.removeAttribute('data-open');
    }
  });
}
