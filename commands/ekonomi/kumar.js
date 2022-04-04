const Discord = require("discord.js");
const moment = require('moment')
exports.run = async (client, message, args, mongo) => {
  try {    
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
if(await db.fetch(`kumarsüre_${message.author.id}`) > Date.now()) {
let timeout = (await db.fetch(`kumarsüre_${message.author.id}`) - Date.now());
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Lütfen Bekle!", message.author.avatarURL({dynamic: true}))
.setDescription(`${global.deniedozel} Kumar oynamak için \`${moment.duration(timeout).format("M [dakika], s [saniye]")}\` Boyunca beklemelisin!`)
.setFooter(client.ayarlar.embedFooter, client.user.avatarURL())
.setTimestamp()
return message.channel.send(embed).then((msg) => { msg.delete({timeout: 5000})})
} else {
let coin = args[0]
if(!coin) return global.red(message,`**Kumar için kaç para yatıracaksın?**`,true)
if(await db.fetch(`goldkredi_${message.author.id}`) < coin) return global.hata(message,`**Maalesefki hesabınızda ${coin} Pac coini bulunamadı, bu nedenle kumar oynayamazsını.**`,true)
let kumar = ["kazandı","kaybetti"]
let rastgele = kumar[Math.floor(Math.random() * kumar.length)];
if(rastgele === 'kazandı'){
await db.set(`kumarsüre_${message.author.id}`, (Date.now() + 60000))
setTimeout(async () => {
await db.delete(`kumarsüre_${message.author.id}`)
}, 60000)
db.add(`goldkredi_${message.author.id}`, coin)
return global.oky(message,`**Kumarı kazandın, hesabına ${coin} Pac coini eklendi!**`,true)
} else {
await db.set(`kumarsüre_${message.author.id}`, (Date.now() + 60000))
setTimeout(async () => {
await db.delete(`kumarsüre_${message.author.id}`)
}, 60000)
await db.subtract(`goldkredi_${message.author.id}`, coin)
return global.hata(message,`**Kumarı kaybettin, hesabından ${coin} Pac coini eksildi!**`,true)
}
}
    }
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kumar"],
  permLevel: 0
};

exports.help = {
  name: "kumar",
  description: "",
  usage: "kumar"
};
