let messages = [];

function postMessage() {
    const input = document.getElementById('messageInput');
    const messageText = input.value.trim();
    if (messageText) {
        const message = {
            id: messages.length + 1, // 生成唯一 ID
            text: messageText,
            timestamp: new Date().toLocaleString() // 记录发表时间
        };
        messages.push(message);
        input.value = ''; // 清空输入框
        displayMessages();
    }
}

function displayMessages() {
    const forum = document.getElementById('forum');
    forum.innerHTML = ''; // 清空之前的留言
    messages.forEach((message) => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message'; // 应用样式
        messageElement.innerHTML = `<strong>ID ${message.id}:</strong> ${message.text} <br><small>发表于: ${message.timestamp}</small>`;
        forum.appendChild(messageElement);
    });
}
