const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  const seç = args[0]
  if(!seç) return message.channel.send('Sa-ası açmak için aç veya kapat yazmalısın!')
  if(seç == 'aç'){
  if(await db.fetch(`${message.guild.id}.saas`)) return message.channel.send('Bu özellik zaten **aktif** durumda!')
  await db.set(`${message.guild.id}.saas`, true)
  return message.channel.send('**Başarıyla** sa-ası **aktif** ettim! Bot selam verenlere cevap **verecektir!**')
  }
  
  if(seç == 'kapat'){
  if(!await db.fetch(`${message.guild.id}.saas`)) return message.channel.send('Bu özellik zaten **kapalı** durumda!')
  await db.delete(`${message.guild.id}.saas`)
  return message.channel.send('**Başarıyla** sa-ası **aktif** kapattım! Bot selam verenlere cevap **vermiyecektira!**')
  }
  
  try {
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sa-as","saas"],
  permLevel: 1
};

exports.help = {
  name: "sa-as",
  description: "",
  usage: "sa-as"
};
