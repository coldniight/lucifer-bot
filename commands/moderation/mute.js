const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "mute",
        description: "Mutes a member for an amount of time.",
        usage: "!mute <member> <minutes> <reason>",
        accessableby: "Helpers",
        aliases: ["m"]
    },
    run: async (bot, message, args) => {
        let perembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You do not have access to \`mute\`, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let memembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Please provide a valid user to mute, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let timeembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Please provide a time to mute the user, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();
  

        if(!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.channel.send(perembed)

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!mutee) return message.channel.send(memembed)

        let adminembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You are not allowed to perform \`mute\` on user ${mutee}, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        if(mutee.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(adminembed)

        let time = args[1];
        if(!time) return message.channel.send(timeembed)

        let reason = args.slice(2).join(" ");
        if(!reason) reason = "No reason given"

        if(!message.guild.me.hasPermissions(["MANAGE_ROLES"])) return console.log("I don't have enough permissions to run some commands!");

        let muterole = message.guild.roles.find(r => r.name === "muted")
        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                    name:"muted",
                    color:"#000000",
                    permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        SEND_TTS_MESSAGES: false,
                        ATTACH_FILES: false,
                        SPEAK: false
                    })
                })
            } catch(e) {
                console.log(e.stack);
            }
        }

        let minutes = "minute";
        if (time == "1"){
            minutes = "minute";
        }
        else{
            minutes = "minutes";
        }

        let mutememembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You have been muted on the Lucifer Discord by ${message.author} for \`${time}\` ` + minutes + ` with reason \`${reason}\`.\n\n**Attempting to bypass a mute will get you muted for a longer time if you do so.**`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let unmuteembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`You have been unmuted on the Lucifer Discord automatically by the bot.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let muteembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`Successfully muted user ${mutee}, for \`${time}\` ` + minutes + ` with reason \`${reason}\`, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        let alrembed = new RichEmbed()
        .setTitle("Lucifer Bot")
        .setDescription(`The user ${mutee} is already muted, ${message.author}.`)
        .setColor(0xe20000)
        .setFooter(message.id)
        .setTimestamp();

        if(mutee.roles.has(muterole.id)) return message.channel.send(alrembed);
        await(mutee.addRole(muterole.id))
        message.channel.send(muteembed)
        mutee.send(mutememembed)

        setTimeout(function(){
            if(!mutee.roles.has(muterole.id)) return;
            mutee.removeRole(muterole.id)
            mutee.send(unmuteembed)
        }, time * 60000);
        
    }
}