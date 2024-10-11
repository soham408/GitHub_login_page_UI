const passwordInput = document.getElementById('InputStyle');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  this.textContent = type === 'password' ? 'Show' : 'Hide';
});


const form = document.getElementById('myform');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh
  const formData = new FormData(form);

  // Get data to console
  const username = formData.get('Username');
  const password = formData.get('Password');

  console.log('Username:', username);
  console.log('Password:', password);
});
