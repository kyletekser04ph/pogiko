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
`LIST OF ALL COMMANDS OTHER COMMANDS IS NOT WORKING BECAUSE OF DOWN API AND ERROR INSTALLING ON RENDER

Commands:
1. accept
2. adobo [question]
3. aidetect
4. ashley [question]
5. ask [question]
6. autoseen
7. bard [question]
8. bible
9. billboard
10. blackbox [question]
11. blue [question]
12. bot2 [question on image]
13. codegpt [question on code]
14. codm
15. confess 
16. count
17. dictionary [question]
18. element [question]
19. emojimix
20. gemini [question on image]
21. gemma [question]
22. gen
23. gf 
24. goiadminn
25. gpt3 [question]
26. gpt4 [question]
27. hack
28. help
29. hercai [question]
30. img4
31. imgur
32. insult
33. juno [question on science]
34. kickall
35. leave
36. liner [question]
37. listbox
38. listfriends
39. llma [question]
40. meta [question]
41. google
42. mixtral [question]
43. morphic [question]
44. music [search music]
45. noti
46. npm
47. offbot
48. out
49. outall
50. owner
51. pinterest
52. poli
53. pyg
54. quote
55. recipe
56. remini
57. removebg
58. restart
59. reverse
60. riddle
61. rizz
62. say
63. shoti
64. sing
65. stalk
66. tempm
67. tiksr
68. tiktok [search]
69. tikurl [download using url]
70. token
71. trans [question]
72. uid
73. unsend
74. uptime
75. wiki [question]
76. wizard [question]

Events:
1. randomReact

https://autobot-wwbg.onrender.com`;

        api.sendMessage(helpText, threadID, messageID);
    } catch (error) {
        api.sendMessage(
            "An error occurred while processing your request. Please try again later.",
            event.threadID,
            messageID
        );
    }
};
