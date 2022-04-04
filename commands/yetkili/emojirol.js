const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
  var msg,
      emoji,
      rol = "";
    //var channel = message.channel;
    if (args[0] == "kapat") {
      //if(await db.has(`${message.guild.id}.emojirol`)) return message.channel.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`${global.deniedozel} **Emojirol Sistemi ayarlanmadığından, sıfırlanamaz.**`))
      await db.delete(`${message.guild.id}.emojirol`);
      return message.channel.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`${global.tikozel} Tepki Sistemi, **Sıfırlandı.**`));
    }
    msg = await message.channel.messages.fetch(args[0]).catch(e =>message.channel.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`${global.deniedozel} **Lütfen Bu Kanalda Yazılmış Bir Mesaj ID'sı Belirtin.**`)));
    if (!msg) return message.channel.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`${global.deniedozel} **Lütfen Bu Kanalda Yazılmış Bir Mesaj ID'sı Belirtin.**`))
    emoji = args[1];
    if (!emoji) return message.channel.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`${global.deniedozel} **Lütfen Bir Emoji Belirtin.**`))
  //  if (emoji.startsWith("<:")) return message.channel.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`${global.deniedozel} **Ne Yazik ki Emojirol Sisteminde Hareketli ve ya Harici Emoji Kullanamazsın!**`))
    //if (emoji.startsWith("<:a")) return message.channel.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`${global.deniedozel} **Ne Yazik ki Emojirol Sisteminde Hareketli ve ya Harici Emoji Kullanamazsın!**`))
    rol = message.guild.roles.cache.get(args[2]) || message.mentions.roles.first();
    if (!rol) return message.channel.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`${global.deniedozel} **Emojirol Sistemi İçin Lütfen Bir Rol Belirtin.**`))
    if(await db.fetch(`${message.guild.id}.emojirol`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${global.deniedozel} Ne yazık ki emojirol sistemi bir adet ayarlanabilir. Eğer çoklu bir şekilde emojirol sistemini kullanmak istiyorsanız, **${prefix}premium paketi** alarak sınırsızca kullanabilirsiniz.`).setColor(client.ayarlar.renk).setAuthor('FireOfEternity Emoji Rol Sistemi', message.author.avatarURL({dynamic: true}), client.ayarlar.destek).setFooter(client.ayarlar.footerEmbed));
    //if(rol.hasPermission !== ("ADMINISTRATOR")) return message.channel.send('Yönetici yetkili olan bir role emojirol ayarlayamazsın!')
    await msg.react(emoji);

    await db.set(`${message.guild.id}.emojirol.${msg.channel.id}.${msg.id}.${emoji}.rol`, rol.id)
      .then(a => {
      message.channel.send(new Discord.MessageEmbed().setDescription(`${global.tikozel} Emoji rol: **<#${msg.channel.id}>** adlı kanalındaki, **${msg.id}** ID'li mesajına, ${emoji} ile verilecek alınacak rol <@&${rol.id}> olarak **Aktive edilmiştir.**!`).setColor(client.ayarlar.renk).setAuthor('FireOfEternity Emoji Rol Sistemi', message.author.avatarURL({dynamic: true}), client.ayarlar.destek).setFooter(client.ayarlar.footerEmbed))
      })
      .catch(e => console.log(e));
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji-rol"],
  permLevel: 4
};

exports.help = {
  name: "emojirol",
  description: "",
  usage: ""
};
