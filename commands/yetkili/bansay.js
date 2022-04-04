const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let guild = message.guild;

  guild
    .fetchBans()
    .then(modsal =>
      message.channel.send(new Discord.MessageEmbed()
      .setColor("e3e3e3")
      .setAuthor('Hesaplandı!', client.user.avatarURL())
      .setDescription("<a:package_online:855874951277445121> Sunucunuzdaki yasaklanmış üye sayısı ``"+ modsal.size + "`` kadardır.")
      .setFooter("bit.ly/packagebot・Komut " + message.author.tag + " tarafından kullanıldı.", message.author.avatarURL({dynamic :true}))
      .setTimestamp())
    )
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  runIn: ["bansay"],
  aliases: ['bansay'],
  permLevel: 0
};

exports.help = {
  name: "bansay",
  description: "bansay command by github.com/luvavdex",
  usage: "bansay"
};