const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
 if(dil == 'TR'){
    const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
  const u = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))  
  .setColor('GREEN')
  .setDescription(`**Bot şu kadar zamandır aktif :** \n ${uptime}`)
  .setFooter(`${client.user.username} ${ayarlar.sürüm} | /yardım`, client.user.avatarURL())
  message.channel.send(u)
 } else if(dil == 'EN'){
    const uptime = moment.duration(client.uptime).format(" D [day], H [hours], m [minutes], s [secondes]")
  const u = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))  
  .setColor('GREEN')
  .setDescription(`**The bot has been online for :** \n ${uptime}`)
  .setFooter(`${client.user.username} ${ayarlar.sürüm} | /yardım`, client.user.avatarURL())
  message.channel.send(u)
 }
    
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["uptime"],
    permLevel: 0
};

exports.help = {
    name: "uptime",
    description: "", 
    usage: "uptime"
};