const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
 // try {
    await db.ping().then(dbping => {
      let renk = `GREEN`;
      if (client.ws.ping > 500) renk = `YELLOW`;
      if (client.ws.ping > 1000) renk = `RED`;
      if(dil == 'EN'){
      let embed1 = new Discord.MessageEmbed()
        .setDescription("**<a:yukleniyor2:821420487526580265> Ping Measurements are Made and Database Ping is Calculated.**")
        .setColor("BLUE");
      let embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))  
        .setColor(renk)
        .setDescription(`
        **Bot Latency :** \`${client.ws.ping}\` ms
        **Api Latency :** \`${new Date().getTime() - message.createdTimestamp}\` ms
        **Database Response Time :** \`${dbping.read}\` ms
        `)
      .setFooter(client.ayarlar.footer, client.user.avatarURL())
      message.channel.send(embed1).then(nmsg => nmsg.edit(embed));
      } else if(dil == 'TR'){
            let embed1 = new Discord.MessageEmbed()
        .setDescription("**<a:yukleniyor2:821420487526580265> Ping Ölçümleri Yapılıp Database Pingi Hesaplanıyor.**")
        .setColor("BLUE");
      let embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))  
        .setColor(renk)
        .setDescription(`
        **Bot Gecikmesi :** \`${client.ws.ping}\` ms
        **Api Gecikmesi :** \`${new Date().getTime() - message.createdTimestamp}\` ms
        **Veritabanı Yanıt Süresi :** \`${dbping.read}\` ms
        `)
      .setFooter(client.ayarlar.footer, client.user.avatarURL())
      message.channel.send(embed1).then(nmsg => nmsg.edit(embed));
      }
    });
  /*} catch (err) {
    global.errs(err, message)
  }*/
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ping","p","ms","pong"],
    permLevel: 0
};

exports.help = {
    name: "ping",
    description: "", 
    usage: "ping"
};