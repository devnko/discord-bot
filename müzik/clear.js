const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) return global.hata(message, "Müzik çalabilmem için bir ses kanalında olmalısın!")
  
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return global.hata(message, "Benimle aynı ses kanalında değilsin!")
  
  
  if(!client.player.isPlaying(message)) return global.hata(message, "Şu anda çalan bir müzik yok!")

  client.player.clearQueue(message);

  return global.oky(message, "Çalma listesi temizlendi!")
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kuyruk-sil", "clear-queue"],
  permLevel: 0
};

exports.help = {
  name: "queue-clear",
  description: "Sıradaki şarkıya geçer. Sırada şarkı yoksa şarkıyı kapatır.",
  usage: "geç"
};
