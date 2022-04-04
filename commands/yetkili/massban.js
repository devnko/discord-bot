  const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
      let banlananlar = [];
      let banlanamayanlar = [];
      if(!args[0]) return global.hata(message,  "Çoklu ban için ID girin!")
  
        var i;
        for (i = 0; i < args.length; i++) {
            const üye = client.users.cache.get(args[i]);
            let üyeid;
            if(üye) üyeid = üye.id
            else üyeid = args[i];
            const member = message.guild.members.cache.get(üyeid);
            if(!üyeid) return banlanamayanlar.push(üyeid)
            if(isNaN(üyeid)) return banlanamayanlar.push(üyeid)
            if(üyeid == message.author.id) return banlanamayanlar.push(üyeid)
            if (member) {
             if(message.author.id !== message.guild.owner.id) if(message.member.roles.highest.position <= member.roles.highest.position) return banlanamayanlar.push(üyeid)
             if(!member.bannable) return banlanamayanlar.push(üyeid)
            }
            if(client.users.cache.get(üyeid)) client.users.cache.get(üyeid).send(`\`${message.guild.name}\` isimli sunucudan \`Massban\` sebebiyle ${message.author} tarafından banlandınız.`)  
            message.guild.members
            .ban(üyeid, { days:7, reason: `Massbanned by ${message.author.tag}` })
            .then(() => banlananlar.push(üyeid))
            .catch((err) => banlanamayanlar.push(üyeid)) //oke gelirim şunu düzeltiyim
        } //kanala özel komt kullaıma gel bebeim işin bitince
    message.mentions.users.array().forEach(a => {
            const üye = a
            let üyeid;
            if(üye) üyeid = üye.id
            const member = message.guild.members.cache.get(üyeid);
            if(!üyeid) return banlanamayanlar.push(üyeid)
            if(isNaN(üyeid)) return banlanamayanlar.push(üyeid)
            if(üyeid == message.author.id) return banlanamayanlar.push(üyeid)
            if (member) {
             if(message.author.id !== message.guild.owner.id) if(message.member.roles.highest.position <= member.roles.highest.position) return banlanamayanlar.push(üyeid)
             if(!member.bannable) return banlanamayanlar.push(üyeid)
            }
            if(client.users.cache.get(üyeid)) client.users.cache.get(üyeid).send(`\`${message.guild.name}\` isimli sunucudan \`Massban\` sebebiyle ${message.author} tarafından banlandınız.`)  
            message.guild.members
            .ban(üyeid, { days:7, reason: `Massbanned by ${message.author.tag}` })
            .then(() => banlananlar.push(üyeid))
            .catch((err) => banlanamayanlar.push(üyeid))
    })
    let oldu = new Discord.MessageEmbed()
    .setDescription(`
**BAŞARILI**
Banlanan üyelerin IDleri: ${banlananlar}
Banlanamayan üyelerin IDleri: ${banlananlar}
    `)
    message.channel.send(oldu)
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "massban",
  description: "",
  usage: "massban"
};
