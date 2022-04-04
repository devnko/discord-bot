exports.run = async (client,msg,args,db) =>{
    if (!await db.fetch(`${msg.guild.id}.level`)) return message.channel.send(`${global.deniedozel} Level sistemi aktif değil!`);
    var server = msg.guild 
    var message = msg 
   var {MessageEmbed} = require("discord.js")
   var voice = await db.fetch(`${msg.guild.id}.level.roles.voice`)
   var text = await db.fetch(`${msg.guild.id}.level.roles.text`)
   let voiceler = "yok"
   let textler = "yok"
   var voicelevel = []
   if(!args[0]){
       if(!voice){
           voiceler = "yok"
       } else {
    
       
       voice.forEach(a => {
           voicelevel.push(`${a.lvl} Levele <@&${a.rol}>`)
       });
       voiceler = voicelevel.slice(0,10).join("\n")
   }
   var textlevel = []
   text.forEach(a => {
       textlevel.push(`${a.lvl} Levele <@&${a.rol}>`)
   });
   var embed = new MessageEmbed()
   .setTitle(`${client.user.username} Level Sistemi`)
   .setDescription(`${global.deniedozel} Lütfen **!level-rol-liste text 1** ya da **${prefix}level-rol-liste voice 1** yazınız`)
   .setFooter(`${global.tikozel} Daha Fazla için ${prefix}level-rol-liste text rakam`)
   return msg.channel.send(embed)
      
   } else if (args[0].toLowerCase() === 'text') {
       var textlevel = []
       var rakam = 0
       if(!text){
      
       return msg.channel.send(`${global.deniedozel} Rol ve Level **Yok**!`)
           } else {
               text.forEach(a => {
                   rakam=rakam+1
                   textlevel.push(`${a.lvl} Levele <@&${a.rol}>`)
               });
           }
               var üyesayısı = rakam
       var toplamsayfa = 0
       if(üyesayısı < 15){
        toplamsayfa = 1
       } else {
       toplamsayfa = `${üyesayısı/15}`
       if(toplamsayfa.includes(".")){
           toplamsayfa = Math.ceil(toplamsayfa)
       } else {
           toplamsayfa = `${üyesayısı/10}`
       }
       }
       if (!args[1]) {
           if(!text) return 
      
           var textlevel = []
           var rakam = 0
           text.forEach(a => {
               rakam=rakam+1
               textlevel.push(`${a.lvl} Levele <@&${a.rol}>`)
           });
          
       var embed = new MessageEmbed()
       .setTitle(`${client.user.username} Level Sistemi`)
       .setColor("GREEN")
       .addField(`Text`,textlevel.slice(0,15).join("\n"))
       return msg.channel.send(embed)
    
       }
       let sayfa = args[1] ? args[1] : 1;
       if (isNaN(sayfa)) return message.channel.send(`${global.deniedozel} Lütfen geçerli bir sayfa numarası girin!`)
       sayfa = Number(sayfa);
       if(sayfa > toplamsayfa) return message.channel.send(`${global.deniedozel} Lütfen geçerli bir sayfa numarası girin!`)
       if (sayfa < 0) return message.channel.send(`${global.deniedozel} Lütfen geçerli bir sayfa numarası girin!`)
       var al = {
           ilk: sayfa*10-10,
           iki: sayfa*10
       }
       var yaz102 = textlevel.slice(al.ilk,al.iki).join("\n")
       const top3 = new MessageEmbed()
       .setAuthor(message.author.tag, message.author.avatarURL())
       .setFooter(client.user.tag, client.user.avatarURL())
   
      // .addField("Text", `${yaz102}`)
       .setDescription("Sunucunuzun level bilgisidir.");
   
       message.channel.send(top3);
   } else if (args[0].toLowerCase() === 'voice') {
       if(!voice) return
       var voicelevel = []
       var rakam = 0
       text.forEach(a => {
           rakam = rakam+1
           voicelevel.push(`${a.lvl} Levele <@&${a.rol}>`)
       });
       var üyesayısı = rakam
       var toplamsayfa = 0
       if(üyesayısı < 15){
        toplamsayfa = 1
       } else {
       toplamsayfa = `${üyesayısı/15}`
       if(toplamsayfa.includes(".")){
           toplamsayfa = Math.ceil(toplamsayfa)
       } else {
           toplamsayfa = `${üyesayısı/10}`
       }
       }
       if(!args[1]){
       var embed = new MessageEmbed()
       .setTitle(`${client.user.username} Level Sistemi`)
       .setColor("GREEN")
   
       .addField(`Ses`,voicelevel.slice(0,15).join("\n"))
   
      return msg.channel.send(embed)
       }
       let sayfa = args[1] ? args[1] : 1;
       if (isNaN(sayfa)) return message.channel.send(`${global.deniedozel} Lütfen geçerli bir sayfa numarası girin!`)
       sayfa = Number(sayfa);
       if(sayfa > toplamsayfa) return message.channel.send(`${global.deniedozel} Lütfen geçerli bir sayfa numarası girin!`)
       if (sayfa < 0) return message.channel.send(`${global.deniedozel} Lütfen geçerli bir sayfa numarası girin!`)
       var al = {
           ilk: sayfa*10-10,
           iki: sayfa*10
       }
       var yaz102 = voicelevel.slice(al.ilk,al.iki).join("\n")
       const top3 = new MessageEmbed()
       .setAuthor(message.author.tag, message.author.avatarURL())
       .setFooter(client.user.tag, client.user.avatarURL())
   
       .addField("Ses", `${yaz102}`)
       .setDescription(`${global.tikozel} Sunucunuzun rol liste bilgileri.`);
   
       message.channel.send(top3);
   } else return message.reply(`${global.deniedozel} Bir değer belirtin! Değerler: text, voice`);
   }
   exports.conf = {
       Enabled:true,
       guildOnly:true,
       permLevel:0,
       aliases:["level-rol-liste","levelrol-liste","level-rolliste"]
   }
   exports.help = {
       name:"level-rol-listele",
       description:"",
       usage:""
   }