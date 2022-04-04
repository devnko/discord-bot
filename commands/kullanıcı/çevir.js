const Discord = require("discord.js");
const translate = require('@k3rn31p4nic/google-translate-api')
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
const çevirilcek = args[0]
if(!çevirilcek) return global.hata(message,`**Çevrilcek dili belirtmelisin!**\nÖrnek: ${prefix}çevir en merhaba`,true)
const text = args.slice(1).join(" ")
if(!text) global.hata(message,`Çevrilcek **yazıyı** belirtin!`,true)
const result = await translate(text, { to: çevirilcek })
const çevrildi = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(result.text)
.setFooter(client.ayarlar.footer, message.author.avatarURL({dynamic:true}))
message.channel.send(çevrildi)
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çevir"],
  permLevel: 0
};

exports.help = {
  name: "çevir",
  description: "",
  usage: "çevir"
};
