module.exports = {
  name: 'help',
  description: 'Get help with the bot commands',
  execute(message) {
    const embed = {
      title: 'Help',
      description: 'Here are the available commands:',
      fields: [
        {
          name: '!ping',
          value: 'Use the ping command',
        },
        {
          name: '!say',
          value: 'Use the say command',
        },
        {
          name: '!time',
          value: 'See the current time',
        },
        {
          name: '!help',
          value: 'Show this help message',
        },
        
      ],
      color: 0x00ff00,
    };

    message.reply({ embeds: [embed] });
  },
};