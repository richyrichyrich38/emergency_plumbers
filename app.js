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

const form = document.getElementById("myForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent default form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    // perform desired actions with the form data, e.g. send it to a server using fetch API
    fetch("/my-server-url", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully.");
          form.reset(); // clear the form
        } else {
          alert("Failed to send message. Please try again.");
        }
      })
      .catch((error) => {
        alert("An error occurred. Please try again later.");
        console.error(error);
      });
  });
