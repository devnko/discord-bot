const Discord = require("discord.js");
exports.run = async (client, msg, args, db, ayarlar) => {
  try {
    let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;

    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = "<a:package_tik:856852566004858890>";
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<a:package_cross:856852551844495360>";

    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:package_tik:856852566004858890>";
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:package_cross:856852551844495360>";

    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:package_tik:856852566004858890>";
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:package_cross:856852551844495360>";

    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:package_tik:856852566004858890>";
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:package_cross:856852551844495360>";

    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:package_tik:856852566004858890>";
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:package_cross:856852551844495360>";

    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:package_tik:856852566004858890>";
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:package_cross:856852551844495360>";
    
    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:package_tik:856852566004858890>";
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:package_cross:856852551844495360>";

    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:package_tik:856852566004858890>";
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:package_cross:856852551844495360>";

    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:package_tik:856852566004858890>";
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:package_cross:856852551844495360>";

    //emojileri yönet
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:package_tik:856852566004858890>";
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:package_cross:856852551844495360>";

    //webhookları yönet
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:package_tik:856852566004858890>";
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:package_cross:8568525518444953606>";
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(
        ` ${x} Yönetici \n${x2} Denetim Kaydını Görüntüle\n ${x3} Sunucuyu Yönet \n${x4} Rolleri Yönet \n${x5} Kanalları Yönet \n${x6} Üyeleri At \n${x7} Üyeleri Yasakla \n${x8} Mesajları Yönet \n${x9} Kullanıcı Adlarını Yönet \n${x10} Emojileri Yönet \n${x11} Webhook'ları Yönet`
      );
    msg.channel.send(embed);
  } catch (err) {
    global.errs(err, msg)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yetkilerim"],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: "yetkilerim",
  description:
    "Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.",
  usage: "yetkilerim"
};
