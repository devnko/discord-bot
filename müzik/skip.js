const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) return global.hata(message, "Müzik çalabilmem için bir ses kanalında olmalısın!")
  
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return global.hata(message, "Benimle aynı ses kanalında değilsin!")
  
  if(!client.player.isPlaying(message)) return global.hata(message, "Şu anda çalan şarkı bulunamadı")
   
  let song = await client.player.skip(message);

  return global.oky(message, "Geçildi!")
};

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ["skip"],
  permLevel: 0
};

exports.help = {
  name: "geç",
  description: "Sıradaki şarkıya geçer. Sırada şarkı yoksa şarkıyı kapatır.",
  usage: "geç"
};
