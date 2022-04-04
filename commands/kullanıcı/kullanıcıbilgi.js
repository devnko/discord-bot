const Discord = require("discord.js");
const moment = require("moment");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  let user = member.user; //zewQa
      let oynuyor;
    if((user.presence.activities.length != 0) && (user.presence.activities[0].name == "Custom Status")) {
      oynuyor = `${user.presence.activities[0].state || `Sadece Emoji Bulunuyor !`}`;
    } else if(user.presence.activities.length != 0) {
      oynuyor = user.presence.activities[0].name;
    }else{
      oynuyor = "Herhangi Bir Oynuyoru Yok."
    }
  let rozetler = false;
  if (user.flags.toArray().length <= 0) {
      rozetler = false;
    } else {
      rozetler = true;
    }
  let mentionFlags = user.flags
.toArray()
.join(" ")
.replace('HOUSE_BRAVERY', '<:package_bravery:855874951478902804>')  
.replace('HOUSE_BRILLIANCE', '<:package_brilliance:855874951537492028>')
.replace('HOUSE_BALANCE', '<:package_balance:855874951101153290>')
.replace('EARLY_VERIFIED_DEVELOPER', '<:package_earlyverified:855874951440629760>')
.replace('DISCORD_EMPLOYEE', '<:package_staff:855874951660044298>')
.replace('PARTNERED_SERVER_OWNER', '<:package_newpartner:855874951545749545>')
.replace('HYPESQUAD_EVENTS', '<a:package_hyper:855874951492272138>')
.replace('BUGHUNTER_LEVEL_1', '<:package_bughunterlvl1:855874951500005376>')
.replace('EARLY_SUPPORTER', '<:package_early:855874951441940520>')
.replace('TEAM_USER', 'Takım Üyesi')
.replace('SYSTEM', '<:package_desktop:855874951914979368>')
.replace('BUGHUNTER_LEVEL_2', '<:package_bughunterlvl2:855874951420837918>')
.replace('VERIFIED_BOT', '<:package_verifiedbot:855874951633174568>');
        let oyunlar = [];
    user.presence.activities.forEach(slm => {
      if (slm.type === "CUSTOM_STATUS") {
        oyunlar.push(`${slm.emoji ? slm.emoji : ""} ${slm.state}`);
      } else {
        oyunlar.push(
          `**${slm.name}** ${slm.type
            .replace("PLAYING", "oynuyor")
            .replace("STREAMING", "yayınlıyor")
            .replace("LISTENING", "dinliyor")
            .replace("WATCHING", "izliyor")}`
        );
      }
    });
    let nitrolu;
    let boostlu;
  let avatar = user.displayAvatarURL({ dynamic: true, size: 1024 });
    if (avatar.endsWith(".gif?size=1024")) nitrolu = "<:package_nitro:855874951637631016>";
    else nitrolu = " "; //zewqa sjhsgshjks
    if(member.roles.cache.find(a=>a.name == 'Server Booster')) boostlu = "<:boostlu:828552000701595658>"; //ab unutmusum
    else boostlu = " "; 
    let tümrozet = `${rozetler ? mentionFlags : " "} ${nitrolu} ${boostlu}`
    if(!tümrozet) tümrozet = "Rozeti Yok"
    let rolleri;
    if((member.roles.cache.size - 1) > 10) rolleri = "Kullanıcının rolleri çok fazla."
    else rolleri = member.roles.cache.filter(b => b.name !== "@everyone").map(a => a).join(', ') || 'Kullanıcının Rolü Bulunmuyor.'
  if(dil == 'TR'){
  const kb = new Discord.MessageEmbed()
  .setAuthor(`${user.username}`, user.displayAvatarURL({dynamic: true}))  
  .setColor('RANDOM')
  .setThumbnail(user.displayAvatarURL({dynamic: true}))
  .setDescription(`
   > **Kullanıcı Bilgileri;**
   
   <:package_rarrow:855874951591362580> **Kullanıcı** : \`${user.tag}\` (${user})
   <:package_verifiedbot:855874951633174568> **Rozetleri** : ${tümrozet || 'Kullanıcıda Rozet Bulunmıyor.'}
   :link: **ID Bilgisi** : \`${user.id}\`
   <:package_partnerwait:855874951483490314> **Hesabının Oluşturulma Tarihi** : ${moment(user.createdAt).format('DD/MM/YYYY')}
   
   > **Diğer Kullanıcı Bilgileri;**
   
   <:package_plus:855874951659257926> **Aktivitesi** : ${oynuyor}
   <:package_plus:855874951659257926> **Durumu** : ${user.presence.status
           .replace("online", "<a:package_online:855874951277445121> Çevrimiçi")
           .replace("idle", "<a:package_idle:855874951759921162> Boşta")
           .replace("dnd", "<a:package_dnd:855874951482966037> Rahatsız Etmeyin")
           .replace("offline", "<a:package_dnd:855874951482966037> Çevrimdışı")}
           <:package_plus:855874951659257926> **Sunucudaki Adı** : ${member.displayName || 'Sunucudaki Adı Değiştirilmemiş.'}
           <:package_partnerwait:855874951483490314> **Sunucuya Giriş Tarihi** : ${moment(member.joinedAt).format('DD/MM/YYYY')}
   <:package_verifiedbot:855874951633174568> **Rolleri[${member.roles.cache.size - 1}]** : ${rolleri}
   `)
  .setFooter(`${client.user.username} ${ayarlar.sürüm} | !!yardım`, client.user.avatarURL())
  message.channel.send(kb)
  } else if(dil == 'EN'){
    const kb = new Discord.MessageEmbed()
  .setAuthor(`${user.username}`, user.displayAvatarURL({dynamic: true}))  
  .setColor('RANDOM')
  .setThumbnail(user.displayAvatarURL({dynamic: true}))
  .setDescription(`
   > **User info;**
   
  <:package_rarrow:855874951591362580> **Pseudonym** : \`${user.tag}\` (${user})
  <:package_verifiedbot:855874951633174568> **Badges** : ${tümrozet || 'Kullanıcıda Rozet Bulunmıyor.'}
  :link: **Identifiant** : \`${user.id}\`
  <:package_partnerwait:855874951483490314> **Account created on** : ${moment(user.createdAt).format('DD/MM/YYYY')}
  
  > **Member info;**
  
  <:package_plus:855874951659257926> **Activity** : ${oynuyor}
  <:package_plus:855874951659257926> **Status** : ${user.presence.status
          .replace("online", "<a:package_online:855874951277445121> Online")
          .replace("idle", "<a:package_idle:855874951759921162> Idle")
          .replace("dnd", "<a:package_dnd:855874951482966037> Do no disturb")
          .replace("offline", "<a:package_dnd:855874951482966037> Offline")}
  <:package_plus:855874951659257926> **Nickname** : ${member.displayName || 'No nickname.'}
  <:package_partnerwait:855874951483490314> **Joined the server on** : ${moment(member.joinedAt).format('DD/MM/YYYY')}
  <:package_verifiedbot:855874951633174568> **Roles [${member.roles.cache.size - 1}]** : ${rolleri}
  `)
  .setFooter(`${client.user.username} ${ayarlar.sürüm} | !!help`, client.user.avatarURL())
  message.channel.send(kb)
  }
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kullanıcıbilgi", "userinfo","user-info"],
    permLevel: 0
};

exports.help = {
    name: "kullanıcıbilgi",
    description: "", 
    usage: "kullanıcıbilgi  "
};













































/*const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = (client, message, args) => {// can ♡ b#1010

let mention = message.author;
if(message.mentions.members.first()) mention = message.mentions.members.first().user;
let mentionMember = message.guild.members.cache.get(mention.id);

let slm = {
  web: 'İnternet Tarayıcısı',
  desktop: 'Bilgisayar',
  mobile: 'Mobil'
}
let oyunlar = [];
mention.presence.activities.forEach(slm => {
if(slm.type === 'CUSTOM_STATUS') {
oyunlar.push(`${slm.emoji ? slm.emoji : ''} ${slm.state}`);
} else {
oyunlar.push(`**${slm.name}** ${slm.type.replace('PLAYING', 'oynuyor').replace('STREAMING', 'yayınlıyor').replace('LISTENING', 'dinliyor').replace('WATCHING', 'izliyor')}`)
}});

nitroDurum = false;
if(mention.presence.activities[0]) {
if(mention.presence.activities[0].emoji) {
if(mention.presence.activities[0].emoji.animated) nitroDurum = true;
};
};
if(mention.avatarURL().includes('.gif')) nitroDurum = true;

let rozetler = false;
if(mention.flags.toArray().length <= 0) {
rozetler = false;
} else {
rozetler = true;
};

let mentionFlags = mention.flags.toArray().join(' | ')
.replace('HOUSE_BRAVERY', 'Bravery')  
.replace('HOUSE_BRILLIANCE', 'Brilliance')
.replace('HOUSE_BALANCE', 'Balance')
.replace('VERIFIED_DEVELOPER', '1. Dönemde Doğrulanmış Bot Geliştiricisi')
.replace('DISCORD_EMPLOYEE', 'Discord Çalışanı')
.replace('PARTNERED_SERVER_OWNER', 'Discord Partner')
.replace('HYPESQUAD_EVENTS', 'HypeSquad Events')
.replace('BUGHUNTER_LEVEL_1', 'Bug Avcısı 1. Lvl')
.replace('EARLY_SUPPORTER', 'Erken Destekçi')
.replace('TEAM_USER', 'Takım Üyesi')
.replace('SYSTEM', 'Sistem')
.replace('BUGHUNTER_LEVEL_2', 'Bug Avcısı 2. Lvl')
.replace('VERIFIED_BOT', 'Onaylı Bot');
let sa;
if(mention.bot) {
sa = 'Bilinmiyor.'
} else {
sa = slm[Object.keys(mention.presence.clientStatus)[0]];
};
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(mention.tag, mention.avatarURL({dynamic: true}))
.setThumbnail(mention.avatarURL({dynamic: true}))
.addField('Durum', mention.presence.status.replace('online', 'Çevrimiçi').replace('idle', 'Boşta').replace('dnd', 'Rahatsız Etmeyin').replace('offline', 'Çevrimdışı'), true)
//.addField('İstemci Durumu', sa, true)
.addField('Ad', mention.username+` (${mention})`, true)
.addField('Takma Ad', mentionMember.displayName, true)
.addField('Katılma Tarihi', moment(mentionMember.joinedAt).format('D MMMM YYYY'), true)
.addField('Kayıt Tarihi', moment(mention.createdAt).format('D MMMM YYYY'), true)
.addField('Aktivite', oyunlar.join('\n') ? oyunlar.join('\n') : 'Hiç yok.')
.addField('Roller', mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') : 'Hiç yok.')
.addField('Rozetler', `${rozetler ? mentionFlags : 'Hiç yok.'}`)
.addField('Kullanıcı Kimliği', mention.id)
.setFooter(mention.username, mention.avatarURL({dynamic: true}))
.setTimestamp();

message.channel.send(embed);
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['profil'],
  permLevel: 0
};
 
exports.help = {
  name: 'ui'
};*/