const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const neko = require("nekos.life");
const fetch = require("node-fetch")

module.exports = class HoloLewdCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hololewd',
            aliases: ['hl'],
            group: 'nsfw',
            memberName: 'hololewd',
            description: 'Have a lewd Holo',
            nsfw: true
        });
    }
	async run(message, args, neko) { 

        if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
        
        const IMGS = await fetch('https://nekos.life/api/v2/img/baka')
        .then(res => res.json()).catch(err => {
            message.channel.send("The gif-API is currently down, plese try again later \n")
        })
        
        const IMG = IMGS.url

        const HolowLewd = new MessageEmbed()
            .setTitle(`Here is your lewd wolf`)
            .setImage(IMG)
            .setColor("GREEN")
        message.channel.send(HoloLewd)
	}
};
