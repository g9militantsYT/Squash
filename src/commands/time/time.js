module.exports = {
    name: 'time',
    description: 'Get the current time',
    execute(message) {
      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString();
  
      const embed = {
        title: 'Current Time and Date',
        description: `The current time is: **${currentTime}** and the date is **${currentDate}**`,
        color: 0x00ff00,
      };
  
      message.reply({ embeds: [embed] })
        .then((replyMessage) => {
          replyMessage.react('🕰️');
        })
        .catch((error) => {
          console.error(error);
        });
    },
  };