const Discord = require("discord.js");

exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
   const üye = message.mentions.users.first() ||
   client.users.cache.get(args[0]);
  let üyeid;
   if(üye) üyeid = üye.id
   else üyeid = args[0];
   const member = message.guild.members.cache.get(üyeid);
    if(dil == 'TR'){
      if(üye == client.user.id) return message.channel.send('Beni Banlayamazsın!')
   if(!üyeid) return hata(message, "Bir kişi etiketleyin ya da ID girin. (Sunucuda olmasa bile banlanır)")
   if(isNaN(üyeid)) return hata(message, "Hey, IDler sadece sayılardan oluşabilir!")
   if(üyeid == message.author.id) return hata(message, "Hey akıllı evladım, kendini banlayamazsın!")
   if (member) {
    if(message.author.id !== message.guild.owner.id) if(message.member.roles.highest.position <= member.roles.highest.position) return hata(message, "Bu kişinin rolleri senden yüksek!")
    if(!member.bannable) return hata(message, "Bu kişinin rolleri benim rollerimin üstünde!")
   }
   let reason = args.slice(1).join(" ");
   if (!reason) reason = "Belirtilmemiş";
  
      
   message.guild.members
   .ban(üyeid, { reason: `${reason} | Banned by ${message.author.tag}` })
   .then(() => {
     let yasaklanan;
     if(client.users.cache.get(üyeid)) yasaklanan = `**${client.users.cache.get(üyeid).tag}**`
     else yasaklanan = `**${üyeid}** IDli kullanıcı`;
     let logyasaklanan;
     if(client.users.cache.get(üyeid)) logyasaklanan = `**${client.users.cache.get(üyeid).tag}**`
     else logyasaklanan = `**${üyeid}**`;
     message.channel.send(
       `<:ban:819607312627925002> ${yasaklanan} sunucudan başarıyla yasaklandı! Sebep: **${reason}**`
     )
  }) 
   .catch(e => {
     if (e == "DiscordAPIError: Unknown User")
       hata(message, `Bu IDye sahip bir kullanıcı bulunamadı!`);
     else global.errs(e, message);
     return;
   
  })
    } else if(dil == 'EN'){
       if(!üyeid) return hata(message, "Tag a person or enter an ID. (Even if it is not on the server, it will be banned)")
   if(isNaN(üyeid)) return hata(message, "Hey, IDs can only consist of numbers!")
   if(üyeid == message.author.id) return hata(message, "Hey smart boy, you can't ban yourself!")
   if (member) {
    if(message.author.id !== message.guild.owner.id) if(message.member.roles.highest.position <= member.roles.highest.position) return hata(message, "The roles of this person are higher than you!")
    if(!member.bannable) return hata(message, "The roles of this person are above my roles!")
   }
   let reason = args.slice(1).join(" ");
   if (!reason) reason = "No Reason.";
  
      
   message.guild.members
   .ban(üyeid, { reason: `${reason} | Banned by ${message.author.tag}` })
   .then(() => {
     let yasaklanan;
     if(client.users.cache.get(üyeid)) yasaklanan = `**${client.users.cache.get(üyeid).tag}**`
     else yasaklanan = `**${üyeid}** IDli kullanıcı`;
     let logyasaklanan;
     if(client.users.cache.get(üyeid)) logyasaklanan = `**${client.users.cache.get(üyeid).tag}**`
     else logyasaklanan = `**${üyeid}**`;
     message.channel.send(
       `<:ban:819607312627925002> ${yasaklanan} Successfully banned from the server! Reason: **${reason}**`
     )
  }) 
   .catch(e => {
     if (e == "DiscordAPIError: Unknown User")
       hata(message, `A user with this ID was not found!`);
     else global.errs(e, message);
     return;
   
  })
    }
  } catch(err) {
      global.errs(err, message)
  }
};

function hata(message, text) {
    const bruhembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField("HATA:", `${text}`);
   message.channel.send(bruhembed)
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["forceban", "ban"],
  permLevel: 3
};

exports.help = {
  name: "ban",
  description: "Avatarınızı gösterir",
  usage: "ban"
};