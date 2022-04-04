const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join("+");
  
  if (!yazi) return message.channel.send(`Trump'a Ne Yazdıracaksın!`);
  const link = `https://api.no-api-key.com/api/v2/trump?message=${yazi}`
  .replace(" ", "+")
  .replace("ı", "i")
  .replace("İ", "I")
  .replace("ğ", "g")
  .replace("Ğ", "G")
  .replace("ş", "s")
  .replace("Ş", "S")

  let ek = new Discord.MessageAttachment(link, `fireofeternitysj.png`);
  const embed = new Discord.MessageEmbed()
    .setTitle("Tweet Aşağıda!")
    .setColor("RANDOM")
    .attachFiles(ek)
    .setImage(`attachment://fireofeternitysj.png`)
    .setFooter(`${message.author.tag} Trump'a Twit Attırdı.`, message.author.avatarURL({ dynamic: true }))
    .setTimestamp();
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['trump'],
  permLevel: 0
};

exports.help = {
  name: "trump",
  description: "",
  usage: "trump <yazı>"
};