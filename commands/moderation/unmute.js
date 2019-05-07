const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "unmute",
        description: "Unmutes a member of the server.",
        usage: "!unmute <member>",
        accessableby: "Helpers",
        aliases: ["unm"]
    },
    run: async (bot, message, args) => {
        let perembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You do not have access to \`unmute\`, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let memembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Please provide a valid user to unmute, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        if(!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.channel.send(perembed)

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!mutee) return message.channel.send(memembed)

        if(!message.guild.me.hasPermissions(["MANAGE_ROLES"])) return console.log("I don't have enough permissions to run some commands!")

        let muterole = message.guild.roles.find(r => r.name === "muted")

        let unmuteembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You have been unmuted on the Lucifer Discord manually by ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let muteembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`The user ${mutee} has been successfully unmuted, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let alrembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`The user ${mutee} is not muted, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        if(!mutee.roles.has(muterole.id)) return message.channel.send(alrembed);
        await(mutee.removeRole(muterole.id))
        message.channel.send(muteembed)
        mutee.send(unmuteembed)
        
    }
}