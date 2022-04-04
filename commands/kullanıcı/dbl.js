const Discord = require("discord.js");

exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  const DBL = require("dblapi.js");
  const dbl = new DBL(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5ODUwMTY4MjA1NjAwMzU5NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIxMTg3NjU2fQ.j1NbiA5Etu55UToHjtV8CgLLQ8Mk5d3pyrGY-17kuBE`,client)
let mesaj = args.slice(0).join(" ");
  var botcuk = message.mentions.users.filter(s => s.ID !== client.user).first() || client.users.cache.get(args[0]) || client.users.cache.find(r => r.username === mesaj); //|| args.slice(1).join(" ")
  if (!botcuk) return message.channel.send("Lütfen bir bot adı giriniz (tüm adı aynı olmalı!).");
  if (!dbl.getBot(botcuk.id)) return message.channel.send("Böyle bir bot yok.");
  dbl.getBot(botcuk.id).then(async bot => {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${bot.username}`, botcuk.avatarURL({ dynamic: true }))
      .setColor(client.ayarlar.embedRenk)
	  .addField("<:dblke:787961791241781278> | Bot Bilgileri", `
	  > • | Bot Adı: **${bot.username}**
	  > • | Bot ID: **${bot.id}**
	  > • | Bot Tag: **#${bot.discriminator}**
	  > • | Bot Etiketleri: **${bot.tags.join(", ") || 'Yok.'}**
	  > • | Sunucu Sayısı: **${bot.server_count || "0"}**
	  > • | Kurucu(lar): <@${bot.owners.join(">\n<@")}>
	  > • | Prefix: **${bot.prefix}**
	  > • | Kütüphane: **${bot.lib || 'Yok.'}**
	  > • | Açıklama: **${bot.shortdesc}**
	  > • | Sertifika: **${bot.certifiedBot ? "Var" : "Yok"}**
	  `)
	  .addField("<:votefln:826765002303209514> | Oy Bilgileri", `
	  > • | Oy Sayısı: **${bot.points || "0"}**
	  > • | Aylık Oy Sayısı: **${bot.monthlyPoints || "0"}**
	  `)
	  .addField(":link: | Bağlantılar", `[Destek Sunucusu](https://discord.gg/${bot.support}) **|** [Github](${bot.github}) **|** [DBL Sayfası](https://top.gg/bot/${bot.id}) **|** [WebSite](${bot.website})`)
    .setFooter(client.ayarlar.embedFooter, botcuk.avatarURL({ dynamic: true }))
    message.channel.send(embed);
  }).catch(e=>{
   if (e == "Error: 404 Not Found")
       message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`:bomb: **Botu [DBL](https://top.gg) de Bulamadım.**`));
     else global.errs(e, message);
     return;
  })
  //
   
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dbl-bilgi"]
};

exports.help = {
  name: "dbl",
  description: "dbl",
  usage: "dbl"
};