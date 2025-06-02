const form = document.getElementById('form');
const inputs = document.querySelectorAll('.inputs');
const spanRequired = document.querySelectorAll('.span-required');
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidation();
    emailValidation();
    passwordValidation();
    comparePasswords();
});

function setError(index) {
    inputs[index].style.border = '1px solid red';
    spanRequired[index].style.display = 'block';
}

function clearError(index) {
    inputs[index].style.border = '';
    spanRequired[index].style.display = 'none';
}

function nameValidation() {
    if (inputs[0].value.length < 3) {
        setError(0);
    } else {
        clearError(0);
    }
}

function emailValidation() {
    if (!regexEmail.test(inputs[1].value)) {
        setError(1)
    } else {
        clearError(1)
    }
}

function passwordValidation() {
    if (inputs[2].value.length < 8) {
        setError(2);
    } else {
        clearError(2);
        comparePasswords();
    }
}

function comparePasswords() {
    if (inputs[2].value !== inputs[3].value) {
        setError(3);
    } else {
        clearError(3);
    }
}