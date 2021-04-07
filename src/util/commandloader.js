const Discord = require('discord.js')
const fs = require('fs')

const moment = require('moment')
const open = require('../open.json')
module.exports.run = (client) => {
let zaman = moment().format("HH:mm:ss")
const log = message => {
    console.log(`${zaman} | ${message}`);
};
global.commands = new Discord.Collection();
global.aliases = new Discord.Collection();
fs.readdir('./server/', (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
      if(!f.endsWith('.js'))return console.error(`${f}, Komutunun Sonu .js Olmadığı için Es Geçtim`)
        let strg = require(`../server/${f}`);
      if(!strg.help) return console.error(`${f}, Komutun => exports.help = {} <= Kısmı yok.`)
      global.commands.set(strg.help.name, strg);
        strg.help.aliases.forEach(alias => {
          global.aliases.set(alias, strg.help.name);
        });
    });
  console.log(`${global.commands.size} Komut ve ${global.aliases.size} Alternatif Komut yüklendi.`)//help
});



}
