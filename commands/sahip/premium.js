const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
    const premium = args[0];
    if(!premium) return message.channel.send('> :warning: Lütfen bir **argüman belirtin**, **Argümanlar**: **kontrol**, **ver**, **al**.')
if(premium == 'kontrol'){
message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`<a:premium:789006017391624243> Bu sunucunun **premium** durumu şuanda: ${await db.fetch(`${message.guild.id}.pre`) ? '**😎 Açık! Dostum Bu SSunucu Çok Hawalı!!**' : '**<a:sj:779003293921706015> Maalesef Bu Sunucuda Premium Bulunmamakta!**'}`))
}
    if (premium == "ver") {
      const hataembed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTimestamp()
        .setDescription(
          "Premium kodu çalıştırılamadı! Ayrıntılar: || Bak şuan kullandın||"
        );
      if (message.author.id !== "453624007586218014")
        if (message.author.id !== "841153183417761802") {
          return message.channel.send(hataembed); 
        }; 
      if(isNaN(args[1])) return message.channel.send(':warning: Sunucular sadece bir IDden oluşabilir!');
      let verilecek = client.guilds.cache.get(args[1]);
      if(!verilecek) return message.channel.send(`:warning: Premium verebilmem için bir sunucu IDsi girin!`);
      await db.set(`${message.guild.id}.pre`, true);
      return message.channel.send(`**${verilecek.name} (${verilecek.id})** isimli sunucuya premium verildi. Bu çok havalı. 😎`) 
         } 
    
        if (premium == "al") {
      const hataembed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTimestamp()
        .addField(
          "Premium kodu çalıştırılamadı! Ayrıntılar: || Bak şuan kullandın||"
        );
      if (message.author.id !== "4536240075862180143")
        if (message.author.id !== "841153183417761802") {
          return message.channel.send(hataembed); 
        }; 
      if(isNaN(args[1])) return message.channel.send(':warning: Sunucular sadece bir IDden oluşabilir!');
      let verilecek = client.guilds.cache.get(args[1]);
      if(!verilecek) return message.channel.send(`:warning: Premium alabilmem için bir sunucu IDsi girin!`);
      
      await db.delete(`${message.guild.id}ipre`);
      return message.channel.send(`**${verilecek.name} (${verilecek.id})** isimli sunucudan premium alındı. Bu sunucu zaten çok berbattı! 🤢🤮`) 
     
    } 
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["premium"],
  permLevel: 0
};

exports.help = {
  name: "premium",
  description: "",
  usage: "premium"
};
