const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'uAk0lRaI#zbo1LQ8IFkNtUihA4qcqT3iCpQb7-Y7NBjaMh1303jw', //add your session id
MONGODB: process.env.MONGODB || 'mongodb://mongo:McPSVfNkrNhTqaOOhExpUiRehdgUvYEM@trolley.proxy.rlwy.net:15431', //mongo 
 URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/b7hkxj.jpg',
MAX_SIZE: 500
};
