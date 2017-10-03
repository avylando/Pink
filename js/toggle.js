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

menuToggle.addEventListener ("click", function (evt) {
  menuToggle.classList.toggle("page-header__toggle--burger");

  if (menuToggle.classList.contains("page-header__toggle--cross")) {
      menuToggle.classList.remove("page-header__toggle--cross");
      menuToggle.classList.add('page-header__toggle--burger');
  } else {
    menuToggle.classList.add('page-header__toggle--cross');
    menuToggle.classList.remove('page-header__toggle--burger');
  }

});
