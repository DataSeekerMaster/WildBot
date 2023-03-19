//Import de fs pour lire les fichiers/dossiers
const Discord = require('discord.js');
const fs = require('fs');

//Import du fichier de langage
const lang = require('../../language');

//Compteur de commandes activées
let handlersActivated = 0;

module.exports = async bot => {


    //On récupère tous les fichiers du dossier handlers et on les filtres pour ne garder que les fichiers .js
    fs.readdirSync("./handlers/logging/").filter(f => f.endsWith(".js")).forEach(async file => {

        //On récupère le fichier
        let handler = require(`../../handlers/logging/${file}`);

        bot.on(file.split('.js').join(""), handler.bind(null, bot));

        //Si l'handler est correctement configurée, on l'ajoute au tableau



        handlersActivated++;
    });

    console.log(`${lang.prefix} ${handlersActivated} handlers activés !`);
};