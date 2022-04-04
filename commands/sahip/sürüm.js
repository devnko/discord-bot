const Discord = require("discord.js")

exports.run = (client, message, args) => {
    if(message.author.id !== "548145246983159808") return;

    let yazı = args.slice(0).join(" ")
    if(!yazı) return message.channel.send("Lütfen yapılacak durumu yazın.")
	message.delete()
    return client.channels.cache.get("787958955505877002").send(yazı)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['status','durum']
}

exports.help = {
    name: "durum",
    description: "güncelleme duyurusu atarsınız",
    usage: "güncelleme <yazı>"
}