

cmd({
  pattern: "shashihyun",
  desc: "Displays a dynamic edit msg for fun.",
  category: "tools",
  react: "💘",
  filename: __filename
}, async (bot, context, args, { from, reply }) => {
  try {
    // Send initial message
    const sentMessage = await bot.sendMessage(from, { text: "💋" });

    // Array of emojis to display
    const emojis = ["🥵", "❤️", "😘", "😫", "🤤", "😋", "🥵", "🥶", "🙊", "😻", "🙈", "💋", "🫂", "🫀", "👅", "👄", "💋"];
   // const reply i_love_you_shashihyun
    // Loop through emojis and edit the message
    for (const emoji of emojis) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
      await bot.relayMessage(from, {
        protocolMessage: {
          key: sentMessage.key, // Reference the original message
          type: 14, // Indicates an edited message
          editedMessage: {
            conversation: emoji // Update the message with the new emoji
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    reply("❌ *Error!* " + error.message); // Send error message to user
  }
});
