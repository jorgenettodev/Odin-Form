let passwordInput = document.querySelector('#password');
let confirmPasswordInput = document.querySelector('#confirm_pwd');
let errorMessage = document.querySelector('#error_message');
let form = document.querySelector('form');
let passwordsValid = false;

// fields
let firstName = document.querySelector('#first_name').value;
let lastName = document.querySelector('#last_name').value;
let email = document.querySelector('#email').value;
let phone = document.querySelector('#phone').value;
let password = document.querySelector('#password').value;

function saveUserData() {
    let firstName = document.querySelector('#first_name').value;
    let lastName = document.querySelector('#last_name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let password = document.querySelector('#password').value;

    console.log(email);
    console.log(password);
}

form.addEventListener('submit', saveUserData);


function validatePasswords() {
    let pwd = passwordInput.value;
    let confirm_pwd = confirmPasswordInput.value;

    if (pwd == confirm_pwd) {
        errorMessage.innerText = '';
        passwordsValid = true;
        passwordInput.style = 'border-color: green';
        confirmPasswordInput.style = 'border-color: green'
    } else {
        passwordsValid = false;
        errorMessage.innerText = 'Passwords don\'t match';
        passwordInput.style = 'border-color: red';
        confirmPasswordInput.style = 'border-color: red'
    }
}

passwordInput.addEventListener('input', validatePasswords);
confirmPasswordInput.addEventListener('input', validatePasswords);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (passwordsValid) {
        alert('you successfully created your account.');
    } else {
        alert('your passwords are not valid.')
    }
})