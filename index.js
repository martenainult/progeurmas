const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const Enmap = require("enmap");
require("dotenv-flow").config();
client.commands = new Enmap();

const config = {
    token: process.env.token,
    owner: process.env.owner,
    prefix: process.env.prefix
}

client.on("ready", () =>{
console.log("This bot is online!");
})

client.on("message", message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();
    // if laused
    if(message.content === "Tere") message.reply("Jää vait");
    if(message.content === "Mis on elu mõte?") message.reply("Ma olen sellele pikalt mõelnud...");
    if(message.content === "Mis on parim eriala?") message.reply("IT!")

    const cmd = client.commands.get(command);
    if (!cmd) return;
    
    cmd.run(client, message, args);
    cmd.run_disc(client, message, args, Discord); 
})

fs.readdir("./commands/", async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let cmdName = file.split(".")[0];
        console.log(`Loaded command "${cmdName}".`);
        client.commands.set(cmdName, props);
    });
});

client.login(config.token);

//document.querySelector("#content-main > div.page_content > div.list > div:nth-child(1)")