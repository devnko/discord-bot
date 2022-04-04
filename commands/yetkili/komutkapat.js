const Discord = require("discord.js");
const { Database } = require('npm.db')
const npmdb = new Database("database")

exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
    if(message.author.id !== message.guild.ownerID) return message.channel.send("Bu komutu kullanabilmek için sunucu sahibi olman gerekli!");
    let komut = args[1];
    if(!komut) return global.hata(message, "Kullanıma kapatmam için bir komut girmelisin!")
    let komut2 = global.Commands.get(komut);
    if(!komut2) return global.hata(message, "Böyle bir komut bulunamadı!")
    if(komut2.help.name == "komutyasakla") return global.hata(message, "Bu Komutu Kullanıma **Kapatamazsın!**");
    if(komut2.help.name == "komutetkinleştir ") return global.hata(message, "Bu Komutu Kullanıma **Kapatamazsın!**");
    npmdb.set(`${message.guild.id}.kapalı_${komut2.help.name}`, true)
    return global.oky(message, `${komut2.help.name} isimli komut kullanıma kapatıldı! Açmak için: **${prefix}komut-aç ${komut2.help.name}** Yazmanız Yeterlidir.`) //bilmem istersen yap
  } catch (err) { //ekonomi sisteminide npmdb mi yapsam //ok
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["komut-kapat"],
  permLevel: 0
};

exports.help = {
  name: "komutyasakla",
  description: "",
  usage: ""
};
