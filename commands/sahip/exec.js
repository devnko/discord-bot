const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
const { exec } = require('child_process');
if(!args.join(" ")) return global.hata(message,`**İşlem Belirtin!**`,true)
global.oky(message, `${global.bilgiozel} **İşlem Gerçekleştiriliyor...**`).then(async msg => {
exec(args.join(" "), (error, data, getter) => {
if(error) {
    let hata = new Discord.MessageEmbed()
    .setColor("RED")
    .addField("Hata", `\`\`\`js\n${error.message} \`\`\``)
return msg.edit(hata)
} 
if(getter){
      let execembed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .addField("Girdi", `\`\`\`js\n${args.join(" ")}\`\`\``)
      .addField("Çıktı", `\`\`\`js\n${data}\`\`\``)
      .setFooter(client.ayarlar.footerEmbed);
    return msg.edit(execembed)
}
      let execembed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .addField("Girdi", `\`\`\`js\n${args.join(" ")}\`\`\``)
      .addField("Çıktı", `\`\`\`js\n${data}\`\`\``)
      .setFooter(client.ayarlar.footerEmbed);
    return msg.edit(execembed)
    });
});
  
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["exec"],
  permLevel: 5
};

exports.help = {
  name: "exec",
  description: "",
  usage: "exec"
};