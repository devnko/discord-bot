const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
    let acik = "";
    let kapali = global.dnd;
    let yakinda = global.yayında;
    let p = prefix;
    let server = "https://discord.com/";
    let countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
    let bilgi = [
      `Yeni Yıla **${days} Gün, ${hours} Saat, ${minutes} Dakika, ${seconds} Saniye** kaldı!`,
      `**[Destek](${client.ayarlar.destek})** Sunucumuza gelerek çekilişlere katılabilirsiniz!`,
      `${client.ayarlar.botİsim} Botu için her gün yeni güncellemeler getiriyoruz!`,
      `Eğer Gold Üyelik alırsanız bazı gizli özellikleri açabilirsiniz!`,
      `Yapımcılarım **Alperen,Safa**!`,
      `Şu anki Gecikme Sürem **${client.ws.ping} ms**!`,
      `**${uptime}** Süredir Aktifim!`,
      `**Nsfw** Komutlarını Görmek İçin Yardım Komutunu **Nsfw** Kanalda Kullanın!`
    ];
    let bilgiler = Math.floor(Math.random() * bilgi.length);

    if (dil == "TR") {
      const onayembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(client.ayarlar.footer, message.author.avatarURL({dynamic:true}))
        .setAuthor(
          `Package Yardım Menüsü`,
          client.user.avatarURL()
        ).setThumbnail(client.user.avatarURL())
      /*  .setImage(
          "https://media.discordapp.net/attachments/813333808660742196/824194882926805042/fireofeternitylarge.png?width=761&height=45"
        )*/

       /* .addField(
          "> 🆕 | Yenilikler!",
          `**🆕 Emojisine basarak bot ile ilgili yenilikleri görebilirsizin!**`
        )*/
        .addField(
          "> 📣 | Duyurular!",
          `Bakımda Olan Komutlar -> /çekiliş, Level Sistemi, Müzik Komutu`
        )
        .addField(
          "> 🔗 | Linkler;",
          ` [Beni Ekle](https://bit.ly/packagebot) | [Destek Sunucum](https://discord.gg/wGEGQxpVQN)`
        );
      if (message.channel.nsfw === true) {
        onayembed.setDescription(
          `
  **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
     > • | Selam! ${message.author.username}, **Package** Yardım Menüsüne Hoşgeldin!
     > • | ${bilgi[bilgiler]}
**●▬▬▬▬▬▬▬▬【 Kategoriler [10] 】▬▬▬▬▬▬▬▬▬●**
> ・| **Kullanıcı** Komutları İçin: :eyes: 
> ・| **Genel** Komutları İçin: :dart: 
> ・| **Müzik** Komutları İçin: 🎵
> ・| **Eğlence** Komutları İçin: :bowling: 
> ・| **Nsfw** Komutlarını için: 🔞
> ・| **Yetkili** Komutları İçin::wrench: 
> ・| **Koruma** Komutları İçin: :shield: 
> ・| **Ekonomi** Komutları İçin: 💰 
> ・| **Sunucu** Komutları İçin: 🏗️ emojisine basmanız **yeterlidir**!`
        );
      } else {
        onayembed.setDescription(
          `
  **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
     > • | Hey! ${message.author}, **Package** Yardım Menüsüne Hoşgeldin!
     > • | ${bilgi[bilgiler]}
**●▬▬▬▬▬▬▬▬【 Kategoriler [9] 】▬▬▬▬▬▬▬▬▬●**
> ・| **Kullanıcı** Komutları İçin: :eyes: 
> ・| **Genel** Komutları İçin: :dart: 
> ・| **Müzik** Komutları İçin: 🎵
> ・| **Kayıt** Komutları İçin: 📖
> ・| **Eğlence** Komutları İçin: :bowling: 
> ・| **Yetkili** Komutları İçin::wrench: 
> ・| **Koruma** Komutları İçin: :shield: 
> ・| **Ekonomi** Komutları İçin: 💰 
> ・| **Sunucu** Komutları İçin: 🏗️ emojisine basmanız **yeterlidir**!`
        );
      }
      global
        .oky(
          message,
          `${global.yükleniyor} Lütfen bekleyiniz emojiler ekleniyor`
        )
        .then(async msg => {
          //msg.react("👀").then(() => msg.react("🎯")).then(() => msg.react("🎳")).then(() => msg.react("🤖")).then(() => msg.react("🔧")).then(() => msg.react("🛡️")).then(() => msg.react("💰")).then(() => msg.react("🏗️")).then(() => msg.react("🆕")).then(() => msg.react("⬅️"));
          await msg.react("👀");
          await msg.react("🎯");
          await msg.react("🎵");
          await msg.react("📖");
          await msg.react("🎳");
         // await msg.react("🆙");
          if (message.channel.nsfw === true) {
            await msg.react("🔞");
          }
          await msg.react("🔧");
          await msg.react("🛡️");
          await msg.react("💰");
          await msg.react("🏗️");
          //await msg.react("🆕");
          await msg.react("❌");
          await msg.edit(onayembed);
          let filter = (reaction, user) =>
            user.id !== message.client.user.id && user.id === message.author.id;

          var collector = msg.createReactionCollector(filter, {
            time: 120000
          });

          msg;
          collector.on("collect", async (reaction, user) => {
            switch (reaction.emoji.name) {
              case "👀":
                reaction.users.remove(user).catch(console.error);
                let qwe = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Yardım - Kullanıcı Menü", client.user.avatarURL())
                  .setDescription(`
                  **●▬▬▬▬▬▬▬▬【 Kullanıcı Komutları [18] 】▬▬▬▬▬▬▬▬▬●**

                             > ・${acik} | [${p}sunucubilgi](${server}) - **Sunucunun Bilgisine Bakarsınız.**
                             > ・${acik} | [${p}kullanıcıbilgi](${server}) - **Kullanıcının Bilgisine Bakarsınız.**
                             > ・${acik} | [${p}rolbilgi](${server}) - **Rolün Bilgisine Bakarsınız.**
                             > ・${acik} | [${p}avatar](${server}) - **Avatarına Bakarsınız.**
                             > ・${acik} | [${p}bildir](${server}) - **Bot'a Öneri/Şikayet/Hata/Bug Bildiriminde Bulunursunuz.**
                             > ・${acik} | [${p}yetkilerim](${server}) - **Yetkilierinize Bakarsınız.**
                             > ・${acik} | [${p}dbl](${server}) - **DBL(Discord Bot List)'de Bot Ararsınız.**
                             > ・${acik} | [${p}ping](${server}) - **Botun Pingine Bakarsınız.**
                             > ・${acik} | [${p}istatistik](${server}) - **Botun İstatistiğine Bakarsınız.**
                             > ・${acik} | [${p}uptime](${server}) - **Botun Aktifliğine Bakarsınız.**
                             > ・${acik} | [${p}telif](${server}) - **Botun Telif Haklarına Bakarsınız.**
                             > ・${acik} | [${p}isim](${server}) - **Kendinizin sunucudaki isminizi değiştirirsiniz..***`)
                .addField('> 2. Kullanıcı Bölümü',`
                             > ・${acik} | [${p}shard](${server}) - **Botun Shard'ına Bakarsınız.**
                             > ・${acik} | [${p}davet](${server}) - **Botu Sunucunuza Davet Edersiniz.**
                             > ・${acik} | [${p}şifre](${server}) - **Belirtiğiniz miktarda şifre oluşturur.**
                             > ・${acik} | [${p}base64](${server}) - **Yazıyı base64'e çevirirsiniz.**
                             > ・${acik} | [${p}github](${server}) - **Github'da kullanıcı ararsınız.**
                             > ・${acik} | [${p}çevir](${server}) - **Yazı Çevirirsiniz.**
            `);
                msg.edit(qwe);
          await msg.react("⬅️");
                break;
              case "💰":
                reaction.users.remove(user).catch(console.error);
                let ekonomi = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Yardım - Ekonomi Menü", client.user.avatarURL())
                  .setDescription(`
          **●▬▬▬▬▬▬▬▬【 Ekonomi Komutları [13] 】▬▬▬▬▬▬▬▬▬●**
          
     > ・${acik} | [${prefix}banka](${client.ayarlar.destek}) - **Banka Bilgilerinizi Gösterir.**
     > ・${acik} | [${prefix}kredikartı](${client.ayarlar.destek}) - **Kredi Kartı Bilgilerinizi Gösterir.**
     > ・${acik} | [${prefix}market](${client.ayarlar.destek}) - **Marketi Gösterir.**
     > ・${acik} | [${prefix}çalış](${client.ayarlar.destek}) - **Çalışırsınız.**
     > ・${acik} | [${prefix}günlük](${client.ayarlar.destek}) - **Günlük ödülünüzü alırsınız.**
     > ・${acik} | [${prefix}çark-çevir](${client.ayarlar.destek}) - **6 saatte bir çark çevirerek para alırsınız.**
     > ・${acik} | [${prefix}düello](${client.ayarlar.destek}) - **Düello yaparsınız.**
     > ・${acik} | [${prefix}kredisıralama](${client.ayarlar.destek}) - **Kredi Sıralamasını Görürsünüz.**
     > ・${acik} | [${prefix}pakethediye](${client.ayarlar.destek}) - **Belirtilen Kişiye Özel Üyelik Paket Hediye Edersiniz.**
     > ・${acik} | [${prefix}kumar](${client.ayarlar.destek}) - **Kumar Oynarsınız.**
     > ・${acik} | [${prefix}soy](${client.ayarlar.destek}) - **Kullanıcı Soyarsınız.**
     > ・${acik} | [${prefix}rozet](${client.ayarlar.destek}) - **Rozet alırsınız.**
     > ・${acik} | [${prefix}kredi](${client.ayarlar.destek}) - **Gold Kredi Bilgilerinize Bakar/Gold KRedisi Transfer Edersiniz.**
            `);
                msg.edit(ekonomi);
          await msg.react("⬅️");
                break;
case "📖":
reaction.users.remove(user).catch(console.error);
let kayıt = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTimestamp()
.setAuthor("Yardım - Kayıt Menü", client.user.avatarURL())
.setDescription(`
**●▬▬▬▬▬▬▬▬【 Kayıt Komutları [12] 】▬▬▬▬▬▬▬▬▬●**

> ・${acik} | [${prefix}kayıt-kanal](${server}) - **Kayıt kanalını ayarlarsınız.**
> ・${acik} | [${prefix}kayıt-günlük](${server}) - **Kayıt günlük kanalını ayarlarsınız.**
> ・${acik} | [${prefix}erkek @kullanıcı](${server}) - **Etiketlenen üyeyi, kaydedip erkek rolü verir.**
> ・${acik} | [${prefix}kız @kullanıcı](${server}) - **Etiketlenen üyeyi, kaydedip kız rolü verir.**
> ・${acik} | [${prefix}yetkili-rol](${server}) - **Üyeleri kaydedebilecek olan rolü ayarlarsınız.**
> ・${acik} | [${prefix}kız-rol](${server}) - **Kız/kadın üyelere verilecek olan rolü ayarlarsınız.**
> ・${acik} | [${prefix}erkek-rol](${server}) - **Erkek üyelere verilecek olan rolü ayarlarsınız.**
> ・${acik} | [${prefix}alınacak-rol](${server}) - **Kayıt olan kişiden alınacak rolü ayarlarsınız.**
> ・${acik} | [${prefix}kayıt-mesaj](${server}) - **Üye sunucuya katılınca gelecek mesajı ayarlarsınız.**
> ・${acik} | [${prefix}kayıt-sistemi-sıfırla](${server}) - **Kayıt sistemini sıfırlarsınız.**
> ・${acik} | [${prefix}ses-bilgi](${server}) - **Seste olup olmayan yetkilileri listeler.**
> ・${acik} | [${prefix}admin-istatistik](${server}) - **Kayıt sisteminde istatistiklere bakarsınız.**
`);
msg.edit(kayıt);
await msg.react("⬅️");
break;

             /* case "🆙":
                reaction.users.remove(user).catch(console.error);
                let seviye = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Yardım - Level Menü", client.user.avatarURL())
                  .setDescription(`
            **●▬▬▬▬▬▬▬▬【 Level Komutları [3] 】▬▬▬▬▬▬▬▬▬●**
            
      • ${acik} | [${prefix}seviye](${client.ayarlar.destek}) - **Seviyenizi gösterir.**
      • ${acik} | [${prefix}seviyelog](${client.ayarlar.destek}) - **Seviye logu ayarlarsınız.**
      • ${acik} | [${prefix}seviye-ayarla](${client.ayarlar.destek}) - **Seviye sistemini açar kapatır.**
            `);
                msg.edit(seviye);

                break;*/

              case "🎯":
                reaction.users.remove(user).catch(console.error);
                let genel = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Yardım - Genel Menü", client.user.avatarURL())
                  .setDescription(`
                  **●▬▬▬▬▬▬▬▬【 Genel Komutları [3] 】▬▬▬▬▬▬▬▬▬●**
                  
      > ・${acik} | [${p}yazdır](${server}) - **Bot Kanala Yazıyor Gözükür.**
      > ・${acik} | [${p}yazdır kapat](${server}) - **Bot'un Kanala Yazıyor Gözümesi Kapatılır.**
      > ・${acik} | [${p}çekiliş](${server}) - **Çekiliş başlatır/yeniden çeker/bitirirsiniz.**
            `);
                msg.edit(genel);
                          await msg.react("⬅️");
                break;
              /*   case "🤖":
                reaction.users.remove(user).catch(console.error);
                const bot = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Yardım - Bot Menüsü", client.user.avatarURL()).setDescription(`
                  **●▬▬▬▬▬▬▬▬【 Bot Komutları [4] 】▬▬▬▬▬▬▬▬▬●**
                  
      > ・${acik} | [${p}ping](${server}) - **Botun Pingine Bakarsınız.**
      > ・${acik} | [${p}istatistik](${server}) - **Botun İstatistiğine Bakarsınız.**
      > ・${acik} | [${p}uptime](${server}) - **Botun Aktifliğine Bakarsınız.**
      > ・${kapali} | [${p}shard](${server}) - **Botun Shard'ına Bakarsınız.**
      `);

                msg.edit(bot);

                break;*/
              case "🎳":
                reaction.users.remove(user).catch(console.error);
                const eglence = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Yardım - Eğlence Menü", client.user.avatarURL())
                  .setDescription(`
                  **●▬▬▬▬▬▬▬▬【 Eğlence Komutları [4] 】▬▬▬▬▬▬▬▬▬●**

                  > ・${acik} | [${p}ascii](${server}) -** Ascii Şekilde Yazı Yazarsınız.**
                  > ・${acik} | [${p}atatürk](${server}) -** Mustafa Kemal ATATÜRK Sözü ve Fotoğrafı Gösterir.**
                  > ・${acik} | [${p}aykutelmas](${server}) -** Aykut Elmas Sözü ve Fotoğrafı Gösterir.**
                  > ・${acik} | [${p}balıktut](${server}) -** Balık Tutarsınız.**
                  > ・${acik} | [${p}trump](${server}) -** Trump'a Tweet Attırırsınız.**
                  > ・${acik} | [${p}sarıl](${server}) -** Arkadaşınıza Sarılırsınız.**
                  > ・${acik} | [${p}harry](${server}) -** Harry Potter Temalı Logo Yapar.**
                  > ・${acik} | [${p}nah-çek](${server}) -** Arkadaşınıza Nah Çekersiniz.**
                  > ・${acik} | [${p}sahte-mesaj](${server}) - **Etiketlediğin kişinin sahte mesajını oluşturursun.**
                  > ・${acik} | [${p}kaçcm](${server}) -** Kaç CM Olduğuna Bakarsınız.**
                  > ・${acik} | [${p}token](${server}) -** Botun Tokenini Gösterir.**
      `);
                msg.edit(eglence);
                          await msg.react("⬅️");
                break;
              case "🏗️":
                reaction.users.remove(user).catch(console.error);
                const sunucu = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Yardım - Sunucu Menüsü", client.user.avatarURL())
                  .setDescription(`
                  **●▬▬▬▬▬▬▬▬【 Sunucu Komutları [6] 】▬▬▬▬▬▬▬▬▬●**
                  

      > ・${acik} | [${p}modlog](${server}) - **Modlog'u Ayarlarsınız.**
      > ・${acik} | [${p}otorol](${server}) - **Otorol sistemini ayarlarsınız.**
      > ・${acik} | [${p}sayaç](${server}) - **Sayaç sistemini ayarlarsınız.**
      > ・${acik} | [${p}sunucu-kur](${server}) - **Sunucu kurarsınız.**
      > ・${acik} | [${p}şablon-sunucu-kur](${server}) - **Şablon Sunucu kurarsınız.**
      > ・${acik} | [${p}sunucu-ayar-sıfırla](${server}) - **Sunucunuzdaki tüm ayarları, botu sunucudan atmadan silersiniz.**
      `);
                msg.edit(sunucu);
                          await msg.react("⬅️");
                break;

              case "⬅️":
                reaction.users.remove(user).catch(console.error);

                msg.edit(onayembed);
                await reaction.remove();
                /*
                          let geriFilter = (reaction, user) => reaction.emoji.name === "⬅️" && user.id === message.author.id;
                          let geri = msg.createReactionCollector(geriFilter, { time: 30000 });
                          geri.on("collect", nbr => {
                          nbr.remove()
                          msg.edit(onayembed);
                          msg.remove()
                          })*/
                break;
              case "🔧":
                reaction.users.remove(user).catch(console.error);
                const yetkili = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setAuthor("Yardım - Yetkili Menü", client.user.avatarURL())
                  .setDescription(
                    `**●▬▬▬▬▬▬▬▬【 Yetkili Komutları [34] 】▬▬▬▬▬▬▬▬▬●**  
                    
                       > ・${acik} | [${p}ban](${server}) - **Belirtilen Kullanıcıyı Sunucudan Banlarsınız.**
                       > ・${acik} | [${p}bansay](${server}) - **Sunucuda Banlanan Kişi Sayısına Bakarsınız.**
                       > ・${acik} | [${p}prefix](${server}) - **Prefix'i Ayarlayıp Sıfırlarsınız.**
                       > ・${acik} | [${p}dil](${server}) - **Dil'i Ayarlarsınız.**
                       > ・${acik} | [${prefix}uyarı](${client.ayarlar.destek}) - **Belirtilen Kişiye Uyarı Verirsiniz.**
                       > ・${acik} | [${prefix}uyarısil](${client.ayarlar.destek}) - **Belirtilen Kişinin Belirtilen Uyarısını Silersiniz.**
                       > ・${acik} | [${prefix}uyarıtemizle](${client.ayarlar.destek}) - **Belirtilen Kişinin Uyarılarını Temizlersiniz.**
                       > ・${acik} | [${prefix}uyarıliste](${client.ayarlar.destek}) - **Belirtilen Kişinin Uyarılarına Bakarsınız.**
                       > ・${acik} | [${prefix}capslock](${client.ayarlar.destek}) - **Capslock sistemini açar kapatır.**
                       > ・${acik} | [${prefix}rank](${client.ayarlar.destek}) - **Level rankınıza bakarsınız.**
                       > ・${acik} | [${prefix}top](${client.ayarlar.destek}) - **Top levele bakarsınız.**
                       > ・${acik} | [${prefix}levelsistemi](${client.ayarlar.destek}) - **Level sistemi açarsınız.**
                       > ・${acik} | [${prefix}level-rol-ayarla](${client.ayarlar.destek}) - **Level sistemi için rol ayarlarsınız.**
                       > ・${acik} | [${prefix}level-rol-sıfırla](${client.ayarlar.destek}) - **Level sistemi için rol sıfırlarsınız.**
                       > ・${acik} | [${prefix}level-rol-liste](${client.ayarlar.destek}) - **Level sistemi için rol listesine bakarsınız.**
                       > ・${acik} | [${prefix}level-kanal-ayarla](${client.ayarlar.destek}) - **Level sistemi için level log ayarlarsınız.**
                       > ・${acik} | [${prefix}level-mesaj-ayarla](${client.ayarlar.destek}) - **Level sistemi için level log mesajı ayarlarsınız.**
                       `
                  ) .addField(
                    `> 2. Yetkili Bölümü;`,`
                    > ・${acik} | [${prefix}massbanm](${client.ayarlar.destek}) - **Massban atarsanız çoklu ban.**
                    > ・${acik} | [${prefix}emojiindir](${client.ayarlar.destek}) - **Sunucudaki emojileri zip olarak indirip Dmden bot size atar.**
                    > ・${acik} | [${prefix}emojiekle](${server}) - **Sunucunuza emoji eklersiniz.**
                    > ・${acik} | [${prefix}nuke](${server}) - **Mesajı kullandığınız kanal silinip tekrar aynı isimde aynı izinlerde açılır.**
                    > ・${acik} | [${prefix}slowmode](${server}) - **Kanala yavaş mod eklersiniz.**
                    > ・${acik} | [${prefix}reklam-engel](${server}) - **Reklam engeli ayarlarsınız.**
                    > ・${acik} | [${prefix}link-engel](${server}) - **Link engeli ayarlarsınız.**
                    > ・${acik} | [${prefix}küfür-engel](${server}) - **Küfür engeli ayarlarsınız.**
                    > ・${acik} | [${prefix}etiket-engel](${server}) - **Etiket engeli ayarlarsınız.**
                    `)
                    .addField(
                      `> 3. Yetkili Bölümü;`,`
                      > ・${acik} | [${prefix}sil](${server}) - **İstediğiniz Kadar Mesaj Silersiniz.**
                      > ・${acik} | [${prefix}mute](${server}) - **Mute sistemini ayarlar mute atarsınız.**
                      > ・${acik} | [${prefix}muterol](${server}) - **Mute rolü ayarlarsınız.**
                      > ・${acik} | [${prefix}unmute](${server}) - **Mutelenen kullanıcının mutesini açarsınız.**
                      > ・${acik} | [${prefix}etiket-sistemi](${server}) - **Etiket sistemini ayarlarsınız.**
                      > ・${acik} | [${prefix}komut-aç](${server}) - **İstediğiniz Komutu Sunucunuzda Devre Dışı Bırakırsınız.**
                      > ・${acik} | [${prefix}komut-kapat](${server}) - **Yasakladığınız Komutu Aktifleştirirsiniz.**
                      > ・${acik} | [${prefix}kilit](${server}) - **Kanal Kilit Sistemine Bakarsınız.**
                      > ・${acik} | [${prefix}yasaklı-kelime](${server}) - **Yasaklı kelime sistemine bakarsınız.**
                      `)
                .addField('> 4. Yetkili Bölümü:', `
                      > ・${acik} | [${prefix}üye-sil](${server}) - **Üyenin mesajlarını silersiniz.**              
`)
                  .setTimestamp();
                msg.edit(yetkili);
                          await msg.react("⬅️");
                break;
              case "🆕":
                reaction.users.remove(user).catch(console.error);
                let yenilikler = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Yenilikler!").setDescription(`**🆕 Yenilikler!
${yakinda} Prefix sistemi eklendi!
 **

            `);
                msg.edit(yenilikler);
                          await msg.react("⬅️");
                break;

                case "🎵":
                  reaction.users.remove(user).catch(console.error);
                  const müzik = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setAuthor("Yardım - Müzik Menü", client.user.avatarURL()) //bura kaldı
                  .setDescription(
                  `
                  **●▬▬▬▬▬▬▬▬【 Müzik Komutları [10] 】▬▬▬▬▬▬▬▬▬●**
                  
                  > ・${acik} | [${p}clear-queue](${server}) - **Çalma listesini temizler.**
                  > ・${acik} | [${p}loop](${server}) - **Loopu açar / kapatırsınız.**
                  > ・${acik} | [${p}np](${server}) - **Şu anda çalan şarkıyı gösterir.**
                  > ・${acik} | [${p}pause](${server}) - **Çalma listesini gösterir.**
                  > ・${acik} | [${p}play](${server}) - **Müzik çalar.**
                  > ・${acik} | [${p}repeat](${server}) - **Çalan şarkıyı tekrarlar.**
                  > ・${acik} | [${p}resume](${server}) - **Duraklatılmış şarkıyı devam ettirir.**
                  > ・${acik} | [${p}ses](${server}) - **Ses seviyesini ayarlarsınız.**
                  > ・${acik} | [${p}skip](${server}) - **Müziği atlar.**
                  > ・${acik} | [${p}stop](${server}) - **Müziği durdurur.  **
                  > ・${acik} | [${p}bass](${server}) - **Bass açarsınız.  **
                  `)
                  .setTimestamp();
                  msg.edit(müzik);
                  await msg.react("⬅️");
                  break;

              case "🛡️":
                reaction.users.remove(user).catch(console.error);
                const koruma = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setAuthor("Yardım - Koruma Menü", client.user.avatarURL())
                  .setDescription(
                    `  **●▬▬▬▬▬▬▬▬【 Koruma Komutları [18] 】▬▬▬▬▬▬▬▬▬●**
                    
                       > ・${acik} | [${p}koruma log #kanal](${server}) - **Log Ayarlarsınız.**
                       > ・${acik} | [${p}koruma log sıfırla](${server}) - **Log Sıfırlarsınız.**
                       > ・${acik} | [${p}koruma banlimit <sayı>](${server}) - **Ban Limiti Ayarlarsınız.**
                       > ・${acik} | [${p}koruma banlimit sıfırla](${server}) - **Ban Limiti Sıfırlarsınız.**
                       > ・${acik} | [${p}koruma kicklimit <sayı>](${server}) - **Kick Limiti Ayarlarsınız.**
                       > ・${acik} | [${p}koruma kicklimit sıfırla](${server}) - **Kick Limiti Sıfırlarsınız.**
                       > ・${acik} | [${p}koruma rollimit <sayı>](${server}) - **Rol Limiti Ayarlarsınız.**
                       > ・${acik} | [${p}koruma rollimit sıfırla](${server}) - **Rol Limiti Sıfırlarsınız.**
                       > ・${acik} | [${p}koruma kanallimit <sayı>](${server}) - **Kanal Limiti Ayarlarsınız.**
                       > ・${acik} | [${p}koruma kanallimit sıfırla](${server}) - **Kanal Limiti Sıfırlarsınız.**                    
                       > ・${acik} | [${p}yenihesapengel aç](${server}) - **Yeni Hesap Engeli Açarsınız.**
                       > ・${acik} | [${p}yenihesapengel kapat](${server}) - **Yeni Hesap Engeli Açarsınız.**
                       > ・${acik} | [${p}rolyvk aç](${server}) - **Rol Yönetici Korumayı Açarsınız.**
                       > ・${acik} | [${p}rolyvk kapat](${server}) - **Rol Yönetici Korumayı Kapatırsınız.**`)
                       .addField(`> 2. Koruma Bölümü`,`
                       > ・${acik} | [${p}antiinvite aç](${server}) - **Davet Açma Engeli Açarsınız.**
                       > ・${acik} | [${p}antiinvite kapat](${server}) - **Davet Açma Engeli Kapatırsınız.**
                       > ・${acik} | [${p}reklamkick aç](${server}) - **Reklamkick Engeli Açarsınız.**
                       > ・${acik} | [${p}reklamkick kapat](${server}) - **Reklamkick Engeli Kapatırsınız.**
                  `)
                  .setTimestamp();
                msg.edit(koruma);
                          await msg.react("⬅️");
                break;
                              case "❌":
                await reaction.users.remove(user).catch(console.error);
                await reaction.users.remove(client.user.id).catch(console.error);
                setTimeout(async function(){
                await msg.reactions.removeAll()
                }, 1000)
                setTimeout(async function () { 
                await msg.delete() 
                }, 3150) 
                break;
            }
            switch (reaction.emoji.name) {
              case "🔞":
                reaction.users.remove(user).catch(console.error);
                if (!message.channel.nsfw) return;
                let nsfw = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Yardım - Nsfw Menü").setDescription(`
                  **●▬▬▬▬▬▬▬▬【 NSFW Komutları [8] 】▬▬▬▬▬▬▬▬▬●**

       > ・${acik} | [${p}4k](${client.ayarlar.destek}) - **4K Gif Atar.**
       > ・${acik} | [${p}anal](${client.ayarlar.destek}) - **Anal Gif Atar.**
       > ・${acik} | [${p}ass](${client.ayarlar.destek}) - **Ass Gif Atar.**
       > ・${acik} | [${p}pgif](${client.ayarlar.destek}) - **PGif Atar.**
       > ・${acik} | [${p}hentai](${client.ayarlar.destek}) - **Hentai Gif Atar.**
       > ・${acik} | [${p}holo](${client.ayarlar.destek}) - **Holo Gif Atar.**
       > ・${acik} | [${p}pussy](${client.ayarlar.destek}) - **Pussy Gif Atar.**
       > ・${acik} | [${p}thigh](${client.ayarlar.destek}) - **Thigh Gif Atar.**
            `);
                msg.edit(nsfw);
          await msg.react("⬅️");
                break;

            }
          });

          /*  .catch(err => {  
            return;
          });*/
        });
    } else {
      const onayembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`©️ Package ${ayarlar.yıl}`)
        .setAuthor("Package Help Menu")
        //.setImage(
        //  "https://media.discordapp.net/attachments/813333808660742196/824194882926805042/fireofeternitylarge.png?width=761&height=45"
        //)
        .setDescription(
          `> Hey! ${message.author}, *Package** Welcome to the Help Menu!\n
> ・| For **User** Commands: :eyes: 
> ・| For **General** Commands: :dart: 
> ・| For **Entertainment** Commands: :bowling: 
> ・| For **Bot** Commands: :robot: 
> ・| For **Authorized** Commands: :wrench: 
> ・| For **Guard** Commands: :shield: 
> ・| For **Economiy** Commands: 💰 
> ・| For **Server** Commands: 🏗️ ️ just press the ** emoji **!`
        ) //ingilizce hocamı skm
        .addField(
          "> 🆕 | What's new!",
          `**🆕 You can see what's new about the bot by pressing its emoji!*`
        )
        .addField(
          "> 📣 | Announcements!",
          `Here **bot related** announcements will be listed.`
        )
        .addField(
          "> 🔗 | Links;",
          ` [Add Me!](https://bit.ly/packagebot) | [Support Server](https://discord.gg/wGEGQxpVQN)`
        );
      message.channel.send(onayembed).then(msg => {
        msg
          .react("👀")
          .then(() => msg.react("🎯"))
          .then(() => msg.react("🎳"))
          .then(() => msg.react("🔧"))
          .then(() => msg.react("🛡️"))
          .then(() => msg.react("🏗️"))
          .then(() => msg.react("🆕"))
          .then(() => msg.react("⬅️"));

        let filter = (reaction, user) =>
          user.id !== message.client.user.id && user.id === message.author.id;

        var collector = msg.createReactionCollector(filter, {
          time: 120000
        });

        msg;
        collector
          .on("collect", async (reaction, user) => {
            switch (reaction.emoji.name) {
              case "👀":
                reaction.users.remove(user).catch(console.error);
                let kayıt = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Help - User Menu")
                  .setDescription(`> ・| [${p}serverinfo](${server}) - **You Look at the Server's Information.**
                             > ・| [${p}userinfo](${server}) - **You Look at User's Information.**
                             > ・| [${p}roleinfo](${server}) - **You Look at the Role's Information.**
                             > ・| [${p}avatar](${server}) - **You Look At Your Avatar.**

            `);
                msg.edit(kayıt);

                break;
              case "🎯":
                reaction.users.remove(user).catch(console.error);
                let genel = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Help - General Menu").setDescription(`
      > ・| [${p}typing](${server}) - **Bot is Typing on the Channel Appears.**
      > ・| [${p}typing off](${server}) - ***Bot isn't Typing on the Channel Appears.*
            `);
                msg.edit(genel);
                break;
              case "🤖":
                reaction.users.remove(user).catch(console.error);
                const bot = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Help - Bot Menu").setDescription(`
      > ・| [${p}ping](${server}) - **You Look At The Bot's Ping.**
      > ・| [${p}statistic](${server}) - **You Look At The Bot Statistics.**
      > ・| [${p}uptime](${server}) - **You Look At The Activity Of The Bot.**
      > ・| [${p}shard](${server}) - **You Look At The Bot's Shard.**
      `);

                msg.edit(bot);

                break;
              case "🎳":
                reaction.users.remove(user).catch(console.error);
                const eglence = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Help - Entertainment Menu").setDescription(`
**eğlence menüden slm*
      `);
                msg.edit(eglence);
                break;
              case "🏗️":
                reaction.users.remove(user).catch(console.error);
                const sunucu = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("Help - Server Menu").setDescription(`
      > ・| [${p}roleeveryone](${server}) - **You Give Role to Everyone.**
      > ・| [${p}takeroleeveryone](${server}) - **You Get Role From Everyone.**
      `);
                msg.edit(sunucu);
                break;

              case "⬅️":
                reaction.users.remove(user).catch(console.error);
                const home = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setFooter(`©️ Package ${ayarlar.yıl}`)
                  .setAuthor("Package Help Menu")
                  //.setImage(
                  //  "https://media.discordapp.net/attachments/813333808660742196/824194882926805042/fireofeternitylarge.png?width=761&height=45"
                  //)
                  .setDescription(
                    `> Hey! ${message.author}, **Package** Welcome to the Help Menu!\n
> ・| For **User** Commands: :eyes: 
> ・| For **General** Commands: :dart: 
> ・| For **Entertainment** Commands: :bowling: 
> ・| For **Bot** Commands: :robot: 
> ・| For **Level** Commands: 🆙 
> ・| For **Authorized** Commands: :wrench: 
> ・| For **Guard** Commands: :shield: 
> ・| For **Economiy** Commands: 💰 
> ・| For **Server** Commands: 🏗️ ️ just press the ** emoji **!`
                  ) //ingilizce hocamı skm
                  .addField(
                    "> 🆕 | What's new!",
                    `**🆕 You can see what's new about the bot by pressing its emoji!*`
                  )
                  .addField(
                    "> 📣 | Announcements!",
                    `Here **bot related** announcements will be listed.`
                  )
                  .addField(
                    "> 🔗 | Links;",
                    ` [Add Me!](https://bit.ly/packagebot) | [Support Server](https://discord.gg/wGEGQxpVQN)`
                  );
                msg.edit(home);
                break;
              case "🔧":
                reaction.users.remove(user).catch(console.error);
                const yetkili = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setAuthor("Yardım - Yetkili Menü")
                  .setDescription(
                    `> ・| [${p}ban](${server}) - **You Ban the Specified User from the Server.**
                       > ・| [${p}prefix](${server}) - **You Set Prefix and Reset.**
                       > ・| [${p}language](${server}) - **You set the Language.**
                       `
                  )
                  .setTimestamp();
                msg.edit(yetkili);
                break;
              case "🆕":
                reaction.users.remove(user).catch(console.error);
                let yenilikler = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setAuthor("What's new!").setDescription(`**🆕 What's new!
Prefix system added!
 **

            `);
                msg.edit(yenilikler);
                break;
              case "🛡️":
                reaction.users.remove(user).catch(console.error);
                const koruma = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setAuthor("Help - Guard Menu") //bura kaldı
                  .setDescription(
                    `> ・| [${p}koruma log #kanal](${server}) - **Log'u Ayarlarsınız.**
                       > ・| [${p}koruma log sıfırla](${server}) - **Log'u Sıfırlarsınız.**
                       > ・| [${p}koruma banlimit <sayı>](${server}) - **Ban Limiti Ayarlarsınız.**
                       > ・| [${p}koruma banlimit sıfırla](${server}) - **Ban Limiti Sıfırlarsınız.**
                       > ・| [${p}koruma kicklimit <sayı>](${server}) - **Kick Limiti Ayarlarsınız.**
                       > ・| [${p}koruma kicklimit sıfırla](${server}) - **Kick Limiti Sıfırlarsınız.**
                       > ・| [${p}koruma rollimit <sayı>](${server}) - **Rol Limiti Ayarlarsınız.**
                       > ・| [${p}koruma rollimit sıfırla](${server}) - **Rol Limiti Sıfırlarsınız.**
                       > ・| [${p}koruma kanallimit <sayı>](${server}) - **Kanal Limiti Ayarlarsınız.**
                       > ・| [${p}koruma kanallimit sıfırla](${server}) - **Kanal Limiti Sıfırlarsınız.**
                       > ・| [${p}yenihesapengel aç](${server}) - **Yeni Hesap Engeli Açarsınız.**
                       > ・| [${p}yenihesapengel kapat](${server}) - **Yeni Hesap Engeli Açarsınız.**
                       > ・| [${p}rolyvk aç](${server}) - **Rol Yönetici Korumayı Açarsınız.**
                       > ・| [${p}rolyvk kapat](${server}) - **Rol Yönetici Korumayı Kapatırsınız.**
                       > ・| [${p}antiinvite aç](${server}) - **Davet Açma Engeli Açarsınız.**
                       > ・| [${p}antiinvite kapat](${server}) - **Davet Açma Engeli Kapatırsınız.**
                       > ・| [${p}reklamkick aç](${server}) - **Reklamkick Engeli Açarsınız.**
                       > ・| [${p}reklamkick kapat](${server}) - **Reklamkick Engeli Kapatırsınız.**
      
      `
                  )
                  .setTimestamp();
                msg.edit(koruma);
break;
case "🎵":
reaction.users.remove(user).catch(console.error);
const müzik = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Help - Music Menu") //bura kaldı
.setDescription(
`
**●▬▬▬▬▬▬▬▬【 Koruma Komutları [10] 】▬▬▬▬▬▬▬▬▬●**
> ・| [${p}clear-queue](${server}) Çalma listesini temizler.
> ・| [${p}loop Loopu açar / kapatırsınız.
> ・| [${p}np Şu anda çalan şarkıyı gösterir.
> ・| [${p}pause Çalma listesini gösterir.
> ・| [${p}play Müzik çalar.
> ・| [${p}repeat Çalan şarkıyı tekrarlar.
> ・| [${p}resume Duraklatılmış şarkıyı devam ettirir.
> ・| [${p}ses Ses seviyesini ayarlarsınız.
> ・| [${p}skip Müziği atlar.
> ・| [${p}stop Müziği durdurur.  
      `
                  )
                  .setTimestamp();
                msg.edit(müzik);
                break;
           /*   case "❌":
                reaction.users.remove(user).catch(console.error);
            msg.then(a=>a.delete({timout: 3000})).catch(console.error)
                break;
             */   
            }
          })
        
          .catch(err => {
            return;
          });
      });
    }
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım", "help"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
