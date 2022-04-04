const Discord = require("discord.js");
exports.run = async (client, message, args, qwe, ayarlar, prefix) => {
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
const rozet = args[0]
if(!rozet) return global.red(message,`Bir Rozet Belirtmelisin! Rozetler;\n${prefix}rozet bronz\n${prefix}rozet gümüş \n${prefix}rozet demir \n${prefix}rozet altın\n${prefix}rozet elmas \n${prefix}rozet titanyum`,true)
if(rozet == 'bronz'){
if(await db.fetch(`bronz_${message.author.id}`)) return global.hata(message,`**Bronz rozeti zaten sende var!**`,true)
if(await db.fetch(`goldkredi_${message.author.id}`) < 5000) return global.hata(message,`Bronz rozetini almak için 5.000 foe coinine ihtiyacınız var!`,true)
await db.set(`bronz_${message.author.id}`, global.bronz)
await db.subtract(`goldkredi_${message.author.id}`, 5000)
return global.oky(message,`Başarıyla bronz (${global.bronz}) rozetinizi aldınız! Hayırlı Olsun!`, true)
} else if(rozet == 'gümüş'){
if(await db.fetch(`gumus_${message.author.id}`)) return global.hata(message,`**Gümüş rozeti zaten sende var!**`,true)
if(await db.fetch(`goldkredi_${message.author.id}`) < 7500) return global.hata(message,`Bronz rozetini almak için 7.500 foe coinine ihtiyacınız var!`,true)
await db.set(`gumus_${message.author.id}`, global.gumus)
await db.subtract(`goldkredi_${message.author.id}`, 7500)
return global.oky(message,`Başarıyla gümüş (${global.gumus}) rozetinizi aldınız! Hayırlı Olsun!`, true)
} else if(rozet == 'demir'){
if(await db.fetch(`demir_${message.author.id}`)) return global.hata(message,`**Demir rozeti zaten sende var!**`,true)
if(await await db.fetch(`goldkredi_${message.author.id}`) < 10000) return global.hata(message,`Demir rozetini almak için 10.000 foe coinine ihtiyacınız var!`,true)
await db.set(`demir_${message.author.id}`, global.demir)
await db.subtract(`goldkredi_${message.author.id}`, 10000)
return global.oky(message,`Başarıyla demir (${global.demir}) rozetinizi aldınız! Hayırlı Olsun!`, true)
} else if(rozet == 'altın'){
if(await db.fetch(`altin_${message.author.id}`)) return global.hata(message,`**Altın rozeti zaten sende var!**`,true)
if(await db.fetch(`goldkredi_${message.author.id}`) < 20000) return global.hata(message,`Altın rozetini almak için 20.000 foe coinine ihtiyacınız var!`,true)
await db.set(`altin_${message.author.id}`, global.altin)
await db.subtract(`goldkredi_${message.author.id}`, 20000)
return global.oky(message,`Başarıyla altın (${global.altin}) rozetinizi aldınız! Hayırlı Olsun!`, true)
} else if(rozet == 'elmas'){
if(await db.fetch(`elmas_${message.author.id}`)) return global.hata(message,`**Elmas rozeti zaten sende var!**`,true)
if(await db.fetch(`goldkredi_${message.author.id}`) < 30000) return global.hata(message,`Elmas rozetini almak için 30.000 foe coinine ihtiyacınız var!`,true)
await db.set(`elmas_${message.author.id}`, global.elmas)
await db.subtract(`goldkredi_${message.author.id}`, 30000)
return global.oky(message,`Başarıyla elmas (${global.elmas}) rozetinizi aldınız! Hayırlı Olsun!`, true)
} else if(rozet == 'titanyum'){
if(await db.fetch(`titanyum_${message.author.id}`)) return global.hata(message,`**Titanyum rozeti zaten sende var!**`,true)
if(await db.fetch(`goldkredi_${message.author.id}`) < 50000) return global.hata(message,`Titanyum rozetini almak için 50.000 foe coinine ihtiyacınız var!`,true)
await db.set(`titanyum_${message.author.id}`, global.titanyum)
await db.subtract(`goldkredi_${message.author.id}`, 50000)
return global.oky(message,`Başarıyla titanyum (${global.titanyum}) rozetinizi aldınız! Hayırlı Olsun!`, true)
}
}
} catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rozet"],
  permLevel: 0
};

exports.help = {
  name: "rozet",
  description: "",
  usage: "rozet"
};
