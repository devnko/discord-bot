const Discord = require("discord.js");
exports.run = async (client, message, args, qwe, ayarlar) => {
  try {
const db = require('quick.db')
if(message.author.id !== '548145246983159808') return;
let seç = args[0]
if(!seç) return global.hata(message,`Bir Değer Belirt! Değerler: kredi, banka`,true)
if(seç === 'kredi'){
let seç1 = args[1]
if(!seç1) return global.hata(message,`Bir Değer Belirt! Değerler: ekle, sil, sıfırla`,true)
if(seç1 === 'ekle'){
let para = args[3]
let üye = args[2]
if(!üye) return global.hata(message,`Bir üye IDsi gir!`,true)
if(!para) return global.hata(message,`Bir para değeri belirt!`,true)
db.add(`goldkredi_${üye}`, para)
return global.oky(message,`${para} Kadar Para Kullanıcıya Eklendi!`,true)
} else if(seç1 === 'sil'){
let para = args[3]
let üye = args[2]
if(!üye) return global.hata(message,`Bir üye IDsi gir!`,true)
if(!para) return global.hata(message,`Bir para değeri belirt!`,true)
db.subtract(`goldkredi_${üye}`, para)
return global.oky(message,`${para} Kadar Para Kullanıcıdan Eksildi!`,true)
} else if(seç1 === 'sıfırla'){
let üye = args[2]
if(!üye) return global.hata(message,`Bir üye IDsi gir!`,true)
db.delete(`goldkredi_${üye}`)
return global.oky(message,`Kullanıcının tüm parası silindi!`,true)
}
} else if(seç === 'banka'){
let seç1 = args[1]
if(!seç1) return global.hata(message,`Bir Değer Belirt! Değerler: ekle, sil, sıfırla`,true)
if(seç1 === 'ekle'){
let para = args[3]
let üye = args[2]
if(!üye) return global.hata(message,`Bir üye IDsi gir!`,true)
if(!para) return global.hata(message,`Bir para değeri belirt!`,true)
db.add(`banka_${üye}`, para)
return global.oky(message,`${para} Kadar Para Kullanıcıya Eklendi!`,true)
} else if(seç1 === 'sil'){
let para = args[3]
let üye = args[2]
if(!üye) return global.hata(message,`Bir üye IDsi gir!`,true)
if(!para) return global.hata(message,`Bir para değeri belirt!`,true)
db.subtract(`banka_${üye}`, para)
return global.oky(message,`${para} Kadar Para Kullanıcıdan Eksildi!`,true)
} else if(seç1 === 'sıfırla'){
let üye = args[2]
if(!üye) return global.hata(message,`Bir üye IDsi gir!`,true)
db.delete(`banka_${üye}`)
return global.oky(message,`Kullanıcının tüm parası silindi!`,true)
}
}
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["admin-para","adminpara"],
  permLevel: 0
};

exports.help = {
  name: "admin-para",
  description: "",
  usage: "admin-para"
};