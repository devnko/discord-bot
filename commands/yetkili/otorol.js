const Discord = require("discord.js");

exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
    let sıfırla = args[0];
    
      if (sıfırla == "sıfırla") {
        let p = await db.fetch(`${message.guild.id}.otorol`)
        if (!p) return global.hata(message, "Otorol ayarlamamışsınız!");
        await db.delete(`${message.guild.id}.otorol`);
        global.oky(message, "Otorol başarıyla sıfırlandı.");
        return;
      } else if(sıfırla == "ayarla") {
        let prefix = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        if (!prefix) {
          global.hata(message, `Lütfen bir rol belirtiniz!`)
          return;
        }
        global.oky(message, `Otorol \`${prefix}\` olarak ayarlandı!`)
        await db.set(`${message.guild.id}.otorol`, prefix.id)

        } else if(sıfırla == "kanal") {
        let ayarla = args[1]
        if(ayarla == "sıfırla") {
          let p = await db.fetch(`${message.guild.id}.otorolkanal`)
          if (!p) return global.hata(message, "Otorol logu ayarlamamışsınız!");
          await db.delete(`${message.guild.id}.otorolkanal`);
          global.oky(message, "Otorol log kanalı başarıyla sıfırlandı.");
          return;
        }
        let prefix = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
        if (!prefix) {
          global.hata(message, `Lütfen bir kanal belirtiniz!`)
          return;
        }
        global.oky(message, `Otorol log kanalı \`${prefix}\` olarak ayarlandı!`)
        await db.set(`${message.guild.id}.otorolkanal`, prefix.id)

    
      } else if(sıfırla == "bot") {
        let ayarla = args[1]
        if(ayarla == "sıfırla") {
          let p = await db.fetch(`${message.guild.id}.bototorol`)
          if (!p) return global.hata(message, "Bot otorolü ayarlamamışsınız!");
          await db.delete(`${message.guild.id}.bototorol`);
          global.oky(message, "Bot otorolü başarıyla sıfırlandı.");
          return;
        } else if(ayarla == "ayarla") {

          let prefix = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
          if (!prefix) {
            global.hata(message, `Lütfen bir rol belirtiniz!`)
            return;
          }
          global.oky(message, `Bot otorolü \`${prefix}\` olarak ayarlandı!`)
          await db.set(`${message.guild.id}.bototorol`, prefix.id)
  
         
        } else {
          const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`
**${client.user.username} Otorol Sistemi**
\`${prefix}otorol kanal <kanal>\` **:** Otorol Log Kanalını Ayarlarsınız.(Bot Otorol'ude Bu Log'a Atar.)
\`${prefix}otorol kanal sıfırla\` **:** Otorol Log Kanalını Sıfırlarsınız.

\`${prefix}otorol ayarla <rol>\` **:** Otorol Ayarlarsınız.
\`${prefix}otorol sıfırla\` **:** Sunucudaki otorol sıfırlanır.
  
\`${prefix}otorol bot ayarla <rol>\` **:** Bot otorolü Ayarlarsınız.
\`${prefix}otorol bot sıfırla\` **:** Sunucudaki bot otorolü sıfırlanır.
`)
          .setFooter(client.ayarlar.footerEmbed)
          return message.channel.send(embed);
        }
      } else {
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`
**${client.user.username} Otorol Sistemi**
\`${prefix}otorol kanal <kanal>\` **:** Otorol Log Kanalını Ayarlarsınız.(Bot Otorol'ude Bu Log'a Atar.)
\`${prefix}otorol kanal sıfırla\` **:** Otorol Log Kanalını Sıfırlarsınız.

\`${prefix}otorol ayarla <rol>\` **:** Otorol Ayarlarsınız.
\`${prefix}otorol sıfırla\` **:** Sunucudaki otorol sıfırlanır.

\`${prefix}otorol bot ayarla <rol>\` **:** Bot otorolü Ayarlarsınız.
\`${prefix}otorol bot sıfırla\` **:** Sunucudaki bot otorolü sıfırlanır.
`)
        .setFooter(client.ayarlar.footerEmbed)
        return message.channel.send(embed);
  
      }


  } catch (err) {
    global.errs(err, message)
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4,
  kategori: "otorol"
};

module.exports.help = {
  name: "otorol",
  description: "otorol",
  usage: "otorol"
};
