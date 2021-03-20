const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const fs = require('fs');
require('./src/util/eventLoader')(client);
const ms = require('ms');
var prefix = ayarlar.prefix;

const log = message => {console.log(`${message}`);};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./src/commands/', (err, files) => {
if (err) console.error(err);
log(`Toplam ${files.length} Destekçi Ve Komut Yükleniyor...`);
files.forEach(f => {
let props = require(`./src/commands/${f}`);
log(`BOT | ${props.help.name} Komutu Yüklendi.`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {client.aliases.set(alias, props.help.name);});});});

client.reload = command => {return new Promise((resolve, reject) => {try {delete require.cache[require.resolve(`./src/commands/${command}`)];
let cmd = require(`./src/commands${command}`);
client.commands.delete(command);
client.aliases.forEach((cmd, alias) => {if (cmd === command) client.aliases.delete(alias);});
client.commands.set(command, cmd);
cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name);});resolve();} catch (e) {reject(e);}});};

client.load = command => {return new Promise((resolve, reject) => {try {let cmd = require(`./src/commands/${command}`);
client.commands.set(command, cmd);
cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name);});resolve();} catch (e) {reject(e);}});};

client.unload = command => { return new Promise((resolve, reject) => { try {delete require.cache[require.resolve(`./src/commands/${command}`)];
let cmd = require(`./src/commands/${command}`);
client.commands.delete(command);
client.aliases.forEach((cmd, alias) => {if (cmd === command) client.aliases.delete(alias);});resolve();} catch (e) {reject(e);}});};

client.on("ready", async () => {
let botVoiceChannel = client.channels.cache.get(ayarlar.botVoiceChannelID);
if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));});

client.login(ayarlar.token);



