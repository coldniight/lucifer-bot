const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "ping",
        description: "Displays the latency of the bot.",
        usage: "!ping",
        accessableby: "Members",
        aliases: ["latency"]
    },
    run: async (bot, message, args) => {
        let embed = new RichEmbed()
        .setColor(0x3c368f)
        .setTitle("Astronaut Bot")
        .setDescription(`Pong! \`${Math.round(bot.ping)}\` ms.`)
        .setFooter(message.id)
        .setTimestamp()

        message.channel.send(embed)
    }
}
