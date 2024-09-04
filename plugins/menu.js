const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "menu",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*🌸 Hi* ${pushname}

Ａｌｅｘａ Ｗｈａｔｓａｐｐ Ｂｏｔ👸🏻

_*⌛Uptime:*_  ${runtime(process.uptime())}
_*📟Ram usage:*_ _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
_*🧿HostName:*_ _${os.hostname()}_
_*🧑🏻‍💻Owner:*_ _Sadeesha Tharumin_

┌────────────
❖ *📚ALEXA ALL COMMANDS📚*
└────────────
┌────────────
❖ *📥DOWNLOAD COMMANDS📥*
│
│ ✑ _.song_
│ ✑ _.video_
│ ✑ _.fb(coming soon)_
│ ✑ _.tiktok(coming soon)_
└────────────
┌────────────
❖ *🛖MAIN COMMANDS🛖*
│
│ ✑ _.alive_
│ ✑ _.menu_
└────────────
┌────────────
❖ *⚒️Coming Soon ⚒️*
│  
│✑ _Coming Soon Another Cmd_
└─────────────

> ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ
> ᴛʜᴀɴᴋ ʏᴏᴜ ᴜꜱɪɴ ᴀʟᴇxᴀ 💗
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/z52R6XR/bg.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
