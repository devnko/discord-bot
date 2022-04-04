const Discord = require("discord.js")
exports.run = async (client, message, args, db, ayarlar, prefix) => {
    const member = message.mentions.users.filter(s => s.ID !== client.user).first() || message.guild.members.cache.get(args[0])
    const id = args[1]
    if(!member) return message.channel.send("Bir kullanıcı etiketle!")
	if(!id) return message.channel.send("Bir id belirt!")
    var data = await db.get(`uyarı_${member.id}_${message.guild.id}`)

   if(!await db.has(`uyarı_${member.id}_${message.guild.id}`) === true) {
       var yok = new Discord.MessageEmbed()
           .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic:true}))
           .setColor(client.ayarlar.embedRenk)
           .setDescription(`${member} Adlı kişinin hiç bir uyarısı yok!`)
           .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic:true}))
           return message.channel.send(yok);
   }

   
   if(data.length === 1) {
       await db.delete(`uyarı_${member.id}_${message.guild.id}`)
    var yok = new Discord.MessageEmbed()
           .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic:true}))
           .setColor(client.ayarlar.embedRenk)
           .setDescription(`Başarılı bir şekilde ${member} adlı kişinin, **${id}** İD'li uyarısını sildim!`)
           .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic:true}))
           return message.channel.send(yok);
   } else {
    await db.set(`uyarı_${member.id}_${message.guild.id}`, data.filter(s => s.uyarısayı !== id))
    var yok = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic:true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`Başarılı bir şekilde ${member} adlı kişinin, **${id}** İD'li uyarısını sildim!`)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic:true}))
            return message.channel.send(yok);
   }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["uyarı-sil"],
    permLevel: 4
}

exports.help = {
    name: "uyarısil",
    description: "uyarı listesini gösterir.",
    usage: "w!uyarısil @kişi id"
}