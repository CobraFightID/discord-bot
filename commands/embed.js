const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Serveur ON')
        .setDescription('Vous pouvez maintenant vous reconnecter')
        .setColor('RANDOM'))
    },
    name: 'on'
}