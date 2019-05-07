const { Client, Collection } = require("discord.js");
const { token } = require("./botconfig");
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(process.env.token);