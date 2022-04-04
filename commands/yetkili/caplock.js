const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
  const seç = args[0]
  if(seç == 'aç'){
  if(await db.fetch(`caps.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
  Merhaba ${message.author}, Capslock'u **Bu Sunucuda** Başarıyla Aktif Duruma Getirdim!
  `).setFooter(client.ayarlar.footerEmbed).setAuthor('FireOfEternity Capslock Sistemi', client.user.avatarURL()))
  await db.set(`caps.${message.guild.id}`, true)
  }
  if(seç == 'kapat'){
    await db.delete(`caps.${message.guild.id}`)
   return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
  Merhaba ${message.author}, Capslock'u **Bu Sunucuda** Başarıyla Kapalı Duruma Getirdim!
  `).setFooter(client.ayarlar.footerEmbed).setAuthor('FireOfEternity Capslock Sistemi', client.user.avatarURL()))
  }
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["capslock"],
  permLevel: 4
};

exports.help = {
  name: "capslock",
  description: "",
  usage: "capslock"
};
