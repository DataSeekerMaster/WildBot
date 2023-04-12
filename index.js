//import du module discord.js
const DiscordModule = require('discord.js');

//Paramètrage des intents du bot & création d'un client
const intents = new DiscordModule.IntentsBitField(3276799);
const bot = new DiscordModule.Client({intents});

//import de la configuration & du fichier de langage
const config = require('./config');
const lang = require('./language');

//import des commandes
const commandsManager = require('./commands/manager/commandsManager');

//import du commandHandler
const commandHandler = require('./commands/handler/commandHandler');

//Récupération des commandes et initialisation
bot.commands = new DiscordModule.Collection();

//Connexion du bot
bot.login(config.token);

//Applications des commandes disponibles
commandsManager(bot);

//Récupération du commandHandler
commandHandler(bot);


//Quand le bot se connecte
bot.on('ready', async() => {
    console.log(lang.prefix + 'Le bot vient de se connecter !');
});