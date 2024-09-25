const config = require('../config')
const {cmd , commands} = require('../command')
const os = require('os')
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*Hi 🍄* ${pushname}

┌────────────────
│❖ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
│❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
│❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
│❖ *ᴏᴡɴᴇʀ :* _Sadeesha Tharumin_
└────────────────

*I'm Alive Now 👸🏻*

┌────────────────
│ _*Alexa Official Web Site*_
│ https://sadiyamin.github.io/|||Test
└────────────────
┌────────────────
│ _*Alexa Github Repo*_
│ http://github.com/sadiyamin/Alexa 
└────────────────
┌────────────────
│ _*Alexa Public Group*_
│ https://chat.whatsapp.com/Ci5mDk9zEVF95NcuqEtzl4
└────────────────

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ  🧑🏻‍💻*
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/z52R6XR/bg.jpg`},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})



