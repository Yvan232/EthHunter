const Discord = require('discord.js');
const fetch = require('node-fetch');
const { MessageEmbed } = require("discord.js")

const client = new Discord.Client();
const prefix = '!';

const trim = (str, max) => str.length > max ? `${str.slice(0, max - 3)}...` : str;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (message.content === '!status') {
    
        var statrespone = await fetch('https://eth.2miners.com/api/accounts/0xf0a1c67165ebb44bc4978cd86dacadd4740e5a1e').then (response => response.json());

        const answer = statrespone;
        const embed = new MessageEmbed()
                .setColor('00ff94')
                .setTitle('Aktuelle Daten')
                .addFields(
                    {name: 'Hashrate: ', value: statrespone.hashrate},
                    {name: 'Luck: ', value: statrespone.currentLuck},
                    {name: 'Current Miners: ', value: statrespone.workersTotal}
                )
        message.channel.send(embed);
    }
});

client.login('your token');
