module.exports.config = {
    name: "confess",
    version: "1.0.7",
    role: 0,
    credits: "Juno",
    description: "Confess a message to a user.",
    hasPermission: 0,
    commandCategory: "Confess",
    usages: "confess [userID] [message]",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
    const { threadID, messageID } = event;
    const idbox = args[0];
    const reason = args.slice(1).join(" ");

    if (!idbox || !reason) {
        return api.sendMessage("Syntax error, use: confess [userID] [message]", threadID, messageID);
    }

    try {
        api.sendMessage(
            `Someone bot user has confessed on you, here is the confess message: \n\n${reason}`,
            idbox,
            () => api.sendMessage(`Sent message: ${reason}`, threadID, messageID)
        );
    } catch (error) {
        console.error("Error sending confess message:", error);
        api.sendMessage("An error occurred while sending the confess message. Please try again.", threadID, messageID);
    }
};