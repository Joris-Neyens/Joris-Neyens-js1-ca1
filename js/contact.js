const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const formError = document.querySelectorAll(".form-error");

    const firstName = document.querySelector("#firstName");
    const firstNameValue = firstName.value;


        if(checkInputLength(firstNameValue) === true) {
            formError[0].style.display = "none";
        } else {
            formError[0].style.display = "block";
        }


    const lastName = document.querySelector("#lastName");
    const lastNameValue = lastName.value;

        if(checkInputLength(lastNameValue) === true) {
            formError[1].style.display = "none";
        } else {
            formError[1].style.display = "block";
        }

    const email = document.querySelector("#email");
    const emailValue = email.value;

        if(checkInputLength(emailValue) === true) {
            formError[2].style.display = "none";
        } else {
            formError[2].style.display = "block";
        };

        if(checkEmailValue(emailValue) === true) {
            formError[3].style.display = "none";

        } else {
            formError[3].style.display = "block";
        }

    const message = document.querySelector("#message");
    const messageValue = message.value;

        if(checkMessageLength(messageValue) === true) {
            formError[4].style.display = "none";
        } else {
            formError[4].style.display = "block";
        }


const formValidated = document.querySelector(".formValidated");

    if(checkMessageLength(messageValue) === true && checkEmailValue(emailValue) === true && checkInputLength(firstNameValue && lastNameValue && emailValue) === true) {
        formValidated.classList.remove("hidden");
    } 
}

function checkInputLength(value) {
    if(value.length > 0) {
        return true;
    } else {
        return false;
    }
}

function checkEmailValue(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

function checkMessageLength(message) {
    const trimmedMessage = message.trim();
    
    if(trimmedMessage.length >= 10) {
        return true;
    } else {
        return false;
    }
}
