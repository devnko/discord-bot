const Discord = require("discord.js");
exports.run = async (client, message, args, mongoab, ayarlar) => {
  try {
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
    let kişi = message.mentions.members.first() || message.member;

    const env = new  Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(kişi.user.username,kişi.user.avatarURL({dynamic:true}), client.ayarlar.destek)
    .setFooter(client.ayarlar.footer, kişi.user.avatarURL({dynamic:true}))
    .addField('> <:package_member:857162042385104906> -> Kullanıcı', kişi.user.tag, true)
    .addField('> <a:package_coin:857329711385411604> -> Pac Coini',await db.fetch(`goldkredi_${kişi.id}`) || 0,true)
    .addField('> :dollar: -> Bankadaki Parası', await db.fetch(`banka_${kişi.id}`) || 0 ,true)
    .addField('> <a:package_okey:857330375263911986> Alınan Rozetler:', `
    ${global.bronz} Bronz Rozeti: ${await db.fetch(`bronz_${kişi.id}`) ? '**Alınmış!**':'**Alınmamış!**'}
    ${global.gumus} Gümüş Rozeti: ${await db.fetch(`gumus_${kişi.id}`) ? '**Alınmış!**':'**Alınmamış!**'}
    ${global.demir} Demir Rozeti: ${await db.fetch(`demir_${kişi.id}`) ? '**Alınmış!**':'**Alınmamış!**'}
    ${global.altin} Altın Rozeti: ${await db.fetch(`altin_${kişi.id}`) ? '**Alınmış!**':'**Alınmamış!**'}
    ${global.elmas} Elmas Rozeti: ${await db.fetch(`elmas_${kişi.id}`) ? '**Alınmış!**':'**Alınmamış!**'}
    ${global.titanyum} Titanyum Rozeti: ${await db.fetch(`titanyum_${kişi.id}`) ? '**Alınmış!**':'**Alınmamış!**'}
    `)
    message.channel.send(env)
      }
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["envanter"],
  permLevel: 0
};

exports.help = {
  name: "envanter",
  description: "",
  usage: "envanter"
};
