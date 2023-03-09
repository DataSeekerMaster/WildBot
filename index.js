//import du module discord.js & création d'un client
const DiscordModule = require('discord.js');

//Paramètrage des intents du bot & création d'un client
const intents = new DiscordModule.IntentsBitField(3276799);
const bot = new DiscordModule.Client({intents});

//import de la configuration
const config = require('./config');

//Connexion du bot
bot.login(config.token);


//Quand le bot se connecte
bot.on('ready', async() => {
    console.log('[INFO] Le bot vient de se connecter !');
});