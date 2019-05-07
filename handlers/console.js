module.exports = (bot) => {
let prompt = process.openStdin()
prompt.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.get("574756014633517077").send(x.join(" "));
});
}