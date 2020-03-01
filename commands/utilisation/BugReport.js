const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class BugReportCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bug',
            aliases: ['bugreport', 'report', 'br'],
            group: 'utilisation',
            memberName: 'bug',
            description: 'Sends a bug report to the Bots Server',
            examples: ['<bug This Image link is not working', '<bug this command does not work'],
            args: [
                {
                    key: 'text',
                    label: 'user',
                    prompt: 'Please describe the bug.?',
                    type: 'string'
                }
            ]
        });
    }
    
    async run(message, args) {

        const chann = this.client.guilds.find(guild => guild.id === '389111570162122752').channels.find(chann => chann.id === "391683807754977311")
        
        const BugEmbed = new RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle('Bug Report')
            .setDescription(args.text)
            .setFooter(message.guild.name + "")
            .setTimestamp()
        chann.send(BugEmbed);

      message.channel.send(`Your Suggestion was sent ${message.author.tag}!`);

    }
};