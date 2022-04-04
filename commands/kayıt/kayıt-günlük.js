const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
if(await db.fetch(`${message.guild.id}.kayıtgünlük`)) return global.hata(message,`**Bu sistem zaten ayarlı, sistemleri sıfırlamak için: ${prefix}kayıt-sistemi-sıfırla.**`,true)
    let kanal = message.mentions.channels.first() || client.channels.cache.get(args[1]);
    if(!kanal) return global.hata(message, `Hangi kanalı kayıt günlük kanalı olarak kullanıcağını belirtin.`, true)
await db.set(`${message.guild.id}.kayıtgünlük`, kanal.id)
return global.oky(message, `**Kayıt günlük kanalı <#${kanal.id}> olarak ayarlandı.**`,true).then(
    kanal.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`**${global.tikozel}  Kayıt Günlük kanalı başarıyla bu kanala ayarlandı. Bu kanala sunucuda kaydolan kişiler hakkında bilgiler içeren mesaj atılacaktır.**`)))
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt-günlük"],
  permLevel: 4
};

exports.help = {
  name: "kayıt-günlük",
  description: "",
  usage: "kayıt-günlük"
};
