const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix, dil    ) => {
  try {
  let p = prefix  
  if(dil == 'TR'){
        if(message.author.id !== message.guild.owner.id) return message.channel.send('Bu komutu sadece **"Sunucu Sahibi"** kullanabilir!')
    const seç = args[0]
    if(!seç) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`> Bir **argüman** belirtmelisin! \n\n> Argümanlar; aç, kapat`))
    if(seç == 'aç'){
      if(await db.fetch(`${message.guild.id}.yenihesapengel`)) return message.channel.send('Bu özellik zaten aktif durumda!')//tm ab bende topluyom o komutu bitti zaten 2 3 şeyi kontrol ediom
            await db.set(`${message.guild.id}.yenihesapengel`, true) //nabıon kardesm //ölüyom //söle sikmim //dbyi dediğim gibi yapıyorum işte okee
      message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`> **Artık Yeni Açılmış Hesaplar Sunucuya Giremeyecek!**`))
}
  else if(seç == 'kapat'){
          if(!await db.fetch(`${message.guild.id}.yenihesapengel`)) return message.channel.send('Bu özellik zaten kapalı durumda!')
          await db.delete(`${message.guild.id}.yenihesapengel`)
          await db.delete(`${message.guild.id}.günlimit`)
      message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`> **Artık Yeni Açılmış Hesaplar Sunucuya Girebilecek!**`))
} else if(seç == 'günayarla') {
const acik = await db.fetch(`${message.guild.id}.pre`);
if(acik){
let gün = args[1]
if(isNaN(gün)) return message.channel.send('Bir gün belirtin!')
if(gün > 15 ) return message.channel.send('Gün En Fazla **15** Olabilir!')
await db.set(`${message.guild.id}.günlimit`, gün)
return message.channel.send(`Gün limit başarıyla ${gün} olarak ayarlandı!`)
} else {
  return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(ayarlar.premesaj)) //zewqa mq
}
}
    else {
      return message.channel.send(`Geçersiz bir argüman girdiniz! Lütfen \`aç\` veya \`kapat\` yazınız. Eğer sunucunuzda premium varsa yenihesapengel'in gününü ${p}yenihesapengel günayarla <gün> olarak ayarlayabilirsiniz!`)
    }
  } else if(dil == 'EN'){
          if(message.author.id !== message.guild.owner.id) return message.channel.send('Only ** "Host" ** can use this command!')
    const seç = args[0]
    if(!seç) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`You must specify a ** argument **! \n\nArguments; open, close`))
    if(seç == 'open'){
      if(await db.fetch(`${message.guild.id}.yenihesapengel`)) return message.channel.send('This feature is already active!')
            await db.set(`${message.guild.id}.yenihesapengel`, true)
      message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`>** Newly Opened Accounts will no longer be able to enter the server!**`))
}
  else if(seç == 'close'){
          if(!await db.fetch(`${message.guild.id}.yenihesapengel`)) return message.channel.send('This feature is already turned off!')
          await db.delete(`${message.guild.id}.yenihesapengel`)
          await db.delete(`${message.guild.id}.günlimit`)
      message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`> **Newly Opened Accounts Can Now Enter The Server!**`))
} else if(seç == 'dayset') {
const acik = await db.fetch(`${message.guild.id}.pre`);
if(acik){
let gün = args[1]
if(isNaN(gün)) return message.channel.send('Specify a day!')
if(gün > 15 ) return message.channel.send('Days Can Be Maximum ** 15 **!')
await db.set(`${message.guild.id}.günlimit`, gün)
return message.channel.send(`The day limit has been successfully set to ${gün}!`)
} else {
  return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(ayarlar.premesaj)) //zewqa mq
}
}
    else {
      return message.channel.send(`You entered an invalid argument! Please write \`open\` or \`close\`. If your server has premium, set newaccounts to ${p}newaccounts setday <day> you can set it!`)
    }
  }
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yenihesapengel", "newaccounts"],
    permLevel: 0
};

exports.help = {
    name: "yenihesapengel",
    description: "", 
    usage: "yenihesapengel"
};