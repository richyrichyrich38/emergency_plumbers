var callUsBtn = document.getElementById("callUsBtn");
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close");

callUsBtn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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