exports.run = (client, message, args) => {
    if(!args[0]) return message.reply("Error. Please define second arg.")
            message.channel.bulkDelete(args[0]);
};

exports.help = {
    name: "clear"
};