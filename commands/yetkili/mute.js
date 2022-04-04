const Discord = require('discord.js');
const ms = require('ms');

exports.run = async (client, message, args, db) => {

const muteRoleFetch = await db.fetch(`carl-mute-role.${message.guild.id}`);
if(!muteRoleFetch) return message.channel.send('Sunucunuzda muterolünü bulamadım ayarlamak için, `!!muterole oluştur [isim] veya !!muterole ayarla @roletiet` ile oluşturabilirsiniz.');

if(!args[0]) return message.channel.send(`${message.content.split('mute')[0]}mute [kullanıcı] [süre] lütfen bir süre belirtin!`);

let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.guild.members.cache.find(a => message.guild.members.cache.get(a.user.id).nickname && a.nickname.toLowerCase().includes(args[0].toLowerCase())) || message.guild.members.cache.find(a => a.user.username.toLowerCase().includes(args[0].toLowerCase()))
if(!member) return message.channel.send(`Mutelenecek üye "${args[0]}"yi bulamadım.`);

let infinity = false;
if(args[1]) {
  let d = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  infinity = args.filter(a => d.some(c => a.startsWith(c))).find(a => a.endsWith('m') || a.endsWith('h') || a.endsWith('s') || a.endsWith('d') || a.endsWith('w') || a.endsWith('y'));
};

var sayı = 0;
let zaman;
let gercek;
args.forEach(s => {
sayı++
if(s === infinity) {
gercek = sayı;
zaman = args[sayı-1];
};
});
args[gercek-1] = '';
args = args.filter(a => a !== '');

let reason;
if(!args[1]) reason = 'Sebep Belirtilmemiş.';
if(args[1]) reason = 'Reason: '+args.slice(1).join(' ');

if(!zaman) {
member.roles.add(muteRoleFetch).then(() => {
return message.channel.send(`**${member.user.tag}**, **${message.author.tag}** tarafından sonsuz olarak mutelendi, mute sebebi ${reason}.`);
});
} else {

let zamann = zaman.replace('w', ' week').replace('d', ' day').replace('s', ' second').replace('m', ' minute').replace('h', ' hour');
if(zamann.includes('second') && zamann.split(' ')[0] == 1) zamann = 'now'
if(zamann.includes('second') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' seconds';
if(zamann.includes('minute') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' minutes';
if(zamann.includes('hour') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' hours';
if(zamann.includes('day') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' days';
if(zamann.includes('week') && zamann.split(' ')[0] > 1) zamann = zamann.split(' ')[0]+' weeks';
if(ms(zaman) >= 2147483647) return message.channel.send('En fazla 24 gün susturabilirsiniz.');// ellemeyin arkadaslar.

member.roles.add(muteRoleFetch).then(() => {
message.channel.send(`**${member.user.tag}**, **${message.author.tag}** tarafından ${zamann} susturuldu, susturulma sebebi ${reason}.`);
setTimeout(() => {
  if(member.roles.cache.has(muteRoleFetch)) {
member.roles.remove(muteRoleFetch);
};
}, require('ms')(zaman))
return;
});
}

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "mute"
};
 
exports.help = {
  name: 'mute'
};