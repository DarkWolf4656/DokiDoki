const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class BugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bug',
            group: 'group4',
            memberName: 'bug',
            description: 'Sends a bug report to the Bots Server',
          
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
    async run(msg, args) {
      const chann = client.guilds.find("name", "Doki Doki Server");
      msg.channel.send('Sent');
    }
};