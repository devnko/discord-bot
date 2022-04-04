const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
const değer = args[0]
if(!değer) return global.hata(message, `Lütfen bir değer belirtin! (ayarla, sıfırla)`,true)
const değer1 = args[1]
if(değer == 'ayarla'){
if(!değer1) return global.hata(message,`Lütfen bir değer belirtin! (sistem, log, kanal, ceza, verilecek, alınacak)`,true)
if(değer1 == 'sistem'){
await db.set(`captcha_${message.guild.id}`, true)
return global.oky(message,`Başarılı bir şekilde captcha sistemi aktif edildi!`,true)
} else if(değer1 == 'log'){
let kanal = message.mentions.channels.first() || client.channels.cache.get(args[1]);
if(!kanal) return global.hata(message, `Lütfen bir kanal belirtin!`, true)
await db.set(`captcha_log_${message.guild.id}`, kanal.id)
return global.oky(message,`Captcha log kanalı başarılı bir şekilde <#${kanal.id}> olarak ayarlandı!`,true)
} else if(değer1 == 'kanal'){
let kanal = message.mentions.channels.first() || client.channels.cache.get(args[1]);
if(!kanal) return global.hata(message, `Lütfen bir kanal belirtin!`, true)
await db.set(`captcha_kanal_${message.guild.id}`, kanal.id)
return global.oky(message,`Captcha kanalı başarılı bir şekilde <#${kanal.id}> olarak ayarlandı!`,true)
} else if(değer1 == 'ceza'){
let ban = args[2]
if(!ban) return global.hata(message,`Lütfen bir değer belirtin! (ban, kick) `,true)
if(ban == 'ban'){
await db.set(`captcha_ceza_${message.guild.id}`, ban)
return global.oky(message,`Başarılı bir şekilde captcha cezası **${ban}** olarak ayarlandı!`,true)
} else if(ban == 'kick'){
await db.set(`captcha_ceza_${message.guild.id}`, ban)
return global.oky(message,`Başarılı bir şekilde captcha cezası **${ban}** olarak ayarlandı!`,true)
}
} else if(değer1 == 'verilecek'){
let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
if(!rol) return global.hata(message,`Lütfen bir rol belirtin!`,true)
await db.set(`captcha_verilecekrol_${message.guild.id}`, rol.id)
return global.oky(message,`Başarılı bir şekilde captcha verilecek rolü <@&${rol.id}> olarak ayarlandı!`,true)
} else if(değer1 == 'alınacak'){
let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
if(!rol) return global.hata(message,`Lütfen bir rol belirtin!`,true)
await db.set(`captcha_alınacakrol_${message.guild.id}`, rol.id)
return global.oky(message,`Başarılı bir şekilde captcha alınacak rolü <@&${rol.id}> olarak ayarlandı!`,true)
}
} else if(değer == 'sıfırla'){
if(!değer1) return global.hata(message,`Lütfen bir değer belirtin! (sistem, log, kanal, ceza, verilecek, alınacak)`,true)
if(değer1 == 'sistem'){
await db.delete(`captcha_${message.guild.id}`)
return global.oky(message,`Başarılı bir şekilde captcha sistemi sıfırlandı!`,true)
} else if(değer1 == 'log'){
await db.delete(`captcha_log_${message.guild.id}`)
return global.oky(message,`Başarılı bir şekilde captcha logu sıfırlandı!`,true)
} else if(değer1 == 'kanal'){
await db.delete(`captcha_kanal_${message.guild.id}`)
return global.oky(message,`Başarılı bir şekilde captcha kanalı sıfırlandı!`,true)
} else if(değer1 == 'ceza'){
await db.delete(`captcha_ceza_${message.guild.id}`)
return global.oky(message,`Başarılı bir şekilde captcha cezası sıfırlandı!`,true)
} else if(değer1 == 'verilecek'){
await db.delete(`captcha_verilecekrol_${message.guild.id}`)
return global.oky(message,`Başarılı bir şekilde captcha verilecek rolü sıfırlandı!`,true)
} else if(değer1 == 'alınacak'){
await db.delete(`captcha_alınacakrol_${message.guild.id}`)
return global.oky(message,`Başarılı bir şekilde captcha alınacak rolü sıfırlandı!`,true)
    }
}
} catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["captcha"],
  permLevel: 4
};

exports.help = {
  name: "captcha",
  description: "",
  usage: "captcha"
};
