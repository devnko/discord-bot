const Discord = require("discord.js");
var moment = require('moment')
exports.run = async (client, message, args, db, ayarlar) => {
  try {
let abobayraknaptınnnnnnnnnn = {"01": "Ocak","02": "Şubat","03": "Mart","04": "Nisan","05": "Mayıs","06": "Haziran","07": "Temmuz","08": "Ağustos","09": "Eylül","10": "Ekim","11": "Kasım","12": "Aralık"}
const alıncakrol = await db.fetch(`${message.guild.id}.kayıtalıncakrol`)
const günlük = await db.fetch(`${message.guild.id}.kayıtgünlük`)
const kanal = await db.fetch(`${message.guild.id}.kayıtkanal`)
if(!kanal) return global.hata(message,`Kayıt kanalını ayarlamadan bu komut çalışamaz.`,true)
const yetkilirol = await db.fetch(`${message.guild.id}.kayıtyetkilirol`)
if(!yetkilirol) return global.hata(message,`Üyeleri kaydedebilecek olan rolü ayarlamadan bu komut çalışamaz.`,true)
const verilcekrol = await db.fetch(`${message.guild.id}.kayıterkekrol`)
if(!verilcekrol) return global.hata(message,`**Kaydolduğunda verilecek olan erkek rolü ayarlamadan bu komut çalışamaz.**`,true)
if(!message.member.roles.cache.some((r) => r.id === yetkilirol)) return global.hata(message, `**Bu komutu kullanabilmek için <@&${yetkilirol.id}> rolüne sahip olmalısın.**`, true)
if(message.channel.id !== kanal) return global.hata(message,`Sadece kayıt kanalında üyeleri kayıt edebilirsiniz.`,true)
const üye = message.mentions.members.first()
if(!üye) return global.hata(message,`**Kayıt etmek için lütfen erkek bir kullanıcı belirtin!**`,true)
üye.roles.add(message.guild.roles.cache.get(verilcekrol));
üye.roles.remove(message.guild.roles.cache.get(alıncakrol)).catch(err=>{console.log('alıncak rol ayarlanmamış.')})
await db.add(`${message.guild.id}.${message.author.id}.kayıterkeketti`, 1)
await db.add(`${message.guild.id}.${message.author.id}.toplamkayit`, 1)
await db.add(`${message.guild.id}.toplamerkekkayit`, 1)
await db.add(`${message.guild.id}.toplamkayıt`, 1)
await db.push(`kayıterkeklog_${message.author.id}_${message.guild.id}`, { kayıtTürü: "Erkek", kayıtEttiğiKişi: üye.id, toplamKayıtSayısı: await db.fetch(`${message.guild.id}.${message.author.id}.kayıterkeketti`) + await db.fetch(`${message.guild.id}.${message.author.id}.kayıtkızetti`), kayıtZaman: moment(Date.now()).format('DD/MM/YYYY HH:mm') })
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`${global.tikozel} Yeni üye başarıyla kaydoldu.`)
.addField(':label: Kaydolanın kullanıcı adı:', üye.user.tag, true)
.addField(':id: ID Numarası:', üye.user.id, true)
.addField(':briefcase: Kaydeden Yetkili:', message.author.tag, true)
.addField(":calendar_spiral: Discord'a Kaydolma Tarihi:", `${moment(üye.user.createdAt).format('DD')} ${abobayraknaptınnnnnnnnnn[moment(üye.user.createdAt).format('MM')]} ${moment(üye.user.createdAt).format('YYYY h:mm:ss')}`, true)
).then(
client.channels.cache.get(günlük).send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
**${message.author} ${üye.user.tag} Kişisini Kaydetti!**
`)).catch(err=>{console.log('kayıt günlük sistemi kapalı')})
)
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["erkek"],
  permLevel: 0
};

exports.help = {
  name: "erkek",
  description: "",
  usage: "erkek"
};
