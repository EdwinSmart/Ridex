document.getElementById('registration-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var form = e.target;
  var formData = new FormData(form);

  var jsonData = {};
  formData.forEach(function(value, key) {
    jsonData[key] = value;
  });

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'register.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert('Registration successful!');
      form.reset();
    }
  };
  xhr.send(JSON.stringify(jsonData));
});
