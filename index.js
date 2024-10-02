const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    jidNormalizedUser,
    getContentType,
    fetchLatestBaileysVersion,
    Browsers
    } = require('@whiskeysockets/baileys')

    const l = console.log
    const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
    const fs = require('fs')
    const P = require('pino')
    const config = require('./config')
    const qrcode = require('qrcode-terminal')
    const util = require('util')
    const { sms,downloadMediaMessage } = require('./lib/msg')
    const axios = require('axios')
    const { File } = require('megajs')
    const prefix = '.'
    
    const ownerNumber = ['94779062397']
    
    //===================SESSION-AUTH============================
    if (!fs.existsSync(__dirname + '/session/creds.json')) {
    if(!config.SESSION_ID) return console.log('Please add your session to SESSION_ID env !!')
    const sessdata = config.SESSION_ID
    const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
    filer.download((err, data) => {
    if(err) throw err
    fs.writeFile(__dirname + '/session/creds.json', data, () => {
    console.log("Session downloaded ✅")
    })})}
    
    const express = require("express");
    const app = express();
    const port = process.env.PORT || 8000;
    
    //=============================================
    
    async function connectToWA() {
    console.log("Connecting wa bot 🧬...");
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/session/')
    var { version } = await fetchLatestBaileysVersion()
    
    const conn = makeWASocket({
            logger: P({ level: 'silent' }),
            printQRInTerminal: false,
            browser: Browsers.macOS("Firefox"),
            syncFullHistory: true,
            auth: state,
            version
            })
        
    conn.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
    if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
    connectToWA()
    }
    } else if (connection === 'open') {
    console.log('👧 Installing... ')
    const path = require('path');
    fs.readdirSync("./plugins/").forEach((plugin) => {
    if (path.extname(plugin).toLowerCase() == ".js") {
    require("./plugins/" + plugin);
    }
    });
    console.log('Plugins installed successful ✅')
    console.log('Alexa Bot connected to whatsapp ✅\nCreated By Sadeesha Tharumin')
    
    let up = `Alexa Whatsapp Bot Connected Successfully ✅\n\n*PREFIX:${prefix}*\n\n*Join Our Supported Group*\nhttps://chat.whatsapp.com/Ci5mDk9zEVF95NcuqEtzl4\n\n*Alexa Updates Channels*\nhttps://whatsapp.com/channel/0029VaD5t8S1nozDfDDjRj2J\n\n*Thank you for using Alexa 💗*\n\n> Created by Sadeesha Tharumin\n> version 1.0`;
    
    conn.sendMessage(ownerNumber + "@s.whatsapp.net", { image: { url: `https://i.ibb.co/Xs3MZSH/20241002-095000.jpg` }, caption: up })
    
    }
    })
    conn.ev.on('creds.update', saveCreds)  
    
    conn.ev.on('messages.upsert', async(mek) => {
    mek = mek.messages[0]
    if (!mek.message) return	
    mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
    await conn.readMessages([mek.key])
    }
    const m = sms(conn, mek)
    const type = getContentType(mek.message)
    const content = JSON.stringify(mek.message)
    const from = mek.key.remoteJid
    const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
    const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
    const isCmd = body.startsWith(prefix)
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const q = args.join(' ')
    const isGroup = from.endsWith('@g.us')
    const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
    const senderNumber = sender.split('@')[0]
    const botNumber = conn.user.id.split(':')[0]
    const pushname = mek.pushName || 'Sin Nombre'
    const isMe = botNumber.includes(senderNumber)
    const isOwner = ownerNumber.includes(senderNumber) || isMe
    const botNumber2 = await jidNormalizedUser(conn.user.id);
    const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const participants = isGroup ? await groupMetadata.participants : ''
    const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
    const isAdmins = isGroup ? groupAdmins.includes(sender) : false
    const isReact = m.message.reactionMessage ? true : false
    const reply = (teks) => {
    conn.sendMessage(from, { text: teks }, { quoted: mek })
    }
    
    conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
                  let mime = '';
                  let res = await axios.head(url)
                  mime = res.headers['content-type']
                  if (mime.split("/")[1] === "gif") {
                    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
                  }
                  let type = mime.split("/")[0] + "Message"
                  if (mime === "application/pdf") {
                    return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "image") {
                    return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "video") {
                    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "audio") {
                    return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
                  }
                }
//__________________OWNER REACT_______________________________________________________________________
                if(senderNumber.includes("94779062397")){
                    if(isReact) return
                    m.react("🧑🏻‍💻")
                  }
                if(senderNumber.includes("94743025636")){
                    if(isReact) return
                    m.react("🧑🏻‍💻")
                  }
//_________________________WORK TYPE____________________________________________________________________
    if(!isOwner && config.MODE === "private") return
    if(!isOwner && isGroup && config.MODE === "inbox") return
    if(!isOwner && !isGroup && config.MODE === "groups") return
    
    
    const events = require('./command')
    const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
    if (isCmd) {
    const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
    if (cmd) {
    if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key }})
    
    try {
    cmd.function(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply});
    } catch (e) {
    console.error("[PLUGIN ERROR] " + e);
    }
    }
    }
    events.commands.map(async(command) => {
    if (body && command.on === "body") {
    command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    } else if (mek.q && command.on === "text") {
    command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    } else if (
    (command.on === "image" || command.on === "photo") &&
    mek.type === "imageMessage"
    ) {
    command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    } else if (
    command.on === "sticker" &&
    mek.type === "stickerMessage"
    ) {
    command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    }});
    //============================================================================ 
    
    
//____________________________________________________________________________________
})
    }
    app.get("/", (req, res) => {
    res.send("hey, bot started✅");
    });
    app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
    setTimeout(() => {
    connectToWA()
    }, 4000);
