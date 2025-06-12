function scrollToContact() {
  document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
}

function validateContactForm() {
  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  let isValid = true;

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate full name
  if (fullName.length === 0) {
    document.getElementById('nameError').textContent = 'Full Name is required.';
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.length === 0) {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    isValid = false;
  }

  // Validate message
  if (message.length < 20) {
    document.getElementById('messageError').textContent = 'Message must be at least 20 characters.';
    isValid = false;
  }

  if (!isValid) {
    return false; // Prevent form submission
  }

  alert('Thank you for contacting us, ' + fullName + '!');
  return true;
}
