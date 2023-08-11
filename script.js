function togglePasswordVisibility() {
  var passwordInput = document.querySelector('input[name="password"]');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

document.getElementById("registration-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // Perform form validation
  var form = event.target;
  var password = form.elements.password.value;
  var confirmPassword = form.elements.confirm_password.value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Create a JSON object to store user data
  var userData = {
    first_name: form.elements.first_name.value,
    middle_name: form.elements.middle_name.value,
    last_name: form.elements.last_name.value,
    phone_number: form.elements.phone_number.value,
    email: form.elements.email.value,
    password: password,
    gender: form.elements.gender.value,
    date_of_birth: form.elements.date_of_birth.value,
    country: form.elements.country.value,
    city: form.elements.city.value,
  };

  // Store user data in a JSON file using PHP
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      // Show modal pop up
      showModal();
    }
  };
  xhttp.open("POST", "store_data.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("data=" + JSON.stringify(userData));
});

function showModal() {
  var modal = document.getElementById("modal");
  var closeBtn = modal.querySelector(".close");
  modal.style.display = "block";

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
