const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolyvk"],
  permLevel: 0
};

exports.help = {
  name: "rolyvk",
  description: "",
  usage: "rolyvk"
};
