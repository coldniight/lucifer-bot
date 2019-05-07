const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "help",
        description: "Shows a list of avaible commands.",
        usage: "!help",
        accessableby: "Members",
        aliases: ["cmds", "commands"]
    },
    run: async (bot, message, args) => {
        let adminembed = new RichEmbed()
        .setColor(0xe20000)
        .setTitle("Lucifer Bot")
        .setDescription(`Avaible commands for user ${message.author}\n\n**help**, **ping**, **botnotifications**, **mute**, **unmute**, **kick**, **ban**, **unban**`)
        .setFooter(message.id)
        .setTimestamp()

        let modembed = new RichEmbed()
        .setColor(0xe20000)
        .setTitle("Lucifer Bot")
        .setDescription(`Avaible commands for user ${message.author}\n\n**help**, **ping**, **botnotifications**, **mute**, **unmute**, **kick**`)
        .setFooter(message.id)
        .setTimestamp()

        let helpembed = new RichEmbed()
        .setColor(0xe20000)
        .setTitle("Lucifer Bot")
        .setDescription(`Avaible commands for user ${message.author}\n\n**help**, **ping**, **botnotifications**, **mute**, **unmute**`)
        .setFooter(message.id)
        .setTimestamp()

        let userembed = new RichEmbed()
        .setColor(0xe20000)
        .setTitle("Lucifer Bot")
        .setDescription(`Avaible commands for user ${message.author}\n\n**help**, **ping**, **botnotifications**`)
        .setFooter(message.id)
        .setTimestamp()


        if(args[0]) {
            let command = args[0];
            if(bot.commands.has(command)) {
                command = bot.commands.get(command);
                let hembed = new RichEmbed()
                .setColor(0xe20000)
                .setTitle("Lucifer Bot")
                .setDescription(`Command **${command.config.name}**:\n\n**Description**: ${command.config.description || "No description"}\n**Usage**: ${command.config.usage}\n**Accessablebly**: ${command.config.accessableby}\n**Aliases**: ${command.config.aliases}`)
                .setFooter(message.id)
                .setTimestamp()
                message.channel.send(hembed)
            }
        }
        if(!args[0]) {
            if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(userembed)
            if(message.member.hasPermissions("BAN_MEMBERS")) return message.channel.send(adminembed)
            if(message.member.hasPermissions("KICK_MEMBERS")) return message.channel.send(modembed)
            if(message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(helpembed)
        }
    }
}