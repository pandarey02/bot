const Discord = require('discord.js');
const config = require('./config.json');
const prefix = config.prefix;
const client = new Discord.Client();
const embed = new Discord.MessageEmbed({
    title: 'WERYFIKACJA',
    description: 'Aby odblokować podstawowe uprawnienia użytkownika które pozwolą ci między innymi pisać na kanale #general,\n' +
        'pozostaw reakcje weryfikacji jeśli zapoznałeś się z naszym regulaminem.',

}).setColor(config.color);
const embed1 = new Discord.MessageEmbed({
    title: 'GENDER:',
    description: '♂ - BOY\n' +
        '♀ - GIRL',

}).setColor(config.color);
const embed2 = new Discord.MessageEmbed({
    title: 'GAMES:',
    description: '🧡 - CS:GO\n' +
        ' 🤎 - Hurtworld\n' +
        ' 🤍 - Valorant\n' +
        ' 💚 - Minecraft\n' +
        ' 💙 - League of Legends\n' +
        ' 🐲 - ARK\n' +
        ' ❤ - Metin2',

}).setColor(config.color);
const embed3 = new Discord.MessageEmbed({
    title: 'REGION:',
    description: '🐶 - Dolnośląskie\n' +
        '🐱 - Kujawsko-Pomorskie\n' +
        '🐭 - Lubelskie\n' +
        '🐹 - Lubuskie\n' +
        '🐰 - Łódzkie\n' +
        '🦊 - Małopolskie\n' +
        '🐻 - Opolskie\n' +
        '🐼 - Podkarpackie\n' +
        '🐨 - Podlaskie\n' +
        '🐯 - Pomorskie\n' +
        '🦁 - Śląskie\n' +
        '🐮 - Świętokrzyskie\n' +
        '🐷 - Warmińsko-Mazurskie\n' +
        '🐸 - Wielkopolskie\n' +
        '🐵 - Zachodniopomorskie\n' +
        '🐔 - Mazowieckie',

}).setColor(config.color);
const embed4 = new Discord.MessageEmbed({
    title: 'AGE:',
    description: '🇦 - 5-10\n' +
        '🇧 - 10-12\n' +
        '🇨 - 12-14\n' +
        '🇩 - 14-16\n' +
        '🇪 - 16-18\n' +
        '🇫 - 18-20\n' +
        '🇬 - 20-25\n' +
        '🇭 - 25-30\n' +
        '🇮 - 30+'

}).setColor(config.color);

function update_stat(){
  client.channels.cache.get('754690670014496808').setName(`MEMBERS:${client.guilds.cache.get('753310847635292250').memberCount}`)
  .then(newChannel => console.log(`${client.guilds.cache.get('753310847635292250').memberCount}:MEMBERS`))
  .catch(console.error);
};

client.login(config.token).catch(console.error);

client.on('ready', () => {
    console.log('[INFO] BOT IS ONLINE');
    client.channels.cache.get('829757242726154240').messages.fetch({ limit: 100 }).then(messages => {
console.log(`[INFO] Received ${messages.size} messages`);
});
client.channels.cache.get('829757126960087060').messages.fetch({ limit: 100 }).then(messages => {
console.log(`[INFO] Received ${messages.size} messages`);
});
});

client.on('guildMemberAdd', async (member) => {
  const welcome = new Discord.MessageEmbed({
    title: `${member.displayName}`,
    description: `Witaj na serwerze, Jesteś naszym **${client.guilds.cache.get('753310847635292250').memberCount}** użytkownikiem.\n` +
    `Zapoznaj się z <#829757242726154240>`,
    thumbnail: {url:'https://cdn.discordapp.com/attachments/555483604910866444/873289514800541797/biggames.png'},
    color: `${config.color}`,
}).setFooter(`BigGames ∙ Dziś o ${new Date().toLocaleTimeString()}`);
client.channels.cache.get('753310847635292252').send(welcome);
update_stat();
});

client.on('guildMemberRemove', async (member) => {
update_stat();
});

client.on('messageReactionAdd', async (reactionReaction, user) => {

    var message = reactionReaction.message;
    var member = message.guild.members.cache.get(user.id);
    if (member.user.bot) return;
    if (message.channel.id === '829757242726154240' || '829757126960087060') {
        switch (reactionReaction.emoji.name) {
            case '✅':
                member.roles.add(message.guild.roles.cache.get('761681820735373322')).catch(console.error);
                break;
            case '♂':
                member.roles.add(message.guild.roles.cache.get('772560917690974259')).catch(console.error);
                break;
            case '♀':
                member.roles.add(message.guild.roles.cache.get('772561048754323539')).catch(console.error);
                break;
            case '🧡':
                member.roles.add(message.guild.roles.cache.get('772561139816202260')).catch(console.error);
                break;
            case '🤎':
                member.roles.add(message.guild.roles.cache.get('772561188402888746')).catch(console.error);
                break;
            case '🤍':
                member.roles.add(message.guild.roles.cache.get('772561189380423681')).catch(console.error);
                break;
            case '💚':
                member.roles.add(message.guild.roles.cache.get('772561190571737098')).catch(console.error);
                break;
            case '💙':
                member.roles.add(message.guild.roles.cache.get('772561191897399306')).catch(console.error);
                break;
            case '🐲':
                member.roles.add(message.guild.roles.cache.get('772561192924610560')).catch(console.error);
                break;
            case '❤':
                member.roles.add(message.guild.roles.cache.get('772561193696493568')).catch(console.error);
                break;
// Region
            case '🐶':
                member.roles.add(message.guild.roles.cache.get('772561356820840479')).catch(console.error);
                break;
            case '🐱':
                member.roles.add(message.guild.roles.cache.get('772561360529784913')).catch(console.error);
                break;
            case '🐭':
                member.roles.add(message.guild.roles.cache.get('772561361666441237')).catch(console.error);
                break;
            case '🐹':
                member.roles.add(message.guild.roles.cache.get('772561363377324092')).catch(console.error);
                break;
            case '🐰':
                member.roles.add(message.guild.roles.cache.get('772561364077903882')).catch(console.error);
                break;
            case '🦊':
                member.roles.add(message.guild.roles.cache.get('772561599059329035')).catch(console.error);
                break;
            case '🐻':
                member.roles.add(message.guild.roles.cache.get('772561600100040724')).catch(console.error);
                break;
            case '🐼':
                member.roles.add(message.guild.roles.cache.get('772561601848016896')).catch(console.error);
                break;
            case '🐨':
                member.roles.add(message.guild.roles.cache.get('772561602489876500')).catch(console.error);
                break;
            case '🐯':
                member.roles.add(message.guild.roles.cache.get('772561603261366333')).catch(console.error);
                break;
            case '🦁':
                member.roles.add(message.guild.roles.cache.get('772561604155408405')).catch(console.error);
                break;
            case '🐮':
                member.roles.add(message.guild.roles.cache.get('772561605031362570')).catch(console.error);
                break;
            case '🐷':
                member.roles.add(message.guild.roles.cache.get('772561605417762870')).catch(console.error);
                break;
            case '🐸':
                member.roles.add(message.guild.roles.cache.get('772561606278250518')).catch(console.error);
                break;
            case '🐵':
                member.roles.add(message.guild.roles.cache.get('772562008289574962')).catch(console.error);
                break;
            case '🐔':
                member.roles.add(message.guild.roles.cache.get('772562012265775125')).catch(console.error);
                break;
//Age
            case '🇦':
                member.roles.add(message.guild.roles.cache.get('772562039158603856')).catch(console.error);
                break;
            case '🇧':
                member.roles.add(message.guild.roles.cache.get('772562040053170176')).catch(console.error);
                break;
            case '🇨':
                member.roles.add(message.guild.roles.cache.get('772562200236785682')).catch(console.error);
                break;
            case '🇩':
                member.roles.add(message.guild.roles.cache.get('772562201042092033')).catch(console.error);
                break;
            case '🇪':
                member.roles.add(message.guild.roles.cache.get('772562202112163870')).catch(console.error);
                break;
            case '🇫':
                member.roles.add(message.guild.roles.cache.get('772562270215471134')).catch(console.error);
                break;
            case '🇬':
                member.roles.add(message.guild.roles.cache.get('772562274170830868')).catch(console.error);
                break;
            case '🇭':
                member.roles.add(message.guild.roles.cache.get('772562367921651744')).catch(console.error);
                break;
            case '🇮':
                member.roles.add(message.guild.roles.cache.get('772562386141184010')).catch(console.error);
                break;
        }
    }});

client.on('messageReactionRemove', async (reactionReaction, user) => {

    var message = reactionReaction.message;
    var member = message.guild.members.cache.get(user.id);
    if (member.user.bot) return;

    if (message.channel.id === 829757242726154240 || 829757126960087060) {
        switch (reactionReaction.emoji.name) {
            case '✅':
                member.roles.remove(message.guild.roles.cache.get('761681820735373322')).catch(console.error);
                break;
            case '♂':
                member.roles.remove(message.guild.roles.cache.get('772560917690974259')).catch(console.error);
                break;
            case '♀':
                member.roles.remove(message.guild.roles.cache.get('772561048754323539')).catch(console.error);
                break;
            case '🧡':
                member.roles.remove(message.guild.roles.cache.get('772561139816202260')).catch(console.error);
                break;
            case '🤎':
                member.roles.remove(message.guild.roles.cache.get('772561188402888746')).catch(console.error);
                break;
            case '🤍':
                member.roles.remove(message.guild.roles.cache.get('772561189380423681')).catch(console.error);
                break;
            case '💚':
                member.roles.remove(message.guild.roles.cache.get('772561190571737098')).catch(console.error);
                break;
            case '💙':
                member.roles.remove(message.guild.roles.cache.get('772561191897399306')).catch(console.error);
                break;
            case '🐲':
                member.roles.remove(message.guild.roles.cache.get('772561192924610560')).catch(console.error);
                break;
            case '❤':
                member.roles.remove(message.guild.roles.cache.get('772561193696493568')).catch(console.error);
                break;
// Region
            case '🐶':
                member.roles.remove(message.guild.roles.cache.get('772561356820840479')).catch(console.error);
                break;
            case '🐱':
                member.roles.remove(message.guild.roles.cache.get('772561360529784913')).catch(console.error);
                break;
            case '🐭':
                member.roles.remove(message.guild.roles.cache.get('772561361666441237')).catch(console.error);
                break;
            case '🐹':
                member.roles.remove(message.guild.roles.cache.get('772561363377324092')).catch(console.error);
                break;
            case '🐰':
                member.roles.remove(message.guild.roles.cache.get('772561364077903882')).catch(console.error);
                break;
            case '🦊':
                member.roles.remove(message.guild.roles.cache.get('772561599059329035')).catch(console.error);
                break;
            case '🐻':
                member.roles.remove(message.guild.roles.cache.get('772561600100040724')).catch(console.error);
                break;
            case '🐼':
                member.roles.remove(message.guild.roles.cache.get('772561601848016896')).catch(console.error);
                break;
            case '🐨':
                member.roles.remove(message.guild.roles.cache.get('772561602489876500')).catch(console.error);
                break;
            case '🐯':
                member.roles.remove(message.guild.roles.cache.get('772561603261366333')).catch(console.error);
                break;
            case '🦁':
                member.roles.remove(message.guild.roles.cache.get('772561604155408405')).catch(console.error);
                break;
            case '🐮':
                member.roles.remove(message.guild.roles.cache.get('772561605031362570')).catch(console.error);
                break;
            case '🐷':
                member.roles.remove(message.guild.roles.cache.get('772561605417762870')).catch(console.error);
                break;
            case '🐸':
                member.roles.remove(message.guild.roles.cache.get('772561606278250518')).catch(console.error);
                break;
            case '🐵':
                member.roles.remove(message.guild.roles.cache.get('772562008289574962')).catch(console.error);
                break;
            case '🐔':
                member.roles.remove(message.guild.roles.cache.get('772562012265775125')).catch(console.error);
                break;
//Age
            case '🇦':
                member.roles.remove(message.guild.roles.cache.get('772562039158603856')).catch(console.error);
                break;
            case '🇧':
                member.roles.remove(message.guild.roles.cache.get('772562040053170176')).catch(console.error);
                break;
            case '🇨':
                member.roles.remove(message.guild.roles.cache.get('772562200236785682')).catch(console.error);
                break;
            case '🇩':
                member.roles.remove(message.guild.roles.cache.get('772562201042092033')).catch(console.error);
                break;
            case '🇪':
                member.roles.remove(message.guild.roles.cache.get('772562202112163870')).catch(console.error);
                break;
            case '🇫':
                member.roles.remove(message.guild.roles.cache.get('772562270215471134')).catch(console.error);
                break;
            case '🇬':
                member.roles.remove(message.guild.roles.cache.get('772562274170830868')).catch(console.error);
                break;
            case '🇭':
                member.roles.remove(message.guild.roles.cache.get('772562367921651744')).catch(console.error);
                break;
            case '🇮':
                member.roles.remove(message.guild.roles.cache.get('772562386141184010')).catch(console.error);
                break;
        }

    }});

client.on('message', message => {
    switch (message.content) {
        case prefix + 'init':
            if (message.member.roles.cache.has('753310989402898574')) {

              client.channels.cache.get('829757242726154240').send(embed).then(sentembed => sentembed.react('✅'));
              client.channels.cache.get('829757126960087060').send(embed1).then(sentembed1 => {
                  sentembed1.react('♂')
                  sentembed1.react('♀')
              });
              client.channels.cache.get('829757126960087060').send(embed2).then(sentembed2 => {
                  var gry = ['🧡', '🤎', '🤍', '💚', '💙', '🐲', '❤'];

                  for (var i = 0; i < gry.length; i++) {
                      sentembed2.react(gry[i]);
                  }
              });
              client.channels.cache.get('829757126960087060').send(embed3).then(sentembed3 => {
                  var region = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔'];

                  for (var i = 0; i < region.length; i++) {
                      sentembed3.react(region[i]);
                  }
              });
              client.channels.cache.get('829757126960087060').send(embed4).then(sentembed4 => {
                  var age = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮'];

                  for (var i = 0; i < age.length; i++) {
                      sentembed4.react(age[i]);
                  }
              });

            }
            else {
              console.log('[INFO] COMMAND INIT - BRAK UPRAWNIEŃ');
            }
            break;
          }

        });
