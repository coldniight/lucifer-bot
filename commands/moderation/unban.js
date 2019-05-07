const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "unban",
        description: "Unbans a member from the server.",
        usage: "!unban <id> <reason>",
        accessableby: "Administrators",
        aliases: ["unb"]
    },
    run: async (bot, message, args) => {
        let perembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You do not have access to \`unban\`, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let memembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Please provide a valid user ID to unban, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        if(!message.member.hasPermissions(["BAN_MEMBERS"])) return message.channel.send(perembed)

        let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send(memembed)

        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason given"

        if(!message.guild.me.hasPermissions(["BAN_MEMBERS"])) return console.log("I don't have enough permissions to run some commands!")

        let banembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`User ${bannedMember.tag} has been successfully unbanned, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let logembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`User **${bannedMember.tag}** with ID **${bannedMember.id}** has been unbanned by ${message.author} for reason '${reason}'.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        try{
            message.guild.unban(bannedMember, {reason: reason})
            message.channel.send(banembed)
            message.guild.channels.get("574983707237285899").send(logembed)
        } catch(e){
            console.log(e.message)
        }      
    }
}