const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PoutCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'pout',
            group: 'group1',
            memberName: 'pout',
            description: 'Sends a pout'
        });
    }

	async run(msg, args) {
        var imgpout = {
            "0": "https://i.imgur.com/ktGINkV.gif",
            "1": "https://media1.tenor.com/images/c8bf65854104f13e8e2cdc9453c5222f/tenor.gif?itemid=8687045",
            "2": "https://media.giphy.com/media/T6QsHz4lscVZm/giphy.gif",
            "3": "https://78.media.tumblr.com/c64aabcd3ce93bd0cb1bfe2d4949853e/tumblr_oktiiztx671voyry7o1_500.gif",
            "4": "https://lh3.googleusercontent.com/-xNhc3K5NI3I/VK9LJUubZHI/AAAAAAAAk9s/93GPLVoEzR0/w500-h281-n/15%2B-%2B1",
            "5": "https://78.media.tumblr.com/84d72c998a950f3b2d539999506dcec7/tumblr_nkplw17MLG1u7kgn9o1_500.gif",
            "6": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjXgun7pvXZAhVC54MKHW8bD2AQjRx6BAgAEAU&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fanime%2Fcomments%2F2xkfu5%2Fgive_me_the_best_pout_youve_seen_in_anime%2F&psig=AOvVaw3yuQws3sPZLSFTHp6Dqmi6&ust=1521442792083641",
            "7": "https://thumbs.gfycat.com/ForkedKaleidoscopicCollie-size_restricted.gif",
            "8": "https://media.giphy.com/media/10abWjdcwyuKHK/giphy.gif",
            "9": "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1453265601-6098d75b8f116a9be92d35dba863c7e2.gif",
            "10": "https://78.media.tumblr.com/76fde5ab37340ebd838f9b1cb632c8a0/tumblr_oegkawmu8y1tydz8to1_500.gif",
            "11": "https://uploads.disquscdn.com/images/8a82068d5b61e9f6a88dffd09da8bf0046f2297532f50ca35cf4a071ed20b6c6.gif",
            "12": "http://i.imgur.com/eawMRR7.gif",
            "13": "https://avatars.mds.yandex.net/get-pdb/27625/08a70e5a-bb7b-4ee5-b172-3aaccfc50d48/orig",
            "14": "https://media0.giphy.com/media/o7C2BKtp6gSd2/200_d.gif",
            "15": "http://i65.tinypic.com/212y58y.gif",
            "16": "https://media1.tenor.com/images/cb871efa727558862700f8f3f924df67/tenor.gif?itemid=5178234",
            "17": "https://avatars.mds.yandex.net/get-pdb/770122/43582476-5021-43b9-a46e-87ca01f7ed3c/orig",
            "18": "https://78.media.tumblr.com/2afc86bffa3606a28446dcbaa93a2634/tumblr_nydvai9Xfs1sqqx06o1_500.gif",
            "19": "https://i.pinimg.com/originals/dd/8c/1b/dd8c1b1d4ef56c49d4dbfce0ccef1b7d.jpg",
        };
           const embed = new RichEmbed()
                .setDescription(msg.author + ' is Pouting' )  
                .setImage(imgpout[Math.floor(Math.random() * Object.keys(imgpout).length).toString()])
                .setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
