const Discord = require("discord.js");
const moment = require("moment");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
  let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
  if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Lütfen bir rol etiketleyin ! \n\n **Kullanım :** \n /\`rolbilgi @rol|rolid \``))
    let bahsedilebilir;
    if(rol.mentionable) bahsedilebilir = "<a:package_online:855874951277445121>"
    else bahsedilebilir = "<a:package_offline:855874951482966037>";
    let görüntülenme;
    if(rol.hoist) görüntülenme = "<a:package_online:855874951277445121>"
    else görüntülenme = "<a:package_offline:855874951482966037>";
    let entegrasyon;
    if(rol.managed) entegrasyon = "<a:package_online:855874951277445121>"
    else entegrasyon = "<a:package_offline:855874951482966037>";

    let kişiler = rol.members
let arr = new Array();
rol.members.forEach(user => {
	arr.push(`\`${user.user.tag}\``);
});
    let bruh = arr.join(' | ')
    let herkes;
  if(kişiler.size > 10) herkes = "Bu role sahip kişiler çok fazla**...**";
  else herkes = bruh;
    
  let guild = message.guild
  if(dil == 'TR'){
  const sb = new Discord.MessageEmbed()
  .setColor(rol.hexColor)
  .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))  
 .setThumbnail(`http://colorhexa.com/${rol.hexColor}.png`)
  .setDescription(`
  **${rol.name} İsimli Rolün Bilgileri**
  
  <:package_inbox:855874951491092510> **Rol** : ${rol}
  :link: **IDsi** : \`${rol.id}\`
  <:package_growth:855874951457275944> **Oluşturulma Tarihi** : \`${moment(rol.createdAt).format('DD/MM/YYYY')}\`
  <:package_gift:855874951236419586> **Rengi** : \`${rol.hexColor}\`
  
  ${bahsedilebilir} Bahsedilebilir mi?
  ${entegrasyon} Entegrasyon mu?
  ${görüntülenme} Bu role sahip üyeleri diğer çevrimiçi üyelerden ayrı olarak görüntüleniyor mu?
  
  **Bu roldeki kişiler [${kişiler.size}]**
  ${herkes}
  `)
  .setFooter(`${client.user.username} ${ayarlar.sürüm} | /yardım`, client.user.avatarURL())
  message.channel.send(sb)
  } else if(dil == 'EN'){
    const sb = new Discord.MessageEmbed()
  .setColor(rol.hexColor)
  .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))  
 .setThumbnail(`http://colorhexa.com/${rol.hexColor}.png`)
  .setDescription(`
  **${rol.name} Information of the Named Role**
  
  <:adinibilmiom:822027744468402207> **Role** : ${rol}
  <:id:822027359220924466> **Identifiant** : \`${rol.id}\`
  <:tarihfln:822058653309730867> **Date de création** : \`${moment(rol.createdAt).format('DD/MM/YYYY')}\`
  <:etiket:822027845634490368> **Color** : \`${rol.hexColor}\`
  
  ${bahsedilebilir} Can it be mentioned?
  ${entegrasyon} Is it integration?
  ${görüntülenme} Are members with this role displayed separately from other online members?
  
  **People in this role [${kişiler.size}]**
  ${herkes}
  `)
  .setFooter(`${client.user.username} ${ayarlar.sürüm} | /help`, client.user.avatarURL())
  message.channel.send(sb)
  }
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rolbilgi", "rol-bilgi", "rb"],
    permLevel: 0
};

exports.help = {
    name: "rolbilgi",
    description: "", 
    usage: "sunucubilgi"
};