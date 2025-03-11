const { cmd } = require("../command");
const yts = require("yt-search");
const path = require("path");
const axios = require('axios');
const fs = require("fs");

cmd({
  pattern: "play2",
  react: '🎵',
  desc: "Download audio from YouTube by searching for keywords.",
  category: "music",
  use: ".play2 <song name or keywords>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const searchQuery = args.join(" ");
    if (!searchQuery) {
      return reply("*Please provide a song name or keywords to search for.*");
    }

    reply("*🎧 Searching for the song...*");

    // Perform the search
    const searchResults = await yts(searchQuery);
    if (!searchResults.videos || searchResults.videos.length === 0) {
      return reply(`❌ No results found for "${searchQuery}".`);
    }

    const firstResult = searchResults.videos[0];
    const videoUrl = firstResult.url;

    // Call the API to download the audio
    const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${videoUrl}`;
    const response = await axios.get(apiUrl);
    if (!response.data.success) {
      return reply(`❌ Failed to fetch audio for "${searchQuery}".`);
    }

    const { title, download_url } = response.data.result;

    // Send the audio file
    await conn.sendMessage(from, {
      audio: { url: download_url },
      mimetype: 'audio/mp4',
      ptt: false
    }, { quoted: mek });

  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});

// play5

cmd({
  pattern: "play5",
  react: '🎵',
  desc: "Download audio from YouTube by searching for keywords.",
  category: "music",
  use: ".play3 <song name or keywords>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const searchQuery = args.join(" ");
    if (!searchQuery) {
      return reply("*Please provide a song name or keywords to search for.*");
    }

    reply("*🎧 Searching for the song...*");

    // Perform the search
    const searchResults = await yts(searchQuery);
    if (!searchResults.videos || searchResults.videos.length === 0) {
      return reply(`❌ No results found for "${searchQuery}".`);
    }

    const firstResult = searchResults.videos[0];
    const videoUrl = firstResult.url;

    // Call the API to fetch audio details
    const apiUrl = `https://api.davidcyriltech.my.id/youtube/mp3?url=${videoUrl}`;
    const response = await axios.get(apiUrl);
    if (!response.data.success) {
      return reply(`❌ Failed to fetch audio for "${searchQuery}".`);
    }

    const { title, downloadUrl } = response.data.result;

    // Send the audio file
    await conn.sendMessage(from, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mp4',
      ptt: false
    }, { quoted: mek });

  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});

// video2

cmd({
  pattern: "video2",
  react: '🎬',
  desc: "Download video from YouTube by searching for keywords.",
  category: "media",
  use: ".video <keywords>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const searchQuery = args.join(" ");
    if (!searchQuery) {
      return reply("*Please provide a video title or keywords to search for.*");
    }

    reply("*🎬 Searching for the video...*");

    // Perform the search
    const searchResults = await yts(searchQuery);
    if (!searchResults.videos || searchResults.videos.length === 0) {
      return reply(`❌ No results found for "${searchQuery}".`);
    }

    const firstResult = searchResults.videos[0];
    const videoUrl = firstResult.url;

    // Call the API to fetch video details
    const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp4?url=${videoUrl}`;
    const response = await axios.get(apiUrl);
    if (!response.data.success) {
      return reply(`❌ Failed to fetch video for "${searchQuery}".`);
    }

    const { title, download_url } = response.data.result;

    // Send the video file
    await conn.sendMessage(from, {
      video: { url: download_url },
      mimetype: 'video/mp4',
      caption: title
    }, { quoted: mek });

  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});

// apk down

cmd({
  pattern: "apk2",
  react: "📥",
  desc: "Download APK files for Android apps.",
  category: "tools",
  use: ".apk <appName>",
  filename: __filename,
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const appName = args.join(" ");
    if (!appName) {
      return reply("*Please provide the name of the app to download.*");
    }

    reply(`*🔍 Searching for APK of "${appName}"...*`);

    // API request
    const apiUrl = `https://api.giftedtech.web.id/api/download/apkdl?apikey=gifted&appName=${encodeURIComponent(appName)}`;
    const response = await axios.get(apiUrl);

    if (!response.data.success) {
      return reply(`❌ Failed to fetch APK for "${appName}".`);
    }

    const { appname, appicon, developer, download_url, mimetype } = response.data.result;

    // Download APK file locally
    const apkPath = path.resolve(__dirname, `${appname}.apk`);
    const apkFile = await axios({
      url: download_url,
      method: "GET",
      responseType: "stream",
    });
    const writer = fs.createWriteStream(apkPath);
    apkFile.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    // Send the APK file as a document
    await conn.sendMessage(
      from,
      {
        document: { url: apkPath },
        mimetype,
        fileName: `${appname}.apk`,
        caption: `*📱 App Name:* ${appname}\n*👨‍💻 Developer:* ${developer}\n*🔗 Downloaded via Jawad TechX 💜*`,
        jpegThumbnail: appicon
          ? await axios({ url: appicon, responseType: "arraybuffer" }).then(res => res.data).catch(() => null)
          : null,
        contextInfo: {
          mentionedJid: [mek.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363354023106228@newsletter",
            newsletterName: "JawadTechX",
            serverMessageId: 143,
          },
        },
      },
      { quoted: mek }
    );

    // Delete the local APK file after sending
    fs.unlinkSync(apkPath);
  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});

// video 5

cmd({
  pattern: "video5",
  react: '🎥',
  desc: "Download MP4 video from YouTube by searching for video names.",
  category: "video",
  use: ".play8 <video name>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const videoName = args.join(" ");
    if (!videoName) {
      return reply("*Please provide a video name to search for.*");
    }

    reply("*🎥 Searching for the video...*");

    // Search for the video on YouTube
    const searchResults = await yts(videoName);
    if (!searchResults.videos || searchResults.videos.length === 0) {
      return reply(`❌ No results found for "${videoName}".`);
    }

    const firstResult = searchResults.videos[0];
    const videoUrl = firstResult.url;

    // Call the API to download the video
    const apiUrl = `https://api.giftedtech.web.id/api/download/dlmp4?apikey=gifted&url=${encodeURIComponent(videoUrl)}`;
    const response = await axios.get(apiUrl);

    if (!response.data.success) {
      return reply(`❌ Failed to fetch video for "${videoName}".`);
    }

    const { download_url } = response.data.result;

    // Send the video file
    await conn.sendMessage(from, {
      video: { url: download_url },
      mimetype: 'video/mp4',
      caption: response.data.result.title
    }, { quoted: mek });

  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});

// fb2

cmd({
  pattern: "fb2",
  react: '🎬',
  desc: "Download video from Facebook by URL.",
  category: "media",
  use: ".facebookdl <facebook video URL>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const url = args[0];
    if (!url) {
      return reply("*Please provide a Facebook video URL.*");
    }

    reply("*🎬 Fetching video from Facebook...*");

    // Call the API to fetch video details
    const apiUrl = `https://api.giftedtech.web.id/api/download/facebook?apikey=gifted&url=${encodeURIComponent(url)}`;
    const response = await axios.get(apiUrl);

    if (!response.data.success) {
      return reply(`❌ Failed to fetch video from Facebook.`);
    }

    const { hd_video, sd_video, title } = response.data.result;

    // Send HD or SD video file
    const videoUrl = hd_video || sd_video;
    await conn.sendMessage(from, {
      video: { url: videoUrl },
      mimetype: 'video/mp4',
      caption: title
    }, { quoted: mek });

  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});

// tinyurl

cmd({
  pattern: "tinyurl",
  react: '🔗',
  desc: "Generate a TinyURL from a long URL.",
  category: "tools",
  use: ".tinyurl <long URL>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const longUrl = args[0];
    if (!longUrl) {
      return reply("*Please provide a long URL to shorten.*");
    }

    reply("*🔗 Generating TinyURL...*");

    // Call the API to generate the TinyURL
    const apiUrl = `https://api.giftedtech.web.id/api/tools/tinyurl?apikey=gifted&url=${encodeURIComponent(longUrl)}`;
    const response = await axios.get(apiUrl);

    if (!response.data.success) {
      return reply(`❌ Failed to generate TinyURL.`);
    }

    const { result } = response.data;

    // Send the TinyURL
    await reply(`Here's your TinyURL: ${result}`);

  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});
