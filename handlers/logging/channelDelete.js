const Discord = require('discord.js');
const index = require('../../index');
const config = require('../../config');

module.exports = async (bot, role) => {

    // Création de l'embed
        const embed = {
            color: config.color_error,
            title: 'Un nouveau salon a été créé',
            description: `**Un nouveau salon a été créé**\n\nSalon: \`\`\`${role.name} (${role.id})\`\`\``,
            timestamp: new Date().toISOString(),
            footer: {
                text: `ID :`,
                icon_url: 'https://i.imgur.com/AfFp7pu.png',
            },
        };

    // On récupère le channel de logs
    const channel = bot.channels.cache.get(config.ID_logsChannel);

    // Si le channel n'existe pas, on ne fait rien
    if (!channel) return;


    // On envoie l'embed dans le channel de logs
    channel.send({ embeds: [embed] });
    
}