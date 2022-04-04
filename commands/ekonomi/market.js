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
	const duration = moment.duration(await db.fetch(`goldsüre_${message.author.id}`) - Date.now()).format(" D [gün], H [saat], m [dakika], s [saniye]");
	  
    let üyelikdurum;
    if(await db.fetch(`üyelikk_${message.author.id}`) === "aktif") {
        üyelikdurum = `Gold Üye! - Süre: ${duration || "0 gün, 0 saat, 0 dakika, 0 saniye"}`
    } else {
        üyelikdurum = "Normal Üye!"
    }
    
    const market = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
    • | Pac Coininiz: \`${await db.fetch(`goldkredi_${message.author.id}`) || 0} Pac Coini\`
    • | Üyelik Durumu: \`${üyelikdurum}\`
    • | Package Barkodumuz: \`4092540246792\`
    `)
    .addField("Premium Paketler", `
    • | Paket: **Başlangıç** - Süre: **1 - 7 Gün**
	  • | Paket: **Orta** - Süre: **7 - 14 Gün**
	  • | Paket: **Üst** - Süre: **14 - 29 Gün**
    `, true)
    .addField("Satın Alma", `
    • | Komut: **${prefix}demir** - Fiyat: **5.000 Coin**
	  • | Komut: **${prefix}altın** - Fiyat: **15.000 Coin**
	  • | Komut: **${prefix}zümrüt** - Fiyat: **25.000 Coin**
    `)
    .addField("Rozet Satın Alımı", `
    • | Komut: **${prefix}rozet bronz** - Fiyat: **5.000 Coin**
	  • | Komut: **${prefix}rozet gümüş** - Fiyat: **7.500 Coin**
	  • | Komut: **${prefix}rozet demir** - Fiyat: **10.000 Coin**
	  • | Komut: **${prefix}rozet altın** - Fiyat: **20.000 Coin**
	  • | Komut: **${prefix}rozet elmas** - Fiyat: **30.000 Coin**
	  • | Komut: **${prefix}rozet titanyum** - Fiyat: **50.000 Coin**
    `)
    .addField("Özellikler", `
    • | Özellik: **Pasif Mod** - Açıklama: **Pasif Mod Aktifken Saldırı alamazsınız.**
    `)
    .addField("Satın Alma", `
    • | Komut: **${prefix}pasifmod** - Fiyat: **30.000 Coin**
    `, true)
    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
    return message.channel.send(market)

}
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["shop"]
}

exports.help = {
    name: "market",
    description: "marketten alışveriş yaparsınız.",
    usage: "market"
}