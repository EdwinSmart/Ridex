document.addEventListener("DOMContentLoaded", function () {
  var chatBody = document.getElementById("chat-body");
  var userInput = document.getElementById("user-input");
  var sendBtn = document.getElementById("send-btn");

  function sendMessage(message, sender) {
    var messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");

    var messageContent = document.createElement("div");
    messageContent.classList.add("message");
    messageContent.textContent = message;

    if (sender === "user") {
      messageContent.classList.add("user-message");
    }

    messageDiv.appendChild(messageContent);
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function processUserInput() {
    var userMessage = userInput.value.trim();

    if (userMessage !==
 '') {
      sendMessage(userMessage, "user");

      // Process user input and generate a response
      var response = generateResponse(userMessage);

      // Display the response
      sendMessage(response, "chatbot");

      // Clear the user input field
      userInput.value = "";
    }
  }

  function generateResponse(userMessage) {
    // You can customize the logic here to generate appropriate responses based on user input
    // This is just a simple example
    if (userMessage.toLowerCase() === "hello") {
      return "Hello! Thank you for contacting Ride-X, how may I help you?";
    } else if (userMessage.toLowerCase() === "goodbye") {
      return "Goodbye! Thank you for contacting us please reach out if you have any further queries!";
    } 
else if (userMessage.toLowerCase() === "I want a car") {
      return "We have various types of cars for hire you can view our collection on the home page and the select the car that meets your needs or call/Whatsapp us on 0796014215.";
    }
else if (userMessage.toLowerCase() === "I want to hire a car") {
      return "We have various types of cars for hire you can view our collection on the home page and the select the car that meets your needs or call/Whatsapp us on 0796014215.";
    }
    else {
      return "Thank you for contacting Ride-X, for more details on your query you can call or Whatsapp our team on 0796014215. Thank you for choosing Ride-X!";
    }
  }

  // Event listeners
  sendBtn.addEventListener("click", processUserInput);
  userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      processUserInput();
    }
  });
});
