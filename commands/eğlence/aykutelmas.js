const Discord = require("discord.js");

exports.run = async (client, message, args) => {
///////////////////////////
  var sözler = [
   "Nasipte varsa..",
   "Hocam Aykut uç yiyoo",
   "Yavaş la gaç tane alıyon!",
   "Oosman Gültekin sen misin?",
   "Ay have gat e van pensıl",
   "Kudurdum.com bu kadar?",
   "Ayağına nazar değmesin",
   "Çocuklar piknik için neler getirdiniz?",
   "Yirmi beş mi oldun öp bakem elimi",
   "Herkesin ayfonu bi benim yok!",
   "ŞİRİN BABAYI SİLK!",
    "Yes ay dozont..",
    "Bamya yaptım oğlum.",
    "Osman seni çizdim he.",
    "Banağ para ver, banağ paraa veeerğ",
    "Ne demek kızın yaşı anneden büyük olamaz, bizim zamanımızda oluyordu!?",
    "Pisuvara kim sıçtı?",
    "Sen yanlış yapmadın soru yanlışmış yeaww haha",
    "Yav oyun gitti niye çekiyon fişi!",
    "Yalnız çıkışta görüşürüz hocam hani böyle sınıf ortamında..",
    "Kapıcı Veysel dedi Veysel!"
     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]

     var resim = [
      "https://cdn.discordapp.com/attachments/688437011522388046/833621600896155648/hocamaykutucyiyo.gif",
      "https://cdn.discordapp.com/attachments/688437011522388046/833621388896108574/kapcveyseldediveysel.jpg",
      "https://cdn.discordapp.com/attachments/688437011522388046/833621515278876672/nasiptevarsa.gif",
      "https://cdn.discordapp.com/attachments/688437011522388046/833621793574223912/yavaslagactanealion.png",
      "https://cdn.discordapp.com/attachments/688437011522388046/833622020780589107/osmangultekinsenmisin.jpg",
      "https://cdn.discordapp.com/attachments/688437011522388046/833622185867739176/ihevgatevanpensl.jpg",
      "https://cdn.discordapp.com/attachments/688437011522388046/833622698990895114/kudurdumnoktakom.jpg",
      "https://cdn.discordapp.com/attachments/688437011522388046/833622827264770088/ayagnanazardegmesin.jpg",
      "https://cdn.discordapp.com/attachments/688437011522388046/833623025714069554/piknikicinnegetirdiniz.jpg",
      "https://cdn.discordapp.com/attachments/688437011522388046/833623453373825044/25mioldun.gif",
      "https://cdn.discordapp.com/attachments/688437011522388046/833623582189551627/osmansenicizdimhe.jpg",
      "https://cdn.discordapp.com/attachments/688437011522388046/833623742001315870/banaparaver.gif",
      "https://cdn.discordapp.com/attachments/688437011522388046/833623892941209630/pisuvarakimsiti.jpg",
      "https://cdn.discordapp.com/attachments/688437011522388046/833624068325507072/aykutelmas1.jpg",
      "https://cdn.discordapp.com/attachments/688437011522388046/833624167034781706/aykutelmas2.jpg",
      "https://cdn.discordapp.com/attachments/688437011522388046/833624261948080128/aykutabla.jpg"
        ] 
        var görsel = resim[Math.floor(Math.random() * (resim.length))]  
///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("dbdbdb")
.setImage(`${görsel}`)
.setAuthor("Aykut Elmas Once Said")
.setDescription(`${veritabanı}`)
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp()
message.channel.send(vrs);
///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["aykutelmas"],
  permLevel: 0
};

exports.help = {
  name: "aykutelmas"
};