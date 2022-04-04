const Discord = require("discord.js")
const moment = require('moment');
moment.locale('tr');

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
    if(!args[0]) {
        const market = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Lütfen bir değer belirt!
        Değerler: \`${prefix}kredikartı <oluştur/sil>\`
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(market) 
    }

    if(args[0] === "oluştur") {
        let id = makeid(16)
        if(await db.fetch(`kredikartılimit_${message.author.id}`) >= 5) return message.channel.send("Kredi kartı limitinize ulaştınız!")

        await db.push(`kredikartı_${message.author.id}`, { numara: id, sahip: message.author.id, zaman: moment(Date.now()).format('DD/MM/YYYY HH:mm'), para: 0 })
        await db.add(`kredikartılimit_${message.author.id}`, 1)
        const market = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Başarılı bir şekilde kredi kartınız oluşturuldu!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(market) 
    
    }

    if(args[0] === "sil") {
        let id = args[1]
        let linkler = await db.fetch(`kredikartı_${message.author.id}`)
        if(!id) return message.channel.send("Lütfen silinecek kredi kartının barkodunu belirtin!")

        if(!linkler.filter(a => a.sahip === message.author.id).find(c => c.numara === id)) {
            const yardım = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.renk)
            .setDescription(`
            Hata!
            Sistemimde belirttiğin numara sana ait değil ve ya bulunamadı.
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(yardım)
        }

        if(!await db.has(`kredikartı_${message.author.id}`) === true) {
            const yardım = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.renk)
            .setDescription(`
            Hata!
            Sana ait bir kredi kartı yok! bu yüzden bu komutu kullanamazsın!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(yardım)
        }

        if(linkler.length === 1) {
            await db.delete(`kredikartı_${message.author.id}`)
            await db.delete(`kredikartılimit_${message.author.id}`)
            const yardım = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.renk)
            .setDescription(`
            Başarılı bir şekilde belirttiğiniz barkodu sistemimden kaldırdım!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(yardım)
        } else {
            await db.set(`kredikartı_${message.author.id}`, linkler.filter(s => s.numara !== id))
            await db.subtract(`kredikartılimit_${message.author.id}`, 1)
            const yardım = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.renk)
            .setDescription(`
            Başarılı bir şekilde belirttiğiniz barkodu sistemimden kaldırdım!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(yardım)
        }
    } 

    function makeid(length) {
        var result = "";
        var characters =
          "0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }
      }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
}

exports.help = {
    name: "kredikartı",
    description: "kredi kartı oluşturur/silersiniz.",
    usage: "kredikartı <oluştur/sil numara>"
}