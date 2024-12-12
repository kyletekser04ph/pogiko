const axios = require('axios');

module.exports.config = {
 name: "google",
 version: "1.0.0",
 role: 0,
 aliases: ["google"],
 credits: "cliff",
 cooldown: 0,
 hasPrefix: false,
 usage: "",
};

module.exports.run = async function ({ api, event, args }) {
 const content = encodeURIComponent(args.join(" "));

 if (!content) {
	return api.sendMessage("Please provide your query first.", event.threadID, event.messageID);
 }

 api.sendMessage("Google is searching, please wait a moment...", event.threadID, event.messageID); 

 const apiUrl = `https://api.joshweb.click/api/gemma-7b?q=${content}`;

 try {
	const response = await axios.get(apiUrl);
	const reply = response.data.reply;

	api.sendMessage(reply, event.threadID, event.messageID);
 } catch (error) {
	console.error("Error fetching data:", error.message);
	api.sendMessage("An error occurred while processing your query.", event.threadID);
 }
};
