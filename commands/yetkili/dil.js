const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, dil) => {
  try {
    // İf(dil == null) = 'TR' zewqa direk oraya koy aq
    //ben dil sistemini message.js den ayarlıyorum sjshsjk
   //  exports.run + exports.enrun zewqa
  const dilseç = args[0]
  let sunucudili = await db.fetch(`${message.guild.id}.dil`);
  if(!dilseç) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`:flag_tr: Dil'i Değiştirmek İçin Bir Dil Belirtmeniz Gerekiyor! Diller: TR, EN \n\n:flag_eu: To Change Language You Need To Specify A Language! Languages: TR, EN`))
    if(dilseç == "TR") {
    if(sunucudili == "TR") return message.channel.send('Dil Zaten **Türkçe** Olarak Ayarlı!')
    await db.set(`${message.guild.id}.dil`, 'TR')
    return message.channel.send(':flag_tr: Dil Başarıyla **Türkçe** Olarak Ayarlandı!')
    } else if(dilseç == "EN") {
    if(sunucudili == "EN") return message.channel.send('Language Is Already Set To **English**!') //biliyodum aq
    await db.set(`${message.guild.id}.dil`, 'EN')
    return message.channel.send(':flag_eu: Language Successfully Set to **English**!')
    } else {
      return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`:flag_tr: Dil'i Değiştirmek İçin Bir Dil Belirtmeniz Gerekiyor! Diller: TR, EN \n\n:flag_eu: To Change Language You Need To Specify A Language! Languages: TR, EN`))
    }
    
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["dil"],
  permLevel: 4
};

exports.help = {
  name: "dil",
  description: "",
  usage: "dil"
};
