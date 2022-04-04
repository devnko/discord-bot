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
    if(await db.fetch(`goldkredi_${message.author.id}`) < 15000) {
        const market = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Üzgünüm ancak **Gold Üyelik** Krediniz yeterli değil!
        Gereken Kredi: **15000**
        Sizde bulunan kredi: **${await db.fetch(`goldkredi_${message.author.id}`) || 0}**
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(market)    
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }  
            let min = '7'
            let max = '14'
            let sure = getRandomInt('7', '14')
            let süre = ms(sure +"d")
            let gold = db.fetch(`goldsüre_${message.author.id}`) 
            let kanal = new Discord.WebhookClient("825086990138998845", "CsOTGBTt_HnE7j3ECcyyHHk4LkRMoZzxIva2QNsjO7qCprQ5yekwQPomnCR4pcrlRMlH")

            if(await db.fetch(`goldsüre_${message.author.id}`) > 2592000000) {
                await db.subtract(`goldsüre_${message.author.id}`, 86400000)
                return message.channel.send(`Gold Üyelik Süreniz **30 Gün**'e Ulaştı ve ya **30 Gün**'ün Üstüne ulaştı daha fazla satın alamazsınız.`)
            }
			
			if(gold) {
                await db.add(`goldsüre_${message.author.id}`, Date.now() + süre)
                await db.subtract(`goldkredi_${message.author.id}`, 15000)
                await db.set(`üyelikk_${message.author.id}`, "aktif") 

                const kazandı = new Discord.MessageEmbed()
                .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
                .setColor(client.ayarlar.embedRenk)
                .setDescription(`
                ${message.author} (${message.author.id}) Adlı kullanıcı **${sure} Gün** Boyunca **Gold Üyelik** Kazandı!
                `)
                .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                kanal.send(kazandı)

                const market = new Discord.MessageEmbed()
                .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
                .setColor(client.ayarlar.embedRenk)
                .setDescription(`
                Başarılı bir şekilde **${sure} Gün** Boyunca **Gold Üyelik** Kazandınız!
                `)
                .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                return message.channel.send(market)
            } else {
                await db.set(`goldsüre_${message.author.id}`, Date.now() + süre)
                await db.subtract(`goldkredi_${message.author.id}`, 15000)
                await db.set(`üyelikk_${message.author.id}`, "aktif") 

                const kazandı = new Discord.MessageEmbed()
                .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
                .setColor(client.ayarlar.embedRenk)
                .setDescription(`
                ${message.author} (${message.author.id}) Adlı kullanıcı **${sure} Gün** Boyunca **Gold Üyelik** Kazandı!
                `)
                .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                kanal.send(kazandı)

                
                const market = new Discord.MessageEmbed()
                .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
                .setColor(client.ayarlar.embedRenk)
                .setDescription(`
                Başarılı bir şekilde **${sure} Gün** Boyunca **Gold Üyelik** Kazandınız!
                `)
                .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                return message.channel.send(market)
             }
}
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["gold"]
}

exports.help = {
    name: "altın",
    description: "altın kasasını açarsınız.",
    usage: "altın"
}