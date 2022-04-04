const Discord = require("discord.js")
const ms = require("ms")
const moment = require("moment")
require("moment-duration-format")

exports.run = async(client, message, args, mongo, ayarlar, prefix, dil) => {
    const db = require('quick.db');
  if(!await db.fetch(`s.${message.author.id}`)) {
      message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setFooter(client.ayarlar.footer,message.author.avatarURL({dynamic:true})).setDescription(`
      **⚠️ Kullanım Şartı ⚠️ **
      
        Botun ekonomi sisteminde bug ve illegal kasmanız bottan **__sınırsız engelleneceğiniz__** ve paranızın sıfırlanacağı anlamına gelmektedir.
        Oluşabilecek herhangi bir problem sizin sorumluluğunuz altındadır. 
        Onaylamak ve devam etmek için \`onayla\` yazmalısınız, iptal etmek için herhangi bir şey yazabilirsiniz.`))
      
        const filter = response => {
          return response.author.id === message.author.id;
        };
      
        message.channel.awaitMessages(filter, { max: 1, time: 0, errors: ['time'] }).then(async collected => {  
          if(collected.first().content === 'onayla') {
            await db.set(`s.${message.author.id}`, true);
            return global.oky(message,`Ekonomi şartlarını onayladınız!`,true)
          } else return;
        });
      
      } else {
    if(await db.fetch(`goldkredi_${message.author.id}`) < 30000) {
        const market = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Hata!
        Üzgünüm ancak **Gold Üyelik** Krediniz yeterli değil!
        Gereken Kredi: **30000**
        Sizde bulunan kredi: **${await db.fetch(`goldkredi_${message.author.id}`) || 0}**
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(market)    
    } 

    if(!args[0]) {
        const market = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Hata!
        Lütfen bir değer belirtin!
        Değerler: \`${prefix}pasifmod <aç/kapat>\`
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(market)    
    }

    if(args[0] === "aç") {
        if(await db.fetch(`pasifmod_${message.author.id}`) === "aktif") {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            Hata!
            Pasif Mod zaten aktif!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(market)    
        }


        await db.set(`pasifmod_${message.author.id}`, "aktif")
        await db.subtract(`goldkredi_${message.author.id}`, 30000)
        const market = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Başarılı bir şekilde Pasif Mod **Aktifleştirildi!**
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(market)    
    }

    if(args[0] === "kapat") {
        if(!await db.fetch(`pasifmod_${message.author.id}`) === "aktif") {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            Hata!
            Pasif Mod zaten kapalı!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(market)
        }

        await db.delete(`pasifmod_${message.author.id}`)
        const market = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Başarılı bir şekilde Pasif Mod **Kapatıldı!**
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(market)
    }
}
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
}

exports.help = {
    name: "pasifmod",
    description: "pasif modu açıp kapatırsınız.",
    usage: "pasifmod <aç/kapat>"
}