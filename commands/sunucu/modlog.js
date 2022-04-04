const Discord = require("discord.js")
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {


    let rol = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!args[0]) {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`Merhaba ${message.author}, Eğer mod log kanalını ayarlamak istiyorsan bir değer belirt!\n**${prefix}modlog ayarla #kanal** veya **${prefix}modlog sıfırla**`)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
            return message.channel.send(embed)
    }

    if(args[0] === "ayarla") {
        if(await db.has(`${message.guild.id}.modlogtoken`) === true) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`Merhaba ${message.author}, Malesef, Ayarlanmış bir şeyi tekrar ayarlayamazsın (<#${await db.fetch(`modlog_${message.guild.id}`)}>).`)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
            return message.channel.send(embed)
        }

        if(!rol) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`Merhaba ${message.author}, Eğer **Mod Logu**'nu ayarlamak istiyorsan bir kanal etiketle!`)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
            return message.channel.send(embed)
        }
    let webhook = await rol.createWebhook(`Package Mod-Log`, {
      avatar: client.user.avatarURL(),
    })
    await db.set(`${message.guild.id}.modlogid`, webhook.id)
    await db.set(`${message.guild.id}.modlogtoken`, webhook.token)
      
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`Merhaba ${message.author}, Başarılı bir şekilde **Mod Logu** ayarlandı! (${rol})`)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
            return message.channel.send(embed)
    }

    if(args[0] === "sıfırla") {
        if(!await db.has(`${message.guild.id}.modlogtoken`) === true) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`Merhaba ${message.author}, Malesef, Ayarlanmamış ve ya Sıfırlanmış bir şeyi tekrardan sıfırlayamazsın.`)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
            return message.channel.send(embed)
        }
let id = await db.fetch(`${message.guild.id}.modlogid`);
if (!id) id = console.log('Modlog webhookunu bulamıyom oç')
let toqen = await db.fetch(`${message.guild.id}.modlogtoken`); //mal amk
if (!toqen) toqen = console.log('Modlog webhookunu bulamıyom oç')
const hookab = new Discord.WebhookClient(id, toqen);
hookab.delete().then(console.log(`${message.guild.name} Webhook yani modlogu bu swden sildim ab.`)).catch(err => console.log(err));

            await db.delete(`${message.guild.id}.modlogid`)
            await db.delete(`${message.guild.id}.modlogtoken`)
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`Merhaba ${message.author}, Başarılı bir şekilde **Mod Logu** sıfırlandı!`)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
            return message.channel.send(embed)
    }

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["mod-log"],
    permLevel: 4
}

exports.help = {
    name: "modlog",
    description: "Mod log kanalını ayarlarsınız.",
    usage: "w!modlog <ayarla #log/sıfırla>"
}