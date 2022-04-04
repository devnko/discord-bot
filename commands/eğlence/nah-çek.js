const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
      let üye = message.mentions.users.first()
      if(!üye) return global.hata(message, "**Kime nah çekmek istediğini etiketlemelisiniz.**")
      var gifler = ["https://cdn.discordapp.com/attachments/595739786350690367/647384248646631439/nahcek.gif", "https://cdn.discordapp.com/attachments/613871702656548867/761545540458119188/eksi-sozluk-yazarym-buradakiler-beni-elestiremez_836814.gif","https://media4.giphy.com/media/pQ2kCHBuwrWw1qW20G/giphy.gif?cid=4d1e4f2953f6dd7005cc01bf09124e06fe434e9a4bf4fa96&rid=giphy.gif"]
      var random = gifler[Math.floor(Math.random() * gifler.length)];
      const nah = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription(`**:people_hugging: ${üye} adlı kişiye nah çektin.**`)
      .setImage(random)
      message.channel.send(nah)
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nah-çek"],
  permLevel: 0
};

exports.help = {
  name: "nah-çek",
  description: "",
  usage: "nah-çek"
};
