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
.setAuthor(`Bir Kullanıcının Yetkisi Belirleniyor.`)
.setDescription(`Komut Yetkilerinin Listesi:
\`🔨\` <@&${inventory.yetkilirolleri.BanRole}>
\`🔱\` <@&${inventory.yetkilirolleri.JailRole}>
\`🔊\` <@&${inventory.yetkilirolleri.VMuteRole}>
\`🔇\` <@&${inventory.yetkilirolleri.MuteRole}>
\`📝\` <@&${inventory.yetkilirolleri.RegisterRole}>
\`💎\` <@&${inventory.yetkilirolleri.AbilityRole}>
\`🔁\` <@&${inventory.yetkilirolleri.TransporterRole}>
`)
.setColor(inventory.Renk.mor)
message.channel.send(secim).then(async mesaj =>{
await mesaj.react('🔨')
await mesaj.react('🔱')
await mesaj.react('🔊')
await mesaj.react('🔇')
await mesaj.react('📝')
await mesaj.react('💎')
await mesaj.react('🔁')
const seviye1emoji = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id;
const seviye2emoji = (reaction, user) => reaction.emoji.name === '🔱' && user.id === message.author.id;
const seviye3emoji = (reaction, user) => reaction.emoji.name === '🔊' && user.id === message.author.id;
const seviye4emoji = (reaction, user) => reaction.emoji.name === '🔇' && user.id === message.author.id;
const seviye5emoji = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
const seviye6emoji = (reaction, user) => reaction.emoji.name === '💎' && user.id === message.author.id;
const seviye7emoji = (reaction, user) => reaction.emoji.name === '🔁' && user.id === message.author.id;
const seviye1 = mesaj.createReactionCollector(seviye1emoji, { time: 30000 });
const seviye2 = mesaj.createReactionCollector(seviye2emoji, { time: 30000 });
const seviye3 = mesaj.createReactionCollector(seviye3emoji, { time: 30000 });
const seviye4 = mesaj.createReactionCollector(seviye4emoji, { time: 30000 });
const seviye5 = mesaj.createReactionCollector(seviye5emoji, { time: 30000 });
const seviye6 = mesaj.createReactionCollector(seviye6emoji, { time: 30000 });
const seviye7 = mesaj.createReactionCollector(seviye7emoji, { time: 30000 });
seviye1.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.yetkilirolleri.BanRole)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.yetkilirolleri.BanRole}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.yetkilirolleri.BanRole)
const seviye1verildi = new MessageEmbed()
.setAuthor(`Selam Yeni Yargıç !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.yetkilirolleri.BanRole}> rolü verildi. 🔨`)
.setColor(inventory.Renk.Ozel1)
mesaj.edit(seviye1verildi)})

seviye2.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.yetkilirolleri.JailRole)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.yetkilirolleri.JailRole}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.yetkilirolleri.JailRole)
const seviye2verildi = new MessageEmbed()
.setAuthor(`Suçlular Doğruca Hapise !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.yetkilirolleri.JailRole}> rolü verildi. 🔱`)
.setColor(inventory.Renk.Ozel1)
mesaj.edit(seviye2verildi)})

seviye3.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.yetkilirolleri.VMuteRole)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.yetkilirolleri.VMuteRole}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.yetkilirolleri.VMuteRole)
const seviye3verildi = new MessageEmbed()
.setAuthor(`Diline Acı Biber Sürerim KarDİŞŞ DKSFOLAÖDFKOSL !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.yetkilirolleri.VMuteRole}> rolü verildi. 🔊`)
.setColor(inventory.Renk.Ozel1)
mesaj.edit(seviye3verildi)})

seviye4.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.yetkilirolleri.MuteRole)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.yetkilirolleri.MuteRole}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.yetkilirolleri.MuteRole)
const seviye4verildi = new MessageEmbed()
.setAuthor(`Sanırım Birileri Artık Küfür Edemeyecek !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.yetkilirolleri.MuteRole}> rolü verildi. 🔇`)
.setColor(inventory.Renk.Ozel2)
mesaj.edit(seviye4verildi)})

seviye5.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.yetkilirolleri.RegisterRole)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.yetkilirolleri.RegisterRole}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.yetkilirolleri.RegisterRole)
const seviye5verildi = new MessageEmbed()
.setAuthor(`isim Yaş Alayım ?`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.yetkilirolleri.RegisterRole}> rolü verildi. 📝`)
.setColor(inventory.Renk.Ozel2)
mesaj.edit(seviye5verildi)})

seviye6.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.yetkilirolleri.AbilityRole)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.yetkilirolleri.AbilityRole}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.yetkilirolleri.AbilityRole)
const seviye6verildi = new MessageEmbed()
.setAuthor(`Bu Kadar Yükü Sırtlaya Bilicek Kadar Güçlümüydün ?`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.yetkilirolleri.AbilityRole}> rolü verildi. 💎`)
.setColor(inventory.Renk.Ozel2)
mesaj.edit(seviye6verildi)})

seviye7.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.yetkilirolleri.TransporterRole)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.yetkilirolleri.TransporterRole}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.yetkilirolleri.TransporterRole)
const seviye7verildi = new MessageEmbed()
.setAuthor(`Hiç Bir Yer Sana Kitli Değil !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.yetkilirolleri.TransporterRole}> rolü verildi. 🔁`)
.setColor(inventory.Renk.Ozel3)
mesaj.edit(seviye7verildi)})
})}
exports.conf = {aliases: ['komut-yetkisi', 'komutver', 'komut-yetkilisi', 'komut-ver']}
exports.help = {name: "komut-liste"};
   