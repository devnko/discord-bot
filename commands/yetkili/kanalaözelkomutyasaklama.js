const Discord = require('discord.js');
const { Database } = require('npm.db')
const npmdb = new Database("database")

exports.run = async (client, message, args, db, ayarlar) => {
let durum = args[0];
let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
if(kanal) durum = args[1]
if(!kanal) kanal = message.channel;
  if(durum == "aç") {
    npmdb.set(`${message.guild.id}.${kanal.id}.komutkullanım`, true);
    return message.channel.send("Bu kanalda komut kullanımı kapatılmıştır. Açmak için !!komut-engel kapat")
  } else if(durum == "kapat") {
    npmdb.delete(`${message.guild.id}.${kanal.id}.komutkullanım`);
    return message.channel.send("Bu kanalda komut kullanımı açılmıştır. Kapatmak için !!komut-engel aç")
  } else return message.channel.send("Geçersiz argüman girdiniz! Lütfen ``aç`` veya ``kapat`` yazınız.")

};

exports.conf = {
  aliases: ['komut-kullanım','komutkullanım','kanalakomutengel','kanala-komut-engelle','kanalengel','kanal-engel'],
  permLevel: 4
};

exports.help = {
  name: 'komut-engel',
  description: 'Kanal da komut kullanımını engellersiniz.',
  usage: 'komut-kullanım <DEAKTIF/LISTE/AKTIF>'
};