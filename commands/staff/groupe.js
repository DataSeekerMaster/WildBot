const Client = require('discord.js');
const lang = require('../../language');
const embed = require('../../models/embeds');

module.exports = {

    //Nom de la commande
    name: "groupe",

    //Action lors de l'exécution de la commande
    async run(message) {


        // Création de l'embed
        const embed = {
            color: config.color_valid,
            title: 'Un nouveau salon a été supprimé',
            description: `**Un nouveau salon a été supprimé**\n\nSalon: \`\`\`${channel.name} (${channel.id})\`\`\``,
            timestamp: new Date().toISOString(),
            footer: {
                text: `WildBot`,
                icon_url: 'https://cdn.discordapp.com/attachments/1083464304013095063/1083871061063520337/1547218298050.png',
            },
        };

        // On récupère le channel de logs
        const sender = bot.channels.cache.get(config.ID_logsChannel);

        // Si le channel n'existe pas, on ne fait rien
        if (!sender) return;


        // On envoie l'embed dans le channel de logs
        sender.send({ embeds: [embed] });


        //On envoie un message de réponse
        await message.reply("Oops je suis encore en cours de construction.. Merci de patienter encore un peu !");

        //On log dans la console qui a exécuté la commande
        console.log(lang.prefix + "groupe command executed by " + message.author.username);
    }
};