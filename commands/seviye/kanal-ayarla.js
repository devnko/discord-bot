exports.run = async (client,msg,args, db) => {

    const { MessageEmbed } = require("discord.js");
    var message = msg
    if (!await db.fetch(`${message.guild.id}.level`)) return message.channel.send(`${global.deniedozel} Level sistemi aktif değil!`);
    if (!args[0]) return msg.reply(new MessageEmbed()
    .setColor("RED")
    .setDescription(`${global.deniedozel} Lütfen bir kanal etiketleyin veya kapat yazın.`));

    if (args[0].toLowerCase() === "sil") {
        if (!await db.fetch(`${msg.guild.id}.level.channel`)) return msg.reply(new MessageEmbed()
        .setColor("RED")
        .setDescription(`${global.deniedozel} Level-log kanalı zaten ayarlanmamış!`));
        msg.reply(new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`${global.deniedozel} Level-log kanalı silindi.`));
        await db.delete(`${msg.guild.id}.level.channel`);
        return;
    }

    let kanal = msg.mentions.channels.first() || msg.guild.channels.cache.get(args[0]);
    if (!kanal) return msg.reply(new MessageEmbed()
    .setColor("RED")
    .setDescription(`${global.deniedozel} Kanal bulunamadı`));
    if (kanal.type !== "text") return msg.reply(new MessageEmbed()
    .setColor("RED")
    .setDescription(`${global.deniedozel} Level-log kanalının bir yazı kanalı olması zorunludur!`));
    if (!kanal.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return msg.reply(new MessageEmbed()
    .setColor("RED")
    .setDescription(`${global.deniedozel} Bu kanala yazı yazma iznim yok!`));

    msg.channel.send(new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`${global.tikozel} <#${kanal.id}> kanalı level-log kanalı olarak ayarlandı!`));
    await db.set(`${msg.guild.id}.level.channel`,kanal.id);
};
exports.conf = {
    Enabled:true,
    guildOnly:true,
    permLevel:4,
    aliases: ["lka","levelkanal-ayarla","level-kanalayarla","level-kanal-ayarla"]
};
exports.help = {
    name:"level-kanal-ayarla"
};