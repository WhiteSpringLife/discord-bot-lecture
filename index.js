const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log(`${client.user.tag} 켰다!`);
});

client.on('messageCreate', message => {
    if (message.author.bot || message.channel.type == "dm") return;

    if (message.content == "ping")
    {
        message.channel.send("pong");
    }
});

client.login();