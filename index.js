const Discord = require("discord.js");
const client = global.client;
const db = global.db;
let acik = global.online;
let kapali = global.dnd;
client.on("guildCreate", async guild => {
  if (guild.members.cache.get(guild.owner.user.tag)) {
    if ((await db.fetch(`karalist_${guild.ownerID}`)) === "aktif") {
      return guild.leave();
    }
    if ((await db.fetch(`sunucukaraliste_${guild.id}`)) === "aktif") {
      return guild.leave();
    }

    let karaliste;
    if ((await db.fetch(`sunucukaraliste_${guild.id}`)) === "aktif") {
      karaliste = "Evet";
    } else {
      karaliste = "Hayır";
    }

    let karaliste2;
    if ((await db.fetch(`karalist_${guild.ownerID}`)) === "aktif") {
      karaliste2 = "Evet";
    } else {
      karaliste2 = "Hayır";
    }

    let kanal = new Discord.WebhookClient(
      "855551359017025536",
      "Eo30EBTCx-588wqox-owNQww_jf4Uc6AaZnxa7u6wo5Mc_QF_jY5Cv-UmmkHfIlv296b"
    );
    let giriş = new Discord.MessageEmbed() //https://discordapp.com/api/webhooks/855551359017025536/Eo30EBTCx-588wqox-owNQww_jf4Uc6AaZnxa7u6wo5Mc_QF_jY5Cv-UmmkHfIlv296b
      .setColor(client.ayarlar.embedRenk)
      .setAuthor(
        `${guild.name} Adlı sunucuya eklendim!`,
        client.user.avatarURL()
      )
      .addField(
        "<:say:799747394236973087> | Sunucu Bilgileri",
        `
     > • | Sunucu Adı: **\`${guild.name}\`**
     > • | Sunucu ID: **\`${guild.id}\`**
     > • | Sunucu Üye Sayısı: **\`${guild.memberCount}\`**
     > • | Sunucu Karalistedemi?: **\`${karaliste}\`**
     `,
        true
      )
      .addField(
        "<:say:799747394236973087> | Sahip Bilgileri",
        `
     > • | Sahip Adı: **\`${guild.members.cache.get(guild.ownerID).user.tag}\`**
     > • | Sahip ID: **\`${guild.ownerID}\`**
     > • | Karalistedemi?: **\`${karaliste2}\`**
     `,
        true
      )
      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    kanal.send(giriş).catch(console.error);
  } else {
    if ((await db.fetch(`karalist_${guild.ownerID}`)) === "aktif") {
      return guild.leave();
    }
    if (await db.fetch(`sunucukaraliste_${guild.id}`) === "aktif") {
      return guild.leave();
    }

    let karaliste;
    if ((await db.fetch(`sunucukaraliste_${guild.id}`)) === "aktif") {
      karaliste = "Evet";
    } else {
      karaliste = "Hayır";
    }

    let karaliste2;
    if ((await db.fetch(`karalist_${guild.ownerID}`)) === "aktif") {
      karaliste2 = "Evet";
    } else {
      karaliste2 = "Hayır";
    }

    let kanal = new Discord.WebhookClient(
      "855551359017025536",
      "Eo30EBTCx-588wqox-owNQww_jf4Uc6AaZnxa7u6wo5Mc_QF_jY5Cv-UmmkHfIlv296b"
    );
    let giriş = new Discord.MessageEmbed() //https://discordapp.com/api/webhooks/855551359017025536/Eo30EBTCx-588wqox-owNQww_jf4Uc6AaZnxa7u6wo5Mc_QF_jY5Cv-UmmkHfIlv296b
      .setColor(client.ayarlar.embedRenk)
      .setAuthor(
        `${guild.name} Adlı sunucuya eklendim!`,
        client.user.avatarURL()
      )
      .addField(
        "<:say:799747394236973087> | Sunucu Bilgileri",
        `
   > • | Sunucu Adı: **\`${guild.name}\`**
   > • | Sunucu ID: **\`${guild.id}\`**
   > • | Sunucu Üye Sayısı: **\`${guild.memberCount}\`**
   > • | Sunucu Karalistedemi?: **\`${karaliste}\`**
   `,
        true
      )
      .addField(
        "<:say:799747394236973087> | Sahip Bilgileri",
        `
   > • | Sahip Adı: **\`Bilinmiyor\`**
   > • | Sahip ID: **\`Bilinmiyor\`**
   > • | Karalistedemi?: **\`Bilinmiyor\`**
   `,
        true
      )
      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    kanal.send(giriş).catch(console.error);
  }
});

client.on("guildDelete", async guild => {
  await db.delete(guild.id) 
  if (guild.members.cache.get(guild.owner.user.tag)) {
    let kanal = new Discord.WebhookClient(
      "855551623460028447",
      "h3WL2z5ilsJfr9ke5heC75P0BDq6fbwgaOd7mtu-ZkeqIluMTH9d9hNRyQINfaVWJc6i"
    );
    let karaliste;
    if ((await db.fetch(`sunucukaraliste_${guild.id}`)) === "aktif") {
      karaliste = "Evet";
    } else {
      karaliste = "Hayır";
    }

    let karaliste2;
    if ((await db.fetch(`karalist_${guild.ownerID}`)) === "aktif") {
      karaliste2 = "Evet";
    } else {
      karaliste2 = "Hayır";
    }

    let çıkış = new Discord.MessageEmbed() //https://discordapp.com/api/webhooks/855551623460028447/h3WL2z5ilsJfr9ke5heC75P0BDq6fbwgaOd7mtu-ZkeqIluMTH9d9hNRyQINfaVWJc6i
      .setColor(client.ayarlar.embedRenk)
      .setAuthor(
        `${guild.name} Adlı sunucudan atıldım!`,
        client.user.avatarURL()
      )
      .addField(
        "<:say:799747394236973087> | Sunucu Bilgileri",
        `
     > • | Sunucu Adı: **\`${guild.name}\`**
     > • | Sunucu ID: **\`${guild.id}\`**
     > • | Sunucu Üye Sayısı: **\`${guild.memberCount}\`**
     > • | Sunucu Karalistedemi?: **\`${karaliste}\`**
     `,
        true
      )
      .addField(
        "<:say:799747394236973087> | Sahip Bilgileri",
        `
     > • | Sahip Adı: **\`${guild.members.cache.get(guild.ownerID).user.tag}\`**
     > • | Sahip ID: **\`${guild.ownerID}\`**
     > • | Karalistedemi?: **\`${karaliste2}\`**
     `,
        true
      )
      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    kanal.send(çıkış).catch(console.error);
  } else {
    let kanal = new Discord.WebhookClient(
      "855551623460028447",
      "h3WL2z5ilsJfr9ke5heC75P0BDq6fbwgaOd7mtu-ZkeqIluMTH9d9hNRyQINfaVWJc6i"
    );
    let karaliste;
    if ((await db.fetch(`sunucukaraliste_${guild.id}`)) === "aktif") {
      karaliste = "Evet";
    } else {
      karaliste = "Hayır";
    }

    let karaliste2;
    if ((await db.fetch(`karalist_${guild.ownerID}`)) === "aktif") {
      karaliste2 = "Evet";
    } else {
      karaliste2 = "Hayır";
    }

    let çıkış = new Discord.MessageEmbed() //https://discordapp.com/api/webhooks/855551623460028447/h3WL2z5ilsJfr9ke5heC75P0BDq6fbwgaOd7mtu-ZkeqIluMTH9d9hNRyQINfaVWJc6i
      .setColor(client.ayarlar.embedRenk)
      .setAuthor(
        `${guild.name} Adlı sunucudan atıldım!`,
        client.user.avatarURL()
      )
      .addField(
        "<:say:799747394236973087> | Sunucu Bilgileri",
        `
     > • | Sunucu Adı: **\`${guild.name}\`**
     > • | Sunucu ID: **\`${guild.id}\`**
     > • | Sunucu Üye Sayısı: **\`${guild.memberCount}\`**
     > • | Sunucu Karalistedemi?: **\`${karaliste}\`**
     `,
        true
      )
      .addField(
        "<:say:799747394236973087> | Sahip Bilgileri",
        `
     > • | Sahip Adı: **\`Bilinmiyor\`**
     > • | Sahip ID: **\`${guild.ownerID}\`**
     > • | Karalistedemi?: **\`${karaliste2}\`**
     `,
        true
      )
      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    kanal.send(çıkış).catch(console.error);
  }
});
/*  eklendim atıldım bitiş */

// eklenince kanal açma
/*
client.on("guildCreate", guild => {
  if (guild.members.cache.get(client.user.id).hasPermission("ADMINISTRATOR")) {
    let role = guild.roles.cache.find(r => r.name === "@everyone");
    guild.channels.create("fireofeternity", "text").then(kurallar => {
      kurallar.createOverwrite(role, {
        SEND_MESSAGES: false
      });
      let p = "!!";
      const wenbayrak = new Discord.MessageEmbed()
        .setAuthor(
          `${client.ayarlar.botİsim} Bot`,
          guild.iconURL({ dynamic: true })
        )
        .setColor(client.ayarlar.embedRenk)
        .setDescription(
          `
  > • | Selam sayın sunucu üyeleri!
  > • | Ben **${client.user.username}**, Amacım: \`Sunucunuzu en iyi ve en hızlı şekilde koruyup sizlere güzel bir hizmet vermek!\`,
  > • | Genel Bilgiler:
  > • | Prefix: **${p} (Değiştirilebilir)**
  `
        )
        .addField(
          "<:prefix:819826668101304342> | Beğenebileceğiniz komutlar:",
          `
  > • | [${p}yardım](${client.ayarlar.destek}) --> **Yardım menümü gösterir.**
  > • | [${p}istatistik](${client.ayarlar.destek}) --> **İstatistiklerime bakarsınız.**
  > • | [${p}shard](${client.ayarlar.destek}) --> **Shard bilgilerime bakarsınız.**
  `
        )
        .addField(
          ":link: | Bağlantılar",
          `
  • [Davet Et](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) • [Destek Sunucum](${client.ayarlar.destek}) •
  `
        )
        .setFooter(
          client.ayarlar.embedFooter,
          guild.iconURL({ dynamic: true })
        );
      kurallar.send(wenbayrak).catch(console.error);
    });
  }
});*/
//son
client.on("message", async message => {
  const {Database} = require('npm.db')
const data = new Database("database");
  const msg = message;
  if (message.author.bot) return;
  let açıkmı = await data.get(`${message.guild.id}.seviye`);
  if (!açıkmı) return;

  let guncelseviye = await data.get(
    `${message.guild.id}.${message.author.id}.seviye`
  );
  if (!guncelseviye || guncelseviye == null)
    await data.set(`${message.guild.id}.${message.author.id}.xptolvl`, 100);
  if (!guncelseviye || guncelseviye == null)
    await data.set(`${message.guild.id}.${message.author.id}.seviye`, 1);
  if (!guncelseviye || guncelseviye == null)
    await data.set(`${message.guild.id}.${message.author.id}.xp`, 0);
  let verilecek = await data.get(`${message.guild.id}.seviyexp`);
  if (!verilecek) verilecek = 4;
  await data.add(`${message.guild.id}.${message.author.id}.xp`, verilecek);

  let xptolvl = await data.get(
    `${message.guild.id}.${message.author.id}.xptolvl`
  );
  let şuanxp = await data.get(`${message.guild.id}.${message.author.id}.xp`);
  if (şuanxp > xptolvl) {
    await data.add(`${message.guild.id}.${message.author.id}.seviye`, 1);
    let anlık = await data.fetch(
      `${message.guild.id}.${message.author.id}.seviye`
    );
    await data.add(
      `${message.guild.id}.${message.author.id}.xptolvl`,
      anlık * 100
    );
    let seviyelog = await data.get(`${message.guild.id}.seviyelog`);
    let reallog = message.guild.channels.cache.get(seviyelog);
    const seviyeatlama = `
${global.ateş} <@${msg.author.id}> Level Atladı!! Yeni Leveli;
${global.online} **\`Level: ${anlık}\`**
  `;
    if (!reallog) reallog = message.channel;
    reallog.send(seviyeatlama);
  }
});
/*
client.ws.on("INTERACTION_CREATE", async interaction => {
let server = client.ayarlar.destek
let ayarlar = require('./ayarlar.json')
  const command = interaction.data.name.toLowerCase();

  if (command == "yardım") {

      };
    client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: await createAPIMessage(interaction, yardım)
      }
    });
  })
async function createAPIMessage(interaction, content) {
  const apiMessage = await Discord.APIMessage.create(
    client.channels.resolve(interaction.channel_id),
    content
  )
    .resolveData()
    .resolveFiles();

  return { ...apiMessage.data, files: apiMessage.files };
}
*/

client.on("message", async message => {
if(message.author.bot) {
let sj = await db.get(`${message.guild.id}.${message.channel.id}.botsilici`);
if(!sj) return;
setTimeout(function() {
message.delete()
}, sj)
}
})
const AntiSpam = require("./spam.js");
const { link } = require("node-superfetch");

client.on("message", async message => {
  if(!message.member) return;
  if(!message.guild) return;
  if (!message.member.hasPermission('ADMINISTRATOR')) {
      if(!message.guild.members.cache.get(client.user.id).hasPermission("ADMINISTRATOR")) return;
     let spam = await db.fetch(`spamEngel_${message.guild.id}`) 
     if(!spam) return;
     AntiSpam(client, message);
    }
});

client.on('guildMemberAdd', async member => {
  let spam = await db.fetch(`spamvar_${member.guild.id}`)
let muteRole = await db.fetch(`muteRole_${member.guild.id}`)
  if(spam === member.id){
        setTimeout(() => {
        member.roles.cache.forEach(s => {
      member.roles.remove(s)
    })
              member.roles.add(muteRole)
        }, 3000)
        setTimeout(async () => {
              member.roles.remove(muteRole)
          await db.delete(`spamvar_${member.guild.id}`)
          member.guild.roles.cache.forEach(async r => {
const i = await db.fetch(`${member.guild.id}.spam.${member.id}.roles.${r.id}` )
if(i != r.id)  return;
if(i){
  member.roles.add(i)
}
})

  }, 600000)  

  }
}) 

client.on('message', async msg => {
if(msg.author.bot) return;
let acikmi = await db.fetch(`${msg.guild.id}.saas`)
if(!acikmi) return;
let selamlar = [
"sa",
"selamın aleyküm",
"selamun aleykum",
"selamın aleykum",
"selam",
"slm",
"sea"
];
if(acikmi == true){
if(selamlar.includes(msg.content.toLowerCase())){
msg.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Aleyküm Selam! Hoş Geldin, ${msg.author}!`))
}
};
})

client.on("guildMemberAdd", async member => {
  
  let hepsi = await db.get(`${member.guild.id}.panelhepsi`);
  let bot = await db.get(`${member.guild.id}.panelbot`);
  if (hepsi) {
    hepsi = member.guild.channels.cache.get(hepsi);
    if(hepsi) hepsi.setName(`Üye Sayısı • ${member.guild.memberCount}`);
  };
  if (bot) {
    if(!member.user.bot) return;
    bot = member.guild.channels.cache.get(bot);
    let botsayısı = member.guild.members.cache.filter(m => m.user.bot).size;
    if(bot) bot.setName(`Bot Sayısı • ${botsayısı}`);
  };
});

client.on("guildMemberRemove", async member => {
  let hepsi = await db.get(`${member.guild.id}.panelhepsi`);
  let bot = await db.get(`${member.guild.id}.panelbot`);
  if (hepsi) {
    hepsi = member.guild.channels.cache.get(hepsi);
    hepsi.setName(`Üye Sayısı • ${member.guild.memberCount}`);
  };
  if (bot) {
    if(!member.user.bot) return;
    bot = member.guild.channels.cache.get(bot);
    let botsayısı = member.guild.members.cache.filter(m => m.user.bot).size;
    bot.setName(`Bot Sayısı • ${botsayısı}`);
  };
});

client.on("guildMemberAdd", async member => {
 let bototorol = await db.get(`${member.guild.id}.bototorol`);
 let otorol = await db.get(`${member.guild.id}.otorol`);
let kanal = await db.get(`${member.guild.id}.otorolkanal`);
 if (bototorol) {
   if (member.user.bot) {
   if (member.guild.roles.cache.get(bototorol)) {
     let channel = member.guild.channels.cache.get(kanal)
   if(kanal) if(channel) channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.member} **Başarıyla** ${member} Bot'una Sunucunuzda Ayarlı Olan <@&${bototorol}> **Rolü Verildi**!`))
   member.roles.add(member.guild.roles.cache.get(bototorol), "FireOfEternity Bot Otorol");
 }}}
   if (otorol) {
   if (bototorol) if (member.user.bot) return; 
   if (!member.guild.roles.cache.get(otorol)) return;
     let channel = member.guild.channels.cache.get(kanal)
   if(kanal) if(channel) channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${global.member} **Başarıyla** ${member} Kullanıcısına Sunucunuzda Ayarlı Olan <@&${otorol}> **Rolü Verildi**!`))
   member.roles.add(member.guild.roles.cache.get(otorol), "FireOfEternity Normal Otorol");
 }
})
/*
const { Database } = require('npm.db')
const npmdb = new Database("database")
client.on("message", async message => { //ab nabıon // ASHLKFJHSFKŞALSDKFSD 
  if(message.content !== "!!foedb") return;
  npmdb.set("31", "sj"); //ilk kayıt 31 sj olsun AHGSHSJHSGFGSHJ
  
})*/
client.on("message", async (message) => {
  if(!message.guild) return;
  if(message.author.bot) return;
  let capslock = await db.fetch(`caps.${message.guild.id}`)

  if(capslock === true) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      if(message.mentions.channels.first()) return;
	  let caps = message.content.replace(" ", "").toUpperCase();
      let emoji = message.guild.emoji
      if(message.content.startsWith("https://") || message.content.startsWith("http://")) return;
      if(message.content === message.guild.emoji) return;
      if(message.content === caps) {
        let mesajj = [
          `${message.author}, Hey! Neden Capslock Açıyorsun, Kapat Hemen Onu Bakayım?`,
          `${message.author}, Seni gidi terbiyesiz seni! Bu sunucuda Büyük Harf Engel Filtresi aktif! Bu yüzden büyük harfle yazamazsın!`,
          `${message.author}, Bu Sunucudaki Capslock Engellemeler Ben Tarafından KORUNMAKTADIR!`
        ]
          let mesaj = Math.floor((Math.random() * mesajj.length));

          let id = makeid(10);
            function makeid(length) {
            var result = "";
            var characters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

            await db.push(`uyarı_${message.author.id}_${message.guild.id}`, { kullanıcı: message.author.id, sebep: "Büyük Harfle Yazmak", sunucu: message.guild.id, moderator: client.user.id, uyarısayı: id})
            /*db.add("günlük_capslock", +1)*/

            message.delete();
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`${mesajj[mesaj]}`)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
            return message.channel.send(embed1).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);
        }
    }
  }

  if(!capslock) return;
})
client.on("messageUpdate", async (oldMessage, newMessage) => {
  if(!oldMessage.guild) return;
  if(oldMessage.author.bot) return;

  let capslock = db.fetch(`capslock_${oldMessage.guild.id}`)

  if(capslock === "aktif") {
    if(!oldMessage.member.hasPermission("MANAGE_MESSAGES")) {
      if(newMessage.mentions.channels.first()) return;
      let emoji = oldMessage.guild.emoji
      if(newMessage.content.startsWith("https://") || newMessage.content.startsWith("http://")) return;
      if(newMessage.content === emoji) return;
      if(newMessage.content.toUpperCase()) {
        let mesajj = [
          `${oldMessage.author}, Seni gidi terbiyesiz seni! Bu sunucuda Büyük Harf Engel Filtresi aktif! Bu yüzden büyük harfle yazamazsın!`,
          `${oldMessage.author}, Bu sunucuyu ben koruyorum bu yüzden büyük harfle yazamazsın!`
        ]
          let mesaj = Math.floor((Math.random() * mesajj.length));

          let id = makeid(10);
            function makeid(length) {
            var result = "";
            var characters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

            db.push(`uyarı_${oldMessage.author.id}_${oldMessage.guild.id}`, { kullanıcı: oldMessage.author.id, sebep: "Mesajını Düzenleyerek Büyük Harfle Yazmak", sunucu: oldMessage.guild.id, moderator: client.user.id, uyarısayı: id})
            db.add("günlük_capslock", +1)

            newMessage.delete();
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, oldMessage.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`${mesajj[mesaj]}`)
            .setFooter(client.ayarlar.embedFooter, oldMessage.author.avatarURL({dynamic: true}))
            return oldMessage.channel.send(embed1).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);
        } else return;
    } else return;
  }

  if(!capslock) return;
})
//Capslock Engel

//Küfür Engel
client.on("message", message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let küfür = db.fetch(`küfürE_${message.guild.id}`)

  if(küfür === "aktif") {
   if(message.member.hasPermission("ADMINISTRATOR")) return;
   let kufur = require("./küfürler.json")
   let mesajj = [
    `${message.author}, Bu sunucuda Küfür Engel Filtresi aktif! Bu yüzden küfür edemezsin!`,
    `${message.author}, Bu sunucuyu ben koruyorum bu yüzden küfür edemezsin!`
  ]
    let mesaj = Math.floor((Math.random() * mesajj.length));
    if(kufur.some(word => message.content.includes(word))) {
          if (!message.mentions.users.first()) {
            let id = makeid(10);
            function makeid(length) {
            var result = "";
            var characters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

            db.push(`uyarı_${message.author.id}_${message.guild.id}`, { kullanıcı: message.author.id, sebep: "Küfür Etmek", sunucu: message.guild.id, moderator: client.user.id, uyarısayı: id})
            db.add(`küfür`, +1)
			      message.delete();
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`${mesajj[mesaj]}`)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
            return message.channel.send(embed1).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);
          }
      }
  }

  if(!küfür) return;
})

client.on("messageUpdate", (oldMessage, newMessage) => {
  if(oldMessage.author.bot) return;
  if(oldMessage.channel.type === "dm") return;

  let küfür = db.fetch(`küfürE_${oldMessage.guild.id}`)

  if(küfür === "aktif") {
   if(oldMessage.member.hasPermission("ADMINISTRATOR")) return;
   let kufur = require("./küfürler.json")
   let mesajj = [
    `${oldMessage.author}, Bu sunucuda Küfür Engel Filtresi aktif! Bu yüzden küfür mesajını düzenleyerek edemezsin!`,
    `${oldMessage.author}, Bu sunucuyu ben koruyorum bu yüzden mesajını düzenleyerek küfür edemezsin!`
  ]
    let mesaj = Math.floor((Math.random() * mesajj.length));
    if(kufur.some(word => newMessage.content.includes(word))) {
          if (!oldMessage.mentions.users.first()) {
            let id = makeid(10);
            function makeid(length) {
            var result = "";
            var characters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

            db.push(`uyarı_${oldMessage.author.id}_${oldMessage.guild.id}`, { kullanıcı: oldMessage.author.id, sebep: "Mesajını Düzenleyerek Küfür Etmek", sunucu: oldMessage.guild.id, moderator: client.user.id, uyarısayı: id})
            db.add(`küfür`, +1)
			      newMessage.delete();
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, oldMessage.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`${mesajj[mesaj]}`)
            .setFooter(client.ayarlar.embedFooter, oldMessage.author.avatarURL({dynamic: true}))
            return newMessage.channel.send(embed1).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);
          }
      }
  }

  if(!küfür) return;
})
//Küfür Engel

//Link Engel
client.on("message", message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let linkk = db.fetch(`linkK_${message.guild.id}`)

  if(linkk === "aktif") {
   if(message.member.hasPermission("ADMINISTRATOR")) return;
   let link = ["https://", "http://", "http", "https", "www", "www.", ".ly", ".com", ".net", ".com.tr", ".org", ".xyz", ".istanbul", ".store", "site", ".glitch.me", ".ml", ".cf", ".tk", ".rf", ".gf", ".org.tr", ".net.tr", ".info", ".av.tr", ".gen.tr", ".k12.tr", ".bel.tr", ".info.tr", ".biz.tr", ".gov.tr", ".web.tr", ".tv.tr", ".online", ".host", ".website", ".club", ".kim", ".email", ".store", ".blog", ".tech", ".promo", ".pink", ".blue", ".cafe", ".center", ".chat", ".city", ".company", ".life", ".ltd", ".media", ".salon", ".run", ".co", ".us", ".name", ".tv", ".pro", ".mobi", ".ist", ".cc", ".biz", ".bbs.tr", ".dr.tr", ".gg", ".me"]
   /*var regex = new RegExp(
    "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
  );*/
   let mesajj = [
    `${message.author}, Bu sunucuda Link Engel Filtresi aktif! Bu yüzden link atamazsın!`,
    `${message.author}, Bu sunucuyu ben koruyorum bu yüzden link atamazsın!`
  ]
    let mesaj = Math.floor((Math.random() * mesajj.length));
    if (link.some(word => message.content.includes(word)) === true) {
          if (!message.mentions.users.first()) {
            let id = makeid(10);
            function makeid(length) {
            var result = "";
            var characters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

            db.push(`uyarı_${message.author.id}_${message.guild.id}`, { kullanıcı: message.author.id, sebep: "Link Atmak", sunucu: message.guild.id, moderator: client.user.id, uyarısayı: id})
            db.add(`günlük_link`, +1)
			      message.delete();
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`${mesajj[mesaj]}`)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
            return message.channel.send(embed1).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);
          }
      }
  }

  if(!linkk) return;
})

client.on("messageUpdate", (oldMessage, newMessage) => {
  if(oldMessage.author.bot) return;
  if(oldMessage.channel.type === "dm") return;

  let linkk = db.fetch(`linkK_${oldMessage.guild.id}`)

  if(linkk === "aktif") {
   if(oldMessage.member.hasPermission("ADMINISTRATOR")) return;
   let link = ["https://", "http://", "http", "https", "www", "www.", ".ly", ".com", ".net", ".com.tr", ".org", ".xyz", ".istanbul", ".store", "site", ".glitch.me", ".ml", ".cf", ".tk", ".rf", ".gf", ".org.tr", ".net.tr", ".info", ".av.tr", ".gen.tr", ".k12.tr", ".bel.tr", ".info.tr", ".biz.tr", ".gov.tr", ".web.tr", ".tv.tr", ".online", ".host", ".website", ".club", ".kim", ".email", ".store", ".blog", ".tech", ".promo", ".pink", ".blue", ".cafe", ".center", ".chat", ".city", ".company", ".life", ".ltd", ".media", ".salon", ".run", ".co", ".us", ".name", ".tv", ".pro", ".mobi", ".ist", ".cc", ".biz", ".bbs.tr", ".dr.tr", ".gg", ".me"]
   /*var regex = new RegExp(
    "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
  );*/
   let mesajj = [
    `${oldMessage.author}, Bu sunucuda Link Engel Filtresi aktif! Bu yüzden mesajını düzenleyerek link atamazsın!`,
    `${oldMessage.author}, Bu sunucuyu ben koruyorum bu yüzden mesajını düzenleyerek link atamazsın!`
  ]
    let mesaj = Math.floor((Math.random() * mesajj.length));
    if (link.some(word => newMessage.content.includes(word)) === true) {
          if (!oldMessage.mentions.users.first()) {
            let id = makeid(10);
            function makeid(length) {
            var result = "";
            var characters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

            db.push(`uyarı_${oldMessage.author.id}_${oldMessage.guild.id}`, { kullanıcı: oldMessage.author.id, sebep: "Mesajını Düzenleyerek Link Atmak", sunucu: oldMessage.guild.id, moderator: client.user.id, uyarısayı: id})
            db.add(`günlük_link`, +1)
			      newMessage.delete();
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, oldMessage.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`${mesajj[mesaj]}`)
            .setFooter(client.ayarlar.embedFooter, oldMessage.author.avatarURL({dynamic: true}))
            return newMessage.channel.send(embed1).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);
          }
      }
  }

  if(!linkk) return;
})
//Link Engel

//Reklam Engel

client.on('message', async message => {
  if (!message.guild) return;
  const veri = db.fetch(`reklamK_${message.guild.id}`)
  if (!veri) return;
  if (veri === "aktif") {
      const swearWords = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
      if (swearWords.some(word => message.content.includes(word))) {
          try {
              if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                let id = makeid(10);
            function makeid(length) {
            var result = "";
            var characters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

            db.push(`uyarı_${message.author.id}_${message.guild.id}`, { kullanıcı: message.author.id, sebep: "Reklam Yapmak", sunucu: message.guild.id, moderator: client.user.id, uyarısayı: id})
            db.add(`günlük_reklam`, +1)
                let mesajj = [
                  `${message.author}, Bu sunucuda Reklam Engel Filtresi aktif! Bu yüzden reklam yapamazsın!`,
                  `${message.author}, Bu sunucuyu ben koruyorum bu yüzden reklam yapamazsın!`
                ]
                let mesaj = Math.floor((Math.random() * mesajj.length));
                message.delete();
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`${mesajj[mesaj]}`)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
            return message.channel.send(embed1).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);  
                        }
          } catch(error) {
              console.log(error);
          }
      }
  }
})

client.on('messageUpdate', async (newMessage, oldMessage) => {
  if (!oldMessage.guild) return;
  const veri = db.fetch(`reklamK_${oldMessage.guild.id}`)
  if (!veri) return;
  if (veri === "aktif") {
      const swearWords = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
      if (swearWords.some(word => newMessage.content.includes(word))) {
          try {
              if (!oldMessage.member.hasPermission("MANAGE_MESSAGES")) {
                let id = makeid(10);
            function makeid(length) {
            var result = "";
            var characters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

            db.push(`uyarı_${oldMessage.author.id}_${oldMessage.guild.id}`, { kullanıcı: oldMessage.author.id, sebep: "Mesajını Düzenleyerek Reklam Yapmak", sunucu: oldMessage.guild.id, moderator: client.user.id, uyarısayı: id})
            db.add(`günlük_reklam`, +1)
                let mesajj = [
                  `${oldMessage.author}, Bu sunucuda Mesajını Düzenleyerek Reklam Engel Filtresi aktif! Bu yüzden reklam yapamazsın!`,
                  `${oldMessage.author}, Bu sunucuyu ben koruyorum bu yüzden mesajını düzenleyerek reklam yapamazsın!`
                ]
                let mesaj = Math.floor((Math.random() * mesajj.length));
                newMessage.delete();
            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, oldMessage.author.avatarURL({dynamic: true}))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`${mesajj[mesaj]}`)
            .setFooter(client.ayarlar.embedFooter, oldMessage.author.avatarURL({dynamic: true}))
            return oldMessage.channel.send(embed1).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);  
                        }
          } catch(error) {
              console.log(error);
          }
      }
  }
})
//Reklam Engel 

const { Player, Queue } = require("discord-player"); //Create a new Player (Youtube API key is your Youtube Data v3 key)

const player = new Player(client, {
  leaveOnEndCooldown: 60,
  leaveOnEmptyCooldown: 60
}); //To easily access the player
client.config = require('./config.json');
client.emotes = client.config.emotes;
client.player = player;

player.on('trackStart', (message, track) => {
      const playingBed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setAuthor(`Şimdi Oynatılıyor:`, client.user.avatarURL({ dynamic: true }))
      .setDescription(`[${track.title}](${track.url}) \n\n<:cooldown:799708335946858538> **Süre:** ${track.duration} :notes: **Şarkıyı Açan:** ${track.requestedBy}`)
      .setFooter(client.ayarlar.footer, client.user.avatarURL())
    message.channel.send(playingBed).then(a=>a.delete({timeout: 180000}));
})
player.on('trackAdd', (message, queue, track) => { 
global.oky(message,
          `[${track.title}](${track.url}) adlı şarkı kuyruğa eklendi!`
        ).then(a=>a.delete({timeout: 180000}));
})

.on('playlistAdd', (message, queue, playlist) => global.oky(message, `${playlist.title} adlı şarkı kuyruğa eklendi (toplam sıra: ${playlist.tracks.length})!` ).then(a=>a.delete({timeout: 180000})))

// Send messages to format search results

.on('searchResults', (message, query, tracks) => {

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${query} İçin arama sonuçlarınız burada!`)
    .setDescription(tracks.map((t, i) => `${i}. ${t.title}`))
    .setFooter('Çalmak istediğiniz şarkının numarasını belirtin!')
    message.channel.send(embed).then(a=>a.delete({timeout: 180000}));

})
.on('searchInvalidResponse', (message, query, tracks, content, collector) => {

    if (content === 'cancel') {
        collector.stop()
        return global.hata(message, "Arama iptal edildi!").then(a=>a.delete({timeout: 180000}))
    }

    global.oky(message, `${tracks.length} 1 ile arasında geçerli bir numara göndermelisiniz!`)

})
.on('searchCancel', (message, query, tracks) => global.hata(message, 'Geçerli bir yanıt sağlamadınız... Lütfen komutu tekrar kullanın!').then(a=>a.delete({timeout: 180000})))
.on('noResults', (message, query) => global.hata(message, `Youtubede bu sonucu bulamadım: ${query}!`).then(a=>a.delete({timeout: 180000})))

// Send a message when the music is stopped
.on('queueEnd', (message, queue) => global.hata(message,  'Sırada daha fazla müzik olmadığı için müzik durdu!').then(a=>a.delete({timeout: 180000})))
.on('channelEmpty', (message, queue) => global.hata(message,  'Ses kanalında başka üye olmadığı için müzik durdu!').then(a=>a.delete({timeout: 180000})))
.on('botDisconnect', (message) => global.hata(message,  'Kanalla bağlantım kesildiğinden müzik durdu!' ).then(a=>a.delete({timeout: 180000})))

// Error handling
.on('error', (error, message) => {
    switch(error){
        case 'NotPlaying':
          global.hata(message, 'Bu sunucuda çalınan müzik yok!').then(a=>a.delete({timeout: 180000}))
            break;
        case 'NotConnected':
          global.hata(message, 'Herhangi bir ses kanalına bağlı değilsiniz!').then(a=>a.delete({timeout: 180000}))
            break;
        case 'UnableToJoin':
          global.hata(message, 'Ses kanalınıza katılamıyorum, lütfen izinlerimi kontrol edin!').then(a=>a.delete({timeout: 180000}))
            break;
        case 'LiveVideo':
          global.hata(message, 'YouTubede ki canlı yayınları açamam!').then(a=>a.delete({timeout: 180000}))
            break;
        case 'VideoUnavailable':
          global.hata(message, 'Bu video Youtubede kullanılamıyor!').then(a=>a.delete({timeout: 180000}))
            break;
        default:
          global.hata(message, `Bir şeyler ters gitti... Hata: ${error}`).then(a=>a.delete({timeout: 180000}))
    }
})
const { GiveawaysManager } = require('discord-giveaways');
const { brotliDecompress } = require("zlib");
client.giveawaysManager = new GiveawaysManager(client, {
   everyoneMention: true,
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }//#FF0000
});


//ototag - etiket sistem
client.on("guildMemberAdd", async member => {
  let wen = await db.get(`${member.guild.id}.etiketsistem`) 
  if(!wen) return;
  let kanal = await db.get(`${member.guild.id}.ekanal`)
  if(!kanal) return;
  let anal = member.guild.channels.cache.get(kanal)
  if(!anal) return;
  let tagsj = await db.get(`${member.guild.id}.tagabo`)
  member.setNickname(`${tagsj} | ${member.user.username}`)
  anal.send(new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${global.tikozel} **${member.user.tag}** Sunucuya katıldı. Başarıyla sunucudaki ismine **\`${tagsj}\`** eklendi.`)
  )

})
///////////////// KANAL KİLİT ŞEYSİ BAŞLANGIÇ //////////////////////////
client.on('ready', async () => {
  setInterval(async function() {
    let wen = await db.get(`kilit`);
    wen.forEach(async wen => {
      let channel = client.channels.cache.get(wen)
      if(!wen) return;
      let süresi = await db.get(`${wen}.kilit`);
      if(!süresi) return;
      if (süresi == true) return;
      if (Date.now() > süresi) {
        await db.delete(`${wen}.kilit`); 
        await db.pull(`kilit`, wen);
        let everyone = channel.guild.roles.cache.find(a => a.name === "@everyone");
        channel.updateOverwrite(
        everyone,
        { SEND_MESSAGES: null }
        ).then(channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`**:unlock: Kanalın kilidi açıldı.**`)))
      }
    });
  }, 5000)

///////////// KANAL KİLİT ŞEYSİ BİTİŞ /////////////////////////
const fs = require('fs')
await db.delete('kuruldu')
await db.delete('emojiyedekledi')
fs.promises.rmdir('emojiler', { recursive: true }).then(() => console.log("emojiler klasorunu sildim")).catch(err => { console.log('Klasör Olmadığı İçin Dosyayı Silemedim.')})
})

client.on("message", async message => {
  let limit = await db.get(`${message.guild.id}.etiketengel`)
  if(!limit) return;
  if(message.member && message.member.hasPermission("BAN_MEMBERS")) return;
  if(message.mentions.users.array().length >= limit) {
    message.delete()
    message.channel.send()
    await db.add(`${message.author.id}.pingatmaoç`, 1)
    if(await db.get(`${message.author.id}.pingatmaoç`) >= 2) {
      if(!message.member.bannable) return;
      message.guild.members.ban(message.author, { reason: `${client.user.username} Etiket Engel` })
      await db.delete(`${message.author.id}.pingatmaoç`)
    }
  }
})
//sayaç
client.on("guildMemberAdd", async member => {
const db2 = require('quick.db');

  const kanal = await db.fetch(`sayaçK_${member.guild.id}`);
  if (!kanal) return;
  const sayaç = await db.fetch(`sayaçH_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayaçMHG_${member.guild.id}`)
  if (!member.guild.channels.cache.get(kanal)) return;
    if (member.guild.memberCount > sayaç) {
    await db.delete(`sayaçK_${member.guild.id}`)
    await db.delete(`sayaçH_${member.guild.id}`)
    await db.delete(`sayaçMHG_${member.guild.id}`)
    await db.delete(`sayacMBB_${member.guild.id}`)
   return client.channels.cache.get(kanal).send(`${global.tikozel} Sayaç Sıfırlandı! \`${member.guild.memberCount}\` Kişiyiz!`).catch(s => console.log(s))
  }
  if (await db2.fetch(`üyelikk_${member.id}`)) {
    member.guild.channels.cache.get(kanal).send(`<a:hegold:772218538198171689> ${member} Adlı Gold Üye Sunucuya Katıldı! **${sayaç}** Kişi Olmamıza **${sonuç}** Kişi Kaldı **${member.guild.memberCount}** Kişiyiz! ${global.tikozel}`).catch(s => console.log(s))
  } else { 
    if (!mesaj) {
    return client.channels.cache.get(kanal).send(`${global.member} ${member} Adlı Kullanıcı Sunucuya Katıldı! **${sayaç}** Kişi Olmamıza **${sonuç}** Kişi Kaldı **${member.guild.memberCount}** Kişiyiz! ${global.tikozel}`).catch(s => console.log(s))
  } else {
    const mesaj31 = mesaj.replace("{kullanıcı}", `${member}`).replace("{sunucuadı}", `**${member.guild.name}**`).replace("{sunucuüyesayısı}", `**${member.guild.memberCount}**`).replace("{kullanıcı_adı}", `**${member.user.username}**`).replace("{kalanüye}", `**${sonuç}**`)
    return client.channels.cache.get(kanal).send(mesaj31).catch(s => console.log(s))
    
  }
  }
});
client.on("guildMemberRemove", async member => {
    const db2 = require('quick.db');
  const kanal = await db.fetch(`sayaçK_${member.guild.id}`);
  const sayaç = await db.fetch(`sayaçH_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayaçMBB_${member.guild.id}`);
  if (!kanal) return;
  if (!sayaç) return;
    if (member.guild.channels.cache.get(kanal)){
  if (await db2.has(`üyelikk_${member.id}`) === true) {
    member.guild.channels.cache.get(kanal).send(`<a:hegold:772218538198171689> ${member} Adlı Gold Üye Sunucudan Ayrıldı. **${sayaç}** Kişi Olmamıza **${sonuç}** Kişi Kaldı **${member.guild.memberCount}** Kişiyiz!`).catch(s => console.log(s))
  } else {
  if (!mesaj) {
    return client.channels.cache.get(kanal).send(`${global.cikisozel} ${member} Adlı Kullanıcı Sunucudan Ayrıldı. **${sayaç}** Kişi Olmamıza **${sonuç}** Kişi Kaldı **${member.guild.memberCount}** Kişiyiz!`).catch(s => console.log(s))
  }
  if (mesaj) {
    const mesaj31 = mesaj.replace("{kullanıcı}", `${member}`).replace("{sunucuadı}", `**${member.guild.name}**`).replace("{sunucuüyesayısı}", `**${member.guild.memberCount}**`).replace("{kullanıcı_adı}", `**${member.user.username}**`).replace("{kalanüye}", `**${sonuç}**`)
    return client.channels.cache.get(kanal).send(mesaj31).catch(s => console.log(s))
  }
     }
    }
});
//sayaç

client.on("message", async message => {

let filtre = await db.get(`${message.guild.id}.kelime`);
if (filtre) {
  if (filtre.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("MANAGE_MESSAGES")) { //başlat
        global.hata( 
          message,
          `${global.deniedozel} Bu kelimenin kullanımı bu sunucuda yasaklanmıştır!`
        );
        if(message.deletable) message.delete().catch(err => {
          console.error(err);
        });
      }
  }
}
})
///////// level sistem////////
client.on("message",async msg => {
  try {
var logs = require("discord-logs")
logs(client)
    if(!msg.guild) return
    var message = msg;
    var server = msg.guild
    var user = msg.author
    var member = msg.member
if(!await db.fetch(`${server.id}.level`)) return;
await db.add(`${message.guild.id}.messages.${message.author.id}.lvl`,1)
await db.add(`${message.guild.id}.lvlmessages`, 1)
    if(await db.fetch(`${server.id}.messages.${user.id}.xp`) > 1000){
      await db.add(`${server.id}.messages.${user.id}.lvl`,1)
        var kanallar = await db.fetch(`${server.id}.level.channel`) 
        var kanal = null
        var özelmsj = await db.fetch(`${server.id}.level.message.default`) || `[user:mention] adlı kişi [lvl] seviyesine ulaştı! :partying_face:`
        if(!kanallar) {kanal = msg.channel
         }else{
   kanal = msg.guild.channels.cache.get(kanallar)
        }
        kanal.send(özelmsj.replace("[user]",msg.author.tag).replace("[user:mention]",`<@{msg.author.id}>`).replace("[lvl]",db.fetch(`${server.id}.messages.${user.id}.lvl`)))
        if((`${server.id}.messages.${user.id}.xp`)){
          await db.delete(`${server.id}.messages.${user.id}.xp`)
      } else {
  
      }
    } else {
      await db.add(`${server.id}.messages.${user.id}.xp`,1)
    }
  
    
    var lvl = await db.fetch(`${server.id}.messages.${user.id}.lvl`)
    var level = await db.fetch(`${server.id}.level.roles.text`)
    if(!level){
       
    } else {
      if(!Array.isArray(level)){
   
      } else {
        var lvl = await db.fetch(`${server.id}.messages.${user.id}.lvl`)
       level.filter(async a => {
         if(a.lvl <= lvl){
        member.roles.add(a.rol).catch(e =>{console.log("VEREMEDİM ABİ")})
        var kanallarrol = await db.fetch(`${server.id}.level.channel`) 
        var kanalrol = null
        var özelmsjrol = await db.fetch(`${server.id}.level.message.role`) || "[user:mention] Level atladı ve [role:mention] rolünü kazandı!!!";
        if(!kanallarrol) {kanalrol = msg.channel
         }else{
   kanalrol = msg.guild.channels.cache.get(kanallar)
        }
        var rol = msg.guild.roles.cache.get(a.rol)
        if(msg.member.roles.cache.find(a => a.id === rol.id)) return 
        msg.guild.channels.cache.get(kanallarrol).send(özelmsjrol.replace("[user]",msg.author.tag).replace("[user:mention]",`<@${msg.author.id}>`).replace("[lvl]",db.fetch(`${server.id}.messages.${user.id}.lvl`)).replace("[rol]",rol.name).replace("[role:mention]",`<@&${rol.id}>`))
         }
       })
      }
    }
  } catch(e) {
    console.log(e)
  }
})
client.on("voiceChannelJoin",async (member,kanal) =>{
  if(!await db.fetch(`${member.guild.id}.level`)) return
  await db.set(`${member.guild.id}.voice.${member.id}.join`,Date.now());
})
client.on("voiceChannelLeave",async (member,kanal) =>{
  if(!await db.fetch(`${member.guild.id}.level`)) return
    if(!await db.fetch(`${member.guild.id}.voice.${member.id}.join`)) return
    var zaman = Date.now() - db.fetch(`${member.guild.id}.voice.${member.id}.join`)
    await db.add(`${member.guild.id}.voice.${member.id}`,zaman)
 var level = db.fetch(`${member.guild.id}.level.roles.voice`)
 if(!level){

 } else {
   if(!Array.isArray(level)){

   } else {


   }
 }
 await db.add(`${member.guild.id}.voice.${member.id}.xp`,Math.floor(zaman/2000))
   if(await db.fetch(`${member.guild.id}.voice.${member.id}.xp`)  > 2000){
    await db.add(`${member.guild.id}.voice.${member.id}.lvl`,1)
       var lvl = await db.fetch(`${member.guild.id}.voice.${member.id}.lvl`)
        if(!level){

         } else {
   if(!Array.isArray(level)){ 

   } else {
   (level.filter(a => {
   if(a.lvl <= lvl ){
    member.roles.add(a.rol).catch(e =>{console.log("VEREMEDİM ABİ")})
   }
      })
    
    
   )
    }
 }
       if(await db.fetch(`${member.guild.id}.voice.${member.id}.xp`)){
       await db.delete(`${member.guild.id}.voice.${member.id}.xp`)
       } else {

       }
      
       
   } 

})
//////////// bitiş/////////
//////////// kayıt 
/*
client.on('guildMemberAdd', async (member) => {
const moment = require('moment')
const kanal = await db.fetch(`${member.guild.id}.kayıtkanal`)
if(!kanal) return;
const rol = await db.fetch(`${member.guild.id}.kayıtyetkilirol`)
if(!rol) return;
let abobayraknaptınnnnnnnnnn = {"01": "Ocak","02": "Şubat","03": "Mart","04": "Nisan","05": "Mayıs","06": "Haziran","07": "Temmuz","08": "Ağustos","09": "Eylül","10": "Ekim","11": "Kasım","12": "Aralık"}
client.channels.cache.get(kanal).send(`<@&${rol}> Sunucuya **yeni üye** katıldı. Kaydolmayı beklemektedir.`)
const embed = new Discord.MessageEmbed()
.setThumbnail(member.user.avatarURL({dynamic: true}))
.setTitle(`${global.girisozel} | Sunucuya Hoş Geldin, ${member.user.username}`)
.setDescription(`
**:microphone2: Kaydının yapılması için sesli odaya gelip ses vermen gerekli.**

**:trident: <@&${rol}> rolündeki yetkililer seninle ilgilenecektir.**

**:robot: Kayıt Sorumluları robot olup olmadığınızı doğrularken, lütfen beklemede kalın.**

**:calendar_spiral: Discord'a Kaydolma Tarihi:**
${moment(member.user.createdAt).format('DD')} ${abobayraknaptınnnnnnnnnn[moment(member.user.createdAt).format('MM')]} ${moment(member.user.createdAt).format('YYYY h:mm:ss')}
`)
client.channels.cache.get(kanal).send(embed)
})*/
////////////////kayıt son XD
client.on("guildMemberAdd", async(member) => {
const moment = require('moment')
let guild = member.guild;
let kanal = guild.channels.cache.get(await db.fetch(`${member.guild.id}.kayıtkanal`))
let yetkili = await db.fetch(`${member.guild.id}.kayıtyetkilirol`)
let mesaj = await db.fetch(`kayıtmesaj_${guild.id}`)
let embedResim = ["https://tenor.com/view/thor-avenger-chris-hemsworth-mjolnir-gif-13624915", "https://tenor.com/view/thor-fat-mjolnir-stormbreaker-avengers-gif-14029215", "https://tenor.com/view/band-of-brother-run-soldiers-hurry-ww2-gif-5408691", "https://tenor.com/view/captain-america-avengers-infinity-war-marvel-badass-gif-10388170", "https://tenor.com/view/thanos-avengers-infinity-war-mind-stone-last-stone-infinity-gauntlet-gif-15735729", "https://tenor.com/view/deep-turkish-web-hosgeldin-hos-geldiniz-hosgeldiniz-beyefendi-gif-18244346", "https://tenor.com/view/welcometrump-trumpwelcome-thumbs-up-gif-12122103", "https://media.giphy.com/media/5wFGrglelyPDUPWMEO/giphy.gif", "https://media.giphy.com/media/XJzqSm5fdWnU2qImwI/giphy.gif", "https://media.giphy.com/media/Qxe0Hi0OgAlJT5yEfs/giphy.gif", "https://media.giphy.com/media/YO5e7gmuBuwFygt3g9/giphy.gif", "https://media.giphy.com/media/npszbmF6GwHSw/giphy.gif", "https://media.giphy.com/media/aqMY57vLdkghi/giphy.gif", "https://media.giphy.com/media/5QLvhxl4JXWDtP4iW4/giphy.gif", "https://media.giphy.com/media/9tZc9Mzo9K0yOYx38U/giphy.gif", "https://media.giphy.com/media/8xomIW1DRelmo/giphy.gif", "https://media.giphy.com/media/rj12FejFUysTK/giphy.gif", "https://media.giphy.com/media/Ajyi28ZdneUz6/giphy.gif"]
let embedResimler = Math.floor(Math.random() * embedResim.length)
let embedFooter;
if(await db.fetch(`kayıtembedfooter_${guild.id}`)) {embedFooter = await db.fetch(`kayıtembedfooter_${guild.id}`)} else {embedFooter = client.ayarlar.embedFooter}
let embedRenk;
if(await db.fetch(`kayıtembedrenk_${guild.id}`)) {embedRenk = await db.fetch(`kayıtembedrenk_${guild.id}`)} else {embedRenk = client.ayarlar.embedRenk}
let embedAuthor;
if(await db.fetch(`kayıtembedauthor_${guild.id}`)) {embedAuthor = db.fetch(`kayıtembedauthor_${guild.id}`)} else {embedAuthor = `${client.ayarlar.botİsim} Bot`}
let embedİmage;
if(await db.fetch(`kayıtembedimage_${guild.id}`)) {embedİmage = db.fetch(`kayıtembedimage_${guild.id}`)} else {embedİmage = embedResim[embedResimler]}
if(!kanal) return;
if(!yetkili) return;
let kontrol;
if(member.user.createdAt > 604800000) kontrol = `${global.tikozel} Güvenilir!`
if(member.user.createdAt < 604800000) kontrol = `${global.carpiozel} Güvenilir Değil!`
if(!mesaj) {
const rol = await db.fetch(`${member.guild.id}.kayıtyetkilirol`)
if(!rol) return;
let abobayraknaptınnnnnnnnnn = {"01": "Ocak","02": "Şubat","03": "Mart","04": "Nisan","05": "Mayıs","06": "Haziran","07": "Temmuz","08": "Ağustos","09": "Eylül","10": "Ekim","11": "Kasım","12": "Aralık"}
kanal.send(`<@&${rol}> Sunucuya **yeni üye** katıldı. Kaydolmayı beklemektedir.`)
const embed = new Discord.MessageEmbed()
.setThumbnail(member.user.avatarURL({dynamic: true}))
.setTitle(`${global.girisozel} | Sunucuya Hoş Geldin, ${member.user.username}`)
 .setDescription(`
**:microphone2: Kaydının yapılması için sesli odaya gelip ses vermen gerekli.**
    
**:trident: <@&${rol}> rolündeki yetkililer seninle ilgilenecektir.**
    
**:robot: Kayıt Sorumluları robot olup olmadığınızı doğrularken, lütfen beklemede kalın.**

**Kullanıcı Güvenilir Mi? ❓**
${kontrol}

**:calendar_spiral: Discord'a Kaydolma Tarihi:**
${moment(member.user.createdAt).format('DD')} ${abobayraknaptınnnnnnnnnn[moment(member.user.createdAt).format('MM')]} ${moment(member.user.createdAt).format('YYYY h:mm:ss')}
`)
kanal.send(embed)} else {
let mesajj = mesaj
.replace("{kullanıcı}", member)
.replace("{kullanıcı-id}", member.id)
.replace("{kullanıcı-isim}", member.user.tag)
.replace("{erkek-verilecek-rol}", "<@&" + await db.fetch(`${guild.id}.kayıterkekrol`) + ">" || "**Rol Ayarlanmamış.**")
.replace("{erkek-verilecek-rol-id}", await db.fetch(`${guild.id}.kayıterkekrol`) || "**Rol Ayarlanmamış.**")
.replace("{erkek-verilecek-rol-isim}", guild.roles.cache.get(await db.fetch(`${guild.id}.kayıterkekrol`)).name || "**Rol Ayarlanmamış.**")
.replace("{kız-verilecek-rol}", "<@&" + await db.fetch(`${guild.id}.kayıtkızrol`) + ">" || "**Rol Ayarlanmamış.**")
.replace("{kız-verilecek-rol-id}", await db.fetch(`${guild.id}.kayıtkızrol`) || "**Rol Ayarlanmamış.**")
.replace("{kız-verilecek-rol-isim}", guild.roles.cache.get(await db.fetch(`${guild.id}.kayıtkızrol`)).name || "**Rol Ayarlanmamış.**")
.replace("{alınacak-rol}", "<@&" + await db.fetch(`${guild.id}.kayıtalıncakrol`) + ">" || "**Rol Ayarlanmamış.**")
.replace("{alınacak-rol-id}", await db.fetch(`${guild.id}.kayıtalıncakrol`) || "**Rol Ayarlanmamış.**")
.replace("{alınacak-rol-isim}", guild.roles.cache.get(await db.fetch(`${guild.id}.kayıtalıncakrol`)).name || "**Rol Ayarlanmamış.**")
.replace("{yetkili-rol}", "<@&" + await db.fetch(`kayıtyetkilirol_${guild.id}`) + ">" || "**Rol Ayarlanmamış.**")
.replace("{yetkili-rol-id}", await db.fetch(`kayıtyetkilirol_${guild.id}`) || "**Rol Ayarlanmamış.**")
.replace("{yetkili-rol-isim}", guild.roles.cache.get(await db.fetch(`kayıtyetkilirol_${guild.id}`)).name || "**Rol Ayarlanmamış.**")
const embed = new Discord.MessageEmbed()
.setAuthor(embedAuthor, client.user.avatarURL())
.setColor(embedRenk)
.setDescription(`**${mesajj}**`)
.setImage(embedİmage)
.setFooter(embedFooter, client.user.avatarURL())
return kanal.send(embed)
}
})
// captcha sistem
client.on('guildMemberAdd', async member => {
const acikmi = await db.fetch(`captcha_${member.guild.id}`)
if(!acikmi) return;
const log = await db.fetch(`captcha_log_${member.guild.id}`)
if(!log) return;
const kanal = await db.fetch(`captcha_kanal_${member.guild.id}`)
if(!kanal) return;
const ceza = await db.fetch(`captcha_ceza_${member.guild.id}`)
if(!ceza) return;
const verilecek = await db.fetch(`captcha_verilecekrol_${member.guild.id}`)
if(!verilecek) return;
const alınacak = await db.fetch(`captcha_alınacakrol_${message.guild.id}`)
if(!alınacak) return;

})


// bitiş
/*

client.on('guildMemberAdd', async member => {
	let toggle = await db.fetch(`captcha_ceza_${member.guild.id}`)
	if (toggle === null) toggle = false;
	let captchaLogsID = await db.fetch(`captcha_log_${member.guild.id}`)
	let captchaLogs = client.channels.cache.get(captchaLogsID);
	let invalid = 0;
	const captcha = client.captcha();
	console.log(captcha.text);
	const { buffer } = captcha;
	let channelID = db.get(`verifyChannel_${member.guild.id}`);
	if (channelID === null) return console.log('no fking channel bruh');
	let channel = member.guild.channels.cache.get(channelID);
	if (!channel) return console.log('no fking channel bruh');
	channel.send(`${member.user.toString()}`, {
		files: [
			{
				name: 'captcha.png',
				attachment: buffer
			}
		]
	});
	let pog = await db.fetch(`captcha_verilecekrol_${member.guild.id}`)
	let filter = m => m.author.id === member.user.id;

	let collector = new Discord.MessageCollector(channel, filter, {
		max: 11,
		time: 60000
	});
	let fuckterval = setInterval(() => {
		if (!member.guild.members.cache.get(member.user.id)) collector.stop();
	}, 3000);

	collector.on('collect', async message => {
		if (!message.content) return;
		let num = 1;
		let time = num++;
		if (message.content != captcha.text) {
			invalid++;
			if (invalid > 9 && toggle === true) {
				if (member.kickable) {
					message.channel.send(
						':x: | **Too many invalid captcha attempts, kicking user.**'
					);
					member.kick('Too many invalid captcha attempts');
					let embed = new Discord.MessageEmbed()
						.setTitle('**captcha logs**')
						.setAuthor(
							member.user.tag,
							member.user.displayAvatarURL({ dynamic: true })
						)
						.setColor('#FF0000')
						.setFooter(message.guild.name, message.guild.iconURL())
						.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
						.setDescription('Captcha failed')
						.addField('**User**', member.user.tag)
						.addField('**Status**', 'failed')
						.addField('**Reason**', 'Too many Attempts failed');
					if (captchaLogs) {
						captchaLogs.send({ embed: embed });
					}
					return;
				}
				collector.stop();
				return;
			} else if (toggle === false && invalid > 9) {
				let embed = new Discord.MessageEmbed()
					.setTitle('**captcha logs**')
					.setAuthor(
						member.user.tag,
						member.user.displayAvatarURL({ dynamic: true })
					)
					.setColor('#FF0000')
					.setFooter(message.guild.name, message.guild.iconURL())
					.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
					.setDescription('Captcha failed')
					.addField('**User**', member.user.tag)
					.addField('**Status**', 'failed')
					.addField('**Reason**', 'Too many Attempts failed');
				message.channel.send(':x: | **Too many invalid Attempts.**');
				if (captchaLogs) {
					captchaLogs.send({ embed: embed });
				}
				collector.stop()
				return;
			}
			message.channel.send(
				`:x: | **Invalid code. Try again. Attempts left: ${10 - invalid}**`
			);
		}
		if (message.content === captcha.text) {
			try {
				message.channel.send('✅ | **Verified**');
				message.member.roles.add(pog);
				let embed = new Discord.MessageEmbed()
					.setTitle('**captcha logs**')
					.setAuthor(
						member.user.tag,
						member.user.displayAvatarURL({ dynamic: true })
					)
					.setColor('GREEN')
					.setFooter(message.guild.name + " made by LΣGΣПD#0001 & ant#0768", message.guild.iconURL())
					.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
					.setDescription('Captcha passed')
					.addField('**User**', member.user.tag)
					.addField('**Status**', 'Passed');
				if (captchaLogs) {
					captchaLogs.send({ embed: embed });
				}
				collector.stop();
			} catch {
				collector.stop();
				message.channel.send(':x: | **an Error Occured**');
			}
		}
	});
	collector.on('end', async (collected, reason) => {
		clearInterval(fuckterval);
		if (reason === 'time' && toggle === true) {
			if (member.kickable) {
				channel.send(
					`**The user has been kicked for not responding in time.**`
				);
				member.kick('didnt reply in time');
				let embed = new Discord.MessageEmbed()
					.setTitle('**captcha logs**')
					.setAuthor(
						member.user.tag,
						member.user.displayAvatarURL({ dynamic: true })
					)
					.setColor('#FF0000')
					.setFooter(message.guild.name + " made by LΣGΣПD#0001 & ant#0768", message.guild.iconURL())
					.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
					.setDescription('Captcha failed')
					.addField('**User**', member.user.tag)
					.addField('**Status**', 'failed')
					.addField('**Reason**', 'Didnt reply in time.');
				if (captchaLogs) {
					captchaLogs.send({ embed: embed });
				}
				return;
			}
			return;
		} else if (toggle === false && reason === 'time') {
			let embed = new Discord.MessageEmbed()
				.setTitle('**captcha logs**')
				.setAuthor(
					member.user.tag,
					member.user.displayAvatarURL({ dynamic: true })
				)
				.setColor('#FF0000')
				.setFooter(message.guild.name + " made by LΣGΣПD#0001 & ant#0768", message.guild.iconURL())
				.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
				.setDescription('Captcha failed')
				.addField('**User**', member.user.tag)
				.addField('**Status**', 'failed')
				.addField('**Reason**', 'Didnt reply in time.');
			message.channel.send(':x: | **You Didnt reply in time**');
			if (captchaLogs) {
				captchaLogs.send({ embed: embed });
			}
		}
	});
});
*/



client.on("ready", () => {
  client.api.applications(client.user.id).commands.post({
    data: {
      name: "ping",
      description: "Botun pingine bakarsınız."
    }
  });
});

client.ws.on("INTERACTION_CREATE", async interaction => {
  const command = interaction.data.name.toLowerCase();
  if (command == "ping") {
        const yardım = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
        .setColor('RANDOM')
        .setDescription(`
sa
        `)        
        client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 1,data: await createAPIMessage(interaction, yardım)}});
 }
});
async function createAPIMessage(interaction, content) {
  const apiMessage = await Discord.APIMessage.create(
    client.channels.resolve(interaction.channel_id),
    content
  )
    .resolveData()
    .resolveFiles();

  return { ...apiMessage.data, files: apiMessage.files };
}


const EventEmitter = require('events');
const emitter = new EventEmitter()
emitter.setMaxListeners(5000000)
process.setMaxListeners(5000000)