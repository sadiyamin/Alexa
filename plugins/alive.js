const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
Hi User 🐣

Alexa Bot Is Alive Now 🎈

Alexa Public Group

https://chat.whatsapp.com/Ci5mDk9zEVF95NcuqEtzl4

Thank You Using Alexa 👸🏻

> Created By Sadeesha (Alexa)
`
return await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/900435c6d3157c98c3c88.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})



