const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
cmd({
    pattern: "weather",
    desc: "🌤 Get weather information for a location",
    react: "🌤",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("❗ *ඕනි නගරය දක්කවපම්😩👍* . Usage: .weather [city name]");
        const apiKey = '2d61a72574c11c4f36173b627f8cb177'; 
        const city = q;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        const weather = `
🌍 *Weather Information for ${data.name}, ${data.sys.country}* 
💦 *Humidity*: ${data.main.humidity}%
☁️ *Weather*: ${data.weather[0].main}
🌫️ *Description*: ${data.weather[0].description}
💨 *Wind Speed*: ${data.wind.speed} m/s
> 🌡️ *Temperature*: ${data.main.temp}°C
> 🌡️ *Feels Like*: ${data.main.feels_like}°C
> 🌡️ *Min Temp*: ${data.main.temp_min}°C
> 🌡️ *Max Temp*: ${data.main.temp_max}°C
🔽 *Pressure*: ${data.main.pressure} hPa

> *CREDIT BY CHETHIYA MD*
`;
        return reply(weather);
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 404) {
            return reply("*🚫 City not found. නගරයෙ නම හරියට ගහපම් නැනම් තියන නගරයක් ගහපම්😓.*");
        }
        return reply("⚠️ *Caමාවෙන්න ඒ ඉල්ලීම හිතාගම්න බැරි ලෙස කෙලවුනා😓* .");
    }
});


//FOLLOW ME
