const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) return global.hata(message, "Müzik çalabilmem için bir ses kanalında olmalısın!")
  
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return global.hata(message, "Benimle aynı ses kanalında değilsin!")
  
  if(!client.player.isPlaying(message)) return global.hata(message, "Şu anda çalan şarkı bulunamadı")
   let volume = parseInt(args.join(" "));
  if (!volume) return global.hata(message, "Lütfen bir sayı girin!")
  if (isNaN(args[0])) return global.hata(message, "Lütfen bir ``sayı`` girin!")
    if(volume > 200) return global.hata(message, "Ses seviyesi 200'ün üstüne çıkarılamaz!")
  
  client.player.setVolume(message, volume);
    
 return global.oky(message, `Ses seviyesi \`${volume}\` olarak ayarlandı!`)
};

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ["volume"],
  permLevel: 0
};

exports.help = {
  name: "ses",
  description: "Muziğin sesini ayarlar.",
  usage: "ses sayı"
};
