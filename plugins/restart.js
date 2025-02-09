const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!Owner) return 
const {exec} = require("child_process")
reply("LODEING 🪢...")
reply("restarting📶©️...")
reply("*❖╭─────────────···▸*",
"> *TIME🏷* : 10 hours, 53 minutes, 21 seconds",
"> *RAM USE🧬🪢* : 103.21MB / 63276MB🚀",
"> NAME BOT©️: *🤴MD Chethiya*",
"> *OWNER*🤴: *wa.me/94702484047*",
"> *CREATOR👨🏻‍🔧* : *🏷 MD ( chethiya wedasinga )*",
"> *VERSIONS🛡* :1.200.0v")",
reply("MD_CHETHIYA_00 restarting Don 🗃🛡...") 
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
