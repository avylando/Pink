var buttonForm = document.querySelector(".fields__button");
var popupSend = document.querySelector(".modal--send");
var popupInvalid = document.querySelector(".modal--invalid");
var popupError = document.querySelector(".modal--error");
var buttonClose = document.querySelector(".modal__button--close");
var buttonOk = document.querySelector(".modal__button--ok");
var buttonAccept = document.querySelector(".modal__button--accept");
var form = document.querySelector(".fields");
var nameField = form.querySelector("[name=name]");
var surnameField = form.querySelector("[name=surname]");
var emailField = form.querySelector("[name=email]");
var blackout = document.querySelector(".blackout");

form.addEventListener("submit", function (evt) {
  if (!nameField.value || !surnameField.value || !emailField.value) {
    evt.preventDefault();
    console.log("Не заполнены необходимые поля");
    if (!nameField.value) {
      nameField.classList.add("fields__textfield--required");
      popupInvalid.classList.add("modal__show--invalid");
      blackout.classList.add("blackout--show");
    } else { nameField.classList.remove("fields__textfield--required") };
    if (!surnameField.value) {
      surnameField.classList.add("fields__textfield--required");
      popupInvalid.classList.add("modal__show--invalid");
      blackout.classList.add("blackout--show");
    } else { surnameField.classList.remove("fields__textfield--required") };
    if (!emailField.value) {
      emailField.classList.add("fields__textfield--required");
      popupInvalid.classList.add("modal__show--invalid");
      blackout.classList.add("blackout--show");
    } else { emailField.classList.remove("fields__textfield--required") };
  } else {
    evt.preventDefault();
    popupInvalid.classList.remove("modal__show--invalid");
    popupSend.classList.add("modal__show--send");
    blackout.classList.add("blackout--show");
    nameField.classList.remove("fields__textfield--required");
    surnameField.classList.remove("fields__textfield--required");
    emailField.classList.remove("fields__textfield--required");
    localStorage.setItem("name", nameField.value);
    localStorage.setItem("surname", surnameField.value);
    localStorage.setItem("email", emailField.value);
  }
});

var modalClickHandler = function (button, modal, className) {
  button.addEventListener('click', function () {
    if (modal.classList.contains(className)) {
      modal.classList.remove(className);
      blackout.classList.remove('blackout--show');
    }
  })
};

modalClickHandler(buttonClose, popupSend, 'modal__show--send');
modalClickHandler(buttonOk, popupInvalid, 'modal__show--invalid');
modalClickHandler(buttonAccept, popupInvalid, 'modal__show--error');

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupSend.classList.contains("modal__show--send")) {
      popupSend.classList.remove("modal__show--send");
      blackout.classList.remove("blackout--show");
    }

    if (popupError.classList.contains("modal__show--error")) {
      popupError.classList.remove("modal__show--error");
      blackout.classList.remove("blackout--show");
    }
  }
});
