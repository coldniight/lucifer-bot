const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "botnotifications",
        description: "Gives yourself the bot notifications role.",
        usage: "!botnotifications",
        accessableby: "Members",
        aliases: ["botnotify"]
    },
    run: async (bot, message, args) => {
        let memembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Successfully added to bot notifications, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let remembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Successfully removed from bot notifications, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let role = message.guild.roles.find('id', '574765872967843841')

        if(!message.guild.me.hasPermissions(["MANAGE_ROLES"])) return console.log("I don't have enough permissions to run some commands!")
        
        if(!message.member.roles.has(role.id)){
            message.member.addRole(role)
            message.channel.send(memembed)
        }
        else{
            message.member.removeRole(role)
            message.channel.send(remembed)
        }
    }
}