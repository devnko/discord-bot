const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
    if(await db.fetch(`${message.guild.id}.kayıtalıncakrol`)) return global.hata(message,`**Bu sistem zaten ayarlı, sistemleri sıfırlamak için: ${prefix}kayıt-sistemi-sıfırla.**`,true)
const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
if(!rol) return global.hata(message,`**Üyeler kayıt olduğunda hangi rolün alınacağını etiketlemelisiniz.**`,true)
if (message.guild.me.roles.highest.position <= rol.position) {
    var embed = new MessageEmbed()
    .setTitle(`${client.user.username} Level Sistemi`)
    .setColor("RED")
    .setDescription(`${global.deniedozel} <@&${rol.id}> rolünü yönetme yetkim yok. Lütfen rolümü bu rolün üstüne taşıyın!`)
    return message.channel.send(embed);
}
await db.set(`${message.guild.id}.kayıtalıncakrol`, rol.id)
return global.oky(message,`**Kayıt olunca alınacak rol <@&${rol.id}> olarak ayarlandı.**`,true)
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["alınacak-rol"],
  permLevel: 4
};

exports.help = {
  name: "alınacak-rol",
  description: "",
  usage: "alınacak-rol"
};
