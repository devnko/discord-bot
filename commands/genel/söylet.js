const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(message.author.id !== "453624007586218014") return message.reply(
    new Discord.MessageEmbed()
  .setColor("912e2e")
  .setAuthor('Hata!', client.user.avatarURL())
  .setDescription("Bu işlemi gerçekleştirmek için yeterli yetkiye sahip değilsin. Bu komutu sadece sahibim <@!453624007586218014> kullanabilir.")
  .setFooter("bit.ly/packagebot・/söylet", message.author.avatarURL({dynamic:true}))
  .setTimestamp()
)

  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply(
    new Discord.MessageEmbed()
  .setColor("912e2e")
  .setAuthor('Hata!', client.user.avatarURL())
  .setDescription("Hatalı komut kullanımı. Yazacağım şeyi belirtmelisin..")
  .setFooter("bit.ly/packagebot・/söylet", message.author.avatarURL({dynamic:true}))
  .setTimestamp()
  );
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  aliases: ['soylet'],
  permLevel: 0,
};

exports.help = {
  name: 'söylet',
  description: 'söylet command by github.com/luvandevx',
  usage: 'söylet [söyletmek istediğiniz şey]'
};