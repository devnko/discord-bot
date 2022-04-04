  const Discord = require("discord.js");
const moment = require("moment");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
  let seviye = {
      "NONE": "Sunucu Doğrulaması Yok.",
      "LOW": "Düşük (E-posta Doğrulaması)",
      "MEDIUM": "Orta (5 Dk Üyelik)",
      "HIGH": "Yüksek (10 Dk Üyelik)",
      "VERY_HIGH": "Çok Yüksek (Telefon Doğrulamalı)"
    }
  const emojiList = message.guild.emojis.cache
      .map(e => e.toString())
      .join(" **|** ");
    let emojiler;
  if(message.guild.emojis.cache.size > 10) emojiler = "Emojiler çok fazla**...**";
  else emojiler = emojiList;
    let rolleri;
    if((message.guild.roles.cache.size - 1) > 10) rolleri = "Roller çok fazla**...**"
    else rolleri = message.guild.roles.cache.filter(b => b.name !== "@everyone").map(a => a).join(', ') || 'Kullanıcının Rolü Bulunmuyor.'
   
  let guild = message.guild
  if(dil == 'TR'){
  const sb = new Discord.MessageEmbed() //\`${guild.owner.user.tag || 'Belirlenemedi.'}\` (<@${guild.owner.id || 'Belirlenemedi.'}>)
  .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))  
  .setThumbnail(guild.iconURL({dynamic:true}))
  .setDescription(`
  <:package_owner:855874951574847508> **Sunucunun Sahibi** : \`Belirlenemedi.\` (Belirlenemedi.)
  <:package_plus:855874951659257926> **Sunucunun Adı** : \`${guild.name}\` 
  :star: **Premium** : ${await db.fetch(`${message.guild.id}.pre`) ? '<a:package_online:855874951277445121> Aktif!': '<a:package_offline:855874951482966037> Kapalı!'}
  <:package_growth:855874951457275944> **Sunucudaki Üye Sayısı** : \`${guild.memberCount.toLocaleString()}\`
  <:package_stats:855874951558987796> **Kanal Sayısı** : \`${guild.channels.cache.size}\`
  <:package_global:855874951855734824> **Sunucunun Bölgesi** : Yakında.
  <:package_shield:855874951663845406> **Sunucunun Güvenlik Seviyesi** : \`${seviye[message.guild.verificationLevel]}\`
  :link: **Sunucunun ID'si** : \`${guild.id}\`
  <:package_partnerwait:855874951483490314> **Sunucunun Oluşturulma Tarihi** : ${moment(guild.createdAt).format('DD/MM/YYYY')}
  <:package_inbox:855874951491092510> **Emojiler [${guild.emojis.cache.size}]** : ${emojiler}
  <:package_inbox:855874951491092510> **Roller [${guild.roles.cache.size}]** : ${rolleri}
  `)
  .setFooter(client.ayarlar.footer, client.user.avatarURL())
  message.channel.send(sb)
  }
  if(dil == 'EN'){
  const sb = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))  
  .setThumbnail(guild.iconURL({dynamic:true}))
  .setDescription(`
  <:package_owner:855874951574847508> **Owner** : \`${guild.owner.user.tag}\` (<@${guild.owner.id}>)
  <:package_plus:855874951659257926> **Server Name** : \`${guild.name}\` 
  :star: **Premium** : ${await db.fetch(`${message.guild.id}.pre`) ? '<:onlinefln:822046483736952843> Active!': '<:dndfln:822046372437164032> Inactive!'}
  <:package_growth:855874951457275944> **Number of members** : \`${guild.memberCount.toLocaleString()}\`
  <:package_stats:855874951558987796> **Channel Count** : \`${guild.channels.cache.size}\`
  <:package_global:855874951855734824> **Region on the server** : Soon.
  <:package_shield:855874951663845406> **Server security level** : \`${seviye[message.guild.verificationLevel]}\`
  :link: **Identifiant** : \`${guild.id}\`
  <:package_partnerwait:855874951483490314> **Date de création** : ${moment(guild.createdAt).format('DD/MM/YYYY')}
  <:package_inbox:855874951491092510> **Emojis [${guild.emojis.cache.size}]** : ${emojiler}
  <:package_inbox:855874951491092510> **Roles [${guild.roles.cache.size}]** : ${rolleri}
  `)
  .setFooter(client.ayarlar.footer, client.user.avatarURL())
  message.channel.send(sb)
  }
    
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sunucubilgi", "sunucu-bilgi", "sb", "server-info","serverinfo"],
    permLevel: 0
};

exports.help = {
    name: "sunucubilgi",
    description: "", 
    usage: "sunucubilgi"
};