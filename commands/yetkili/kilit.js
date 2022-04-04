const Discord = require("discord.js");
const ms = require("ms")
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
let süre = args[0]
if(!süre) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`
Kilit Sistemi
Aç: **${prefix}kilit <1s/1m/1h/1d>**
Kapat: **${prefix}kilit kapat**
`))
if(süre == 0) {
global.hata(message, `Kilit süresi **0** olamaz!`, true)
} else if(süre == "kapat") {
let everyone = message.guild.roles.cache.find(a => a.name === "@everyone");
message.channel.updateOverwrite(
everyone,
{ SEND_MESSAGES: null },
`${message.author.tag} Tarafından`
);
global.oky(message, `**:unlock: Kanalın kilidi açıldı.**`)
} else {
let zaman = args[0]
.replace(`sn`, `s`)
.replace(`dk`, `m`)
.replace(`sa`, `h`)
.replace(`g`, `d`);
let bayrakwen = Date.now() + ms(zaman);
await db.set(`${message.channel.id}.kilit`, bayrakwen)
await db.push(`kilit`, message.channel.id)
let everyone = message.guild.roles.cache.find(a => a.name === "@everyone");
message.channel.updateOverwrite(
  everyone,
  { SEND_MESSAGES: false },
  `${message.author.tag} Tarafından`
);
return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`:lock: Kanal **${args[0]}** süreliğine kilitlendi!`))
}
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kilit"],
  permLevel: "kanal"
};

exports.help = {
  name: "kilit",
  description: "",
  usage: "  "
};
