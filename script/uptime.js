const os = require('os');
const pidusage = require('pidusage');

module.exports.config = {
    name: "uptime",
    version: "1.0.2",
    role: 0,
    credits: "Kylepogi",
    description: "View bot's uptime with performance stats",
    hasPrefix: false, // Remove prefix
    cooldowns: 5,
    aliases: ["uptime"]
};

function byte2mb(bytes) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0, n = parseInt(bytes, 10) || 0;
    while (n >= 1024 && ++l) n = n / 1024;
    return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
    const time = process.uptime();

    // Convert uptime to days, hours, minutes, and seconds
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time % (24 * 3600)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    const usage = await pidusage(process.pid);
    const osInfo = {
        platform: os.platform(),
        architecture: os.arch()
    };

    const timeStart = Date.now();
    const returnResult = `Hello Master! I am still alive.\n\n📡 𝗘𝗗𝗨𝗖-𝗨𝗣𝗧𝗜𝗠𝗘:
📆${days} day(s)
⏳${hours} hour(s)
⏰${minutes} minute(s)
⏱️${seconds} second(s).
💿CPU Usage: ${usage.cpu.toFixed(1)}% 
💽RAM Usage: ${byte2mb(usage.memory)}
💾Cores: ${os.cpus().length}
🌐Ping: ${Date.now() - timeStart}ms
Operating System Platform: ${osInfo.platform}
System CPU Architecture: ${osInfo.architecture}
`;

    return api.sendMessage(returnResult, event.threadID, event.messageID);
};
