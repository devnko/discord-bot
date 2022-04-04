const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
if(message.author.id !== message.guild.ownerID) return message.channel.send("Bu komutu kullanabilmek için sunucu sahibi olman gerekli!") 
if(await db.fetch(message.guild.id)) return global.hata(message,`**Bu sunucuda veri bulunmadığından sıfırlayamazsınız.**`,true)
global.oky(message,`**Sunucunuzdaki tüm ayarların, verilerin silineceğinden emin misiniz, bu işlem geri alınamaz! Eğer emin seniz 30 saniye için __evet__ yazmalısınız! **\n **Not: Bu İşlem 10 ila 15 Saniye Sürecektir.**`).then(async (msg) => {
let onay = await message.channel.awaitMessages((m) => m.author.id === message.author.id, {time: 5000 })
let x = onay.first()
if (x.content === 'evet') {
await db.delete(message.guild.id) 
return global.oky(message,`**Başarıyla sunucunuzdaki tüm verileri sildim!**`,true)
} else {
return global.hata(message,`**İşlem İptal Edildi Veriler __Silinmedi__!**`,true)
}
})
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-sıfırla","sunucu-ayar-sıfırla","sunucu-ayar-sil","sunucu-sıfırla"],
  permLevel: 0
};

exports.help = {
  name: "sunucu-ayar-sıfırla",
  description: "",
  usage: "sunucu-ayar-sıfırla"
};
