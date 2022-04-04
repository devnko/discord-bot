const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if(!client.player.isPlaying(message)) return global.hata(message, "Şu anda çalan şarkı yok!")

    let song = await client.player.nowPlaying(message);

    message.channel.send({embed: {color: 'RANDOM', description: `${global.premium} | Şuanda çalan:\n${song.title} by ${song.requestedBy}` }})
};

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ["np"],
  permLevel: 0
};

exports.help = {
  name: "şimdi-çalıyor"
};
