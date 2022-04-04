exports.run = async (client,msg,args, db) =>{
    var {MessageEmbed} = require("discord.js")
    var user = msg.mentions.users.first() || msg.author
    var member = msg.mentions.members.first() || msg.member
    var server = msg.guild
    const moment = require("moment");
    require('moment-duration-format');
    var message = msg
    if (!await db.fetch(`${message.guild.id}.level`)) return message.channel.send("Level sistemi aktif değil!");
    var statlar = {
        mesaj:{
         xp:await db.fetch(`${server.id}.messages.${user.id}.xp`) || 0,
         lvl:await db.fetch(`${server.id}.messages.${user.id}.lvl`) || 0,
         msg:await db.fetch(`${server.id}.messages.${user.id}`) || 0
        },
        ses:{
       xp:await db.fetch(`${server.id}.voice.${user.id}.xp`) || 0,
       lvl:await db.fetch(`${server.id}.voice.${user.id}.lvl`) || 0,
       voice:await db.fetch(`${server.id}.voice.${user.id}`) || 0,
        }
    }
    var embed = new MessageEmbed()
    .setTitle(`${client.user.username} Level Sistemi`)
    .setColor(user.presence.status.replace("dnd","RED").replace("idle","YELLOW").replace("online","GREEN").replace("offline","GREY"))
    .addField("Mesaj İstatistikleri",`${statlar.mesaj.lvl} Level ${statlar.mesaj.xp} XP ${statlar.mesaj.msg} Mesaj`)
    .addField("Ses İstatistikleri",`${statlar.ses.lvl} Level ${statlar.ses.xp} XP ${moment.duration(statlar.ses.voice).format('D [Day], H [Hours], m [Minutes], s [seconds]')} `)
    msg.channel.send(embed)
}
exports.conf = {
    Enabled:true,
    guildOnly:true,
    permLevel:0,
    aliases:[]
}
exports.help = {
    name:"rank",
    description:"",
    usage:""
}