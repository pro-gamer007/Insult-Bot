const Discord = require("discord.js");
const insulter = require('insult');
module.exports = {
  name: "insult",
  description: "Sends an insult lulXD",
  aliases: [''],
  usage: "insult",
  category: "insults",
  run: async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    const member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
message.channel.send(`${member.user.tag}, `+insulter.Insult())
  }}