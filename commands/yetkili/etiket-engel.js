const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
    let limit = args[0]
if(limit == "sıfırla") {
if(!await db.has(`${message.guild.id}.etiketengel`) === true) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.deniedozel} **Etiket Engelleme Sistemi aktif olmadığından kapatılamaz.**`))
await db.delete(`${message.guild.id}.etiketengel`)
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.tikozel} Etiket engelleme sistemi, **Kapatıldı!**`))
}
if(!limit) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
:1234:** Üyenin kaç kişiyi etiketlediğinde sunucudan yasaklanıcağını belirtin.** (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
**${prefix}etiket-engelle 3 aç**`))
if(isNaN(limit)) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
:1234:** Üyenin kaç kişiyi etiketlediğinde sunucudan yasaklanıcağını belirtin.** (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
**${prefix}etiket-engelle 3 aç**`))

if(limit > 10) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
:1234:** Üyenin kaç kişiyi etiketlediğinde sunucudan yasaklanıcağını belirtin.** (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
**${prefix}etiket-engelle 3 aç**`))

await db.set(`${message.guild.id}.etiketengel`, limit)
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
${global.tikozel} Etiket engelleme sistemi, **Aktive Edildi!**
**•** Artık mesajda **${limit}**'ten fazla farklı kişi etiketleyenler uyarıldıktan sonra sunucudan yasaklanıcaktır.`))
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["etiket-engel","etiketengelle","etiketengel"],
  permLevel: 4
};

exports.help = {
  name: "etiket-engel",
  description: "",
  usage: "!!etiket-engel"
};
