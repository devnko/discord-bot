const Discord = require("discord.js");
const fs = require("fs");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
        const hataembed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTimestamp()
      .setDescription("Şimdi Yeniden Başlıyorum! Ayrıntılar: || Bak şuan Yeniden Başladım||");
    if (message.author.id !== "453624007586218014")
      if (message.author.id !== "841153183417761802") {
        return message.channel.send(hataembed);
      }
    
    
    const onayembed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTimestamp()
      .setAuthor("Reboot Komutu")
      .setDescription(
        `**UYARI!** 
        🏆 Emojisine Tıklarsaniz Sürpriz İle Karşılaşırsınız!
        ✅ Emojisine Tıklarsanız Bot Yeniden Başlatılacaktır.
        🤖 Emojisine Tıklarsanız Sadece Komutlar Yeniden Yüklenecektir.
        ❌ Emojisine Tıklarsanız İşlem İptal Edilecektir.
        `
      );
    message.channel.send(onayembed).then(msg => {
      msg.react("🏆").then(() => msg.react("✅")).then(() => msg.react("🤖")).then(() => msg.react("❌"));

      const filter = (reaction, user) => {
        return (
          ["✅", "🤖", "❌","🏆"].includes(reaction.emoji.name) &&
          user.id === message.author.id
        );
      };

      msg
        .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
        .then(collected => {
          const reaction = collected.first();

             if (reaction.emoji.name === "🏆") {
            let reboot = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription(`**AlppElla** ve **SafaCey** Benim Yapımcım! Eğer Onlar Olmasaydı**...** S-sizlere Hizmet Veremezdim :(.`)
            msg.edit(reboot)
          } else if (reaction.emoji.name === "✅") {
            let reboot = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription(`**${client.user.username}** yeniden başlatılıyor**...**`)
            msg.edit(reboot).then(() => {
              console.log(`BOT: Bot yeniden başlatılıyor...`);
              process.exit(0);
            })
          } else if (reaction.emoji.name === "🤖") {
            let reboot = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription(`Komutlar Yeniden Yükleniyor...`)
            msg.edit(reboot).then(() => {
              global.handler("komut");
            }) 
          }
          else {
            let reboot = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(`İşlem İptal Edildi **${client.user.username}** Yeniden Başlamayacak**...**`)
            msg.edit(reboot)
          }


        })
        .catch(err => {
          let reboot = new Discord.MessageEmbed()
          .setColor("RED")
            .setDescription(`İşlem İptal Edildi **${client.user.username}** Yeniden Başlamayacak**...**`)
          msg.edit(reboot)
        });
    });
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['r','reboot','yenile'],
  permLevel: 0
};

exports.help = {
  name: "reboot"
};
