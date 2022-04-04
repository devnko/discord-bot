const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
    if(message.author.id !== message.guild.owner.id) return message.channel.send('Bu komutu sadece **"Sunucu Sahibi"** kullanabilir!')
  const koruma = args[0]  
  if(!koruma) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription('> Lütfen bir **argüman** belirt! \n\n> Argümanlar; banlimit, kicklimit, log, kanallimit, rollimit, bot'))
if(koruma == 'log') {
const kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
if(!kanal) return message.channel.send('Bir kanal belirtmelisin!')
  kanal.send(".").then(msg => msg.delete())
  .catch(e => message.channel.send("Bu kanala mesaj gönderemiyorum!"))

await db.set(`${message.guild.id}.korumakanal`, kanal.id) //
return message.channel.send(`Başarıyla log kanalı <#${kanal.id}> olarak ayarlandı!`) 
if(koruma == 'sıfırla') {
  await db.delete(`${message.guild.id}.korumakanal`)
message.channel.send('Log kanalını sıfırladım!')
};
};
if(koruma == 'banlimit') {
if(args[1] == "sıfırla") {
  
await db.delete(`${message.guild.id}.banlimit`);
return message.channel.send(`Başarıyla banlimiti sıfırladım!`) 
} else {
const banlimit = args[1]
if(isNaN(banlimit)) return message.channel.send('Banlimit sadece bir sayı olabilir!')
if(banlimit > 20) return message.channel.send('Ban limiti maalesef güvenlik için 20den yukarı ayarlayamam!')
await db.set(`${message.guild.id}.banlimit`, banlimit);
return message.channel.send(`Başarıyla banlimiti ${banlimit} olarak ayarlandı!`) 
}}
else if(koruma == 'kicklimit') {
  
  if(args[1] == "sıfırla") {
  
await db.delete(`${message.guild.id}.kicklimit`);
return message.channel.send(`Başarıyla kick limiti sıfırladım!`) 
} else {
  const kicklimit = args[1]
if(isNaN(kicklimit)) return message.channel.send('Kicklimit sadece bir sayı olabilir!')
if(kicklimit > 20) return message.channel.send('Kick limiti maalesef güvenlik için 20den yukarı ayarlayamam!')
await db.set(`${message.guild.id}.kicklimit`, kicklimit);
return message.channel.send(`Başarıyla kicklimiti ${kicklimit} olarak ayarlandı!`)  
}}
else if(koruma == 'kanallimit'){  
  if(args[1] == "sıfırla") {
  
await db.delete(`${message.guild.id}.kanallimit`);
return message.channel.send(`Başarıyla kanal limiti sıfırladım!`) 
} else {
  const kanallimit = args[1]
if(isNaN(kanallimit)) return message.channel.send('Kanal limit sadece bir sayı olabilir!')
if(kanallimit > 20) return message.channel.send('Kanal limiti maalesef güvenlik için 20den yukarı ayarlayamam!')
await db.set(`${message.guild.id}.kanallimit`, kanallimit);
return message.channel.send(`Başarıyla kanal limiti ${kanallimit} olarak ayarlandı!`)
}}
    
else if(koruma == 'rollimit') {
  if(args[1] == "sıfırla") {
  
await db.delete(`${message.guild.id}.rollimit`);
return message.channel.send(`Başarıyla rollimit sıfırladım!`) 
} else {
  const rollimit = args[1]
if(isNaN(rollimit)) return message.channel.send('Rol limit sadece bir sayı olabilir!')
if(rollimit > 20) return message.channel.send('Rol limiti maalesef güvenlik için 20den yukarı ayarlayamam!')
await db.set(`${message.guild.id}.rollimit`, rollimit);
return message.channel.send(`Başarıyla rol limiti ${rollimit} olarak ayarlandı!`)  
  };
}    
else if(koruma == 'bot') {  
    await db.fetch(`${message.guild.id}.botengel`).then(aktif => {
      if (args[1] == "sıfırla") {
        db.delete(`${message.guild.id}.botengel`).then(console.log);
        const embed = new Discord.MessageEmbed()
          .setColor("0x00AE86")
          .setTimestamp()
          .addField("Eylem:", "🛑 Bot Koruma Sistemi Devre Dışı Bırakıldı! 🛑")
          .addField("Yetkili:", `${message.author} (${message.author.id})`);

        message.channel.send(embed);
      } else {
        db.set(`${message.guild.id}.botengel`, true).then(console.log);
        const embed = new Discord.MessageEmbed()
          .setColor("0x00AE86")
          .setTimestamp()
          .addField("Eylem:", "✅ Bot Koruma Sistemi Aktif Edildi!")
          .addField("Yetkili:", `${message.author} (${message.author.id})`);

        message.channel.send(embed);
      } //test edek bi sunucu gel
    }) 
}
    else {
      return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription('> Lütfen bir **argüman** belirt! \n\n> Argümanlar; banlimit, kicklimit, log, kanallimit, rollimit, bot'))
    };


  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["koruma"],
    permLevel: 4
};

exports.help = {
    name: "koruma",
    description: "", 
    usage: "koruma"
};