const Discord = require("discord.js")
const moment = require('moment');
moment.locale('tr');
exports.run = async(client, message, args, db) => {
    let kişi = message.mentions.members.first() || message.author
    let erkek = await db.fetch(`${message.guild.id}.${kişi.id}.kayıterkeketti`) || 0
    let kız = await db.fetch(`${message.guild.id}.${kişi.id}.kayıtkızetti`) || 0
    let terkek = await db.fetch(`${message.guild.id}.toplamerkekkayit`) || 0
    let tkayıt = await db.fetch(`${message.guild.id}.toplamkayıt`) || 0
    let tkız = await db.fetch(`${message.guild.id}.toplamkızkayit`) || 0
const kanal = await db.fetch(`${message.guild.id}.kayıtkanal`)
if(!kanal) return global.hata(message,`Kayıt kanalını ayarlamadan bu komut çalışamaz.`,true)
const yetkilirol = await db.fetch(`${message.guild.id}.kayıtyetkilirol`)
if(!yetkilirol) return global.hata(message,`Üyeleri kaydedebilecek olan rolü ayarlamadan bu komut çalışamaz.`,true)
const verilcekrol = await db.fetch(`${message.guild.id}.kayıterkekrol`)
if(!verilcekrol) return global.hata(message,`**Kaydolduğunda verilecek olan erkek rolü ayarlamadan bu komut çalışamaz.**`,true)
if(!message.member.roles.cache.some((r) => r.id === yetkilirol)) return global.hata(message, `**Bu komutu kullanabilmek için <@&${yetkilirol.id}> rolüne sahip olmalısın.**`, true)

if(args[0] === 'toplam'){
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
    **Sunucunuzun Admin İstatistikleri;**
    `)
    .addField("Kayıt Bilgileri:", `
    • | Toplam kayıt sayısı: **${terkek+tkız}**
    • | Toplam erkek kayıt sayısı: **${terkek}**
    • | Toplam kız kayıt sayısı: **${tkız}**
    `)
    .setFooter(client.ayarlar.embedFooter, kişi.avatarURL({ dynamic: true }))
    return message.channel.send(embed)
 }

if(await db.has(`kayıterkeklog_${kişi.id}_${message.guild.id}`) === true) {
    let data = await db.get(`kayıterkeklog_${kişi.id}_${message.guild.id}`)
    var list = await Object.keys(data).map(_data => {
        return {
            id: (data[_data].kayıtEttiğiKişi),
            kayıtZaman: (data[_data].kayıtZaman),
            tür: (data[_data].kayıtTürü)
        };
    })

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
    ${kişi} Adlı kişinin **Admin İstatistikleri**;
    `)
    .addField("Kayıt Bilgileri:", `
    • | Toplam kayıt sayısı: **${erkek + kız}**
    • | Erkek kayıt sayısı: **${erkek}**
    • | Kız kayıt sayısı: **${kız}**
    `)
.addField("Kayıt Logları:", `${list.splice(0, 5).map((item, index) => `**${index + 1}.** <@${item.id}> [Kayıt Türü: **${item.tür}** - Zaman: **${item.kayıtZaman}**]`).join("\n")}`)
    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
return message.channel.send(embed)
} else {
const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
    ${kişi} Adlı kişinin **Admin İstatistikleri**;
    `)
    .addField("Kayıt Bilgileri:", `
    • | Toplam kayıt sayısı: **${erkek + kız}**
    • | Erkek kayıt sayısı: **${erkek}**
    • | Kız kayıt sayısı: **${kız}**
    `)
.addField("Kayıt Logları:", `Log Bulunamadı.`)
    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
message.channel.send(embed)
}
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["admin-istatistik", "adminbilgi", "admin-bilgi"],
    permLevel: 0
}

exports.help = {
    name: "administatistik",
    description: "belirtilen kişinin kayıt istatistiklerine bakarsınız",
    usage: "administatistik @kişi"
}