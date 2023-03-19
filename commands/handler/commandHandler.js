const Discord = require('discord.js');

module.exports = async bot => {

    //Handler des messages (pour les commandes)
    bot.on('messageCreate', async message => {

        //Si le message est envoyé par un bot, on ne fait rien
        if (message.author.bot) return;


        //Si le message n'est pas une commande, on ne fait rien
        if (message.content === "!groupe") return bot.commands.get('groupe').run(message);
        if (message.content.startsWith("!github")) return bot.commands.get('github').run(message);
        if (message.content.startsWith("!codewars")) return bot.commands.get('codewars').run(message);
    });

}