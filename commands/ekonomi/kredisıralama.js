const Discord = require("discord.js");
exports.run = async (client, message, args, mongo) => {  
    /*    let embed1 = new Discord.MessageEmbed()
        .setDescription("<a:yukleniyor2:821420487526580265> **Kredi Sıralama Verileri Hesaplanıyor.**")
        .setColor("BLUE");
  message.channel.send(embed1).then(sil=>sil.delete({timeout: 9000}))*/
    const db = require('quick.db');
  if(!await db.fetch(`s.${message.author.id}`)) {
    message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setFooter(client.ayarlar.footer,message.author.avatarURL({dynamic:true})).setDescription(`
**⚠️ Kullanım Şartı ⚠️ **

  Botun ekonomi sisteminde bug ve illegal kasmanız bottan **__sınırsız engelleneceğiniz__** ve paranızın sıfırlanacağı anlamına gelmektedir.
  Oluşabilecek herhangi bir problem sizin sorumluluğunuz altındadır. 
  Onaylamak ve devam etmek için \`onayla\` yazmalısınız, iptal etmek için herhangi bir şey yazabilirsiniz.`))
  
    const filter = response => {
      return response.author.id === message.author.id;
    };
  
    message.channel.awaitMessages(filter, { max: 1, time: 0, errors: ['time'] }).then(async collected => {  
      if(collected.first().content === 'onayla') {
        await db.set(`s.${message.author.id}`, true);
        return global.oky(message,`Ekonomi şartlarını onayladınız!`,true)
      } else return;
    });
  
  } else {
   const data = client.users.cache.filter(sa => !sa.bot).array().sort((a, b) => { return db.fetch(`goldkredi_${b.id}`) - db.fetch(`goldkredi_${a.id}`)});
   const filter = data.filter((a, b) => (db.fetch(`goldkredi_${b.id}`) + db.fetch(`goldkredi_${a.id}`)) > 0)
   const top10 = filter.splice(0, 10)

   const map = top10.map((item, index) => `**${index + 1}.** <@${item.id}> (${item.tag}) => **${db.fetch(`goldkredi_${item.id}`) || 0}** Kredi`).join("\n")

 if(!map) {
      var yok = new Discord.MessageEmbed()
          .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic:true}))
          .setColor(client.ayarlar.embedRenk)
          .setDescription(`Üyeler arasından Gold Kredisi olan birini bulamadım!`)
          .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic:true}))
          return message.channel.send(yok);
  }
 
    var embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic:true}))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`Merhaba ${message.author}, Kredi'si bulunan kişiler aşağıda gözükecektir.`)
        .addField("Kredi Sıralaması", `${map}`)
        .setFooter(`${client.ayarlar.embedFooter}`, message.author.avatarURL({dynamic:true}))
    message.channel.send(embed)
};
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: []
};
exports.help = {
  name: 'kredisıralama',
  description: 'Kredi sıralamasını gösterir',
  usage: 'w!kredisıralama'
};
