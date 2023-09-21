module.exports = {
    name: 'say',
    description: 'Repeats the user\'s message with their name below it',
    execute(message, args) {
      const text = args.join(' ');
      const authorName = message.author.username;
  
      message.channel.send(`${text}\n\n~${authorName}`).then(sentMessage => {
        sentMessage.react('🤖');
      });
    },
};