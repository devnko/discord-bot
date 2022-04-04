const Discord = require('discord.js');

exports.run = async (client, message, args, db) => {

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Bu komutu kullanmak için **Kanalları Yönet** İznine Sahip olmalısın!')
if(!args[0]) return message.channel.send('Bir seçenek belirlemeniz gerekiyor. Örnek: !!muterol oluştur [rolismi]\n!!muterol ayarla @rol\n !!muterol sıfırla');

if(args[0] === 'oluştur') {
  
message.guild.roles.create({ data: { name: args.slice(1).join(' ') || 'muted', color: '#f4424b' }}).then(role => {
role.setPermissions(0);
message.channel.send("Rol başarıyla oluşturuldu. Rol ayarları yapılıyor. Bu bir kaç saniye alabilir. Bitirdiğimde size bildireceğim.").then(() => {
let arrayed = message.guild.channels.cache.filter(a => a.type === 'text').array();

var okay = 0;

for(const key in arrayed){
  arrayed[key].createOverwrite(role.id, {
  SEND_MESSAGES: false,
  ADD_REACTIONS: false
  });
  okay++;
  };
  
db.set(`carl-mute-role.${message.guild.id}`, role.id).then(console.log)
return message.channel.send("Başarılı! Mute rolü **"+role.name+"** olarak oluşturuldu ve toplam "+okay+" kanala ayarlandı!");

});
});
};

if(!args[0] === 'ayarla') {
let role = message.guild.roles.cache.get(args[0]) || message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name.toLowerCase().includes(args.slice(0).join(' ').toLowerCase()))
if(!role) return message.channel.send('Etiketlediğiniz "'+args.slice(0).join(' ')+'" rolünü bulamadım. Lütfen bir rol belirtin!');

db.set(`carl-mute-role.${message.guild.id}`, role.id).then(console.log)
return message.channel.send(`Başarıyla mute rolü **${role.name}** olarak ayarlandı!`);
};

if(!args[0] === 'sıfırla') {
    db.delete(`carl-mute-role.${message.guild.id}`).then(console.log)
    return message.channel.send(`Başarıyla mute rolü **sıfırlandı!**`);
    };

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['muterol'],
  permLevel: 0
};
 
exports.help = {
  name: 'muterole'
};