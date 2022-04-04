const Discord = require("discord.js");

exports.run = async (client, message, args, db, ayarlar) => {
  try {
    let açık = await db.fetch("bakim");
    let sebepbakım = await db.fetch("sebep");
    let ok = args[0];
    const dur = new Discord.MessageEmbed()
      .setDescription(`**Şu anki bakım durumu**: ${açık || "kapalı"}`)
      if(açık) dur.addField("Bakım Sebebi", sebepbakım)
    if (ok !== "aç" && ok !== "kapat" && !ok) return message.channel.send(dur);
    let sebep = args.slice(1).join(" ");
    if (!sebep) sebep = "sizlere daha iyi hizmet verebilmek için";
    if (ok == "kapat") {

      if (!açık) return global.hata(message, "Bot şu anda zaten bakımda değil.");
 
        global.oky(message, "Bakım modunu kapattım.");
      await db.delete("bakim");
      await db.delete("sebep");
    }

    if (ok == "aç") {
      if (açık) return global.hata(message, "Bot şu anda zaten bakımda.");

        global.oky(message, "Bakım modunu açtım.");
      db.set("bakim", "açık");
      db.set("sebep", `${sebep}`);
    }
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: "bakım"
};
