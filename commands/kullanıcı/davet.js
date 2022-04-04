const Discord = require('discord.js');

exports.run = (client, message) => {
let s = "https://fireofeternity.statuspage.io"
  const davet = new Discord.MessageEmbed()
  .setColor(message.guild.me.displayColor)
  .setAuthor('Beni Ekler Misin?', message.author.displayAvatarURL({dynamic: true}))
  .setThumbnail(client.user.avatarURL())
 // .setImage("https://cdn.discordapp.com/attachments/729682689996750851/730082473853321236/botgif.gif")
.setDescription(`
> <:package_bot:857164756725006346> Alttaki linklerden bot ile ilgili linklere **ulaşabilirsiniz**. Herhangi bir bug/hata bulursanız [!!tasviye](https://discord.gg/wGEGQxpVQN) veya [!!öneri](https://discord.gg/wGEGQxpVQN) ile bize iletebilirsiniz.
> **<:package_ok:857273863494828093> Sunucuma nasıl eklerim?**
> Sunucuna eklemek istiyorsan [buraya tıklayarak](https://bit.ly/packagebot) ekleyebilirsin.
> **<:package_global:855874951855734824> Web Sitesi(Aktif Değil)** ~~[Yönetim Paneli]~~ [Website](https://discord.gg/wGEGQxpVQN) 
> **<:package_rarrow:855874951591362580> [Bot Durumlarını görmek için tıkla!](${s})**
> **<:envelope:799747394236973087> Destek Sunucumuz**
> <a:package_hyper:855874951492272138> [Destek Sunucusuna](https://discord.gg/zoom) katılarak sizde güzel sohbetlere katılabilirsiniz!
> <:gift:799746867884851231> [Botu Ekle!](https://bit.ly/packagebot)
`)
.addField('> Tüm Linkler;', `
**[[Botu Ekle](https://bit.ly/packagebot)]** - **[[Destek Sunucusu](${global.desteksw})]** - **[[Website(Aktif Değil)](https://discord.com)]** - **[[Bot Durumları](${s})]**
`)
//.addField('**• Web Sitesi**', ` ~~[Yönetim Paneli]~~ \n [Website](https://bot.fireofeternity.com) `)
//.addField('**• DBL **', `[DBL Linki](https://top.gg/bot/734819219618660373) \n [Oy Linki](https://top.gg/bot/734819219618660373/vote)`)
.setFooter(client.ayarlar.footerEmbed, message.author.displayAvatarURL({dynamic: true}))
message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet', 'd', 'nasıleklerim', 'invite','site','website','desteksunucusu','botdurum'],
  permLevel: 0
}
exports.help = {
  name: "davet"
}