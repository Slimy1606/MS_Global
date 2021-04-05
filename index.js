const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const db = require('quick.db');
const config = require("./config.json");

//STARTING BOT

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  //usage m?help

  if (command === "help") {
    const embedhelp = new Discord.MessageEmbed()
    .setTitle('**Help**')
    .setDescription('**Benutze m?global <#channel> um einen Global Chat zu registrieren!**')
    .setColor(0x00b8ff)
    .setFooter(`Bot von Slimy#1606 | Command ausgeführt von ${message.author.tag}`)
    message.channel.send(embedhelp);
  }

  //usage m?mute <id>

  //usage m?global <#channel>
  
  if (command === "global") {
    const channel = message.mentions.channels.first();
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Du brauchst die Permission "MANAGE GUILD" um einen Global Chat zu registrieren!`)
    if (!channel)
      return message.channel.send(
        "Bitte gebe an welchen Channel du als Global Chat registrieren möchtest!"
      );
    db.set(`g_${message.guild.id}`, `${channel.id}`);
    message.channel.send(`${channel} wurde als Global Chat registriert!`);
  }
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix)) return;
  if (message.content.startsWith('https')) return;
  if (message.content.startsWith('http')) return;
  let set = db.fetch(`g_${message.guild.id}`);
  if (message.channel.id === set) {

    if (message.author.id == '599536482436382721') {
      const embed1 = new Discord.MessageEmbed()
      .setTitle('**👑| Inhaber**')
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .addField(`${message.author.tag}`, `${message.content}`)
      .addField("⠀", "[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=809329918097883176&permissions=8&scope=bot) | [Support Server](https://discord.gg/C8aPdSGFw9)")
      .setFooter(`Gesendet von ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
      .setColor(0xff0606)
      message.delete();
    client.guilds.cache.forEach(g => {
      try {
    client.channels.cache.get(db.fetch(`g_${g.id}`)).send(embed1);
    } catch (e) {
      return;
    }
  });

}else if (message.author.id == '613807233830092800') {
    const embed5 = new Discord.MessageEmbed()
    .setTitle('**⭐| Admin**')
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .addField(`${message.author.tag}`, `${message.content}`)
    .addField("⠀", "[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=809329918097883176&permissions=8&scope=bot) | [Support Server](https://discord.gg/C8aPdSGFw9)")
    .setFooter(`Gesendet von ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
    message.delete();
  client.guilds.cache.forEach(g => {
    try {
  client.channels.cache.get(db.fetch(`g_${g.id}`)).send(embed5);
  } catch (e) {
    return;
  }
});

   }else if (message.author.id == '627212008839970817') {
    const embed2 = new Discord.MessageEmbed()
    .setTitle('**👑| Inhaber**')
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .addField(`${message.author.tag}`, `${message.content}`)
      .addField("⠀", "[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=809329918097883176&permissions=8&scope=bot) | [Support Server](https://discord.gg/C8aPdSGFw9)")
      .setFooter(`Gesendet von ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
      .setColor(0xff0606)
    message.delete();
  client.guilds.cache.forEach(g => {
    try {
  client.channels.cache.get(db.fetch(`g_${g.id}`)).send(embed2);
  } catch (e) {
    return;
  }
});

}else if (message.author.id == '803947967542853632') {
  const embed2 = new Discord.MessageEmbed()
  .setTitle('**👑| Inhaberin**')
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .addField(`${message.author.tag}`, `${message.content}`)
    .addField("⠀", "[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=809329918097883176&permissions=8&scope=bot) | [Support Server](https://discord.gg/C8aPdSGFw9)")
    .setFooter(`Gesendet von ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
    .setColor(0xff0606)
  message.delete();
client.guilds.cache.forEach(g => {
  try {
client.channels.cache.get(db.fetch(`g_${g.id}`)).send(embed2);
} catch (e) {
  return;
}
});

   }else if (message.author.id == '673407395174547537') {
    const embed4 = new Discord.MessageEmbed()
    .setTitle('**⚡| Helfer**')
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .addField(`${message.author.tag}`, `${message.content}`)
    .addField("⠀", "[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=809329918097883176&permissions=8&scope=bot) | [Support Server](https://discord.gg/C8aPdSGFw9)")
    .setFooter(`Gesendet von ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
    .setColor(0xffe200)
    message.delete();
  client.guilds.cache.forEach(g => {
    try {
  client.channels.cache.get(db.fetch(`g_${g.id}`)).send(embed4);
  } catch (e) {
    return;
  }
});

  }else if (message.author.id == '638660829356621874') {
    const embed6 = new Discord.MessageEmbed()
    .setTitle('**👥| Freund**')
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .addField(`${message.author.tag}`, `${message.content}`)
    .addField("⠀", "[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=809329918097883176&permissions=8&scope=bot) | [Support Server](https://discord.gg/C8aPdSGFw9)")
    .setFooter(`Gesendet von ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
    .setColor(0x00ff61)
    message.delete();
  client.guilds.cache.forEach(g => {
    try {
  client.channels.cache.get(db.fetch(`g_${g.id}`)).send(embed6);
  } catch (e) {
    return;
  }
});

}else if (message.author.id == '812062541080952842') {
  const embed6 = new Discord.MessageEmbed()
  .setTitle('**👥| Freund**')
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
  .addField(`${message.author.tag}`, `${message.content}`)
  .addField("⠀", "[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=809329918097883176&permissions=8&scope=bot) | [Support Server](https://discord.gg/C8aPdSGFw9)")
  .setFooter(`Gesendet von ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
  .setColor(0x00ff61)
  message.delete();
client.guilds.cache.forEach(g => {
  try {
client.channels.cache.get(db.fetch(`g_${g.id}`)).send(embed6);
} catch (e) {
  return;
}
});

}else {
    const embed3 = new Discord.MessageEmbed()
    .setTitle('**👤| User**')
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .addField(`${message.author.tag}`, `${message.content}`)
    .addField("⠀", "[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=809329918097883176&permissions=8&scope=bot) | [Support Server](https://discord.gg/C8aPdSGFw9)")
    .setFooter(`Gesendet von ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
    .setColor(0x8d00ff)
    message.delete();
  client.guilds.cache.forEach(g => {
    try {
  client.channels.cache.get(db.fetch(`g_${g.id}`)).send(embed3);
  } catch (e) {
    return;
  }
 });
}
  
  }
});

client.login(config.token);
