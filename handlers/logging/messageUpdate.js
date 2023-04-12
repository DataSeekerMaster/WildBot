const Discord = require('discord.js');
const config = require('../../config');

module.exports = async (bot, oldMessage, newMessage) => {

    // Si le message est envoyé par un bot, on ne fait rien
    if (oldMessage.author.bot) return;

    // Si le message n'a pas été modifié, on ne fait rien
    if (oldMessage.content === newMessage.content) return;
    
        // Création de l'embed
        const embed = {
            color: config.color_default,
            title: 'Un message a été modifié',
            description: `**Message de ${oldMessage.author} modifié dans ${oldMessage.channel}**\n\nAncien message : \`\`\`${oldMessage.content}\`\`\`\nNouveau message : \`\`\`${newMessage.content}\`\`\``,
            timestamp: new Date().toISOString(),
            footer: {
                text: `WildBot`,
                icon_url: 'https://cdn.discordapp.com/attachments/1083464304013095063/1083871061063520337/1547218298050.png',
            },
        };


    // On récupère le channel de logs
    const channel = oldMessage.guild.channels.cache.get(config.ID_logsChannel);

    // Si le channel n'existe pas, on ne fait rien
    if (!channel) return;


    // On envoie l'embed dans le channel de logs
    channel.send({ embeds: [embed] });
    
}