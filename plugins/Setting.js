const {
  cmd,
  commands
} = require("../command");
const {
  updateEnv,
  readEnv
} = require("../lib/database");
cmd({
  'pattern': "setting",
  'alias': ["setting"],
  'desc': "settings the bot",
  'category': "owner",
  'react': '⚙',
  'filename': __filename
}, async (_0x225cd7, _0x1b391f, _0x3acdc1, {
  from: _0x11d2b2,
  isOwner: _0x439689,
  quoted: _0x548f7e,
  reply: _0x10ace8
}) => {
  if (!_0x439689) {
    return _0x10ace8("❌ You are not the owner!");
  }
  try {
    const _0x269fb7 = await _0x225cd7.sendMessage(_0x11d2b2, {
      'image': {
        'url': "https://files.catbox.moe/b7hkxj.jpg"
      },
      'caption': "\n*╭═══〘 ꜱᴇᴛᴛɪɴɢ 〙═══╮*\n\n> _𝐁𝐎𝐓 𝐖𝐎𝐑𝐊 𝐓𝐘𝐏𝐄_⤵️\n 🌎 1.1 ᴘᴜʙʟɪᴄ ᴡᴏʀᴋ\n 👤 1.2 ᴘʀɪᴠᴀᴛᴇ ᴡᴏʀᴋ\n 👥 1.3 ɢʀᴏᴜᴘ ᴏɴʟʏ ᴡᴏʀᴋ\n 🫂 1.4 ɪɴʙᴏx ᴏɴʟʏ ᴡᴏʀᴋ\n\n> _𝐀𝐔𝐓𝐎 𝐒𝐄𝐄𝐍 𝐒𝐓𝐀𝐓𝐔𝐒 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 2.1 ᴀᴜᴛᴏ ʀᴇᴀᴅ ꜱᴛᴀᴛᴜꜱ ᴏɴ\n 🚫 2.2 ᴀᴜᴛᴏ ʀᴇᴀᴅ ꜱᴛᴀᴛᴜꜱ ᴏꜰꜰ\n \n> _𝐀𝐔𝐓𝐎 𝐒𝐓𝐀𝐓𝐔𝐒 𝐑𝐄𝐏𝐋𝐘 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 3.1 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ʀᴇᴘʟʏ ᴏɴ\n 🚫 3.2 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ʀᴇᴘʟʏ ᴏꜰꜰ \n \n> _𝐀𝐔𝐓𝐎 𝐒𝐓𝐀𝐓𝐔𝐒 𝐑𝐄𝐀𝐂𝐓 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 4.1 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ʀᴇᴀᴄᴛ ᴏɴ\n 🚫 4.2 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ʀᴇᴀᴄᴛ ᴏꜰꜰ \n\n> _𝐀𝐔𝐓𝐎 𝐕𝐎𝐈𝐂𝐄 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 5.1 ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ ᴏɴ\n 🚫 5.2 ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ ᴏꜰꜰ\n\n> _𝐀𝐔𝐓𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 6.1 ᴀᴜᴛᴏ ꜱᴛɪᴄᴋᴇʀ ᴏɴ\n 🚫 6.2 ᴀᴜᴛᴏ ꜱᴛɪᴄᴋᴇʀ ᴏꜰꜰ\n\n> _𝐀𝐔𝐓𝐎 𝐑𝐄𝐏𝐋𝐘 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 7.1 ᴀᴜᴛᴏ ʀᴇᴘʟʏ ᴏɴ\n 🚫 7.2 ᴀᴜᴛᴏ ʀᴇᴘʟʏ ᴏꜰꜰ\n\n> _𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐃 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 8.1 ᴀᴜᴛᴏ ʀᴇᴀᴅ ᴍɢ ᴏɴ\n 🚫 8.2 ᴀᴜᴛᴏ ʀᴇᴀᴅ ᴍɢ ᴏꜰꜰ\n\n> _𝐀𝐔𝐓𝐎 𝐁𝐈𝐎 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 9.1 ᴀᴜᴛᴏ ʙɪᴏ ᴏɴ\n 🚫 9.2 ᴀᴜᴛᴏ ʙɪᴏ ᴏꜰꜰ\n\n> _𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐂𝐓 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 10.1 ᴀᴜᴛᴏ ʀᴇᴀᴄᴛ ᴏɴ\n 🚫 10.2 ᴀᴜᴛᴏ ʀᴇᴀᴄᴛ ᴏꜰꜰ\n\n> _𝐇𝐄𝐀𝐑𝐓 𝐑𝐄𝐀𝐂𝐓 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 11.1 ʜᴇᴀʀᴛ ʀᴇᴀᴄᴛ ᴏɴ\n 🚫 11.2 ʜᴇᴀʀᴛ ʀᴇᴀᴄᴛ ᴏꜰꜰ\n\n> _𝐎𝐖𝐍𝐄𝐑 𝐑𝐄𝐀𝐂𝐓 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 12.1 ᴏᴡɴᴇʀ ʀᴇᴀᴄᴛ ᴏɴ\n 🚫 12.2 ᴏᴡɴᴇʀ ʀᴇᴀᴄᴛ ᴏꜰꜰ\n\n> _𝐀𝐋𝐖𝐀𝐘𝐒 𝐎𝐍𝐋𝐈𝐍𝐄 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 13.1 ᴀʟᴡᴀʏꜱ ᴏɴʟɪɴᴇ ᴏɴ\n 🚫 13.2 ᴀʟᴡᴀʏꜱ ᴏɴʟɪɴᴇ ᴏꜰꜰ\n\n> _𝐀𝐋𝐖𝐀𝐘𝐒 𝐓𝐘𝐏𝐈𝐍𝐆 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 14.1 ᴀʟᴡᴀʏꜱ ᴛʏᴘɪɴɢ ᴏɴ\n 🚫 14.2 ᴀʟᴡᴀʏꜱ ᴛʏᴘɪɴɢ ᴏꜰꜰ\n\n> _𝐀𝐋𝐖𝐀𝐘𝐒 𝐑𝐄𝐂𝐎𝐑𝐃𝐈𝐍𝐆 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 15.1 ᴀʟᴡᴀʏꜱ ʀᴇᴄᴏʀᴅɪɴɢ ᴏɴ\n 🚫 15.2 ᴀʟᴡᴀʏꜱ ʀᴇᴄᴏʀᴅɪɴɢ ᴏꜰꜰ\n\n> _𝐀𝐋𝐖𝐀𝐘𝐒 𝐎𝐅𝐅𝐋𝐈𝐍𝐄 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 16.1 ᴀʟᴡᴀʏꜱ ᴏꜰꜰʟɪɴᴇ ᴏɴ\n 🚫 16.2 ᴀʟᴡᴀʏꜱ ᴏꜰꜰʟɪɴᴇ ᴏꜰꜰ\n\n> _𝐂𝐔𝐑𝐑𝐄𝐍𝐓 𝐒𝐓𝐀𝐓𝐔𝐒 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 17.1 ᴄᴜʀʀᴇɴᴛ ꜱᴛᴀᴛᴜꜱ ᴏɴ \n 🚫 17.2 ᴄᴜʀʀᴇɴᴛ ꜱᴛᴀᴛᴜꜱ ᴏꜰꜰ\n\n> _𝐁𝐀𝐃 𝐍𝐎 𝐁𝐋𝐎𝐂𝐊 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 18.1 ʙᴀᴅ ɴᴏ ʙʟᴏᴄᴋ ᴏɴ\n 🚫 18.2 ʙᴀᴅ ɴᴏ ʙʟᴏᴄᴋ ᴏꜰꜰ\n\n> _𝐀𝐍𝐓𝐈 𝐁𝐎𝐓 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 19.1 ᴀɴᴛɪ ʙᴏᴛ ᴏɴ\n 🚫 19.2 ᴀɴᴛɪ ʙᴏᴛ ᴏꜰꜰ\n\n> _𝐀𝐍𝐓𝐈 𝐂𝐀𝐋𝐋 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 20.1 ᴀɴᴛɪ ᴄᴀʟʟ ᴏɴ\n 🚫 20.2 ᴀɴᴛɪ ᴄᴀʟʟ ᴏꜰꜰ\n\n> _𝐀𝐍𝐓𝐈 𝐁𝐀𝐃 𝐖𝐎𝐑𝐃 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 21.1 ᴀɴᴛɪ ʙᴀᴅ ᴏɴ\n 🚫 22.2 ᴀɴᴛɪ ʙᴀᴅ ᴏꜰꜰ\n\n> _𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊 𝐃𝐄𝐋𝐄𝐓𝐄 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 22.1 ᴀɴᴛɪ ʟɪɴᴋ ᴅᴇʟᴇᴛᴇ ᴏɴ\n 🚫 22.2 ᴀɴᴛɪ ʟɪɴᴋ ᴅᴇʟᴇᴛᴇ ᴏꜰꜰ\n\n> _𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊 𝐑𝐄𝐌𝐎𝐕𝐄 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 23.1 ᴀɴᴛɪ ʟɪɴᴋ ʀᴇᴍᴏᴠᴇ ᴏɴ\n 🚫 23.2 ᴀɴᴛɪ ʟɪɴᴋ ʀᴇᴍᴏᴠᴇ ᴏꜰꜰ\n \n> _𝐀𝐍𝐓𝐈 𝐃𝐄𝐋𝐄𝐓𝐄 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐎𝐍/𝐎𝐅𝐅_⤵️\n ♻️ 24.1 ᴀɴᴛɪ ᴅᴇʟᴇᴛᴇ ᴍᴇꜱꜱᴀɢᴇ ᴏɴ\n 🚫 24.2 ᴀɴᴛɪ ᴅᴇʟᴇᴛᴇ ᴍᴇꜱꜱᴀɢᴇ ᴏꜰꜰ \n \n*╰═══════════════════════╯*\n\n> ᴘᴀᴡᴇʀᴇᴅ by chethiya ᴍᴅ"
    }, {
      'quoted': _0x1b391f
    });
    setTimeout(async () => {
      await _0x225cd7.sendMessage(_0x11d2b2, {
        'delete': _0x269fb7.key
      });
    }, 0x493e0);
    _0x225cd7.ev.on("messages.upsert", async _0x297b64 => {
      const _0x481efe = _0x297b64.messages[0x0];
      if (!_0x481efe.message || !_0x481efe.message.extendedTextMessage) {
        return;
      }
      const _0x187c20 = _0x481efe.message.extendedTextMessage.text.trim();
      if (_0x481efe.message.extendedTextMessage.contextInfo && _0x481efe.message.extendedTextMessage.contextInfo.stanzaId === _0x269fb7.key.id) {
        switch (_0x187c20) {
          case "1.1":
            _0x10ace8(".update MODE:public");
            _0x10ace8(".restart");
            break;
          case "1.2":
            _0x10ace8(".update MODE:private");
            _0x10ace8('.restart');
            break;
          case "1.3":
            _0x10ace8(".update MODE:group");
            _0x10ace8(".restart");
            break;
          case "1.4":
            _0x10ace8(".update MODE:inbox");
            _0x10ace8(".restart");
            break;
          case "2.1":
            _0x10ace8(".update AUTO_READ_STATUS:true");
            _0x10ace8('.restart');
            break;
          case '2.2':
            _0x10ace8(".update AUTO_READ_STATUS:false");
            _0x10ace8('.restart');
            break;
          case "3.1":
            _0x10ace8(".update AUTO_STATUS_REPLY:true");
            _0x10ace8(".restart");
            break;
          case "3.2":
            _0x10ace8(".update AUTO_STATUS_REPLY:false");
            _0x10ace8(".restart");
            break;
          case "4.1":
            _0x10ace8(".update AUTO_REACT_STATUS:true");
            _0x10ace8(".restart");
            break;
          case "4.2":
            _0x10ace8(".update AUTO_REACT_STATUS:false");
            _0x10ace8(".restart");
            break;
          case "5.1":
            _0x10ace8(".update AUTO_VOICE:true");
            _0x10ace8(".restart");
            break;
          case "5.2":
            _0x10ace8(".update AUTO_VOICE:false");
            _0x10ace8(".restart");
            break;
          case "6.1":
            _0x10ace8(".update AUTO_STICKER:true");
            _0x10ace8(".restart");
            break;
          case '6.2':
            _0x10ace8(".update AUTO_STICKER:false");
            _0x10ace8(".restart");
            break;
          case "7.1":
            _0x10ace8(".update AUTO_REPLY:true");
            _0x10ace8('.restart');
            break;
          case "7.2":
            _0x10ace8(".update AUTO_REPLY:false");
            _0x10ace8('.restart');
            break;
          case "8.1":
            _0x10ace8(".update AUTO_READ_CMD:true");
            _0x10ace8('.restart');
            break;
          case "8.2":
            _0x10ace8(".update AUTO_READ_CMD:false");
            _0x10ace8('.restart');
            break;
          case '9.1':
            _0x10ace8(".update AUTO_BIO:true");
            _0x10ace8(".restart");
            break;
          case "9.2":
            _0x10ace8(".update AUTO_BIO:false");
            _0x10ace8(".restart");
            break;
          case "10.1":
            _0x10ace8(".update AUTO_REACT:true");
            _0x10ace8(".restart");
            break;
          case "10.2":
            _0x10ace8(".update AUTO_REACT:false");
            _0x10ace8(".restart");
            break;
          case "11.1":
            _0x10ace8(".update HEART_REACT:true");
            _0x10ace8('.restart');
            break;
          case "11.2":
            _0x10ace8(".update HEART_REACT:false");
            _0x10ace8(".restart");
            break;
          case "12.1":
            _0x10ace8(".update OWNER_REACT:true");
            _0x10ace8('.restart');
            break;
          case '12.2':
            _0x10ace8(".update OWNER_REACT:false");
            _0x10ace8(".restart");
            break;
          case "13.1":
            _0x10ace8(".update ALLOWS_ONLINE:true");
            _0x10ace8(".restart");
            break;
          case "13.2":
            _0x10ace8(".update ALLOWS_ONLINE:false");
            _0x10ace8(".restart");
            break;
          case "14.1":
            _0x10ace8(".update ALWAYS_TYPING:true");
            _0x10ace8('.restart');
            break;
          case "14.2":
            _0x10ace8(".update ALWAYS_TYPING:false");
            _0x10ace8('.restart');
            break;
          case "15.1":
            _0x10ace8(".update ALWAYS_RECORDING:true");
            _0x10ace8(".restart");
            break;
          case "15.2":
            _0x10ace8(".update ALWAYS_RECORDING:false");
            _0x10ace8(".restart");
            break;
          case "16.1":
            _0x10ace8(".update ALLWAYS_OFFLINE:true");
            _0x10ace8(".restart");
            break;
          case "16.2":
            _0x10ace8(".update ALLWAYS_OFFLINE:false");
            _0x10ace8(".restart");
            break;
          case '17.1':
            _0x10ace8(".update CURRENT_STATUS:true");
            _0x10ace8(".restart");
            break;
          case "17.2":
            _0x10ace8(".update CURRENT_STATUS:false");
            _0x10ace8(".restart");
            break;
          case "18.1":
            _0x10ace8(".update BAD_NO_BLOCK:true");
            _0x10ace8(".restart");
            break;
          case "18.2":
            _0x10ace8(".update BAD_NO_BLOCK:false");
            _0x10ace8(".restart");
            break;
          case "19.1":
            _0x10ace8(".update ANTI_BOT:true");
            _0x10ace8(".restart");
            break;
          case "19.2":
            _0x10ace8(".update ANTI_BOT:false");
            _0x10ace8(".restart");
            break;
          case '20.1':
            _0x10ace8(".update ANTI_CALL:true");
            _0x10ace8(".restart");
            break;
          case "20.2":
            _0x10ace8(".update ANTI_CALL:false");
            _0x10ace8(".restart");
            break;
          case "21.1":
            _0x10ace8(".update ANTI_BAD:true");
            _0x10ace8(".restart");
            break;
          case "21.2":
            _0x10ace8(".update ANTI_BAD:false");
            _0x10ace8(".restart");
            break;
          case "22.1":
            _0x10ace8(".update ANTI_LINK:true");
            _0x10ace8(".restart");
            break;
          case "22.2":
            _0x10ace8(".update ANTI_LINK:false");
            _0x10ace8(".restart");
            break;
          case "23.1":
            _0x10ace8(".update ANTI_LINKK:true");
            _0x10ace8(".restart");
            break;
          case "23.2":
            _0x10ace8(".update ANTI_LINKK:false");
            _0x10ace8('.restart');
            break;
          case "24.1":
            _0x10ace8(".update DELETEMSGSENDTO:true");
            _0x10ace8(".restart");
            break;
          case '24.2':
            _0x10ace8(".update DELETEMSGSENDTO:false");
            _0x10ace8(".restart");
            break;
          default:
            _0x10ace8("Invalid option. Please select a valid option🔴");
        }
        setTimeout(async () => {
          await _0x225cd7.sendMessage(_0x11d2b2, {
            'delete': _0x481efe.key
          });
        }, 0x7d0);
      }
    });
  } catch (_0x38fb5e) {
    console.error(_0x38fb5e);
    await _0x225cd7.sendMessage(_0x11d2b2, {
      'react': {
        'text': '⚙',
        'key': _0x1b391f.key
      }
    });
    _0x10ace8("An error occurred while processing your request.");
  }
});
