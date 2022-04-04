const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
  const argss = args[0]
  let şifre = makeid(argss)
      function makeid(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }
  if(argss > 50) return message.channel.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`${global.deniedozel} **Ne yazık ki oluşturulacak şifreniz 50 karakteri geçmemeli.**`))
  if(!argss) return message.channel.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`**:1234: Oluşturulacak şifrenizin karakter uzunluğunu sayı veya rakam ile belirtmelisiniz. **\nÖrnek: /şifre 31`))
  message.channel.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`:lock: **${argss}** karakterli şifreniz direkt mesajınıza gönderildi.`));
  message.author.send(new Discord.MessageEmbed().setColor(client.ayarlar.renk).setDescription(`\`\`\`${şifre}\`\`\``).setTitle(':lock: Parolanı Kimseyle Paylaşma!'))
  message.author.send
  } catch (err) {
    global.errs(err, message);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
    aliases: ["şifre"],
  permLevel: 0
};

exports.help = {
  name: "şifre",
  description: "",
  usage: "şifre"
};
