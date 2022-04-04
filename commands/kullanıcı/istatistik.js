const Discord = require("discord.js");
const moment = require("moment");
const osutils = require('os-utils');
const os = require('os');
moment.locale('tr')
require("moment-duration-format");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
     osutils.cpuUsage(function(v) {
     const bilgi = new Discord.MessageEmbed()
    .addField('<:package_owner:855874951574847508> Geliştirici', '<@!453624007586218014>', true)
    .addField('<:package_member:857162042385104906> Kullanıcı Sayısı', client.users.cache.size, true)
    .addField('<:package_stage:855874951357792277> Sunucu Sayısı', client.guilds.cache.size, true)
    .addField('<:package_chatting:855874951102070826> Kanal Sayısı', client.channels.cache.size, true)
    .addField('<:package_desktop:855874951914979368> Ram Kullanımı', process.memoryUsage().heapUsed /1024/1024+' mb', true)
    .addField('<:package_boost:855874950858407947> Cpu Kullanımı', (v * 100).toString().split(".")[0] + "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]+'%', true)
    .addField('<:package_global:855874951855734824> Ping Durumları', `Mesaj Pingi: ${new Date().getTime() - message.createdTimestamp}ms \nBot Pingi: ${client.ws.ping}`)
    .addField('<:package_windows:855874951775781182> İşletim Sistemi', os.type(), true)
    .addField('<:package_bot:857164756725006346> Cpu', os.cpus().map(i => `${i.model}`)[0], true)
    .addField('<:package_partnerwait:855874951483490314> Kuruluş Tarihi',  moment(client.user.createdAt).format('LLL'),true)
    .addField('<:package_inbox:855874951491092510> Node Sürümü', process.version, true)
    .addField('<:package_discord:856985915229863957> Discord Sürümü', Discord.version, true)
     message.channel.send(bilgi)
  });
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istatistik"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "",
  usage: "istatistik"
};
