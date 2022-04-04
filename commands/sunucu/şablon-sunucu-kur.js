const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar, prefix) => {
  try {
if(!args[0]){
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim}`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
    Sunucu Kurma Sistemi
    > • | **${prefix}şablon-sunucu-kur normal** --> Normal Şablon Sunucu Kurar.
    > • | **${prefix}şablon-sunucu-kur youtuber** --> Youtuber Şablon Sunucu Kurar.
    > • | **${prefix}şablon-sunucu-kur kod** --> Kod Şablon Sunucu Kurar.
    > • | **${prefix}şablon-sunucu-kur destek** --> Destek Şablon Sunucu Kurar.
    > • | **${prefix}şablon-sunucu-kur botlist** --> Botlist Şablon Sunucu Kurar.
    > • | **${prefix}şablon-sunucu-kur public** --> Public Şablon Sunucu Kurar.
    `)
    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
    return message.channel.send(embed)
}
if(args[0] === 'normal'){
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim}`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
   **:warning: Birazdan direkt mesajınıza gönderilecek olan Normal şablonunun telif hakları mevcuttur. Herhangi bir yerde şablonun bağlantısı paylaşılması durumunda gerekli işlemler uygulanabilir!**
    **•** Ayrıntılı bilgi edinmek istiyorsanız, **${prefix}telif** yazarak botun telif haklarıyla alakalı bilgi edinebilirsin.
    `)
    .setFooter(`• Kanala "evet" yazarsanız, onaylamış olursunuz. Hiç bir şey yazmazsanız, onaylanmaz.`, message.author.avatarURL({ dynamic: true }))
    message.channel.send(embed)
    let onay = await message.channel.awaitMessages((m) => m.author.id === message.author.id, {time: 5000 })
    let x = onay.first()
    if (x.content === 'evet') {
    message.author.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`
    :gear: **[Normal şablon](https://discord.new/EsaWwFUjaT39)** bağlantısından **Oluştur** butonuna tıklayarak sunucunuzu kurabilirsiniz ya da bu şablonun görünümüne bakabilirsiniz.
     **• Package yeni sunucunuzda, iyi eğlenceler diler.**
    `))
    return global.oky(message,`**Direkt mesajınıza gönderildi.**`,true)
    } else {
    return global.hata(message,`**Evet ve Hayır dışında cevap verdiğinizden kararınız anlaşılmadı, işlem iptal edildi.**`,true)
    }
} else if(args[0] === 'youtuber'){
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim}`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
   **:warning: Birazdan direkt mesajınıza gönderilecek olan Youtuber şablonunun telif hakları mevcuttur. Herhangi bir yerde şablonun bağlantısı paylaşılması durumunda gerekli işlemler uygulanabilir!**
    **•** Ayrıntılı bilgi edinmek istiyorsanız, **${prefix}telif** yazarak botun telif haklarıyla alakalı bilgi edinebilirsin.
    `)
    .setFooter(`• Kanala "evet" yazarsanız, onaylamış olursunuz. Hiç bir şey yazmazsanız, onaylanmaz.`, message.author.avatarURL({ dynamic: true }))
    message.channel.send(embed)
    let onay = await message.channel.awaitMessages((m) => m.author.id === message.author.id, {time: 5000 })
    let x = onay.first()
    if (x.content === 'evet') {
    message.author.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`
    :gear: **[Youtuber şablon](https://discord.new/Mhf4bJBDV8SY)** bağlantısından **Oluştur** butonuna tıklayarak sunucunuzu kurabilirsiniz ya da bu şablonun görünümüne bakabilirsiniz.
     **• Package yeni sunucunuzda, iyi eğlenceler diler.**
    `))
    return global.oky(message,`**Direkt mesajınıza gönderildi.**`,true)
    } else {
    return global.hata(message,`**Evet ve Hayır dışında cevap verdiğinizden kararınız anlaşılmadı, işlem iptal edildi.**`,true)
    }
} else if(args[0] === 'kod'){
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim}`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
   **:warning: Birazdan direkt mesajınıza gönderilecek olan Kod şablonunun telif hakları mevcuttur. Herhangi bir yerde şablonun bağlantısı paylaşılması durumunda gerekli işlemler uygulanabilir!**
    **•** Ayrıntılı bilgi edinmek istiyorsanız, **${prefix}telif** yazarak botun telif haklarıyla alakalı bilgi edinebilirsin.
    `)
    .setFooter(`• Kanala "evet" yazarsanız, onaylamış olursunuz. Hiç bir şey yazmazsanız, onaylanmaz.`, message.author.avatarURL({ dynamic: true }))
    message.channel.send(embed)
    let onay = await message.channel.awaitMessages((m) => m.author.id === message.author.id, {time: 5000 })
    let x = onay.first()
    if (x.content === 'evet') {
    message.author.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`
    :gear: **[Kod şablon](https://discord.new/RTkpsbEuQ8vs)** bağlantısından **Oluştur** butonuna tıklayarak sunucunuzu kurabilirsiniz ya da bu şablonun görünümüne bakabilirsiniz.
     **• Package yeni sunucunuzda, iyi eğlenceler diler.**
    `))
    return global.oky(message,`**Direkt mesajınıza gönderildi.**`,true)
    } else {
    return global.hata(message,`**Evet ve Hayır dışında cevap verdiğinizden kararınız anlaşılmadı, işlem iptal edildi.**`,true)
    }
} else if(args[0] === 'destek'){
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim}`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
   **:warning: Birazdan direkt mesajınıza gönderilecek olan Destek şablonunun telif hakları mevcuttur. Herhangi bir yerde şablonun bağlantısı paylaşılması durumunda gerekli işlemler uygulanabilir!**
    **•** Ayrıntılı bilgi edinmek istiyorsanız, **${prefix}telif** yazarak botun telif haklarıyla alakalı bilgi edinebilirsin.
    `)
    .setFooter(`• Kanala "evet" yazarsanız, onaylamış olursunuz. Hiç bir şey yazmazsanız, onaylanmaz.`, message.author.avatarURL({ dynamic: true }))
    message.channel.send(embed)
    let onay = await message.channel.awaitMessages((m) => m.author.id === message.author.id, {time: 5000 })
    let x = onay.first()
    if (x.content === 'evet') {
    message.author.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`
    :gear: **[Destek şablon](https://discord.new/ChdNEGWBuQXd)** bağlantısından **Oluştur** butonuna tıklayarak sunucunuzu kurabilirsiniz ya da bu şablonun görünümüne bakabilirsiniz.
     **• Package yeni sunucunuzda, iyi eğlenceler diler.**
    `))
    return global.oky(message,`**Direkt mesajınıza gönderildi.**`,true)
    } else {
    return global.hata(message,`**Evet ve Hayır dışında cevap verdiğinizden kararınız anlaşılmadı, işlem iptal edildi.**`,true)
    }
} else if(args[0] === 'botlist'){
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim}`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
   **:warning: Birazdan direkt mesajınıza gönderilecek olan Botlist şablonunun telif hakları mevcuttur. Herhangi bir yerde şablonun bağlantısı paylaşılması durumunda gerekli işlemler uygulanabilir!**
    **•** Ayrıntılı bilgi edinmek istiyorsanız, **${prefix}telif** yazarak botun telif haklarıyla alakalı bilgi edinebilirsin.
    `)
    .setFooter(`• Kanala "evet" yazarsanız, onaylamış olursunuz. Hiç bir şey yazmazsanız, onaylanmaz.`, message.author.avatarURL({ dynamic: true }))
    message.channel.send(embed)
    let onay = await message.channel.awaitMessages((m) => m.author.id === message.author.id, {time: 5000 })
    let x = onay.first()
    if (x.content === 'evet') {
    message.author.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`
    :gear: **[Botlist şablon](https://discord.new/35nYeRZzyfwt)** bağlantısından **Oluştur** butonuna tıklayarak sunucunuzu kurabilirsiniz ya da bu şablonun görünümüne bakabilirsiniz.
     **• Package yeni sunucunuzda, iyi eğlenceler diler.**
    `))
    return global.oky(message,`**Direkt mesajınıza gönderildi.**`,true)
    } else {
    return global.hata(message,`**Evet ve Hayır dışında cevap verdiğinizden kararınız anlaşılmadı, işlem iptal edildi.**`,true)
    }
} else if(args[0] === 'public'){
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim}`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
   **:warning: Birazdan direkt mesajınıza gönderilecek olan Public şablonunun telif hakları mevcuttur. Herhangi bir yerde şablonun bağlantısı paylaşılması durumunda gerekli işlemler uygulanabilir!**
    **•** Ayrıntılı bilgi edinmek istiyorsanız, **${prefix}telif** yazarak botun telif haklarıyla alakalı bilgi edinebilirsin.
    `)
    .setFooter(`• Kanala "evet" yazarsanız, onaylamış olursunuz. Hiç bir şey yazmazsanız, onaylanmaz.`, message.author.avatarURL({ dynamic: true }))
    message.channel.send(embed)
    let onay = await message.channel.awaitMessages((m) => m.author.id === message.author.id, {time: 5000 })
    let x = onay.first()
    if (x.content === 'evet') {
    message.author.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`
    :gear: **[Public şablon](https://discord.new/EsaWwFUjaT39)** bağlantısından **Oluştur** butonuna tıklayarak sunucunuzu kurabilirsiniz ya da bu şablonun görünümüne bakabilirsiniz.
     **• Package yeni sunucunuzda, iyi eğlenceler diler.**
    `))
    return global.oky(message,`**Direkt mesajınıza gönderildi.**`,true)
    } else {
    return global.hata(message,`**Evet ve Hayır dışında cevap verdiğinizden kararınız anlaşılmadı, işlem iptal edildi.**`,true)
    }
}
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["şablon-sunucu-kur"],
  permLevel: 0
};

exports.help = {
  name: "şablon-sunucu-kur",
  description: "",
  usage: "şablon-sunucu-kur"
};
