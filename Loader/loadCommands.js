const fs = require("fs"); // File System

module.exports = async (bot) => {
  fs.readdirSync("./Commands") // On lui donne le le dossier où il va venir lire les fichiers
    .filter((f) => f.endsWith(".js")) // On vérifie bien qu'on lui donne que les fichiers JS
    .forEach(async (file) => {
      const command = require(`../Commands/${file}`); // On importe le fichier de la commande

      if (!command.name || typeof command.name !== "string") {
        throw new TypeError(
          `La commande ${file.slice(0, file.length - 3)} n'a pas de nom !`
        );
      } // On vérifie bien que la commande a un nom, sinon on envoie une erreur (en enlevant le ".js" du file);

      bot.commands.set(command.name, command); // On rajoute la commande au bot

      console.log(`Commande ${file} chargée avec succès !`);
    });
};
