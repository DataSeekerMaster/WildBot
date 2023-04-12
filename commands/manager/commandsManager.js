//Import de fs pour lire les fichiers/dossiers
const fs = require('fs');

//Import du fichier de langage
const lang = require('../../language');

//Compteur de commandes activées
let commandsStaffActivated = 0;
let commandsBaseActivated = 0;
let commandsTotalActivated = 0;

module.exports = async bot => {

    // DANS UN PREMIER TEMPS JE RECUPERE LES COMMANDES STAFF


    //On récupère tous les fichiers du dossier commands et on les filtres pour ne garder que les fichiers .js
    fs.readdirSync("./commands/staff").filter(f => f.endsWith(".js")).forEach(async file => {

        //On récupère le fichier
        let command = require(`../../commands/staff/${file}`);


        //Vérification que le nom de la commande est bien une chaîne de caractères
        if (!command.name || typeof command.name !== "string") throw new TypeError(`[ERROR] La commande ${file.slice(0, file.lenght - 3)} n'a pas de nom ou le nom n'est pas une chaîne de caractères.`);


        //Si la commande est correctement configurée, on l'ajoute au tableau des commandes
        bot.commands.set(command.name, command);
        commandsStaffActivated++;
        commandsTotalActivated++;
        console.log(`${lang.prefix} Commande ${command.name} activée !`);
    });

    console.log(`${lang.prefix} ${commandsStaffActivated} commandes STAFF activées !`);


    



    // MAINTENANT JE RECUPERE LES COMMANDES UTILISATEURS


    //On récupère tous les fichiers du dossier commands et on les filtres pour ne garder que les fichiers .js
    fs.readdirSync("./commands/base").filter(f => f.endsWith(".js")).forEach(async file => {

        //On récupère le fichier
        let baseCommand = require(`../../commands/base/${file}`);

        //Vérification que le nom de la commande est bien une chaîne de caractères
        if (!baseCommand.name || typeof baseCommand.name !== "string") throw new TypeError(`[ERROR] La commande ${file.slice(0, file.lenght - 3)} n'a pas de nom ou le nom n'est pas une chaîne de caractères.`);


        //Si la commande est correctement configurée, on l'ajoute au tableau des commandes
        bot.commands.set(baseCommand.name, baseCommand);
        commandsBaseActivated++;
        commandsTotalActivated++;

    });

    console.log(`${lang.prefix} ${commandsBaseActivated} commandes de base activées !`);
};