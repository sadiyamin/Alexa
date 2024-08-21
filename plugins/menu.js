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
 *📚 Alexa Command Panel 📚*

＿＿＿＿＿＿＿＿＿＿＿＿＿＿

_*📥 Download Command 📥*_

.song
.video
.fb
.tiktok

＿＿＿＿＿＿＿＿＿＿＿＿＿＿

_*👸🏻Bot Command 👸🏻*_ 

.alive
.menu

＿＿＿＿＿＿＿＿＿＿＿＿＿＿

> Thank you for using Alexa 💗
> Created By Sadeesha 


> Coming Soon Another Commands ⚒️
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/z52R6XR/bg.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})