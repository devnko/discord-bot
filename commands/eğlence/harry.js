const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join(' '); 

  if(yazi.length <= 0) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. Logoda kullanacağım yazıyı belirtmelisiniz. \n Örnek kullanım `/harry [yazı]`")
    .setFooter("bit.ly/packagebot・/harry", message.author.avatarURL({dynamic : true}))
    .setTimestamp())

  const eratleharry = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=harry-potter-logo&text=${yazi}`
  .replace(' ', '+')

  
 message.channel.send(new Discord.MessageEmbed()
 .setColor("e3e3e3")
 .setAuthor('Oluşturuldu!', client.user.avatarURL())
 .setDescription(`Harry Potter logosu belirttiğiniz \`${yazi}\` ile başarıyla oluşturuldu.`)
 .setImage(`${eratleharry}`)
 .setFooter("bit.ly/packagebot・/harry", message.author.avatarURL({dynamic : true}))
 .setTimestamp())}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['harry'],
    permLevel: 0
}

exports.help = {
    name: 'harry',
    description: 'harry command by github.com/luvandevx',
    usage: 'harry'
}