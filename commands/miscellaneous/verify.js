const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "verify",
        description: "Gives you the Verified role.",
        usage: "!verify",
        accessableby: "Members",
        aliases: []
    },
    run: async (bot, message, args) => {
        let unverified = bot.guilds.get("577220184692097034").roles.find("name", "Unverified")
        let verified = bot.guilds.get("577220184692097034").roles.find("name", "Verified")
        let embed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`You are already verified, ${message.author}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();

        let vembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`Verified user **${message.author}** with ID **${message.author.id}**.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();

        if(!message.member.roles.has(unverified.id)) return message.author.send(embed).then(message.delete());
        await(message.member.addRole(verified));
        await(message.member.removeRole(unverified));
        await bot.guilds.get("577220184692097034").channels.get("577252879971385379").send(vembed);
        await message.delete();
    }
}
