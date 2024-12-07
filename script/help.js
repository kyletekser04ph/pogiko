const axios = require("axios");

module.exports.config = {
    name: "help",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Juno",
    description: "Displays a list of all commands and events",
    usePrefix: false,
    commandCategory: "Information",
    cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
    try {
        const { messageID, threadID } = event;

        const helpText = 
`LIST OF ALL COMMANDS

Commands:
1. accept
2. adobo
3. aidetect
4. ashley
5. ask
6. autoseen
7. bard
8. besh
9. bible
10. blackbox
11. blue
12. bot2
13. codegpt
14. codm
15. confess
16. count
17. dictionary
18. element
19. emojimix
20. gemini
21. gemma
22. gen
23. gf
24. goiadminn
25. gpt3
26. gpt4
27. help
28. hercai
29. img4
30. imgur
31. insult
32. kickall
33. leave
34. liner
35. listbox
36. listfriends
37. llma
38. meta
39. miko
40. mixtral
41. morphic
42. music
43. noti
44. npm
45. obfuscate
46. offbot
47. out
48. outall
49. pastebin
50. pinterest
51. poli
52. pyg
53. quote
54. recipe
55. remini
56. removebg
57. restart
58. reverse
59. riddle
60. rizz
61. say
62. shoti
63. sing
64. stalk
65. tempm
66. tiktok
67. tiksr
68. tiktok
69. token
70. trans
71. uid
72. unsend
73. uptime
74. wiki
75. wizard

Events:
1. randomreact`;

        api.sendMessage(helpText, threadID, messageID);
    } catch (error) {
        api.sendMessage(
            "An error occurred while processing your request. Please try again later.",
            event.threadID,
            messageID
        );
    }
};
