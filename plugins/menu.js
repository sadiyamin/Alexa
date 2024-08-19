const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
Hi User 🐣
BOT CMD

*.alive*
*.menu*

DOWNLODER CMD

*.song*
*.video*

Alexa Public Group

https://chat.whatsapp.com/Ci5mDk9zEVF95NcuqEtzl4

_Thank You Using Alexa 👸🏻_

> Created By Sadeesha (Alexa)
`
return await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/900435c6d3157c98c3c88.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})