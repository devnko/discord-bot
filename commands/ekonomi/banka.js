const Discord = require("discord.js")
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args, mongo, ayarlar, prefix, dil) => {
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
        .setAuthor(`${client.user.username}`, message.author.avatarURL({ dynamic: true }))
        .setColor("RANDOM")
        .setDescription(`
        Lütfen bir değer belirt!
        Değerler: \`${prefix}banka <yatır miktar/çek miktar/bilgi/transfer @kişi miktar>\`
        `)
        .setFooter(client.ayarlar.embedFooter, client.user.avatarURL())
        return message.channel.send(market) 
    }

    if(args[0] === "yatır") {
        let miktar = args[1]
        let linkler = await db.fetch(`goldkredi_${message.author.id}`)

        if(!miktar) {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username}`, message.author.avatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setDescription(`
            Lütfen yatırılacak miktarı belirtin.
            `)
            .setFooter(client.ayarlar.embedFooter, client.user.avatarURL())
            return message.channel.send(market) 
        }

        if(!await db.fetch(`goldkredi_${message.author.id}`)) {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username}`, message.author.avatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setDescription(`
            Hesabınızda kredi yok.
            `)
            .setFooter(client.ayarlar.embedFooter, client.user.avatarURL())
            return message.channel.send(market) 
        } //dur cient.ayarlara ayarlıcam bebeim

        if(linkler < miktar) {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username}`, message.author.avatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setDescription(`
            **${miktar}** Adet krediniz yok!
            `)
            .setFooter(client.ayarlar.embedFooter, client.user.avatarURL())
            return message.channel.send(market) 
        }
        await db.add(`banka_${message.author.id}`, miktar)
		await db.push(`bankalog_${message.author.id}`, { log: `[Yatırma] - **${miktar}** Miktarında Kredi Yatırma`, zaman: moment(Date.now()).format('DD/MM/YYYY HH:mm') })
        await db.subtract(`goldkredi_${message.author.id}`, miktar)
        const market = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Başarılı bir şekilde **${miktar}** Miktarında kredinizi bankaya yatırdım!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(market) 
    }

    if(args[0] === "çek") {
        let miktar = args[1]
        let linkler = db.fetch(`goldkredi_${message.author.id}`)

        if(!miktar) {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            Lütfen çekilecek miktarı belirtin.
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(market) 
        }

        if(!await db.fetch(`banka_${message.author.id}`)) {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            Bankanızda kredi yok!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(market) 
        }

        if(await db.fetch(`banka_${message.author.id}`) < miktar) {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            Bankanızda **${miktar}** Miktarında kredi yok!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(market) 
        }

       await db.subtract(`banka_${message.author.id}`, miktar)
	await	db.push(`bankalog_${message.author.id}`, { log: `[Çekme] - **${miktar}** Miktarında Kredi Çekme`, zaman: moment(Date.now()).format('DD/MM/YYYY HH:mm') })
       await db.add(`goldkredi_${message.author.id}`, miktar)
        const market = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Başarılı bir şekilde **${miktar}** Miktarında kredinizi bankadan çektim!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(market) 

    }

    if(args[0] === "transfer") {
        let miktar = args[2]
        let kişi = message.mentions.members.first()

        if(!kişi) {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            Lütfen bir kişi etiketleyin.
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(market) 
        }

        if(!isNaN(miktar)) {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            Lütfen gönderilecek miktarı belirtin.
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(market) 
        }

        if(!await db.fetch(`banka_${message.author.id}`)) {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            Bankanızda kredi yok!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(market) 
        }

        if(await db.fetch(`banka_${message.author.id}`) < miktar) {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            Bankanızda **${miktar}** Miktarında kredi yok!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(market) 
        }

       await db.subtract(`banka_${message.author.id}`, miktar)
       await db.add(`banka_${kişi.id}`, miktar)
       await db.push(`bankalog_${message.author.id}`, { log: `[Transfer] - **${miktar}** Miktarında Kredi Gönderimi`, zaman: moment(Date.now()).format('DD/MM/YYYY HH:mm') })
       await db.push(`bankalog_${kişi.id}`, { log: `[Geldi] - **${miktar}** Miktarında Kredi Geldi`, zaman: moment(Date.now()).format('DD/MM/YYYY HH:mm') })
        const market = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Başarılı bir şekilde **${miktar}** Miktarında kredinizi ${kişi} Adlı kişiye transfer ettim!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(market) 

    }

    if(args[0] === "bilgi") {
        let kişi = message.guild.members.cache.get(member => args.length && message.mentions.users.size < 1 && member.user.username.toLowerCase().startsWith(args.join(" ").toLowerCase())) || client.users.cache.get(args[0]) || message.mentions.users.first() || message.author
        let kredi;
		if(await db.fetch(`banka_${kişi.id}`)) {
			kredi = `${await db.fetch(`banka_${kişi.id}`)} Kredi`
		} else {
			kredi = "Yok"
		}
        if(kişi.id === client.user.id) {
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            Benim banka bilgilerime bakamazsın!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(market) 
        }
		 
		if(await db.has(`bankalog_${kişi.id}`) === true) {
		var data = await db.get(`bankalog_${kişi.id}`)
		var list = Object.keys(data).map(_data => {
       return {
           id: (data[_data].log),
           zaman: (data[_data].zaman),
		};
	})
   
		const market = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, kişi.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
		.setFooter(client.ayarlar.embedFooter, kişi.avatarURL({ dynamic: true }))
		.setDescription(`
        ${kişi} Adlı kişinin banka bilgileri.
        `)
        .addField("Bankanızda Bulunan Kredi Miktarı:", `
        • | **${kredi}**
        `)
        if(await db.has(`kredikartı_${kişi.id}`) === true) {
            var dataa = await db.get(`kredikartı_${kişi.id}`)
		var list2 = Object.keys(dataa).map(_data => {
       return {
           id: (dataa[_data].numara),
           zaman: (dataa[_data].zaman),
           para: (dataa[_data].para)
		};
	})
        market.addField("Package Kartı Bilgileri:", `
        ${list2.splice(0, 5).map((item, index) => `**${index + 1} - ** ${item.id} => [Zaman: **${item.zaman}** - Para: **${item.para}**]`).join("\n")}
        `)
        } else {
        market.addField("Package Kartı Bilgileri:", `
        • | **Herhangi bir kredi kartı yok.**
        `)
        }
		market.addField("İşlemler:", list.splice(0, 10).map((item, index) => `**${index + 1} - ** ${item.id} => [Zaman: **${item.zaman}**]`).join("\n"))
        return message.channel.send(market) 	
		} else {
			const market = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, kişi.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
		.setFooter(client.ayarlar.embedFooter, kişi.avatarURL({ dynamic: true }))
		.setDescription(`
        ${kişi} Adlı kişinin banka bilgileri.
        `)
        .addField("Bankanızda Bulunan Kredi Miktarı:", `
        • | **${kredi}**
        `)
		.addField("Package Kartı Bilgileri:", `
		• | **Yok**
		`)
		.addField("İşlemler:", `**Herhangi bir işlem yok.**`)
        return message.channel.send(market) 
		}
		
    }
}
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
}

exports.help = {
    name: "banka",
    description: "bankaya para yatırır/çekersiniz",
    usage: "banka yatır miktar/çek miktar/bilgi"
}