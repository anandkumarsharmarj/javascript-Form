const form = document.getElementById('registrationForm');
const submittedData = document.getElementById('submittedData');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const firstName = form.first.value;
  const lastName = form.last.value;
  const emailID = form.email.value;
  const gender = form.gender.value;


  submittedData.style.display = 'block'; // Show submitted data section

  document.getElementById('submittedName').textContent = `Name: ${firstName} ${lastName}`;
  document.getElementById('submittedEmail').textContent = `Email: ${emailID}`;

});
