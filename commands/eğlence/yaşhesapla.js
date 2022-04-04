const Discord = require('discord.js');
const { Database } = require("npm.db");
const db = new Database("database")

exports.run = async (client, message, args) => {

function calculateAge(birthDay, birthMonth, birthYear)
{
  let todayDate = new Date();
  let todayYear = todayDate.getFullYear();
  let todayMonth = todayDate.getMonth();
  let todayDay = todayDate.getDate();
  let age = todayYear - birthYear;
 
  if (todayMonth < birthMonth - 1)
  {
    age--;
  }
 
  if (birthMonth - 1 == todayMonth && todayDay < birthDay)
  {
    age--;
  }
  return age;
}
  
  if(!args[0]) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Hata!', client.user.avatarURL())
    .setDescription("<:package_cross:85331117827306292> Hatalı komut kullanımı. Doğum gününü belirtmen gerek. \n Örnek kullanım `/yaşhesapla [gün (sayı)] [ay (yazı)] [yıl (sayı)]`")
    .setFooter("bit.ly/packagebot・Komut " + message.author.tag + " tarafından kullanıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
)

  if(isNaN(args[0])) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Hata!', client.user.avatarURL())
    .setDescription("<:package_cross:85331117827306292> Hatalı komut kullanımı. Sadece sayı ve yazı kullanılabilir. \n Örnek kullanım `/yaşhesapla [gün (sayı)] [ay (yazı)] [yıl (sayı)]`")
    .setFooter("bit.ly/packagebot・Komut " + message.author.tag + " tarafından kullanıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
)

  if(!args[1]) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Hata!', client.user.avatarURL())
    .setDescription("<:package_cross:85331117827306292> Hatalı komut kullanımı. Doğduğun ayı belirtmen gerek. \n Örnek kullanım `/yaşhesapla [gün (sayı)] [ay (yazı)] [yıl (sayı)]`")
    .setFooter("bit.ly/packagebot・Komut " + message.author.tag + " tarafından kullanıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
)

  if(!args[2]) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Hata!', client.user.avatarURL())
    .setDescription("<:package_cross:85331117827306292>Hatalı komut kullanımı. Doğum yılını belirtmen gerek. \n Örnek kullanım `/yaşhesapla [gün (sayı)] [ay (yazı)] [yıl (sayı)]`")
    .setFooter("bit.ly/packagebot・Komut " + message.author.tag + " tarafından kullanıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
)

  if(isNaN(args[2])) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Hata!', client.user.avatarURL())
    .setDescription("<:package_cross:85331117827306292> Hatalı komut kullanımı. Sadece sayı ve yazı kullanılabilir. \n Örnek kullanım `/yaşhesapla [gün (sayı)] [ay (yazı)] [yıl (sayı)]`")
    .setFooter("bit.ly/packagebot・Komut " + message.author.tag + " tarafından kullanıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
)
  
  let ay = args[1].replace('Ocak', '1').replace('Şubat', '2').replace('Mart', '3').replace('Nisan', '4').replace('Mayıs', '5').replace('Haziran', '6').replace('Temmuz', '7').replace('Ağustos', '8')
  .replace('Eylül', '9').replace('Ekim', '10').replace('Kasım', '11').replace('Aralık', '12');
  
  message.channel.send(
    new Discord.MessageEmbed()
    .setColor("e3e3e3")
    .setAuthor('Hesaplandı!', client.user.avatarURL())
    .setDescription(`\`${message.author.tag}\` şu anda tam olarak \`${calculateAge(args[0],ay,args[2])}\` yaşındasın.`)
    .setFooter("bit.ly/packagebot・Komut " + message.author.tag + " tarafından kullanıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
)

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yaşhesapla'],
  permLevel: 0
}

exports.help = {
  name: 'yaşhesapla',
  description: 'yaşhesapla command by github.com/luvandevx',
  usage: 'yaşhesapla [gün (sayı)] [ay (yazı)] [yıl (sayı)]'
};