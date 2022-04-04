const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
const member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || message.author;
/*if(member.id == "548145246983159808") return message.channel.send('Sahibimin avatarını alamazsın!');
if(member.id == "699597747657113653") return message.channel.send('Sahibimin avatarını alamazsın!');*/
if(dil == 'EN'){
const a = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`Avatar Of **${member.username}**`)
.setImage(member.displayAvatarURL({dynamic: true}))
.setFooter(`${client.user.username} ${ayarlar.sürüm} | !!yardım`, client.user.avatarURL())
message.channel.send(a)
} else 
if(dil == 'TR'){
const a = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`**${member.username}**'nin Profil Fotoğrafı.'`)
.setImage(member.displayAvatarURL({dynamic: true}))
.setFooter(`${client.user.username} ${ayarlar.sürüm} | !!yardım`, client.user.avatarURL())
message.channel.send(a)
}
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["avatar", "av", "pp"],
    permLevel: 0
};

exports.help = {
    name: "avatar",
    description: "", 
    usage: "avatar"
};