const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NjM5MTk0NzgwNjk3NDkzNTA5.Xb3lvg.Uevlg_U_G6tk-bSJMHrjlT6IfbM";

const PREFIX = "!";

bot.on("ready", () =>{
    console.log("This bot is online!");
})

bot.on("message", message=>{
    if(message.content === "Tere"){
        message.reply("Jää vait");
    }
})

bot.on("message", message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "ping":
            message.channel.sendMessage("pong!");
            break;
        case "info":
            message.channel.sendMessage("Mina olen põhjus, miks inimesed kardavad roboteid.")
            break
        case "clear":
            if(!args[1]) return message.reply("Error. Please define second arg.")
            message.channel.bulkDelete(args[1]);
            break;
        case "embed":
            const embed = new Discord.RichEmbed()
            .setTitle("User Information")
            .addField("Player Name", message.author.username)
            .addField("See vend on tegija")
            .setColor(0xff0000)
            .setThumbnail(message.author.avatarURL);
            message.channel.sendEmbed(embed);
        break;
    }   
})

bot.login(token);

document.querySelector("#content-main > div.page_content > div.list > div:nth-child(1)")