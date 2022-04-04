const Discord = require("discord.js");
const fs = require('fs');
const axios = require('axios');
const prettyMilliseconds = require('pretty-ms');
const AdmZip = require('adm-zip')


exports.run = async (client, message, args, db) => {
   if(await db.fetch('emojiyedekledi')) return global.hata(message, `**Şuanda Başka Bir Sunucunun Emojileri Yedekleniyor, Lütfen Sabırla Bekleyiniz.**`)
    const error = (str) => message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Hata').setDescription(str));

    const yuzdeHesapla = (p1, p2) => {
        const yapilan = p2 - p1;
        return ((yapilan * 100) / p2).toFixed(2)
    };

    const yaklasikSure = (count) => {
        const toplamSure = 2000 * count;
        const tahminiSureIng = prettyMilliseconds(toplamSure);
        const tahminiSureTr = tahminiSureIng
            .replace(/s/g, ' saniye')
            .replace(/m/g, ' dakika')
            .replace(/h/g, ' saat')
            .replace(/ms/g, ' milisaniye');


        return tahminiSureTr;
    };

    const downloadImage = (url, imagePath) =>
        axios({
            url,
            responseType: 'stream',
        }).then(
            response =>
                new Promise((resolve, reject) => {
                    response.data
                        .pipe(fs.createWriteStream(imagePath))
                        .on('finish', () => resolve())
                        .on('error', e => reject(e));
                }),
        );

    message.channel.send(new Discord.MessageEmbed().setTitle('<:bilgilendirme:812266535371931699> Onaylıyor musunuz?').setColor('GREEN').setDescription(`<:tik:768471220713947136> **${message.guild.emojis.cache.size} adet** emoji indirilip, ZIP dosyası olarak verilecek.`)).then(m => {
        m.react('✅');
        m.react('❌');
        const emojies = ['✅', '❌'];
        const filter = (reaction, user) => {
            return emojies.includes(reaction.emoji.name) && message.author.id == user.id;
        };

        const collector = m.createReactionCollector(filter, { max: 1, time: 30000 })
        collector.on('collect', async (reaction, user) => {
            switch (reaction.emoji.name) {
                case '✅':
                    await db.set('emojiyedekledi',true);
                    m.reactions.removeAll();
                    fs.promises.mkdir('emojiler')
                    var yuklenen = 1; kalan = message.guild.emojis.cache.size;
                    message.guild.emojis.cache.forEach(async emoji => {
                        const timeout = setTimeout(async () => {
                            var emojiURL = emoji.url, emojiAd = emoji.name, emojiUzanti = emoji.url.split('.')[3].trim();
                            await downloadImage(emojiURL, `emojiler/${emojiAd}.${emojiUzanti}`);
                            await m.edit(new Discord.MessageEmbed().setTitle('<a:downland:800376673580351568> Emoji İndirme!').setColor('GREEN').addField('<:say:799747394236973087> Toplam Emoji Sayısı:', message.guild.emojis.cache.size, true).addField('<:emojis:803206518425124885> Kaç Emoji Kaldı', kalan).addField('<a:cooldown:788347547093434428> Yüzdelik', `Yüklenen: %${yuzdeHesapla(kalan, message.guild.emojis.cache.size)}`).setFooter(`Yaklaşık ${yaklasikSure(kalan)} süre kaldı!`))
                            await clearTimeout(timeout)
                            kalan = kalan - 1;
                            if (kalan == 0) {
                                const file = new AdmZip();
                                file.addLocalFolder('./emojiler', 'lauraaaaa from dreamland');
                                fs.writeFileSync('./laura.zip', file.toBuffer());
                                const embed = new Discord.MessageEmbed().setTitle('Emoji İndirme').setColor('GREEN').setDescription(`<:tik:768471220713947136> **İşlem tamamlandı!** Toplam **${message.guild.emojis.cache.size} adet** emoji indirildi. **Dm Kutunuzu Kontrol Edin, Dmniz Kapalıysa Açın!**`)
                                m.edit(embed).then(async () => await db.delete('emojiyedekledi'));
                                message.author.send({
                                    files: [{ name: 'emojiler.zip', attachment: './laura.zip' }]
                                }).then(() => {
                                    fs.promises.rmdir('emojiler', { recursive: true }).then(() => console.log("emojiler klasorunu sildim"))
                                });
                            }
                        }, yuklenen * 2000);
                        yuklenen = yuklenen + 1;
                    });
                    break;
                case '❌':
                    m.reactions.removeAll();
                    m.edit(new Discord.MessageEmbed().setColor('RED').setDescription(`<a:noxd:804639936580943923> İşlem kullanıcı isteğiyle iptal edildi.`));
                    break;
            };
        });

        collector.on('end', collected => {
            if (collected.size == 0) {
                m.reactions.removeAll();
                m.edit(new Discord.MessageEmbed().setColor('RED').setDescription(`<a:noxd:804639936580943923> 30 saniye içerisinde işlem yapılmadığı için işlem iptal edildi.`));
            }
        });
    });

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ei', 'emojiindir'],
    permLevel: 4
};

exports.help = {
    name: 'emojiindir',
    description: 'emoji indirme sistemi, laura tarafından yapıldı.'
};