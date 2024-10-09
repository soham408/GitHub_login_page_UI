const passwordInput = document.getElementById('InputStyle');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  this.textContent = type === 'password' ? 'Show' : 'Hide';
});


