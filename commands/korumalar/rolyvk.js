const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
    const sec = args[0]
    if(dil == 'TR'){
    if(message.author.id !== message.guild.owner.id) return message.reply("Bu komutu sadece ``sunucu sahibi`` kullanabilir!");
    if(sec == "aç") {
      if (await db.get(`${message.guild.id}.rolyvk`)) return message.channel.send("Bu sistem zaten açık!");
      await db.set(`${message.guild.id}.rolyvk`, true);
      return message.channel.send("Başarılı, artık sunucu sahibi hariç hiçkimse birisine yönetici veremeyecek.")  
    }
    else if(sec == "kapat") {
      if (!await db.get(`${message.guild.id}.rolyvk`)) return message.channel.send("Bu sistem zaten kapalı!");
      await db.delete(`${message.guild.id}.rolyvk`);
      return message.channel.send("Başarılı, artık herkes birisine yönetici verebilecek.")  
    }
    else {
      return message.channel.send("Geçersiz bir argüman girdiniz! Lütfen ``aç`` veya ``kapat`` yazınız.")
    }
    } else if(dil == 'EN'){
    if(message.author.id !== message.guild.owner.id) return message.reply("Only the `` server owner `` can use this command!");
    if(sec == "open") {
      if (await db.get(`${message.guild.id}.rolyvk`)) return message.channel.send("This system is already open!");
      await db.set(`${message.guild.id}.rolyvk`, true);
      return message.channel.send("Successful, nobody will be able to give admin to anyone except the server owner.")  
    }
    else if(sec == "close") {
      if (!await db.get(`${message.guild.id}.rolyvk`)) return message.channel.send("This system is already closed!");
      await db.delete(`${message.guild.id}.rolyvk`);
      return message.channel.send("Successful, now everyone will be able to assign a manager to someone else.")  
    }
    else {
      return message.channel.send("You entered an invalid argument! Please write `` open '' or `` close ''.")
    }
    }
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rolyvk"],
    permLevel: 0
};

exports.help = {
    name: "rolyvk",
    description: "", 
    usage: "rolyvk"
};