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
        let timeout = 86400000;
     
            if(await db.fetch(`çalışSüre_${message.author.id}`) > Date.now()) {
                let timeout = (await db.fetch(`çalışSüre_${message.author.id}`) - Date.now());
                const embed = new Discord.MessageEmbed()
               .setColor("BLUE")
               .setAuthor("Lütfen Bekle!", message.author.avatarURL({dynamic: true}))
               .setDescription(`
               Üzgünüm ancak zaten çalışmışsın! \`${moment.duration(timeout).format("H [saat], m [dakika], s [saniye]")}\` Boyunca beklemelisin
               `)
                .setFooter(client.ayarlar.embedFooter, client.user.avatarURL())
               .setTimestamp()
              return message.channel.send(embed).then((msg) => { msg.delete({timeout: 5000})})
        } else {
            let nbr = ["Yazılımcı", "Mühendis", "Şef", "Emlakçı", "Madenci", "Öğretmen", "Garson"]
            let meslek = Math.floor(Math.random() * nbr.length)
            let sa = Math.floor(Math.random() * 10000)
            await db.add(`goldkredi_${message.author.id}`, sa)
            await db.set(`maaş_${message.author.id}`, Date.now() + ms(timeout + "h"))
            await db.set(`çalışSüre_${message.author.id}`, (Date.now() + 86400000))
                setTimeout(async () => {
                  await db.delete(`çalışSüre_${message.author.id}`)
                }, 86400000)
                
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            **${nbr[meslek]}** Olarak çalıştınız ve **${sa}** Miktarında kredinizi aldınız. Hayırlı Olsun!
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
    name: "çalış",
    description: "çalışırsınız.",
    usage: "çalış"
}