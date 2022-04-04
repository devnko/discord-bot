const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch') // npm i node-fetch
module.exports.run = async (client, message, args) => {

        const name = args.join(' ')
        if(!name) return message.reply('Aramak İçin Geçerli Bir Kullanıcı Belirtin.') // If User Is Not Found On GitHub
        const url = `https://api.github.com/users/${name}` // Link From BOT Will Get Info

        let response
        try{
            response = await fetch(url).then(res => res.json())
        }
        catch(e) {
            return message.reply('Bir Hata Oluştu, Daha Sonra Tekrar Deneyin.')
        }

        const embed = new MessageEmbed()
        .setColor('#d52525')
        .setTitle(`${response.login}(${response.id})`)
        .setURL(response.html_url)
        .setThumbnail(response.avatar_url)
        .setDescription(response.bio ? response.bio : 'Biyo Yok') // Bio Of User Searched
        .addField('Herkese Açık Projeleri:', response.public_repos.toLocaleString(), true) // Repos Of User Searched
        .addField('Takipçiler:', response.followers.toLocaleString(), true) // Followers Of User Searched
        .addField('Takip Ettikleri:', response.following.toLocaleString(), true) // How Many Following Of User Searched
        .addField('E-mail:', response.email ? response.email : 'E-mail Yok', true) // Email Of User Searched
        .addField('Company:', response.company ? response.commands : 'Copmany Yok', true) // Company Of User Searched
        .addField('Lokasyonu:', response.location ? response.location : 'Lokasyon Yok', true) // Location Of User Searched
        message.channel.send(embed)
    }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['github','github-arama'],
  permLevel: 0
};

module.exports.help = {
  name: "github",
  description: "Githubda Kullanıcı Aratma Yaparsınız",
  usage: "d/github <İsim>"
};