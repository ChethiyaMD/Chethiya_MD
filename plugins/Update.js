const config = require('../config');
let fs = require('fs');
const { exec } = require('child_process');
const { cmd } = require('../command');

cmd({
    pattern: "update",
    react: "👾",
    desc: "Update Repo GitHub",
    category: "system",
    use: '.update',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const repoUrl = 'https://github.com/ChethiyaMD/Chethiya_MD.git'; 
        const targetFolder = 'plugins';

        
        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder); 
        }


        const gitCommand = fs.existsSync(`${targetFolder}/.git`)
            ? `git -C ${targetFolder} pull`
            : `git clone ${repoUrl} ${targetFolder}`;


        await new Promise((resolve, reject) => {
            exec(gitCommand, (err, stdout, stderr) => {
                if (err) {
                    reject(`Git command failed: ${stderr}`);
                } else {
                    resolve(stdout);
                }
            });
        });
        var _0x38cdd2 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", " *updating system* 🖥️..."];
    const _0xca208a = {
      text: "updatein..."
}
        await conn.sendMessage(from, { text: '*✅ Update completed successfully!*' }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply(`*redeploy bot update bot throw command will be available soon`);
    }
});
