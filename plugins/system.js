const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    alias: ["bot","ping"],
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    let status = `_*⌛ Uptime:*_  _${runtime(process.uptime())}_
    ＿＿＿＿＿＿＿＿＿＿＿＿＿🪶
_*📟 Ram usage:*_ _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
＿＿＿＿＿＿＿＿＿＿＿＿＿🪶
_*🧿 HostName:*_ _${os.hostname()}_
＿＿＿＿＿＿＿＿＿＿＿＿＿🪶
_*🧑🏻‍💻 Owner:*_ _Sadeesha Tharumin_
`

    return reply(`${status}`)



}catch(e){
    console.log(e)
    reply(`${e}`)
    }
    })
