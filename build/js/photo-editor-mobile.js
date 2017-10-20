var photoEditor = document.querySelector(".photo-editor");
var clip = photoEditor.querySelector(".tools-list__item--clip");
var fill = photoEditor.querySelector(".tools-list__item--fill");
var contrast = photoEditor.querySelector(".tools-list__item--contrast");
var clipIcon = photoEditor.querySelector(".tools-list__icon--clip");
var fillIcon = photoEditor.querySelector(".tools-list__icon--fill");
var contrastIcon = photoEditor.querySelector(".tools-list__icon--contrast");
var mainRange = photoEditor.querySelector(".photo-editor__range");

clip.addEventListener("click", function(evt) {
  clipIcon.classList.add("tools-list__icon--active");
  mainRange.classList.add("range-control--clip");
  if (fillIcon.classList.contains("tools-list__icon--active")) {
    fillIcon.classList.remove("tools-list__icon--active");
    mainRange.classList.remove("range-control--fill");
  } else if (contrastIcon.classList.contains("tools-list__icon--active")) {
    contrastIcon.classList.remove("tools-list__icon--active");
    mainRange.classList.remove("range-control--contrast");
  }
})

fill.addEventListener("click", function(evt) {
  fillIcon.classList.add("tools-list__icon--active");
  mainRange.classList.add("range-control--fill");
  if (clipIcon.classList.contains("tools-list__icon--active")) {
    clipIcon.classList.remove("tools-list__icon--active");
    mainRange.classList.remove("range-control--clip");
  } else if (contrastIcon.classList.contains("tools-list__icon--active")) {
    contrastIcon.classList.remove("tools-list__icon--active");
    mainRange.classList.remove("range-control--contrast");
  }
})

contrast.addEventListener("click", function(evt) {
  contrastIcon.classList.add("tools-list__icon--active");
  mainRange.classList.add("range-control--contrast");
  if (clipIcon.classList.contains("tools-list__icon--active")) {
    clipIcon.classList.remove("tools-list__icon--active");
    mainRange.classList.remove("range-control--clip");
  } else if (fillIcon.classList.contains("tools-list__icon--active")) {
    fillIcon.classList.remove("tools-list__icon--active");
    mainRange.classList.remove("range-control--fill");
  }
})
