const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
      let üye = message.mentions.users.first()
      if(!üye) return global.hata(message, "**Kime sarılmak istediğini etiketlemelisiniz.**")
      const sarıldı = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription(`**:people_hugging: ${üye} adlı kişiye sarıldın.**`)
      .setImage('https://media.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif')
      message.channel.send(sarıldı)
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sarıl"],
  permLevel: 0
};

exports.help = {
  name: "sarıl",
  description: "",
  usage: "sarıl"
};
