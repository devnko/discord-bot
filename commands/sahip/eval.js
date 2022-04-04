const Discord = require("discord.js");
const moment = require("moment");
const fs = require("fs");
const snekfetch = require("snekfetch");
const ms = require("ms");

exports.run = async (client, message, args, db, ayarlar, prefix, dil) => {
  try {
    var code = args.join(" ");
    let log;
    if (code.length < 1) return global.hata(message, `Hey, eval için bir kod girmelisin!`)
    if(code.includes("token")) {
      let evalembed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .addField("Girdi", `
\`\`\`js
${code}
\`\`\`
      `)
      .addField("Çıktı", `\`\`\`js\nBak tokenim burada kanka aynen kardeşim qwe\`\`\``)
      .setFooter("FireOfEternity");
      return message.chanel.send(evalembed);
    }

    if (message.author.id !== "138965363172966400")
      if (message.author.id !== "548145246983159808") {
      let evalembed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .addField("Girdi", `
\`\`\`js
${code}
\`\`\`
      `)
      .addField("Çıktı", `\`\`\`js\nBak şu anda kullandın eval aynen kardeşim qwe\`\`\``)
      .setFooter("FireOfEternity");
      return message.channel.send(evalembed);
      }
    if(code.includes("files")) {
      let evalembed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .addField("Girdi", `
\`\`\`js
${code}
\`\`\`
      `)
      .addField("Çıktı", `\`\`\`js\nAttım bak kodlarımı saldım şu an aynen kardeşim qwe\`\`\``)
      .setFooter("FireOfEternity");
      return message.channel.send(evalembed);
    }

    try { 
      let evaled;
        if(code.includes("await")) evaled = eval("(async () => {" + code + "})()");
        else evaled = eval(code);
      /*
      if(evaled) {
      if(evaled.includes(client.token)) return message.channel.send("Buyur Tokenim: Nzg|| PUHAHAHAHHAHAJSJSJSKSSHJKAHSHAJKJSHGFAGHJAHGAHJSIUYHAJK ||")
      if(evaled.includes(ayarlar.token)) return message.channel.send("Buyur Tokenim: Nzg|| PUHAHAHAHHAHAJSJSJSKSSHJKAHSHAJKJSHGFAGHJAHGAHJSIUYHAJK ||")
      };*/
      if(log) {
      if(log.includes(client.token)) return log = "client.token";
      if(log.includes(ayarlar.token)) return log = "client.token";
      };

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      if(code == 31) evaled = "sj"
      let evalembed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .addField("Girdi", `
\`\`\`js
${code}
\`\`\`
      `)
      .addField("Çıktı", `\`\`\`js\n${clean(evaled)} \`\`\``)
      .setFooter("FireOfEternity");
      if(log) evalembed.addField("Log", `\`\`\`js\n${log} \`\`\``);
      message.channel.send(evalembed);
    } catch (err) {
      global.hata(message, `\n\`\`\`js\n${clean(err)}\n\`\`\``, true);
    }
    function clean(text) {
      if (typeof text === "string")
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    }
  } catch (err) {
    global.errs(err, message)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "eval",
  description: "Kod denemek için kullanılır.",
  usage: "eval [Kodunuz]"
};


































/*const Discord = require("discord.js");

exports.run = async (client, message, args, ayarlar, prefix) => {
  let bayrak = global.commandswen.size;
  const hataembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setDescription(
      "Eval kodu çalıştırılamadı! Ayrıntılar: || Bak şuan kullandın||"
    );
  if (message.author.id !== "699597747657113653")
    if (message.author.id !== "548145246983159808") {
      return message.channel.send(hataembed);
    }
  try {
    let codein = args.join(" ");
    if (codein.length < 1)
      return message.reply(`deneyebilmek için bir kod girmelisin!`);
    if (codein.includes("token"))
      return message.channel.send(
        "Buyur Tokenim: Nzg|| PUHAHAHAHHAHAJSJSJSKSSHJKAHSHAJKJSHGFAGHJAHGAHJSIUYHAJK ||"
      );
    if (codein.includes("ayarlar.token"))
      return message.channel.send(
        "Buyur Tokenim: Nzg|| PUHAHAHAHHAHAJSJSJSKSSHJKAHSHAJKJSHGFAGHJAHGAHJSIUYHAJK ||"
      );
    if (codein.includes("./config.json"))
      return message.channel.send(
        "Bu Dosyaya Erişilemez Bu Dosyadan Hiçbir Bilgi **Alınamaz**!"
      );
    let code = eval("(async () => {" + codein + "})()");
    let tür = typeof(code);
    if (typeof code !== "string")
      code = require("util").inspect(code, { depth: 0 });
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField(":inbox_tray: Girilen:", `\`\`\`js\n${codein}\`\`\``)
      .addField(":outbox_tray: Sonuç:", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":label: Tür:", `\`\`\`js\n${tür}\n\`\`\``)
      .setFooter(client.ayarlar.footerEmbed)
    message.channel.send(embed);
  } catch (e) {
    let embed2 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("» Hata", "```js\n" + e + "\n```");
    message.channel.send(embed2);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kod"],
  permLevel: 0
};

exports.help = {
  name: "eval",
  description: "Kod denemeyi sağlar.",
  usage: "-eval"
};*/
