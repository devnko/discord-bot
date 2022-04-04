const Discord = require("discord.js")

exports.run = async (client, message, args, db, ayarlar, prefix) => {
   let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
   let hedef = args[2] 
   let kalan = args[2] - message.guild.memberCount
   const kanall = await db.fetch(`sayaçK_${message.guild.id}`)
   const hedeff = await db.fetch(`sayaçH_${message.guild.id}`)
   if(!args[0]) {
      const embedd = new Discord.MessageEmbed()
	 .setColor("BLUE")
	 .setDescription(`Merhaba, Öncelikle sayaç ayarlamak istiyorsan eğer bir değer belirtmelisin! örnek: **${prefix}sayaç ayarla #kanal <hedef>** ya da **${prefix}sayaç sıfırla** ve ya **${prefix}sayaç hg-mesaj ayarla**, **${prefix}sayaç bb-mesaj ayarla**!`)
	 .setFooter(client.ayarlar.footer, client.user.avatarURL())
     return message.channel.send(embedd)
   } 
   
   if(args[0] === "ayarla") {
 	if(!hedef) {
	const embedd = new Discord.MessageEmbed()
	 .setColor("BLUE")
	 .setDescription(`Merhaba, Sayaç ayarlamak istiyorsan eğer bir hedef belirlemelisin! örnek: ${prefix}sayaç ayarla #kanal <hedef>`)
	 .setFooter(client.ayarlar.footer, client.user.avatarURL())
     return message.channel.send(embedd)	
	}
  if(isNaN(hedef)) return global.hata(message, `Hatalı kullanım! Örnek kullanım ${prefix}sayaç ayarla #kanal ${message.guild.memberCount+200}`)

  if(hedef < message.guild.member.count) return global.hata(message, `**Hedef sunucu sayısından az olamaz!**`, truess)
    if(!kanal) {
		const embedd = new Discord.MessageEmbed()
	 .setColor("BLUE")
	 .setDescription(`Merhaba, Sayaç ayarlamak istiyorsan eğer bir kanal etiketlemelisin! örnek: ${prefix}sayaç ayarla #kanal <hedef>`)
	 .setFooter(client.ayarlar.footer, client.user.avatarURL())
     return message.channel.send(embedd)	
	}

	await db.set(`sayaçK_${message.guild.id}`, kanal.id) 
	await db.set(`sayaçH_${message.guild.id}`, hedef)
   const embedd = new Discord.MessageEmbed()
	 .setColor("BLUE")
	 .setDescription(`Merhaba, Başarılı bir şekilde sayaç hedefini ve kanalını ayarladım!\n Ayarlanmış değerler; Kanal: ${kanal} | Hedef: **${hedef}**\n Şuanda sunucuda **${message.guild.memberCount}** kişi var! **${kalan}** Kişi Sonra **${args[1]}** Kişi Olacaz!`)
	 .setFooter(client.ayarlar.footer, client.user.avatarURL())
     return message.channel.send(embedd)	
   }
   
   if(args[0] === "sıfırla") {
	   if(!kanall && !hedeff) {
		   const embedd = new Discord.MessageEmbed()
	 .setColor("BLUE")
	 .setDescription(`Merhaba, Üzgünüm Ancak Ayarlanmamış şeyleri sıfırlayamazsın!`)
	 .setFooter(client.ayarlar.footer, client.user.avatarURL())
     return message.channel.send(embedd)	
	   }
	   
	   await db.delete(`sayaçH_${message.guild.id}`)
	   await db.delete(`sayaçK_${message.guild.id}`)
	   
	   const embedd = new Discord.MessageEmbed()
	 .setColor("BLUE")
	 .setDescription(`Başarılı bir şekilde **sayaç hedefi** ve **sayaç kanalı** sıfırlandı!`)
	 .setFooter(client.ayarlar.footer, client.user.avatarURL())
     return message.channel.send(embedd)	
   }
if(args[0] ==='hg-mesaj'){
    const mesaj = args.slice(3).join(" ")
    const mesajj = await db.fetch(`sayaçMHG_${message.guild.id}`)
    const sayaçhedef = await db.fetch(`sayaçH_${message.guild.id}`)
    const kalanüye = message.guild.memberCount - sayaçhedef
 
    if(!args[1]) {
       const embedd = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`Merhaba, Öncelikle sayaç mesajı ayarlamak istiyorsan eğer bir değer belirtmelisin! örnek: ${prefix}sayaç hg-mesaj ayarla veya ${prefix}sayaç hg-mesaj sıfırla!`)
      .setFooter(client.ayarlar.footer, client.user.avatarURL())
      return message.channel.send(embedd)
    } 
    
    if(args[1] === "ayarla") {
     if(!mesaj) {
     const embedd = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`Merhaba, Sayaç Mesajı ayarlamak istiyorsan eğer bir mesaj belirlemelisin! örnek: ${prefix}sayaç hg-mesaj ayarla <mesaj>`)
      .addField("Fonksiyonlar:", `> {kullanıcı} => **Giden kullanıcıyı etiketler. (${message.author})**\n> {kullanıcı_adı} => **Kullanıcı adını gösterir. (${message.author.username})**\n> {sunucuadı} => **Sunucu adını gösterir. (${message.guild.name})**\n> {sunucuüyesayısı} => **Sunucuda bulunan üye sayısını gösterir. (${message.guild.memberCount})**\n> {kalanüye} => **Belirlenen hedefe kaç kişi kaldığını gösterir. (${kalanüye})**`)
      .setFooter(client.ayarlar.footer, client.user.avatarURL())
      return message.channel.send(embedd)	
     }
      
     await db.set(`sayaçMHG_${message.guild.id}`, mesaj)
     
    const embedd = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`Merhaba, Başarılı bir şekilde sayaç hoş geldin mesajını ayarladım!\n Ayarlanmış değerler; Mesaj: ${mesaj}`)
      .setFooter(client.ayarlar.footer, client.user.avatarURL())
      return message.channel.send(embedd)	
    }
    
    else if(args[1] === "sıfırla") {
        if(!mesajj) {
            const embedd = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`Merhaba, Üzgünüm Ancak Ayarlanmamış şeyleri sıfırlayamazsın!`)
      .setFooter(client.ayarlar.footer, client.user.avatarURL())
      return message.channel.send(embedd)	
        }
        
        await db.delete(`sayaçMHG_${message.guild.id}`)
        
        const embedd = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`Başarılı bir şekilde **sayaç mesajı** sıfırlandı!`)
      .setFooter(client.ayarlar.footer, client.user.avatarURL())
      return message.channel.send(embedd)	
    } else {
      const embedd = new Discord.MessageEmbed()
     .setColor("BLUE")
     .setDescription(`Merhaba, Öncelikle sayaç mesajı ayarlamak istiyorsan eğer bir değer belirtmelisin! örnek: ${prefix}sayaç hg-mesaj ayarla veya ${prefix}sayaç hg-mesaj sıfırla!`)
     .setFooter(client.ayarlar.footer, client.user.avatarURL())
     return message.channel.send(embedd)
   } 
}

if(args[0]=='bb-mesaj'){
const mesaj = args.slice(3).join(" ")
const mesajj = db.fetch(`sayaçMBB_${message.guild.id}`)
const sayaçhedef = db.fetch(`sayaçH_${message.guild.id}`)
const kalanüye = message.guild.memberCount - sayaçhedef

if(!args[1]) {
   const embedd = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`Merhaba, Öncelikle sayaç mesajı ayarlamak istiyorsan eğer bir değer belirtmelisin! örnek: ${prefix}sayaç bb-mesaj ayarla veya ${prefix}sayaç bb-mesaj sıfırla!`)
  .setFooter(client.ayarlar.footer, client.user.avatarURL())
  return message.channel.send(embedd)
} 

if(args[1] === "ayarla") {
 if(!mesaj) {
 const embedd = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`Merhaba, Sayaç Mesajı ayarlamak istiyorsan eğer bir mesaj belirlemelisin! örnek: ${prefix}sayaç hg-mesaj ayarla <mesaj>`)
  .addField("Fonksiyonlar:", `> {kullanıcı} => **Giden kullanıcıyı etiketler. (${message.author})**\n> {kullanıcı_adı} => **Kullanıcı adını gösterir. (${message.author.username})**\n> {sunucuadı} => **Sunucu adını gösterir. (${message.guild.name})**\n> {sunucuüyesayısı} => **Sunucuda bulunan üye sayısını gösterir. (${message.guild.memberCount})**\n> {kalanüye} => **Belirlenen hedefe kaç kişi kaldığını gösterir. (${kalanüye})**`)
  .setFooter(client.ayarlar.footer, client.user.avatarURL())
  return message.channel.send(embedd)	
 }
  
 await db.set(`sayaçMBB_${message.guild.id}`, mesaj)
 
const embedd = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`Merhaba, Başarılı bir şekilde sayaç görüşürüz mesajını ayarladım!\n Ayarlanmış değerler; Mesaj: ${mesaj}`)
  .setFooter(client.ayarlar.footer, client.user.avatarURL())
  return message.channel.send(embedd)	
}

else if(args[1] === "sıfırla") {
    if(!mesajj) {
        const embedd = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`Merhaba, Üzgünüm Ancak Ayarlanmamış şeyleri sıfırlayamazsın!`)
  .setFooter(client.ayarlar.footer, client.user.avatarURL())
  return message.channel.send(embedd)	
    }
    
    await db.delete(`sayaçMBB_${message.guild.id}`)
    
    const embedd = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`Başarılı bir şekilde **sayaç mesajı** sıfırlandı!`)
  .setFooter(client.ayarlar.footer, client.user.avatarURL())
  return message.channel.send(embedd)	
}
}
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sayaç'],
    permLevel: 4
}

exports.help = {
    name: "sayaç",
    description: "Sayaç ayarlar/sıfırlarsınız.",
    usage: "sayaç <ayarla hedef #kanal/sıfırla>"
}