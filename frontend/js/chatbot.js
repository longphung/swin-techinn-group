function toggleChatbot() {
    const chatbotUI = document.getElementById("chatbotUI");
    
    if (chatbotUI.classList.contains("chatbot-closed")) {
        chatbotUI.classList.remove("chatbot-closed");
    } else {
        chatbotUI.classList.add("chatbot-closed");
    }
}
