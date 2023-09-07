// pwd inputs
let passwordInput = document.querySelector('#password');
let confirmPasswordInput = document.querySelector('#confirm_pwd');

// error message span
let errorMessage = document.querySelector('#error_message');

// form
let form = document.querySelector('form');

// passwords don't match message boolean control
let passwordsValid = false;

function clearInputFields() {
    document.querySelector('#first_name').value = '';
    document.querySelector('#last_name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#confirm_pwd').value = '';
}

// saves user data when the user clicks submit.
function saveUserData() {
    let firstName = document.querySelector('#first_name').value;
    let lastName = document.querySelector('#last_name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let password = document.querySelector('#password').value;

    console.log(email);
    console.log(password);

    localStorage.setItem('userLogin', email);
    localStorage.setItem('userPassword', password);
};



// submits the form and logs the email and password.
form.addEventListener('submit', saveUserData);
form.addEventListener('submit', clearInputFields);


// if passwords match: border-colors turns green; if not, they turn red;
function validatePasswords() {
    let pwd = passwordInput.value;
    let confirm_pwd = confirmPasswordInput.value;

    if (pwd == confirm_pwd) {
        errorMessage.innerText = '';
        passwordsValid = true;
        passwordInput.style = 'border-color: rgba(130, 119, 119, 0.46';
        confirmPasswordInput.style = 'border-color: rgba(130, 119, 119, 0.46'
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
        window.location = "./login.html";
    } else {
        alert('your passwords are not valid.')
    }
});


