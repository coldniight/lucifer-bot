const { prefix } = require("../../botconfig.json")

module.exports = async (bot, member) => {
    var role = bot.guilds.get("574756014163886111").roles.find('name', 'Unverified');
    member.addRole(role);
}