exports.run = async (client,msg,args,db) =>{
    var {MessageEmbed} = require("discord.js")
    var message = msg
    if (!await db.fetch(`${message.guild.id}.level`)) return message.channel.send("Level sistemi aktif değil!");
    if(!args[0]){
        var embed = new MessageEmbed()
        .setTitle(`${client.user.username} Level Sistemi`)
        .setDescription(`${global.deniedozel} Bir değer belirtin. **text** veya **voice**`)
        .setColor("RED")
        return msg.channel.send(embed)
    }
    if(args[0].toLowerCase() === "voice"){
        if(!args[1]){
            var embed = new MessageEmbed()
            .setTitle(`${client.user.username} Level Sistemi`)
            .setDescription(`${global.deniedozel} Lütfen bir level değeri yazın!`)
            .setColor('RED')
            return msg.channel.send(embed);
        }
        if(isNaN(args[1])){
           var embed = new MessageEmbed()
           .setTitle(`${client.user.username} Level Sistemi`)
           .setDescription(`${global.deniedozel} Lütfen **SAYI DEĞERİ OLARAK** level yazın!`)
           .setColor('RED')
           return msg.channel.send(embed);
        }
        var voiceRoles = await db.fetch(`${message.guild.id}.level.roles.voice`);
        if (!voiceRoles) return message.channel.send(`${global.deniedozel} Zaten hiç rol ayarlanmamış!`);
        var rakam = 0
        voiceRoles.forEach(a =>rakam=rakam+1)
        if(!voiceRoles.filter(a => a.lvl === args[1])) return message.channel.send(`${global.deniedozel} Rol Bulunamadı!`)
        if(rakam === 1){
            await db.delete(`${message.guild.id}.level.roles.voice`)
        } else {
            var oso = []
            voiceRoles.filter(a=> {
                a.lvl !== args[1]
            }).forEach(a => oso.push(a))
            await db.set(`${message.guild.id}.level.roles.voice`,oso)
        }
        var embed = new MessageEmbed()
           .setTitle(`${client.user.username} Level Sistemi`)
           .setDescription(`${global.deniedozel}  Rol Silindi.`)
           .setColor('GREEN')
           return msg.channel.send(embed);
    } else if (args[0].toLowerCase() === 'text') {
       if(!args[1]){
           var embed = new MessageEmbed()
           .setTitle(`${client.user.username} Level Sistemi`)
           .setDescription(`${global.deniedozel} Lütfen bir level değeri yazın!`)
           .setColor('RED')
           return msg.channel.send(embed);
       }
       if(isNaN(args[1])){
          var embed = new MessageEmbed()
          .setTitle(`${client.user.username} Level Sistemi`)
          .setDescription(`${global.deniedozel} Lütfen **SAYI DEĞERİ OLARAK** level yazın!`)
          .setColor('RED')
          return msg.channel.send(embed);
       }
       var textRoles = await db.fetch(`${message.guild.id}.level.roles.text`);
       if (!textRoles) return message.channel.send(`${global.deniedozel} Zaten hiç rol ayarlanmamış!`);
       var rakam = 0
       textRoles.forEach(a =>rakam=rakam+1)
       if(!textRoles.filter(a => a.lvl === args[1])) return message.channel.send(`${global.deniedozel} Rol Bulunamadı!`)
       if(rakam === 1){
        await db.delete(`${message.guild.id}.level.roles.text`)
       } else {
           var oso = []
           textRoles.filter(a=> {
               a.lvl !== args[1]
           }).forEach(a => oso.push(a))
           await db.set(`${message.guild.id}.level.roles.text`,oso)
       }
       var embed = new MessageEmbed()
          .setTitle(`${client.user.username} Level Sistemi`)
          .setDescription(`${global.deniedozel} Rol Sıfırlandı.`)
          .setColor('GREEN')
          return msg.channel.send(embed);
    } else return message.reply(new MessageEmbed()
    .setTitle(`${client.user.username} Level Sistemi`)
    .setDescription(`${global.deniedozel} Lütfen sadece voice veya text yazın!`)
    .setColor('RED'));
   }
   exports.conf = {
       Enabled:true,
       guildOnly:true,
       permLevel:4,
       aliases:["lrs","levelrol-sıfırla","level-rolsıfırla","level-rol-sıfırla"]
   }
   exports.help = {
       name:"level-rol-sıfırla",
       description:"",
       usage:""
   }