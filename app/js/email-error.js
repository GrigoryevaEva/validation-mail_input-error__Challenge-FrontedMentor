'use strict'

let emailField = document.getElementById('email-field');
let textError = document.getElementById("text-error");
let iconError = document.getElementById("icon-error");

function validateEmail(event) {
    if (event.type == "keypress" && event.key != "Enter") {
        return;
    }
    if (
      !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    ) {
      emailField.classList.add("border-error");

      textError.classList.remove("invisible");
      textError.classList.add("visible");
      
      iconError.classList.remove("invisible");
      iconError.classList.add("visible");
    } else {
        emailField.classList.remove("border-error");

        textError.classList.remove("visible");
        textError.classList.add("invisible");

        iconError.classList.remove("visible");
        iconError.classList.add("invisible");
    };
};
