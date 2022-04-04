  const discord = require("discord.js"); //sa
const Discord = require("discord.js"); //as, baya komuta ekledim dil sistemi, ingilizcem gelişti aq QWEWQEW
const { Client, Intents } = require("discord.js");
const client = (global.client = new Client({
  disableEveryone: true,
  disabledEvents: ["TYPING_START"],
  restTimeOffset: 100,
  messageCacheMaxSize: 50,
  messageEditHistoryMaxSize: 100,
  messageSweepInterval: 100,
  messageCacheLifetime: 100
}));

const fs = require("fs");
const moment = require("moment");
const { join } = require("path");
const { prefix } = require("./config.json");
const ayarlar = require("./config.json"); //sg oç // ben sana uygulamalı olarak öğretmewk
const { Database } = require("quickmongo"); //guard ne ne boka yarıyo ben guard bilmemewk //:(
const db = (global.db = new Database(
"mongodb+srv://Bayrak:fireofeternity@database.pgiq7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
));
db.on("ready", () => {
  console.log("Database connected!");
  // client.guilds.cache.get('760513474244640809').channels.cache.get('760513474693431356').send('Database')
});
const logs = require("discord-logs");
logs(client);
const express = require("express");
const http = require("http");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.login(ayarlar.token)
client.commands = new discord.Collection();
client.prefix = prefix;
client.on("warn", info => console.log(info));
client.on("error", console.error);

const commandswen = (global.commandswen = new Map());
const klasorlen = (global.klasor = new Map());
    const Commands = (global.Commands = new Map());
console.log(
  "╔════════════════════════════「 Komutlar Yükleniyor 」════════════════════════════╗"
);
fs.readdirSync("./commands/bot", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/bot/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("bot", "bot");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Bot] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/ekonomi", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/ekonomi/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
klasorlen.set("ekonomi", "ekonomi");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Ekonomi] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/genel", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/genel/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("genel", "genel");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Genel] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/korumalar", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/korumalar/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("korumalar", "korumalar");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Korumalar] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/kullanıcı", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/kullanıcı/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("kullanıcı", "kullanıcı");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Kullanıcı] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/sahip", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/sahip/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("sahip", "sahip");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Sahip] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/sunucu", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/sunucu/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("sunucu", "sunucu");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Sunucu] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/yetkili", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/yetkili/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("yetkili", "yetkili");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Yetkili] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/seviye", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/seviye/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("seviye", "seviye");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Seviye] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/nsfw", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/nsfw/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("nsfw", "nsfw");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Nsfw] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/eğlence", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/eğlence/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("eğlence", "eğlence");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Eğlence] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/kayıt", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/kayıt/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("kayıt", "kayıt");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Kayıt] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  fs.readdirSync("./commands/müzik", { encoding: "utf-8" })
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let prop = require(`./commands/müzik/${file}`);
    if (prop.help.name == undefined || prop.run == undefined)
      return console.error(`║ [KOMUT] ${file} yüklenemedi. `);
    Commands.set(prop.help.name, prop);
    klasorlen.set("müzik", "müzik");
    commandswen.set(prop.help.name, prop);
    if (prop.conf.aliases && prop.conf.aliases.length > 0) {
      prop.conf.aliases.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof prop.onLoad == "function")
      prop.onLoad(client);
    console.log(
      `║ [Müzik] ${file} için toplam ${prop.conf.aliases.length} destekçi yüklendi ve kendisi yüklendi. `
    );
  });

  client.reload = (file, command) => {
    return new Promise((resolve, reject) => {
      try {
        delete require.cache[require.resolve(`./commands/${file}/${command}`)];
        let cmd = require(`./commands/${file}/${command}`);
        Commands.delete(command);
        commandswen.delete(command);
        Commands.forEach((alias, cmd) => {
          if (cmd === command) Commands.delete(alias);
        });
        Commands.set(command, cmd);
        commandswen.set(command, cmd);
        cmd.conf.aliases.forEach(alias => {
          Commands.set(alias, cmd);
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };
    console.log(
      "╚═════════════════════════════════════════════════════════════════════════════════╝"
    );
//komut yüklenme bitiş -------------------------------------------------------
    console.log(
      "╔════════════════════════════「 Etkinlikler Yükleniyor 」════════════════════════════╗"
    );

    fs.readdirSync("./events", { encoding: "utf-8" })
      .filter(file => file.endsWith(".js"))
      .forEach(file => {
        let prop = require(`./events/${file}`);
        client.on(prop.conf.event, prop.execute);
        console.log(`║ [Loading...] ${file} yüklendi. |`);
      });

    console.log(
      "╚════════════════════════════════════════════════════════════════════════════════════╝"
    );


  console.log("•--------------•")
  console.log(`Aktif oldum, ${client.guilds.cache.size} Adet sunucuya ve ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Adet kullanıcıya hizmet ediyorum, Toplamda ${global.commandswen.size} Adet komutum var!`)
  console.log("•--------------•")

client.ayarlar = {
  renk: "#d50c0c",
  botİsim: "Package",
  embedRenk: "#d50c0c",
  version: ayarlar.sürüm,
  embedFooter: `Package ${ayarlar.sürüm} | /yardım`,
  destek: "https://discord.gg/wGEGQxpVQN",
  footerEmbed: `Package ${ayarlar.sürüm} | /yardım`,
  footer: `Package ${ayarlar.sürüm} | /yardım`
};


const desteq = global.desteksw = "https://discord.gg/wGEGQxpVQN";

//
const girisozel = global.girisozel = "<a:package_online:855874951277445121>";
const ekleniyor = global.ekleniyor = "<a:package_online:855874951277445121>";
const online = global.online = "<a:package_online:855874951277445121>";
const okemoji = global.ok = "<a:package_online:855874951277445121>";
const açık = global.açık = "<a:package_online:855874951277445121>";
//
const deniedozel = global.deniedozel = "<a:package_dnd:855874951482966037>";
const cikisozel = global.cikisozel = "<a:package_dnd:855874951482966037>";
const bakimozel = global.bakimozel = "<a:package_dnd:855874951482966037>";
const offline = global.offline = "<a:package_dnd:855874951482966037>";
const kapalı = global.kapalı = "<a:package_dnd:855874951482966037>";
const dnd = global.dnd = "<a:package_dnd:855874951482966037>";
const no = global.no = "<a:package_dnd:855874951482966037>";
//
const idle = global.idle = "<a:package_idle:855874951759921162>";
const yükleniyor = global.yükleniyor = "<a:package_idle:855874951759921162>";
//
const bilgiozel = global.bilgiozel = "<:package_partnerwait:855874951483490314>";

const sssozel = global.sssozel = "<:package_integration:855874951423983686>";
const ayarlaremoji = global.ayarlar = "<:package_integration:855874951423983686>";

const tick = global.tick = "<:package_plus:855874951659257926>";
const tikozel = global.tikozel = "<:package_plus:855874951659257926>";

const taçemoji = global.taç = "<:package_owner:855874951574847508>";

const premium = global.premium = "<a:package_hyper:855874951492272138>";
const gold = global.gold = "<a:package_hyper:855874951492272138>";

const presw = global.boost = "<a:package_boost:855874952087470160>";
const yayında = global.yayında = "<:package_desktop:855874951914979368>";
const link = global.link = ":link:";
const carpiozel = global.carpiozel = "<:package_cancel:855875623573651456>";

//const ayarlaremoji = global.ayarlar = "<:package_integration:855874951423983686>";

const member = global.member = "<:package_stage:855874951357792277>";
const memberozel = global.memberozel = "<:package_stage:855874951357792277>";

const zil = global.zil = "<:package_global:855874951855734824>";
const ateşş = global.ateş = "<:package_growth:855874951457275944>";


const bronz = global.bronz = "<:brilliancafln:822043008727121960>";
const gümüş = global.gumus = "<a:gumus:838387422109761536>";
const demir = global.demir = "<a:demir:838391298116681730>";
const altın = global.altin = "<:gold:838386995969392650>";
const elmas = global.elmas = "<a:elmas:838393046064169001>";
const titanyum = global.titanyum = "<a:minecraft:838397017523879956>";

client.cooldowns = new Discord.Collection()

const hatavar = (global.hata = async function hata(message, text, emoji) {
  let whn = `> ${text}`;
  if (emoji == true) whn = `> ${global.carpiozel} ${text} `;
  const bruhembed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, client.user.avatarURL(), global.desteksw)
    .setColor("#FF0000")
    .setFooter(client.ayarlar.footerEmbed, message.author.avatarURL({ dynamic: true }))
    .setTimestamp()
    .setDescription(whn);
  let msg = await message.channel.send(bruhembed);
  return msg;
});

const başarılı = (global.oky = async function oky(message, text, emoji) {
  let whn = `> ${text}`;
  if (emoji == true) whn = `> ${global.tikozel} ${text}`;
  const bruhembed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, client.user.avatarURL(), global.desteksw)
    .setColor("#00FF00")
    .setFooter(client.ayarlar.footerEmbed, message.author.avatarURL({ dynamic: true }))
    .setTimestamp()
    .setDescription(whn);
  let msg = await message.channel.send(bruhembed);
  return msg;
});

const red = (global.red = async function red(message, text, emoji) {
  let whn = `> ${text}`;
  if (emoji == true) whn = `> ${global.deniedozel} ${text}`;
  const bruhembed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, client.user.avatarURL(), global.desteksw)
    .setColor("#00FF00")
    .setFooter(client.ayarlar.footerEmbed, message.author.avatarURL({ dynamic: true }))
    .setTimestamp()
    .setDescription(whn);
  let msg = await message.channel.send(bruhembed);
  return msg;
});

const errlog = (global.errlog = "805880163220324373");
const errorvar = (global.errs = async function errs(err, message) {
  const dil = await db.fetch(`${message.guild.id}.dil`);
  var prefix = "/";
  console.error(err);
  //message.react(":WinceorWaiveno:");
  const Embed = new discord.MessageEmbed()
    .setColor("RED")
    .addField("Bir Hata Oluştu", `\`\`\`${err}\`\`\``)
    .addField(
      "Mesaj",
      `[${message.content}](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}) (${message.id})`
    )
    .addField("Sunucu ismi", `${message.guild.name} (${message.guild.id})`)
    .addField("Kanal", `<#${message.channel.id}> (${message.channel.id})`)
    .addField(
      "Komutu Kullananın ismi",
      `${message.author.tag} (${message.author.id})`
    );
  if (dil == "TR") {
    const embed2 = new discord.MessageEmbed().setColor("RED").setDescription(
      `**Eyvah**, bir hata oluştu! **Destek ekibim yakında** bu sorunla **ilgilenecektir. **
        [Destek Sunucuma](https://discord.gg/wGEGQxpVQN) **gelebilir** veya **${prefix}bugbildir**'i' kullanabilirsin.
    `
    );
    //.addField("Hata:", `\`\`\`${err}\`\`\``);
    message.channel.send(embed2);
  } else if (dil == "EN") {
    const embed2 = new discord.MessageEmbed().setColor("RED").setDescription(
      `** Alas **, an error has occurred!** My support team will be addressing this ** issue ** soon. ** 
        You can come to my [Support Server](https://discord.gg/wGEGQxpVQN) or use **${prefix}bugsend**.
    `
    );
    //.addField("Hata:", `\`\`\`${err}\`\`\``);
    message.channel
      .send(embed2)

      .catch(e => console.error(e));
    client.channels.cache
      .get(global.errlog)
      .send(Embed)
      .catch(e => console.error(e));
  }
});

//Korumalar

//banlimit
//sa // bruh ss // amk malı yardım et sikerim daşşşşşşşanı // // tmm simdide fireofeternity altyapıda guard öğrencen hadi eyw // süreli komut yapmayıda bilmiyordun yalancı pezeveng // o nedenle tekrar öğren
//as but ağlamawk hala //guard yapmak bilek ister bende bileq yok amk ühü // dark partner altyapı yaparken öğrendim sjhsfsghjsk ab zaten öğrendiğim kadarını yaptım  // OROSPU COCUĞU CALISMIYOR O ZAMAN HİÇ ÖĞRENEMEMEİŞSİN
client.on("guildBanAdd", async (guild, user) => {
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  let banlimit = await db.fetch(`${guild.id}.banlimit`);

  if (!banlimit) return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "MEMBER_BAN_ADD"
  });
  const banatan = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first()); //banlayan bu
  const banLog = fetchedLogs.entries.first(); //kanka banlanan user banlayanda bu izle
  const koruma = await db.get(`${guild.id}.korumakanal`);
  if (!banLog) return;

  const { executor, target } = banLog;
  if (executor.id == guild.owner.id) return;
  if (target.id === user.id) {
    await db.add(`${guild.is}${executor.id}ban`, 1);
    let kaçban = await db.fetch(`${guild.is}${executor.id}ban`);
    if(!kaçban) return;

    if (kaçban > banlimit) {
      guild.channels.cache
        .get(koruma)
        .send(
          new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(
              `<@${banatan.id}> (${banatan.id}), <@${user.id}> (${user.id}) Kullanıcısı Banlayarak Banlimiti Aştı ve Sunucudan **${client.user.username}** Tarafından **BANLANDI!**`
            )
        );
      guild.members.ban(executor.id, { reason: "Package Ban Limit" });
    } else return;
  } else {
    return;
  }
});

//kicklimit
client.on("guildMemberRemove", async member => {
  let kicklimit = await db.fetch(`${member.guild.id}.kicklimit`);
  if (!kicklimit) return;
  if (
    !member.guild.members.cache
      .get(client.user.id)
      .hasPermission("VIEW_AUDIT_LOG")
  )
    return;
  const fetchedLogs = await member.guild.fetchAuditLogs({
    limit: 1,
    type: "MEMBER_KICK"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  if (executor.id == member.guild.owner.id) return;
  const korumalog2 = await db.get(`${member.guild.id}.korumakanal`);
  if (target.id === member.id) {
    await db.add(`${member.guild.is}${executor.id}kick`, 1);
    let kaçkick = await db.fetch(`${member.guild.is}${executor.id}kick`);

    if (kaçkick > kicklimit) {
      member.guild.channels.cache
        .get(korumalog2)
        .send(
          new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(
              `<@${executor.id}> (${executor.id}), <@${member.id}> (${member.id}) Kullanıcısı Kickleyerek Kicklimiti Aştı ve Sunucudan **${client.user.username}** Tarafından **BANLANDI!**`
            )
        );
      member.guild.members.ban(executor.id, {
        reason: "Package Kick Limit"
      });
    } else return;
  } else {
    return;
  }
});
//Kanal limit
client.on("channelCreate", async member => {
  if (
    !member.guild.members.cache
      .get(client.user.id)
      .hasPermission("VIEW_AUDIT_LOG")
  )
    return;
  let kanallimit = await db.fetch(`${member.guild.id}.kanallimit`);

  if (!kanallimit) return;
  const fetchedLogs = await member.guild.fetchAuditLogs({
    limit: 1,
    type: "CHANNEL_CREATE"
  });

  const kickLog = fetchedLogs.entries.first();

  if (!kickLog)
    return console.log(
      `${member.user.tag} left the guild, most likely of their own will.`
    );

  const { executor, target } = kickLog;
  if (executor.id == member.guild.owner.id) return;
  const korumalog2 = await db.get(`${member.guild.id}.korumakanal`);
  if (target.id === member.id) {
    await db.add(`${member.guild.is}${executor.id}kanal`, 1);
    let kaçkanal = await db.fetch(`${member.guild.is}${executor.id}kanal`);

    if (kaçkanal > kanallimit) {
      member.guild.channels.cache
        .get(korumalog2)
        .send(  
          new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(
              `<@${executor.id}> (${executor.id}) Kullanıcısı Kanal Açarak Kanal Limiti Geçti, Geçerek **${client.user.username}** Tarafından **BANLANDI!**`
            )
        );
      member.guild.members.ban(executor.id, {
        reason: "Package Kanal Limit"
      });
    } else return;
  } else {
    return;
  }
});
client.on("channelDelete", async member => {
  if (
    !member.guild.members.cache
      .get(client.user.id)
      .hasPermission("VIEW_AUDIT_LOG")
  )
    return;
  let kanallimit = await db.fetch(`${member.guild.id}.kanallimit`);

  if (!kanallimit) return;
  const fetchedLogs = await member.guild.fetchAuditLogs({
    limit: 1,
    type: "CHANNEL_DELETE"
  });

  const kickLog = fetchedLogs.entries.first();

  if (!kickLog)
    return console.log(
      `${member.user.tag} left the guild, most likely of their own will.`
    );

  const { executor, target } = kickLog;
  if (executor.id == member.guild.owner.id) return;
  const korumalog2 = await db.get(`${member.guild.id}.korumakanal`);
  if (target.id === member.id) {
    await db.add(`${member.guild.is}${executor.id}kanal`, 1);
    let kaçkanal = await db.fetch(`${member.guild.is}${executor.id}kanal`);

    if (kaçkanal > kanallimit) {
      member.guild.channels.cache
        .get(korumalog2)
        .send(
          new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(
              `<@${executor.id}> (${executor.id}) Kullanıcısı Kanal Silerek Kanal Limiti Geçti, Geçerek **${client.user.username}** Tarafından **BANLANDI!**`
            )
        );
      member.guild.members.ban(executor.id, {
        reason: "Package Kanal Limit"
      });
    } else return;
  } else {
    return;
  }
});
//rol limit
client.on("roleCreate", async member => {
  if (
    !member.guild.members.cache
      .get(client.user.id)
      .hasPermission("VIEW_AUDIT_LOG")
  )
    return;
  let rollimit = await db.fetch(`${member.guild.id}.rollimit`);

  if (!rollimit) return;
  const fetchedLogs = await member.guild.fetchAuditLogs({
    limit: 1,
    type: "ROLE_CREATE"
  });

  const kickLog = fetchedLogs.entries.first();

  if (!kickLog)
    return console.log(
      `${member.user.tag} left the guild, most likely of their own will.`
    );

  const { executor, target } = kickLog;
  if (executor.id == member.guild.owner.id) return;
  const korumalog2 = await db.get(`${member.guild.id}.korumakanal`);
  if (target.id === member.id) {
    await db.add(`${member.guild.is}${executor.id}rol`, 1);
    let kaçrolab = await db.fetch(`${member.guild.is}${executor.id}rol`);

    if (kaçrolab > rollimit) {
      member.guild.channels.cache
        .get(korumalog2)
        .send(
          new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(
              `<@${executor.id}> (${executor.id}) Kullanıcısı Rol Açarak Rol Limiti Geçti, Geçerek **${client.user.username}** Tarafından **BANLANDI!**`
            )
        );
      member.guild.members.ban(executor.id, {
        reason: "Package Rol Limit"
      });
    } else return;
  } else {
    return;
  }
});
client.on("roleDelete", async member => {
  if (
    !member.guild.members.cache
      .get(client.user.id)
      .hasPermission("VIEW_AUDIT_LOG")
  )
    return;
  let rollimit = await db.fetch(`${member.guild.id}.rollimit`);
if(!rollimit) return;
  if (rollimit) return;
  const fetchedLogs = await member.guild.fetchAuditLogs({
    limit: 1,
    type: "ROLE_DELETE"
  });

  const kickLog = fetchedLogs.entries.first();

  if (!kickLog)
    return console.log(
      `${member.user.tag} left the guild, most likely of their own will.`
    );

  const { executor, target } = kickLog;
  if (executor.id == member.guild.owner.id) return;
  const korumalog2 = await db.get(`${member.guild.id}.korumakanal`);
  if (target.id === member.id) {
    await db.add(`${member.guild.id}.${executor.id}.rol`, 1);
    let kaçrol = await db.fetch(`${member.guild.id}.${executor.id}.rol`);

    if (kaçrol > rollimit) {
      member.guild.channels.cache
        .get(korumalog2)
        .send(
          new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(
              `<@${executor.id}> (${executor.id}) Kullanıcısı Rol Silerek Rol Limiti Geçti, Geçerek **${client.user.username}** Tarafından **BANLANDI!**`
            )
        );
      member.guild.members.ban(executor.id, {
        reason: "Package Rol Limit"
      });
    } else return;
  } else {
    return;
  }
});

client.on("guildMemberAdd", async member => {
  let yenihesapengel = await db.fetch(`${member.guild.id}.yenihesapengel`);
  if (!yenihesapengel) return;
  require("moment-duration-format");
  const kurulus = new Date().getTime() - member.user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  let limit = (await db.fetch(`${member.guild.id}.günlimit`)) || 15;
  //client.channels.cache.get("760513474693431360").send(`${kurulus} & ${gün} & ${limit}`)
  if (gün < limit)
    member.guild.members.ban(member.id, {
      reason: "Package Yeni Hesap Engel"
    });
});
//ETİKET PREFİX

/*
client.on("message", async message => {
  const moment = require('moment')
  moment.locale('tr')
  let abobayraknaptınnnnnnnnnn = {"01": "Ocak","02": "Şubat","03": "Mart","04": "Nisan","05": "Mayıs","06": "Haziran","07": "Temmuz","08": "Ağustos","09": "Eylül","10": "Ekim","11": "Kasım","12": "Aralık"}
  const dil = (await db.fetch(`${message.guild.id}.dil`)) || "TR";
  let anan = client.user.id;
  if (dil == "TR") {
    let mention = message.mentions.users.first();
    //if (mention == anan) {
      if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setFooter(client.ayarlar.footer, message.author.avatarURL({dynamic:true}))
          .setTitle(`:wave: Merhaba, ${message.author.username} adlı değerli kullanıcımız.`)
          .setThumbnail('https://cdn.discordapp.com/attachments/760513474693431360/836645377515192360/fireofeternity.png')
          .setDescription(
`> **•**  ${client.user.username}'yi **${moment(message.guild.me.joinedAt).format('DD')} ${abobayraknaptınnnnnnnnnn[moment(message.guild.me.joinedAt).format('MM')]} ${moment(message.guild.me.joinedAt).format('YYYY h:mm:ss')}** beridir kullandığınız için teşekkür ederiz.
> **•** ${client.user.username}'nin bu sunucudaki ön eki **${prefix}** olarak ayarlı.
> **•** Dili ise **${dil}** olarak ayarlı.
> **•** Botun yardım menüsünü **${prefix}yardım** yazarak görüntüleyebilirsiniz.
`
          )
          .addField(
            "> 🔗 | Linkler;",
            ` [Beni Ekle](https://bit.ly/fireofeternity) | [Destek Sunucum](${ayarlar.server})`
          )
      ).then(bayrak=>bayrak.delete({timeout: 7000}))
    }
    //
  } else if (dil == "EN") {
    let mention = message.mentions.users.first();
    if (mention == anan) {
      //if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(` <@${client.user.id}>`)) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setFooter(`${client.user.username}`)
          .addField(
            `**:wave: Hello, our dear user named ${message.author.username}.** `,
            `
᲼᲼᲼᲼᲼
> **•** Thank you for using **${client.user.username}** on your server.
> **•** ${client.user.username}'s prefix on this server is set to ${prefix}
> **•** Bot language is set to ${dil}.
> **•** You can view the bot's help menu by typing ${prefix}help
`
          )
          .addField(
            "> 🔗 | Links;",
            `[Add Me!](https://bit.ly/fireofeternity) | [Support Server](${ayarlar.server})`
          )
      ).then(wen=>wen.delete({timeout: 7000}))
    }
  }
});*/

client.on("guildMemberUpdate", async function(oldMember, newMember) {
  const guild = newMember.guild;
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  let rolkoruma = await db.fetch(`${guild.id}.rolyvk`);
  if (!rolkoruma) return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "MEMBER_ROLE_UPDATE"
  });
  const deletionLog = fetchedLogs.entries.first();
  if (!deletionLog) return;
  const { executor, target } = deletionLog;
  if (executor.id == guild.owner.id) return;
  newMember.roles.cache.forEach(role => {
    if (!oldMember.roles.cache.has(role.id))
      if (oldMember.hasPermission("ADMINISTRATOR")) return;
    if (newMember.hasPermission("ADMINISTRATOR")) {
      newMember.roles.remove(role);
      guild.members.ban(executor.id, {
        reason: `Package Yönetici Koruma`
      });
      guild.owner.send(
        `**${executor.tag}** sunucunuzdaki **${oldMember.user.tag}** kişisine yönetici vermeye çalıştı! **${executor.tag}** kişisini banladım ve **${oldMember.user.tag}** kişisinden yönetici yetkisi olan rolü aldım.`
      );
    }
  });
}); //gel deneyek

//anti-invite
client.on("inviteCreate", async invite => {
  const guild = invite.guild;
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  let antiinv = await db.fetch(`${guild.id}.antiinvite`);
  if (!antiinv) return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "INVITE_CREATE"
  });
  const deletionLog = fetchedLogs.entries.first();
  if (!deletionLog) return;
  const { executor, target } = deletionLog;
  if (executor.id == guild.owner.id) return;
  invite.delete({ reason: `Package Davet Engel.` });
  return guild.owner.send(
    `Sunucunuzdaki ${invite.inviter} kişisi **${invite.url}** davetini oluşturdu! Daveti sildim.`
  );
});

client.on("message", async message => {
  let reklam = [
    "discord.gg",
    "./gg",
    ".com",
    "https://",
    "http://",
    ".org",
    ".tk",
    ".net",
    "bit.ly",
    "pornhub.com",
    "glitch.com",
    ".ml",
    ".biz",
    ".sex",
    ".gg/",
    "eren.si",
    "electra-bot.com",
    "wensamita.com",
    "https://discord.com/invite",
    "discord.com/invite"
  ]; //hhıh
  const acikmi = await db.fetch(`reklamkick_${message.guild.id}`); //pornhub önemli jshfdghjsk
  if (!acikmi) return;
  if (!message.members.cache.get(client.user.id).hasPermission("BAN_MEMBERS"))
    return;
  if (!message.member.bot) return;
  await db.add(`${message.author.id}.reklamcıpezewenk`, 1);
  let kaçreklamyapmışpiç = await db.fetch(
    `${message.author.id}.reklamcıpezewenk`
  );
  if (acikmi < kaçreklamyapmışpiç) {
    //zewqa
    message.member.kick(["Package Reklam Kick"]); //amk normal fireofeternity > ctrl c > ctrl v yapsana gshjskshghs
    return message.guild.owner.send(
      `Sunucunuzdaki <@${message.member.id}> (${message.member.id}) Reklam Kick Sınırını Aşarak Sunucudan Kicklendi.`
    ); //d0rumu ab d0ru şu an
  } //amk uykum geldi beynim durdu Ğ
});

client.on("raw", async packet => {
  if (!["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"].includes(packet.t))
    return;
  const guild = client.guilds.cache.get(packet.d.guild_id);
  const channel = client.channels.cache.get(packet.d.channel_id);
  const user = client.users.cache.get(packet.d.user_id);
  if (user.bot) return;
  const member = await guild.members.cache.get(packet.d.user_id);
  const emoji = packet.d.emoji.id ? `<a:${packet.d.emoji.name}:${packet.d.emoji.id}>` : packet.d.emoji.name;
  //const reaction = message.reactions.cache.get(emoji);
  if (packet.t === "MESSAGE_REACTION_ADD") {
    let rol = await db.get(
      `${guild.id}.emojirol.${channel.id}.${packet.d.message_id}.${emoji}.rol`
    );
    if (!rol) return;
    rol = guild.roles.cache.get(rol);
    member.roles.add(rol, `${client.user.username} Emoji Rol Sistemi.`, {
      timeout: 3000
    });
    console.log("emojirol çalıştı rolü werdi werdi werdi kodır wen ab");
  }
  if (packet.t === "MESSAGE_REACTION_REMOVE") {
    let rol = await db.get(
      `${guild.id}.emojirol.${channel.id}.${packet.d.message_id}.${emoji}.rol`
    );
    if (!rol) return;
    rol = guild.roles.cache.get(rol);
    member.roles.remove(rol, `${client.user.username} Emoji Rol Sistemi.`, {
      timeout: 3000
    });
    console.log("emojirol çalıştı rolü aldı kodır wen ab");
  }
}); /*
client.on("messageReactionAdd", async (reaction, user) => {
  if (user.bot) return;
    let rol = await db.get(`${reaction.message.guild.id}.emojirol.${reaction.message.channel.id}.${reaction.message.id}.${reaction.emoji}.rol`)
    if(!rol) return;
  reaction.message.guild.members.cache.get(user.id).roles.add(rol);
});

client.on("messageReactionRemove", async (reaction, user) => { //bakma boşuna çalışmıyo .d
  if (user.bot) return;
  if (user.bot) return;
    let rol = await db.get(`${reaction.message.guild.id}.emojirol.${reaction.message.channel.id}.${reaction.message.id}.${reaction.emoji}.rol`)
    if(!rol) return;  
  reaction.message.guild.members.cache.get(user.id).roles.remove(rol);
});*/ //yedek
/*client.on('raw', async packet => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
  const guild = client.guilds.cache.get(packet.d.guild_id);
  const channel = client.channels.cache.get(packet.d.channel_id);
  const user = client.users.cache.get(packet.d.user_id);
    if(user.bot) return;
  const member = await guild.members.cache.get(packet.d.user_id)
  const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
    //const reaction = message.reactions.cache.get(emoji);
    if (packet.t === 'MESSAGE_REACTION_ADD') {
      let rol = await db.get(`${guild.id}.emojirol.${channel.id}.${packet.d.message_id}.${emoji}.rol`)
      if(!rol) return;
      rol = guild.roles.cache.get(rol);
      member.roles.add(rol, `${client.user.username} Emoji Rol Sistemi.`, {timeout: 3000});                                        
      console.log('emojirol çalıştı rolü werdi werdi werdi kodır wen ab')
 
    }
  if (packet.t === 'MESSAGE_REACTION_REMOVE') {
      let rol = await db.get(`${guild.id}.emojirol.${channel.id}.${packet.d.message_id}.${emoji}.rol`)    
      if(!rol) return;
      rol = guild.roles.cache.get(rol);
      member.roles.remove(rol, `${client.user.username} Emoji Rol Sistemi.`, {timeout: 3000}); 
    console.log('emojirol çalıştı rolü aldı kodır wen ab')
  }

});*/ 
async function kontrol() {
    const db2 = require('quick.db');

  client.users.cache.forEach(üye => {
    setInterval(async () => {
      let x = await db2.fetch(`goldsüre_${üye.id}`); // bu sürede bitecek (timestamp)
      let cc = await db2.has(`goldsüre_${üye.id}`); // bu sürede bitecek (timestamp)
      if (cc === true) {
        if (x < Date.now()) {
          let kanal = new Discord.WebhookClient(
            //https://discordapp.com/api/webhooks/855550716626206720/LOa6VTuvWEEGjQo1RKOfppnx54Lcl6XSP9kidSc0jdp4pUh4Rj4Z5OucRAuhTD841wV7
            "855550716626206720",
            "LOa6VTuvWEEGjQo1RKOfppnx54Lcl6XSP9kidSc0jdp4pUh4Rj4Z5OucRAuhTD841wV7"
          );
          await db2.delete(`üyelikk_${üye.id}`);
          await db2.delete(`goldsüre_${üye.id}`);
          const kazandı = new Discord.MessageEmbed()
            .setAuthor(
              `${client.ayarlar.botİsim} Bot`,
              client.user.avatarURL({ dynamic: true })
            )
            .setColor(client.ayarlar.embedRenk)
            .setDescription(
              `
${üye} (${üye.id}) Adlı kullanıcının özel üyelik süresi bitti.
`
            )
            .setFooter(
              client.ayarlar.embedFooter,
              client.user.avatarURL({ dynamic: true })
            );
          kanal.send(kazandı);
        }
      }

      if (!x) return;
      if (!cc) return;
    }, 1800000);
  });
}

async function kontrol2() {
     const db2 = require('quick.db');

  client.users.cache.forEach(üye => {
    setInterval(async () => {
      let x = await db2.fetch(`çalışSüre_${üye.id}`); // bu sürede bitecek (timestamp)
      let cc = await db2.has(`çalışSüre_${üye.id}`); // bu sürede bitecek (timestamp)
      if (cc === true) {
        if (x < Date.now()) {
          await db2.delete(`çalışSüre_${üye.id}`);
        }
      }

      if (!x) return;
      if (!cc) return;
    }, 1800000);
  });

  client.users.cache.forEach(üye => {
    setInterval(async () => {
      let x = await db2.fetch(`günlükSüre_${üye.id}`); // bu sürede bitecek (timestamp)
      let cc = await db2.has(`günlükSüre_${üye.id}`); // bu sürede bitecek (timestamp)
      if (cc === true) {
        if (x < Date.now()) {
          await db2.delete(`günlükSüre_${üye.id}`);
        }
      }

      if (!x) return;
      if (!cc) return;
    }, 1800000);
  });
}
client.on("messageDelete", async message => {
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  let id = await db.fetch(`${message.guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${message.guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  const charCheck = (str, max = 1024) =>
    str.length > max ? str.slice(0, max - 3) + "..." : str;
  const embed = new Discord.MessageEmbed()
    .setAuthor(
      `${client.ayarlar.botİsim} Bot`,
      message.author.avatarURL({ dynamic: true })
    )
    .setColor(client.ayarlar.embedRenk)
    .setDescription(
      `
  • | Bir Mesaj Silindi!
  `
    )
    .addField(
      ":white_small_square: | Kişi Bilgileri",
      `> • | Adı: **${message.author.tag}**\n> • | ID: **${message.author.id}**`
    )
    .addField("Mesaj İçeriği", "```" + charCheck(message.content) + "```")
    .setFooter(
      client.ayarlar.embedFooter,
      message.author.avatarURL({ dynamic: true })
    );
  return modlog.send(embed);
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (oldMessage.author.id === client.user.id) return;
  let id = await db.fetch(`${oldMessage.guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${oldMessage.guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  if (oldMessage.content === newMessage.content) return;

  const charCheck = (str, max = 1024) =>
    str.length > max ? str.slice(0, max - 3) + "..." : str;
  const embed = new Discord.MessageEmbed()
    .setAuthor(
      `${client.ayarlar.botİsim} Bot`,
      oldMessage.author.avatarURL({ dynamic: true })
    )
    .setColor(client.ayarlar.embedRenk)
    .setDescription(
      `
  • | Bir Mesaj Güncellendi!
  `
    )
    .addField(
      ":white_small_square: | Kişi Bilgileri",
      `> • | Adı: **${oldMessage.author.tag}**\n> • | ID: **${oldMessage.author.id}**`
    )
    .addField(
      "Eski Mesaj İçeriği",
      "```" + charCheck(oldMessage.content) + "```"
    )
    .addField(
      "Yeni Mesaj İçeriği",
      "```" + charCheck(newMessage.content) + "```"
    )
    .setFooter(
      client.ayarlar.embedFooter,
      oldMessage.author.avatarURL({ dynamic: true })
    );
  return modlog.send(embed);
});

client.on("guildMemberAdd", async member => {
  let id = await db.fetch(`${member.guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${member.guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  var kişi = member.user;
  var tarih = "";
  if (moment(kişi.createdAt).format("MM") === "01") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Ocak ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "02") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Şubat ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "03") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Mart ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "04") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Nisan ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "05") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Mayıs ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "06") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Haziran ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "07") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Temmuz ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "08") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Ağustos ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "09") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Eylül ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "10") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Ekim ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "11") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Kasım ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "12") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Aralık ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }

  const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(
      `
  • | Bir Üye Katıldı!
  `
    )
    .addField(
      ":white_small_square: | Üye Bilgileri",
      `> • | Adı: **${member.user.tag}**\n> • | ID: **${member.id}**\n> • | Hesap Oluşturulma Tarihi: **${tarih}**`
    )

    .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
  return modlog.send(embed);
});

client.on("guildMemberRemove", async member => {
  let id = await db.fetch(`${member.guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${member.guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  var kişi = member.user;
  var tarih = "";
  if (moment(kişi.createdAt).format("MM") === "01") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Ocak ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "02") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Şubat ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "03") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Mart ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "04") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Nisan ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "05") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Mayıs ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "06") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Haziran ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "07") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Temmuz ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "08") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Ağustos ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "09") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Eylül ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "10") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Ekim ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "11") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Kasım ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }
  if (moment(kişi.createdAt).format("MM") === "12") {
    var tarih = `${moment(kişi.createdAt).format("DD")} Aralık ${moment(
      kişi.createdAt
    ).format("YYYY HH:mm:ss")} `;
  }

  const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(
      `
  • | Bir Üye Ayrıldı!
  `
    )
    .addField(
      ":white_small_square: | Üye Bilgileri",
      `> • | Adı: **${member.user.tag}**\n> • | ID: **${member.id}**\n> • | Hesap Oluşturulma Tarihi: **${tarih}**`
    )

    .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
  return modlog.send(embed);
});

client.on("channelCreate", async channel => {
  let guild = channel.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;

  let görünebilirmi;
  if (channel.viewable === true) {
    görünebilirmi = "Evet";
  } else {
    görünebilirmi = "Hayır";
  }

  if (
    !channel.guild.members.cache
      .get(client.user.id)
      .hasPermission("VIEW_AUDIT_LOG")
  )
    return;
  const fetchedLogs = await channel.guild.fetchAuditLogs({
    limit: 1,
    type: "CHANNEL_CREATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let member = client.users.cache.get(executor.id);
  if (channel.type === "text") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
      .setColor(client.ayarlar.embedRenk)
      .setDescription(
        `
    • | Bir Kanal Oluşturuldu!
    `
      )
      .addField(
        ":white_small_square: | Kişi Bilgileri",
        `> • | Adı: **${member.tag}**\n> • | ID: **${member.id}**`
      )
      .addField(
        ":white_small_square: | Kanal Bilgileri",
        `> • | Adı: **${channel.name}**\n> • | ID: **${channel.id}**\n> • | Kanal Tipi: **Yazı**\n> • | Kanal Pozisyonu: **${channel.position}**\n> • | Kanal Görünebilir mi?: **${görünebilirmi}**`
      )

      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    return modlog.send(embed);
  } else if (channel.type === "voice") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
      .setColor(client.ayarlar.embedRenk)
      .setDescription(
        `
    • | Bir Kanal Oluşturuldu!
    `
      )
      .addField(
        ":white_small_square: | Kişi Bilgileri",
        `> • | Adı: **${member.user.tag}**\n> • | ID: **${member.id}**`
      )
      .addField(
        ":white_small_square: | Kanal Bilgileri",
        `> • | Adı: **${channel.name}**\n> • | ID: **${channel.id}**\n> • | Kanal Tipi: **Sesli**\n> • | Kanal Pozisyonu: **${channel.position}**\n> • | Kanal Görünebilir mi?: **${görünebilirmi}**`
      )

      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    return modlog.send(embed);
  } else if (channel.type === "category") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
      .setColor(client.ayarlar.embedRenk)
      .setDescription(
        `
    • | Bir Kanal Oluşturuldu!
    `
      )
      .addField(
        ":white_small_square: | Kişi Bilgileri",
        `> • | Adı: **${member.user.tag}**\n> • | ID: **${member.id}**`
      )
      .addField(
        ":white_small_square: | Kanal Bilgileri",
        `> • | Adı: **${channel.name}**\n> • | ID: **${channel.id}**\n> • | Kanal Tipi: **Kategori**\n> • | Kanal Pozisyonu: **${channel.position}**\n> • | Kanal Görünebilir mi?: **${görünebilirmi}**`
      )
      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    return modlog.send(embed);
  } else if (channel.type === "news") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
      .setColor(client.ayarlar.embedRenk)
      .setDescription(
        `
    • | Bir Kanal Oluşturuldu!
    `
      )
      .addField(
        ":white_small_square: | Kişi Bilgileri",
        `> • | Adı: **${member.user.tag}**\n> • | ID: **${member.id}**`
      )
      .addField(
        ":white_small_square: | Kanal Bilgileri",
        `> • | Adı: **${channel.name}**\n> • | ID: **${channel.id}**\n> • | Kanal Tipi: **Duyuru**\n> • | Kanal Pozisyonu: **${channel.position}**\n> • | Kanal Görünebilir mi?: **${görünebilirmi}**`
      )
      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    return modlog.send(embed);
  } else if (channel.type === "store") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
      .setColor(client.ayarlar.embedRenk)
      .setDescription(
        `
    • | Bir Kanal Oluşturuldu!
    `
      )
      .addField(
        ":white_small_square: | Kişi Bilgileri",
        `> • | Adı: **${member.user.tag}**\n> • | ID: **${member.id}**`
      )
      .addField(
        ":white_small_square: | Kanal Bilgileri",
        `> • | Adı: **${channel.name}**\n> • | ID: **${channel.id}**\n> • | Kanal Tipi: **Mağaza**\n> • | Kanal Pozisyonu: **${channel.position}**\n> • | Kanal Görünebilir mi?: **${görünebilirmi}**`
      )
      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    return modlog.send(embed);
  }
});

client.on("channelDelete", async channel => {
  let guild = channel.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;

  if (
    !channel.guild.members.cache
      .get(client.user.id)
      .hasPermission("VIEW_AUDIT_LOG")
  )
    return;
  const fetchedLogs = await channel.guild.fetchAuditLogs({
    limit: 1,
    type: "CHANNEL_DELETE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let member = client.users.cache.get(executor.id);

  if (channel.type === "text") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
      .setColor(client.ayarlar.embedRenk)
      .setDescription(
        `
    • | Bir Kanal Silindi!
    `
      )
      .addField(
        ":white_small_square: | Kişi Bilgileri",
        `> • | Adı: **${member.tag}**\n> • | ID: **${member.id}**`
      )
      .addField(
        ":white_small_square: | Kanal Bilgileri",
        `> • | Adı: **${channel.name}**\n> • | ID: **${channel.id}**\n> • | Kanal Tipi: **Yazı**\n> • | Kanal Pozisyonu: **${channel.position}**`
      )

      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    return modlog.send(embed);
  } else if (channel.type === "voice") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
      .setColor(client.ayarlar.embedRenk)
      .setDescription(
        `
    • | Bir Kanal Silindi!
    `
      )
      .addField(
        ":white_small_square: | Kişi Bilgileri",
        `> • | Adı: **${member.user.tag}**\n> • | ID: **${member.id}**`
      )
      .addField(
        ":white_small_square: | Kanal Bilgileri",
        `> • | Adı: **${channel.name}**\n> • | ID: **${channel.id}**\n> • | Kanal Tipi: **Sesli**\n> • | Kanal Pozisyonu: **${channel.position}**`
      )

      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    return modlog.send(embed);
  } else if (channel.type === "category") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
      .setColor(client.ayarlar.embedRenk)
      .setDescription(
        `
    • | Bir Kanal Silindi!
    `
      )
      .addField(
        ":white_small_square: | Kişi Bilgileri",
        `> • | Adı: **${member.user.tag}**\n> • | ID: **${member.id}**`
      )
      .addField(
        ":white_small_square: | Kanal Bilgileri",
        `> • | Adı: **${channel.name}**\n> • | ID: **${channel.id}**\n> • | Kanal Tipi: **Kategori**\n> • | Kanal Pozisyonu: **${channel.position}**`
      )

      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    return modlog.send(embed);
  } else if (channel.type === "news") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
      .setColor(client.ayarlar.embedRenk)
      .setDescription(
        `
    • | Bir Kanal Silindi!
    `
      )
      .addField(
        ":white_small_square: | Kişi Bilgileri",
        `> • | Adı: **${member.user.tag}**\n> • | ID: **${member.id}**`
      )
      .addField(
        ":white_small_square: | Kanal Bilgileri",
        `> • | Adı: **${channel.name}**\n> • | ID: **${channel.id}**\n> • | Kanal Tipi: **Duyuru**\n> • | Kanal Pozisyonu: **${channel.position}**`
      )

      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    return modlog.send(embed);
  } else if (channel.type === "store") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
      .setColor(client.ayarlar.embedRenk)
      .setDescription(
        `
    • | Bir Kanal Silindi!
    `
      )
      .addField(
        ":white_small_square: | Kişi Bilgileri",
        `> • | Adı: **${member.user.tag}**\n> • | ID: **${member.id}**`
      )
      .addField(
        ":white_small_square: | Kanal Bilgileri",
        `> • | Adı: **${channel.name}**\n> • | ID: **${channel.id}**\n> • | Kanal Tipi: **Mağaza**\n> • | Kanal Pozisyonu: **${channel.position}**`
      )

      .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
    return modlog.send(embed);
  }
});

client.on("roleCreate", async role => {
  let guild = role.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;

  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "ROLE_CREATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let member = client.users.cache.get(executor.id);
  let etiketlenebilirmi;
  if (role.mentionable === true) {
    etiketlenebilirmi = "Evet";
  } else {
    etiketlenebilirmi = "Hayır";
  }
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(
      `
    • | Bir Rol Oluşturuldu!
    `
    )
    .addField(
      ":white_small_square: | Kişi Bilgileri",
      `> • | Adı: **${member.user.tag}**\n> • | ID: **${member.id}**`
    )
    .addField(
      ":white_small_square: | Rol Bilgileri",
      `> • | Adı: **${role.name}**\n> • | ID: **${role.id}**\n> • | Rol Rengi: **${role.hexColor}**\n> • | Rol Pozisyonu: **${role.position}**\n> • | Etiketlenebilirmi?: **${etiketlenebilirmi}**`
    )

    .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
  return modlog.send(embed);
});

client.on("roleDelete", async role => {
  let guild = role.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;

  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "ROLE_DELETE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let member = client.users.cache.get(executor.id);

  const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(
      `
    • | Bir Rol Silindi!
    `
    )
    .addField(
      ":white_small_square: | Kişi Bilgileri",
      `> • | Adı: **${member.tag}**\n> • | ID: **${member.id}**`
    )
    .addField(
      ":white_small_square: | Rol Bilgileri",
      `> • | Adı: **${role.name}**\n> • | ID: **${role.id}**\n> • | Rol Rengi: **${role.hexColor}**\n> • | Rol Pozisyonu: **${role.position}**`
    )

    .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
  return modlog.send(embed);
});

client.on("emojiCreate", async emoji => {
  let guild = emoji.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;

  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "EMOJI_CREATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let member = client.users.cache.get(executor.id);

  let hareketlimi;
  if (emoji.animated === true) {
    hareketlimi = "Evet";
  } else {
    hareketlimi = "Hayır";
  }

  const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(
      `
    • | Bir Emoji Oluşturuldu!  
    `
    )
    .addField(
      ":white_small_square: | Kişi Bilgileri",
      `> • | Adı: **${member.tag}**\n> • | ID: **${member.id}**`
    )
    .addField(
      ":white_small_square: | Emoji Bilgileri",
      `> • | Adı: **${emoji.name}**\n> • | ID: **${emoji.id}**\n> • | Bağlantı: **[Tıkla](${emoji.url})**\n> • | Hareketlimi: **${hareketlimi}**`
    )

    .setImage(emoji.url)
    .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
  return modlog.send(embed);
});

client.on("emojiDelete", async emoji => {
  let guild = emoji.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;

  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "EMOJI_DELETE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let member = client.users.cache.get(executor.id);

  const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(
      `
    • | Bir Emoji Silindi!
    `
    )
    .addField(
      ":white_small_square: | Kişi Bilgileri",
      `> • | Adı: **${member.tag}**\n> • | ID: **${member.id}**`
    )
    .addField(
      ":white_small_square: | Emoji Bilgileri",
      `> • | Adı: **${emoji.name}**\n> • | ID: **${emoji.id}**`
    )

    .setFooter(client.ayarlar.embedFooter, client.user.avatarURL());
  return modlog.send(embed);
});
client.on("inviteCreate", async function(invite) {
  let guild = invite.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;

  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "INVITE_CREATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let member = client.users.cache.get(executor.id);

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .addField(
      ":white_small_square: | Kişi Bilgileri",
      `> • | Adı: **${member.tag}**\n> • | ID: **${member.id}**`
    )
    .addField(
      ":white_small_square: | İnvite (Link) Bilgileri",
      `> • | Link: **${invite.url}**`
    );

  return modlog.send(embed);
});

client.on("inviteDelete", async function(invite) {
  let guild = invite.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;

  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "INVITE_DELETE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let member = client.users.cache.get(executor.id);

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .addField(
      ":white_small_square: | Kişi Bilgileri",
      `> • | Adı: **${member.tag}**\n> • | ID: **${member.id}**`
    )
    .addField(
      ":white_small_square: | Silinen İnvite (Link) Bilgileri",
      `> • | Link: **${invite.url}**`
    );

  return modlog.send(embed);
});
client.on("guildMemberRoleRemove", async (member2, role) => {
  let guild = role.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;

  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "GUILD_MEMBER_ROLE_REMOVE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let member = client.users.cache.get(executor.id);

  let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .addField(
      ":white_small_square: | Rolü Alan Kişi Bilgileri",
      `> • | Adı: **${member.tag}**\n> • | ID: **${member.id}**`
    )
    .addField(
      ":white_small_square: | Rolü Alınan Kişi",
      `> • | İsim: **<@${member2.user.id}>** ID'si:**${member2.id}**`
    );
  return modlog.send(embed);
});
client.on("guildMemberUpdate", async (oldMember, newMember) => {
  let guild = oldMember.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;

  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "MEMBER_ROLE_UPDATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let member2 = client.users.cache.get(executor.id);
  newMember.roles.cache.forEach(role => {
    if (!oldMember.roles.cache.has(role.id)) {
      let embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
        .setColor(client.ayarlar.embedRenk)
        .addField(
          ":white_small_square: | Rolü Veren Kişi Bilgileri",
          `> • | Adı: **${member2.tag}**\n> • | ID: **${member2.id}**`
        )
        .addField(
          ":white_small_square: | Rolü Verilen Kişi",
          `> • | İsim: **<@${oldMember.id}>** ID'si:**${oldMember.id}**`
        );
      return modlog.send(embed);
    }
  });
  oldMember.roles.cache.forEach(role => {
    if (!newMember.roles.cache.has(role.id)) {
      let embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
        .setColor(client.ayarlar.embedRenk)
        .addField(
          ":white_small_square: | Rolü Alan Kişi Bilgileri",
          `> • | Adı: **${member2.tag}**\n> • | ID: **${member2.id}**`
        )
        .addField(
          ":white_small_square: | Rolü Alınan Kişi",
          `> • | İsim: **<@${oldMember.id}>** ID'si:**${oldMember.id}**`
        );
      return modlog.send(embed);
    }
  });
});
client.on("guildMemberUpdate", async (oldMember, newMember) => {
  let guild = oldMember.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "MEMBER_NICKNAME_UPDATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let entry = client.users.cache.get(executor.id);
  if (oldMember.nickname == newMember.nickname) return;
  let oldNickname = oldMember.nickname;
  let newNickname = newMember.nickname;
  if (oldNickname == null) oldNickname = newMember.user.username;
  if (newNickname == null) newNickname = newMember.user.username;
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`• | Bir İsim Değiştirildi!`)
    .addField(
      ":white_small_square: | İsmi Değiştiren",
      `> • | İsim: **<@${executor.id}>** ID'si: **(${executor.id})**`
    )
    .addField(
      ":white_small_square: | Eski İsim:",
      `> • | İsim: **${oldNickname}**`
    )
    .addField(
      ":white_small_square: | Yeni İsim:",
      `> • | İsim: **${newNickname}**`
    );
  return modlog.send(embed);
});
client.on("guildVanityURLAdd", async (guild, vanityURL) => {
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "GUILD_UPDATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let entry = client.users.cache.get(executor.id);
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`• | ÖZel Url Eklendi!`)
    .addField(
      ":white_small_square: | URL'yi Ekliyon",
      `> • | İsim: **<@${executor.id}>** ID'si: **(${executor.id})**`
    )
    .addField(":white_small_square: | URL:", `> • | İsim: **${vanityURL}**`);

  return modlog.send(embed);
});
client.on("guildVanityURLRemove", async (guild, vanityURL) => {
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "GUILD_UPDATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let entry = client.users.cache.get(executor.id);
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`• | ÖZel Url Kaldırıldı!`)
    .addField(
      ":white_small_square: | URL'yi Kaldıran",
      `> • | İsim: **<@${executor.id}>** ID'si: **(${executor.id})**`
    )
    .addField(
      ":white_small_square: | Eski URL:",
      `> • | İsim: **${vanityURL}**`
    );

  return modlog.send(embed);
});

client.on("guildVanityURLUpdate", async (guild, oldVanityURL, newVanityURL) => {
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "GUILD_UPDATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let entry = client.users.cache.get(executor.id);
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`• | Özel Url Değiştirildi!`)
    .addField(
      ":white_small_square: | URL'yi Değiştiren",
      `> • | İsim: **<@${executor.id}>** ID'si: **(${executor.id})**`
    )
    .addField(
      ":white_small_square: | Eski URL:",
      `> • | İsim: **${oldVanityURL}**`
    )
    .addField(
      ":white_small_square: | Yeni URL:",
      `> • | İsim: **${newVanityURL}**`
    );
  return modlog.send(embed);
});
/*client.on('guildRegionUpdate',async (guild, oldRegion, newRegion) => {
    let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return; 
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "GUILD_UPDATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let entry = client.users.cache.get(executor.id);
      const oldUpper = oldRegion.charAt(0).toUpperCase() + oldRegion.substring(1);
      const newUpper = newRegion.charAt(0).toUpperCase() + oldRegion.substring(1);
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
  .setDescription(`• | unucu Bölgesi Değiştirildi!`)
       .addField(
      ":white_small_square: | Bölge'yi Değiştiren",
      `> • | İsim: **<@${executor.id}>** ID'si: **(${executor.id})**`
    )  
    .addField(
      ":white_small_square: | Eski Bölge:",
      `> • | İsim: **${oldUpper}**`
    )
    .addField(
      ":white_small_square: | Yeni Bölge:",
      `> • | İsim: **${newUpper}**`
    )  
  return modlog.send(embed);
  
});*/

client.on("guildBannerAdd", async (guild, bannerURL) => {
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "GUILD_UPDATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let entry = client.users.cache.get(executor.id);
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`• | Sunucu Banner Değişti!`)
    .addField(
      ":white_small_square: | Banner'i Değiştiren",
      `> • | İsim: **<@${executor.id}>** ID'si: **(${executor.id})**`
    )
    .setImage(bannerURL);
  return modlog.send(embed);
});

client.on("guildAfkChannelAdd", async (guild, afkChannel) => {
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "GUILD_UPDATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let entry = client.users.cache.get(executor.id);
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`• | AFK Kanalı Değişti!`)
    .addField(
      ":white_small_square: | Afk Kanalı'nı Ekleyen",
      `> • | İsim: **<@${executor.id}>** ID'si: **(${executor.id})**`
    )
    .addField(
      ":white_small_square: | Afk Kanalı:",
      `> • | İsim: **${afkChannel}**`
    );
  return modlog.send(embed);
});
client.on("rolePositionUpdate", async (role, oldPosition, newPosition) => {
  let guild = role.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "GUILD_ROLE_UPDATE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let entry = client.users.cache.get(executor.id);
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`• | Bir Rolde Yetki Değişikliği => ${role}!`)
    .addField(
      ":white_small_square: | Güncellemeyi Yapan:",
      `> • | İsim: **<@${executor.id}>** ID'si: **(${executor.id})**`
    )
    .addField(":white_small_square: | Rol:", `> • | Rol: **${role.name}**`)
    .addField(
      ":white_small_square: | Eski Sırası:",
      `> • | Eski Sıra: **${oldPosition}**`
    )
    .addField(
      ":white_small_square: | Güncellemeyi Yapan:",
      `> • | Yeni Sıra: **${newPosition}**`
    );
  return modlog.send(embed);
});

client.on(
  "rolePermissionsUpdate",
  async (role, oldPermissions, newPermissions) => {
    let guild = role.guild;
    let id = await db.fetch(`${guild.id}.modlogid`);
    if (!id) return;
    let toqen = await db.fetch(`${guild.id}.modlogtoken`);
    if (!toqen) return;
    const modlog = new Discord.WebhookClient(id, toqen);
    if (!modlog) return;
    if (
      !guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG")
    )
      return;
    const fetchedLogs = await guild.fetchAuditLogs({
      limit: 1,
      type: "GUILD_ROLE_UPDATE"
    });
    const bayraqwen = fetchedLogs.entries.first();
    if (!bayraqwen) return;
    const { executor, target } = bayraqwen;
    let entry = client.users.cache.get(executor.id);
    let embed = new Discord.MessageEmbed()
      .setAuthor(`${client.ayarlar.botİsim} Bot`, client.user.avatarURL())
      .setColor(client.ayarlar.embedRenk)
      .setDescription(`• | Bir Rolde Yetki Değişikliği => ${role}!`)
      .addField(
        ":white_small_square: | Güncellemeyi Yapan:",
        `> • | İsim: **<@${executor.id}>** ID'si: **(${executor.id})**`
      );
    return modlog.send(embed);
  }
);
client.on("voiceChannelJoin", async (member, channel) => {
  let guild = member.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "VOICE_CHANNEL_JOIN"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let entry = client.users.cache.get(executor.id);

  let embed = new Discord.MessageEmbed()
    .setDescription(`• | Kanala Girildi  !`)
    .addField(
      ":white_small_square: | Kanal'a Giren:",
      `> • | İsim: **<@${member.user.id}>**`
    )
    .addField(
      ":white_small_square: | Kanal:",
      `> • | Kanal: **<#${channel.id}>**`
    );
  return modlog.send(embed);
});

client.on("voiceChannelLeave", async (member, channel) => {
  let guild = member.guild;
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  if (!guild.members.cache.get(client.user.id).hasPermission("VIEW_AUDIT_LOG"))
    return;
  const fetchedLogs = await guild.fetchAuditLogs({
    limit: 1,
    type: "VOICE_CHANNEL_LEAVE"
  });
  const bayraqwen = fetchedLogs.entries.first();
  if (!bayraqwen) return;
  const { executor, target } = bayraqwen;
  let entry = client.users.cache.get(executor.id);

  let embed = new Discord.MessageEmbed()
    .setDescription(`• | Kanaldan Çıkıldı!`)
    .addField(
      ":white_small_square: | Kanaldan Çıkan:",
      `> • | İsim: **<@${member.user.id}>**`
    )
    .addField(
      ":white_small_square: | Kanal:",
      `> • | Kanal: **<#${channel.id}>**`
    );
  return modlog.send(embed);
});

/*
client.on("messageReactionAdd", async function(messageReaction, user) {
  let message;

  try {
    message = await messageReaction.fetch();
  } catch (err) {
    message = messageReaction;
  } //üstteki mesajlara uyarla ///mesaj tipi aynı olsun yani
//hA?
  let guild = messageReaction.guild
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;

  let embed = new Discord.MessageEmbed()
    .setDescription(`• | Tepki Eklendi!`)
    .addField(
      ":white_small_square: | Tepki Ekleyen:",
      `> • | İsim: **<@${message.message.author.id}>**`
    )
    .addField(
      ":white_small_square: | Mesaj:",
      `> • | Mesaj ID: ${message.message.id} Mesaj: ${message.message.content}`
    )
      .addField(
      ":white_small_square: | Emoji Bilgileri",
      `> • | Ekleyen Kişi: ${user.username} ID: ${user.id} Emoji: ${message._emoji.name}`
    );
  return modlog.send(embed)
});

client.on("messageReactionRemove", async function(messageReaction, user) {
  let message;

  try {
    message = await messageReaction.fetch();
  } catch (err) {
    message = messageReaction;
  }
  let guild = message.guild
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  let embed = new Discord.MessageEmbed();


  embed

    .setAuthor(
      `${message.message.channel.guild.name}: Tepki Kaldırıldı`,

      message.message.channel.guild.iconURL()
    )

    .setColor("#E70000")

    .setDescription(`Bir Mesajdan Tepki Kaldırıldı`)

    .addField(
      "Mesaj Bilgileri Aşağıda",

      `ID: ${message.message.id}\n Mesaj: ${message.message.content ||
        "Mesaj Bilgisi Yok"}\n Yapan: ${message.message.author.username ||
        "Yok"}`
    )

    .addField(
      "Tepki Bilgisi",

      `Tepkiyi Kaldıran: ${user.username}\nID: ${user.id}\nEmoji: ${message._emoji.name}`
    )

    .setThumbnail(user.displayAvatarURL({ formate: "jpg" }));

  return modlog.send(embed);
});

client.on("messageReactionRemoveAll", async function(message) {
  
  let guild = message.guild
  let id = await db.fetch(`${guild.id}.modlogid`);
  if (!id) return;
  let toqen = await db.fetch(`${guild.id}.modlogtoken`);
  if (!toqen) return;
  const modlog = new Discord.WebhookClient(id, toqen);
  if (!modlog) return;
  let embed = new Discord.MessageEmbed();


  embed

    .setAuthor(
      `${message.guild.name}: Bir Mesajdaki Bütün Emojiler Kaldırıldı!`,

      message.guild.iconURL()
    )
    .setThumbnail(client.user.avatarURL({ dynamic: true }))
    .setColor("YELLOW")

    .setDescription(
      ` **<#${message.channel.id}>** (\`${message.channel.id}\`) Adlı Kanal'da Bir Mesajdaki Emojiler Silindi!`
    );

  return modlog.send(embed);
});
*/

client.on('rateLimit', (info) => {
  //https://discordapp.com/api/webhooks/855550974163812373/97FnjrrMiO-QH9YYo5u67JPMU2UtlRu74pwQMSYyJknoKN0YlLHp7cLxlrWggGUr5cC4
  const rate = new Discord.WebhookClient("855550974163812373","97FnjrrMiO-QH9YYo5u67JPMU2UtlRu74pwQMSYyJknoKN0YlLHp7cLxlrWggGUr5cC4")
  rate.send(`Rate limit hit ${info.timeDifference ? info.timeDifference : info.timeout ? info.timeout: 'Unknown timeout '}`)
})
require('./index.js')