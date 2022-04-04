const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
if(!message.member.hasPermission("CHANGE_NICKNAME") && !message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.deniedozel} Bu komutu kullanabilmek için **KULLANICI ADINI YÖNET** ya da **KULLANICILARIN ADLARINI YÖNET** iznine sahip olmalısın!`));
let isim = args.slice(0).join(" ")
if(!isim) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
İsim Değiştir Sistemi
Düzenle: **${prefix}isim <yeniad>**
Sıfırla: **${prefix}isim sıfırla**
`))
if(isim === 'sıfırla'){
message.member.setNickname(" ")
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
${global.tikozel} İsminiz başarıyla, **${message.author.username}** olarak sıfırlandı.
`))
}
message.member.setNickname(isim).catch(err=>{global.hata(message, `**İsminizi değiştirmedim, Rollerimi ve İzinlerimi Kontrol Edin!**`)})
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.tikozel} İsminiz başarıyla, **${isim}** olarak değiştirildi.`))
} catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["isim"],
  permLevel: 0
};

exports.help = {
  name: "isim",
  description: "",
  usage: "isim"
};
