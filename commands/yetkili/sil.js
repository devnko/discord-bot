const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
    if (!args[0] || isNaN(args[0])) return global.hata(message, "Temizlenecek mesaj miktarını belirtmelisin! (İstediğin kadar)")
    await message.delete();
    let sayi = Number(args[0]);
    let silinen = 0;
    for (var i = 0; i < Math.floor(sayi / 100); i++) {
      await message.channel.bulkDelete(100).then(r => (silinen += r.size))
      .catch(err => global.hata(message, "14 Günden önceki mesajlar silinemiyor!"))
      sayi = sayi - 100;
      if(message.channel.messages.cache.size == 0) return global.oky(message, `${global.tick} **${silinen}** adet mesaj silindi!`)
      .then(async message => {
        setTimeout(() => {
          message.delete();
        }, 5000);
      });
    }
    if (sayi > 0)
      await message.channel.bulkDelete(sayi).then(r => (silinen += r.size))
      .catch(err => global.hata(message, "14 Günden önceki mesajlar silinemiyor!"))
global.oky(message, `${global.tick} **${silinen}** adet mesaj silindi!`)
      .then(async message => {
        setTimeout(() => {
          message.delete();
        }, 5000);
      });
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle", "sil"],
  permLevel: 1
};

exports.help = {
  name: "sil",
  description: "Belirtilen miktarda mesajı temizler. (Sınırsız)",
  usage: "temizle <miktar>",
  kategori: "kullanıcı"
};
