//We learned that error messages are not identical in every browser, to show the same message to everyone we use the setCustomValidity()
// const nameInput = document.querySelector("[name= 'name']")

// nameInput.addEventListener('invalid', () => {
//     nameInput.setCustomValidity("Please enter your name :P")
// })


//To validate in Real-Time we can add real-time validation in JavaScript by listening to the "onblur"(in html, in js it is blur) event of a form control, and validate the input immediately when a user leaves a form field.
const form = document.querySelector("form")

form.addEventListener('blur', (event) => {
    //Validate the field
    const isValid = event.target.validity.valid
    // console.log(event.target.validity)
    const message = event.target.validationMessage
    const connectedValidationId = event.target.getAttribute('aria-describedby')
    const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false

    if (connectedValidation && message && !isValid){
        // connectedValidation.style.display = 'block'
        connectedValidation.innerText = message
    }else{
        connectedValidation.innerText = ''
    }
}, true)



//Show password button
const revealPassword = document.querySelector('.reveal-password');
const passwordField = document.querySelector('.password-field');
const passwordAnnounce = document.querySelector('.password-announce');

if (revealPassword && passwordField && passwordAnnounce) {
  revealPassword.hidden = false;
  passwordField.classList.add('has-js');
  
  revealPassword.addEventListener('click', (event) => {
    let isPressed = revealPassword.getAttribute('data-pressed') === 'true';
    if (isPressed) {
        passwordField.type = 'password';
        revealPassword.innerText = revealPassword.dataset.textShow;
        passwordAnnounce.innerText = passwordAnnounce.dataset.textHidden;
    } else {
        passwordField.type = 'text';
        revealPassword.innerText = revealPassword.dataset.textHide;
        passwordAnnounce.innerText = passwordAnnounce.dataset.textShown;
    }
    revealPassword.setAttribute('data-pressed', String(!isPressed));
  });
   
}
