const ms = require('ms');
const Discord = require("discord.js")
exports.run = async (client, message, args, db, ayarlar,prefix) => {
let p = prefix;
const seç = args[0]
if(!seç) return global.hata(message, `${global.deniedozel} **Lütfen bir Argüman Belirt!** Argümanlar \n${p}çekiliş başlat #kanal süre kişisayı ödül\n${p}çekiliş reroll mesajid\n${p}çekiliş bitir mesajid`)
if(seç == 'başlat'){
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send('<a:hayirrr:763856291902652486> Çekiliş başlatman için yeterli yetkin yok! gereken yetki; `Mesajları Yönet` ve ya "Giveaways" adlı rol.');
    }
    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send('<a:hayirrr:763856291902652486> Kanal seç!');
    }
    let giveawayDuration = args[2];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send('<a:hayirrr:763856291902652486> Süre belirt!');
    }
    let giveawayNumberWinners = args[3];
    if(isNaN(giveawayNumberWinners)){
        return message.channel.send('<a:hayirrr:763856291902652486> Kaç kişi kazanıcak?');
    }
  if(giveawayNumberWinners > 200){
    return message.channel.send("<a:hayirrr:763856291902652486> Çekiliş kazanan sayısı 200'den üstün olamaz!")
  }
    let giveaway =
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[5]);  
    let giveawayPrize = args.slice(4).join(' '); 
    if(!giveawayPrize){
        return message.channel.send('<a:hayirrr:763856291902652486> Ödülü ne olucak?');
    }
 client.giveawaysManager.start(giveawayChannel, {
      time: ms(giveawayDuration),
			prize: giveawayPrize,
			winnerCount: giveawayNumberWinners,
			hostedBy: message.author,
			messages: {
				giveaway:"🎉🎉 **Çekiliş başladı.** 🎉🎉",
				giveawayEnded: "🎉🎉 **Çekiliş bitti.** 🎉🎉",
				timeRemaining: "Kalan süre: **{duration}**!",
				inviteToParticipate: "Çekilişe katılmak için 🎉 emojisine tıklayın!",
                noWinner: "<a:hayirrr:763856291902652486> Sistemler Ters Gitti Ve Çekiliş İptal Edildi.",
				winMessage: `<a:fireofeternitybayrakxd:772517496455823382> Tebrikler {winners}!, **{prize}** adlı çekilişi kazandın!`,
				embedFooter: "Çekiliş",
				hostedBy: "{user} tarafından",
				winners: "kazanan",
				endedAt: "Bittiği zaman",
				units: {
					seconds: "saniye",
					minutes: "dakika",
					hours: "saat",
					days: "gün",
					pluralS: false
				}//				noWinner: "<a:hayirrr:763856291902652486> Çekiliş iptal edildi. Yeterli katılım yok.",
			}
		});
    message.channel.send(new Discord.MessageEmbed().addField("Başarılı", `<:tik:768471220713947136> Çekiliş ${giveawayChannel} adlı kanalda başlatıldı!`).setColor("RANDOM"));
} if(seç == 'reroll') {
    let messageID = args[1];
    if(!messageID){
        return message.channel.send('<a:hayirrr:763856291902652486> Bir mesaj IDsi belirtmelisin!');
    }
    try {   
        client.giveawaysManager.reroll(messageID);
        message.channel.send('<:tik:768471220713947136> Çekiliş yeniden çekildi!');
    } catch (error) {
        if(error.startsWith(`<a:hayirrr:763856291902652486> ${messageID} IDsi ile başlayan bir çekiliş bulunamadı!.`)){
            message.channel.send("<a:hayirrr:763856291902652486> "+messageID + " IDsi ile başlayan bir çekiliş bulunamadı!");
        }
        if(error.startsWith(`<a:hayirrr:763856291902652486> ${messageID} IDsi ile başlayan çekiliş bitmemiş!.`)){
            message.channel.send('<a:hayirrr:763856291902652486> Bu çekiliş bitmemiş!');
        }
    }
} if(seç === 'bitir') {
    if(!args[1]){
        return message.channel.send('<a:hayirrr:763856291902652486> Bir mesaj IDsi belirtmelisin!');
    }
    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[5]);
    if(!giveaway){
        return message.channel.send('<a:hayirrr:763856291902652486> `'+ args.slice(1).join(' ') + '` adında bir çekiliş bulunamadı.');
    }
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    .then(() => {  
        message.channel.send('<:tik:768471220713947136> Çekiliş '+(client.giveawaysManager.options.updateCountdownEvery/5000)+' saniye sonra bitecek...');
    })
    .catch((e) => {
        if(e.startsWith(`<a:hayirrr:763856291902652486> ${giveaway.messageID} IDsi ile başlayan çekiliş zaten bitmiş!.`)){
            message.channel.send('<a:hayirrr:763856291902652486> Bu çekiliş zaten bitmiş!');
        } else {
            console.error(e);
            message.channel.send('<a:hayirrr:763856291902652486> Hata...');
        }
    });
}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
}

exports.help = {
	name: 'çekiliş',
	description: 'Bota istediğiniz bir şeyi yazdırırsınız.',
	usage: 'çekiliş'
}