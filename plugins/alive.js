const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *Chethiya_MD* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *⚙️ HostName*: ${os.hostname()}
┃◈┃• *👨‍💻 Owner*: Chethiya wedasinga 
┃◈┃• *🧬 Version*: 3.0.0 BETA
┃◈└───────────┈⊷
╰──────────────┈⊷
*┌───────────╶╶╶╾⦁⦂⦁*
*┃◈┃• dog
┃◈┃• awoo
┃◈┃• garl
┃◈┃• waifu
┃◈┃• neko
┃◈┃• megnumin
┃◈┃• neko
┃◈┃• maid
┃◈┃• loli
┃◈┃• animegirl
┃◈┃• animegirl
┃◈┃• animegirl1
┃◈┃• animegirl2
┃◈┃• animegirl3
┃◈┃• animegirl4
┃◈┃• animegirl5
┃◈┃• anime1
┃◈┃• anime1
┃◈┃• anime2
┃◈┃• anime3
┃◈┃• anime4
┃◈┃• anime5
┃◈┃• animenews
┃◈┃• foxgirl
┃◈┃• naruto
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Other Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• timenow
┃◈┃• date
┃◈┃• count
┃◈┃• calculate
┃◈┃• countx
┃◈┃• flip
┃◈┃• coinflip
┃◈┃• rcolor
┃◈┃• roll
┃◈┃• fact
┃◈┃• cpp
┃◈┃• rw
┃◈┃• pair
┃◈┃• pair2
┃◈┃• pair3
┃◈┃• fancy
┃◈┃• logo <text>
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• insult
┃◈┃• save
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈┃• yts
┃◈┃• ytv
┃◈└───────────┈⊷
╰──────────────┈
┃◇ .autoview
┃◇ .autolike
┃◇ .autoreact
┃◇ .anticall
┃◇ .welcome
┃◇ .goodbye
┃◇ .antiword
┃◇ .autoaudio
┃◇ .mode
┃◇ .prefix
┃◇ .setstatusreplymsg
┃◇ .likeemoji
┃◇ .antilink
┃◇ .antidelete
┃◇ .presence
┃◇ .autobio
┃◇ .startautobio
┃◇ .vv𝟐
┃◇ .vv
╰━━━━━━━━━━━━━━━━━⊷

╭━━━━❮ *𝙶𝚁𝙾𝚄𝙿* ❯━⊷ 
┃◇ .tagadmin
┃◇ .kickall
┃◇ .groupinfo
┃◇ .poll
┃◇ .promote
┃◇ .demote
┃◇ .add
┃◇ .join
┃◇ .remove
┃◇ .left
┃◇ .unmute
┃◇ .invite
┃◇ .mute
┃◇ .getpic
┃◇ .newgroup
┃◇ .setgdesc
┃◇ .setgname
┃◇ .revoke
┃◇ .accept
┃◇ .reject
┃◇ .requests
┃◇ .admins
┃◇ .tagall
┃◇ .hidetag
┃◇ .gjid
╰━━━━━━━━━━━━━━━━━⊷

╭━━━━❮ *𝙻𝙾𝙶𝙾* ❯━⊷ 
┃◇ .galaxystyle
┃◇ .light
┃◇ .texteffect
┃◇ .sunset
┃◇ .neon
┃◇ .galaxy
┃◇ .sand
┃◇ .gold
┃◇ .beach
┃◇ .watercolor
┃◇ .gradient
┃◇ .clouds
┃◇ .papercut
┃◇ .logomaker
┃◇ .underwater
┃◇ .glowing
┃◇ .cartoon
┃◇ .deleting
┃◇ .blackpinkstyle
┃◇ .america
┃◇ .nigeria
┃◇ .typography
┃◇ .pixel
┃◇ .glow
┃◇ .glitch
┃◇ .blackpink
┃◇ .writetext
┃◇ .silver
╰━━━━━━━━━━━━━━━━━⊷

╭━━━━❮ *𝚂𝚃𝙰𝙻𝙺𝙴𝚁* ❯━⊷ 
┃◇ .github
┃◇ .npm
┃◇ .wachannel
┃◇ .igstalk
┃◇ .tiktokstalk
╰━━━━━━━━━━━━━━━━━⊷

╭━━━━❮ *𝙽𝙴𝚆𝚂* ❯━⊷ 
┃◇ .news
╰━━━━━━━━━━━━━━━━━⊷

╭━━━━❮ *𝚂𝚈𝚂𝚃𝙴𝙼* ❯━⊷ 
┃◇ .system
┃◇ .allvar
┃◇ .update
┃◇ .checkupdate
┃◇ .checkstatus
┃◇ .restart
┃◇ .reboot
┃◇ .shutdown
╰━━━━━━━━━━━━━━━━━⊷

╭━━━━❮ *𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁* ❯━⊷ 
┃◇ .toimg
┃◇ .sticker
┃◇ .currencyconvert
┃◇ .trt
┃◇ .toaudio
┃◇ .tovideo
┃◇ .toptt
┃◇ .tts
╰━━━━━━━━━━━━━━━━━⊷

╭━━━━❮ *𝚃𝙾𝙾𝙻𝚂* ❯━⊷ 
┃◇ .hd𝟐
┃◇ .calc
┃◇ .ssweb
┃◇ .ssphone
┃◇ .sspc
┃◇ .sstab
┃◇ .reverse
┃◇ .save
┃◇ .hd
┃◇ .upload
┃◇ .fancy
╰━━━━━━━━━━━━━━━━━⊷

╭━━━━❮ *𝙲𝙾𝙳𝙸𝙽𝙶* ❯━⊷ 
┃◇ .encrypt
┃◇ .decrypt
┃◇ .ebinary
┃◇ .dbinary
┃◇ .ebase
┃◇ .dbase
╰━━━━━━━━━━━━━━━━━⊷

╭━━━━❮ *𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽* ❯━⊷ 
┃◇ .bible
╰━━━━━━━━━━━━━━━━━⊷

╭━━━━❮ *𝚂𝙷𝙾𝚁𝚃𝙴𝙽* ❯━⊷ 
┃◇ .tinyurl
┃◇ .shorturl
┃◇ .cleanuri
┃◇ .isgd
┃◇ .vgd
┃◇ .tnyim
┃◇ .kutt
┃◇ .rebrandly
┃◇ .vurl
┃◇ .adfoc
┃◇ .dxyz
┃◇ .ssur
╰━━━━━━━━━━━━━━━━━⊷

╭━━━━❮ *𝚃𝙴𝙼𝙿𝙼𝙰𝙸𝙻* ❯━⊷ 
┃◇ .tempmail
┃◇ .checkmail
┃◇ .delmail
╰━━━━━━━━━━━━━━━━━⊷
╔═════════════●●►
╚ ❯
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ  chethiya wedasiga `;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/b7hkxj.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363354023106228@newsletter',
                    newsletterName: 'JawadTechX',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
