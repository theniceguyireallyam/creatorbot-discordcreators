const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
var prEmbed = new discord.MessageEmbed()
.setTitle("💵 Prijzen 💵")
.setThumbnail(this.client.user.displayAvatarURL({ format: "png" }))
.setDescription(" \n📦Discord Servers\n━━━━━━━━━\n`Normale Discord Server:` €1,50\nUitgebreide `Discord Server:` €2,50\n🤖Discord Bots\n━━━━━━━━━\n`Giveaway Bot:` €3,00\n \n \n✓ Wij accepteren alleen Paypal!")
.setColor("#78A2D2")

.setTimestamp()
.setFooter('Discord Creators', 'https://i.imgur.com/Vo6pIuK_d.webp?maxwidth=728&fidelity=grand');

return message.channel.send(prEmbed);

}

module.exports.help = {
    name:("infopr")
}