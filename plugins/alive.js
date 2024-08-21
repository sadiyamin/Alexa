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
*Hello User*
_*I am Alexa Whatsapp User Bot 👸🏻*_

＿＿＿＿＿＿＿＿＿＿＿＿＿＿

_The Alexa IS Powerful Whatsapp User Bot 🐣_
_Type .menu And Get My Command List_

＿＿＿＿＿＿＿＿＿＿＿＿＿＿
_Alexa Official Web Site 💎_
https://sadiyamin.github.io/Test

＿＿＿＿＿＿＿＿＿＿＿＿＿＿

_Alexa Github Repo_
http://github.com/sadiyamin/Alexa 💎

＿＿＿＿＿＿＿＿＿＿＿＿＿＿

_Alexa Public Group 💎_
https://chat.whatsapp.com/Ci5mDk9zEVF95NcuqEtzl4

＿＿＿＿＿＿＿＿＿＿＿＿＿＿

> Thank You Using Alex 💗
> Created By Sadeesha 
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/z52R6XR/bg.jpg`},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})



