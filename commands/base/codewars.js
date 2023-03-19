const Client = require('discord.js');
const config = require('../../config');
const { EmbedBuilder } = require('discord.js');

module.exports = {

    //Nom de la commande
    name: "codewars",

    //Action lors de l'exécution de la commande
    async run(message) {

        let separator = message.content.split(" ");
        let username = separator[1];

        if (username === undefined) return message.channel.send("Veuillez spécifier un nom d'utilisateur CodeWars !");


        let endpoint = await fetch(`https://www.codewars.com/api/v1/users/${username}`);
        let info = await endpoint.json();

        console.log(`Commande Codewars exécutée par ${message.author.username} [1]`);


        // Création de l'embed
        const embed = new EmbedBuilder()
            .setColor(config.color_default)
            .setTitle(`🔎 Profil Codewars de ${info.login}`)
            .setImage("https://media.discordapp.net/attachments/952062418970869770/1085948363578552431/8.png")
            .setDescription(`**Clan**\n\`\`\`${info.clan}\`\`\` \nPoints: \`\`\`${info.honor}\`\`\` \`\`\`Leaderboard: ${info.leaderboardPosition}\nGrades: ${info.ranks}\`\`\``)
            .setFooter({
                text: `WildBot`,
                icon_url: 'https://cdn.discordapp.com/attachments/1083464304013095063/1083871061063520337/1547218298050.png',
            });

        await message.channel.send({ embeds: [embed] });
    }
};