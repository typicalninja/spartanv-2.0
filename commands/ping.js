const cilent = require('discord.js');
const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'ping the bot',
  aliases: ['p','pin'],
	cooldown: 5,
	execute(message,embed) {
    const embed = new Discord.MessageEmbed()
    .setColor('#0260ff')
    .setTitle('')
    .setDescription(" `" + `${Date.now() - message.createdTimestamp}` + " ms`")
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`REQUESTED BY : ${message.author.username}`);
     message.channel.send(embed);
   },
};
