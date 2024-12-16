module.exports.config = {
    name: "juno",
    version: "1.0.0",
    role: 0,
    credits: "hexa",
    description: "juno-ai",
    usages: "[ask]",
    cooldown: 2,
    hasPrefix: false,
};

module.exports.run = async function ({ api, event, args }) {

    const fs = require('fs');
    const axios = require('axios');

    const input = args.join(" ");
    const botID = api.getCurrentUserID();
    const botData = await api.getUserInfo(botID);
    const sender = event.type === "message_reply" ? event.messageReply.senderID : event.senderID;
    const userInfo = await api.getUserInfo(sender);
    const userName = userInfo[sender].name;
    const botName = botData[botID].name;
    const replyMessage = (event.type === "message_reply" && event.messageReply) ? event.messageReply.body : "No reply message available";
    const userMessages = event.type === "message" ? input : `${userName}: ${replyMessage}\n${input}`;

    if (input.length < 2) {
        const responses = [
            "hiiii",
            "hello"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        api.sendMessage(randomResponse, event.threadID, event.messageID);
    } else {
        try {
            const prompt = `Talk to me like a best friend who's really smart in science but still chill. Use Taglish, mix Filipino and English, so it’s easy to understand. Focus on science lang, and explain it in a way that's fun and simple. If I talk about something else, just say 'I don't know hehe' and don’t explain more. But when it comes to science, make sure I really get it and dive deep into the concepts. Your name is ${botName}.`;

            const response = await axios.get(`https://hercai.onrender.com/v3/hercai?question=${prompt}${input}`);
            const message = response.data.reply;
            api.sendMessage(message, event.threadID, event.messageID);
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
                if (error.response.status == 401 && error.response.data.error.message.startsWith("You didn't provide an API key")) {
                    api.sendMessage("API-Key is missing.", event.threadID, event.messageID);
                }
            } else {
                console.log(error.message);
                api.sendMessage(error.message, event.threadID);
            }
        }
    }
}
