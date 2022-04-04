const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
  let p = prefix; 
    let argüman = args[0]
    if(argüman == "aç"){
      let limit = args[1];
      if(!limit) return message.reply("Kaç reklamda kickleneceğini yazmalısın!")
      if(isNaN(limit)) return message.reply("Kaç reklamda kickleneceğini yazmalısın!")
      if(await db.fetch(`${message.guild.id}.reklamkick`)) return message.channel.send('Bu sistem zaten açık.')
      await db.set(`${message.guild.id}.reklamkick`, limit);
      return message.channel.send(`Artık kullanıcılar ${limit} reklam yaptıklarında kicklenicek`)
    } else if(argüman == "kapat") {
      if(!await db.fetch(`${message.guild.id}.reklamkick`)) return message.channel.send('Bu sistem zaten kapalı.')
      await db.delete(`${message.guild.id}.reklamkick`);
      return message.channel.send(`Reklam kick sistemi kapatıldı.`)   
    } else {
      return message.reply(`Geçersiz argüman girdiniz! Argümanlar: ${p}reklamkick aç/kapat"`)
    }

  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["reklam-kick","reklamkick","rk"],
    permLevel: 4  
};

exports.help = {
    name: "reklamkick",
    description: "", 
    usage: "reklamkick"
};