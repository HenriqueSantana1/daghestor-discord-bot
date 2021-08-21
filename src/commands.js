import { bold, italic, strikethrough, underscore, spoiler, quote, blockQuote, memberNicknameMention } from '@discordjs/builders'
import { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } from 'discord.js'

export function dice(max, min = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function bestas(msg) {
    let n = dice(10)
    let titles = ['O OURIÇO-DO-MAR', 'O CAVALO-MARINHO', 'O CARANGUEIJO', 'A ÁGUA-VIVA', 'A ESTRELA-DO-MAR', 'O SALMÃO-DENTE-DE-SABRE', 'O TUBARÃO', 'O POLVO', 'A TARTARUGA DRAGÃO', 'O KRAKEN']
    let urls = ['https://i.imgur.com/O8zUGJf.png', 'https://i.imgur.com/NWaZRzB.png', 'https://i.imgur.com/89qOtDX.png', 'https://i.imgur.com/vUhV6DB.png', 'https://i.imgur.com/3YPbrba.png', 'https://i.imgur.com/ElTHLp0.png', 'https://i.imgur.com/0BSEJPm.png', 'https://i.imgur.com/3GUepsq.png', 'https://i.imgur.com/1ei6pf0.png', 'https://i.imgur.com/QPpUtHV.png']
    const embed = new MessageEmbed().setTitle(blockQuote(titles[n-1])).setImage(urls[n-1])
    msg.reply({ embeds: [embed] })
    if (n == 10) {
        const embed = new MessageEmbed().setTitle(blockQuote('EITA, VOCÊ GANHOU!')).setImage('https://i.imgur.com/apuOiQv.gif')
        msg.channel.send({ embeds: [embed] })
    }
}

export function regras(msg) {
    msg.channel.send('<@'+msg.author+'> Ei, patife! Nem pense em trapacear! Se quiser jogar valendo, vai ter que ler as regras!')
    const embed = new MessageEmbed().setTitle(blockQuote('REGRAS')).setURL('https://bit.ly/3srqfSZ')
    msg.channel.send({ embeds: [embed] })
}

export function BdM(msg, message) {

    const filter = (reaction, user) => {
        return ['🐐', '🦑', '🧙‍♂️', '🧝‍♂️', '🧝‍♀️', '🐻', '🎲'].includes(reaction.emoji.name) && user.id === msg.author.id;
    };

    message.awaitReactions({ filter, max: 1, time: 15000, errors: ['time'] })
        .then(collected => {
            switch (collected.first()._emoji.name) {
                case '🐐':
                    if (msg.author == '260499457378877452') {
                        msg.channel.send('<@260499457378877452>, nesse plano você não pode desafiar você mesmo...')
                    }
                    else {
                        msg.channel.send('<@'+msg.author+'> Então você desafiou o <@260499457378877452>? haha')
                    }
                    break
                case '🧙‍♂️':
                    if (msg.author == '386297897244950528') {
                        msg.channel.send('<@386297897244950528>, mesmo que você seja o mestre as regras são minhas! Você não pode desafiar você mesmo...')
                    }
                    else {
                        msg.channel.send('<@'+msg.author+'> Então você desafiou o <@386297897244950528>? Boa sorte no próximo combate!')
                    }
                    break
                case '🧝‍♂️':
                    if (msg.author == '244587340297666571') {
                        msg.channel.send('<@244587340297666571>, você não pode desafiar a si mesmo... ')
                    }
                    else {
                        msg.channel.send('<@'+msg.author+'> Então você desafiou o <@244587340297666571>?')
                    }
                    break
                case '🧝‍♀️':
                    if (msg.author == '386298611685916674') {
                        msg.channel.send('<@386298611685916674>, você não pode desafiar a si mesmo... ')
                    }
                    else {
                        msg.channel.send('<@'+msg.author+'> Então você desafiou a <@386298611685916674>?')
                    }
                    break
                case '🐻':
                    if (msg.author == '298222454281863169') {
                        msg.channel.send('<@298222454281863169>,  você não pode desafiar a si mesmo... ')
                    }
                    else {
                        msg.channel.send('<@'+msg.author+'> Então você desafiou o <@298222454281863169>')
                    }
                    break
                case '🦑':
                    if (msg.author == '407339160597430282') {
                        msg.channel.send('<@407339160597430282>, você não pode desafiar a si mesmo... ')
                    }
                    else {
                        msg.channel.send('<@'+msg.author+'> Então você desafiou a <@407339160597430282>? Cuidado!')
                    }
                    break	
                case '🎲':
                    msg.channel.send('<@'+msg.author+'> Então você quer jogar contra mim? Muahahaha')
                    break
            }
        })
        .catch(() => {
            msg.channel.send('<@'+msg.author+'> Você não desafiou ninguém! Ficou com medo?');
        });
}