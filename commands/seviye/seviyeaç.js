exports.run = async (client,message,args,db) => {
  var server = message.guild
  var {MessageEmbed} = require("discord.js")
  if(!args[0]){
      var embed = new MessageEmbed()
      .setTitle(`${client.user.username} Level Sistemi`)
      .setDescription(`${global.deniedozel} **Aç** veya **Kapat** yazınız!`)
      .setColor("RED")
   return   message.channel.send(embed)
  }
  if(args[0].toLowerCase() === "aç"){
      var embed = new MessageEmbed()
      .setTitle(`${client.user.username} Level Sistemi`)
      .setDescription(`${global.tikozel} Level Sistemi Açıldı!`)
      .setColor("GREEN")
      await db.set(`${server.id}.level`,true)
      message.channel.send(embed)
  }
  if(args[0].toLowerCase() === "kapat"){
      if(await db.fetch(`${server.id}.level`)){
      var embed = new MessageEmbed()
      .setTitle(`${client.user.username} Level Sistemi`)
      .setDescription(`${global.tikozel} Level Sistemi Kapandı!`)
      .setColor("RED")
      await db.delete(`${server.id}.level`)
      message.channel.send(embed)
      } else {
          var embed = new MessageEmbed()
          .setTitle(`${client.user.username} Level Sistemi`)
          .setDescription(`${global.deniedozel} Level Sistemi Zaten Kapalı!`)
          .setColor("RED") 
          message.channel.send(embed)
      }
  }
}
exports.conf = {
  enabled:false,
  guildOnly:true,
  permLevel:4,
  aliases:["ls","levelsistemi","level-sistemi"]
}
exports.help = {
  name:"level-sistemi",
  description:"",
  usage:""
}


































/*const Discord = require("discord.js");

exports.run = async (client, message, args, mongo, ayarlar) => {
  try {

const {Database} = require('npm.db')
const db = new Database("database");

    if (!args[0]) return global.hata(message, "Aç yada kapat yazmalısın!!");

    if (args[0] === "aç") {
      let acik = await db.fetch(`${message.guild.id}.seviye`)

        if (acik) return global.hata(message, "Açık olan bir şeyi tekrar açamam.");
        await db.set(`${message.guild.id}.seviye`, true);
        global.oky(message, "Seviye sistemi açıldı!");
      
    }

    else if (args[0] === "kapat") {
      let acik = await db.fetch(`${message.guild.id}.seviye`)
        if (!acik) return global.hata(message, "Açık olmayan bir şeyi kapatamam.");
        await db.delete(`${message.guild.id}.seviye`);
        global.hata(message,  "Seviye sistemi kapatıldı!");
      
    } else return global.hata(message, "Aç yada kapat yazmalısın!!");
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["seviyeayarla"],
  permLevel: "MANAGE_MESSAGES",
  kategori: "Ayarlar"
};

exports.help = {
  name: "seviye-ayarla",
  description: "Sa As ayarlarsın.",
  usage: "sa-as"
};
*/
