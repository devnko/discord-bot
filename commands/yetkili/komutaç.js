const Discord = require("discord.js");
const { Database } = require('npm.db')
const npmdb = new Database("database")

exports.run = async (client, message, args, db, ayarlar) => {
  try {
    if(message.author.id !== message.guild.ownerID) return message.channel.send("Bu komutu kullanabilmek için sunucu sahibi olman gerekli!");
    let komut = args[1];
    if(!komut) return global.hata(message, "Kullanıma açmam için bir komut girmelisin!")
    let komut2 = global.Commands.get(komut);
    if(!komut2) return global.hata(message, "Böyle bir komut bulunamadı!")
    let kapalımı = npmdb.fetch(`${message.guild.id}.kapalı_${komut2.help.name}`)
    if(!kapalımı) return global.hata(message, "Bu komut zaten kullanıma kapalı değil!")
    npmdb.delete(`${message.guild.id}.kapalı_${komut2.help.name}`)
    return global.oky(message, `${komut2.help.name} isimli komut kullanıma açıldı!`) 
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["komut-aç"],
  permLevel: 0
};

exports.help = {
  name: "komutetkinleştir",
  description: "",
  usage: ""
};
