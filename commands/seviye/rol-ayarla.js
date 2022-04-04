exports.run = async (client,message,args, db) => {
    var {MessageEmbed} = require("discord.js")
    if (!await db.fetch(`${message.guild.id}.level`)) return message.channel.send("Level sistemi aktif değil!");
    if(!Array.isArray(await db.fetch(`${message.guild.id}.level.roles.text`))){
        await db.set(`${message.guild.id}.level.roles.text`,[])
    }
    if(!Array.isArray(await db.fetch(`${message.guild.id}.level.roles.voice`))){
        await db.set(`${message.guild.id}.level.roles.voice`,[])
      }
      if(!args[0]){
          var embed = new MessageEmbed()
          .setTitle(`${client.user.username} Level Sistemi`)
          .setDescription(`${global.deniedozel} Bir değer belirtin. **text** veya **voice**`)
          .setColor("RED")
         return message.channel.send(embed)
        }
        if(args[0].toLowerCase() === "voice"){
            if(!args[1]){
                var embed = new MessageEmbed()
                .setTitle(`${client.user.username} Level Sistemi`)
                .setDescription(`${global.deniedozel} Lütfen bir level yazın! Ör: ${prefix}level-rol-ayarla voice 15 @Rol`)
                .setColor("RED")
               return message.channel.send(embed)
            }
            if(args[1]){
                if(isNaN(args[1])) return message.channel.send(`${global.deniedozel} Lütfen sayı olarak level değeri yazın!`)
                if (Number(args[1]) < 1) return message.channel.send(`${global.deniedozel} Lütfen 1 den büyük bir sayı yazın!`)
            }
            var role = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.id === args[2]) || message.guild.roles.cache.find(a => a.name === args.slice(2).join(" "))
            if(!role){
                var embed = new MessageEmbed()
                .setTitle(`${client.user.username} Level Sistemi`)
                .setDescription(`${global.deniedozel} Rol bulunamadı`)
                .setColor("RED")
               return message.channel.send(embed)
            }
            if (message.guild.me.roles.highest.position <= role.position) {
                var embed = new MessageEmbed()
                .setTitle(`${client.user.username} Level Sistemi`)
                .setColor("RED")
                .setDescription(`${global.deniedozel} <@&${role.id}> rolünü yönetme yetkim yok. Lütfen rolümü bu rolün üstüne taşıyın`)
                return message.channel.send(embed);
            }
            if(await db.fetch(`${message.guild.id}.level.roles.voice`).map(a => a.rol === role.id)) return
            var basarili = new MessageEmbed()
            .setTitle(`${client.user.username} Level Sistemi`)
            .setDescription(`${global.tikozel} ${args[1]} seviyesinde <@&${role.id}> rolü verilecek (voice)`)
            .setColor("GREEN")
            message.channel.send(basarili);
            await db.push(`${message.guild.id}.level.roles.voice`,{rol:role.id,lvl:args[1]})
        }
        else if(args[0].toLowerCase() === "text"){
            if(!args[1]){
                var embed = new MessageEmbed()
                .setTitle(`${client.user.username} Level Sistemi`)
                .setDescription(`${global.deniedozel} Lütfen bir level yazın! Ör: ${prefix}level-rol-ayarla text 15 @Rol`)
                .setColor("RED")
               return message.channel.send(embed)
            }
            if(args[1]){
                if(isNaN(args[1])) return message.channel.send(`${global.deniedozel} Lütfen sayı olarak level değeri yazın.`)
                if (Number(args[1]) < 1) return message.channel.send(`${global.deniedozel} Lütfen 1 den büyük bir sayı yazın`)
            }
            var role = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.id === args[2]) || message.guild.roles.cache.find(a => a.name === args.slice(2).join(" "))
            if(!role){
                var embed = new MessageEmbed()
                .setTitle(`${client.user.username} Level Sistemi`)
                .setDescription(`${global.deniedozel} Rol bulunamadı!`)
                .setColor("RED")
               return message.channel.send(embed)
            }
            if (message.guild.me.roles.highest.position <= role.position) {
                var embed = new MessageEmbed()
                .setTitle(`${client.user.username} Level Sistemi`)
                .setColor("RED")
                .setDescription(`${global.deniedozel} <@&${role.id}> rolünü yönetme yetkim yok. Lütfen rolümü bu rolün üstüne taşıyın!`)
                return message.channel.send(embed);
            }
            if(await db.fetch(`${message.guild.id}.level.roles.text`).map(a => a).includes(role.id)) return console.log("e")
            var basarili = new MessageEmbed()
            .setTitle(`${client.user.username} Level Sistemi`)
            .setDescription(`${global.tikozel} ${args[1]} seviyesinde <@&${role.id}> rolü verilecek (text).`)
            .setColor("GREEN")
            message.channel.send(basarili);
            await db.push(`${message.guild.id}.level.roles.text`,{rol:role.id,lvl:args[1]})
        }
        else return message.channel.send("Lütfen **text** veya **voice** yazın!");
      
} 
exports.conf = {
    Enabled:true,
    guildOnly:true,
    permLevel:4,
    aliases:["lrv","levelrolayarla","levelrol-ayarla","level-rolayarla","level-rol-ayarla"]
}
exports.help = {
    name:"level-rol-ayarla",
    description:"",
    usage:""
}