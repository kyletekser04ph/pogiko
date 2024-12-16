const axios = require("axios");

module.exports.config = {
    name: "ai",
    version: "1.0.0",
    credits: "kylepogi",
    description: "Interact with Llama AI",
    hasPrefix: false,
    cooldown: 5,
    aliases: ["llama"]
};

module.exports.run = async function ({ api, event, args }) {
    try {
        let q = args.join(" ");
        if (!q) {
            return api.sendMessage("Missing question☹️", event.threadID, event.messageID);
        }

        const initialMessage = await new Promise((resolve, reject) => {
            api.sendMessage("please wait..", event.threadID, (err, info) => {
                if (err) return reject(err);
                resolve(info);
            });
        });

        try {
            const response = await axios.get(`https://kaiz-apis.gleeze.com/api/gpt-4o?q=${encodeURIComponent(q)}&uid=100`);
            const answer = response.data.response;

            const formattedResponse = `👨🏻‍🏫𝗘𝗗𝗨𝗖-𝗕𝗢𝗧\n࿇══━━━━✥◈✥━━━━══࿇\n${answer}\n\n𝖼𝗋𝖾𝖺𝗍𝖾𝖽 𝖻𝗒 Kyle Bait-it`;

            await api.editMessage(formattedResponse, initialMessage.messageID);
        } catch (error) {
            console.error(error);
            await api.editMessage("An error occurred while processing your request.", initialMessage.messageID);
        }
    } catch (error) {
        console.error("Error in ai2 command:", error);
        api.sendMessage("An error occurred while processing your request.", event.threadID);
    }
};
