const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
    if(await db.fetch(`${message.guild.id}.kayıtkanal`)) return global.hata(message,`**Bu sistem zaten ayarlı, sistemleri sıfırlamak için: ${prefix}kayıt-sistemi-sıfırla.**`,true)
let kanal = message.mentions.channels.first() || client.channels.cache.get(args[1]);
if(!kanal) return global.hata(message, `Hangi kanalı kayıt kanalı olarak kullanıcağını belirtin.`, true)
await db.set(`${message.guild.id}.kayıtkanal`, kanal.id)
return global.oky(message, `**Kayıt kanalı <#${kanal.id}> olarak ayarlandı.**`,true).then(
kanal.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`**${global.tikozel} Kayıt kanalı başarıyla bu kanala ayarlandı. Bu kanala sunucuya yeni katılanların nasıl kaydolacağını bildiren bir mesaj gönderilecektir ve bu kanal üyeleri kaydetmek için kullanılacaktır.**`))
)
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt-kanal"],
  permLevel: 4
};

exports.help = {
  name: "kayıt-kanal",
  description: "",
  usage: "kayıt-kanal"
};
