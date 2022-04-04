exports.run = async (client, message, args, db, ayarlar, prefix) => {
    const {MessageEmbed} = require("discord.js")
    const moment = require("moment");
    require('moment-duration-format');
    var server = message.guild
    ////////////////////////////////////////////////////////suncuu ayarı
var üyesayısı = server.members.cache.filter(a => !a.user.bot).size
var toplamsayfa = 0
if(üyesayısı < 10){
 toplamsayfa = 1
} else {
toplamsayfa = `${üyesayısı/10}`
if(toplamsayfa.includes(".")){
    toplamsayfa = Math.ceil(toplamsayfa)
} else {
    toplamsayfa = `${üyesayısı/10}`
}
}
    var seskisi = message.guild.members.cache.filter(a => !a.user.bot).array().sort(async (a,b)=>{
      return (await db.fetch(`${server.id}.voice.${b.user.id}`) ? await db.fetch(`${server.id}.voice.${b.user.id}`) : 0) - (await db.fetch(`${server.id}.voice.${a.user.id}`) ? await db.fetch(`${server.id}.voice.${a.user.id}`) : 0)
    })
    var ses10 = seskisi.slice(0,10)
    var sessayi = 1
    const ses2 = ses10.map(async s => `**${sessayi++}** <@${s.user.id}> :  ${await db.fetch(`${server.id}.voice.${s.user.id}.lvl`) ? await db.fetch(`${server.id}.voice.${s.user.id}.lvl`) : "0"} Level ${await db.fetch(`${server.id}.voice.${s.user.id}.xp`) ? await db.fetch(`${server.id}.voice.${s.user.id}.xp`) : "0"} Xp`).join("\n")
    ///////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////yazı
      var yazkisi = message.guild.members.cache.filter(a => !a.user.bot).array().sort(async (a,b) => {
        return (await db.fetch(`${server.id}.messages.${b.user.id}`) ? await db.fetch(`${server.id}.messages.${b.user.id}`) : 0) - (await db.fetch(`${server.id}.messages.${a.user.id}`) ? await db.fetch(`${server.id}.messages.${a.user.id}`) : 0)
      })
      var yaz10 = yazkisi.slice(0,10)
      var yazsayi = 1
      const yaz2 = yaz10.map(async s => `**${yazsayi++}** <@${s.user.id}> :  ${await db.fetch(`${server.id}.messages.${s.user.id}.lvl`) ? await db.fetch(`${server.id}.messages.${s.user.id}.lvl`) : "0"} Level ${await db.fetch(`${server.id}.messages.${s.user.id}.xp`) ? await db.fetch(`${server.id}.messages.${s.user.id}.xp`) : "0"} Xp`).join("\n")
      ///////////////////////////////////////////////////////
    if (!args[0]) {
        const top = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setFooter(client.user.tag, client.user.avatarURL())
        .addField("Toplam Ses", `${ses2}\n**Dahası için, ${prefix}top voice**`)
        .addField("Toplam Yazılar", `${yaz2}\n**Dahası için, ${prefix}top text**`)
        .setDescription("Sunucunuzun level sıralamasıdır.");

        message.channel.send(top);
    } else if (args[0].toLowerCase() === "text") {
        let sayfa = args[1] ? args[1] : 1;
        if (isNaN(sayfa)) return message.channel.send("Lütfen bir sayfa numarası girin!");
        sayfa = Number(sayfa);
        if(sayfa > toplamsayfa) return message.channel.send("Lütfen bir sayfa tipi girin!")
        if (sayfa < 0) return message.channel.send("Lütfen düzgün bir sayfa tipi girin!")
        var al = {
            ilk: sayfa*10-10,
            iki: sayfa*10
        }
        var yazkisi2 = message.guild.members.cache.filter(a => !a.user.bot).array().sort(async (a,b) => {
            return (await db.fetch(`${server.id}.messages.${b.user.id}`) ? await db.fetch(`${server.id}.messages.${b.user.id}`) : 0) - (await db.fetch(`${server.id}.messages.${a.user.id}`) ? await db.fetch(`${server.id}.messages.${a.user.id}`) : 0)
          })
          var yaz102 = yazkisi2.slice(al.ilk,al.iki)
          var yazsayi2 = al.ilk+1
          const yaz22 = yaz102.map(async s => `**${yazsayi2++}** <@${s.user.id}> :  ${await db.fetch(`${server.id}.messages.${s.user.id}.lvl`) ? await db.fetch(`${server.id}.messages.${s.user.id}.lvl`) : "0"} Level ${await db.fetch(`${server.id}.messages.${s.user.id}.xp`) ? await db.fetch(`${server.id}.messages.${s.user.id}.xp`) : "0"} Xp`).join("\n")
          const top3 = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL())
          .setFooter(client.user.tag, client.user.avatarURL())
  
          .addField("Toplam Yazı İstatistiği", `${yaz22}`)
          .setDescription("Sunucunuzun toplam yazı bilgileri verilmiştir.");
  
          message.channel.send(top3);
        } else if (args[0].toLowerCase() === "voice") {
        let sayfa = args[1] ? args[1] : 1;
        if (isNaN(sayfa)) return message.channel.send("Lütfen bir sayfa numarası girin.");
        sayfa = Number(sayfa)
        if(sayfa > toplamsayfa) return message.channel.send("Lütfen düzgün bir sayfa tipi girin!")
        if (sayfa < 0) return message.channel.send("Lütfen düzgün bir sayfa tipi girin!")
        ///////////////////////////////////////////////////////
       
        var al = {
            ilk: sayfa*10-10,
            iki: sayfa*10
        }
        var seskisi2 = message.guild.members.cache.filter(a => !a.user.bot).array().sort(async(a,b) => {
            return (await db.fetch(`${server.id}.voice.${b.user.id}`) ? await db.fetch(`${server.id}.voice.${b.user.id}`) : 0) - (await db.fetch(`${server.id}.voice.${a.user.id}`) ? await db.fetch(`${server.id}.voice.${a.user.id}`) : 0)
          })
          var ses102 = seskisi2.slice(al.ilk,al.iki)
          var sessayi2 = al.ilk+1
          const ses22 = ses102.map(async s => `**${sessayi2++}** <@${s.user.id}> :  ${await db.fetch(`${server.id}.voice.${s.user.id}.lvl`) ? await db.fetch(`${server.id}.voice.${s.user.id}.lvl`) : "0"} Level ${await db.fetch(`${server.id}.voice.${s.user.id}.xp`) ? await db.fetch(`${server.id}.voice.${s.user.id}.xp`) : "0"} Xp`).join("\n")
          const top2 = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL())
          .setFooter(client.user.tag, client.user.avatarURL())
          .addField("Toplam Ses Bilgisi", `${ses22}`)
  
          .setDescription("Sunucunuzun toplam ses bilgileri verilmiştir.");
  
          message.channel.send(top2);
    } else {
        message.channel.send("Lütfen bir değer belirtin, değerler: voice, text");
    }
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['top'],
    permLevel: 0,
    kategori: "bot",
  };
  exports.help = {
    name: 'top',
    description: 'Botun istatistiklerini gösterir.',
    usage: '',
  };