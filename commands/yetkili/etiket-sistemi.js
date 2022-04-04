const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
      let etiket = args[0]
    if(!etiket) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setFooter(client.ayarlar.footerEmbed).setDescription(`
    Etiket Sistemi
    Aç: **${prefix}etiket-sistemi :recycle: #kanal**
    Kapat: **${prefix}etiket-sistemi sıfırla**`)) 
    if(etiket == "sıfırla") {
        await db.delete(`${message.guild.id}.ekanal`)
        await db.delete(`${message.guild.id}.tagabo`)
        await db.delete(`${message.guild.id}.etiketsistem`) 
        return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.tikozel} **Etiket sistemi başarıyla sıfırlandı.**`));
    } else {
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
        if(!channel) return message.channel.send()
        await db.set(`${message.guild.id}.ekanal`, channel.id) //kanal
        await db.set(`${message.guild.id}.tagabo`, etiket) //tag
        await db.set(`${message.guild.id}.etiketsistem`, true) //sisteminkendisi
        return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setFooter(`• Etiket sistemini sıfırlamak için **${prefix}etiket-sistemi** sıfırla yazabilirsiniz.`).setDescription(`
${global.tikozel} Sunucu etiketi başarıyla \`${etiket}\` olarak ayarlandı. Sunucuya katılan üyelere sunucu etiketin verildiğini bildirilen kanal ise ${channel} olarak ayarlandı.
**Yeni gelenlerin ismine, ayarladığınız sunucu etiketini koyar.**
\`Örnek: ${etiket} | ${client.user.username}\`
        `)).then(
channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.tikozel} **Sunucu etiketi bilgilendirme kanalı başarıyla bu kanala ayarlandı. Bu kanala üyelere sunucu etiketin verildiği bildirilecektir.**`)).catch(err => {message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`**${global.carpiozel} Kanala Mesaj Atamıyorum, Lütfen İzinlerimi Kontrol Edin!**`))}));
    }
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["etiketsistemi","etiket-sistemi"],
  permLevel: 4
};

exports.help = {
  name: "etiket-sistemi",
  description: "",
  usage: "!!etiket-sistemi"
};