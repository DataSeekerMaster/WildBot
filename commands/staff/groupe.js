const Client = require('discord.js');
const lang = require('../../language');

module.exports = {

    //Nom de la commande
    name: "groupe",

    //Action lors de l'exécution de la commande
    async run(message) {


        //On envoie un message de réponse
        await message.reply("Oops je suis encore en cours de construction.. Merci de patienter encore un peu !");

        //On log dans la console qui a exécuté la commande
        console.log(lang.prefix + "groupe command executed by " + message.author.username);
    }
};