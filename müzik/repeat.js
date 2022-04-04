const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) return global.hata(message, "Müzik çalabilmem için bir ses kanalında olmalısın!")
  
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return global.hata(message, "Benimle aynı ses kanalında değilsin!")
  
  if(!client.player.isPlaying(message)) return global.hata(message, "Şu anda çalan şarkı bulunamadı")
  let ayarlanacak = args [0]
if(ayarlanacak == "aç") {
    client.player.setRepeatMode(message, true);
    let song = await client.player.nowPlaying(message);
	global.oky(message,`Repeating ${song.title}!`);
} else if(ayarlanacak == "kapat") {
    client.player.setRepeatMode(message, false);
    let song = await client.player.nowPlaying(message);
    global.oky(message,`Repeat disabled on ${song.title}!`);
} else return global.hata(message, "Lütfen `aç` veya `kapat` yazınız.") 
};

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ["repeat"],
  permLevel: 0
};

exports.help = {
  name: "tekrar",
  description:
    "Çalan şarkı bitince aynı şarkıyı otomatik olarak tekrar oynatır.",
  usage: "tekrar"
};
