import { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } from 'discord.js'
import { bold, italic, strikethrough, underscore, spoiler, quote, blockQuote, memberNicknameMention } from '@discordjs/builders'
import dotenv from 'dotenv'
import { dice, bestas, regras, BdM } from './commands.js'
dotenv.config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const magaSagaz = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

client.once('ready', () => {
	console.log('Ready!')
});

magaSagaz.once('ready', () => {
	console.log('Maga sagaz tá pronta!')
});

magaSagaz.on('messageCreate', async msg => {
	console.log(msg.content)
	const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;

	if ((!msg.author.bot) && (msg.channelId == '864252007900774492')) {
		if ((msg.content === msg.content.toUpperCase()) && (!msg.content.startsWith('<')) && (!regexExp.test(msg.content))) {
			msg.reply('Shiii, fale baixo!')
		}
	}
})

client.on('messageCreate', async msg => {	
	if (!msg.content.startsWith('!')) return

	const command = msg.content.split(/ +/)
	
	switch (command[0]) {
		case "!bestas":
			if (msg.channelId == "875751811330494495") {
				bestas(msg)
			}
			else {
				let address = "(<#875751811330494495>)"
				msg.reply('Estou indo noutro lugar jogar agora. Venha comigo ou me encontre mais tarde! '+bold(address))
			}
			break
		case "!regras":
			if (msg.channelId == "875751811330494495") {
				regras(msg)
			}
			break
		case "!BdM":
			const message = await msg.reply('Então você quer jogar? Escolha seu adversário!')
			BdM(msg, message)
			break
	}
});

client.login(process.env.TOKEN)
magaSagaz.login(process.env.TOKENMAGA)