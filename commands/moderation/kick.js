const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "kick",
        description: "Kicks a member from the server.",
        usage: "!kick <member> <reason>",
        accessableby: "Moderators",
        aliases: ["k"]
    },
    run: async (bot, message, args) => {
        let perembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You do not have access to \`kick\`, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let memembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Please provide a valid user to kick, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        if(!message.member.hasPermissions(["KICK_MEMBERS"])) return message.channel.send(perembed)

        let kickMember = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!kickMember) return message.channel.send(memembed)

        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason given"

        if(!message.guild.me.hasPermissions(["KICK_MEMBERS"])) return console.log("I don't have enough permissions to run some commands!")

        let kickmemembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You have been kicked from the Lucifer Discord by ${message.author} for reason \'${reason}\'.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let kickembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`User ${kickMember} has been successfully kicked, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let logembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`User **${kickMember}** with ID **${kickMember.id}** has been banned by ${message.author} for reason '${reason}'.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        kickMember.send(kickmemembed).then(() => 
        kickMember.kick()).catch(err => console.log(err))

        message.channel.send(kickembed)
        message.guild.channels.find("574983707237285899").send(logembed)
        
    }
}