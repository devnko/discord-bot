const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) return global.hata(message, "Müzik çalabilmem için bir ses kanalında olmalısın!")
  
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return global.hata(message, "Benimle aynı ses kanalında değilsin!")
  
  if(!client.player.isPlaying(message)) return global.hata(message, "Şu anda çalan şarkı bulunamadı")
  
  let song = await client.player.pause(message);
            
  return global.oky(message, "Duraklatıldı!")
};

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ["pause"],
  permLevel: 0
};

exports.help = {
  name: "duraklat",
  description: "Çalan şarkıyı duraklatır.",
  usage: "duraklat"
};
