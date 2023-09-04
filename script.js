let passwordInput = document.querySelector('#password');
let confirmPasswordInput = document.querySelector('#confirm_pwd');
let errorMessage = document.querySelector('#error_message');

passwordInput.addEventListener('blur', (e) => {
    let pwd = passwordInput.value;
    confirmPasswordInput.addEventListener('blur', () => {
        let confirm_pwd = confirmPasswordInput.value;
        
        if (pwd == confirm_pwd) {
            errorMessage.innerText = '';

        } else {
            errorMessage.innerText = 'Passwords don\'t match';
        }
    })
})