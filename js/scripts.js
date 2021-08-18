function showErrorMessage(input, message) {
    let container = input.parentElement;

    let error = container.querySelector('.error-message');
    if (error) {
        container.removeChild(error);
    }

    if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
    }
}

function validateEmail() {
    let value = emailInput.value;

    if (!value) {
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
    }

    if (value.indexOf('@') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
    }

    showErrorMessage(emailInput, null);
    return true;
}

function validatePassword() {
    let value = passwordInput.value;
  
    if (!value) {
      showErrorMessage(passwordInput, 'Password is a required field.');
      return false;
    }
  
    if (value.length < 8) {
      showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
      return false;
    }
  
    showErrorMessage(passwordInput, null);
    return true;
  }

  function validateForm() {
      let isValidEmail = validateEmail();
      let isValidPassword = validatePassword();
      return isValidEmail && isValidPassword;
  }