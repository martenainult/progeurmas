const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NjM5MTk0NzgwNjk3NDkzNTA5.XboAeQ.fvQ6ilsldtlPgVcslzWJ5iN6sv0";

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
            message.reply("pong!")
        break;
    }
})

bot.login(token);