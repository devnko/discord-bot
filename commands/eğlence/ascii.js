var figlet = require('figlet');


module.exports.run = (client, message, args, tools) => {


  var maxLen = 100 
  
  if(args.join(' ').length > maxLen) return message.channel.send(`<a:dikkat:771840237760544768> En fazla ${maxLen} karakter yazabilirsin! Daha fazlasını yazabilme şansın yoktur.`) 
  
  if(!args[0]) return message.channel.send('<a:dikkat:771840237760544768> Lütfen bir yazı girin.');
  
  figlet(`${args.join(' ')}`, function(err, data) {

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ascii'],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: 'ascii',
  description: 'Yazınız yazıyı ascii yazı tipine çeviririm',
  usage: 'ascii'
};