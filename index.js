const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();
client.commands = new Collection();
client.aliases = new Collection();


client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  
    console.log(`Hi, ${client.user.username} is now online! with ` + client.users.cache.size + " Users and " + client.guilds.cache.size + " Servers " + client.user.id);
    client.user.setActivity("People insulting people" ,  { type: 'WATCHING' });
        },
        //f begines here :)
 /* let onlinechannel = client.channels.cache.get("760559639338418187")
  client.on("message", async message => {
    if (!message.author.id("555064829946232832")) return
    else if (message.content === "im online rn") {
      onlinechannel.send("im online rn")
    }*/
  
client.on("message", async message => {
  
    const prefix = "!";
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.members.fetch(message)

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
        let messages;
  
    
          fs.readdir('./events/', (err, files) => {
            if (err) return console.error;
            files.forEach(file => {
                if (!file.endsWith('.js')) return;
                const evt = require(`./events/${file}`);
                let evtName = file.split('.')[0];
                console.log(`Loaded event '${evtName}'`);
                client.on(evtName, evt.bind(null, client));
            });
          });
}));

client.afk = new Map();
client.snipes = new Map();

//client.on("guildCreate", async guild => {
  //let echannel = Client.channels.cache.get(760136807617789962)
  //let fchannel = guild.channels.cache.find(
    //(fchannel) => fchannel.name === "ix7bucob6sikbbnnpv7yrbx3vrsy223tbrr6eyed-uefv8tpf"
  //);
  //console.log(echannel)
  //const embed69 = new Discord.MessageEmbed()
    //    .setTitle("New guild!")
      ///  .setColor("cyan")
        //.setDescription("SUCCES!")
    //echannel.send(embed69)
//});
/*client.on('guildCreate', guild => {
  let fchannel = message.guild.channels.cache.find(
    (fchannel) => fchannel.name === "ix7bucob6sikbbnnpv7yrbx3vrsy223tbrr6eyed-uefv8tpf"
  );
    const embed69 = new Discord.MessageEmbed()
        .setTitle("New guild!")
        .setColor("cyan")
        .setDescription("SUCCES!")
    gchannel.send(embed69)
})*/
client.login(process.env.TOKEN);