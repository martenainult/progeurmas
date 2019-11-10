exports.run = (client, message, args, Discord) => {
    const embed = new Discord.RichEmbed()
    .setTitle("Tänane päev")
    .addField("Player Name", message.author.username)
    .addField("See vend on tegija")
    .setColor(0xff0000)
    .setThumbnail(message.author.avatarURL);
    message.channel.sendEmbed(embed);
};

exports.help = {
    say: "embed"
};