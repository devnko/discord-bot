const Discord = require("discord.js")
const superagent = require('superagent')
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {

if (message.channel.nsfw === true) {
  superagent.get('https://nekobot.xyz/api/image').query({ type: 'anal'}).end((err, response) => {
   // msg.channel.send({ file: response.body.message });
  const embed = new Discord.MessageEmbed()
  .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
  .setColor(client.ayarlar.embedRenk)
  .setImage(response.body.message)
  .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
  return message.channel.send(embed)
  });
} else {
  const embed = new Discord.MessageEmbed()
  .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
  .setColor(client.ayarlar.embedRenk)
  .setDescription(`Hata! Bu kanal **NSFW** olmadığı için belirtilen komutu çalıştıramadım!`)
   .setImage("https://cdn.discordapp.com/attachments/812648913416749097/827073604990009354/engel.gif")
  .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
  return message.channel.send(embed)
}

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['anal']
}

exports.help = {
    name: "anal",
    description: "Anal Gifler Atar. (+18)",
    usage: "w!anal"
}