const Discord = require("discord.js");
const talkedRecently = new Set();
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
    const embed = new Discord.MessageEmbed()
      .setTitle(":e_mail: Bildir Sistemi")
      .setDescription(
        `
• Ne türde bir bildirme yapıcağını yazmalısın.
(**Öneri, Şikayet, Hata, Bug**)
• Belirtmek için 30 saniyeniz vardır.
`
      )
      .setFooter(
        "Boş bir bildirme ve ya hakaret içerikli bildirme yapanlar karalisteye alınacaktır."
      );
    message.channel.send(embed);
    let choice;
    const filter = res =>
      res.author.id === message.author.id &&
      ["öneri", "şikayet", "hata", "bug"].includes(res.content.toLowerCase());
    const turn = await message.channel.awaitMessages(filter, {
      max: 1,
      time: 30 * 60 * 60
    });
    choice = turn.first().content.toLowerCase();
    if (choice == "öneri") {
      const embed2 = new Discord.MessageEmbed().setTitle(
        ":e_mail: Öneri Bildir Sistemi"
      ).setDescription(`
**•** Kullanıcı memnuniyetinizi bu tepkilerde ki emojilerle belirtiniz.
Kullanıcı memnuniyeti bizim için çok önemlidir.
**•** **Belirtmek için 60 saniyeniz vardır.**`);
      message.channel.send(embed2).then(async msg => {
        let memnunluk;
        await msg.react("😄");
        await msg.react("🙂");
        await msg.react("😕");
        await msg.react("😞");
        await msg.react("😟");
        const filter = async (reaction, user) => {
          return (
            ["😄", "🙂", "😕", "😞", "😟"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          );
        };

        msg
          .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
          .then(async collected => {
            const reaction = collected.first();
            if (reaction.emoji.name == "😄") memnunluk = 5;
            if (reaction.emoji.name == "🙂") memnunluk = 4;
            if (reaction.emoji.name == "😕") memnunluk = 3;
            if (reaction.emoji.name == "😞") memnunluk = 2;
            if (reaction.emoji.name == "😟") memnunluk = 1;
            const embed3 = new Discord.MessageEmbed().setTitle(
              ":e_mail: Öneri Bildir Sistemi"
            ).setDescription(`
:pencil: **Önerinizi yazın.**
**• Önerinizi yazmak için 60 saniyeniz vardır.**

        `);
            message.channel.send(embed3);
            let yazıqwe;
            const filter = res => res.author.id === message.author.id;
            const turn = await message.channel.awaitMessages(filter, {
              max: 1,
              time: 30 * 60 * 60
            });
            yazıqwe = turn.first().content;
            let idqwe = makeid(8);
            let webhook = await message.channel.createWebhook(
              `Package Destek・ID: ${idqwe}`,
              {
                avatar: client.user.avatarURL()
              }
            );
            await db.set(`${idqwe}.bug`, yazıqwe);
            await db.set(`${idqwe}.id`, webhook.id);
            await db.set(`${idqwe}.token`, webhook.token);
            await db.set(`${idqwe}.user`, message.author.id);

            let başarılımq = new Discord.MessageEmbed()
              .setDescription(
                `
<:tikflnab:823815132878602270> Öneriniz başarıyla bildirildi.
**ID:** \`${idqwe}\`
**Botumuz Sizin İsteklerinizle Güzelleşiyor!**
    `
              )
              .setFooter(
                "Not: Eğer Küfür Kullanımı Yaptıysanız Otomatik Olarak Karalisteye Eklendiniz!"
              );
            message.channel.send(başarılımq);
            const oneriwebhook = new Discord.WebhookClient(
              //https://discordapp.com/api/webhooks/855859167604899840/fBKaYJqILnhASWH-o-zLqEeA7bEWcbGMHi6DUcw233zQGv30fOmhb3ApM8TRbN35sQg1
              "855859167604899840",
              "fBKaYJqILnhASWH-o-zLqEeA7bEWcbGMHi6DUcw233zQGv30fOmhb3ApM8TRbN35sQg1"
            );
            let bildirdiamk = new Discord.MessageEmbed().setColor("RANDOM")
              .setDescription(`
        **Bana bir öneride bulundular!**
        Kişi: \`${message.author.tag}\` (\`${message.author.id}\`)
        Bildirdiği sunucu: \`${message.guild.name}\` (\`${message.guild.id}\`)
        Bildirdiği kanal: \`${message.channel.name}\` (\`${message.channel.id}\`)
        Report ID: \`${idqwe}\`
        Memnuniyeti: \`${memnunluk}\`
        Önerisi: \`${yazıqwe}\`      
        `);
            //nereye else koycan ab kanka eer küfür varsa bize bildircek kanalada küfür olduğu için karalisteyealdınız atcak
            let filtreler = [
              "amk",
              "aq",
              "mal",
              "botu silin",
              "ananızı sikim",
              "orospu cocukları",
              "oç",
              "oc",
              "31"
            ];
            let küfür;
            filtreler.forEach(async a => {
              if (küfür) return;

              if (yazıqwe.includes(a)) {
                küfür = true;
                bildirdiamk.addField(
                  "Karaliste",
                  `${message.author.tag} küfür kullandığı için karalisteye eklendi! Küfür: ${a}`
                );
                let sebep = "Bildiri Komutunda Küfür Kullanımı.";
                await db.set(`karalist_${message.author.id}`, sebep);
              }
            });
            oneriwebhook.send(bildirdiamk);
          });
      });
    } else if (choice == "şikayet") {
      const embed2 = new Discord.MessageEmbed().setTitle(
        ":e_mail: Şikayet Bildir Sistemi"
      ).setDescription(`
**•** Kullanıcı memnuniyetinizi bu tepkilerde ki emojilerle belirtiniz.
Kullanıcı memnuniyeti bizim için çok önemlidir.
**•** **Belirtmek için 60 saniyeniz vardır.**`);
      message.channel.send(embed2).then(async msg => {
        let memnunluk;
        await msg.react("😄");
        await msg.react("🙂");
        await msg.react("😕");
        await msg.react("😞");
        await msg.react("😟");
        const filter = async (reaction, user) => {
          return (
            ["😄", "🙂", "😕", "😞", "😟"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          );
        };

        msg
          .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
          .then(async collected => {
            const reaction = collected.first();
            if (reaction.emoji.name == "😄") memnunluk = 5;
            if (reaction.emoji.name == "🙂") memnunluk = 4;
            if (reaction.emoji.name == "😕") memnunluk = 3;
            if (reaction.emoji.name == "😞") memnunluk = 2;
            if (reaction.emoji.name == "😟") memnunluk = 1;
            const embed3 = new Discord.MessageEmbed().setTitle(
              ":e_mail: Şikayet Bildir Sistemi"
            ).setDescription(`
:pencil: **Şikayetinizi yazın.**
**• Şikayetinizi yazmak için 60 saniyeniz vardır.**

        `);
            message.channel.send(embed3);
            let yazıqwe;
            const filter = res => res.author.id === message.author.id;
            const turn = await message.channel.awaitMessages(filter, {
              max: 1,
              time: 30 * 60 * 60
            });
            yazıqwe = turn.first().content;
            let idqwe = makeid(8);
            let webhook = await message.channel.createWebhook(
              `Package Destek・ID: ${idqwe}`,
              {
                avatar: client.user.avatarURL()
              }
            );
            await db.set(`${idqwe}.bug`, yazıqwe);
            await db.set(`${idqwe}.id`, webhook.id);
            await db.set(`${idqwe}.token`, webhook.token);
            await db.set(`${idqwe}.user`, message.author.id);

            let başarılımq = new Discord.MessageEmbed()
              .setDescription(
                `
<:tikflnab:823815132878602270> Şikayetiniz başarıyla bildirildi.
**ID:** \`${idqwe}\`
**Botumuz Sizin İsteklerinizle Güzelleşiyor!**
    `
              )
              .setFooter(
                "Not: Eğer Küfür Kullanımı Yaptıysanız Otomatik Olarak Karalisteye Eklendiniz!"
              );
            message.channel.send(başarılımq);
            const oneriwebhook = new Discord.WebhookClient(
              //https://discordapp.com/api/webhooks/855859813589712916/Kc0FtMKVieLTdw3gJ_AFtKGDr8rgoWw1y0sxHip6TTPUcrqW6wYjJuSPS1i6aoXj2F6B
              "855859813589712916",
              "Kc0FtMKVieLTdw3gJ_AFtKGDr8rgoWw1y0sxHip6TTPUcrqW6wYjJuSPS1i6aoXj2F6B"
            );
            let bildirdiamk = new Discord.MessageEmbed().setColor("RANDOM")
              .setDescription(`
        **Bana bir şikayette bulundular!**
        Kişi: \`${message.author.tag}\` (\`${message.author.id}\`)
        Bildirdiği sunucu: \`${message.guild.name}\` (\`${message.guild.id}\`)
        Bildirdiği kanal: \`${message.channel.name}\` (\`${message.channel.id}\`)
        Report ID: \`${idqwe}\`
        Memnuniyeti: \`${memnunluk}\`
        Önerisi: \`${yazıqwe}\`      
        `);
            //nereye else koycan ab kanka eer küfür varsa bize bildircek kanalada küfür olduğu için karalisteyealdınız atcak
            let filtreler = [
              "amk",
              "aq",
              "mal",
              "botu silin",
              "ananızı sikim",
              "orospu cocukları",
              "oç",
              "oc",
              "31"
            ];
            let küfür;
            filtreler.forEach(async a => {
              if (küfür) return;

              if (yazıqwe.toLowerCase() == a) {
                küfür = true;
                bildirdiamk.addField(
                  "Karaliste",
                  `${message.author.tag} küfür kullandığı için karalisteye eklendi! Küfür: ${a}`
                );
                let sebep = "Bildiri Komutunda Küfür Kullanımı.";
                await db.set(`karalist_${message.author.id}`, sebep);
              }
            });
            oneriwebhook.send(bildirdiamk);
          });
      });
    } else if (choice == "hata") {
      const embed2 = new Discord.MessageEmbed().setTitle(
        ":e_mail: Hata Bildir Sistemi"
      ).setDescription(`
**•** Kullanıcı memnuniyetinizi bu tepkilerde ki emojilerle belirtiniz.
Kullanıcı memnuniyeti bizim için çok önemlidir.
**•** **Belirtmek için 60 saniyeniz vardır.**`);
      message.channel.send(embed2).then(async msg => {
        let memnunluk;
        await msg.react("😄");
        await msg.react("🙂");
        await msg.react("😕");
        await msg.react("😞");
        await msg.react("😟");
        const filter = async (reaction, user) => {
          return (
            ["😄", "🙂", "😕", "😞", "😟"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          );
        };

        msg
          .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
          .then(async collected => {
            const reaction = collected.first();
            if (reaction.emoji.name == "😄") memnunluk = 5;
            if (reaction.emoji.name == "🙂") memnunluk = 4;
            if (reaction.emoji.name == "😕") memnunluk = 3;
            if (reaction.emoji.name == "😞") memnunluk = 2;
            if (reaction.emoji.name == "😟") memnunluk = 1;
            const embed3 = new Discord.MessageEmbed().setTitle(
              ":e_mail: Hata Bildir Sistemi"
            ).setDescription(`
:pencil: **Hatayı yazın.**
**• Hatayı yazmak için 60 saniyeniz vardır.**

        `);
            message.channel.send(embed3);
            let yazıqwe;
            const filter = res => res.author.id === message.author.id;
            const turn = await message.channel.awaitMessages(filter, {
              max: 1,
              time: 30 * 60 * 60
            });
            yazıqwe = turn.first().content;
            let idqwe = makeid(8);
            let webhook = await message.channel.createWebhook(
              `Package Destek・ID: ${idqwe}`,
              {
                avatar: client.user.avatarURL()
              }
            );
            await db.set(`${idqwe}.bug`, yazıqwe);
            await db.set(`${idqwe}.id`, webhook.id);
            await db.set(`${idqwe}.token`, webhook.token);
            await db.set(`${idqwe}.user`, message.author.id);
            let başarılımq = new Discord.MessageEmbed()
              .setDescription(
                `
<:tikflnab:823815132878602270> Hata başarıyla bildirildi.
**ID:** \`${idqwe}\`
**Botumuz Sizin İsteklerinizle Güzelleşiyor!**
    `
              )
              .setFooter(
                "Not: Eğer Küfür Kullanımı Yaptıysanız Otomatik Olarak Karalisteye Eklendiniz!"
              );
            message.channel.send(başarılımq);
            const oneriwebhook = new Discord.WebhookClient(
              //https://discordapp.com/api/webhooks/855859999096045608/EhX8bhuoefMZfzIY1Jwo32IfP7UiAdqcHwmPYRY5IrAuoY-WsLrRflFkXt_AfuPiL978
              "855859999096045608",
              "EhX8bhuoefMZfzIY1Jwo32IfP7UiAdqcHwmPYRY5IrAuoY-WsLrRflFkXt_AfuPiL978"
            );
            let bildirdiamk = new Discord.MessageEmbed().setColor("RANDOM")
              .setDescription(`
        **Bana bir şikayette bulundular!**
        Kişi: \`${message.author.tag}\` (\`${message.author.id}\`)
        Bildirdiği sunucu: \`${message.guild.name}\` (\`${message.guild.id}\`)
        Bildirdiği kanal: \`${message.channel.name}\` (\`${message.channel.id}\`)
        Report ID: \`${idqwe}\`
        Memnuniyeti: \`${memnunluk}\`
        Önerisi: \`${yazıqwe}\`      
        `);
            //nereye else koycan ab kanka eer küfür varsa bize bildircek kanalada küfür olduğu için karalisteyealdınız atcak
            let filtreler = [
              "amk",
              "aq",
              "mal",
              "botu silin",
              "ananızı sikim",
              "orospu cocukları",
              "oç",
              "oc",
              "31"
            ];
            let küfür;
            filtreler.forEach(async a => {
              if (küfür) return;

              if (yazıqwe.toLowerCase() == a) {
                küfür = true;
                bildirdiamk.addField(
                  "Karaliste",
                  `${message.author.tag} küfür kullandığı için karalisteye eklendi! Küfür: ${a}`
                );
                let sebep = "Bildiri Komutunda Küfür Kullanımı.";
                await db.set(`karalist_${message.author.id}`, sebep);
              }
            });
            oneriwebhook.send(bildirdiamk);
          });
      });
    } else if (choice == "bug") {
      const embed2 = new Discord.MessageEmbed().setTitle(
        ":e_mail: Bug Bildir Sistemi"
      ).setDescription(`
**•** Kullanıcı memnuniyetinizi bu tepkilerde ki emojilerle belirtiniz.
Kullanıcı memnuniyeti bizim için çok önemlidir.
**•** **Belirtmek için 60 saniyeniz vardır.**`);
      message.channel.send(embed2).then(async msg => {
        let memnunluk;
        await msg.react("😄");
        await msg.react("🙂");
        await msg.react("😕");
        await msg.react("😞");
        await msg.react("😟");
        const filter = async (reaction, user) => {
          return (
            ["😄", "🙂", "😕", "😞", "😟"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          );
        };

        msg
          .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
          .then(async collected => {
            const reaction = collected.first();
            if (reaction.emoji.name == "😄") memnunluk = 5;
            if (reaction.emoji.name == "🙂") memnunluk = 4;
            if (reaction.emoji.name == "😕") memnunluk = 3;
            if (reaction.emoji.name == "😞") memnunluk = 2;
            if (reaction.emoji.name == "😟") memnunluk = 1;
            const embed3 = new Discord.MessageEmbed().setTitle(
              ":e_mail: Bug Bildir Sistemi"
            ).setDescription(`
:pencil: **Bug'u yazın.**
**• Bug'u yazmak için 60 saniyeniz vardır.**

        `);
            message.channel.send(embed3);
            let yazıqwe;
            const filter = res => res.author.id === message.author.id;
            const turn = await message.channel.awaitMessages(filter, {
              max: 1,
              time: 30 * 60 * 60
            });
            yazıqwe = turn.first().content;
            let idqwe = makeid(8);
            let webhook = await message.channel.createWebhook(
              `Package Destek・ID: ${idqwe}`,
              {
                avatar: client.user.avatarURL()
              }
            );
            await db.set(`${idqwe}.bug`, yazıqwe);
            await db.set(`${idqwe}.id`, webhook.id);
            await db.set(`${idqwe}.token`, webhook.token);
            await db.set(`${idqwe}.user`, message.author.id);
            /*              if (talkedRecently.has(message.author.id)) {
      message.reply(
        "Hopp, dur bakalım. Bu komutu 12 saatte bir kullanabilirsin " +
          message.author
      );
    } else {
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 43200000);
    }*/
            let başarılımq = new Discord.MessageEmbed()
              .setDescription(
                `
<:tikflnab:823815132878602270> Bug başarıyla bildirildi.
**ID:** \`${idqwe}\`
**Botumuz Sizin İsteklerinizle Güzelleşiyor!**
    `
              )
              .setFooter(
                "Not: Eğer Küfür Kullanımı Yaptıysanız Otomatik Olarak Karalisteye Eklendiniz!"
              );
            message.channel.send(başarılımq);
            const oneriwebhook = new Discord.WebhookClient(
              //https://discordapp.com/api/webhooks/855860166092521514/D069CmPoCTwYsgKJpAZhyMWjWroVzHmbFhzdilE4-m-qAi7Kxa8hugNIeBLeGC6JKHYT
              "855860166092521514",
              "D069CmPoCTwYsgKJpAZhyMWjWroVzHmbFhzdilE4-m-qAi7Kxa8hugNIeBLeGC6JKHYT"
            );
            let bildirdiamk = new Discord.MessageEmbed().setColor("RANDOM")
              .setDescription(`
        **Bana bir şikayette bulundular!**
        Kişi: \`${message.author.tag}\` (\`${message.author.id}\`)
        Bildirdiği sunucu: \`${message.guild.name}\` (\`${message.guild.id}\`)
        Bildirdiği kanal: \`${message.channel.name}\` (\`${message.channel.id}\`)
        Report ID: \`${idqwe}\`
        Memnuniyeti: \`${memnunluk}\`
        Önerisi: \`${yazıqwe}\`      
        `);
            //nereye else koycan ab kanka eer küfür varsa bize bildircek kanalada küfür olduğu için karalisteyealdınız atcak
            let filtreler = [
              "amk",
              "aq",
              "mal",
              "botu silin",
              "ananızı sikim",
              "orospu cocukları",
              "oç",
              "oc",
              "31"
            ];
            let küfür;
            filtreler.forEach(async a => {
              if (küfür) return;

              if (yazıqwe.toLowerCase() == a) {
                küfür = true;
                bildirdiamk.addField(
                  "Karaliste",
                  `${message.author.tag} küfür kullandığı için karalisteye eklendi! Küfür: ${a}`
                );
                let sebep = "Bildiri Komutunda Küfür Kullanımı.";
                await db.set(`karalist_${message.author.id}`, sebep);
              }
            });
            oneriwebhook.send(bildirdiamk);
          });
      });
    } else {
      return;
    }
  } catch (err) {
    global.errs(err, message);
  }
};

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["öneri", "öner", "report", "bug", "şikayet"],
  permLevel: 0
};

exports.help = {
  name: "bildir",
  description: "",
  usage: "bildir"
};
