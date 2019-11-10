exports.run = (client, message, args) => {
    message.channel.sendMessage("Pong!").catch(console.error);
};

exports.help = {
    name: "ping"
};