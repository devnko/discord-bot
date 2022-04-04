const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
    const yetkilirol = await db.fetch(`${message.guild.id}.kayıtyetkilirol`)
    if(!yetkilirol) return global.hata(message,`Üyeleri kaydedebilecek olan rolü ayarlamadan bu komut çalışamaz.`,true)
if(!message.guild.members.cache.filter(s => s.roles.cache.has(yetkilirol))) return global.hata(message,`<@&${yetkilirol.id}> **Rolüne ait birisi bulunamadı.**`, true)
let yetkili = yetkilirol;
const charCheck = (str, max = 1024) => (str.length > max) ? str.slice(0, max - 3) + "..." : str;
const embed = new Discord.MessageEmbed()
.setAuthor(`${client.ayarlar.botİsim}`, message.author.avatarURL({ dynamic: true }))
.setColor(client.ayarlar.embedRenk)
.setDescription(`
Bu sunucuda <@&${yetkili}> Rolüne ait **${message.guild.members.cache.filter(s => s.roles.cache.has(yetkili)).size}** Adet üye var!
`)
.addField("Seste Olan Yetkililer:", `
${charCheck(message.guild.members.cache.filter(s => s.roles.cache.has(yetkili) && s.voice.channel && !s.user.bot).map(s => s).join(", ")) || 'Sesli kanallarda **yetkili** üye bulunamadı!'}
`)
.addField("Seste Olmayan Yetkililer:", `
${charCheck(message.guild.members.cache.filter(s => s.roles.cache.has(yetkili) && !s.voice.channel && !s.user.bot).map(s => s).join(", "))}
`)
.setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
return message.channel.send(embed)
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ses-bilgi"],
  permLevel: 0
};

exports.help = {
  name: "ses-bilgi",
  description: "",
  usage: "ses-bilgi"
};
