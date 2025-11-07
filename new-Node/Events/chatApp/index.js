const chatRoom = require('./chatRoom.js');

const chat = new chatRoom();

chat.on('join', (user) => {
    console.log(`${user} has joined the chat`);
});

chat.on('message', (user, message) => {
    console.log(`${user} : ${message}`);
});

chat.on('leave', (user) => {
    console.log(`${user} has left the chat`);
});


// simulating the chat

chat.join('Alice');
chat.join('Bob');

chat.sendMessage ("Alice", "Hey Bob, hello to everyone");
chat.sendMessage ("Bob", "Hey Alice, hello to everyone");

chat.leave ("Alice");
chat.sendMessage("Alice", "This message won't be send");
chat.leave("Bob");