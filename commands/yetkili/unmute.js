const Discord = require('discord.js');

exports.run = async (client, message, args, db) => {// can#0002

if(!message.member.hasPermission('MANAGE_MESSAGES')) return;

const muteRoleFetch = await db.fetch(`carl-mute-role.${message.guild.id}`);
if(!muteRoleFetch) return message.channel.send('Sunucunuzda muterolünü bulamadım ayarlamak için, `!!muterole create [isim] veya !!muterole create @roletiet` ile oluşturabilirsiniz');

if(!args[0]) return message.channel.send(`${message.content.split('unmute')[0]}unmute [kullanıcı] Bir üye belirtmeniz Gerekiyor!`);

let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.guild.members.cache.find(a => message.guild.members.cache.get(a.user.id).nickname && a.nickname.toLowerCase().includes(args[0].toLowerCase())) || message.guild.members.cache.find(a => a.user.username.toLowerCase().includes(args[0].toLowerCase()))
if(!member) return message.channel.send(`Kullanıcı "${args[0]}"ı bulamıyorum!`);
member.roles.remove(muteRoleFetch).then(() => {
return message.channel.send('Başarıyla Mute Açıldı, Mutesi Açılan Kullanıcı: **'+member.user.tag+'**');
})
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "mute"
};
 
exports.help = {
  name: 'unmute'
};