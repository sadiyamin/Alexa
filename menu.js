// Menu
case 'menu': case 'help': case 'alive': {
    const timestampe = speed()
    const latensie = speed() - timestampe
    const a = db.users[sender]
    const me = m.sender
    const xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *USER INFO* 」❍
├ *Name* : ${m.pushName ? m.pushName : 'No name'}
├ *Number* : +${me.split('@')[0]}
├ *Id* : @${m.sender.split('@')[0]}
├ *User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
├ *Limit* : ${isVip ? 'VIP' : global.db.users[m.sender].limit }
├ *Money* : ${global.db.users[m.sender] ? global.db.users[m.sender].uang.toLocaleString('en-IN') : '0'}
╰─┬────❍
╭─┴─❍「 *BOT INFO* 」❍
├ *Speed* : ${latensie.toFixed(4)} miliseconds
├ *Runtime* : ${runtime(process.uptime())}
├ *Host* : ${os.hostname()}
├ *Platform* : ${os.platform()}
├ *Bot Name* : ${global.botname}
├ *Owner* : @${ownernumber[0].split('@')[0]}
├ *Mode* : ${XeonBotInc.public ? 'Public' : 'Self'}
├ *Total User* : ${Object.keys(global.db.users).length} User
├ *Total Hit* : ${global.db.settings[botNumber].totalhit} Hit
├ *Total Chat* : ${Object.keys(global.db.groups).length} Chat/Gc
├ *Prefix* :「 ${xprefix} 」
╰─┬────❍
╭─┴─❍「 *TIME* 」❍
├ *Date* : ${xdate}
├ *Day* : ${xday}
├ *Time* : ${xtime}
╰─┬────❍
╭─┴❍「 *MENU* 」❍
│${setv} ${prefix}allmenu
│${setv} ${prefix}searchmenu
│${setv} ${prefix}downloadmenu
│${setv} ${prefix}gamemenu
│${setv} ${prefix}funmenu
│${setv} ${prefix}aimenu
│${setv} ${prefix}groupmenu
│${setv} ${prefix}ownermenu
│${setv} ${prefix}convertmenu
│${setv} ${prefix}listmenu
│${setv} ${prefix}religionmenu
│${setv} ${prefix}animemenu
│${setv} ${prefix}nsfwmenu
│${setv} ${prefix}randomphotomenu
│${setv} ${prefix}randomvideomenu
│${setv} ${prefix}stickermenu
│${setv} ${prefix}databasemenu
│${setv} ${prefix}storemenu
│${setv} ${prefix}stalkermenu
│${setv} ${prefix}bugmenu
│${setv} ${prefix}othermenu
╰──────❍`

}}// Menu
case 'menu': case 'help': case 'alive': {
const timestampe = speed()
const latensie = speed() - timestampe
const a = db.users[sender]
const me = m.sender
const xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *USER INFO* 」❍
├ *Name* : ${m.pushName ? m.pushName : 'No name'}
├ *Number* : +${me.split('@')[0]}
├ *Id* : @${m.sender.split('@')[0]}
├ *User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
├ *Limit* : ${isVip ? 'VIP' : global.db.users[m.sender].limit }
├ *Money* : ${global.db.users[m.sender] ? global.db.users[m.sender].uang.toLocaleString('en-IN') : '0'}
╰─┬────❍
╭─┴─❍「 *BOT INFO* 」❍
├ *Speed* : ${latensie.toFixed(4)} miliseconds
├ *Runtime* : ${runtime(process.uptime())}
├ *Host* : ${os.hostname()}
├ *Platform* : ${os.platform()}
├ *Bot Name* : ${global.botname}
├ *Owner* : @${ownernumber[0].split('@')[0]}
├ *Mode* : ${XeonBotInc.public ? 'Public' : 'Self'}
├ *Total User* : ${Object.keys(global.db.users).length} User
├ *Total Hit* : ${global.db.settings[botNumber].totalhit} Hit
├ *Total Chat* : ${Object.keys(global.db.groups).length} Chat/Gc
├ *Prefix* :「 ${xprefix} 」
╰─┬────❍
╭─┴─❍「 *TIME* 」❍
├ *Date* : ${xdate}
├ *Day* : ${xday}
├ *Time* : ${xtime}
╰─┬────❍
╭─┴❍「 *MENU* 」❍
│${setv} ${prefix}allmenu
│${setv} ${prefix}searchmenu
│${setv} ${prefix}downloadmenu
│${setv} ${prefix}gamemenu
│${setv} ${prefix}funmenu
│${setv} ${prefix}aimenu
│${setv} ${prefix}groupmenu
│${setv} ${prefix}ownermenu
│${setv} ${prefix}convertmenu
│${setv} ${prefix}listmenu
│${setv} ${prefix}religionmenu
│${setv} ${prefix}animemenu
│${setv} ${prefix}nsfwmenu
│${setv} ${prefix}randomphotomenu
│${setv} ${prefix}randomvideomenu
│${setv} ${prefix}stickermenu
│${setv} ${prefix}databasemenu
│${setv} ${prefix}storemenu
│${setv} ${prefix}stalkermenu
│${setv} ${prefix}bugmenu
│${setv} ${prefix}othermenu
╰──────❍`
if (typemenu === 'v12') {
    let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
  "deviceListMetadata": {},
  "deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
  body: proto.Message.InteractiveMessage.Body.create({
    text: xmenu_oh
  }),
  footer: proto.Message.InteractiveMessage.Footer.create({
    text: botname
  }),
  header: proto.Message.InteractiveMessage.Header.create({
        ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false  
        }),
  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
      {
        "name": "single_select",
        "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"},
{"header":"SEARCH MENU",
"title":"click to display",
"description":"Displays The List Of Search Features",
"id":"${prefix}searchmenu"},
{"header":"DOWNLOAD MENU",
"title":"click to display",
"description":"Displays The List Of Download Features",
"id":"${prefix}downloadmenu"},
{"header":"GAME MENU",
"title":"click to display",
"description":"Displays The List Of Game Features",
"id":"${prefix}gamemenu"},
{"header":"FUN MENU",
"title":"click to display",
"description":"Displays The List Of Fun Features",
"id":"${prefix}funmenu"},
{"header":"AI MENU",
"title":"click to display",
"description":"Displays The List Of AI Features",
"id":"${prefix}aimenu"},
{"header":"GROUP MENU",
"title":"click to display",
"description":"Displays The List Of Group Features",
"id":"${prefix}groupmenu"},
{"header":"OWNER MENU",
"title":"click to display",
"description":"Displays The List Of Owner Features",
"id":"${prefix}ownermenu"},
{"header":"CONVERT MENU",
"title":"click to display",
"description":"Displays The List Of Convert Features",
"id":"${prefix}convertmenu"},
{"header":"LIST MENU",
"title":"click to display",
"description":"Displays The List Of List Features",
"id":"${prefix}listmenu"},
{"header":"RELIGION MENU",
"title":"click to display",
"description":"Displays The List Of Religion Features",
"id":"${prefix}religionmenu"},
{"header":"NSFW MENU",
"title":"click to display",
"description":"Displays The List Of NSFW Features",
"id":"${prefix}nsfwmenu"},
{"header":"ANIME MENU",
"title":"click to display",
"description":"Displays The List Of Anime Features",
"id":"${prefix}animemenu"},
{"header":"RANDOM PHOTO MENU",
"title":"click to display",
"description":"Displays The List Of Random Photo Features",
"id":"${prefix}randomphotomenu"},
{"header":"RANDOM VIDEO MENU",
"title":"click to display",
"description":"Displays The List Of Random Video Features",
"id":"${prefix}randomvideomenu"},
{"header":"STICKER MENU",
"title":"click to display",
"description":"Displays The List Of Sticker Features",
"id":"${prefix}stickermenu"},
{"header":"DATABASE MENU",
"title":"click to display",
"description":"Displays The List Of Database Features",
"id":"${prefix}databasemenu"},
{"header":"STORE MENU",
"title":"click to display",
"description":"Displays The List Of Store Features",
"id":"${prefix}storemenu"},
{"header":"STALKER MENU",
"title":"click to display",
"description":"Displays The List Of Stalk Features",
"id":"${prefix}stalkermenu"},
{"header":"BUG MENU",
"title":"click to display",
"description":"Displays The List Of Bug Features",
"id":"${prefix}bugmenu"},
{"header":"OTHER MENU",
"title":"click to display",
"description":"Displays The List Of Other Features",
"id":"${prefix}othermenu"}]
}]
}`
      },
      {
         "name": "cta_url",
         "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
      },
      {
         "name": "cta_url",
         "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/xeonbotinc\",\"merchant_url\":\"https://www.google.com\"}"
      },
      {
         "name": "cta_url",
         "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
      },
      {
         "name": "cta_url",
         "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
      },
      {
        "name": "quick_reply",
        "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
      },
      {
        "name": "quick_reply",
        "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
      }
   ],
  }),
  contextInfo: {
          mentionedJid: [m.sender], 
          forwardingScore: 999,
          isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363222395675670@newsletter',
          newsletterName: ownername,
          serverMessageId: 143
        }
        }
})
}
}
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
}
break