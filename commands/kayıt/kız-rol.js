const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
    if(await db.fetch(`${message.guild.id}.kayıtkızrol`)) return global.hata(message,`**Bu sistem zaten ayarlı, sistemleri sıfırlamak için: ${prefix}kayıt-sistemi-sıfırla.**`,true)
    let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
    if(!rol) return global.hata(message, `**Kız/Kadın olarak belirttiğiniz kişiye hangi rolü verilmesi istediğinizi etiketlemelisiniz.**`, true)
    if (message.guild.me.roles.highest.position <= rol.position) {
        var embed = new MessageEmbed()
        .setTitle(`${client.user.username} Level Sistemi`)
        .setColor("RED")
        .setDescription(`${global.deniedozel} <@&${rol.id}> rolünü yönetme yetkim yok. Lütfen rolümü bu rolün üstüne taşıyın!`)
        return message.channel.send(embed);
    }
    await db.set(`${message.guild.id}.kayıtkızrol`, rol.id)
return global.oky(message, `Kız olarak belirttiğiniz kişiye <@&${rol.id}> rolü verilecektir.`, true)  
} catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kız-rol"],
  permLevel: 4
};

exports.help = {
  name: "Kız-rol",
  description: "",
  usage: "Kız-rol"
};
