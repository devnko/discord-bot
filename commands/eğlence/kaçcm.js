const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    const { MessageEmbed } = require('discord.js');
    const user = message.mentions.users.first()
    if (user) {
      const embed = new Discord.MessageEmbed()

      var okaçcm = Math.floor(Math.random(50) * 50)

      const embed1 = new MessageEmbed()

      .setColor("e3e3e3")
      .setAuthor(`${message.author.tag} Ölçtürdü!`)
      .setDescription(`${user}'in Aleti \`${okaçcm}\`cm..`)
      .setFooter(`${client.user.username} ${ayarlar.sürüm} | /yardım`, client.user.avatarURL())
      .setTimestamp()
      
      message.channel.send(embed1)
    } else {

var kaçcm = Math.floor(Math.random(100) * 100)

const kanal = new MessageEmbed()

.setColor("e3e3e3")
.setAuthor(`${message.author.tag} Ölçtürdü!`)
.setDescription(`Senin Alet \`${kaçcm}\`cm..`)
.setFooter("bit.ly/packagebot・/kaçcm")
.setTimestamp()

message.channel.send(kanal);

}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kaçcm'],
    permLevel: 0
};

exports.help = {
    name: 'kaçcm',
    description: 'kaçcm command by github.com/luvandevx',
    usage: 'kaçcm'
 }