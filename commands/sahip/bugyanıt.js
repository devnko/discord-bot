const Discord = require("discord.js");

exports.run = async (client, message, args, db, ayarlar) => {
  try {
    let bugid = args[0];
    let yanıt = args.slice(1).join(" ");
    let bugg = await db.fetch(`${bugid}.bug`)
    let id = await db.fetch(`${bugid}.id`)
    let toqen = await db.fetch(`${bugid}.token`)
    let user = await db.get(`${bugid}.user`)

          if (!yanıt) if (!yanıt) return global.hata(message, "Lütfen yanıtlamam için bir şey yazın.");

          const webhookClient = new Discord.WebhookClient(id, toqen);
          let embed = new Discord.MessageEmbed()
            .setTitle("Reportunuz Yanıtlandı!")
            .addField("Bildiren", `<@${user}>`)
            .addField("Report", `\`${bugg}\``)
            .addField("Report ID", `\`${bugid}\``)
            .addField("Yanıt", `\`${yanıt}\``)
            .setColor("#f49542");
            webhookClient.send(embed).then(msg => webhookClient.delete())
            await db.delete(`${bugid}.bug`)
            await db.delete(`${bugid}.id`)
            await db.delete(`${bugid}.token`)
            await db.delete(`${bugid}.user`)          

  } catch (err) {
    global.errs(err, message)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bugyanıt"],
  permLevel: 5
};

exports.help = {
  name: "bug-yanıtla",
  description: "",
  usage: "bug-bildir"
};
