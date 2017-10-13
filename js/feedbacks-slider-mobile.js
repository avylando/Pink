var slider = document.querySelector(".feedbacks-slider");
var slide = slider.querySelector(".feedbacks-slider__item");
var leftButton = slider.querySelector(".nav-list__item--left");
var centerButton = slider.querySelector(".nav-list__item--center");
var rightButton = slider.querySelector(".nav-list__item--right");

leftButton.addEventListener("click", function (evt) {
  leftButton.classList.add("nav-list__item--active");
  if (centerButton.classList.contains("nav-list__item--active")) {
    centerButton.classList.remove("nav-list__item--active");
    slide.classList.add("set-selector__wrapper--second-to-first");
    if (slide.classList.contains("set-selector__wrapper--first-to-second")) {
      slide.classList.remove("set-selector__wrapper--first-to-second");
    }
    if (slide.classList.contains("set-selector__wrapper--third-to-second")) {
      slide.classList.remove("set-selector__wrapper--third-to-second");
    }
  }
  else {
    rightButton.classList.remove("nav-list__item--active");
    slide.classList.add("set-selector__wrapper--third-to-first");
    if (slide.classList.contains("set-selector__wrapper--first-to-third")) {
      slide.classList.remove("set-selector__wrapper--first-to-third");
    }
    if (slide.classList.contains("set-selector__wrapper--second-to-third")) {
      slide.classList.remove("set-selector__wrapper--second-to-third");
    }
  }
});
