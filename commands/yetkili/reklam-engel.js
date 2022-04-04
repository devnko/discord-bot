const Discord = require("discord.js")

exports.run = async (client, message, args, db, ayarlar, prefix) => {
    if(!args[0]){
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
      .setDescription(`Lütfen bir değer belirt! **${prefix}reklam-engel aç** veya **${prefix}reklam-engel kapat**`)
      .setColor(client.ayarlar.embedRenk)
      .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
      return message.channel.send(embed).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);    
    }
  
  
  if(args[0] == "aç"){
    if(await db.has(`reklamK_${message.guild.id}`) === "aktif"){
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
      .setDescription(`Reklam engel sistemi zaten aktif! kapatmak için: ${prefix}reklam-engel kapat`)
      .setColor(client.ayarlar.embedRenk)
      .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
      return message.channel.send(embed).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);
    }
    
    await db.set(`reklamK_${message.guild.id}`, "aktif")
      
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
      .setDescription(`Başarılı bir şekilde reklam engel sistemi **Aktifleştirildi!**`)
      .setColor(client.ayarlar.embedRenk)
      .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
      return message.channel.send(embed).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);
  }
  
  if(args[0] == "kapat"){
    if(!await db.has(`reklamK_${message.guild.id}`) === "aktif"){
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
      .setDescription(`Reklam engel sistemi zaten kapalı! açmak için: ${prefix}reklam-engel aç`)
      .setColor(client.ayarlar.embedRenk)
      .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
      return message.channel.send(embed).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);
    }
    await db.delete(`reklamK_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
      .setDescription(`Başarılı bir şekilde reklam engel sistemi **Kapatıldı!**`)
      .setColor(client.ayarlar.embedRenk)
      .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
      return message.channel.send(embed).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);    
  }
  
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['reklam','reklam-engel'],
  permLevel: 0
}

exports.help = {
  name: "reklam",
  description: "reklam filtresi",
  usage: "${prefix}reklam <aç/kapat>"
}