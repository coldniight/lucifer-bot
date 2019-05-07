const { prefix } = require("../../botconfig.json")

module.exports = async (bot) => {
    bot.user.setActivity('over the server', {type: 'WATCHING'});
    bot.user.setStatus('dnd');
    bot.guilds.get("574756014163886111").channels.get("574763279717629963").send("<@&574765872967843841> Bot updated.")
}