//Import de fs pour lire les fichiers/dossiers
const fs = require('fs');

module.exports = async() => {

    //On récupère tous les fichiers du dossier commands et on les filtres pour ne garder que les fichiers .js
    fs.readdirSync("./commands").filter(file => file.endsWith(".js")).then(async file => {

        //On récupère le fichier
        let command = require(`../commands/${file}.js`);



    });
};