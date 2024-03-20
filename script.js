function sendMessage() {

    var userInput = document.getElementById("user-input").value;

    if (userInput.trim() === "") return;

    var chatBox = document.getElementById("chat-box");

    var userMessage = document.createElement("div");

    userMessage.textContent = "You: " + userInput;

    chatBox.appendChild(userMessage);

    // Call your chatbot function here and get the response

    // For demonstration, let's just echo the user's input as the response

    var botMessage = document.createElement("div");

    botMessage.textContent = "Chatbot: " + userInput;

    chatBox.appendChild(botMessage);

    document.getElementById("user-input").value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

}