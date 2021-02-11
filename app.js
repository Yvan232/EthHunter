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
    if (message.content === 'cat') {
        message.reply('schmock');
      
      
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

		message.channel.send(file);

        //Es ist fucking 2 uhr wieso bau ich ne Katzen Funkiton ein was ist falsch in meinem leben 
    }else if (message.content === '!status') {
    
        var statrespone = await fetch('https://eth.2miners.com/api/accounts/0xf0a1c67165ebb44bc4978cd86dacadd4740e5a1e').then (response => response.json());

        const answer = statrespone;
        const embed = new MessageEmbed()
                .setColor('00ff94')
                .setTitle('Aktuelle Daten')
                .addFields(
                    {name: 'Hashrate: ', value: statrespone.hashrate},
                    {name: 'Glück: ', value: statrespone.currentLuck},
                    {name: 'Am Minen: ', value: statrespone.workersTotal}
                )
        message.channel.send(embed);
    }
});

client.login('ODA5MTg5Njk3NTk5MDQ1Njcy.YCReoQ.1ingGD4MXt1ekyvFLbX48HctCuo');
