const Discord = require("discord.js"); // npm i discord.js
const intents = new Discord.IntentsBitField(3276799); // Les intents permettent de choisir quels events le Bot peut reçevoir
const loadCommands = require("./Loader/loadCommands"); // On charge notre fichier qui permet de load en fonction de la commande reçue par le bot.
const config = require("./config"); // Notre token d'accès au bot

const bot = new Discord.Client({ intents }); // On initialise notre bot, en lui passant les intents.

bot.commands = new Discord.Collection(); // Collection extends la class map de JS avec quelques ajouts.

bot.login(config.token); // On donne le token au bot pour qu'il puisse se connecter

loadCommands(bot); // On charge toutes les commandes disponibles

bot.on("messageCreate", async (message) => {
  if (message.content === "!meet")
    return bot.commands.get("meet").run(bot, message);
}); // Dès qu'un message est envoyé, le bot va le lire. Si le message contient la commande, on execute la fonction associée.

bot.on("ready", async () => {
  console.log(`${bot.user.tag} est bien en ligne !`);
});
