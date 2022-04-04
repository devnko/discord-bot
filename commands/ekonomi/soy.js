const Discord = require("discord.js");
const moment = require('moment')
exports.run = async (client, message, args, mongo, ayarlar) => {
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
    if(await db.fetch(`soysüre_${message.author.id}`) > Date.now()) {
        let timeout = (await db.fetch(`soysüre_${message.author.id}`) - Date.now());
        const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor("Lütfen Bekle!", message.author.avatarURL({dynamic: true}))
        .setDescription(`${global.deniedozel} Başka birini soymak için \`${moment.duration(timeout).format("H [saat], m [dakika], s [saniye]")}\` Boyunca beklemelisin!`)
        .setFooter(client.ayarlar.embedFooter, client.user.avatarURL())
        .setTimestamp()
        return message.channel.send(embed).then((msg) => { msg.delete({timeout: 5000})})
        } else {
let coin = Math.floor(Math.random() * 5000)
let üye = message.mentions.users.first()
if(!üye) return global.red(message,`Soymak için bir kişi etiketlemelisin!`,true)
if(üye.bot) return global.hata(message,`Botları soyamazsın!`,true)
if(üye.id == message.author.id) return global.hata(message,`Kendini soyamazsın!`,true)
            
          
 if(await db.fetch(`goldkredi_${üye.id}`) === 0) return global.hata(message,`**Bu Kullanıcının Hiç Parası Yok, Bu Nedenle Onu Soyamazsın!`, true)
if(await db.fetch(`pasifmod_${üye.id}`) === "aktif") {
await db.subtract(`goldkredi_${message.author.id}`, coin)
return global.hata(message,`<@${üye.id}> Adlı kişinin **Pasif Mod** Özelliği aktif bu yüzden onu soymaya çalıştığın için hesabından ${coin} foe coini eksildi!`,true)
}
let kumar = ["soydu","soyamadı"]
let rastgele = kumar[Math.floor(Math.random() * kumar.length)];
if(rastgele === 'soydu'){
await db.set(`soysüre_${message.author.id}`, (Date.now() + 10000))
setTimeout(async () => {
await db.delete(`soysüre_${message.author.id}`)
}, 10000)
db.add(`goldkredi_${message.author.id}`, coin)
db.subtract(`goldkredi_${üye.id}`, coin)
return global.oky(message,`**Kullanıcıyı soydun, hesabına ${coin} foe coini eklendi!**`,true)
} else {
await db.set(`soysüre_${message.author.id}`, (Date.now() + 10000))
setTimeout(async () => {
await db.delete(`soysüre_${message.author.id}`)
}, 10000)
await db.subtract(`goldkredi_${message.author.id}`, coin)
return global.hata(message,`**Kullanıcı soyamadın, hesabından ${coin} foe coini eksildi!**`,true)
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
  aliases: ["soy"],
  permLevel: 0
};

exports.help = {
  name: "soy",
  description: "",
  usage: "soy"
};