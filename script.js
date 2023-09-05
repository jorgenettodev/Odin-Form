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
    } else {
        passwordsValid = false;
        errorMessage.innerText = 'Passwords don\'t match';
    }
}

passwordInput.addEventListener('blur', validatePasswords);
confirmPasswordInput.addEventListener('blur', validatePasswords);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (passwordsValid) {
        alert('you successfully created your account.');
    } else {
        alert('your passwords are not valid.')
    }
})