const Discord = require('discord.js');

exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
try {
  //örnek olsun editleriz
//if (dil == null) dil = 'TR'
  //let dil = "TR"
if(dil == 'TR') {
    let count = 0
    let herkes = message.guild.members.cache.filter(m => !m.user.bot).size;
    let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let çevrimiçi = message.guild.members.cache.filter(m => m.presence.status !== "offline").size
    const say = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setTitle(`${message.guild.name}`)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`
**<:kategorifln:824937340568993812> Toplam:** \`${message.guild.memberCount}\`
**<:usermemberfln:822027286219063297> Üyeler:** \`${herkes}\`
**<:bots2fln:824940000923746344> Botlar:** \`${botlar}\`   
     
**<:onlinefln:822046483736952843> Çevrimiçi :** \`${message.guild.members.cache.filter(o => o.presence.status === 'online').size}\` 
**<:idlefln:822046618286030889> Boşta: **\`${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}\`
**<:dndfln:822046372437164032> Rahatsız Etmeyin : ** \`${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}\`
**<:offlinefln:822046713115312138> Çevrimdışı : **\`${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}\`    
    `)
.setFooter(`${client.user.username} ${ayarlar.sürüm} | /yardım`, client.user.avatarURL())
message.channel.send(say) 
}
else if(dil == 'EN') {
    let count = 0
    let herkes = message.guild.members.cache.filter(m => !m.user.bot).size;
    let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let çevrimiçi = message.guild.members.cache.filter(m => m.presence.status !== "offline").size
    const say = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setTitle(`${message.guild.name}`)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`
**<:kategorifln:824937340568993812> Total :** \`${message.guild.memberCount}\`
**<:usermemberfln:822027286219063297> Humans :** \`${herkes}\`
**<:bots2fln:824940000923746344> Bots :** \`${botlar}\`   
     
**<:onlinefln:822046483736952843> Online :** \`${message.guild.members.cache.filter(o => o.presence.status === 'online').size}\` 
**<:idlefln:822046618286030889> Idle : **\`${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}\`
**<:dndfln:822046372437164032> Do No Disturb : ** \`${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}\`
**<:offlinefln:822046713115312138> Offline : **\`${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}\`    
    `)
.setFooter(`${client.user.username} ${ayarlar.sürüm} | /yardım`, client.user.avatarURL())
message.channel.send(say) 
}
} catch(err) {
  global.errs(err, message)
}
} 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["üyedurum","say","members"],
    permLevel: 0
};

exports.help = {
    name: 'say'
}
