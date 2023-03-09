//Import de fs pour lire les fichiers/dossiers
const fs = require('fs');

//Import du fichier de langage
const lang = require('../../language');

//Compteur de commandes activées
let handlersActivated = 0;

module.exports = async bot => {


    //On récupère tous les fichiers du dossier handlers et on les filtres pour ne garder que les fichiers .js
    fs.readdirSync("./logging/").filter(f => f.endsWith(".js")).forEach(async file => {

        //On récupère le fichier
        let handler = require(`../../logging/${file}`);


        //A MODIFIER
        if (!handler.name || typeof handler.name !== "string") throw new TypeError(`[ERROR] L'handler ${file.slice(0, file.lenght - 3)} n'a pas de nom ou le nom n'est pas une chaîne de caractères.`);


        //Si l'handler est correctement configurée, on l'ajoute au tableau



        handlersActivated++;
        console.log(`${lang.prefix} handler ${command.name} activé !`);
    });

    console.log(`${lang.prefix} ${handlersActivated} handlers activés !`);
};