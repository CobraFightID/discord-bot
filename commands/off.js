const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Serveur OFF')
        .setDescription('Merci de ne pas vous connecter')
        .setColor('RANDOM'))
    },
    name: 'off'
}