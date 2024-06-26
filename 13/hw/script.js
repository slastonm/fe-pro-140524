window.onload = function(){
    let form = document.querySelector('#registrationForm');
    let nameInput = document.querySelector('#name');
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');
    let confirmPasswordInput = document.querySelector('#confirmPassword');
    let submitBtn = document.querySelector('#submitBtn');

    function validateForm(){
        let name = nameInput.value.trim();
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();
        let confirmPassword = confirmPasswordInput.value.trim();
        console.log(name, email, password, confirmPassword);
        let isFormValid = name.length>2 && email.length>4 && password.length>6 && confirmPassword >6 && (password === confirmPassword);

        console.log(isFormValid);
        submitBtn.disabled = !isFormValid;
    }

    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);

    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Форма відправлена');
        form.reset();
        submitBtn.disabled = true;
    });
}