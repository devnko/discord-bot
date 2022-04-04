const Discord = require("discord.js");

exports.run = async (client, message, args) => {
///////////////////////////
  var sözler = [
   "Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır.",
   "Beni görmek demek mutlaka yüzümü görmek demek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu yeterlidir.",
   "Eğer bir gün benim sözlerim bilimle ters düşerse bilimi seçin.",
   "Hürriyet olmayan bir memlekette ölüm ve çöküş vardır. Her ilerleyişin ve kurtuluşun anası hürriyettir.",
   "Yurtta sulh, cihanda sulh.",
   "Hayatta en hakiki mürşit ilimdir.",
   "Egemenlik kayıtsız şartsız milletindir.",
   "Bütün ümidim gençliktedir.",
   "Ey Türk Gençliği! Birinci vazifen, Türk istiklâlini, Türk Cumhuriyetini, ilelebet, muhafaza ve müdafaa etmektir.",
   "Ne mutlu Türküm diyene!",
   "Söz konusu olan vatansa, gerisi teferruattır.",
   "Yurtta sulh, cihanda sulh.",
   "Millete efendilik yoktur. Hizmet vardır. Bu millete hizmet eden onun efendisi olur.",
   "Egemenlik verilmez, alınır.",
   "Ey yükselen yeni nesil, istikbal sizindir. Cumhuriyet'i biz kurduk, O'nu yükseltecek ve sürdürecek sizlersiniz.",
   "Ey kahraman Türk kadını, sen yerde sürünmeye değil, omuzlar üzerinde göklere yükselmeye layıksın.",
   "Büyük şeyleri büyük milletler yapar.",
   "Savaş zaruri ve hayati olmalıdır. Milletin hayatı tehlikeye maruz kalmadıkça savaş bir cinayettir.",
   "Şuna inanmak gerekir ki, dünya yüzünde gördüğümüz her şey kadının eseridir.",
   "Hayatı ve özgürlüğü için ölümü göze alan bir millet asla yenilmez.",
   "Bir ulus sanattan ve sanatçıdan yoksunsa, tam bir hayata sahip olamaz.",
   "En büyük savaş, cahilliğe karşı yapılan savaştır.",
   "Türkiye Cumhuriyeti mesut, muvaffak ve muzaffer olacaktır.",
   "Türk milletinin karakteri yüksektir; Türk milleti çalışkandır; Türk milleti zekidir."
     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]

     var resim = [
      "https://cdn.discordapp.com/attachments/489386777711214595/856523687251542046/oOZMLxuK-EKTlQiqCO6aUg.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856523703742365716/ffY9kM3BQ02N15yey7fl7w.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856523737380552734/dsx16FSdx0aU2hjFXXo0xw.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856523744544686130/IzBfWBmFdECeatnSQkZIvw.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856527211914199060/Dl1DfBmXgAAm3WR.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856527082984308766/camsun-ata_16_9_1589873963.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856526423817060382/az-bilinen-ataturk-fotograflari-5.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856526182584418366/ataturk-tum-yurtta-aniliyor-647678-5.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856526564569120788/AtaturkSalincakta.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856523788493258772/iRbJ4szuzk2mTboC8wjhyA.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856523802821132338/AybKl1YwWUGBCP8sgEkG-Q.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856523818951376906/zqVTukYNTUO1AhIFm8o9og.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856523843722805289/Icg1knC-pEaG2UcIMLY-8g.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856523872438321192/hsA0Co3gBUCtEPlQkbdUCw.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856523946157015070/ataturk-gorselleri2020.png",
      "https://cdn.discordapp.com/attachments/489386777711214595/856524012041928704/kapak_212143.png"
        ] 
        var görsel = resim[Math.floor(Math.random() * (resim.length))]  
///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("dbdbdb")
.setImage(`${görsel}`)
.setAuthor("Gazi Mustafa Kemal ATATÜRK")
.setDescription(`${veritabanı}`)
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp()
message.channel.send(vrs);
///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["atatürk"],
  permLevel: 0
};

exports.help = {
  name: "atatürk"
};