const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
    if(message.author.id !== "699597747657113653") if(message.author.id !== "548145246983159808") return;
    
    if(!args.length) return message.channel.send(`Lütfen yenilenecek komutu söyleyin.`);
  let klasör;
  if (global.klasor.has(args[0])) {
    klasör = global.klasor.get(args[0]);
  } 
  
  
  let command;
  if (global.Commands.has(args[1])) {
    command = global.Commands.get(args[1]);
  } 
  if(!klasör) return message.channel.send(`\`${args[0]}\` Adlı klasör bulunamadı!`);
  if(!command) return message.channel.send(`\`${args[1]}\` Adlı komut bulunamadı!`);
  command = command.help.name;
  client.reload(klasör, command).then(console.log(`${command} adlı komutu yeniledim.`))
  
  /*
 

  delete require.cache[require.resolve(`../../commands/${klasör}/${command}.js`)];
  let cmd = require(`../../commands/${args[0]}/${command}`);
  global.Commands.delete(command);
  if(cmd.init) cmd.init(client); //bu kısım karışk
  client.aliases.forEach((cmd, alias) => {
    if (cmd === command) global.Commands.delete(alias);
  });
  client.commands.set(command, cmd);
  cmd.conf.aliases.forEach(alias => {
    global.Commands.set(alias, cmd.help.name);
  });
*/
  message.channel.send(` **${klasör}** İçindeki \`${command}\` Adlı komut yenilendi.`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'yenile',
  description: 'Belirtilen komutu yenler.',
  usage: 'yenile'
};