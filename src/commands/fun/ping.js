module.exports = {
  name: 'ping',
  description: 'Ping command',
  execute(message) {
    const username = message.author.username;
    const embed = {
      title: 'Pong',
      description: `${username} used the /ping command`,
      color: 0x00ff00,
    };

    message.reply({ embeds: [embed] })
      .then((replyMessage) => {
        replyMessage.react('🏓');
      })
      .catch((error) => {
        console.error(error);
      });
  },
};