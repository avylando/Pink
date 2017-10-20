var setSlider = document.querySelector(".set-selector");
var setWrapper = setSlider.querySelector(".set-selector__wrapper");
var leftButton = setSlider.querySelector(".nav-list__item--left");
var centerButton = setSlider.querySelector(".nav-list__item--center");
var rightButton = setSlider.querySelector(".nav-list__item--right");

leftButton.addEventListener("click", function (evt) {
  leftButton.classList.add("nav-list__item--active");
  if (centerButton.classList.contains("nav-list__item--active")) {
    centerButton.classList.remove("nav-list__item--active");
    setWrapper.classList.add("set-selector__wrapper--second-to-first");
    if (setWrapper.classList.contains("set-selector__wrapper--first-to-second")) {
      setWrapper.classList.remove("set-selector__wrapper--first-to-second");
    }
    if (setWrapper.classList.contains("set-selector__wrapper--third-to-second")) {
      setWrapper.classList.remove("set-selector__wrapper--third-to-second");
    }
  }
  else {
    rightButton.classList.remove("nav-list__item--active");
    setWrapper.classList.add("set-selector__wrapper--third-to-first");
    if (setWrapper.classList.contains("set-selector__wrapper--first-to-third")) {
      setWrapper.classList.remove("set-selector__wrapper--first-to-third");
    }
    if (setWrapper.classList.contains("set-selector__wrapper--second-to-third")) {
      setWrapper.classList.remove("set-selector__wrapper--second-to-third");
    }
  }
})

centerButton.addEventListener("click", function (evt) {
  centerButton.classList.add("nav-list__item--active");
  if (leftButton.classList.contains("nav-list__item--active")) {
    leftButton.classList.remove("nav-list__item--active");
    setWrapper.classList.add("set-selector__wrapper--first-to-second");
    if (setWrapper.classList.contains("set-selector__wrapper--second-to-first")) {
      setWrapper.classList.remove("set-selector__wrapper--second-to-first");
    }
    if (setWrapper.classList.contains("set-selector__wrapper--third-to-first")) {
      setWrapper.classList.remove("set-selector__wrapper--third-to-first");
    }
  }
  else {
    rightButton.classList.remove("nav-list__item--active");
    setWrapper.classList.add("set-selector__wrapper--third-to-second");
    if (setWrapper.classList.contains("set-selector__wrapper--first-to-third")) {
      setWrapper.classList.remove("set-selector__wrapper--first-to-third");
    }
    if (setWrapper.classList.contains("set-selector__wrapper--second-to-third")) {
      setWrapper.classList.remove("set-selector__wrapper--second-to-third");
    }
  }
})

rightButton.addEventListener("click", function (evt) {
  rightButton.classList.add("nav-list__item--active");
  if (leftButton.classList.contains("nav-list__item--active")) {
    leftButton.classList.remove("nav-list__item--active");
    setWrapper.classList.add("set-selector__wrapper--first-to-third");
    if (setWrapper.classList.contains("set-selector__wrapper--second-to-first")) {
      setWrapper.classList.remove("set-selector__wrapper--second-to-first");
    }
    if (setWrapper.classList.contains("set-selector__wrapper--third-to-first")) {
      setWrapper.classList.remove("set-selector__wrapper--third-to-first");
    }
  }
  else {
    centerButton.classList.remove("nav-list__item--active");
    setWrapper.classList.add("set-selector__wrapper--second-to-third");
    if (setWrapper.classList.contains("set-selector__wrapper--first-to-second")) {
      setWrapper.classList.remove("set-selector__wrapper--first-to-second");
    }
    if (setWrapper.classList.contains("set-selector__wrapper--third-to-second")) {
      setWrapper.classList.remove("set-selector__wrapper--third-to-second");
    }
  }
});
