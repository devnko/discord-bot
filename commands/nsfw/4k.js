const Discord = require("discord.js")
const superagent = require('superagent')
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {

if (message.channel.nsfw === true) {
  superagent.get('https://nekobot.xyz/api/image').query({ type: '4k'}).end((err, response) => {
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
    aliases: ['4k']
}

exports.help = {
    name: "4k",
    description: "4K Gifler Atar. (+18)",
    usage: "w!4k"
}