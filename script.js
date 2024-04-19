function sendMessage() {
   var userInput = document.getElementById("user-input").value;
   if (userInput.trim() === "") return;
   fetch('/chatbot', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({ query: userInput })
   })
   .then(response => response.json())
   .then(data => {
       var chatBox = document.getElementById("chat-box");
       var userMessage = document.createElement("div");
       userMessage.textContent = "You: " + userInput;
       chatBox.appendChild(userMessage);
       var botMessage = document.createElement("div");
       botMessage.textContent = "Chatbot: " + data.response;
       chatBox.appendChild(botMessage);
       document.getElementById("user-input").value = "";
       chatBox.scrollTop = chatBox.scrollHeight;
   });
}
