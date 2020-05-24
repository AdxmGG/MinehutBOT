import { Listener } from 'discord-akairo';
import { guildConfigs } from '../guild/guildConfigs';
import { Guild } from 'discord.js';

/*
	This listener will stop the bot joining unknown guilds. 
	(todo: We need a better system to control allowed guilds, rather 
	than determining whether the guild is allowed based on config presence)
*/
export default class GuildWhitelistListener extends Listener {
	constructor() {
		super('guildWhitelist', {
			emitter: 'client',
			event: 'guildCreate',
		});
	}

	async exec(guild: Guild) {
		if (guildConfigs.has(guild.id)) return;
		await guild.leave();
		console.log('left guild because not on whitelist', guild.id); // todo: make logging better
	}
}
