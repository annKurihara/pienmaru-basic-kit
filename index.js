const { token } = require('./config.json');
const { Client, GatewayIntentBits } = require('discord.js');


const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent
] });

client.once('ready', () => onClientReady());
function onClientReady() {
    console.log("Pienmaru is ready!");
    // Set presence status
    client.user.setStatus("online");  //online or idle
    // Set activities or custom status
    client.user.setActivity("mom working OwO", {
        type: "WATCHING", //PLAYING: WATCHING: LISTENING: STREAMING:
    })
    // Listen to Messages in the channel
    client.on('messageCreate', (message) => onMessageReceived(message));
}
// Upon a message being received, handle how we interact
function onMessageReceived(message) {
    // Reply list; to be randomized if someone said "the magic word"
    if (message.content.toLowerCase() === "pien") {
        message.reply("pien!")
    }
}
// Login Method
client.login(token);