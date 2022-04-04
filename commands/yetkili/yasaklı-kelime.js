const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
const seç = args[0]
const kelime = args[1]   
if(seç === 'ekle'){
if(!kelime) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.deniedozel} Yasaklı kelimeye eklemek için bir **kelime** belirtmelisin!`).setFooter(client.ayarlar.footer, message.author.avatarURL({dynamic:true})))
await db.push(`${message.guild.id}.kelime`, kelime.toLowerCase())
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.tikozel} Başarıyla **${kelime}** adlı kelimeyi yasaklı kelime listesine ekledim, bu kelimeyi yazanların mesajı silinecek!`).setFooter(client.ayarlar.footer, message.author.avatarURL({dynamic:true})))
} else if(seç === 'çıkar'){
if(!kelime) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.deniedozel} Yasaklı kelimeye eklemek için bir **kelime** belirtmelisin!`).setFooter(client.ayarlar.footer, message.author.avatarURL({dynamic:true})))
await db.pull(`${message.guild.id}.kelime`, kelime.toLowerCase())
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.tikozel} Başarıyla **${kelime}** adlı kelimeyi yasaklı kelime listesinden **çıkardım**, bu kelimeyi yazanların mesajı **silinmeyecek**!`).setFooter(client.ayarlar.footer, message.author.avatarURL({dynamic:true})))
} else if(seç === 'liste'){
let kelimeler = await db.get(`${message.guild.id}.kelime`)
if(!kelimeler) return message.channel.send(new Discord.MessageEmbed().setDescription(`${global.deniedozel} Sunucunuzda **yasaklı kelime** bulunamadı, bu nedenle listeyi gösteremem.`).setFooter(client.ayarlar.footer, message.author.avatarURL({dynamic:true})).setColor('RANDOM'));
message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setAuthor(`${message.guild.name} Sunucusunun Yasaklı Kelime Listesi`, message.guild.iconURL({ dynamic:true })).setDescription(kelimeler).setFooter(client.ayarlar.footer, message.author.avatarURL({dynamic:true})));
} else {
return global.hata(message, "Geçersiz argüman girdiniz! Argümanlar: `ekle` `çıkar` `liste`")
};
  } catch (err) {
    global.errs(err, message);
  };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yasaklı-kelime","yasaklı-kelime"],
  permLevel: 4
};

exports.help = {
  name: "yasaklı-kelime",
  description: "",
  usage: "yasaklı-kelime"
};
