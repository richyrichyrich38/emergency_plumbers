// get the call now button element and listen for a click event
const callNowButton = document.querySelector('.call-now-button');
callNowButton.addEventListener('click', () => {
  const phoneNumber = '123-456-7890'; // replace with your phone number
  window.location.href = `tel:${phoneNumber}`;
});

// get the form element and listen for a submit event
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent the default form submission behavior
  
  // get the form inputs
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;
  
  // validate the inputs
  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields');
    return;
  }
  
  // send the form data to a server using fetch or another method
  // for example:
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Thank you for contacting us!');
      form.reset();
    } else {
      alert('An error occurred. Please try again later.');
    }
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred. Please try again later.');
  });
});