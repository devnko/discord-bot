const Discord = require('discord.js');

exports.run = function(client, message) {
    
const embed = new Discord.MessageEmbed()
.setColor('e3e3e3')
.setAuthor(client.user.username, client.user.avatarURL())
.setDescription("AH SANA TOKEN")
.setFooter("bit.ly/packagebot・Komut " + message.author.tag + " tarafından kullanıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp()
.setImage("https://cdn.discordapp.com/attachments/489386777711214595/853002089952313384/4tMPxPf9.png")
message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['token'],
  permLevel: 0 
};

exports.help = {
  name: 'token',
  description: 'yardım command by github.com/luvandevx',
  usage: 'token'
};