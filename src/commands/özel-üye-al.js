const { MessageEmbed } = require('discord.js')
const inventory = require('../inventory/ServerConfig.json')
const conf = require('../../ayarlar.json')
exports.run = async(client, message, args) => {
let fembed = new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(inventory.Renk.kirmizi);   
let tembed = new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(inventory.Renk.yesil);
if(!message.member.roles.cache.get(inventory.st) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(fembed.setDescription(`Bu komutu kullanmak için <@&${inventory.Staff.Yetkili}> rolüne ihtiyacın var.`)).then(x => x.delete({ timeout: 6500 }));
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(fembed.setDescription(`Bir kullanıcı belirtmelisin.`)).then(x => x.delete({ timeout: 6500 }));
if(member.id === message.author.id) return message.channel.send(fembed.setDescription(`Kendin için bu komutu kullanamazsın.`)).then(x => x.delete({ timeout: 6500 }));
if(member.id === message.guild.OwnerID) return message.channel.send(fembed.setDescription(`Sunucu sahibi için bu komutu kullanamazsın.`)).then(x => x.delete({ timeout: 6500 }));
if(member.id === client.user.id) return message.channel.send(fembed.setDescription(`Bot için bu komutu kullanamazsın.`)).then(x => x.delete({ timeout: 6500 }));
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(fembed.setDescription(`Belirtilen kullanıcı sizden üst/aynı pozisyonda.`)).then(x => x.delete({ timeout: 6500 }));
let page = 1
const secim = new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Özel Üye Listesinden Hangi Rolü **Silicekseniz** Seçim Yapın
\`🌟\` <@&${inventory.Roller.müzisyen}> 
\`📚\` <@&${inventory.Roller.yazar}> 
\`📜\` <@&${inventory.Roller.şair}> 
\`🎤\` <@&${inventory.Roller.vokal}> 
\`🥁\` <@&${inventory.Roller.batarist}> 
\`🎹\` <@&${inventory.Roller.piyanist}> 
\`🗣\` <@&${inventory.Roller.beatboxer}>
\`🎸\` <@&${inventory.Roller.telliçalgılar}>
\`🎨\` <@&${inventory.Roller.ressam}>
\`✏️\` <@&${inventory.Roller.tasarım}> 
\`💻\` <@&${inventory.Roller.yazılımcı}> 
\`⚜️\` <@&${inventory.Roller.voiceaktor}> 

Bir kullanıcıya özel bir rol vermek isterseniz \`${conf.prefix}özel-üye\` komutunu kullanın.`)
.setColor(inventory.Renk.mor)
.setThumbnail(member.user.avatarURL({dynamic:true}))
message.channel.send(secim).then(async mesaj =>{
await mesaj.react('🌟') 
await mesaj.react('📚') 
await mesaj.react('📜') 
await mesaj.react('🎤') 
await mesaj.react('🥁') 
await mesaj.react('🎹') 
await mesaj.react('🗣') 
await mesaj.react('🎸') 
await mesaj.react('🎨')
await mesaj.react('✏️') 
await mesaj.react('💻') 
await mesaj.react('⚜️') 
const seviye1emoji = (reaction, user) => reaction.emoji.name === '🌟' && user.id === message.author.id;
const seviye2emoji = (reaction, user) => reaction.emoji.name === '📚' && user.id === message.author.id;
const seviye3emoji = (reaction, user) => reaction.emoji.name === '📜' && user.id === message.author.id;
const seviye4emoji = (reaction, user) => reaction.emoji.name === '🎤' && user.id === message.author.id;
const seviye5emoji = (reaction, user) => reaction.emoji.name === '🥁' && user.id === message.author.id;
const seviye6emoji = (reaction, user) => reaction.emoji.name === '🎹' && user.id === message.author.id;
const seviye7emoji = (reaction, user) => reaction.emoji.name === '🗣' && user.id === message.author.id;
const seviye8emoji = (reaction, user) => reaction.emoji.name === '🎸' && user.id === message.author.id;
const seviye9emoji = (reaction, user) => reaction.emoji.name === '🎨' && user.id === message.author.id;
const seviye10emoji = (reaction, user) => reaction.emoji.name === '✏️' && user.id === message.author.id;
const seviye11emoji = (reaction, user) => reaction.emoji.name === '💻' && user.id === message.author.id;
const seviye12emoji = (reaction, user) => reaction.emoji.name === '⚜️' && user.id === message.author.id;
const seviye1 = mesaj.createReactionCollector(seviye1emoji, { time: 30000 });
const seviye2 = mesaj.createReactionCollector(seviye2emoji, { time: 30000 });
const seviye3 = mesaj.createReactionCollector(seviye3emoji, { time: 30000 });
const seviye4 = mesaj.createReactionCollector(seviye4emoji, { time: 30000 });
const seviye5 = mesaj.createReactionCollector(seviye5emoji, { time: 30000 });
const seviye6 = mesaj.createReactionCollector(seviye6emoji, { time: 30000 });
const seviye7 = mesaj.createReactionCollector(seviye7emoji, { time: 30000 });
const seviye8 = mesaj.createReactionCollector(seviye8emoji, { time: 30000 });
const seviye9 = mesaj.createReactionCollector(seviye9emoji, { time: 30000 });
const seviye10 = mesaj.createReactionCollector(seviye10emoji, { time: 30000 });
const seviye11 = mesaj.createReactionCollector(seviye11emoji, { time: 30000 });
const seviye12 = mesaj.createReactionCollector(seviye12emoji, { time: 30000 });
seviye1.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.müzisyen)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.müzisyen}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.müzisyen)
const seviye1verildi = new MessageEmbed()
.setAuthor(`Rol Alındı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.müzisyen}> rolü alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye1verildi)})

seviye2.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.yazar)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.yazar}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.yazar)
const seviye2verildi = new MessageEmbed()
.setAuthor(`Rol Alındı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.yazar}> rolü alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye2verildi)})

seviye3.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.şair)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.şair}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.şair)
const seviye3verildi = new MessageEmbed()
.setAuthor(`Rol Alındı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.şair}> rolü alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye3verildi)})

seviye4.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.vokal)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.vokal}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.vokal)
const seviye4verildi = new MessageEmbed()
.setAuthor(`Rol Alındı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.vokal}> rolü alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye4verildi)})

seviye5.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.batarist)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.batarist}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.batarist)
const seviye5verildi = new MessageEmbed()
.setAuthor(`Rol Alındı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.batarist}> rolü alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye5verildi)})

seviye6.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.piyanist)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.piyanist}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.piyanist)
const seviye6verildi = new MessageEmbed()
.setAuthor(`Rol Alındı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.piyanist}> rolü alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye6verildi)})

seviye7.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.beatboxer)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.beatboxer}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.beatboxer)
const seviye7verildi = new MessageEmbed()
.setAuthor(`Rol Alındı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.beatboxer}> rolü alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye7verildi)})

seviye8.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.telliçalgılar)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.telliçalgılar}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.telliçalgılar)
const seviye8verildi = new MessageEmbed()
.setAuthor(`Rol Alındı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.telliçalgılar}> rolü alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye8verildi)})

seviye9.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.ressam)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.ressam}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.ressam)
const seviye9verildi = new MessageEmbed()
.setAuthor(`Rol Alındı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.ressam}> rolü alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye9verildi)})

seviye10.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.tasarım)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.tasarım}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.tasarım)
const seviye10verildi = new MessageEmbed()
.setAuthor(`Rol Alındı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.tasarım}> rolü geri alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye10verildi)})

seviye11.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.yazılımcı)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.yazılımcı}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.ressam)
const seviye11verildi = new MessageEmbed()
.setAuthor(`Rol Alındı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.yazılımcı}> rolü geri alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye11verildi)})

seviye12.on('collect', async striga => {
mesaj.reactions.removeAll()
if(!member.roles.cache.get(inventory.Roller.voiceaktor)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.voiceaktor}> rolüne sahip değil.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.remove(inventory.Roller.voiceaktor)
const seviye12verildi = new MessageEmbed()
.setAuthor(`Rol Alındı!`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.voiceaktor}> rolü geri alındı.`)
.setColor('RANDOM')
mesaj.edit(seviye12verildi)})


})}
exports.conf = {aliases: ['özel-üye-sil', 'özelal', 'özel-al']}
exports.help = {name: "özel-üye-al"};
   