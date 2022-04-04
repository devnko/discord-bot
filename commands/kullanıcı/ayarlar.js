const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
try { 
let id = await db.fetch(`${message.guild.id}.modlogid`); //anaskm snhsvsghjshgfsgh 
if (!id) id = 31
let toqen = await db.fetch(`${message.guild.id}.modlogtoken`); //mal amk
if (!toqen) toqen = 31
const hookab = new Discord.WebhookClient(id, toqen); //geliom maine gidip shgsh // ab modlog komutudan bakaydın ab db orda var ab //tm ab kızma
let kanal = `<#${hookab.channelID}>` //özürlü aq //yazma aq yazma buraya atıyo sjhgsfsgh
const ayarlar = new Discord.MessageEmbed() // üfffff reel kodır //doru sjhgshsj kafa yoq qi
.setColor('RANDOM')
.setTitle(':gear: Sunucunun Ayarları')
.setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic:true}))
.addField('• Prefix Sistemi', `${await db.fetch(`${message.guild.id}.prefix`) ? `${global.tikozel} Açık \n• Kişileştirilmiş Önek:\n \`${prefix}\``:`${global.carpiozel} Değiştirilmemiş  ! \n **${prefix}prefix**`}`, true)
.addField('• Modlog Sistemi', `${await db.fetch(`${message.guild.id}.modlogtoken`) ? `${global.tikozel} Açık \n • Ayarlanan Kanal: \n Belirlenemedi.`:`${global.carpiozel} Ayarlanmamış \n **${prefix}modlog**`}`, true)
.addField('• Küfür Sistemi', `${await db.fetch(`küfürE_${message.guild.id}`)? `${global.tikozel} Açık`:`${global.carpiozel} Ayarlanmamış \n **${prefix}küfür-engel**`}`, true)
.addField('• Link Sistemi', `${await db.fetch(`linkK_${message.guild.id}`)? `${global.tikozel} Açık`:`${global.carpiozel} Ayarlanmamış \n **${prefix}reklam-engel**`}`, true)
.addField('• Reklam Sistemi', `${await db.fetch(`reklamK_${message.guild.id}`)? `${global.tikozel} Açık`:`${global.carpiozel} Ayarlanmamış \n **${prefix}reklam-engel**`}`, true)
.addField('• Reklam Yapanı Yasaklama Sistemi', `${await db.fetch(`${message.guild.id}.reklamkick`)? `${global.tikozel} Açık`:`${global.carpiozel} Ayarlanmamış \n **${prefix}reklam-kick**`}`, true)
.addField('• Büyük Harf Engelleme Sistemi', `${await db.fetch(`caps.${message.guild.id}`)? `${global.tikozel} Açık`:`${global.carpiozel} Ayarlanmamış \n **${prefix}capslock**`}`, true)
.addField('• Etiket Sistemi', `${await db.fetch(`${message.guild.id}.etiketsistem`)? `${global.tikozel} Açık \n • Ayarlanan Etiket:\n${await db.fetch(`${message.guild.id}.tagabo`)}\n• Ayarlanan Kanal:\n<#${await db.fetch(`${message.guild.id}.ekanal`)}>`:`${global.carpiozel} Ayarlanmamış \n **${prefix}etiket-sistemi**`}`, true)
.addField('• Otorol Sistemi', `${await db.fetch(`${message.guild.id}.otorol`)? `${global.tikozel} Açık \n • Ayarlanan Rol:\n<@&${await db.fetch(`${message.guild.id}.otorol`)}>\n• Ayarlanan Kanal:\n<#${await db.fetch(`${message.guild.id}.otorolkanal`) || 'Kanal Ayarlanmamış.'}>`:`${global.carpiozel} Ayarlanmamış \n **${prefix}otorol**`}`, true)
.addField('• Sayaç Sistemi', `${await db.fetch(`sayaçH_${message.guild.id}`)? `${global.tikozel} Açık \n • Ayarlanan Kanal:\n<#${await db.fetch(`sayaçK_${message.guild.id}`)}>\n• Ayarlanan Hedef:\n${await db.fetch(`sayaçH_${message.guild.id}`)}`:`${global.carpiozel} Ayarlanmamış \n **${prefix}sayaç**`}`, true)
.addField('• Kayıt Sistemi', `${await db.fetch(`${message.guild.id}.kayıterkekrol`) ? `${global.tikozel} Açık!`:`${global.carpiozel} Ayarlanmamış!\n**${prefix}kayıt-kanal**`}`, true)
.addField('• Botun Dili', `${dil?`:flag_tr: Türkçe`:`:flag_us: English`}`, true)
message.channel.send(ayarlar)
  } catch (err) {
    global.errs(err, message);
  } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ayarlar"],
  permLevel: 0
};

exports.help = {
  name: "ayarlar",
  description: "",
  usage: "ayarlar"
};