var fSliderD = document.querySelector(".feedbacks-slider");
var leftSlideD = fSliderD.querySelector(".feedbacks-slider__item--left");
var centerSlideD = fSliderD.querySelector(".feedbacks-slider__item--center");
var rightSlideD = fSliderD.querySelector(".feedbacks-slider__item--right");
var leftArrow = fSliderD.querySelector(".feedbacks-slider__arrow--left");
var rightArrow = fSliderD.querySelector(".feedbacks-slider__arrow--right");


rightArrow.addEventListener("click", function (evt) {
  if (leftSlideD.classList.contains("feedbacks-slider__item--show")) {
    leftSlideD.classList.remove("feedbacks-slider__item--show");
    leftSlideD.classList.add("feedbacks-slider__item--hide");
    centerSlideD.classList.remove("feedbacks-slider__item--hide");
    centerSlideD.classList.add("feedbacks-slider__item--show");
  } else if (centerSlideD.classList.contains("feedbacks-slider__item--show")) {
    centerSlideD.classList.remove("feedbacks-slider__item--show");
    centerSlideD.classList.add("feedbacks-slider__item--hide");
    rightSlideD.classList.remove("feedbacks-slider__item--hide");
    rightSlideD.classList.add("feedbacks-slider__item--show");
  } else if (rightSlideD.classList.contains("feedbacks-slider__item--show")) {
    rightSlideD.classList.remove("feedbacks-slider__item--show");
    rightSlideD.classList.add("feedbacks-slider__item--hide");
    leftSlideD.classList.remove("feedbacks-slider__item--hide");
    leftSlideD.classList.add("feedbacks-slider__item--show");
  }
})

leftArrow.addEventListener("click", function (evt) {
  if (leftSlideD.classList.contains("feedbacks-slider__item--show")) {
    leftSlideD.classList.remove("feedbacks-slider__item--show");
    leftSlideD.classList.add("feedbacks-slider__item--hide");
    rightSlideD.classList.remove("feedbacks-slider__item--hide");
    rightSlideD.classList.add("feedbacks-slider__item--show");
  } else if (centerSlideD.classList.contains("feedbacks-slider__item--show")) {
    centerSlideD.classList.remove("feedbacks-slider__item--show");
    centerSlideD.classList.add("feedbacks-slider__item--hide");
    leftSlideD.classList.remove("feedbacks-slider__item--hide");
    leftSlideD.classList.add("feedbacks-slider__item--show");
  } else if (rightSlideD.classList.contains("feedbacks-slider__item--show")) {
    rightSlideD.classList.remove("feedbacks-slider__item--show");
    rightSlideD.classList.add("feedbacks-slider__item--hide");
    centerSlideD.classList.remove("feedbacks-slider__item--hide");
    centerSlideD.classList.add("feedbacks-slider__item--show");
  }
});
