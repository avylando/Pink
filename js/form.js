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


button_submit.onclick = function(evt) {
  if (!nameField.value || !surnameField.value || !emailField.value) {
    evt.preventDefault();
    console.log("Не заполнены необходимые поля");
    if (!nameField.value) {
      nameField.classList.add("fields__textfield--required");
      popupInvalid.classList.add("modal__show--invalid");
      blackout.classList.add("blackout--show");
    } else {nameField.classList.remove("fields__textfield--required")};
    if (!surnameField.value) {
      surnameField.classList.add("fields__textfield--required");
      popupInvalid.classList.add("modal__show--invalid");
      blackout.classList.add("blackout--show");
    } else {surnameField.classList.remove("fields__textfield--required")};
    if (!emailField.value) {
      emailField.classList.add("fields__textfield--required");
      popupInvalid.classList.add("modal__show--invalid");
      blackout.classList.add("blackout--show");
    } else {emailField.classList.remove("fields__textfield--required")};
  } else {

    var x = new XMLHttpRequest();
    var url = "phpmailer/examples/mailru.php";
    var body = "name=" + nameField.value +
        "&surname=" + surnameField.value + "&email=" + emailField.value;
    // x.open("GET", "phpmailer/examples/mailru.php?name=" + nameField.value +
    //      "&surname=" + surnameField.value + "&email=" + emailField.value, true);
    x.open("POST", "mail.php", true);
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    x.onreadystatechange = function() {
      if (x.responseText === "Message sent!") {
        // evt.preventDefault();
        popupInvalid.classList.remove("modal__show--invalid");
        popupError.classList.remove("modal__show--error");
        popupSend.classList.add("modal__show--send");
        blackout.classList.add("blackout--show");
        nameField.classList.remove("fields__textfield--required");
        surnameField.classList.remove("fields__textfield--required");
        emailField.classList.remove("fields__textfield--required");
        localStorage.setItem("name", nameField.value);
        localStorage.setItem("surname", surnameField.value);
        localStorage.setItem("email", emailField.value);
    } else {
      // alert("Ошибка отправки!");
      popupInvalid.classList.remove("modal__show--invalid");
      popupSend.classList.remove("modal__show--send");
      popupError.classList.add("modal__show--error");
      blackout.classList.add("blackout--show");
    };
    x.send(body);
  }
}

// buttonForm.addEventListener("click", function (evt) {
// /*
//   if (!nameField.value || !surnameField.value || !emailField.value) {
//     evt.preventDefault();
//     console.log("Не заполнены необходимые поля");
//     if (!nameField.value) {
//       nameField.classList.add("fields__textfield--required");
//       popupError.classList.add("modal__show--error");
//       blackout.classList.add("blackout--show");
//     } else {nameField.classList.remove("fields__textfield--required")};
//     if (!surnameField.value) {
//       surnameField.classList.add("fields__textfield--required");
//       popupError.classList.add("modal__show--error");
//       blackout.classList.add("blackout--show");
//     } else {surnameField.classList.remove("fields__textfield--required")};
//     if (!emailField.value) {
//       emailField.classList.add("fields__textfield--required");
//       popupError.classList.add("modal__show--error");
//       blackout.classList.add("blackout--show");
//     } else {emailField.classList.remove("fields__textfield--required")};
//   } else {
//     // evt.preventDefault();
//     popupError.classList.remove("modal__show--error");
//     popupSend.classList.add("modal__show--send");
//     blackout.classList.add("blackout--show");
//     nameField.classList.remove("fields__textfield--required");
//     surnameField.classList.remove("fields__textfield--required");
//     emailField.classList.remove("fields__textfield--required");
//     localStorage.setItem("name", nameField.value);
//     localStorage.setItem("surname", surnameField.value);
//     localStorage.setItem("email", emailField.value);
//   }
//   */

// });

buttonClose.addEventListener("click", function (evt) {
  if (popupSend.classList.contains("modal__show--send")) {
    popupSend.classList.remove("modal__show--send");
    blackout.classList.remove("blackout--show");
  }
});

buttonOk.addEventListener("click", function (evt) {
  if (popupInvalid.classList.contains("modal__show--invalid")) {
    popupInvalid.classList.remove("modal__show--invalid");
    blackout.classList.remove("blackout--show");
  }
});

buttonAccept.addEventListener("click", function (evt) {
  if (popupError.classList.contains("modal__show--error")) {
    popupError.classList.remove("modal__show--error");
    blackout.classList.remove("blackout--show");
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupSend.classList.contains("modal__show--send")) {
      popupSend.classList.remove("modal__show--send");
      blackout.classList.remove("blackout--show");
    }
    if (popupInvalid.classList.contains("modal__show--invalid")) {
      popupInvalid.classList.remove("modal__show--invalid");
      blackout.classList.remove("blackout--show");
    }
    if (popupError.classList.contains("modal__show--error")) {
      popupError.classList.remove("modal__show--error");
      blackout.classList.remove("blackout--show");
    }
  }
});
