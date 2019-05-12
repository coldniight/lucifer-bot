const { prefix } = require("../../botconfig.json")

module.exports = async (bot, member) => {
    var role = bot.guilds.get("577220184692097034").roles.find('name', 'Unverified');
    member.addRole(role);
}
