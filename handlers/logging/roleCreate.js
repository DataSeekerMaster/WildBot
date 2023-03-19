const Discord = require('discord.js');
const index = require('../../index');
const config = require('../../config');

module.exports = async (bot, role) => {

    // Création de l'embed
        const embed = {
            color: config.color_valid,
            title: 'Un rôle a été créé',
            description: `**Un nouveau role a été créé**\n\nrole: \`\`\`${role.name}\`\`\``,
            timestamp: new Date().toISOString(),
            footer: {
                text: `WildBot`,
                icon_url: 'https://cdn.discordapp.com/attachments/1083464304013095063/1083871061063520337/1547218298050.png',
            },
        };

    // On récupère le channel de logs
    const channel = bot.channels.cache.get(config.ID_logsChannel);

    // Si le channel n'existe pas, on ne fait rien
    if (!channel) return;


    // On envoie l'embed dans le channel de logs
    channel.send({ embeds: [embed] });
    
}