const Discord = require('discord.js');
exports.run = async(client, message, args, db, ayarlar) => {
      if (!args[0])
      return message.channel.send(
        `Yavaş modu ayarlamam için bir sayı yazmalısın!`
      );
  if (args[0] > 1000) return message.channel.send("Slowmode en fazla 1000 olabilir.")
    if (isNaN(args[0])) return message.channel.send(`Bir Sayı Girmelisin!`);
    let reason = message.content.slice(
      ayarlar.prefix.length + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == `${message.author.tag}`;
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Artık bu kanala **${args[0]}** saniyede bir mesaj yazılabilecek.`
    );
};
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: "kanal",
  kategori: "mod"
};

exports.help = {
 name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/1000]',
};