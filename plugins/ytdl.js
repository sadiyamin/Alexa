const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "downlode songs",
    category: "downlode",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a url or title*")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*YOUTUBE SONG DOWNLODE*

_Title: ${data.title}_
_Description: ${data.description}_
_Time: ${data.timestamp}_
_Ago: ${data.ago}_
_Views: ${data.views}_

> Alexa BOT INC
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//________Downlode Audio________

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//___________Send Audio__________

await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})



}catch(e){
    console.log(e)
    reply(`${e}`)
}
})
