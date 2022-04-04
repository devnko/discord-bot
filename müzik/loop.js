const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) return global.hata(message, "Müzik çalabilmem için bir ses kanalında olmalısın!")
  
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return global.hata(message, "Benimle aynı ses kanalında değilsin!")
  
if(!client.player.isPlaying(message)) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Bir ses kanalında olmalısın!` }})
let ayarlanacak = args [0]
if(ayarlanacak == "aç") {
    client.player.setLoopMode(message, true);
global.oky(message, "Loop Açıldı, Artık Şarkılar Tekrar Edecek!")
} else if(ayarlanacak == "kapat") {
    client.player.setLoopMode(message, false);
	global.oky(message, "Loop Kapandı, Artık Şarkılar Tekrar Etmeyecek!")
} else return global.hata(message, "Lütfen `aç` veya `kapat` yazınız.") 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["loop"],
  permLevel: 0
};

exports.help = {
  name: "loop",
  description:
    "Çalan şarkı bitince aynı şarkıyı otomatik olarak tekrar oynatır.",
  usage: "tekrar"
};
