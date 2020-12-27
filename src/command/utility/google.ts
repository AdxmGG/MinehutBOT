import { Message } from 'discord.js';
import { MinehutCommand } from '../../structure/command/minehutCommand';

export default class SearchCommand extends MinehutCommand {
	constructor() {
		super('google', {
			aliases: ['google'],
			category: 'utility',
			description: {
                content: 'Google Search',
                usage: '<term>',
            },
            args: [
                {
                    id: 'searchterm',
                }
            ]
		});
	}

	async exec(msg: Message, { searchterm }: { searchterm: string }) {
        let search = searchterm.replace(" ", "+")
        const embed = new MessageEmbed()
 			.setTitle("Google Search")
 			.setDescription(`[Google'd it](${search}) :amusing:`)
 			.setFooter(`Requested by ${msg.author.tag}`, msg.author.avatarURL()!)
 			.setColor('BLUE');
 		await msg.channel.send(embed);
	}
}
