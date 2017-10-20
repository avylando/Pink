var fSlider = document.querySelector(".feedbacks-slider");
var leftSlide = fSlider.querySelector(".feedbacks-slider__item--left");
var centerSlide = fSlider.querySelector(".feedbacks-slider__item--center");
var rightSlide = fSlider.querySelector(".feedbacks-slider__item--right");
var leftButtonF = fSlider.querySelector(".nav-list__item--left");
var centerButtonF = fSlider.querySelector(".nav-list__item--center");
var rightButtonF = fSlider.querySelector(".nav-list__item--right");

leftButtonF.addEventListener("click", function (evt) {
  leftButtonF.classList.add("nav-list__item--active");
  if (leftSlide.classList.contains("feedbacks-slider__item--hide")) {
    leftSlide.classList.remove("feedbacks-slider__item--hide");
    leftSlide.classList.add("feedbacks-slider__item--show");
  }
  if (centerButtonF.classList.contains("nav-list__item--active")) {
    centerButtonF.classList.remove("nav-list__item--active");
    centerSlide.classList.remove("feedbacks-slider__item--show");
    centerSlide.classList.add("feedbacks-slider__item--hide");
  }
  if (rightButtonF.classList.contains("nav-list__item--active")) {
    rightButtonF.classList.remove("nav-list__item--active");
    rightSlide.classList.remove("feedbacks-slider__item--show");
    rightSlide.classList.add("feedbacks-slider__item--hide");
  }
})

centerButtonF.addEventListener("click", function (evt) {
  centerButtonF.classList.add("nav-list__item--active");
  if (centerSlide.classList.contains("feedbacks-slider__item--hide")) {
    centerSlide.classList.remove("feedbacks-slider__item--hide");
    centerSlide.classList.add("feedbacks-slider__item--show");
  }
  if (leftButtonF.classList.contains("nav-list__item--active")) {
    leftButtonF.classList.remove("nav-list__item--active");
    leftSlide.classList.remove("feedbacks-slider__item--show");
    leftSlide.classList.add("feedbacks-slider__item--hide");
  }
  if (rightButtonF.classList.contains("nav-list__item--active")){
    rightButtonF.classList.remove("nav-list__item--active");
    rightSlide.classList.remove("feedbacks-slider__item--show");
    rightSlide.classList.add("feedbacks-slider__item--hide");
  }
})

rightButtonF.addEventListener("click", function (evt) {
  rightButtonF.classList.add("nav-list__item--active");
  if (rightSlide.classList.contains("feedbacks-slider__item--hide")) {
    rightSlide.classList.remove("feedbacks-slider__item--hide");
    rightSlide.classList.add("feedbacks-slider__item--show");
  }
  if (leftButtonF.classList.contains("nav-list__item--active")) {
    leftButtonF.classList.remove("nav-list__item--active");
    leftSlide.classList.remove("feedbacks-slider__item--show");
    leftSlide.classList.add("feedbacks-slider__item--hide");
  }
  if (centerButtonF.classList.contains("nav-list__item--active")) {
    centerButtonF.classList.remove("nav-list__item--active");
    centerSlide.classList.remove("feedbacks-slider__item--show");
    centerSlide.classList.add("feedbacks-slider__item--hide");
  }
});
