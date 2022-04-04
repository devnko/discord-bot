const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (!message.member.voice.channel) return global.hata(message, "Müzik çalabilmem için bir ses kanalında olmalısın!")
  
    let queue = client.player.getQueue(message, message.guild.id);

    if(!queue) return global.hata(message, "Şu anda çalan bir çalma listesi bulunamadı!")

    let q = queue.tracks.map((tracks, i) => {
        return `${i === 0 ? 'Şuan Çalan' : `${i+1}`}- ${tracks.title} : ${tracks.author}`
    }).join('\n');  
       message.channel.send({embed: {color: 'RANDOM', description: `${client.emotes.queue} | ${q}` }})
};

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ["queue"],
  permLevel: 0
};

exports.help = {
  name: "kuyruk"
};
