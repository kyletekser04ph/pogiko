const { OnChat } = require('chatbox-utility');

module.exports["config"] = {
    name: "owner",
    aliases: ["owner"],
    isPrefix: false,
    info: "Owners Information",
    credits: "Kylepogi",
    cd: 5
};

module.exports["run"] = async ({ api, event }) => {
    const chat = new OnChat(api, event);

    if (!event.isGroup) return chat.reply("Response:");

    const response = "Response:\n" +
        "BOT NAME: 𝗘𝗗𝗨𝗖𝗔𝗧𝗜𝗢𝗡𝗔𝗟 𝗕𝗢𝗧\n" +
        "BOT OWNER: Kyle Bait-it\n" +
        "HOBBY: Coding, Programming\n" +
        "STATUS: I have a gf name Lie Ann\n" +
        "AGE: 20\n" +
        "SPORTS: Taekwondo,combat Taekwondo,Karate,Soccer,Sepak Takraw\n" +
        "LOCATION: Philippines\n" +
        "OWNERS LINK: https://www.facebook.com/kylepogiv20\n";

    chat.reply(response);
};
