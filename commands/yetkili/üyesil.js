const Discord = require('discord.js');
exports.run = async function(client, message, args) {  
  var u = message.mentions.users.first()
  var x = args[1]
  if (!u) return global.hata(message,"Birisini etiketlemelisin!", true)
  if (!x) return global.hata(message,"Temizlemek istediğin mesaj sayısını yazmalısın!", true)  
  if (isNaN(x)) return global.hata(message,"Temizlemek istediğin mesaj sayısını yazmalısın!", true)  
  if (x < 1) return global.hata(message,"**1** adetten az mesaj silemem!", true)
  if (x > 100) return global.hata(message,"**100** adetten fazla mesaj silemem!", true)
  var fetched = await message.channel.messages.fetch({limit: x})
  if (u) {var fetched = fetched.filter(m => m.author.id === u.id).array().slice(0, x)}
   message.channel.bulkDelete(fetched).catch(error => message.channel.send("`14` günden önceki mesajları silemem!"))
   global.oky(message,`**${u.tag}** adlı kullanıcının **${x}** adet mesajı başarıyla silindi!`, true)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["sil-üye", "mesaj-sil-üye", "mesajları-sil-üye", "üyesil","üye-sil"],
  permLevel: 1
};
exports.help = {
  name: 'temizle-üye',
  description: 'Belirtilen kişinin belirtilen miktarda mesajını siler.',
  usage: 'temizle-üye <@kullanıcı> <miktar>'
};