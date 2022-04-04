const Discord = require("discord.js");
const moment = require("moment");
moment.locale("tr");

function duration(parametre1) {
    let seconds = (parametre1 - (parametre1 % 1000)) / 1000;
    let minutes = (seconds - (seconds % 60)) / 60;
    let hours = (minutes - (minutes % 60)) / 60;
    seconds = seconds % 60;
    minutes = minutes % 60;
    if(seconds.length == "1") seconds = `0${seconds}`
    if(minutes.length == "1") minutes = `0${minutes}`
    if(hours.length == "1") hours = `0${hours}`
    let gosterim = "00:00"
    if(seconds) gosterim = `00:${seconds}`
    if(minutes) gosterim = `${minutes}:${seconds}`
    if(hours) gosterim = `${hours}:${minutes}:${seconds}`
    return gosterim
}

exports.run = (client, message, args) => {

    if(message.author.id !== message.guild.owner.id) return message.channel.send('Bu komutu sadece **"Sunucu Sahibi"** kullanabilir!')
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`:x: Vermek istediğiniz rolü giriniz.`))
    let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
    if(!rol) return message.channel.send(new Discord.MessageEmbed().setDescription(`:x: Vermek istediğiniz rolü giriniz.`))
    if(message.guild.members.cache.get(client.user.id).roles.highest.position < rol.rawPosition) return message.channel.send(new Discord.MessageEmbed().setDescription(`:x: ${message.guild.members.cache.get(client.user.id).roles.highest}, rolünü ${rol} rolünün üstüne almalısınız.`))
    let botStatus = 0
    if(message.guild.members.cache.filter(a => !a.roles.cache.has(rol.id)).size < 1) return message.channel.send(new Discord.MessageEmbed().setDescription(`:x: Bu role herkes sahip.`))
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
    .setAuthor(`${message.author.tag} Herkese rol vermek istiyor musun?`, message.author.displayAvatarURL({dynamic:true}))
    .addField(`Verilecek Rol:`, rol, true)
    .addField(`Verilecek Kişi: (Botlu)`, message.guild.members.cache.filter(a => !a.roles.cache.has(rol.id)).size, true)
    .addField(`Rol Vermeyi Onaylıyor Musun?`, `Evet: ✅ Hayır: ❌ Bot Ayarı: 🤖`)
    .setFooter(`Tarih: ${moment().format("L - LTS")}`, message.author.displayAvatarURL({dynamic:true}))
    message.channel.send(embed)
    .then(msg => {
        let mesajid = msg.id
        let mesajkanalid = msg.channel.id
    let yesAlert2 = false;
    msg.react('✅')
    msg.react('❌')
    msg.react('🤖')


    const yesFiltre = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const noFiltre = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    const botFiltre = (reaction, user) => reaction.emoji.name === '🤖' && user.id === message.author.id;

    const yesAlert = msg.createReactionCollector(yesFiltre, { time: 30000 });
    const noAlert = msg.createReactionCollector(noFiltre, { time: 900000 });
    const botAlert = msg.createReactionCollector(botFiltre, { time: 30000 });

    botAlert.on('collect', (reaction, user) => {
        if(botStatus == "0") {
            botStatus = "1"
            const embed = new Discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
            .setAuthor(`${message.author.tag} Herkese rol vermek istiyor musun?`, message.author.displayAvatarURL({dynamic:true}))
            .addField(`Verilecek Rol:`, rol, true)
            .addField(`Verilecek Kişi: (Botsuz)`, message.guild.members.cache.filter(a => !a.user.bot && !a.roles.cache.has(rol.id)).size, true)
            .addField(`Rol Vermeyi Onaylıyor Musun?`, `Evet: ✅ Hayır: ❌ Bot Ayarı: 🤖`)
            .setFooter(`Tarih: ${moment().format("L - LTS")}`, message.author.displayAvatarURL({dynamic:true}))
            msg.edit(embed)
        } else {
            botStatus = "0"
            const embed = new Discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
            .setAuthor(`${message.author.tag} Herkese rol vermek istiyor musun?`, message.author.displayAvatarURL({dynamic:true}))
            .addField(`Verilecek Rol:`, rol, true)
            .addField(`Verilecek Kişi: (Botlu)`, message.guild.members.cache.filter(a => !a.roles.cache.has(rol.id)).size, true)
            .addField(`Rol Vermeyi Onaylıyor Musun?`, `Evet: ✅ Hayır: ❌ Bot Ayarı: 🤖`)
            .setFooter(`Tarih: ${moment().format("L - LTS")}`, message.author.displayAvatarURL({dynamic:true}))
            msg.edit(embed)
        }
    })

    noAlert.on('collect', (reaction, user) => {
        const embed = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
        .setAuthor(`${message.author.tag} Herkese rol verme isteği reddedildi`, message.author.displayAvatarURL({dynamic:true}))
        .setFooter(`Tarih: ${moment().format("L - LTS")}`, message.author.displayAvatarURL({dynamic:true}))
        msg.edit(embed)
        msg.reactions.removeAll()
        return;
    })

    yesAlert.on('collect', (reaction, user) => {
        if(botStatus == "0") {
            let yesAlert2 = true;
            msg.reactions.removeAll()
            msg.react('❌')
            let verilecekler = message.guild.members.cache.filter(a => !a.roles.cache.has(rol.id))
            let verileceklerListe = [];
            verilecekler.forEach(a => {
                verileceklerListe.push(a.id)
            })
            let cakmauzunluk = parseInt(verilecekler.size/4)
            let verildi = 0
            let verildiyuzde = 100 / verilecekler.size * verildi
            const embed = new Discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
            .setAuthor(`${message.author.tag} Herkese rol verme isteği onaylandı`, message.author.displayAvatarURL({dynamic:true}))
            .addField(`Verilecek Rol:`, rol, true)
            .addField(`Verilecek Kişi: (Botlu)`, message.guild.members.cache.filter(a => !a.roles.cache.has(rol.id)).size, true)
            .addField(`Toplam Süre:`, duration(verilecekler.size * 1000), true)
            .addField(`Kalan Yüzde:`, `%${100 - parseInt(verildiyuzde)} - %${parseInt(verildiyuzde)}`, true)
            .addField(`Kalan Sayı:`, verilecekler.size - verildi, true)
            .addField(`Verilen Sayı:`, verildi, true)
            .addField(`Kalan Süre:`, duration((verilecekler.size - verildi) * 1000))
            .setFooter(`Tarih: ${moment().format("L - LTS")}`, message.author.displayAvatarURL({dynamic:true}))
            msg.edit(embed)
            let donmesayi;
            if(verilecekler.size <= 4) donmesayi = 1
            if(verilecekler.size > 4 && verilecekler.size / 4 == cakmauzunluk) {donmesayi = cakmauzunluk} else {donmesayi = cakmauzunluk + 1}
            const interval = setInterval(async function() {
                if(!interval) return;
                if(yesAlert2 = false) return;
                //CANCEL
                
                const cancelFiltre = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
                const cancelAlert = msg.createReactionCollector(cancelFiltre, { time: verilecekler.size * 1000 })
                cancelAlert.on('collect', (reaction, user) => {
                    if(yesAlert2 = true) {
                        const embed = new Discord.MessageEmbed()
                        .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
                        .setAuthor(`${message.author.tag} Herkese rol verme isteği manuel olarak yarıda kesildi`, message.author.displayAvatarURL({dynamic:true}))
                        .setFooter(`Tarih: ${moment().format("L - LTS")}`, message.author.displayAvatarURL({dynamic:true}))
                        msg.edit(embed)
                        msg.reactions.removeAll()
                        clearInterval(interval)
                        yesAlert2 = false
                        return;
                    }
                })

                // CANCEL
                verileceklerListe.slice(verildi, verildi+4).forEach(ver => {
                    message.guild.members.cache.get(ver).roles.add(rol.id)
                    verildi++
                })
                let verildiyuzde = 100 / verilecekler.size * verildi
                if(parseInt(verildiyuzde) == "100") {
                    msg.reactions.removeAll()
                    const embed = new Discord.MessageEmbed()
                    .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
                    .setAuthor(`${message.author.tag} Herkese rol verme isteği tamamlandı`, message.author.displayAvatarURL({dynamic:true}))
                    .addField(`Verilen Rol:`, rol, true)
                    .addField(`Verilen Kişi: (Botlu)`, verildi, true)
                    .addField(`Verilen Süre:`, duration(verildi * 1000))
                    msg.edit(embed)
                    clearInterval(interval)
                    return;
                }
                const embed = new Discord.MessageEmbed()
                .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
                .setAuthor(`${message.author.tag} Herkese rol verme isteği onaylandı`, message.author.displayAvatarURL({dynamic:true}))
                .addField(`Verilecek Rol:`, rol, true)
                .addField(`Verilecek Kişi: (Botlu)`, verilecekler.size, true)
                .addField(`Toplam Süre:`, duration(verilecekler.size * 1000), true)
                .addField(`Kalan Yüzde:`, `%${100 - parseInt(verildiyuzde)} - %${parseInt(verildiyuzde)}`, true)
                .addField(`Kalan Sayı:`, verilecekler.size - verildi, true)
                .addField(`Verilen Sayı:`, verildi, true)
                .addField(`Kalan Süre:`, duration((verilecekler.size - verildi) * 1000))
                .setFooter(`Tarih: ${moment().format("L - LTS")}`, message.author.displayAvatarURL({dynamic:true}))
                msg.edit(embed)
            }, 4000)
        }
        if(botStatus == "1") {
            let yesAlert2 = true;
            msg.reactions.removeAll()
            msg.react('❌')
            let verilecekler = message.guild.members.cache.filter(a => !a.user.bot && !a.roles.cache.has(rol.id))
            let verileceklerListe = [];
            verilecekler.forEach(a => {
                verileceklerListe.push(a.id)
            })
            let cakmauzunluk = parseInt(verilecekler.size/4)
            let verildi = 0
            let verildiyuzde = 100 / verilecekler.size * verildi
            const embed = new Discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
            .setAuthor(`${message.author.tag} Herkese rol verme isteği onaylandı`, message.author.displayAvatarURL({dynamic:true}))
            .addField(`Verilecek Rol:`, rol, true)
            .addField(`Verilecek Kişi: (Botsuz)`, message.guild.members.cache.filter(a => !a.user.bot && !a.roles.cache.has(rol.id)).size, true)
            .addField(`Toplam Süre:`, duration(verilecekler.size * 1000), true)
            .addField(`Kalan Yüzde:`, `%${100 - parseInt(verildiyuzde)} - %${parseInt(verildiyuzde)}`, true)
            .addField(`Kalan Sayı:`, verilecekler.size - verildi, true)
            .addField(`Verilen Sayı:`, verildi, true)
            .addField(`Kalan Süre:`, duration((verilecekler.size - verildi) * 1000))
            .setFooter(`Tarih: ${moment().format("L - LTS")}`, message.author.displayAvatarURL({dynamic:true}))
            msg.edit(embed)
            let donmesayi;
            if(verilecekler.size <= 4) donmesayi = 1
            if(verilecekler.size > 4 && verilecekler.size / 4 == cakmauzunluk) {donmesayi = cakmauzunluk} else {donmesayi = cakmauzunluk + 1}
            const interval = setInterval(async function() {
                if(!interval) return;
                if(yesAlert2 = false) return;
                //CANCEL
                
                const cancelFiltre = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
                const cancelAlert = msg.createReactionCollector(cancelFiltre, { time: verilecekler.size * 1000 })
                cancelAlert.on('collect', (reaction, user) => {
                    if(yesAlert2 = true) {
                        const embed = new Discord.MessageEmbed()
                        .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
                        .setAuthor(`${message.author.tag} Herkese rol verme isteği yarıda kesildi`, message.author.displayAvatarURL({dynamic:true}))
                        .setFooter(`Tarih: ${moment().format("L - LTS")}`, message.author.displayAvatarURL({dynamic:true}))
                        msg.edit(embed)
                        msg.reactions.removeAll()
                        clearInterval(interval)
                        yesAlert2 = false
                        return;
                    }
                })

                // CANCEL
                verileceklerListe.slice(verildi, verildi+4).forEach(ver => {
                    message.guild.members.cache.get(ver).roles.add(rol.id);
                    verildi++
                })
                let verildiyuzde = 100 / verilecekler.size * verildi
                if(parseInt(verildiyuzde) == "100") {
                    msg.reactions.removeAll()
                    const embed = new Discord.MessageEmbed()
                    .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
                    .setAuthor(`${message.author.tag} Herkese rol verme isteği tamamlandı`, message.author.displayAvatarURL({dynamic:true}))
                    .addField(`Verilen Rol:`, rol, true)
                    .addField(`Verilen Kişi: (Botsuz)`, verildi, true)
                    .addField(`Verilen Süre:`, duration(verildi * 1000))
                    msg.edit(embed)
                    clearInterval(interval)
                    return;
                }
                const embed = new Discord.MessageEmbed()
                .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
                .setAuthor(`${message.author.tag} Herkese rol verme isteği onaylandı`, message.author.displayAvatarURL({dynamic:true}))
                .addField(`Verilecek Rol:`, rol, true)
                .addField(`Verilecek Kişi: (Botsuz)`, verilecekler.size, true)
                .addField(`Toplam Süre:`, duration(verilecekler.size * 1000), true)
                .addField(`Kalan Yüzde:`, `%${100 - parseInt(verildiyuzde)} - %${parseInt(verildiyuzde)}`, true)
                .addField(`Kalan Sayı:`, verilecekler.size - verildi, true)
                .addField(`Verilen Sayı:`, verildi, true)
                .addField(`Kalan Süre:`, duration((verilecekler.size - verildi) * 1000))
                .setFooter(`Tarih: ${moment().format("L - LTS")}`, message.author.displayAvatarURL({dynamic:true}))
                msg.edit(embed)
            }, 4000)
        }
    })

    })
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
   
  exports.help = {
    name: "herkeserolver",
};