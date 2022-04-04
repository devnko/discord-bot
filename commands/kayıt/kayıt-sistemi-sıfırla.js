const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
    await db.delete(`${message.guild.id}.kayıtyetkilirol`)
    await db.delete(`${message.guild.id}.kayıtkızrol`);
    await db.delete(`${message.guild.id}.kayıtkanal`);
    await db.delete(`${message.guild.id}.kayıtgünlük`);
    await db.delete(`${message.guild.id}.kayıterkekrol`);
    await db.delete(`${message.guild.id}.kayıtalıncakrol`);
    await db.delete(`${message.guild.id}.${message.author.id}.kayıterkeketti`);
    await db.delete(`${message.guild.id}.${message.author.id}.toplamkayit`);
    await db.delete(`${message.guild.id}.toplamerkekkayit`);
    await db.delete(`${message.guild.id}.toplamkayıt`);
    await db.delete(`${message.guild.id}.toplamkızkayit`);
    await db.delete(`kayıtembedrenk_${message.guild.id}`);
    await db.delete(`kayıtembedthumbnail_${message.guild.id}`);
    await db.delete(`kayıtembedimage_${message.guild.id}`);
    await db.delete(`kayıtembedauthor_${message.guild.id}`);
    await db.delete(`kayıtembedfooter_${message.guild.id}`);
    return global.oky(message,`Kayıt sistemi verileri, **Sıfırlandı**!`,true)
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt-sistemi-sıfırla"],
  permLevel: 4
};

exports.help = {
  name: "kayıt-sistemi-sıfırla",
  description: "",
  usage: "kayıt-sistemi-sıfırla"
};
