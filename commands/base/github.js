const Client = require('discord.js');
const config = require('../../config');
const { EmbedBuilder } = require('discord.js');

module.exports = {

    //Nom de la commande
    name: "github",

    //Action lors de l'exécution de la commande
    async run(message) {

        let separator = message.content.split(" ");
        let username = separator[1];

        if(username === undefined) return message.channel.send("Veuillez spécifier un nom d'utilisateur GitHub !");


        let endpoint = await fetch(`https://api.github.com/users/${username}`);
        let info = await endpoint.json();

        console.log(`Commande GitHub exécutée par ${message.author.username} [1]`);


        // Création de l'embed
        const embed = new EmbedBuilder()
            .setColor(config.color_default)
            .setTitle(`🔎 Profil GitHub de ${info.login}`)
            .setImage("https://media.discordapp.net/attachments/952062418970869770/1085948363364634724/7.png")
            .setDescription(`**Repo public**\n\`\`\`${info.public_repos}\`\`\` \nBio: \`\`\`${info.bio}\`\`\` \`\`\`Followers: ${info.followers}\nFollowing: ${info.following}\`\`\` \nDate de création du compte / Dernière update du compte: \`\`\`${info.created_at} | ${info.updated_at}\`\`\``)
            //.setTimestamp(new Date().toISOString())
            .setFooter({
                text: `WildBot`,
                icon_url: 'https://cdn.discordapp.com/attachments/1083464304013095063/1083871061063520337/1547218298050.png',
            });
        

        await message.channel.send({ embeds: [embed] });
    }
};