  var mainMenu = document.querySelector('.main-menu');
  var menuToggle = document.querySelector('.page-header__toggle');

  // navMain.classList.remove('main-nav--nojs');

  menuToggle.addEventListener('click', function() {
    if (mainMenu.classList.contains('main-menu--closed')) {
      mainMenu.classList.remove('main-menu--closed');
      mainMenu.classList.add('main-menu--opened');
    } else {
      mainMenu.classList.add('main-menu--closed');
      mainMenu.classList.remove('main-menu--opened');
    }
  });
