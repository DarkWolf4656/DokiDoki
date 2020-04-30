const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class QuoteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'quote',
            aliases: [],
            group: 'fun',
            memberName: 'quote',
            description: 'What message do you want to quote?',
			args: [
				{
					key: 'idx',
					label: 'message',
					prompt: 'What message do you want to quote? (ID)',
					type: 'message'
				}
			]
        });
    }

	async run(message, args) {

        const stamp = args.idx.createdAt;

        if(args.idx.embeds.length > 0){

            const embed = new MessageEmbed()

                if(args.idx.embeds[0].author){

                    embed.setAuthor(args.idx.embeds[0].author.name, args.idx.embeds[0].author.iconURL)

                }else{

                    embed.setAuthor(args.idx.author.username, args.idx.author.avatarURL) 

                }
                
                embed.setDescription(args.idx.embeds[0].description)

                if(args.idx.embeds[0].image){

                    embed.setImage(args.idx.embeds[0].image)

                }

                embed.setColor(0x23ff12)
                
                if(args.idx.embeds[0].footer){

                    if (args.idx.embeds[0].footer.iconURL) {

                        embed.setFooter(args.idx.embeds[0].footer.text, args.idx.embeds[0].footer.text.iconURL)

                    }else{

                        embed.setFooter(args.idx.embeds[0].footer.text)

                    }
                    
                }else{

                    embed.setFooter(stamp + "")

                }
                if(args.idx.embeds[0].fields.length > 0){

                    for(var i = 0; i < args.idx.embeds[0].fields.length; i++){

                        embed.addField(args.idx.embeds[0].fields[i])

                    }
                }

                if(args.idx.embeds[0].thumbnail){

                    embed.setThumbnail(args.idx.embeds[0].thumbnail.url)

                }
                if(args.idx.embeds[0].title){

                    embed.setTitle(args.idx.embeds[0].title)

                }

            return message.embed(embed);

        }else{

            const embed = new MessageEmbed()
                embed.setAuthor(args.idx.author.username, args.idx.author.avatarURL)
                embed.setDescription(args.idx.content)

                if(args.idx.attachments.first()){

                    embed.setImage(args.idx.attachments.first().proxyURL)

                }
                
                embed.setColor(0x23ff12)
                embed.setFooter(stamp + "")
            return message.embed(embed);
        }
    }
};
