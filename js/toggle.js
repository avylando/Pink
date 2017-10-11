  var mainMenu = document.querySelector(".main-menu");
  var menuToggle = document.querySelector(".page-header__toggle");
  var headerTitle = document.querySelector(".page-header__title");
  var promo = document.querySelector(".promo");
  var blockHead = document.querySelector(".block-head__wrapper");

  mainMenu.classList.remove("main-menu--nojs");
  menuToggle.classList.remove("page-header__toggle--nojs");
  headerTitle.classList.remove("page-header__title--nojs");
  // promo.classList.remove("promo--nojs");
  // blockHead.classList.remove("block-head__wrapper--nojs");

menuToggle.addEventListener("click", function() {

    if (mainMenu.classList.contains("main-menu--closed")) {
      mainMenu.classList.remove("main-menu--closed");
      mainMenu.classList.add("main-menu--opened");
      headerTitle.classList.remove("page-header__title--transparent");
      promo.classList.remove("promo--extended");
      // blockHead.classList.remove("block-head__wrapper--extended");
    } else {
      mainMenu.classList.add("main-menu--closed");
      mainMenu.classList.remove("main-menu--opened");
      headerTitle.classList.add("page-header__title--transparent");
      promo.classList.add("promo--extended");
      // blockHead.classList.add("block-head__wrapper--extended");
    }
});

menuToggle.addEventListener ("click", function (evt) {
  menuToggle.classList.toggle("page-header__toggle--cross");

  if (menuToggle.classList.contains("page-header__toggle--burger")) {
      menuToggle.classList.remove("page-header__toggle--burger");
      menuToggle.classList.add("page-header__toggle--cross");
  } else {
    menuToggle.classList.add("page-header__toggle--burger");
    menuToggle.classList.remove("page-header__toggle--cross");
  }

});

// menuToggle.addEventListener ("click", function (evt) {

//   if (headerTitle.classList.contains("page-header__title--transparent")) {
//     headerTitle.classList.remove("page-header__title--transparent");
//   } else {
//     headerTitle.classList.add("page-header__title--transparent");
//   }
// });

// menuToggle.addEventListener ("click", function (evt) {

//   if (promo.classList.contains("promo--extended")) {
//     promo.classList.remove("promo--extended");
//   } else {
//     promo.classList.add("promo--extended");
//   }
// });

menuToggle.addEventListener ("click", function (evt) {

  if (blockHead.classList.contains("block-head__wrapper--extended")) {
    blockHead.classList.remove("block-head__wrapper--extended");
  } else {
    blockHead.classList.add("block-head__wrapper--extended");
  }
});
