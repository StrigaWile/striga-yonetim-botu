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
const yazı = `İşlem başladı lütfen bekleyin`
message.channel.send(yazı).then(message => {
message.edit(`İşlem başarılı, ${member} üyesi görevden çekildi ! ✅ \n Lütfen yinede kullanıcının rollerini kontrol ediniz.`)})
await member.roles.remove(inventory.yetkilirolleri.üstyetki3)
await member.roles.remove(inventory.yetkilirolleri.üstyetki2)
await member.roles.remove(inventory.yetkilirolleri.üstyetki1)
await member.roles.remove(inventory.yetkilirolleri.ortayetki3)
await member.roles.remove(inventory.yetkilirolleri.ortayetki2)
await member.roles.remove(inventory.yetkilirolleri.ortayetki1)
await member.roles.remove(inventory.yetkilirolleri.altyetki3)
await member.roles.remove(inventory.yetkilirolleri.altyetki2)
await member.roles.remove(inventory.yetkilirolleri.altyetki1)
await member.roles.remove(inventory.yetkilirolleri.RegisterRole)
await member.roles.remove(inventory.yetkilirolleri.BanRole)
await member.roles.remove(inventory.yetkilirolleri.JailRole)
await member.roles.remove(inventory.yetkilirolleri.MuteRole)
await member.roles.remove(inventory.yetkilirolleri.VMuteRole)
await member.roles.remove(inventory.yetkilirolleri.AbilityRole)
}
exports.conf = {aliases: ['ys', 'yetkileri-sıfırla', 'yetkiden-al', 'yetkilerisil']}
exports.help = {name: "işibitir"};
   