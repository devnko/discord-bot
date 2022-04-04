const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
    let argüman = args[0];
    if (argüman == "aç") {
      global
        .oky(message, "Kurulum yapılıyor lütfen bekleyiniz...")
        .then(async msg => {
          let everyone = message.guild.roles.cache.find(
            a => a.name == "@everyone"
          );
          message.guild.channels
            .create(`Üye Sayısı • ${message.guild.memberCount}`, {
              type: "voice", timeout: 6000
            })
            .then(async channel => {
              channel.updateOverwrite(everyone, {
                VIEW_CHANNEL: true,
                CONNECT: false
              });
              await db.set(`${message.guild.id}.panelhepsi`, channel.id);
            });
          let botsayısı = message.guild.members.cache.filter(m => m.user.bot)
            .size;
          message.guild.channels
            .create(`Bot Sayısı • ${botsayısı}`, { type: "voice", timeout: 6000})
            .then(async channel => {
              channel.updateOverwrite(everyone, {
                VIEW_CHANNEL: true,
                CONNECT: false
              })
              await db.set(`${message.guild.id}.panelbot`, channel.id);
            });
          let embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription("Kurulum başarıyla tamamlandı!");
          msg.edit(embed);
        });
    } else if (argüman == "kapat") {
      let hepsi = await db.get(`${message.guild.id}.panelhepsi`);
      let bot = await db.get(`${message.guild.id}.panelbot`);
      if (hepsi) {
        hepsi = message.guild.channels.cache.get(hepsi);
        hepsi.delete()
        await db.delete(`${message.guild.id}.panelhepsi`);
      }
      if (bot) {
        bot = message.guild.channels.cache.get(bot);
        bot.delete();
        await db.delete(`${message.guild.id}.panelbot`);
      }
      global.oky(message, "Panel kanalları silindi.");
    } else {
      return global.hata(message, "Geçersiz giriş yaptınız! Argümanlar: `aç` veya `kapat`")
    }
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kurulum", "sunucu-panel"],
  permLevel: 4
};

exports.help = {
  name: "sunucupanel",
  description: "",
  usage: ""
};
