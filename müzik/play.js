const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if (!message.member.voice.channel) return global.hata(message, "Müzik çalabilmem için bir ses kanalında olmalısın!", true)
  
if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return global.hata(message, "Benimle aynı ses kanalında değilsin!")

let query = args.join(" ");
if (!query) return message.channel.send("Çalmam için bir şarkı ismi girmelisin!")

client.player.play(message, query, true);

};

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ["çal", "play"],
  permLevel: 0
};

exports.help = {
  name: "oynat",
  description:
    "Belirttiğiniz şarkıyı bulunduğunuz sesli kanalda çalar/oynatır.",
  usage: "oynat [şarkı adı]"
};
