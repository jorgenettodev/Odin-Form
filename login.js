let userData = {
    email: localStorage.getItem('userLogin'),
    pwd: localStorage.getItem('userPassword')
};

console.log(userData['email']);
console.log(userData['pwd']);


let loginInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');

// loginInput.addEventListener('input', () => {
//     loginInput = loginInput.value;
// });

// passwordInput.addEventListener('input', () => {
//     passwordInput = passwordInput.value;
// })

function login() {
    console.log(loginInput.value);
    console.log(passwordInput.value);

    if (loginInput.value == userData['email'] && passwordInput.value == userData['pwd']) {
        alert('You are logged in successfully.');
        loginInput.value = '';
        passwordInput.value = '';
    } else {
        alert('Your email or password is not correct.')
        loginInput.value = '';
        passwordInput.value = '';
    }
}
const form = document.querySelector('form');
const loginButton = document.querySelector('#login_button');
form.addEventListener('submit', login);