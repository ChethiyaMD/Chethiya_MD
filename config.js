const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID  || "VAJIRA-MD=IC9VlBaA#JZPLJb8c25l22lG2SSYoPSMyHHhT0_5sOuPO-JPWAlA",
ALIVE_IMG: process.env.ALIVE_IMG || "url",
ALIVE_MS: process.env.ALIVE_MSG || "I'm Alive Now MD back online 😈🚀🖤 ",
};
