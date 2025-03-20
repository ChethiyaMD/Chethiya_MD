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
┃◈┃• *🧬 Version*: 0.0.1 BETA
┃◈└───────────┈⊷
╰──────────────┈⊷
*┌───────────╶╶╶╾⦁⦂⦁*

╭━━━━❮ *𝚂𝚈𝚂𝚃𝙴𝙼* ❯━⊷ 
┃◇╭━━〔《*Menu List* 》〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• Quranmenu 📕
┃◈┃• Prayertime 📖
┃◈┃• Aimenu 🥏
┃◈┃• Anmiemenu 🎭
┃◈┃• Convertmenu 🔮
┃◈┃• Funmenu 🧮
┃◈┃• Bug menu 🔖
┃◈┃• Dlmenu 💴
┃◈┃• Listcmd 📚
┃◈┃• Mainmenu 🎛
┃◈┃• Groupmenu 🔘
┃◈┃• Allmenu 👾
┃◈┃• Ownermenu 🤴
┃◈┃• Othermenu 🎚
┃◈┃• xxx 🔎
┃◈┃• logo <text> 🔎
┃◈┃• News menu 📰
┃◈┃• repo 📒
┃◈└───────────┈⊷
╰──────────────┈⊷
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
