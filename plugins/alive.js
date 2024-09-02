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
*【🌸 Hello ${pushname}*】

 _*I am Alexa Whatsapp User Bot 👸🏻*_

＿＿＿＿＿＿＿＿＿＿＿＿＿🪶
| ●「 _⌛Uptime_ : _Error_」
| ●「 _📟Ram_ : _Error_」
| ●「 _⚙️Developer_ : _Sadeesha Tharumin_」
＿＿＿＿＿＿＿＿＿＿＿＿＿🪶

_🧸 Alexa Official Web Site_
https://sadiyamin.github.io/|||Test

＿＿＿＿＿＿＿＿＿＿＿＿＿🪶

_🎈 Alexa Github Repo_
http://github.com/sadiyamin/Alexa 

＿＿＿＿＿＿＿＿＿＿＿＿＿🪶

_🛖 Alexa Public Group_
https://chat.whatsapp.com/Ci5mDk9zEVF95NcuqEtzl4

＿＿＿＿＿＿＿＿＿＿＿＿＿🪶

> Thank You Using Alexa 💗
> Created By Sadeesha
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/z52R6XR/bg.jpg`},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})



