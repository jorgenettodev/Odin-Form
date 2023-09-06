let passwordInput = document.querySelector('#password');
let confirmPasswordInput = document.querySelector('#confirm_pwd');
let errorMessage = document.querySelector('#error_message');
let form = document.querySelector('form');
let passwordsValid = false;

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