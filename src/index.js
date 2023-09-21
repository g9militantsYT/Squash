require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton} = require('discord.js');
const fs = require('fs');
const { version } = require('../package.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.on('ready', () => {
  console.log(`${client.user.tag} is ready!\n---Using V${version}`);
  client.user.setActivity(`V${version}`);
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    try {
      const pingCommand = require('./commands/fun/ping.js');
      pingCommand.execute(message);
    } catch (error) {
      console.error(error);
      message.reply('An error occurred while running the command.');
    }
  }

  if (message.content === '!help') {
    try {
      const helpCommand = require('./commands/help/help.js');
      helpCommand.execute(message);
    } catch (error) {
      console.error(error);
      message.reply('An error occurred while running the command.');
    }
  }

  if (message.content === '!time') {
    try {
      const timeCommand = require('./commands/time/time.js');
      timeCommand.execute(message);
    } catch (error) {
      console.error(error);
      message.reply('An error occurred while running the command.');
    }
  }

  if (message.content.startsWith('!say')) {
    try {
      const args = message.content.slice(1).trim().split(/ +/);
      const command = args.shift().toLowerCase();
  
      const sayCommand = require('./commands/fun/say.js');
      sayCommand.execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply('An error occurred while running the command.');
    }
  }

});

client.login(process.env.TOKEN);