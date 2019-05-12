const { prefix } = require("../../botconfig.json")

module.exports = async (bot) => {
    bot.user.setActivity('over the server', {type: 'WATCHING'});
    bot.user.setStatus('dnd');
}
