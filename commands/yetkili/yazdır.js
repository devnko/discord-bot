const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
  let p = prefix
if(dil == 'TR'){
    if(args[0] == 'kapat'){
  message.channel.stopTyping()
  return message.channel.send('**Artık bu kanalda yazıyor gözükmeyeceğim!**')
  }
  message.channel.startTyping()
  return message.channel.send(`**Artık bu kanalda yazıyor gözükeceğim! Kapatmak için: ${p}yazdır kapat**`)
 } else if(dil == 'EN'){
    if(args[1] == 'close'){
  message.channel.stopTyping()
  return message.channel.send('**I will no longer appear to be on this channel!**')
  }
  message.channel.startTyping()
  return message.channel.send(`**I will now appear to be on this channel! To turn it off: ${p}print close**`)
 }
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yazdır", "print"],
    permLevel: 1
};

exports.help = {
    name: "yazdır",
    description: "", 
    usage: "yazdır"
};