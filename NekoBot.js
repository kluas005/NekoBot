
require('./config/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const maker = require('mumaker')
const request = require('request');
const textpro = require('./lib/textpro')
const { mediafireDl } = require('./lib/mediafire.js')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')


const { ptbr } = require('./mess')

/// Arquivos da Lib
////
const { addPremiumUser, dellprem, getPremiumExpired, checkOwner, expiredCheck, checkPremiumUser } = require("./lib/premium.js")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/functions')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./lib/banned.js")
const { cmdadd } = require('./lib/totalcmd.js')

///database
const totalcmd = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))[0].totalcmd
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json'));
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'));
///
// Data e Hora

const data = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const footerbot = ('© NekoBot')  //ubah di config biar ngk emror
const ini_mark = `0@s.whatsapp.net`
global.prem = require("./lib/premium")

/////

//TIME
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var timeday = 'Boa noite'
}
if(time2 < "19:00:00"){
var timeday = 'Boa tarde'
}
if(time2 < "18:00:00"){
var timeday = 'Boa tarde'
}
if(time2 < "15:00:00"){
var timeday = 'Boa tarde'
}
if(time2 < "11:00:00"){
var timeday = 'Bom dia'
}
if(time2 < "05:00:00"){
var timeday = 'Bom dia'
}



// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = client = async (client, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefixo = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefixo)
        const comando = body.replace(prefixo, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        pushname = m.pushName || "No Name"
        const botNumber = await client.decodeJid(client.user.id)
        const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	
	
        // Group
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isOwner || isOwner || prem.checkPremiumUser(m.sender, premium);
        const isUser = checkRegisteredUser(sender)
        const isBan = cekBannedUser(sender, ban)
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!client.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            client.readMessages([m.key])
        }

        //Premium Exp
prem.expiredCheck(client, m, premium);
                
//sticker url
const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './database/stick' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './database/stick' + names + '.png'
                    let asw = './database/stick' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        client.sendMessage(to, { sticker: media}, {quoted: m})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }

        //Resize
        const reSize = async(buffer, ukur1, ukur2) => {
            return new Promise(async(resolve, reject) => {
            let jimp = require('jimp')
            var baper = await jimp.read(buffer);
            var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
            resolve(ab)
            })
            }

             //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `${ytname}`, orderTitle: 'Naze', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "extendedTextMessage": {"text":`${ytname}`, "title": `${botname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
        const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `${ytname}`, "description": `${botname}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": `${ytname}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `${ytname}`, "caption": `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const floc2 = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `${ytname}`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${ytname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ytname,;;;\nFN:ytname\nitem1.TEL;waid=6285875158363:6285875158363\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await reSize(thumb, 100, 100), thumbnail: await reSize(thumb, 100, 100),sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `${ytname}`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": await reSize(thumb, 100, 100),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limite Resetado')
        }, {
            scheduled: true,
            timezone: "America/Sao_Paulo"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await client.setStatus(`${client.user.name} | Tempo de Execução : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
        if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
        let gclink = (`https://chat.whatsapp.com/`+await client.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
        if (isAdmins) return m.reply(`*maaf kamu admin*`)
        if (isOwner) return m.reply(`*maaf kamu owner bot ku*`)
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isOwner) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: client.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        client.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            client.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefixo}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    client.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    client.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) client.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) client.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) client.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    client.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) client.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) client.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    client.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        /// variavel de isban 

        if (isBan) return
        BannedExpired(ban)
	    

        /// contador de comandos 

        if (isCmd) cmdadd()

        ////

        switch(comando) {
	    case 'afk': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Afk*${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Você ainda está no jogo'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `ID da Sala: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Espere @${room.game.currentTurn.split('@')[0]}

Quando *desiste* de se render e admitir a derrota`
            if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Esperando um parceiro' + (text ? ` digite o comando abaixo ${prefixo}${comando} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            client.sendText(m.chat, `Excluiu sessão de TTT com sucesso`, m)
            } else if (!this.game) {
            m.reply(`Sessão de TTT não existe`)
            } else throw '?'
            } catch (e) {
            m.reply('danificado')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Não consigo jogar comigo mesmo !`)
            if (!m.mentionedJid[0]) return m.reply(`_Quem você quer desafiar?_\nMarque a pessoa..\n\nExemplo : ${prefixo}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `A pessoa que você está desafiando está jogando naipe com outra pessoa :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *desafio* @${m.mentionedJid[0].split`@`[0]} *jogar terno*

*Por favor* @${m.mentionedJid[0].split`@`[0]} *para digitar aceitar/rejeitar*`
            this.suit[id] = {
            chat: await client.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) client.sendText(m.chat, `_Tempo limite do terno_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'doação': case 'comprarpremium': case 'doar': {
                client.sendMessage(m.chat, { image: { url: './Assets/images/donate.png' }, caption: `*${timeday}* \n*olá* *${m.pushName}*\n\n*quer fazer um donate? só ler o qrcode ai*` }, { quoted: m })
            }
            break
            case 'sc': {
                m.reply('https://wa.me/5524999304661')
            }
            break		 
            case 'chat': {
                if (!isOwner) throw ptbr.ownerG()
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    client.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    client.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    client.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    client.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    client.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    client.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    client.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await client.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefixo + comando}`
            ter = comando[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefixo + comando} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await client.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    client.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefixo}math medium`
                let result = await genMath(text.toLowerCase())
                client.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
             if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, jawab, client.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
             if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi Ke *Arull*🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, jawab, client.user.name, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw ptbr.premium()
			if (!text) throw `Example : ${prefixo + comando} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            
           
//Pembatas
            case 'react': case 'reagir': {
                if (!isOwner) throw ptbr.ownerG()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                client.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'entrar': {
                if (!isOwner) throw ptbr.ownerG()
                if (!text) throw 'precisa ser um link de grupo!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(ptbr.wait())
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await client.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'sair': {
                if (!isOwner) throw ptbr.ownerG()
                await client.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isOwner) throw ptbr.ownerG()
               if (!text) throw `Example : ${prefixo + comando} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'banir': {
		 if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                if (!isAdmins) throw ptbr.admin()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		 if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                if (!isAdmins) throw ptbr.admin()
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break

    
	case 'promover': {
		 if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                if (!isAdmins) throw ptbr.admin()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'rebaixar': {
		 if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                if (!isAdmins) throw ptbr.admin()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isOwner) throw ptbr.ownerG()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isOwner) throw ptbr.ownerG()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
    case 'addprem':
				if (!isOwner) return m.reply(ptbr.ownerG())
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Uso:\n*#addprem* @time tag\n*#addprem* número de hora\n\nExemplo: #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				client.sendMessage(m.chat, { text: "adicionado com sucesso" }, { quoted: fkontak });
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				client.sendMessage(m.chat, { text: "sucesso pelo numero" }, { quoted: fkontak });
						}
					}
				break
			case 'delprem':
				if (!isOwner) return m.reply(ptbr.ownerG())
				{ q, args, arg } {
				if (args.length < 1) return reply(`Uso:\n*#delprem* @tag\n*#delprem* número`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
						fs.writeFileSync("./database/user/premium.json", JSON.stringify(premium));
					}
					client.sendMessage(m.chat, { text: "deletado com sucesso" }, { quoted: fkontak });
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./database/user/premium.json", JSON.stringify(premium));
				client.sendMessage(m.chat, { text: "Sucesso através do número" }, { quoted: fkontak });
				}
				}
				break
		case 'listprem': {
			if (!isOwner) return m.reply(ptbr.ownerG())
			let data = require("./database/user/premium.json")
			let txt = `*------「 LIST PREMIUM 」------*\n\n`
                    for (let i of data) {
                txt += `*Nome : ${i.id}*\n*Expira : ${i.expired} Segundos*\n\n`
                }
            m.reply(txt)
			}
			break
	    case 'setname': case 'setsubject': {
                 if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                if (!isAdmins) throw ptbr.admin()
                if (!text) throw 'Nome?'
                await client.groupUpdateSubject(m.chat, text).then((res) => m.reply(ptbr.sucesso())).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                 if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                if (!isAdmins) throw ptbr.admin()
                if (!text) throw 'Descrição?'
                await client.groupUpdateDescription(m.chat, text).then((res) => m.reply(ptbr.sucesso())).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isOwner) throw ptbr.ownerG()
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefixo + comando}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefixo + comando}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefixo + comando}`
                let media = await client.downloadAndSaveMediaMessage(quoted)
                await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(ptbr.sucesso())
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                 if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
                if (!isAdmins) throw ptbr.admin()
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefixo + comando}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefixo + comando}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefixo + comando}`
                let media = await client.downloadAndSaveMediaMessage(quoted)
                await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(ptbr.sucesso())
                }
                break
            case 'marcar': {
                 if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                if (!isAdmins) throw ptbr.admin()
let teks = `══✪〘 *👥 Marcando Todo Mundo* 〙✪══
 
 ➲ *Mensagem : ${q ? q : 'Vazia'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
             if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
            if (!isBotAdmins) throw ptbr.Botadmin()
            if (!isAdmins) throw ptbr.admin()
            client.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(ptbr.limitend()) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'votar': {
             if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
            if (m.chat in vote) throw `_Ainda há votos neste chat!_\n\n*${prefixo}deletarvoto* - para deletar voto`
            if (!text) throw `Insira o motivo do voto, exemplo: *${prefixo + comando} duuh é gay*`
            m.reply(`A Votação Começa!\n\n*${prefixo}sim* - com certeza\n*${prefixo}não* - negativo\n*${prefixo}verificarvoto* - para verificar o voto\n*${prefixo}deletarvoto* - para deletar voto`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTAÇÃO 」*

*Motivo:* ${vote[m.chat][0]}

┌〔 SIM 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 NÃO 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefixo}deletarvoto* - para deletar voto`
let buttonsVote = [
  {buttonId: `${prefixo}upvote`, buttonText: {displayText: 'SIM'}, type: 1},
  {buttonId: `${prefixo}devote`, buttonText: {displayText: 'NÃO'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: client.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            client.sendMessage(m.chat, buttonMessageVote)
	    }
            break
        case 'upvote': {
             if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
            if (!(m.chat in vote)) throw `_*sem votação neste grupo!*_\n\n*${prefixo}Votar* - para começar a votar`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Você Já Votou'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTAÇÃO 」*

*Motivo:* ${vote[m.chat][0]}

┌〔 SIM 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 NÃO 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefixo}deletarvoto* - para deletar voto`
            let buttonsUpvote = [
              {buttonId: `${prefixo}upvote`, buttonText: {displayText: 'SIM'}, type: 1},
              {buttonId: `${prefixo}devote`, buttonText: {displayText: 'NÃO'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: client.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            client.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
             if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
            if (!(m.chat in vote)) throw `_*sem votação neste grupo!*_\n\n*${prefixo}Votar* - para começar a votar`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Você Já Votou'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTAÇÃO 」*

*Motivo:* ${vote[m.chat][0]}

┌〔 SIM 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 NÃO 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefixo}deletarvoto* - para deletar voto`
            let buttonsDevote = [
              {buttonId: `${prefixo}upvote`, buttonText: {displayText: 'SIM'}, type: 1},
              {buttonId: `${prefixo}devote`, buttonText: {displayText: 'NÃO'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: client.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            client.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'verificarvoto':
 if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
if (!(m.chat in vote)) throw `_*sem votação neste grupo!*_\n\n*${prefixo}Votar* - para começar a votar`
teks_vote = `*「 VOTAÇÃO 」*

*Motivo:* ${vote[m.chat][0]}

┌〔 SIM 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 NÃO 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefixo}deletarvoto* - para deletar voto


©${client.user.id}
`
client.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletarvoto': case'delvote': case 'deletarvoto': {
             if(!m.isGroup) throw ptbr.group()
 if(!isUser) throw ptbr.userB()
            if (!(m.chat in vote)) throw `_*sem votação neste grupo!*_\n\nUse *${prefixo}Votar* - para começar a votar`
            delete vote[m.chat]
            m.reply('Excluiu sessão de votação neste grupo com sucesso')
	    }
            break
               case 'grupo': case 'grup': {
                 if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                if (!isAdmins) throw ptbr.admin()
                if (args[0] === 'fechar'){
                    await client.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Grupo Fechado com Sucesso*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'abrir'){
                    await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Grupo Aberto com Sucesso*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'grupo abrir', buttonText: { displayText: 'Abrir Grupo?' }, type: 1 },
                        { buttonId: 'grupo fechar', buttonText: { displayText: 'Fechar Grupo?' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `Modo de grupo`, client.user.name, m)

             }
            }
            break
            case 'editinfo': {
                 if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                if (!isAdmins) throw ptbr.admin()
             if (args[0] === 'open'){
                await client.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Sukses Membuka Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await client.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Sukses Menutup Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `Mode Edit Info`, client.user.name, m)

            }
            }
            break
            case 'antilink': {
                 if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                if (!isAdmins) throw ptbr.admin()
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Já esteve ativo antes*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*O Antilink Está Ativado!*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Anteriormente inativo*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*O Antilink Está Desativado !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'Ligado' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Desligado' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `Modo do Antilink`, client.user.name, m)
                }
             }
             break
             case 'mute': {
                 if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if(!isOwner) throw ptbr.ownerG()
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Anteriormente ativo`)
                db.data.chats[m.chat].mute = true
                m.reply(`${client.user.name} foi silenciado neste grupo !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Anteriormente inativo`)
                db.data.chats[m.chat].mute = false
                m.reply(`${client.user.name} foi ativado neste grupo !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `Função de Mute do Bot`, client.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                 if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                let response = await client.groupInviteCode(m.chat)
                client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                 if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!isBotAdmins) throw ptbr.Botadmin()
                if (!isAdmins) throw ptbr.admin()
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await client.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await client.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': case 'deletar': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'lapor': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            	if (!text) throw `Example : ${prefixo + comando} Lapor Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS LAPORANNYA' }, type: 1 }]
            await client.sendButtonText('5524999304661@s.whatsapp.net', buttons, pjtxt, footerbot, m, {mentions: ments})
            let akhji = `Laporan Telah Terkirim\nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih Laporannya🙏*\n_Nomermu Akan Terblokir_\n_Jika Laporan Hanya Di Buat Buat_`
            await client.sendButtonText(m.chat, buttons, akhji, footerbot, m, {mentions: ments})
            }
            break
            case 'hehehe': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                client.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'bcgc': case 'bcgroup': {
                if (!isOwner) throw ptbr.ownerG()
                if (!text) throw `Text mana?\n\nExample : ${prefixo + comando} fatih-san`
                let getGroups = await client.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let txt = `「 *Broadcast Group* 」\n\n${text}`
                    let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, txt, footerbot, m)
		}}
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isOwner) throw ptbr.ownerG()
                if (!text) throw `Text mana?\n\nExample : ${prefixo + comando} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(3000)
                      let txt = `「 *Broadcast Klaus Dev* 」\n\n${text}`
                      let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, txt, footerbot, m)
		}}
            break
            case 'q': case 'quoted': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
		if (!m.quoted) return m.reply('Responsa a Mensagem!!')
		let wokwol = await client.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                    if(!m.isGroup) throw ptbr.group()
                    if(!isUser) throw ptbr.userB()
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await client.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Membro :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    client.sendText(m.chat, 'Lista de Pessoas Onlines\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': case 'figurinha': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (!quoted) throw `*Responda um vídeo/imagem com legenda* ${prefixo + comando}`
            m.reply(ptbr.wait())
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Máximo de 10 segundos!*')
                let media = await quoted.download()
                let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Enviar imagem/vídeo com legenda* ${prefixo + comando}\nDuração *Vídeo 1-9 segundos*`
                }
            }
            break
            case 'ebinary': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (!text) throw `Example : ${prefixo + comando} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (!text) throw `Example : ${prefixo + comando} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefixo + comando} 😅+🤔`
		if (!emoji2) throw `Example : ${prefixo + comando} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
	    if (!text) throw `Example : ${prefixo + comando} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
           if (!text) throw `Example : ${prefixo + comando} text`
           await client.sendMedia(m.chat, `https://xteam.xyz/${comando}?file&text=${text}`, 'Klaus', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
	        let respond = `Kirim/reply image/sticker dengan caption ${prefixo + comando} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(ptbr.wait())
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await client.downloadAndSaveMediaMessage(quoted)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await client.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(awikwok)
            }
	       break     
	        case 'simih': case 'simisimi': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (!text) throw `Example : ${prefixo + comando} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefixo + comando}*`
                m.reply(ptbr.wait())
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    client.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefixo + comando}*`
                m.reply(ptbr.wait())
		let { webp2mp4File } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefixo + comando}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefixo + comando}`
            m.reply(ptbr.wait())
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefixo + comando}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefixo + comando}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefixo + comando}`
            m.reply(ptbr.wait())
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${client.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefixo + comando}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefixo + comando}`
            m.reply(ptbr.wait())
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            client.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefixo + comando}*`
                m.reply(ptbr.wait())
		let { webp2mp4File } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                m.reply(ptbr.wait())
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                m.reply(ptbr.wait())
                if (!quoted) throw `Enviar/Responder imagem com legenda ${prefixo + comando}`
                if (!/image/.test(mime)) throw `Enviar/Responder imagem com legenda ${prefixo + comando}`
                if (/webp/.test(mime)) throw `Enviar/Responder imagem com legenda ${prefixo + comando}`
                let remobg = require('remove.bg')
                let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
                let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
                hmm = await './src/remobg-'+getRandom('')
                localFile = await client.downloadAndSaveMediaMessage(quoted, hmm)
                outputFile = await './src/hremo-'+getRandom('.png')
                m.reply(mess.wait)
                remobg.removeBackgroundFromImageFile({
                  path: localFile,
                  apiKey: apinobg,
                  size: "regular",
                  type: "auto",
                  scale: "100%",
                  outputFile 
                }).then(async result => {
                client.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
                await fs.unlinkSync(localFile)
                await fs.unlinkSync(outputFile)
                })
                }
                break
	    case 'yts': case 'ytsearch': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw `Example : ${prefixo + comando} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ Não : ${no++}\n⭔ Tipo : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Titulo : ${i.title}\n⭔ Espectadores : ${i.views}\n⭔ Duração : ${i.timestamp}\n⭔ Enviado há : ${i.ago}\n⭔ Autor : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                client.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
                if (!text) throw `Example : ${prefixo + comando} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
        if (!text) throw `Example : ${prefixo + comando} kaori cicak`
        anu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = anu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Proxima Imagem'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
	    case 'play': case 'ytplay': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                m.reply(ptbr.wait())
                if (!text) throw `Example : ${prefixo + comando} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Titulo : ${anu.title}
⭔ Ext : Procure
⭔ ID : ${anu.videoId}
⭔ Duração: ${anu.timestamp}
⭔ Espectadores : ${anu.views}
⭔ Enviado há : ${anu.ago}
⭔ Autor : ${anu.author.name}
⭔ Canal : ${anu.author.url}
⭔ Descrição : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                 m.reply(ptbr.wait())
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefixo + comando} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('Arquivo acima do limite '+util.format(media))
                client.sendImage(m.chat, media.thumb, `⭔ Titulo : ${media.title}\n⭔ Tamanho do Arquivo : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolução : ${args[1] || '128kbps'}`, m)
                client.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                m.reply('enviando...')
            }
            break
            case 'ytmp4': case 'ytvideo': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                m.reply(ptbr.wait())
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefixo + comando} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('Arquivo acima do limite '+util.format(media))
                client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Titulo : ${media.title}\n⭔ Tamanho do Arquivo : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolução : ${args[1] || '360p'}` }, { quoted: m })
                m.reply('enviando...')
            }
            break
	    case 'getmusic': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefixo + comando} 1`
                if (!m.quoted) return m.reply('Responda a mensagem')
                if (!m.quoted.isBaileys) throw `Só pode responder a mensagem do bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Talvez a mensagem que você respondeu não contenha o resultado do ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('Arquivo acima do limite '+util.format(media))
                client.sendImage(m.chat, media.thumb, `⭔ Titulo : ${media.title}\n⭔ Tamanho do Arquivo : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolução : ${args[1] || '128kbps'}`, m)
                client.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Exemplo : ${prefixo + comando} 1`
                if (!m.quoted) return m.reply('Responda a mensagem')
                if (!m.quoted.isBaileys) throw `Só pode responder a mensagem do bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Talvez a mensagem que você respondeu não contenha o resultado do ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('Arquivo acima do limite '+util.format(media))
                client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Titulo : ${media.title}\n⭔ Tamanho do Arquivo : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolução : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                m.reply(ptbr.wait())
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                client.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'waifu': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            	m.reply(ptbr.wait())
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Proxima Imagem'}, type: 1},{buttonId: `simplemenu`, buttonText: {displayText: '⬅️Voltar'}, type: 1}]
                let buttonMessage = {
                    image: buffer,
                    caption: `Random Waifu`,
                    footer: footerbot,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(ptbr.wait())
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                client.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                client.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Proxima Imagem'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: footerbot,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Proxima Imagem'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Titulo : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: footerbot,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gcsearch': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'Masukkan Query Title'
                anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)
                n = anu.result
                result = n[Math.floor(Math.random() * n.length)]
                let jwbn = `*Nome : ${result.nama}\n*Link : ${result.link}*`
		let buttons = [{ buttonId: 'menu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, jwbn, footerbot, m)
            }
            break
            case 'wikimedia': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Proxima Imagem'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Titulo : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: footerbot,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

            /// comandos novos

            case 'carbon': {
            	if (!text) throw 'No Query Text'
               m.reply(ptbr.wait())
               client.sendMessage(m.chat, { image: { url: `https://api-rull.herokuapp.com/api/cmd?code=${text}` }, caption: `boa mlk` }, { quoted: m })
            	}
            break
            case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'holographic':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'karbon': case 'neonlight2': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case '3dbox': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'greenneon': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'lion2': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case '3davengers': 
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'whitebear': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             if (!q) return reply(`Example : ${prefixo + comando} ${global.ownername}`) 
             m.reply(ptbr.wait())
             let link
             if (/candy/.test(comando)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/neonlight2/.test(comando)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
             if (/christmas/.test(comando)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(comando)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(comando)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(comando)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(comando)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/whitebear/.test(comando)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
             if (/holographic/.test(comando)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
             if (/3davengers/.test(comando)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
             if (/rainbow/.test(comando)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(comando)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(comando)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/greenneon/.test(comando)) link = 'https://textpro.me/green-neon-text-effect-874.html'
             if (/lion2/.test(comando)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/3dbox/.test(comando)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
             if (/pencil/.test(comando)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(comando)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(comando)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(comando)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(comando)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(comando)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(comando)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(comando)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(comando)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(comando)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(comando)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(comando)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(comando)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(comando)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(comando)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(comando)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(comando)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(comando)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(comando)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(comando)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(comando)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(comando)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(comando)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/karbon/.test(comando)) link = 'https://textpro.me/carbon-text-effect-833.html'
             if (/honey/.test(comando)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(comando)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(comando)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(comando)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(comando)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(comando)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(comando)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(comando)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(comando)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(comando)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(comando)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(comando)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(comando)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(comando)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(comando)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(comando)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(comando)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(comando)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(comando)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(comando)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(comando)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(comando)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(comando)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(comando)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(comando)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
             client.sendMessage(m.chat, { image: { url: anu }, caption: `Feito por ${global.botname} vadia` }, { quoted: m })
             }
             break
             case 'glitch2': case 'harrypot': case 'graffiti': case 'pornhub': case 'glitch3': case '3dspace': case 'lion': case 'wolf': case 'retro': case '8bit': {
             if(!q) return m.reply(`Use ${prefixo + comando} text1|text2`)
             m.reply(ptbr.wait())
             teks1 = q.split("|")[0]
             teks2 = q.split("|")[1]
             let link
             if (/glitch3/.test(comando)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
             if (/harrypot/.test(comando)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/graffiti/.test(comando)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
             if (/pornhub/.test(comando)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
             if (/glitch2/.test(comando)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
             if (/3dspace/.test(comando)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
             if (/lion/.test(comando)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/wolf/.test(comando)) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
             if (/retro/.test(comando)) link = 'https://textpro.me/create-3d-retro-text-effect-online-free-1065.html'
             if (/8bit/.test(comando)) link = 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html'
             let anu = await maker.textpro(link, [`${teks1}`,`${teks2}`])
             client.sendMessage(m.chat, { image: { url: anu }, caption: `Feito por ${global.botname} vadia` }, { quoted: m })
             }
             break
             ////
            case 'quotesanime': case 'quoteanime': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}' \n\nAnime : ${result.anime}\n\n- ${result.up_at}`,
                    footer: footerbot,
                    buttons: buttons,
                    headerType: 2
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                let anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/quotes`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.quote,
                    footer: footerbot,
                    buttons: buttons,
                    headerType: 2
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           
	   
            
//Limitador=======================================
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Seu limite diário expirou')
                if (!text) return m.reply(`Example : ${prefixo +comando} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefixo + comando} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefixo + comando} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefixo + comando} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefixo + comando} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefixo + comando} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefixo + comando} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefixo + comando} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    client.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefixo + comando} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefixo +comando} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
            case 'tiktok': case 'tiktoknowm': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'Insira o link de consulta!'
                m.reply(ptbr.wait())
                let anu = await fetchJson(`https://hadi-api.cf/api/tiktok?url=${text}`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '📖Lista de Menus'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowm },
                    caption: `Download de ${text}`,
                    footer: footerbot,
                    buttons: buttons,
                    headerType: 5
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           /**case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Insira o link de consulta!'
                m.reply(ptbr.wait())
                let anu = await fetchJson(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${text}`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.video_original },
                    caption: `Download From ${text}`,
                    footer: footerbot,
                    buttons: buttons,
                    headerType: 5
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break**/
            case 'tiktokmp3': case 'tiktokaudio': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'Insira o link de consulta!'
                m.reply(ptbr.wait())
                let anu = await fetchJson(`ttps://hadi-api.cf/api/tiktok?url=${text}`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '📖Lista de Menus'}, type: 1},
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download de ${text}`,
                    footer: footerbot,
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await client.sendMessage(m.chat, buttonMessage, { quoted: m })
                client.sendMessage(m.chat, { audio: { url: anu.result.audio_only.audio1 }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'No Query Url!'
                m.reply(ptbr.wait())
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) client.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    client.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'No Query Title'
                m.reply(ptbr.wait())
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await client.sendImage(m.chat, anu.result.img, `⭔ Titulo : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                client.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'No Query Title'
                m.reply(ptbr.wait())
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await client.sendImage(m.chat, anu.result.thumb, `⭔ Titulo : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                client.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'Insira o link de consulta!'
                m.reply(ptbr.wait())
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Pressione o botão abaixo',
                    buttons: buttons,
                    headerType: 5
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'Insira o link de consulta!'
                m.reply(ptbr.wait())
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Pressione o botão abaixo',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await client.sendMessage(m.chat, buttonMessage, { quoted: m })
                client.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'Insira o link de consulta!'
                m.reply(ptbr.wait())
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                client.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Titulo : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw 'Insira o link de consulta!'
                m.reply(ptbr.wait())
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                client.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
	        if (!text) throw `Example : ${prefixo + comando} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Titulo : ${anu.title}
⭔ Autor : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Para baixar mídia, clique em um dos botões abaixo ou digite o comando ytmp3/ytmp4 com o URL acima
`,
			footer: client.user.name,
			buttons,
			headerType: 4
		    }
		    client.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        client.sendMessage(m.chat, { image: { url }, caption: `⭔ Titulo : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
		if (!text) throw `Example : ${prefixo + comando} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		client.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
		oh = `Example : ${prefixo + comando} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		client.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		/**case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(ptbr.wait())
		client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(ptbr.wait())
		client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(ptbr.wait())
		client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(ptbr.wait())
		client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefixo + comando} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break**/
		case 'hadis': case 'hadist': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
		if (!args[0]) throw `Contoh:
${prefixo + comando} bukhari 1
${prefixo + comando} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefixo + comando} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
		if (!args[0]) throw `Contoh penggunaan:\n${prefixo + comando} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefixo + comando} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		client.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
		if (!args[0]) throw `Contoh penggunaan:\n${prefixo + comando} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefixo + comando} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                try {
                let set
                if (/bass/.test(comando)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(comando)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(comando)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(comando)) set = '-af volume=12'
                if (/fast/.test(comando)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(comando)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(comando)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(comando)) set = '-filter_complex "areverse"'
                if (/robot/.test(comando)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(comando)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(comando)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(comando)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(ptbr.wait())
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                client.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Responda ao áudio que deseja alterar com uma legenda *${prefixo + comando}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!m.quoted) throw 'Responda a mensagem!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'Você não tem permissão para alterar este comando de Figurinha'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Pronto!`)
            }
            break
            case 'delcmd': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'Você não tem permissão para excluir este comando de Figurinha'              
                delete global.db.data.sticker[hash]
                m.reply(`Pronto!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                client.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isOwner) throw ptbr.ownerG()
                if (!m.quoted) throw 'Responda a mensagem!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(comando)
                m.reply('Pronto!')
            }
            break
            case 'addmsg': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefixo + comando} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefixo}getmsg ${text}

Lihat list Pesan Dengan ${prefixo}listmsg`)
            }
            break
            case 'getmsg': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                if (!text) throw `Example : ${prefixo + comando} file name\n\nLihat list pesan dengan ${prefixo}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                client.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Não pode ser Usado em Grupos!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Começar' }, type: 1 }
                ]
                client.sendButtonText(m.chat, buttons, `\`\`\`Olá ${await client.getName(m.sender)}! Bem-vindo ao chat anônimo\n\nClique no botão abaixo para encontrar parceiros\`\`\``, client.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Não pode ser Usado em Grupos!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Começar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Você não está em uma sessão anônima, pressione o botão para encontrar um parceiro \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await client.sendText(other, `\`\`\`O parceiro saiu da sessão anônima\`\`\``, m)
                delete this.anonymous[room.id]
                if (comando === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Não pode ser Usado em Grupos!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Você ainda está em uma sessão anônima, pressione o botão abaixo para encerrar sua sessão anônima\`\`\``, client.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Pular' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await client.sendButtonText(room.a, buttons, `\`\`\`Parceiro encontrado com sucesso, agora você pode enviar mensagem\`\`\``, client.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await client.sendButtonText(room.b, buttons, `\`\`\`Parceiro encontrado com sucesso, agora você pode enviar mensagem\`\`\``, client.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Aguarde, procurando um parceiro\`\`\``, client.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Não pode ser Usado em Grupos!')
                if(!isUser) throw ptbr.userB()
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Começar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Você não está em uma sessão anônima, pressione o botão para encontrar um parceiro\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await client.sendText(other, `\`\`\`O parceiro saiu da sessão anônima\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Pular' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await client.sendButtonText(room.a, buttons, `\`\`\`Parceiro encontrado com sucesso, agora você pode enviar mensagem\`\`\``, client.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await client.sendButtonText(room.b, buttons, `\`\`\`Parceiro encontrado com sucesso, agora você pode enviar mensagem\`\`\``, client.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Aguarde, procurando um parceiro\`\`\``, client.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isOwner) throw ptbr.ownerG()
                client.public = true
                m.reply('*Mudança bem-sucedida para uso público*')
            }
            break
            case 'self': {
                if (!isOwner) throw ptbr.ownerG()
                client.public = false
                m.reply('*Mudança bem-sucedida para uso próprio*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                if(!isUser) throw ptbr.userB()
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Velocidade de resposta ${latensi.toFixed(4)} Segundo \n ${oldd - neww} _milissegundos_\n\nTempo de execução : ${runtime(process.uptime())}

💻 Informação do Servidor
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Uso de Memória_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Uso Total da Cpu_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_Uso do(s) núcleo(s) da CPU (${cpus.length} Núcleos de CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                client.sendContact(m.chat, global.owner, m)
            }
            break
            case 'playstore': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (!text) throw `Example : ${prefixo + comando} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (!text) throw `Example : ${prefixo + comando} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Titulo: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            client.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (!text) throw `Example: ${prefixo + comando} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Titulo: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            client.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Titulo: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            client.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (!text) throw `Example: ${prefixo + comando} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            client.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            if (!text) throw `Example : ${prefixo + comando} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Waktu: ${waktu}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            client.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
            if (!text) throw `Example : ${prefixo + comando} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
            if (!text) throw `Example : ${prefixo + comando} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            client.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isOwner) throw ptbr.ownerG()
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(ptbr.sucesso())
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(ptbr.sucesso())
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(ptbr.sucesso())
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(ptbr.sucesso())
                } else {
                let sections = [
                {
                title: "MUDAR O MENU DO BOT",
                rows: [
                {title: "Modelos de imagem", rowId: `setmenu templateImage`, description: `Altera o Menu para Modelo de Imagem`},
                {title: "Modelos de vídeo", rowId: `setmenu templateVideo`, description: `Altera o Menu para Modelo de Video`},
                {title: "Modelos de GIF", rowId: `setmenu templateGif`, description: `Altera o Menu para Modelo de Gif`},
                {title: "Modelos de Mensagem", rowId: `setmenu templateMessage`, description: `Altera o Menu para Modelo de Mensagem`}
                ]
                },
                ]
                client.sendListMsg(m.chat, `basta escolher na *lista*!`, client.user.name, `*Olá* ${pushname} !`, `Escolha na lista`, sections, m)
                }
            }
            break
            case 'menu': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `*${timeday}*
╭──❍「 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 」❍
├ *nome* : ${pushname}
├ *numero* : @${me.split('@')[0]}
├ *Premium* : ${isPremium ? '✅' : `❌`}
├ *limite* : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╰──❍

╭──❍「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❍
├ *Nome* : ${pushname}
├ *Powered* : @${ini_mark.split('@')[0]}
├ *Dono* : @${ownernya.split('@')[0]}
├ *Modo* : ${client.public ? 'Public' : `Self`}
├ *Prefix* :「 MULTI-PREFIX 」
╰──❍

╭──❍「 Data e Hora 」❍
├ *Data* : ${data}
├ *Hora* : ${hr}
├ 
├ 
╰──❍`
            let ments = [ownernya, me, ini_mark]
            let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Regras' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, jawab, footerbot, m, {mentions: ments})
            }
            break
            case 'simplemenu': case 'list': case 'help': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*${timeday}*
╭──❍「 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 」❍
├ *Nome* : ${pushname}
├ *Numero* : ${me.split('@')[0]}
├ *Premium* : ${isPremium ? '✅' : `❌`}
├ *Limit* : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╰──❍

╭──❍「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❍
├ *Nome* : ${pushname}
├ *Modo* : ${client.public ? 'Public' : `Self`}
├ *Prefix* :「 MULTI-PREFIX 」
╰──❍

╭──❍「 Data e Hora 」❍
├ *Data* : ${data} 
├ *Hora: : ${hr}
├ 
├ 
╰──❍`
                let sections = [
                {
                title: "Lista de Menus",
                rows: [
                {title: "Grupo", rowId: `mgroup`, description: `👥Menu de Grupo`},
                {title: "Webzone", rowId: `mwebzone`, description: `📹Webzone Menu`},
                {title: "Downloader", rowId: `mdownloader`, description: `📥Menu de Download`},
                {title: "Search", rowId: `msearch`, description: `🔍Menu de Pesquisa`},
                {title: "Random", rowId: `mrandom`, description: `❔Random Menu`},
                {title: "Text Pro", rowId: `mtextpro`, description: `❇Text Pro Menu`},
                {title: "Photo Oxy", rowId: `mphotooxy`, description: `♻️Photo Oxy Menu`},
                {title: "Ephoto", rowId: `mephoto`, description: `🗳Ephoto Menu`},
                {title: "Fun", rowId: `mfun`, description: `🔫Fun Menu`},
                {title: "Convert", rowId: `mconvert`, description: `🛠Menu de Conversão`},
                {title: "Main", rowId: `mmain`, description: `💾Menu Principal`},
                {title: "Database", rowId: `mdatabase`, description: `📁Database Menu`},
                {title: "Anonymous", rowId: `manonymous`, description: `🎭Anonymous Menu`},
                {title: "Voz", rowId: `mvoice`, description: `🎶Menu de Voz`},
                {title: "Dono", rowId: `mowner`, description: `🎟Menu de Dono`}
                ]
                },
                ]
                client.sendListMsg(m.chat, kukiw, footerbot, `*Olá ${pushname}*!`, `Selecione o menu`, sections, m)
            }
            break

            case 'registrar':
				case 'registro':
                if(!m.isGroup) throw ptbr.group()
				if (!q.includes('|')) return m.reply(`𝗗𝗶𝗴𝗶𝘁𝗲 𝗱𝗮 𝗳𝗼𝗿𝗺𝗮 𝗰𝗲𝗿𝘁𝗮:\n𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${prefixo}𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝗻𝗼𝗺𝗲|𝗶𝗱𝗮𝗱𝗲\n𝗘𝘅𝗲𝗺𝗽𝗹𝗼: ${prefixo}𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝗸𝗹𝗮𝘂𝘀|𝟮𝟬`)
				const namaUser = q.substring(0, q.indexOf('|') - 0)
				const umurUser = q.substring(q.lastIndexOf('|') + 1)
				const serialUser = createSerial(20)
				if(isNaN(umurUser)) return m.reply(`𝗗𝗶𝗴𝗶𝘁𝗲 𝗱𝗮 𝗳𝗼𝗿𝗺𝗮 𝗰𝗲𝗿𝘁𝗮:\n𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${prefixo}𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝗻𝗼𝗺𝗲|𝗶𝗱𝗮𝗱𝗲\n𝗘𝘅𝗲𝗺𝗽𝗹𝗼: ${prefixo}𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝗸𝗹𝗮𝘂𝘀|𝟮𝟬`)
				if (namaUser.length >= 60) return m.reply(`𝐬𝐞𝐮 𝐧𝐨𝐦𝐞 é 𝐦𝐮𝐢𝐭𝐨 𝐥𝐨𝐧𝐠𝐨`)
				if (umurUser > 40) return m.reply(`𝗜𝗱𝗮𝗱𝗲 𝗺𝗮𝘅𝗶𝗺𝗮 𝗱𝗲 𝟰𝟬 𝗮𝗻𝗼𝘀`)
				if (umurUser < 12) return m.reply(`𝗜𝗱𝗮𝗱𝗲 𝗺𝗶𝗻𝗶𝗺𝗮 é 𝟭𝟮 𝗮𝗻𝗼𝘀`)
				veri = sender
				try {
				ppimg = await client.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				captionnya = 
					`𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨 𝐜𝐨𝐦 𝐬𝐮𝐜𝐞𝐬𝐬𝐨✅\n𝗦𝗲𝗿𝗶𝗮𝗹: \n*${serialUser}*\n╔════════════════\n╠≽️ 𝗗𝗶𝗮: ${data}\n╠≽️ 𝗛𝗼𝗿𝗮: ${hr}\n╠≽️ 𝗡𝗼𝗺𝗲 𝗱𝗲 𝘂𝘀𝘂á𝗿𝗶𝗼: @${sender.split("@")[0]}\n╠≽️ 𝙉𝙤𝙢𝙚 𝙙𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤: ${namaUser}\n╠≽️ 𝗜𝗱𝗮𝗱𝗲: ${umurUser}\n╠≽️ 𝗦𝗲𝘂 𝗹𝗶𝗻𝗸 𝘄𝗮𝗺𝗲: wa.me/${sender.split("@")[0]}\n╠≽️ 𝙉ú𝙢𝙚𝙧𝙤: ${sender.split("@")[0]}\n╚════════════════
					𝗩𝗼𝗰ê 𝘀𝗲 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗼𝘂, 𝘿𝙞𝙜𝙞𝙩𝙚 ${prefixo}help 𝗣𝗮𝗿𝗮 𝘃𝗲𝗿 𝗮 𝗹𝗶𝘀𝘁𝗮 𝗱𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀`
					daftarimg = await getBuffer(ppimg)
					addRegisteredUser(sender, namaUser, umurUser, data, serialUser)
					client.sendMessage(m.chat, { image: daftarimg, quoted: mek, caption: captionnya, contextInfo: {mentionedJid: [sender]}})                    
					break
            case 'mgroup': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
goup = `┌──⭓ *Menu de Grupo*
│
│⭔ ${prefixo}linkgroup
│⭔ ${prefixo}ephemeral [opção]
│⭔ ${prefixo}setppgc [imagem]
│⭔ ${prefixo}setname [texto]
│⭔ ${prefixo}setdesc [texto]
│⭔ ${prefixo}grupo [opção]
│⭔ ${prefixo}editinfo [opção]
│⭔ ${prefixo}add @user
│⭔ ${prefixo}kick @user
│⭔ ${prefixo}hidetag [texto]
│⭔ ${prefixo}tagall [texto]
│⭔ ${prefixo}antilink [on/off]
│⭔ ${prefixo}mute [on/off]
│⭔ ${prefixo}promover @user
│⭔ ${prefixo}rebaixar @user
│⭔ ${prefixo}votar [motivo]
│⭔ ${prefixo}sim
│⭔ ${prefixo}não
│⭔ ${prefixo}verificarvoto
│⭔ ${prefixo}deletarvoto
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, goup, footerbot, m)
            }
            break
      case 'mwebzone': {
        if(!m.isGroup) throw ptbr.group()
        if(!isUser) throw ptbr.userB()
wbzone = `┌──⭓ *Webzone Menu*
│
│⭔ ${prefixo}playstore
│⭔ ${prefixo}gsmarena
│⭔ ${prefixo}jadwalbioskop
│⭔ ${prefixo}nowplayingbioskop
│⭔ ${prefixo}aminio
│⭔ ${prefixo}wattpad
│⭔ ${prefixo}webtoons
│⭔ ${prefixo}drakor
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, wbzone, footerbot, m)
            }
            break
            case 'mdownloader': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
dwnloader = `┌──⭓ *Downloader Menu*
│
│⭔ ${prefixo}tiktoknowm [url]
│⭔ ${prefixo}tiktokwm [url]
│⭔ ${prefixo}tiktokmp3 [url]
│⭔ ${prefixo}instagram [url]
│⭔ ${prefixo}twitter [url]
│⭔ ${prefixo}twittermp3 [url]
│⭔ ${prefixo}facebook [url]
│⭔ ${prefixo}pinterestdl [url]
│⭔ ${prefixo}ytmp3 [url]
│⭔ ${prefixo}ytmp4 [url]
│⭔ ${prefixo}getmusic [query]
│⭔ ${prefixo}getvideo [query]
│⭔ ${prefixo}umma [url]
│⭔ ${prefixo}joox [query]
│⭔ ${prefixo}soundcloud [url]
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, dwnloader, footerbot, m)
            }
            break
            case 'msearch': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
sarch = `┌──⭓ *Menu de Pesquisa*
│
│⭔ ${prefixo}play [query]
│⭔ ${prefixo}yts [query]
│⭔ ${prefixo}google [query]
│⭔ ${prefixo}gimage [query]
│⭔ ${prefixo}pinterest [query]
│⭔ ${prefixo}wallpaper [query]
│⭔ ${prefixo}wikimedia [query]
│⭔ ${prefixo}ytsearch [query]
│⭔ ${prefixo}ringtone [query]
│⭔ ${prefixo}stalk [opção] [query]
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, sarch, footerbot, m)
            }
            break
            case 'mrandom': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
rndom = `┌──⭓ *Random Menu*
│
│⭔ ${prefixo}coffe
│⭔ ${prefixo}quotesanime
│⭔ ${prefixo}motivasi
│⭔ ${prefixo}dilanquote
│⭔ ${prefixo}bucinquote
│⭔ ${prefixo}katasenja
│⭔ ${prefixo}puisi
│⭔ ${prefixo}couple
│⭔ ${prefixo}anime
│⭔ ${prefixo}waifu
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, rndom, footerbot, m)
            }
            break
            case 'mtextpro': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
txtpro = `┌──⭓ *Text Pro Menu*
│
│⭔ ${prefixo}candy
│⭔ ${prefixo}christmas
│⭔ ${prefixo}dchristmas
│⭔ ${prefixo}sparklechristmas
│⭔ ${prefixo}holographic
│⭔ ${prefixo}deepsea
│⭔ ${prefixo}scifi
│⭔ ${prefixo}rainbow
│⭔ ${prefixo}waterpipe
│⭔ ${prefixo}spooky
│⭔ ${prefixo}karbon
│⭔ ${prefixo}carbon
│⭔ ${prefixo}neonlight2
│⭔ ${prefixo}pencil
│⭔ ${prefixo}circuit
│⭔ ${prefixo}discovery
│⭔ ${prefixo}metalic
│⭔ ${prefixo}fiction
│⭔ ${prefixo}demon
│⭔ ${prefixo}3dbox
│⭔ ${prefixo}transformer
│⭔ ${prefixo}berry
│⭔ ${prefixo}thunder
│⭔ ${prefixo}magma
│⭔ ${prefixo}3dstone
│⭔ ${prefixo}greenneon
│⭔ ${prefixo}neonlight
│⭔ ${prefixo}glitch
│⭔ ${prefixo}harrypotter
│⭔ ${prefixo}brokenglass
│⭔ ${prefixo}papercut
│⭔ ${prefixo}lion2
│⭔ ${prefixo}watercolor
│⭔ ${prefixo}multicolor
│⭔ ${prefixo}neondevil
│⭔ ${prefixo}underwater
│⭔ ${prefixo}graffitibike
│⭔ ${prefixo}3davengers
│⭔ ${prefixo}snow
│⭔ ${prefixo}cloud
│⭔ ${prefixo}honey
│⭔ ${prefixo}ice
│⭔ ${prefixo}fruitjuice
│⭔ ${prefixo}biscuit
│⭔ ${prefixo}wood
│⭔ ${prefixo}whitebear
│⭔ ${prefixo}chocolate
│⭔ ${prefixo}strawberry
│⭔ ${prefixo}blood
│⭔ ${prefixo}dropwater
│⭔ ${prefixo}toxic
│⭔ ${prefixo}lava
│⭔ ${prefixo}rock
│⭔ ${prefixo}bloodglas
│⭔ ${prefixo}hallowen
│⭔ ${prefixo}darkgold
│⭔ ${prefixo}joker
│⭔ ${prefixo}wicker
│⭔ ${prefixo}firework
│⭔ ${prefixo}skeleton
│⭔ ${prefixo}blackpink
│⭔ ${prefixo}sand
│⭔ ${prefixo}glue
│⭔ ${prefixo}1917
│⭔ ${prefixo}leaves
│⭔ ${prefixo}glitch2
│⭔ ${prefixo}harrypot
│⭔ ${prefixo}graffiti
│⭔ ${prefixo}glith3
│⭔ ${prefixo}3dspace
│⭔ ${prefixo}lion
│⭔ ${prefixo}wolf
│⭔ ${prefixo}retro
│⭔ ${prefixo}8bit
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, txtpro, footerbot, m)
            }
            break
            case 'mphotooxy': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
potooxy = `┌──⭓ *Photo Oxy Menu*
│
│⭔ ${prefixo}shadow
│⭔ ${prefixo}romantic
│⭔ ${prefixo}smoke
│⭔ ${prefixo}burnpapper
│⭔ ${prefixo}naruto
│⭔ ${prefixo}lovemsg
│⭔ ${prefixo}grassmsg
│⭔ ${prefixo}lovetext
│⭔ ${prefixo}coffecup
│⭔ ${prefixo}butterfly
│⭔ ${prefixo}harrypotter
│⭔ ${prefixo}retrolol
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, potooxy, footerbot, m)
            }
            break
            case 'mephoto': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
ehoto = `┌──⭓ *Ephoto Menu*
│
│⭔ ${prefixo}ffcover
│⭔ ${prefixo}crossfire
│⭔ ${prefixo}galaxy
│⭔ ${prefixo}glass
│⭔ ${prefixo}neon
│⭔ ${prefixo}beach
│⭔ ${prefixo}blackpink
│⭔ ${prefixo}igcertificate
│⭔ ${prefixo}ytcertificate
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, ehoto, footerbot, m)
            }
            break
           case 'mfun': {
            if(!m.isGroup) throw ptbr.group()
            if(!isUser) throw ptbr.userB()
mun = `┌──⭓ *Fun Menu*
│
│⭔ ${prefixo}simih
│⭔ ${prefixo}halah
│⭔ ${prefixo}hilih
│⭔ ${prefixo}huluh
│⭔ ${prefixo}heleh
│⭔ ${prefixo}holoh
│⭔ ${prefixo}jadian
│⭔ ${prefixo}jodohku
│⭔ ${prefixo}delttt
│⭔ ${prefixo}tictactoe
│⭔ ${prefixo}family100
│⭔ ${prefixo}tebak [opção]
│⭔ ${prefixo}math [mode]
│⭔ ${prefixo}suitpvp [@tag]
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, mun, footerbot, m)
            }
            break
            case 'mconvert': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
cnvert = `┌──⭓ *Convert Menu*
│
│⭔ ${prefixo}attp
│⭔ ${prefixo}ttp
│⭔ ${prefixo}toimage
│⭔ ${prefixo}removebg
│⭔ ${prefixo}sticker
│⭔ ${prefixo}emojimix
│⭔ ${prefixo}emojimix2
│⭔ ${prefixo}tovideo
│⭔ ${prefixo}togif
│⭔ ${prefixo}tourl
│⭔ ${prefixo}tovn
│⭔ ${prefixo}tomp3
│⭔ ${prefixo}toaudio
│⭔ ${prefixo}ebinary
│⭔ ${prefixo}dbinary
│⭔ ${prefixo}styletext
│⭔ ${prefixo}smeme
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, cnvert, footerbot, m)
            }
            break
            case 'mmain': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
min = `┌──⭓ *Main Menu*
│
│⭔ ${prefixo}ping
│⭔ ${prefixo}owner
│⭔ ${prefixo}menu / ${prefixo}help / ${prefixo}?
│⭔ ${prefixo}delete
│⭔ ${prefixo}infochat
│⭔ ${prefixo}quoted
│⭔ ${prefixo}listpc
│⭔ ${prefixo}listgc
│⭔ ${prefixo}listonline
│⭔ ${prefixo}speedtest
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, min, footerbot, m)
            }
            break
            case 'mdatabase': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
dtbase = `┌──⭓ *Database Menu*
│
│⭔ ${prefixo}setcmd
│⭔ ${prefixo}listcmd
│⭔ ${prefixo}delcmd
│⭔ ${prefixo}lockcmd
│⭔ ${prefixo}addmsg
│⭔ ${prefixo}listmsg
│⭔ ${prefixo}getmsg
│⭔ ${prefixo}delmsg
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, dtbase, footerbot, m)
            }
            break
            case 'manonymous': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
aonymous = `┌──⭓ *Anonymous Menu*
│
│⭔ ${prefixo}anonymous
│⭔ ${prefixo}start
│⭔ ${prefixo}next
│⭔ ${prefixo}keluar
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, aonymous, footerbot, m)
            }
            break
            
case 'mvoice': {
    if(!m.isGroup) throw ptbr.group()
    if(!isUser) throw ptbr.userB()
vice = `┌──⭓ *Voice Changer*
│
│⭔ ${prefixo}bass
│⭔ ${prefixo}blown
│⭔ ${prefixo}deep
│⭔ ${prefixo}earrape
│⭔ ${prefixo}fast
│⭔ ${prefixo}fat
│⭔ ${prefixo}nightcore
│⭔ ${prefixo}reverse
│⭔ ${prefixo}robot
│⭔ ${prefixo}slow
│⭔ ${prefixo}tupai
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, vice, footerbot, m)
            }
            break
            case 'mowner': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
oner = `┌──⭓ *Menu de Dono*
│
│⭔ ${prefixo}reagir [emoji]
│⭔ ${prefixo}chat [opção]
│⭔ ${prefixo}join [link]
│⭔ ${prefixo}leave
│⭔ ${prefixo}block @user
│⭔ ${prefixo}unblock @user
│⭔ ${prefixo}bcgroup [texto]
│⭔ ${prefixo}bcall [texto]
│⭔ ${prefixo}setppbot [imagem]
│⭔ ${prefixo}setexif
│⭔ ${prefixo}setmenu [opção]
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Voltar' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖Lista de Menus' }, type: 1 },{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, oner, footerbot, m)
            }
            break
            case 'allmenu': {
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
                anu = `*${timeday}* @${me.split('@')[0]}\n*Powered*  : @${ini_mark.split('@')[0]}\n*Creator* : @${ownernya.split('@')[0]}
┌──⭓ *Menu de Grupo*
│
│⭔ ${prefixo}linkgroup
│⭔ ${prefixo}ephemeral [opção]
│⭔ ${prefixo}setppgc [imagem]
│⭔ ${prefixo}setname [texto]
│⭔ ${prefixo}setdesc [texto]
│⭔ ${prefixo}group [opção]
│⭔ ${prefixo}editinfo [opção]
│⭔ ${prefixo}add @user
│⭔ ${prefixo}kick @user
│⭔ ${prefixo}hidetag [texto]
│⭔ ${prefixo}marcar [texto]
│⭔ ${prefixo}antilink [on/off]
│⭔ ${prefixo}mute [on/off]
│⭔ ${prefixo}promote @user
│⭔ ${prefixo}demote @user
│⭔ ${prefixo}vote [texto]
│⭔ ${prefixo}devote
│⭔ ${prefixo}upvote
│⭔ ${prefixo}verificarvoto
│⭔ ${prefixo}deletarvoto
│
└───────⭓
┌──⭓ *Webzone Menu*
│
│⭔ ${prefixo}playstore
│⭔ ${prefixo}gsmarena
│⭔ ${prefixo}jadwalbioskop
│⭔ ${prefixo}nowplayingbioskop
│⭔ ${prefixo}aminio
│⭔ ${prefixo}wattpad
│⭔ ${prefixo}webtoons
│⭔ ${prefixo}drakor
│
└───────⭓
┌──⭓ *Downloader Menu*
│
│⭔ ${prefixo}tiktoknowm [url]
│⭔ ${prefixo}tiktokwm [url]
│⭔ ${prefixo}tiktokmp3 [url]
│⭔ ${prefixo}instagram [url]
│⭔ ${prefixo}twitter [url]
│⭔ ${prefixo}twittermp3 [url]
│⭔ ${prefixo}facebook [url]
│⭔ ${prefixo}pinterestdl [url]
│⭔ ${prefixo}ytmp3 [url]
│⭔ ${prefixo}ytmp4 [url]
│⭔ ${prefixo}getmusic [query]
│⭔ ${prefixo}getvideo [query]
│⭔ ${prefixo}umma [url]
│⭔ ${prefixo}joox [query]
│⭔ ${prefixo}soundcloud [url]
│
└───────⭓
┌──⭓ *Search Menu*
│
│⭔ ${prefixo}play [query]
│⭔ ${prefixo}yts [query]
│⭔ ${prefixo}google [query]
│⭔ ${prefixo}gimage [query]
│⭔ ${prefixo}pinterest [query]
│⭔ ${prefixo}wallpaper [query]
│⭔ ${prefixo}wikimedia [query]
│⭔ ${prefixo}ytsearch [query]
│⭔ ${prefixo}ringtone [query]
│⭔ ${prefixo}stalk [opção] [query]
│
└───────⭓
┌──⭓ *Random Menu*
│
│⭔ ${prefixo}coffe
│⭔ ${prefixo}quotesanime
│⭔ ${prefixo}motivasi
│⭔ ${prefixo}dilanquote
│⭔ ${prefixo}bucinquote
│⭔ ${prefixo}katasenja
│⭔ ${prefixo}puisi
│⭔ ${prefixo}couple
│⭔ ${prefixo}anime
│⭔ ${prefixo}waifu
│
└───────⭓
┌──⭓ *Text Pro Menu*
│
│⭔ ${prefixo}3dchristmas
│⭔ ${prefixo}3ddeepsea
│⭔ ${prefixo}americanflag
│⭔ ${prefixo}3dscifi
│⭔ ${prefixo}3drainbow
│⭔ ${prefixo}3dwaterpipe
│⭔ ${prefixo}halloweenskeleton
│⭔ ${prefixo}sketch
│⭔ ${prefixo}bluecircuit
│⭔ ${prefixo}space
│⭔ ${prefixo}metallic
│⭔ ${prefixo}fiction
│⭔ ${prefixo}greenhorror
│⭔ ${prefixo}transformer
│⭔ ${prefixo}berry
│⭔ ${prefixo}thunder
│⭔ ${prefixo}magma
│⭔ ${prefixo}3dcrackedstone
│⭔ ${prefixo}3dneonlight
│⭔ ${prefixo}impressiveglitch
│⭔ ${prefixo}naturalleaves
│⭔ ${prefixo}fireworksparkle
│⭔ ${prefixo}matrix
│⭔ ${prefixo}dropwater
│⭔ ${prefixo}harrypotter
│⭔ ${prefixo}foggywindow
│⭔ ${prefixo}neondevils
│⭔ ${prefixo}christmasholiday
│⭔ ${prefixo}3dgradient
│⭔ ${prefixo}blackpink
│⭔ ${prefixo}gluetext
│
└───────⭓
┌──⭓ *Photo Oxy Menu*
│
│⭔ ${prefixo}shadow
│⭔ ${prefixo}romantic
│⭔ ${prefixo}smoke
│⭔ ${prefixo}burnpapper
│⭔ ${prefixo}naruto
│⭔ ${prefixo}lovemsg
│⭔ ${prefixo}grassmsg
│⭔ ${prefixo}lovetext
│⭔ ${prefixo}coffecup
│⭔ ${prefixo}butterfly
│⭔ ${prefixo}harrypotter
│⭔ ${prefixo}retrolol
│
└───────⭓
┌──⭓ *Ephoto Menu*
│
│⭔ ${prefixo}ffcover
│⭔ ${prefixo}crossfire
│⭔ ${prefixo}galaxy
│⭔ ${prefixo}glass
│⭔ ${prefixo}neon
│⭔ ${prefixo}beach
│⭔ ${prefixo}blackpink
│⭔ ${prefixo}igcertificate
│⭔ ${prefixo}ytcertificate
│
└───────⭓
┌──⭓ *Fun Menu*
│
│⭔ ${prefixo}simih
│⭔ ${prefixo}halah
│⭔ ${prefixo}hilih
│⭔ ${prefixo}huluh
│⭔ ${prefixo}heleh
│⭔ ${prefixo}holoh
│⭔ ${prefixo}jadian
│⭔ ${prefixo}jodohku
│⭔ ${prefixo}delttt
│⭔ ${prefixo}tictactoe
│⭔ ${prefixo}family100
│⭔ ${prefixo}tebak [opção]
│⭔ ${prefixo}math [mode]
│⭔ ${prefixo}suitpvp [@tag]
│
└───────⭓
┌──⭓ *Convert Menu*
│
│⭔ ${prefixo}attp
│⭔ ${prefixo}ttp
│⭔ ${prefixo}toimage
│⭔ ${prefixo}removebg
│⭔ ${prefixo}sticker
│⭔ ${prefixo}emojimix
│⭔ ${prefixo}emojimix2
│⭔ ${prefixo}tovideo
│⭔ ${prefixo}togif
│⭔ ${prefixo}tourl
│⭔ ${prefixo}tovn
│⭔ ${prefixo}tomp3
│⭔ ${prefixo}toaudio
│⭔ ${prefixo}ebinary
│⭔ ${prefixo}dbinary
│⭔ ${prefixo}styletext
│⭔ ${prefixo}smeme
│
└───────⭓
┌──⭓ *Main Menu*
│
│⭔ ${prefixo}ping
│⭔ ${prefixo}owner
│⭔ ${prefixo}menu / ${prefixo}help / ${prefixo}?
│⭔ ${prefixo}delete
│⭔ ${prefixo}infochat
│⭔ ${prefixo}quoted
│⭔ ${prefixo}listpc
│⭔ ${prefixo}listgc
│⭔ ${prefixo}listonline
│⭔ ${prefixo}speedtest
│
└───────⭓
┌──⭓ *Database Menu*
│
│⭔ ${prefixo}setcmd
│⭔ ${prefixo}listcmd
│⭔ ${prefixo}delcmd
│⭔ ${prefixo}lockcmd
│⭔ ${prefixo}addmsg
│⭔ ${prefixo}listmsg
│⭔ ${prefixo}getmsg
│⭔ ${prefixo}delmsg
│
└───────⭓
┌──⭓ *Anonymous Menu*
│
│⭔ ${prefixo}anonymous
│⭔ ${prefixo}start
│⭔ ${prefixo}next
│⭔ ${prefixo}keluar
│
└───────⭓
┌──⭓ *Voice Changer*
│
│⭔ ${prefixo}bass
│⭔ ${prefixo}blown
│⭔ ${prefixo}deep
│⭔ ${prefixo}earrape
│⭔ ${prefixo}fast
│⭔ ${prefixo}fat
│⭔ ${prefixo}nightcore
│⭔ ${prefixo}reverse
│⭔ ${prefixo}robot
│⭔ ${prefixo}slow
│⭔ ${prefixo}tupai
│
└───────⭓
┌──⭓ *Menu de Dono*
│
│⭔ ${prefixo}react [emoji]
│⭔ ${prefixo}chat [opção]
│⭔ ${prefixo}Entrar [link]
│⭔ ${prefixo}Sair
│⭔ ${prefixo}block @user
│⭔ ${prefixo}unblock @user
│⭔ ${prefixo}bcgroup [texto]
│⭔ ${prefixo}bcall [texto]
│⭔ ${prefixo}setppbot [imagem]
│⭔ ${prefixo}setexif
│⭔ ${prefixo}setmenu [opção]
│
└───────⭓`
                let buttons = [{ buttonId: 'doação', buttonText: { displayText: '🙏Doação' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Regras' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, anu, footerbot, m, {mentions: ments})
            }
            break
            case 'sound1':
                if(!m.isGroup) throw ptbr.group()
                if(!isUser) throw ptbr.userB()
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
Klaus_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${comando}.mp3`)
await client.sendMessage(m.chat, { audio: Klaus_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
        


            default:
                if (budy.startsWith('=>')) {
                    if (!isOwner) return m.reply(ptbr.ownerG())
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isOwner) return m.reply(ptbr.ownerG())
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isOwner) return m.reply(ptbr.ownerG())
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    client.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualização em: ${__filename}`))
	delete require.cache[file]
	require(file)
})
