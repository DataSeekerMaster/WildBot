//import du module discord.js
const DiscordModule = require('discord.js');

//Paramètrage des intents du bot & création d'un client
const intents = new DiscordModule.IntentsBitField(3276799);
const bot = new DiscordModule.Client({ intents });

//import de la configuration & du fichier de langage
const config = require('./config');
const lang = require('./language');

//import des commandes
const commandsManager = require('./commands/manager/commandsManager');

//import du commandHandler
const commandHandler = require('./commands/handler/commandHandler');
const handlersManager = require('./handlers/manager/handlersManager');


setupCommands(bot);
setupHandlers(bot);

//Connexion du bot
bot.login(config.token);




//Quand le bot se connecte
bot.on('ready', async () => {
    console.log(lang.prefix + 'Le bot vient de se connecter !');
});



//function de setup des handlers
function setupHandlers(bot) {

    //Récupération des handlers
    handlersManager(bot);

    console.log(lang.prefix + 'Les handlers ont été chargées avec succès !');
}


//function de setup des commandes
function setupCommands(bot) {


    //Récupération des commandes et initialisation
    bot.commands = new DiscordModule.Collection();


    //Applications des commandes disponibles
    commandsManager(bot);

    //Récupération du commandHandler
    commandHandler(bot);

    console.log(lang.prefix + 'Les commandes ont été chargées avec succès !');
}