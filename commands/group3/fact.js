const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class FactCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fact',
            aliases: [],
            group: 'group3',
            memberName: 'fact',
            description: 'Sends a Random fact',
        });
    }
	async run(msg, args, neko) { 
	const {body} = await superagent 
        .get('https://nekos.life/api/v2/fact')
        const embed = new RichEmbed()
	        embed.setTitle('Random Fact~')
            embed.setDescription(`Did you Know: ${body.fact}`)
            embed.setColor('RANDOM')
        return msg.embed(embed);
	}
};
