const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
    const sayi = args[0]
    const kanal  = message.mentions.channels.first() || client.channels.cache.get(args[1]) || message.channel;
    
    if(dil == 'TR'){
    if(args[0] == "kapat") {
      await db.delete(`${message.guild.id}.${kanal.id}.botsilici`)
      return global.oky(message, `Bot mesaj silici sistemi, **Kapatıldı.**`)
    }

    
    if(!sayi) return global.hata(message, "Lütfen bir sayı girin.")
    if(isNaN(sayi)) return global.hata(message, "Lütfen bir ***sayı*** girin.")
    if(!kanal) return global.hata(message, "Lütfen bir kanal girin.")
      await db.set(`${message.guild.id}.${kanal.id}.botsilici`, sayi * 1000)
    return global.oky(message, `Botların Mesajları Artık <#${kanal.id}> Kanalında **${sayi}** Saniye Sonra **Silinecektir.** \n Kapatmak için ${prefix}botmesajsilici kapat.`)
    } else if(dil == 'EN'){  
        if(args[0] == "close") {
      await db.delete(`${message.guild.id}.${kanal.id}.botsilici`)
      return global.oky(message, `Bot message eraser system, has been **Closed**.`)
    }  
    if(!sayi) return global.hata(message, "Please enter a number.")
    if(isNaN(sayi)) return global.hata(message, "Please enter a **number**.")
    if(!kanal) return global.hata(message, "Please enter a channel.")
    await db.set(`${message.guild.id}.${kanal.id}.botsilici`, sayi * 1000)
    return global.oky(message, `Bot's Messages Will Now Be **Deleted** After **${sayi}** Seconds on Channel <#${kanal.id}>. \n Close ${prefix}botmessage close to turn it off.`)
    }
    
    
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botmesajsilici", "botmessage"],
  permLevel: 1
};

exports.help = {
  name: "botmesajsilici",
  description: "",
  usage: "botmesajsilici"
};
