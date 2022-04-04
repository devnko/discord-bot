const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
      const hataembed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTimestamp()
        .setDescription(
          "Karaliste kodu çalıştırılamadı! Ayrıntılar: || Bak şuan kullandın||"
        );
      if (message.author.id !== "699597747657113653")
        if (message.author.id !== "548145246983159808") {
          return message.channel.send(hataembed);    
        }; 
    const seç = args[0]
  if(!seç) return message.channel.send(':warning: Bir Argüman Belirtin Lütfen Sahibim! Argümanlar: !!karaliste al/çıkar/liste')
    if(seç == 'al') {
    let sebep = args.slice(2).join(" ")
    if(!sebep) sebep = "Belirtilmemiş"
    const user = args[1]
    if(!user) return message.channel.send('Bir ID girin lütfen!');
    await db.set(`karalist_${user}`, sebep)
    message.channel.send(`Başarıyla <@${user}> **(${user})** ${sebep} sebebiyle karalisteye alındı!`)
    }
       else if(seç == 'çıkar') {
    const user = args[1]
    if(!user) return message.channel.send('Bir ID girin lütfen!');
    await db.delete(`karalist_${user}`)
    message.channel.send(`Başarıyla <@${user}> **(${user})** beyazlisteye alındı!`)
    }
   else if(seç == 'liste'){
db.fetch("karalist").then(a => {
message.channel.send(a);
})
} else if(seç == "sunucu") {
  let seç2 = args[1];
  if(seç2 == "al"){
    let sunucu = args[2]
    if (sunucu) sunucu = sunucu.id
    if(!sunucu) sunucu = args[2]
    if(!sunucu) return message.channel.send('Bir ID girin lütfen!');
    
    let sebep = args.slice(3).join(" ");
    if(!sebep) sebep = "Belirtilmemiş"
    
        await db.set(`sunucukaraliste_${sunucu}`, sebep)
    message.channel.send(`Başarıyla ${sunucu.name} **(${sunucu})** sunucusu ${sebep} sebebiyle karalisteye alındı!`)
  }
  else if(seç2 == "çıkar"){
    let sunucu = args[2]
    if (sunucu) sunucu = sunucu.id
    if(!sunucu) sunucu = args[2]
    if(!sunucu) return message.channel.send('Bir ID girin lütfen!');
        await db.delete(`sunucukaraliste_${sunucu}`)
    message.channel.send(`Başarıyla ${client.guilds.cache.get(sunucu).name} **(${sunucu})** sunucusu beyazlisteye alındı!`)
  } else if(seç2 == "liste") {
    //burası senin .d
  db.fetch("sunucukaraliste_").then(a => {
  message.channel.send(a);
})
  } else {
    return message.reply("Geçersiz Argüman! Argümanlar: !!karaliste sunucu al/çıkar/liste")
  }
  //ne ara yaptın amk 2dk gidelim dedik
  //sjshgshjkshsj
}  else {
    return message.reply("Geçersiz Argüman! Argümanlar: !!karaliste al/çıkar/liste/sunucu") //bu hepsi .d
  }
    
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["karaliste"],
    permLevel: 0
};

exports.help = {
    name: "karaliste",
    description: "", 
    usage: "karaliste"
};