const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
  let p = await db.fetch(`${message.guild.id}.prefix`) || ayarlar.prefix
  const prefix = args[0]
  if(dil == 'TR'){
  if(!prefix) return message.channel.send(`Lütfen prefixi değiştirmek için bir **argüman** belirtin. **Argümanlar:** ${p}prefix ayarla/sıfırla`)
  if(prefix == 'ayarla'){
  let yeniprefix = args[1];
  if (yeniprefix.length > 3) //böleydi galiba aq //d0ru ab kodırsın
  return message.reply("Prefix en fazla 3 karakter uzunluğunda olabilir.");
  await db.set(`${message.guild.id}.prefix`, yeniprefix) //d0ruumu ab kodır mıyım // eyw eyw yew
   return message.channel.send(`Prefix başarıyla **${yeniprefix}** olarak ayarlandı. Eğer prefixi sıfırlamak isterseniz **${yeniprefix}prefix sıfırla** yazarak sıfırlayabilirsiniz.`)
  } else if(prefix == "sıfırla") {
    if(!await db.fetch(`${message.guild.id}.prefix`)) return message.reply("Bir prefix ayarlanmamış!")
    await db.delete(`${message.guild.id}.prefix`)
    return message.channel.send('Başarıyla prefix sıfırlandı! Artık prefix **!!**.')
  } else {
    return message.reply(`Lütfen prefixi değiştirmek için bir **argüman** belirtin. **Argümanlar:** ${p}prefix ayarla/sıfırla`)
  }
  } else if(dil == 'EN'){
    if(!prefix) return message.channel.send(`Please specify a **argument** to change the prefix. **Arguments:** ${p}prefix set/reset`)
  if(prefix == 'set'){
  let yeniprefix = args[1];
  if (yeniprefix.length > 3) //böleydi galiba aq //d0ru ab kodırsın
  return message.reply("Prefix can be up to 3 characters long.");
  await db.set(`${message.guild.id}.prefix`, yeniprefix) //d0ruumu ab kodır mıyım // eyw eyw yew
   return message.channel.send(`Prefix has been successfully set to **${yeniprefix}**. If you want to reset the prefix, you can reset it by typing **${yeniprefix}prefix reset**.`)
  } else if(prefix == "reset") {
    if(!await db.fetch(`${message.guild.id}.prefix`)) return message.reply("A prefix is not set!")
    await db.delete(`${message.guild.id}.prefix`)
    return message.channel.send('Prefix successfully reset! Now prefix ** !! **.')
  } else {
    return message.reply(`Please specify a **argument** to change the prefix. **Arguments:** ${p}prefix set/reset  `)
  }
  }
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["prefix"],
    permLevel: 4
};

exports.help = {
    name: "prefix",
    description: "", 
    usage: "prefix"
};