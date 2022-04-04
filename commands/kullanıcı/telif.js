const Discord = require('discord.js');

exports.run = function(client, message) {
    
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(client.user.username, client.user.avatarURL())
.setDescription("Bu botun içeriği, tasarımı ve botun içindeki tüm dokümanlara ait hakları saklıdır. Botun içerisinde yer alan komutların aksi belirtilmediği sürece, botun içindeki hiçbir komut unsurları ve diğer unsurlar izin alınmaksızın __kopyalanamaz, başka yere taşınamaz, alıntı yapılamaz, internet üzerinde veya her ne şekilde olursa olsun yayınlanamaz ve kullanılamaz.__ Bu botu kullanan kullanıcılar, botun telif hakkı konusunda **AlppElla ve SafaCey'in** tüm talep ve açıklamalarını kabul ettiklerini beyan ve taahhüt ederler. Hakları saklı tutulmuş eserler, sahiplerinin muvafakati olmadan hiç bir suretle __çoğaltılamaz, alıntı yapılamaz, yayınlanamaz, başka bir yerde kullanılamaz__.")
.setFooter("© Kodlar yasal haklar çerçevesinde koruma altına alınmıştır.")
.setTimestamp()
message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['telif'],
  permLevel: 0 
};

exports.help = {
  name: 'telif',
  description: 'yardım command by github.com/luvandevx',
  usage: 'telif'
};