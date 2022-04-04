const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    message.channel.delete().catch(() => {
        message.channel.send(
            new Discod.MessageEmbed()
                .setColor(client.renk)
                .setDescription('Bu komut için bota `Kanalları Yönet` yetkisi vermelisiniz**!**')
        );
    }).then(() => {
        message.channel.clone({ position: message.channel.rawPosition, nsfw: message.channel.nsfw, rateLimitPerUser: message.channel.rateLimitPerUser,permissionOverwrites: message.channel.permissionOverwrites.array()}).catch(() => {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor(client.renk)
                    .setDescription('Bu komut için bota `Kanalları Yönet` yetkisi vermelisiniz**!**')
            );
        }).then(kanal => {
            kanal.send(
                new Discord.MessageEmbed()
                    .setColor(client.renk)
                    .setDescription(`${kanal.name} isimli kanal başarıyla ${message.author} tarafından nukelendi!`)
            );
        });
    });

};

exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: ['nuke'], 
    permLevel: 4
};

exports.help = {
    name: 'nuke', 
    description: 'boş',
    usage: 'boş' 
};