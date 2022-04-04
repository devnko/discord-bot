const Discord = require('discord.js');//lo nabıyon boş boş .D
const fs = require('fs');

exports.run = async (client, message, args, db, ayarlar, prefix) => {
let sınır = args[1]
 let spam = await db.fetch(`spamEngel_${message.guild.id}`)
let muteRole = await db.fetch(`muteRole_${message.guild.id}`)
let kicksınır = await db.fetch(`kicksınır1_${message.guild.id}`)
     if(!args[0]) return message.channel.send("Bir argüman belirt. Argümanlar: aç, kapat, kicksınır, kicksınır sıfırla")
   

 if(args[0] === "kicksınır"){  
  if(args[1] === "sıfırla"){
    if(!kicksınır){
    const rol1 = new Discord.MessageEmbed()
    .setTitle("FireOfEternity Anti Spam Sistemi")
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL)
    .addField("Hata!", `kick sınır zaten ayarlı değil! ayarlamak için: **${prefix}spamengel kicksınır ayarla sayı**`)
   return message.channel.send(rol1)
  }
      await db.delete(`kicksınır_${message.guild.id}`)
     const rol1 = new Discord.MessageEmbed()
    .setTitle("FireOfEternity Anti Spam Sistemi")
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL)
    .addField("Başarılı!", `Başarılı Bir Şekilde kick Sınırı Sıfırlandı!`)
  return message.channel.send(rol1) 
  }
  if(isNaN(sınır)) return message.channel.send('Kick Sınır Sadece Sayı Olabilir!')
  if(kicksınır){
    const rol1 = new Discord.MessageEmbed()
    .setTitle("FireOfEternity Anti Spam Sistemi")
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL)
    .addField("Hata!", `kick sınırı zaten **${muteRole}** olarak ayarlı!`)
    return message.channel.send(rol1)
  }
    await db.set(`kicksınır_${message.guild.id}`, sınır)
    const rol1 = new Discord.MessageEmbed()
    .setTitle("FireOfEternity Anti Spam Sistemi")
    .setColor("RANDOM")// değiş
    .setThumbnail(client.user.avatarURL)
    .addField("Başarılı!", `kick sınırı **${sınır}** olarak ayarlandı! sıfırlamak için: **${prefix}spamengel kicksınır sıfırla**`)
    return message.channel.send(rol1)
   
   
 }

      if(args[0] === "aç"){
        if(!muteRole){
  const embed1 = new Discord.MessageEmbed()
    .setTitle("FireOfEternity Anti Spam Sistemi")
    .setDescription("Anti Spam Sistemini Açmak İçin Mute Rolünü Ayarlamanız Gerekli! Ayarlamak için: !!spam-muterol")
    .setColor("RANDOM")
    .setFooter(client.user.username, client.user.avatarURL())
  return message.channel.send(embed1)
   }
    if(spam){
      const embed3 = new Discord.MessageEmbed()
.setTitle("FireOfEternity Anti Spam Sistemi")
.setDescription("Anti Spam Sistemi Zaten Aktif!")
.setColor("RANDOM")
.setFooter(client.user.username, client.user.avatarURL())
return message.channel.send(embed3)
    }
      

    await db.set(`spamEngel_${message.guild.id}`, "açık")
    const embed1 = new Discord.MessageEmbed()
.setTitle("FireOfEternity Anti Spam Sistemi")
.setDescription("Anti Spam Sistemi Başarıyla Açıldı!")
.setColor("RANDOM")
.setFooter(client.user.username, client.user.avatarURL())
return message.channel.send(embed1)
      
  }
   
     if(args[0] === "kapat"){
        if(!spam){
      const embed3 = new Discord.MessageEmbed()
.setTitle("FireOfEternity Anti Spam Sistemi")
.setDescription("Anti Spam Sistemi Zaten Kapalı!")
.setColor("RANDOM")
.setFooter(client.user.username, client.user.avatarURL())
return message.channel.send(embed3)
    }


    
    await db.delete(`spamEngel_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
.setTitle("FireOfEternity Anti Spam Sistemi")
.setDescription("Anti Spam Sistemi Başarıyla Kapatıldı!")
.setColor("RANDOM")
.setFooter(client.user.username, client.user.avatarURL())
return message.channel.send(embed)
  }     
  

}
exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ["spamengel", "antispam", "anti-spam"],
 permLevel: 4
};

exports.help = {
 name: 'spam-engel',
 description: 'anti-spam-ayarla',
 usage: 'anti'
};