const { default: makeWASocket, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');


/// Node Modules
const mimetype = require("mime-types")
const fs = require('fs');
const P = require('pino');
const chalk = require('chalk')
const moment = require('moment-timezone')
const clc = require('cli-color')
const NodeCache = require('node-cache');
//const uber = require('uberduck-api')
const cheerio = require("cheerio");
const readline = require("readline");
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const infoSystem = require('os')
const { init, askAI } = require("bard-ai")

///

let bancht = JSON.parse(fs.readFileSync('./functions/banchat.json'));
const infoBot = JSON.parse(fs.readFileSync('./config/config.json'));
const imagemdomenu = "https://telegra.ph/file/91734dc02ee089ecc883b.jpg"
const { palavras } = require('./functions/conselhos.js');
const { fromBuffer } = require("file-type");
const bye_group2 = JSON.parse(fs.readFileSync('./functions/byegp.json'));
const { insert, response } = require('./functions/simi.js');
const premium = JSON.parse(fs.readFileSync('./database/user/premium/premium.json'));
const nivel = JSON.parse(fs.readFileSync("./database/user/nivel/nivel.json"));
const antidoc = JSON.parse(fs.readFileSync('./database/group/ativadores/antidoc.json'))
const antiimg = JSON.parse(fs.readFileSync('./database/group/ativadores/antiimg.json'))
const lista = JSON.parse(fs.readFileSync('./functions/lista.json'))
const sotoy = JSON.parse(fs.readFileSync('./functions/sotoy.json'))
const antiaudio = JSON.parse(fs.readFileSync('./database/group/ativadores/antiaudio.json'))
const antisticker = JSON.parse(fs.readFileSync('./database/group/ativadores/antisticker.json'))
const antivid = JSON.parse(fs.readFileSync('./database/group/ativadores/antivideo.json'))
const autoreact = JSON.parse(fs.readFileSync('./database/group/ativadores/autoreact.json'))
const muted = JSON.parse(fs.readFileSync('./database/user/muted.json'))
const { menu, menuadm, menudono, menuanime, wallpaperm, menurpg, lojarpg } = require('./menus/menu.js')
const { runtime } = require("./functions/myfunc.js")
const { convertSticker } = require("./functions/swm.js");
const { isUrl } = require("./functions/lib/myfunc.js")
const { EmojiAPI } = require("emoji-api")
const autofigu = JSON.parse(fs.readFileSync('./database/group/ativadores/autofigu.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/group/ativadores/autosticker.json'));
const { menuprem } = require("./functions/menuprem.js")
const { palavrasANA, quizanime, quizanimais } = require('./functions/jogos.js');
const speed = require("performance-now");
const { exec, spawn, execSync } = require("child_process")
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) }
const { fetchJson } = require("./functions/lib/fetcher.js")
const { Error } = JSON.parse(fs.readFileSync('./functions/Erro.json'));

const welcome_group = JSON.parse(fs.readFileSync('./functions/welcomegp.json'));

const antipv = JSON.parse(fs.readFileSync('./database/group/ativadores/antipv.json'))

const antilinkgp = JSON.parse(fs.readFileSync('./database/group/ativadores/antilinkgp.json'))
const antiflood = JSON.parse(fs.readFileSync('database/group/ativadores/antiflood.json'))

const progp = JSON.parse(fs.readFileSync('./functions/pro.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/ativadores/welkom.json'));
const hora = moment.tz('America/Sao_Paulo').format('HH:mm');
const dataz = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')

const { getBuffer, getRandom, getExtension } = require('./funções/lib/funções.js')

const anotar = JSON.parse(fs.readFileSync('./database/group/notas/notas.json'));

const onlyadm = JSON.parse(fs.readFileSync('./database/group/ativadores/onlyadm.json'))
const onlyowner = JSON.parse(fs.readFileSync('./database/group/ativadores/onlyowner.json'))

require('./images/images.js')


/// Função de registro 

const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./funções/registro/register.js')

/// Função de Premium

const { addPremiumUser, dellprem, getPremiumExpired, checkOwner, expiredCheck, checkPremiumUser } = require("./funções/premium/premium.js")

/// antispam

const { isFiltered, addFilter } = require('./funções/lib/spam.js')

/// transforma figurinha em gif

const webp_mp4 = require("./funções/lib/webp_mp4.js")

/// importação atm

const { checkATMuser, confirmATM, addKoinUser, addATM } = require('./funções/rpg/atm.js')

/// count de mensagens

const countMessage = JSON.parse(fs.readFileSync('./database/group/countmessage.json'));

/// contador de comandos
const { cmdadd } = require('./funções/lib/totalcmd.js')

const totalcmd = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))[0].totalcmd

/// função rpg

const dinheiro = JSON.parse(fs.readFileSync("./database/user/dinheiro/dinheiro.json"));
const roupab = JSON.parse(fs.readFileSync('./database/user/roupa/roupa.json'));
const casa = JSON.parse(fs.readFileSync('./database/user/casa/casa.json'));
const aguacoco = JSON.parse(fs.readFileSync('./database/user/compras/aguacoco.json'));
const calça = JSON.parse(fs.readFileSync('./database/user/compras/calça.json'));
const carab = JSON.parse(fs.readFileSync('./database/user/compras/capacete.json'));
const tagrico = JSON.parse(fs.readFileSync('./database/user/compras/tagrico.json'));
const sapato = JSON.parse(fs.readFileSync('./database/user/compras/sapato.json'));
const palitor = JSON.parse(fs.readFileSync('./database/user/compras/palitor.json'));
const espada = JSON.parse(fs.readFileSync('./database/user/compras/espada.json'));
////

gayzin = gayzão
fein = feião 
matei = mateii
cornin = cornão
vesgin = vesgão
bebin = bebão
gadin = gadão
gostosin = gostosão
gostosinha = gostosona 
hitler = nazista
tapinha = tapão
beijin = beijão
chutin = chutão
dancinha = dança 
casalzin = casar
soquin = socão 

/// função level

const { addLevelingXp, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingLevel, addLevelingId } = require('./funções/rpg/level.js')

/// Função de Antiflood

const limitefll = JSON.parse(fs.readFileSync('./database/user/flood.json'));


const token = {//SEU TOKEN IA
    bard: "AIzaSyBjYlS76GBkkzx0zR9qZkP-WmaMMHSh8Jk",
    gpt : '',
    bing : "",
   }

/* Música **/ 

const { play1, play2 } = require("./funções/música/scraper-play.js");
const { NoticiasAoMinuto } = require('./funções/lib/scraper2.js')

/* Respostas **/
const { ptbr } = require('./mess/index.js');

module.exports = client = async (client, info, connection, prefix, nomeBot, NomeBot, NomeDoBot, nomeDono, numeroDono, color, DLT_FL) => {
    const cliente = client;
    try {
        function getGroupAdmins(participants) {
            admins = []
            for (let i of participants) {
                if (i.admin == 'admin') admins.push(i.id)
                if (i.admin == 'superadmin') admins.push(i.id)
            }
            return admins
        }
        
        const donoOficial = [`${numeroDono}@s.whatsapp.net`]
        const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
        const content = JSON.stringify(info.message);
        const altpdf = Object.keys(info.message)
        global.prefix
        const from = info.key.remoteJid
        var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

        const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
        const reply = (text) => {
            client.sendMessage(from, { text: text }, { quoted: info })
        }

        const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant
        var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
        const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false
        const pushname = info.pushName ? info.pushName : ''
        const username = info.username ? info.username : ''
        const isGroup = info.key.remoteJid.endsWith('@g.us')
        const sender = isGroup ? info.key.participant : info.key.remoteJid
        if (isGroup && fs.existsSync(`./functions/anagrama-${from}.json`)) {
            let dataAnagrama = JSON.parse(fs.readFileSync(`./functions/anagrama-${from}.json`))
            if (budy.slice(0, 4).toUpperCase() == dataAnagrama.original.slice(0, 4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
            xp = Math.floor(Math.random() * 14) + 3000
            if (budy.toUpperCase() == dataAnagrama.original) {

                let ano = {
                    image: { url: logo },
                    caption: `
parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos..
`,
                    lfooter: "",
                    //buttons: buttons,
                    headerType: 4
                }

                client.sendMessage(from, ano, { "mentionedJid": [sender] }), fs.unlinkSync(`./functions/anagrama-${from}.json`)
                addLevelingXp(sender, xp)
                recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
                reply(recompensa)
                setTimeout(async () => {
                    fs.writeFileSync(`./functions/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
                    let dataAnagrama2 = JSON.parse(fs.readFileSync(`./functions/anagrama-${from}.json`))

                    let ani = {
                        image: { url: logo },
                        caption: `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`,
                        lfooter: `${nomeBot}`,
                        //buttons: buttons,
                        headerType: 4
                    }

                    client.sendMessage(from, ani)
                }, 5000)
            }
        }

        //// sistema rpg

const isRoupab = roupab.includes(sender)

const iscasa = casa.includes(sender)

const isaguacoco = aguacoco.includes(sender)

const isCarab = carab.includes(sender) 

const isCaussa = calça.includes(sender)

const istagrico = tagrico.includes(sender)

const isSapato = sapato.includes(sender)

const isPalitor = palitor.includes(sender) 

const isespada = espada.includes(sender)

/// adiciona dinheiro 

const checkATM = checkATMuser(sender)
            try {
                if (info.key.fromMe) return 
                if (checkATM === undefined) addATM(sender)
                dinheirosaku = Math.floor(Math.random() * 10) + 50 //GANHA ENTRA 10 * 50 POR CADA MSG
                addKoinUser(sender, dinheirosaku)
            } catch (err) {
                console.error(err)
            }

        ///////////////////////////////////////////////
        //DEFINIÇÕES DO LEVELING
        ///////////////////////////////////////////////

        const anuncio = (text) => {
            client.sendMessage(from, {
                text: text,
                contextInfo: {
                    "externalAdReply": {
                        title: `${NomeDoBot}`,
                        mediaType: 1,
                        renderLargerThumbnail: false,
                        showAdAttribution: true,
                        body: `𝑩𝒚 ${nomeDono}`,
                        thumbnail: { url: `https://telegra.ph/file/91734dc02ee089ecc883b.jpg` },
                        mediaUrl: `${q}`,
                        sourceUrl: `${q}`,
                        headerType: 4
                    }
                }
            })
        }

        const _leveling = JSON.parse(fs.readFileSync('./database/group/ativadores/nivel.json'))
        const levelingOn = JSON.parse(fs.readFileSync('./database/group/ativadores/nivel.json'))
        const isLevelingOn = isGroup ? _leveling.includes(from) : true
        const { getUserRank, addCooldown, leveltab } = require('./functions/lib/leveling.js')
        
        /********** FUNCTION RANK **********/

        var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
        const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        const perl = peri - getLevelingXp(sender)
        const resl = Math.round(100 - ((perl / getLevelingXp(sender)) * 100))
        if (resl <= 10) {
            per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 20) {
            per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 30) {
            per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 40) {
            per = `*[████▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 50) {
            per = `*[█████▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 60) {
            per = `*[██████▒▒▒▒] ${resl}%*`
        } else if (resl <= 70) {
            per = `*[███████▒▒▒] ${resl}%*`
        } else if (resl <= 80) {
            per = `*[████████▒▒] ${resl}%*`
        } else if (resl <= 90) {
            per = `*[█████████▒] ${resl}%*`
        } else if (resl <= 100) {
            per = `*[██████████] ${resl}%*`
        }
        const levelRole = getLevelingLevel(sender)
        var role = 'Bronze I🥉'
        if (levelRole <= 3) {
            role = 'Bronze I 🥉'
        } else if (levelRole <= 5) {
            role = 'Bronze II 🥉'
        } else if (levelRole <= 10) {
            role = 'Bronze III 🥉'
        } else if (levelRole <= 15) {
            role = 'Bronze IV 🥉'
        } else if (levelRole <= 20) {
            role = 'Bronze V 🥉'
        } else if (levelRole <= 25) {
            role = 'Prata I 🥈'
        } else if (levelRole <= 30) {
            role = 'Prata II 🥈'
        } else if (levelRole <= 35) {
            role = 'Prata III 🥈'
        } else if (levelRole <= 40) {
            role = 'Prata IV 🥈'
        } else if (levelRole <= 45) {
            role = 'Prata V 🥈'
        } else if (levelRole <= 50) {
            role = 'Ouro I 🥇'
        } else if (levelRole <= 55) {
            role = 'Ouro II 🥇'
        } else if (levelRole <= 60) {
            role = 'Ouro III 🥇'
        } else if (levelRole <= 65) {
            role = 'Ouro IV 🥇'
        } else if (levelRole <= 70) {
            role = 'Ouro V 🥇'
        } else if (levelRole <= 75) {
            role = 'Campeão I 🏆'
        } else if (levelRole <= 80) {
            role = 'Campeão II 🏆'
        } else if (levelRole <= 85) {
            role = 'Campeão III 🏆'
        } else if (levelRole <= 90) {
            role = 'Campeão IV 🏆'
        } else if (levelRole <= 95) {
            role = 'Campeão V 🏆'
        } else if (levelRole <= 100) {
            role = 'Diamante I 💎'
        } else if (levelRole <= 110) {
            role = 'Diamante II 💎'
        } else if (levelRole <= 120) {
            role = 'Diamante III 💎'
        } else if (levelRole <= 130) {
            role = 'Diamante IV 💎'
        } else if (levelRole <= 140) {
            role = 'Diamante V 💎'
        } else if (levelRole <= 150) {
            role = 'Mestre I 🔥'
        } else if (levelRole <= 170) {
            role = 'Mestre II 🔥'
        } else if (levelRole <= 180) {
            role = 'Mestre III 🔥'
        } else if (levelRole <= 190) {
            role = 'Mestre IV 🔥'
        } else if (levelRole <= 200) {
            role = 'Mestre V 🔥'
        } else if (levelRole <= 250) {
            role = 'Mítico I 🔮'
        } else if (levelRole <= 300) {
            role = 'Mítico II 🔮'
        } else if (levelRole <= 350) {
            role = 'Mítico III 🔮'
        } else if (levelRole <= 400) {
            role = 'Mítico IV 🔮'
        } else if (levelRole <= 450) {
            role = 'Mítico V 🔮'
        } else if (levelRole <= 500) {
            role = 'Lenda I ⚡'
        } else if (levelRole <= 550) {
            role = 'Lenda II ⚡'
        } else if (levelRole <= 600) {
            role = 'Lenda III ⚡'
        } else if (levelRole <= 650) {
            role = 'Lenda IV ⚡'
        } else if (levelRole <= 700) {
            role = 'Lenda V ⚡'
        } else if (levelRole <= 750) {
            role = 'Lendário I 🎑'
        } else if (levelRole <= 800) {
            role = 'Lendário II 🎑'
        } else if (levelRole <= 850) {
            role = 'Lendário III 🎑'
        } else if (levelRole <= 900) {
            role = 'Lendário IV 🎑'
        } else if (levelRole <= 910) {
            role = 'Lendário V 🎑'
        } else if (levelRole <= 920) {
            role = 'EL MESTRE I 🏅'
        } else if (levelRole <= 930) {
            role = 'EL MESTRE II 🏅'
        } else if (levelRole <= 940) {
            role = 'EL MESTRE III 🏅'
        } else if (levelRole <= 950) {
            role = 'EL MESTRE IV 🏅'
        } else if (levelRole <= 10000) {
            role = '⚡️ BRIGADEIRO ⚡️'
        }

        /// Função de Adicionar Level se o Leveling Estiver Ativado

        if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await client.sendMessage(from, { text: `*「 LEVEL UP 」*\n\n➸ *Nome*: *${pushname}*\n *Número:* @${sender.split('@')[0]}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎉🎉` })
                }
            } catch (err) {
                console.error(err)
            }
        }
        
       ///

        const getLevel = getLevelingLevel(sender)
        const tictactoe = JSON.parse(fs.readFileSync('./functions/database/tictactoe.json'));

        ///////////////////////////////////////////////
        // IS DE functions PARA ADM
        ///////////////////////////////////////////////

        const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false
        const isApenasAdms = isGroup ? onlyadm.includes(from) : false
        const isApenasDono = isGroup ? onlyowner.includes(from) : false
        const isAntiFlood = isGroup ? antiflood.includes(from) : false	
        const isPro = isGroup ? progp.includes(from) : false
        const Antidoc = isGroup ? antidoc.includes(from) : false
        const isAntiAudio = isGroup ? antiaudio.includes(from) : false
        const isAntiVid = isGroup ? antivid.includes(from) : false
        const isAntiImg = isGroup ? antiimg.includes(from) : false
        const isAntiSticker = isGroup ? antisticker.includes(from) : false
        const isAutoReact = isGroup ? autoreact.includes(from) : false
        const isAutoSticker = isGroup ? autosticker.includes(from) : false
        const isBanchat = isGroup ? bancht.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const emoji = new EmojiAPI()
        const isPremium = premium.includes(sender)

        ///////////////////////////////////////////////
        //functions PARA COMANDO DE GRUPO
        ///////////////////////////////////////////////

        const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        selectedButton = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const participants = isGroup ? await groupMetadata.participants : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const argss = body.split(/ +/g)
        const botNumber = client.user.id.split(':')[0] + '@s.whatsapp.net'
        const args = body.trim().split(/ +/).slice(1);
        const text = args.join(" ")
        q = args.join(" ")
        const menc_jid = args.join(" ").replace("@", "") + "@s.whatsapp.net"
        const menc_os2 = q.includes("@") ? menc_jid : menc_prt 
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? client.sendMessage(from, { text: teks.trim(), mentions: memberr }) : client.sendMessage(from, { text: teks.trim(), mentions: memberr })
        }

        const groupIdWelcomed = []
        for (let obj of welcome_group) groupIdWelcomed.push(obj.id)

        const groupIdBye = []
        for (let obj of bye_group2) groupIdBye.push(obj.id)

        const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

        const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false
        ///////////////////////////////////////////////
        //ISQUOTED
        ///////////////////////////////////////////////
        const isImage = type == 'imageMessage'
        const isVideo = type == 'videoMessage'
        const isAudio = type == 'audioMessage'
        const isSticker = type == 'stickerMessage'
        const isContact = type == 'contactMessage'
        const isLocation = type == 'locationMessage'
        const isProduct = type == 'productMessage'
        const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
        typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = "Image"
        else if (isVideo) typeMessage = "Video"
        else if (isAudio) typeMessage = "Audio"
        else if (isSticker) typeMessage = "Sticker"
        else if (isContact) typeMessage = "Contact"
        else if (isLocation) typeMessage = "Location"
        else if (isProduct) typeMessage = "Product"
        const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
        const getFileBuffer = async (mediakey, MediaType) => {
            const stream = await downloadContentFromMessage(mediakey, MediaType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }
            return buffer
        }
        const isGroupAdmins = groupAdmins.includes(sender) || false
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isUser = checkRegisteredUser(sender)

        ///////////////////////////////////////////////
        //FUNÇÃO DE DONO 
        ///////////////////////////////////////////////
        const isOwner = sender.includes(infoBot.owner)
        /////////////////////////////////////////////////

        const sendBtext = async (id, text1, desc1, but = [], vr) => {
            buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
            client.sendMessage(id, buttonMessage, { quoted: vr })
        }

        const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
            buttonMessage = { image: { url: img1 }, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
            client.sendMessage(id, buttonMessage, { quoted: vr })
        }

        const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
            templateMessage = { image: { url: img1 }, caption: text1, footer: desc1, templateButtons: but, }
            client.sendMessage(id, templateMessage, { quoted: vr })
        }

        const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => {
            buttonMessage = { video: { url: gif1 }, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
            client.sendMessage(id, buttonMessage, { quoted: vr })
        }
        //*******************************************//
/// função de count message

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./database/group/countmessage.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./database/group/countmessage.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./database/group/countmessage.json', JSON.stringify(countMessage, null, 2) + '\n')
}

//// limpa da contagem quem tiver saido do grupo
        async function LIMPARDOCNT_QUEMJASAIU() {
            var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
            CNT1 = []; for ( i of groupMembers) {CNT1.push(i.id)} 
            CNT = []; for ( i of RD_CNT) {
            if(!CNT1.includes(i.id)) CNT.push(i)}
            for ( i of CNT) {
            RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)}
            fs.writeFileSync("./database/group/countmessage.json", JSON.stringify(countMessage, null, 2))
            }


            

            const dirGroup = `./database/group/grupos/${from}.json`;

            const data_IDGP = [{
                groupId: from, x9: false, 
                antiimg: false, antivideo: false,
                antiaudio: false, antisticker: false,
                antidoc: false, antictt: false,
                antiloc: false, antilinkgp: false,
                antilinkhard: false,
                Odelete: false, antispam: false, 
                antinotas: false, anticatalogo: false,
                sistemGold: false, visuUnica: false, 
                registrarFIGUS: false, soadm: false,
                rg_aluguel: false,
                listanegra: [], advertir: [], prefixos: ["!"],
                advertir2: [], legenda_estrangeiro: "0",
                legenda_documento: "0", legenda_video: "0",
                legenda_imagem: "0", multiprefix: false, 
                forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}],
                minerar_gold: [], ausentes: [], forca_inc: false, 
                antipalavrao: {
                active: false,
                palavras: []
                },
                limitec: {
                active: false,
                quantidade: null
                },
                wellcome: [{
                bemvindo1: false,
                legendabv: "Olá #numerodele#, seja bem vindo (a)",
                legendasaiu: 0
                },
                {
                bemvindo2: false,
                legendabv: "Olá #numerodele#, seja bem vindo (a)",
                legendasaiu: 0
                }],
                simi1: false, simi2: false,
                autosticker: false, autoresposta: false,
                jogos: false, level: false,
                bangp: false, nsfw: false
                }];
                
                if(isGroup && !fs.existsSync(dirGroup)){
                fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP, null, 2) + '\n');
                }
                
                try {
                var dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined;
                } catch (e){
                fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP));
                }
                
                function setGp(index){
                fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}
                
                function setNes(index){
                fs.writeFileSync(nescj, JSON.stringify(index, null, 2))}
                
                const reagir = async (idgp, emj) => {
                    var reactionMessage = {
                    react: {
                    text: emj, 
                    key: info.key
                    }
                    } 
                    client.sendMessage(idgp, reactionMessage)
                    }

        // VERIFICADOS ⭐️
        const live = info
        const imgm = info
        const vid = info
        const contato = info
        const doc = info


        const argsButton = selectedButton.trim().split(/ +/)
        const dbids = []
        for (i = 0; i < lista.length; ++i) {
            dbids.push(lista[i].groupId)
        }
        const islista = (isGroup && dbids.indexOf(from) >= 0) ? true : false



        const enviarfigu = async (figu, tag) => {
            bla = fs.readFileSync(figu)
            client.sendMessage(from, { sticker: bla }, { quoted: info })
        }

        const enviarfiguUrl = async (link) => {
            ranp = getRandom('.gif')
            rano = getRandom('.webp')
            ini_buffer = `${link}`
            exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
                fs.unlinkSync(ranp)
                buff = fs.readFileSync(rano)
                client.sendMessage(from, { sticker: buff }, { quoted: info }).catch(e => {
                })
                fs.unlinkSync(rano)
            })
        }

        if (isAutoSticker && isGroup) {
            async function autofiguf() {
                await setTimeout(async () => {
                    if (budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return
                    if (type === "videoMessage") {
                        if ((isMedia && info.message.videoMessage.seconds < 40)) {
                            rane = getRandom('.' + await getExtension(info.message.videoMessage.mimetype))
                            buffimg = await getFileBuffer(info.message.videoMessage, 'video')
                            fs.writeFileSync(rane, buffimg)
                            const media = rane
                            rano = getRandom('.webp')
                            await ffmpeg(`./${media}`)
                                .inputFormat(media.split('.')[1])
                                .on('start', function (cmd) {
                                    console.log(`Started : ${cmd}`)
                                })
                                .on('error', function (err) {
                                    console.log(`Error : ${err}`)
                                    exec(`webpmux -set exif ${addMetadata('bot', 'manu')} ${rano} -o ${rano}`, async (error) => {
                                        fs.unlinkSync(media)
                                        tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                        reply(`Falha na conversão de ${tipe} para sticker`)
                                    })
                                })
                            exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                                fs.unlinkSync(media)
                                buffer = fs.readFileSync(rano)
                                client.sendMessage(from, { sticker: buffer }, { quoted: info })
                                fs.unlinkSync(rano)
                            })
                        }
                    }

                    if (type === "imageMessage") {
                        rane = getRandom('.' + await getExtension(info.message.imageMessage.mimetype))
                        buffimg = await getFileBuffer(info.message.imageMessage, 'image')
                        fs.writeFileSync(rane, buffimg)
                        const media = rane
                        rano = getRandom('.webp')
                        exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                            fs.unlinkSync(media)
                            buffer = fs.readFileSync(rano)
                            client.sendMessage(from, { sticker: buffer }, { quoted: info })
                            fs.unlinkSync(rano)
                        })
                    }
                }, 1000)
            }
            autofiguf().catch(e => {
                console.log(e)
            })
        }

        var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        const isBot = info.key.fromMe ? true : false

        if (isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins && !isOwner && !isBot) {
            if (!isAntilinkgp) return
            if (!isUrl(body)) return
            if (body.includes("http")) {
                if (!budy2.includes("http")) return
                linkgpp = await client.groupInviteCode(from)
                if (budy.match(`${linkgpp}`)) return
                if (!JSON.stringify(groupMembers).includes(sender)) return
                client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }
        }

        enviar = reply

        const cmde = budy.toLowerCase().split(" ")[0] || "";
        let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        if (isAutoReact && isGroup && isCmd) {
            if (!isAutoReact) return
            emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
            reassao = emojis[Math.floor(Math.random() * emojis.length)]
            sendMsg = await client.sendMessage(from, { react: { text: reassao, key: info.key } })
        }

        if (isAutoReact && isGroup && !isCmd) {
            if (!isAutoReact) return
            emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
            reassao = emojis[Math.floor(Math.random() * emojis.length)]
            sendMsg = await client.sendMessage(from, { react: { text: reassao, key: info.key } })
        }

        const samih2 = JSON.parse(fs.readFileSync('./functions/simi.json'));

        const isSimi2 = isGroup ? samih2.includes(from) : false


        if (!isCmd && isSimi2 && isGroup) {
            if (isCmd || isUrl(budy2)) return
            if (budy.length >= 500) return
            if (budy.includes("@55")) return
            if (info.key.fromMe) return
            if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
            insert(type, info)
            const sami = await response(budy)

            if (sami) client.sendMessage(from, { text: sami, thumbnail: imagemdomenu }, { quoted: info });
        }

        async function upload(Path) {
            return new Promise(async (resolve, reject) => {
                if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
                try {
                    const form = new BodyForm();
                    form.append("file", fs.createReadStream(Path))
                    const data = await axios({
                        url: "https://telegra.ph/upload",
                        method: "POST",
                        headers: {
                            ...form.getHeaders()
                        },
                        data: form
                    })
                    return resolve("https://telegra.ph" + data.data[0].src)
                } catch (err) {
                    return reject(new Error(String(err)))
                }
            })
        }

        function writeExifImg(media, metadata) {
            let wMedia = imageToWebp(media)
            const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
            const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
            fs.writeFileSync(tmpFileIn, wMedia)
            const react = (texto) => {
                return cliente.sendMessage(origem, { react: { text: texto, key: info.key } })
            };
            if (metadata.packname || metadata.author) {
                const img = new webp.Image()
                const json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
                const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                const exif = Buffer.concat([exifAttr, jsonBuff])
                exif.writeUIntLE(jsonBuff.length, 14, 4)
                img.load(tmpFileIn)
                fs.unlinkSync(tmpFileIn)
                img.exif = exif
                img.save(tmpFileOut)
                return tmpFileOut
            }
        }

        if (isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
            if (isGroupAdmins) return 
            await client.sendMessage(from, { text: 'Sem Figurinhas nessa Porra, Banido <3' }, { quoted: info })
            setTimeout(async function () {
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
        }

        if (isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
            if (isGroupAdmins) return 
            await client.sendMessage(from, { text: 'Sem Imagem no Grupo, Adeus' }, { quoted: info })
            setTimeout(async function () {
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
        }

        if (isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
            if (isGroupAdmins) return 
            await client.sendMessage(from, { text: 'Sem Video, banido' }, { quoted: info })
            setTimeout(async function () {
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
        }

        if (Antidoc && isBotGroupAdmins && type == 'documentMessage') {
            if (isGroupAdmins) return 
            await client.sendMessage(from, { text: 'Sem Documento aqui, tá maluco porra? banido' }, { quoted: info })
            setTimeout(async function () {
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
        }

        if (isAntiPv && !isGroup && !isOwner) {
            msgpvblock = `./func/call/msg_block-${sender}.json`
            fs.writeFileSync(msgpvblock, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR ENVIAR MENSAGEM PARA O BOT\n\n_- REALIZANDO AÇÃO _-", null, 2))
            msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock))
            reply(msgmsglbl)
            fs.unlinkSync(msgpvblock)
            setTimeout(async () => {
                client.updateBlockStatus(sender, 'block')
            }, 22)
            return
        }

        if (isBanchat && !isGroupAdmins && !isOwner) {
            if (!isGroupAdmins && !isOwner) return
            if (budy.toLowerCase().startsWith('unbangp')) {
                if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido!`)
                let lfd = bancht.indexOf(from)
                bancht.splice(lfd, 1)
                fs.writeFileSync('./functions/banchat.json', JSON.stringify(bancht))
                reply(`Grupo desbanido...`)
            }
        }

        if (isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
            if (isGroupAdmins) return 
            await client.sendMessage(from, { text: 'Sem Audio, Adeus Mlk' }, { quoted: info })
            setTimeout(async function () {
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
        }
        
function kyun(seconds){
    function pad(s){ return (s < 10 ? '0' : '') + s;}
    var hours = Math.floor(seconds / (60*60));
    var minutes = Math.floor(seconds % (60*60) / 60);
    var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
    const convertBytes = function(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
    if (bytes == 0) {
    return "n/a"
}
}

        /** Console log de comandos */
        comando = command
        if (isGroup) {
            if (isCmd && !isBot) {
                console.log(
                    color(`\n “𝘔𝘦n𝘴𝘢𝘨𝘦𝘮 𝘦𝘮 𝘨𝘳𝘶𝘱𝘰 ”`, 'blue'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${comando}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙶𝚁𝚄𝙿𝙾: ${groupName}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
            } else if (!isBot) {
                console.log(
                    color(`\n “𝘔𝘦n𝘴𝘢𝘨𝘦𝘮 𝘦𝘮 𝘨𝘳𝘶𝘱𝘰 ”`, 'blue'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙽𝚄́𝙼𝙴𝚁𝙾: ${color('Não', 'red')}`, 'orange'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙶𝚁𝚄𝙿𝙾: ${groupName}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
            }
        } else {
            if (isCmd && !isBot) {
                console.log(
                    color(`\n “𝘔𝘦n𝘴𝘢𝘨𝘦𝘮 𝘯𝘰 𝘱𝘳𝘪𝘷𝘢𝘥𝘰”`, 'blue'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${comando}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
            } else if (!isBot) {
                console.log(
                    color(`\n “𝘔𝘦n𝘴𝘢𝘨𝘦𝘮 𝘯𝘰 𝘱𝘳𝘪𝘷𝘢𝘥𝘰”`, 'blue'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${color('Não', 'red')}`, 'orange'),
                    color(`\n➱ ๖ۣۜ͜͡💜𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
            } 
            }

    /// Mute de Usuario

const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
reply(`🐤😡 *Você deu um piu?* - Agora prepare-se para o seu julgamento!`)
setTimeout(async () => {
    client.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
return
}

/// antiflood
if(fs.existsSync(`./database/group/limite-c_${from}.json`)) {
    var limitecaracteres_on = JSON.parse(fs.readFileSync(`./database/group/limite-c_${from}.json`))
    var limitefl = limitecaracteres_on.limite
    } else {
    var limitefl = limitefll.limitefl
    }
    if (body.client >= limitefl) {
    if (isAntiFlood && !isBot && !isGroupAdmins && !isOwner)
    var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
    setTimeout( () => {
    if(!info.key.fromMe && !isGroupAdmins && !isOwner) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
    console.log(color('Spam','red'))
    }, 100)
    setTimeout( () => {
    client.groupParticipantsUpdate(from, [sender], 'remove')
    }, 1000)
    setTimeout( () => {
    }, 0)
    }

/// antispam de comandos

if (isCmd && !isOwner && !isGroupAdmins && !isPremium) {
    if (isFiltered(sender)) {
    return reagir(from, '👺')
} else {
    addFilter(sender)
}
} 

/// para deixar os comandos apenas para dono ou adm
if (isApenasDono && isGroup && isCmd && !isOwner) {
    if (isGroupAdmins) {
    return reply('apenas o dono pode usar comandos por agora')
} else {
    return reagir(from, '👺')
}
} if (isApenasAdms && isCmd && isGroup && !isOwner && !isGroupAdmins) {
    return reagir(from, '👺')
}

// contador de comandos

if (isCmd) cmdadd()

        switch (command) {

            case "teste":
                client.sendMessage(from, { poll: { name: `teste`, values: [`teste`, `Klaus`], selectableCount: 1 } }, { quoted: info });
                break

            case 'registrar':
                if(!isGroup) return reply(ptbr.grupo())
                if (isUser) return reply ('**Você já está registrado**')
				if (!q.includes('|')) return reply(`𝗗𝗶𝗴𝗶𝘁𝗲 𝗱𝗮 𝗳𝗼𝗿𝗺𝗮 𝗰𝗲𝗿𝘁𝗮:\n𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${prefix}𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝗻𝗼𝗺𝗲|𝗶𝗱𝗮𝗱𝗲\n𝗘𝘅𝗲𝗺𝗽𝗹𝗼: ${prefix}𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝗸𝗹𝗮𝘂𝘀|𝟮𝟬`)
				const namaUser = q.substring(0, q.indexOf('|') - 0)
				const umurUser = q.substring(q.lastIndexOf('|') + 1)
				const serialUser = createSerial(20)
				if(isNaN(umurUser)) return reply(`𝗗𝗶𝗴𝗶𝘁𝗲 𝗱𝗮 𝗳𝗼𝗿𝗺𝗮 𝗰𝗲𝗿𝘁𝗮:\n𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${prefix}𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝗻𝗼𝗺𝗲|𝗶𝗱𝗮𝗱𝗲\n𝗘𝘅𝗲𝗺𝗽𝗹𝗼: ${prefix}𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝗸𝗹𝗮𝘂𝘀|𝟮𝟬`)
				if (namaUser.length >= 60) return reply(`𝐬𝐞𝐮 𝐧𝐨𝐦𝐞 é 𝐦𝐮𝐢𝐭𝐨 𝐥𝐨𝐧𝐠𝐨`)
				if (umurUser > 2000) return reply(`𝗜𝗱𝗮𝗱𝗲 𝗺𝗮𝘅𝗶𝗺𝗮 𝗱𝗲 2000 𝗮𝗻𝗼𝘀`)
				if (umurUser < 12) return reply(`𝗜𝗱𝗮𝗱𝗲 𝗺𝗶𝗻𝗶𝗺𝗮 é 𝟭𝟮 𝗮𝗻𝗼𝘀`)
				veri = sender
				try {
				ppimg = await client.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
				} catch {
				ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
				}
				captionnya = 
					`𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨 𝐜𝐨𝐦 𝐬𝐮𝐜𝐞𝐬𝐬𝐨✅\n𝗦𝗲𝗿𝗶𝗮𝗹: \n*${serialUser}*\n╔════════════════\n╠≽️ 𝗗𝗶𝗮: ${dataz}\n╠≽️ 𝗛𝗼𝗿𝗮: ${hora}\n╠≽️ 𝗡𝗼𝗺𝗲 𝗱𝗲 𝘂𝘀𝘂á𝗿𝗶𝗼: @${sender.split("@")[0]}\n╠≽️ 𝙉𝙤𝙢𝙚 𝙙𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤: ${namaUser}\n╠≽️ 𝗜𝗱𝗮𝗱𝗲: ${umurUser}\n╠≽️ 𝗦𝗲𝘂 𝗹𝗶𝗻𝗸 𝘄𝗮𝗺𝗲: wa.me/${sender.split("@")[0]}\n╠≽️ 𝙉ú𝙢𝙚𝙧𝙤: ${sender.split("@")[0]}\n╚════════════════
					𝗩𝗼𝗰ê 𝘀𝗲 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗼𝘂, 𝘿𝙞𝙜𝙞𝙩𝙚 ${prefix}Menu 𝗣𝗮𝗿𝗮 𝘃𝗲𝗿 𝗮 𝗹𝗶𝘀𝘁𝗮 𝗱𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀`
					daftarimg = await getBuffer(ppimg)
					addRegisteredUser(sender, namaUser, umurUser, dataz, serialUser)
					client.sendMessage(from, { image: daftarimg, quoted: info, caption: captionnya, contextInfo: {mentionedJid: [sender]}})                    
					break

            case 'registro': case 'verregistro': 
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(prefix, pushname, nomeBot))
                var SeuNome = getRegisterName(sender)
                var SuaIdade = getRegisterAge(sender)
                var SeuSerial = getRegisterSerial(sender)
                var SeuTempoRegistro = getRegisterTime(sender)
                var SeuId = getRegisterNo(sender)
                let text1 = `\n*Olá ${pushname}* \n╔════════════════\n╠≽️*Seu nome do Registro é: ${SeuNome}*\n╠≽️*Sua Idade é: ${SuaIdade}*\n╠≽️*Data de Registro: ${SeuTempoRegistro}*\n╠≽️*Seu Serial: '${SeuSerial}'*\n╠≽️*Seu Id: ${SeuId}*\n╚════════════════`
                try {
                    ppimg = await client.profilePictureUrl(sender, 'image')
                } catch {
                    ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
                }
                client.sendMessage(from, { image: { url: ppimg }, caption: text1}, { quoted: live })
                break

            case 'menu': {
                if (!isUser) return reply(ptbr.user(prefix, pushname, nomeBot))
                client.sendMessage(from, {
                    react: {
                        text: "🥁",
                        key: info.key
                    }
                });
                var download = [
                    `〘▒▒▒▒▒▒▒▒▒▒〙0%`,
                    `〘█▒▒▒▒▒▒▒▒▒〙10%`,
                    `〘███▒▒▒▒▒▒▒〙35%`,
                    `〘█████▒▒▒▒▒〙51%`,
                    `〘███████▒▒▒〙62%`,
                    `〘████████▒▒〙80%`,
                    `〘██████████〙100%`,
                    `*Bem Vindo ao Menu da NekoBotV4*`
                ]
                let { key } = await cliente.sendMessage(from, { text: `Ola @${pushname}` }, { quoted: info })
                await delay(1000)
                for (let i = 0; i < download.length; i++) {
                    await cliente.sendMessage(from, { text: download[i], edit: key }, { quoted: info })
                }
                await delay(50)

                let menutxt = `
╭─⊣〘 ${nomeBot} 〙
║
║ Usuario: ${pushname}
║ Versão: NekoBotV4
║ Nome: ${pushname}
║
║••➽ Ola @${pushname}
║
║
╚════• 〘${nomeBot}〙•═════╝
`

                client.sendMessage(from, { poll: { name: menutxt, values: [`menu`, 'adms', 'dono', 'rpg', 'loja rpg', 'modificadores', 'downloader', 'premium', 'anime', 'wallpaper'], selectableCount: 1 } }, { quoted: info });
            } break

            case "Menu":
            case "menu": {
                const imagens = [
                    './menus/fotos/foto1.jpg',
                    './menus/fotos/foto2.jpg',
                    './menus/fotos/foto3.jpg',
                    './menus/fotos/foto4.jpg',
                    './menus/fotos/foto5.jpg',
                    './menus/fotos/foto6.jpg'
                ];
                const randomIndex = Math.floor(Math.random() * imagens.length);
                const randomFoto = imagens[randomIndex];
                const fotomenus = fs.readFileSync(randomFoto);
                client.sendMessage(from, {
                    image: fotomenus,
                    caption: menu(prefix, nomeBot, pushname)
                })
            } break

            case "Menu_Adm":
            case "menuadm": {
                const imagens = [
                    './menus/fotos/foto1.jpg',
                    './menus/fotos/foto2.jpg',
                    './menus/fotos/foto3.jpg',
                    './menus/fotos/foto4.jpg',
                    './menus/fotos/foto5.jpg',
                    './menus/fotos/foto6.jpg'
                ];
                const randomIndex = Math.floor(Math.random() * imagens.length);
                const randomFoto = imagens[randomIndex];
                const fotomenus = fs.readFileSync(randomFoto);
                client.sendMessage(from, {
                    image: fotomenus,
                    caption: menuadm(prefix, nomeBot, pushname)
                    /*contextInfo: {
                        externalAdReply: {
                            title: `${nomeBot}`,
                            body: `${nomeDono}`,
                            mediaType: 1,
                            reviewType: "PHOTO",
                            thumbnailUrl: `https://telegra.ph/file/7413bd88bc2c331c9441b.jpg`,
                            showAdAttribution: false,
                            renderLargerThumbnail: true,
                            sourceUrl: `https://chat.whatsapp.com/DQyvC6aklc04HawDK6Xja3`
                        }
                    }*/
                })
            } break

            case "Menu_Anime":
            case "menuanime": {
                const imagens = [
                    './menus/fotos/foto1.jpg',
                    './menus/fotos/foto2.jpg',
                    './menus/fotos/foto3.jpg',
                    './menus/fotos/foto4.jpg',
                    './menus/fotos/foto5.jpg',
                    './menus/fotos/foto6.jpg'
                ];
                const randomIndex = Math.floor(Math.random() * imagens.length);
                const randomFoto = imagens[randomIndex];
                const fotomenus = fs.readFileSync(randomFoto);
                client.sendMessage(from, {
                    image: fotomenus,
                    caption: menuanime(prefix, nomeBot, pushname)
                })
            } break
            
            case "Menu_Dono":
            case "menudono": {
                const imagens = [
                    './menus/fotos/foto1.jpg',
                    './menus/fotos/foto2.jpg',
                    './menus/fotos/foto3.jpg',
                    './menus/fotos/foto4.jpg',
                    './menus/fotos/foto5.jpg',
                    './menus/fotos/foto6.jpg'
                ];
                const randomIndex = Math.floor(Math.random() * imagens.length);
                const randomFoto = imagens[randomIndex];
                const fotomenus = fs.readFileSync(randomFoto);
                client.sendMessage(from, {
                    image: fotomenus,
                    caption: menudono(prefix, nomeBot, pushname)
                })
            } break

            case 'wallpaper':
            case "menuwallpaper": {
                const imagens = [
                    './menus/fotos/foto1.jpg',
                    './menus/fotos/foto2.jpg',
                    './menus/fotos/foto3.jpg',
                    './menus/fotos/foto4.jpg',
                    './menus/fotos/foto5.jpg',
                    './menus/fotos/foto6.jpg'
                ];
                const randomIndex = Math.floor(Math.random() * imagens.length);
                const randomFoto = imagens[randomIndex];
                const fotomenus = fs.readFileSync(randomFoto);
                client.sendMessage(from, {
                    image: fotomenus,
                    caption: wallpaper(prefix, nomeBot, pushname)
                })
            } break

            /////
                
            /* Downloader */
                case 'play': 
                    if(!isGroup) return reply(ptbr.grupo())
                    if (!isUser) return reply (ptbr.user(prefix, pushname, nomeBot))
                    if (!q) return reply('coloque algo para pesquisar');
                    reply(ptbr.waitmusic());
                    play1(q).then(res => { 
                    infomidia = `\n *Titulo: ${res.titulo}*\n *Canal: ${res.canal}*\n\ *Views: ${res.views}*\n\ *Publicado em: ${res.postado_em}*`;
                    client.sendMessage(from, {image: {url: res.thumb}, caption: infomidia }, {quoted: info});
                    client.sendMessage(from, {audio: {url: res.download}, mimetype: 'audio/mpeg', fileName: res.titulo}, {quoted: info});
                    }).catch(() => {
                    reply(ptbr.restriçãodownload())
                    }); 
                    break
                    
                case 'play2':
                    if(!isGroup) return reply(ptbr.grupo())
                    if (!isUser) return reply (ptbr.user(prefix, pushname, nomeBot))
                    if (!q) return reply('coloque algo para pesquisar');
                    reply(ptbr.waitvideo());
                    play2(q).then(res => { 
                    infomidia2 = `\n *Titulo: ${res.titulo}*\n *Canal: ${res.canal}*\n\ *Views: ${res.views}*\n\ *Publicado em: ${res.publicado}*`;
                    client.sendMessage(from, {video: {url: res.download}, filename: res.titulo, caption: infomidia2}, {quoted: info})
                    }).catch((e) => {
                    reply(ptbr.restriçãodownload());
                    });
                    break
                    
                case 'ttk':
                    if(!isGroup) return reply(ptbr.grupo())
                    if (!isUser) return reply (ptbr.user(prefix, pushname, nomeBot))
                    try {
                    if(!q) return reply('cadê o link?')
                    if (!q.includes('tiktok')) return reply(`Link Invalido..!!`)
                    reply(ptbr.wait())
                    require('./functions/lib/tiktok').Tiktok(q).then( data => {
                    ttkinfo = `*Titulo:* ${result.title} \n\n *Autor: ${result.author}*`
                    client.sendMessage(from, {video: { url: data.nowm }, caption: ttkinfo}, { quoted: info })
                    })
                    } catch {
                    reply(ptbr.erro())
                    }
                    break

                case 'ttk2':
                    if(!isGroup) return reply(ptbr.grupo())
                    if (!isUser) return reply (ptbr.user(prefix, pushname, nomeBot))
                    try {///TIK TOK AUDIO
                    if(!q) return reply('cadê o link?')
                    if (!q.includes('tiktok')) return reply(`Link Invalido..!!`)
                    reply(ptbr.wait())
                    require('./functions/lib/tiktok').Tiktok(q).then( data => {
                    client.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: info })
                    })
                    } catch {
                    reply(ptbr.erro())
                    }
                    break
                    /// fim da aba de download
                    
                case 'bard':
                case 'ask':
                    if(!isGroup) return reply(ptbr.grupo())
                    if(!isUser) return reply(ptbr.user(prefix, pushname, nomeBot))
                    reply(ptbr.wait())
                    try{
                    await init(token.bard);
                    let pao = await askAI(q)
                    await cliente.sendMessage(from, { text: pao }, { quoted: info })
                    }catch (erro) {
                    console.log(erro)}
                    break

                    /// modificadores de voz 

                case 'audiolento': 
                case 'slow':
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    reply(ptbr.wait())
                    muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                    rane = getRandom('.'+await getExtension(muk, mimetype))
                    buffimg = await getFileBuffer(muk, 'audio')
                    fs.writeFileSync(rane, buffimg)
                    gem = rane
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    client.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
                    fs.unlinkSync(ran)
                    })
                    break

                case 'audiorapido':  
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    reply(ptbr.wait())
                    muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                    rane = getRandom('.'+await getExtension(muk, mimetype))
                    buffimg = await getFileBuffer(muk, 'audio')
                    fs.writeFileSync(rane, buffimg)
                    gem = rane
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Erro')
                    hah = fs.readFileSync(ran)
                    client.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
                    fs.unlinkSync(ran)
                    })
                    break

                    case 'grave2':
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    reply(ptbr.wait())
                    muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                    rane = getRandom('.'+await getExtension(muk, mimetype))
                    buffimg = await getFileBuffer(muk, 'audio')
                    fs.writeFileSync(rane, buffimg)
                    gem = rane
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    client.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
                    fs.unlinkSync(ran)
                    })
                    break

                    case 'grave':
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    reply(ptbr.wait())
                    muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                    rane = getRandom('.'+await getExtension(muk, mimetype))
                    buffimg = await getFileBuffer(muk, 'audio')
                    fs.writeFileSync(rane, buffimg)
                    gem = rane
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    client.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
                    fs.unlinkSync(ran)
                    })
                    break

                case 'estourar': 
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    reply(ptbr.wait())
                    muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                    rane = getRandom('.'+await getExtension(muk, mimetype))
                    buffimg = await getFileBuffer(muk, 'audio')
                    fs.writeFileSync(rane, buffimg)
                    gem = rane
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    client.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
                    fs.unlinkSync(ran)
                    })
                    break

                case 'esquilo':
                    if (!isGroup) return reply(ptbr.grupo(pushname))
                    if (!isUser) return reply(ptbr.user(pushname))
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    reply(ptbr.wait())
                    muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                    rane = getRandom('.'+await getExtension(muk, mimetype))
                    buffimg = await getFileBuffer(muk, 'audio')
                    fs.writeFileSync(rane, buffimg)
                    gem = rane
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    client.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
                    fs.unlinkSync(ran)
                    })
                    break

                case 'bass': 
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    reply(ptbr.wait())
                    muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                    rane = getRandom('.'+await getExtension(muk, mimetype))
                    buffimg = await getFileBuffer(muk, 'audio')
                    fs.writeFileSync(rane, buffimg)
                    gem = rane
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    client.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
                    fs.unlinkSync(ran)
                    })
                    break

                case 'bass2': 
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    reply(ptbr.wait())
                    muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                    rane = getRandom('.'+await getExtension(muk, mimetype))
                    buffimg = await getFileBuffer(muk, 'audio')
                    fs.writeFileSync(rane, buffimg)
                    gem = rane
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    client.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
                    fs.unlinkSync(ran)
                    })
                    break

                case 'vozmenino':  
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    reply(ptbr.wait())
                    muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                    rane = getRandom('.'+await getExtension(muk, mimetype))
                    buffimg = await getFileBuffer(muk, 'audio')
                    fs.writeFileSync(rane, buffimg)
                    gem = rane
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(gem)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    client.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
                    fs.unlinkSync(ran)
                    })
                    break
                    /// fim dos modificadores de voz
                    
                case 'noticias':
                    if (!isGroup) return reply(ptbr.grupo())
                    if (!isUser) return reply(ptbr.user(prefix, pushname, nomeBot))
                    reply(ptbr.wait())
                    try {
                        const data = await NoticiasAoMinuto();
                        if (data.resultado.length > 0) {
                        const noticias = data.resultado.slice(0, 2);
                        let resposta = `Aqui estão as últimas notícias do Notícias ao Minuto:\n\n`;
                        for (let i = 0; i < noticias.length; i++) {
                            resposta += `Título: ${noticias[i].noticia}\n`;
                            resposta += `Postado em: ${noticias[i].postado}\n`;
                            resposta += `Categoria: ${noticias[i].categoria}\n`;
                            resposta += `Link: ${noticias[i].link}\n\n`;}
                            client.sendMessage(from, {image: {url: noticias[0].imagem}, caption: resposta}, {quoted: info});
                        } else {
                        reply('Não foi possível encontrar notícias do Notícias ao Minuto no momento.');}
                    } catch (error) {
                        console.error('Erro ao obter notícias do Notícias ao Minuto:', error);
                        enviar(ptbr.erro());}
                    break

                case 'anotar':
                case 'tirar_nota':
                case 'rmnota':
                    if(!isGroup) return reply(ptbr.grupo())
                    if(!isGroupAdmins) return reply(ptbr.admin())
                    reagir(from, "🗒️")
                    await sleep(1000)
                    if(command == "anotar") {
                    var [q5, q10] = q.trim().split("/")
                    if(!q5 || !q10 || !q.includes("/")) return reply(`*_❕Digite o título da anotação e o texto que deseja anotar..._*\n*_🥶 Exemplo:_* ${prefix}anotar Gatos/Gatinhos são fofos...`)
                    if(JSON.stringify(anotar).includes(from)) {  
                    var i2 = anotar.map(i => i.grupo).indexOf(from)  
                    if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
                    var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
                    if(anotar[i2].puxar[i3].nota == q5) return reply(`*_❕Esta anotação já está inclusa, utilize outro título..._*\n*_🥶 Ou você pode tirar com_* ${prefix}tirar_nota ${q5}`)
                    }
                    }
                    if(!JSON.stringify(anotar).includes(from)) {
                    anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
                    fs.writeFileSync("./database/group/notas/notas.json", JSON.stringify(anotar))
                    reply("Anotação registrada com sucesso...")
                    } else {
                    anotar[i2].puxar.push({nota: q5, anotacao: q10})
                    fs.writeFileSync("./database/group/notas/notas.json", JSON.stringify(anotar))
                    reply("Anotação registrada com sucesso...")  
                    }
                    } else {
                    if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
                    if(JSON.stringify(anotar).includes(from)) {  
                    var i2 = anotar.map(i => i.grupo).indexOf(from)  
                    if(JSON.stringify(anotar[i2].puxar).includes(q)) {
                    var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
                    }
                    }
                    if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
                    anotar[i2].puxar.splice(i3, 1)
                    fs.writeFileSync("./database/group/notas/notas.json", JSON.stringify(anotar))
                    reply(`Anotação ${q} tirada com sucesso...`)
                    }
                    break
                    
                case 'anotação':
                case 'anotações':  
                case 'nota':
                case 'notas':
                    if(!isGroup) return reply(ptbr.grupo())
                    reagir(from, "📝")
                    await sleep(1000)
                    if(command == "anotação" || command == "nota") {
                    if(!q) return reply("Digite o título da anotação que deseja puxar..")
                    if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
                    var i2 = anotar.map(i => i.grupo).indexOf(from)  
                    if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
                    var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
                    mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
                    } else {
                    var i2 = anotar.map(i => i.grupo).indexOf(from)    
                    if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
                    var i2 = anotar.map(i => i.grupo).indexOf(from) 
                    var antr = anotar[i2].puxar 
                    txtin = `*_🗒️ Aqui está todas as anotações registradas nesse grupo 🗒️_*\n`
                    for ( i = 0; i < antr.length; i++) {
                    txtin += `\n↝ *_📝 Anotação:_* ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
                    }
                    txtin += ""
                    mentions(txtin)
                    }
                    break
                    
            case "cosplay":
            case "waifu":
            case "waifu2":
            case "shota":
            case "loli":
            case "yotsuba":
            case "shinomiya":
            case "yumeko":
            case "tejina":
            case "chiho":
            case "shizuka":
            case "boruto":
            case "kagori":
            case "kaga":
            case "kotori":
            case "mikasa":
            case "akiyama":
            case "hinata":
            case "minato":
            case "naruto":
            case "nezuko":
            case "yuki":
            case "hestia":
            case "emilia":
            case "itachi":
            case "elaina":
            case "madara":
            case "sasuke":
            case "deidara":
            case "sakura":
            case "tsunade":
                try {
                    client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                    fetch(encodeURI(`https://clover-t-bot.onrender.com/nime/${command}?username=Lady-Bot&key=Lady-Bot`))
                        .then(response => response.json())
                        .then(data => {
                            var resultado = data.url;

                            let buttonMessage4 = {
                                image: { url: `${resultado}` },
                                caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
                                footer: '',
                                //buttons: buttons,
                                headerType: 4
                            }
                            client.sendMessage(from, buttonMessage4, { quoted: info })
                        })
                } catch (e) {
                    console.log(e)
                    reply("nao achei a foto, tente novamente mais tarde")
                }

                break

                case 'ahegao':
                case 'ass':
                case 'bdsm':
                case 'blowjob':
                case 'cuckold':
                case 'cum':
                case 'ero':
                case 'kasedaiki':
                case 'femdom':
                case 'foot':
                case 'gangbang':
                case 'glasses':
                case 'jahy':
                case 'manga':
                case 'masturbation':
                case 'neko':
                case 'orgy':
                case 'panties':
                case 'pussy':
                case 'neko2':
                case "neko":
                case 'tentacles':
                case 'thighs':
                case 'yuri':
                case 'zettai':
                try {
                    client.sendMessage(sender, { react: { text: '🕚', key: info.key } })
                    fetch(encodeURI(`https://clover-t-bot.onrender.com/nsfw/${command}?username=Lady-Bot&key=Lady-Bot`))
                        .then(response => response.json())
                        .then(data => {
                            var resultado = data.url;

                            let buttonMessage4 = {
                                image: { url: `${resultado}` },
                                caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
                                footer: '',
                                //buttons: buttons,
                                headerType: 4
                            }
                            setTimeout(() => {
                                reply(`Olá ${pushname} estou enviando no seu pv...`)
                            }, 100);
                            client.sendMessage(sender, buttonMessage4, { quoted: info })
                        })
                } catch (e) {
                    console.log(e)
                    reply("não achei a foto, tente novamente mais tarde")
                }
                break
            case 'meme': {
                fetch('https://clover-t-bot.onrender.com/memes?username=SUPREMO&key=SER_SUPREMO').then(response => response.json()).then(data => {
                client.sendMessage(from, { video: { url: `${data.url}` } }, { quoted: info })
                })
            } break

            case 'wallpaper1':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                reply("「🐸」ja to enviando no teu pv")
                google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/satanic?key=Lady-Bot&username=Lady-Bot`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper2':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                reply("「🐸」ja to enviando no teu pv")
                google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/cyberspace?key=Lady-Bot&username=Lady-Bot`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper3':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                reply("「🐸」ja to enviando no teu pv")
                google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/gaming?key=Lady-Bot&username=Lady-Bot`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper4':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                reply("「🐸」ja to enviando no teu pv")
                google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/wallpapertec?key=Lady-Bot&username=Lady-Bot`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper5':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                reply("「🐸」ja to enviando no teu pv")
                google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/ppcouple?key=Lady-Bot&username=Lady-Bot`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper6':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                reply("「🐸」ja to enviando no teu pv")
                google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/pubg?key=Lady-Bot&username=Lady-Bot`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break

            case 'wallpaper7':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                reply("「🐸」ja to enviando no teu pv")
                google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/aesthetic?key=Lady-Bot&username=Lady-Bot`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper8':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                reply("「🐸」ja to enviando no teu pv")
                google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/aesthetic?key=Lady-Bot&username=Lady-Bot`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break

            case 'wallpaper9':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                reply("「🐸」ja to enviando no teu pv")
                google = await fetchJson(`https://clover-t-bot.onrender.com/nime/anime?key=Lady-Bot&username=Lady-Bot`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break

            //===========================\\



            case 'simih2':
            case 'autoresponder':
            case "simi":
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (args.length < 1) return reply('1 pra ligar e pra desligar')
                if (Number(args[0]) === 1) {
                    if (isSimi2) return reply('O modo Simi está ativo')
                    samih2.push(from)
                    fs.writeFileSync('./functions/simi.json', JSON.stringify(samih2))
                    reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
                } else if (Number(args[0]) === 0) {
                    if (!isSimi2) return reply('Já está Desativado.')
                    pesquisar = from
                    processo = samih2.indexOf(pesquisar)
                    while (processo >= 0) {
                        samih2.splice(processo, 1)
                        processo = samih2.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./functions/simi.json', JSON.stringify(samih2))
                    reply('Desativado modo simi com sucesso neste grupo 😡️')
                } else {
                    reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
                }
                break


            case 'emoji2':
            case 'emoji-mix':
            case 'emojimix': {
                if (!q) return reply(`Exemplo : ${prefix + command} 😅+🤔`)
                reply('SER NÃO FOR TENTA COM OUTRO... ?')
                let [emoji1, emoji2] = q.split`+`
                var em = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of em.results) {
                    templateMassage = {
                        image: {
                            url: `${res.url}`,
                            quoted: live
                        }
                    }
                    client.sendMessage(from, templateMassage, { quoted: live })
                }
            }
                break

            case 'gerarlink':
            case 'imgpralink':
            case "telegra.ph":
                try {
                    if (isQuotedImage) {
                        boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
                        const fetch = require('node-fetch');
                        const FormData = require('form-data');
                        const fs = require('fs');
                        async function uploadImageToTelegraph(imageBuffer) {
                            const form = new FormData();
                            form.append('file', imageBuffer, { filename: 'image.jpg' });

                            const response = await fetch('https://telegra.ph/upload', {
                                method: 'POST',
                                body: form,
                            });
                            const data = await response.json();
                            if (data && data[0] && data[0].src) {
                                return 'https://telegra.ph' + data[0].src;
                            } else {
                                throw new Error('Failed to retrieve the image URL from the response.');
                            }
                        }
                        const owgi = await getFileBuffer(boij, "image");
                        const imageUrl = await uploadImageToTelegraph(owgi);
                        reply(imageUrl);
                    } else {
                        reply('marque a ft')
                    }
                } catch (e) {
                    console.log(e)
                    reply('error...')
                }
                break

            case 'videourl':
            case 'videopralink':
                try {
                    if (isQuotedVideo) {
                        boij = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
                            : info.message.videoMessage;
                        const fetch = require('node-fetch');
                        const FormData = require('form-data');
                        const fs = require('fs');
                        async function uploadVideoToTelegraph(videoBuffer) {
                            const form = new FormData();
                            form.append('file', videoBuffer, { filename: 'media' });

                            const response = await fetch('https://telegra.ph/upload', {
                                method: 'POST',
                                body: form,
                            });
                            const data = await response.json();
                            if (data && data[0] && data[0].src) {
                                return 'https://telegra.ph' + data[0].src;
                            } else {
                                throw new Error('Failed to retrieve the image URL from the response.');
                            }
                        }
                        const owgi = await getFileBuffer(boij, "video");
                        const imageUrl = await uploadVideoToTelegraph(owgi);
                        reply(imageUrl);
                    } else {
                        reply('marque o video')
                    }
                } catch (e) {
                    console.log(e)
                    reply('error...')
                }
                break



            case "recentes": {
                const fetch = require('node-fetch');

                async function recentes() {
                    try {
                        const response = await fetch('https://appp--trevodev.repl.co/recent-episodes?username=Clover&key=Clover');
                        const data = await response.json();

                        let resultInstance = '';

                        data.forEach((anime) => {
                            resultInstance += `-------------------------------------\nAnime: ${anime.title}: ${anime.episodeNum}\n`;
                        });

                        console.log('ResultInstance:', resultInstance);
                        return resultInstance;

                    } catch (error) {
                        console.error('Erro ao obter os animes recentes:', error);
                        return 'Erro ao obter os animes recentes.';
                    }
                }

                async function getRecentes() {
                    const resultInstance = await recentes();
                    const message = "ANIMES LANÇAMENTOS\n\n" + resultInstance + "\n\n-------------------------------------";
                    reply(message);
                }
                getRecentes();
            } break


            case 'totag':
            case 'cita':
            case 'hidetag':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
                if (q.includes("=>") || q.includes(">")) return
                membros = (groupId, membros1) => {
                    array = []
                    for (let i = 0; i < membros1.length; i++) {
                        array.push(membros1[i].id)
                    }
                    return array
                }
                var yd = membros(from, groupMembers)
                if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
                    media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
                    rane = getRandom('.' + await getExtension(media.mimetype))
                    img = await getFileBuffer(media, 'sticker')
                    fs.writeFileSync(rane, img)
                    fig = fs.readFileSync(rane)
                    var options = {
                        sticker: fig,
                        mentions: yd
                    }
                    client.sendMessage(from, options)
                } else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
                    media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
                    rane = getRandom('.' + await getExtension(media.mimetype))
                    img = await getFileBuffer(media, 'image')
                    fs.writeFileSync(rane, img)
                    buff = fs.readFileSync(rane)
                    client.sendMessage(from, { image: buff, mentions: yd }, { quoted: info })
                } else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
                    media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
                    rane = getRandom('.' + await getExtension(media.mimetype))
                    vid = await getFileBuffer(media, 'video')
                    fs.writeFileSync(rane, vid)
                    buff = fs.readFileSync(rane)
                    client.sendMessage(from, { video: buff, mimetype: 'video/mp4', mentions: yd }, { quoted: info })
                } else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
                    media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                    rane = getRandom('.' + await getExtension(media.mimetype))
                    aud = await getFileBuffer(media, 'audio')
                    fs.writeFileSync(rane, aud)
                    buff = fs.readFileSync(rane)
                    client.sendMessage(from, { audio: buff, mimetype: 'audio/mp4', ptt: true, mentions: yd }, { quoted: info })
                } else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
                    media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
                    rane = getRandom('.' + await getExtension(media.mimetype))
                    doc = await getFileBuffer(media, 'document')
                    fs.writeFileSync(rane, doc)
                    buff = fs.readFileSync(rane)
                    client.sendMessage(from, { document: buff, mimetype: 'text/plain', mentions: yd }, { quoted: info })
                } else if (budy) {
                    if (q.length < 1) return reply('Citar oq?')
                    client.sendMessage(from, { text: body.slice(command.length + 2), mentions: yd })
                } else {
                    reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
                }
                break

            case 'antiimg':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (Number(args[0]) === 1) {
                    if (isAntiImg) return reply('Já Esta ativo')
                    antiimg.push(from)
                    fs.writeFileSync('./database/group/ativadores/antiimg.json', JSON.stringify(antiimg))
                    reply('🌸ativou com sucesso o recurso de anti imagem nesse grupo🌸')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiImg) return reply('Ja esta Desativado.')
                    antiimg.splice(from, 1)
                    fs.writeFileSync('./database/group/ativadores/antiimg.json', JSON.stringify(antiimg))
                    reply('🌸Desativou com sucesso o recurso de anti imagem nesse grupo🌸')
                } else {
                    if (isAntiImg) {
                        buttons002 = [
                            { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌸] DESATIVAR [🌸]' }, type: 1 }
                        ]
                    } else {
                        buttons002 = [
                            { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🌸] ATIVAR [🌸]' }, type: 1 }
                        ]
                    }
                    buttonMessage02 = {
                        text: `╭═─────═⌘═────═╮   
👑 𝐀𝐍𝐓𝐈 𝐈𝐌𝐀𝐆𝐄𝐌 👑

𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}

𝐆𝐑𝐔𝐏𝐎: ${groupName}
╰═─────═⌘═────═╯`,
                        footer: `STATUS DO ANTI-IMG AGORA:${isAntiImg ? 'ATIVADO' : 'DESATIVADO'}\n`,
                        buttons: buttons002,
                        headerType: 4,
                        contextInfo: { forwardingScore: 999, isForwarded: true }
                    }
                    client.sendMessage(from, buttonMessage02, { quoted: info })
                }
                break


            case 'antilinkgp':
            case 'antilink':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (Number(args[0]) === 1) {
                    if (isAntilinkgp) return reply('Ja esta ativo')
                    antilinkgp.push(from)
                    fs.writeFileSync('./database/group/ativadores/antilinkgp.json', JSON.stringify(antilinkgp))
                    reply('🌸Ativou com sucesso o recurso de antilinkgp🌸')
                } else if (Number(args[0]) === 0) {
                    if (!isAntilinkgp) return reply('Ja esta Desativado')
                    pesquisar = from
                    processo = antilinkgp.indexOf(pesquisar)
                    while (processo >= 0) {
                        antilinkgp.splice(processo, 1)
                        processo = antilinkgp.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./database/group/ativadores/antilinkgp.json', JSON.stringify(antilinkgp))
                    reply('🌸Desativou com sucesso o recurso de antilink de grupo🌸')
                } else {
                    if (isAntilinkgp) {
                        buttons02 = [
                            { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌸] DESATIVAR [🌸]' }, type: 1 }
                        ]
                    } else {
                        buttons02 = [
                            { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🌸] ATIVAR [🌸]' }, type: 1 },
                        ]
                    }
                    buttonMessage02 = {
                        text: `╭═─────═⌘═────═╮   
👑 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊 👑

𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}

𝐆𝐑𝐔𝐏𝐎: ${groupName}
╰═─────═⌘═────═╯`,
                        footer: `STATUS DO ANTI-LINK AGORA: ${isAntilinkgp ? 'ATIVADO' : 'DESATIVADO'}\n`,
                        buttons: buttons02,
                        headerType: 4,
                        contextInfo: { forwardingScore: 999, isForwarded: true }
                    }
                    client.sendMessage(from, buttonMessage02, { quoted: live })
                }
                break

            case 'antifloodgp':
            case 'antiflood':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (Number(args[0]) === 1) {
                    if (isAntiFlood) return reply('Ja esta ativo')
                    antiflood.push(from)
                    fs.writeFileSync('./database/group/ativadores/antiflood.json', JSON.stringify(antiflood))
                    reply('Recurso ativado')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiFlood) return reply('Ja esta Desativado')
                    pesquisar = from
                    processo = antiflood.indexOf(pesquisar)
                    while (processo >= 0) {
                        antiflood.splice(processo, 1)
                        processo = antiflood.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./database/group/ativadores/antiflood.json', JSON.stringify(antiflood))
                    reply('Recurso Desativado')
                } else {
                    if (isAntiFlood) {
                        buttons02 = [
                            { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌸] DESATIVAR [🌸]' }, type: 1 }
                        ]
                    } else {
                        buttons02 = [
                            { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🌸] ATIVAR [🌸]' }, type: 1 },
                        ]
                    }
                    buttonMessage02 = {
                        text: `╭═─────═⌘═────═╮   
👑 ANTIFLOOD 👑

𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}

𝐆𝐑𝐔𝐏𝐎: ${groupName}
╰═─────═⌘═────═╯`,
                        footer: `STATUS DO ANTIFLOOD: ${isAntiFlood ? 'ATIVADO' : 'DESATIVADO'}\n`,
                        buttons: buttons02,
                        headerType: 4,
                        contextInfo: { forwardingScore: 999, isForwarded: true }
                    }
                    client.sendMessage(from, buttonMessage02, { quoted: live })
                }
                break

                case 'apenasadms': case 'soadms':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (Number(args[0]) === 1) {
                    if (isApenasAdms) return reply('Ja esta ativo')
                    onlyadm.push(from)
                    fs.writeFileSync('./database/group/ativadores/onlyadm.json', JSON.stringify(onlyadm))
                    reply('Apenas adms podem usar comandos agora')
                } else if (Number(args[0]) === 0) {
                    if (!isApenasAdms) return reply('Ja esta Desativado')
                    pesquisar = from
                    processo = onlyadm.indexOf(pesquisar)
                    while (processo >= 0) {
                        onlyadm.splice(processo, 1)
                        processo = onlyadm.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./database/group/ativadores/onlyadm.json', JSON.stringify(onlyadm))
                    reply('Todos podem usar os comandos agora')
                } else {
                    if (isApenasAdms) {
                        buttons02 = [
                            { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌸] DESATIVAR [🌸]' }, type: 1 }
                        ]
                    } else {
                        buttons02 = [
                            { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🌸] ATIVAR [🌸]' }, type: 1 },
                        ]
                    }
                    buttonMessage02 = {
                        text: `╭═─────═⌘═────═╮   
👑 Apenas Adms 👑

𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}

𝐆𝐑𝐔𝐏𝐎: ${groupName}
╰═─────═⌘═────═╯`,
                        footer: `STATUS DE APENAS ADMS: ${isApenasAdms ? 'ATIVADO' : 'DESATIVADO'}\n`,
                        buttons: buttons02,
                        headerType: 4,
                        contextInfo: { forwardingScore: 999, isForwarded: true }
                    }
                    client.sendMessage(from, buttonMessage02, { quoted: live })
                }
                break

                case 'apenasdono': case 'onlyowner': case 'sodono':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isOwner) return reply(ptbr.dono())
                if (Number(args[0]) === 1) {
                    if (isApenasDono) return reply('Ja esta ativo')
                    onlyowner.push(from)
                    fs.writeFileSync('./database/group/ativadores/onlyowner.json', JSON.stringify(onlyowner))
                    reply(`Apenas o Klaus pode usar os comandos agora`)
                } else if (Number(args[0]) === 0) {
                    if (!isApenasDono) return reply('Ja esta Desativado')
                    pesquisar = from
                    processo = onlyowner.indexOf(pesquisar)
                    while (processo >= 0) {
                        onlyowner.splice(processo, 1)
                        processo = onlyowner.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./database/group/ativadores/onlyowner.json', JSON.stringify(onlyowner))
                    reply('Todos podem usar os comandos agora')
                } else {
                    if (isApenasDono) {
                        buttons02 = [
                            { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌸] DESATIVAR [🌸]' }, type: 1 }
                        ]
                    } else {
                        buttons02 = [
                            { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🌸] ATIVAR [🌸]' }, type: 1 },
                        ]
                    }
                    buttonMessage02 = {
                        text: `╭═─────═⌘═────═╮   
👑 Apenas Adms 👑

𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}

𝐆𝐑𝐔𝐏𝐎: ${groupName}
╰═─────═⌘═────═╯`,
                        footer: `STATUS DE APENAS DONO: ${isApenasAdms ? 'ATIVADO' : 'DESATIVADO'}\n`,
                        buttons: buttons02,
                        headerType: 4,
                        contextInfo: { forwardingScore: 999, isForwarded: true }
                    }
                    client.sendMessage(from, buttonMessage02, { quoted: live })
                }
                break

                case 'taon?': case 'funcionando':
                reply('sim')
                await sleep(1000)
                reagir(from, '✅')
                break

            case 'omnitrix': 
                if (!isOwner) return reply(ptbr.dono())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (info.key.fromMe) return
                if (args.length < 1) return reply('qual é o codigo?')
                if (args[0] === '000') {
                    var omnitrix2 = 'Assets/images/Omnitrix_3B_post-recalibration%29.webp'
                    mandarfoto = fs.readFileSync(omnitrix2)
                    var timer2 = [
                        `Cancelamento Aceito`,
                        `10`,
                        `9`,
                        `8`,
                        `7`,
                        `6`,
                        `5`,
                        `4`,
                        `3`,
                        `2`, 
                        `1`,
                        `Auto Destruição em Andamento`
                    ]
                    client.sendMessage(from, {image: mandarfoto, caption: 'Comando de Voz Ativado'}, {quoted: info})
                    await delay(2000)
                    let { key } = await cliente.sendMessage(from, { text: 'Contagem Regressiva Ativada' }, { quoted: info })
                    await delay(3000)
                    for (let i = 0; i < timer2.length; i++) {
                        await cliente.sendMessage(from, { text: timer2[i], edit: key }, { quoted: info })
                    }
                    await delay(3500)
                    await client.groupSettingUpdate(from, 'announcement')
                    await delay(4000)
                    function banirtodos() {
                        var r_banirtodos = Math.floor(Math.random() * groupMembers.length + 0)
                        nmrbot = botNumber.split("@")[0]
                        var resp = `${groupMembers[r_banirtodos].id.split("@")[0]}`
                        if (resp === numeroDono || resp === nmrbot) {
                        return
                        } else {
                            client.groupParticipantsUpdate(from, [resp + "@s.whatsapp.net"], 'remove')
                    }
                    }
                     var myinterval = setInterval(banirtodos, 1000)
                        if (groupMembers.length <= 2) {
                          clearInterval(myinterval);
                }
                } else if (args[0] === 'cancelar') {
                    clearInterval(myinterval)
                    await delay(2000)
                    reply('Sequencia Cancelada')
                    await delay(3000)
                    client.groupSettingUpdate(from, 'not_announcement')
                }
                break

                case 'antipv':
                if (!isOwner) return reply(ptbr.dono())
                if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                if (Number(args[0]) === 1) {
                    if (isAntiPv) return reply('Ja esta ativo')
                    antipv.push('Ativado')
                    fs.writeFileSync('./database/group/ativadores/antipv.json', JSON.stringify(antipv))
                    reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiPv) return reply('Ja esta Desativado')
                    pesquisar = 'Ativado'
                    processo = antipv.indexOf(pesquisar)
                    while (processo >= 0) {
                        antipv.splice(processo, 1)
                        processo = antipv.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./database/group/ativadores/antipv.json', JSON.stringify(antipv))
                    reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
                } else {
                    enviar('1 para ativar, 0 para desativar')
                }
                break

                
            case "menulogos":
            case "logos":
                // client.sendMessage(from, { react: { text: `🌸`, key: info.key }})
                //const buuttons = [
                ////  {buttonId: 'id', buttonText: {displayText: '[👑]  [👑]'}, type: 1},
                //{buttonId: `${prefix}ping`, buttonText: //{displayText: '[🏓] 𝙋𝙄𝙉𝙂 [🏓]'}, type: 1},
                //  {buttonId: `${prefix}infodono`, buttonText: //{displayText: '[🍷] 𝘿𝙊𝙉𝙊 [🍷]'}, type: 1}
                //]

                const buuttonMessage = {
                    image: { url: imagemdomenu },
                    caption: `off`,
                    footer: `  `,
                    headerType: 4
                }

                client.sendMessage(from, buuttonMessage)


                break

            case "infodono":
            case "dono":
                const buttonMessage = {
                    tetext: `╭═────═☂️═───═╮
╠➽𝗗𝗢𝗡𝗢:Wa.me/${infoBot.numeroDono} 
╰═────═🌸═───═╯
╭═────═☂️═───═╮
╠➽𝗣𝗥𝗘𝗙𝗜𝗫:${prefix}
┃✰ 
╠➽𝗕𝗢𝗧:${nomeBot}
╰═────═🌸═───═╯`,
                    footer: `${nomeBot}`,
                    headerType: 1
                }

                client.sendMessage(from, buttonMessage)
                break

            case 'grupoinfo':
            case 'infogrupo':
            case 'infogp':
            case 'gpinfo':
            case 'regras':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                ppUrl = await client.profilePictureUrl(from, 'image')
                const meetadata = await client.groupMetadata(from)
                client.sendMessage(from, { image: { url: ppUrl }, caption: `𝐍𝐎𝐌𝐄 : ${groupName}\n𝐌𝐄𝐌𝐁𝐑𝐎𝐒 : ${groupMembers.length}\n𝐀𝐃𝐌𝐒 : ${groupAdmins.length}\n𝐃𝐄𝐒𝐂𝐑𝐈𝐂𝐀𝐎 : ${meetadata.desc}`, thumbnail: null }, { quoted: info })
                break

            case 'status':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                statuszada = `╔━━❲ 𝐒 𝐓 𝐀 𝐓 𝐔 𝐒 ❳━━╗ 
┃ Bem vindo = ${isWelkom ? 'ON' : 'OFF'}
┃ Apenas Dono = ${isApenasDono ? 'ON' : 'OFF'}
┃ Apenas Adms = ${isApenasAdms ? 'ON' : 'OFF'}
┃ AntiFlood = ${isAntiFlood ? 'ON' : 'OFF'}            
┃ Anti Link Grupo = ${isAntilinkgp ? 'ON' : 'OFF'}
┃ Anti img = ${isAntiImg ? 'ON' : 'OFF'}
┃ Anti video = ${isAntiVid ? 'ON' : 'OFF'}
┃ Anti áudios = ${isAntiAudio ? 'ON' : 'OFF'}
┃ Anti sticker = ${isAntiSticker ? 'ON' : 'OFF'}
┃ Anti pv block = ${isAntiPv ? 'ON' : 'OFF'}
┃ Anti documentos = ${Antidoc ? 'ON' : 'OFF'}
┃ Auto ban lista negra = ${islista ? 'ON' : 'OFF'}
╚━━━━━━━━━━━━╝`
                client.sendMessage(from, { text: statuszada, thumbnail: null })
                break



            case "x4":
            case "4x4": {
                fras = [
                    "Vamos com tudo, pessoal!",
                    "Mostrem seu potencial agora!",
                    "Nós somos imparáveis!",
                    "A vitória é nossa, acreditem!",
                    "Ação rápida, vitória certa!",
                    "Não vamos deixar ninguém para trás!",
                    "Juntos, somos invencíveis!",
                    "Foco, determinação e coragem!",
                    "Nada pode nos deter!",
                    "Vamos mostrar quem manda aqui!",
                    "Não se esqueçam de trabalhar em equipe!",
                    "A sorte favorece os audaciosos!",
                    "Vamos fazer história hoje!",
                    "Não podemos desistir, a luta está só começando!",
                    "Concentração total, galera!",
                    "Não tenham medo, enfrentem o perigo de frente!",
                    "A vitória está a um passo de nós, não vamos recuar!",
                    "Acreditem em si mesmos e vençam!",
                    "Vamos jogar com estratégia e inteligência!",
                    "Vocês são os melhores, vamos mostrar isso agora!",
                    "Não permitam que nos subestimem, mostrem do que somos capazes!",
                    "Fiquem alertas, o inimigo está próximo!",
                    "A força está em cada um de nós, vamos utilizá-la!",
                    "Não deixem o cansaço atrapalhar, sigam em frente!",
                    "Não existe time melhor do que o nosso!"
                ]
                epa = fras[Math.floor(Math.random() * fras.length)]
                tabi = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🌶️", "🍆", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "🗡️", "⚔️", "💣", "⁉️", "✅", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
                kkk = tabi[Math.floor(Math.random() * tabi.length)]

                membros = (groupId, membros1) => {
                    array = []
                    for (let i = 0; i < membros1.length; i++) {
                        array.push(membros1[i].id)
                    }
                    return array
                }
                var yd = membros(from, groupMembers)

                client.sendMessage(from, {
                    text: `${groupName}

⚔️SLOT 1⚔️
${kkk}
${kkk}
${kkk}
${kkk}

⚔️SLOT 2⚔️
${kkk}
${kkk}
${kkk}
${kkk}

${epa}`,
                    mentions: yd
                })

            } break

            case "x6":
            case "6x6": {

                fras = [
                    "Vamos com tudo, pessoal!",
                    "Mostrem seu potencial agora!",
                    "Nós somos imparáveis!",
                    "A vitória é nossa, acreditem!",
                    "Ação rápida, vitória certa!",
                    "Não vamos deixar ninguém para trás!",
                    "Juntos, somos invencíveis!",
                    "Foco, determinação e coragem!",
                    "Nada pode nos deter!",
                    "Vamos mostrar quem manda aqui!",
                    "Não se esqueçam de trabalhar em equipe!",
                    "A sorte favorece os audaciosos!",
                    "Vamos fazer história hoje!",
                    "Não podemos desistir, a luta está só começando!",
                    "Concentração total, galera!",
                    "Não tenham medo, enfrentem o perigo de frente!",
                    "A vitória está a um passo de nós, não vamos recuar!",
                    "Acreditem em si mesmos e vençam!",
                    "Vamos jogar com estratégia e inteligência!",
                    "Vocês são os melhores, vamos mostrar isso agora!",
                    "Não permitam que nos subestimem, mostrem do que somos capazes!",
                    "Fiquem alertas, o inimigo está próximo!",
                    "A força está em cada um de nós, vamos utilizá-la!",
                    "Não deixem o cansaço atrapalhar, sigam em frente!",
                    "Não existe time melhor do que o nosso!"
                ]
                epa = fras[Math.floor(Math.random() * fras.length)]

                tabi = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🌶️", "🍆", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "🗡️", "⚔️", "💣", "⁉️", "✅", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
                kkk = tabi[Math.floor(Math.random() * tabi.length)]
                membros = (groupId, membros1) => {
                    array = []
                    for (let i = 0; i < membros1.length; i++) {
                        array.push(membros1[i].id)
                    }
                    return array
                }
                var yd = membros(from, groupMembers)

                client.sendMessage(from, {
                    text: `${groupName}

⚔️SLOT 1⚔️
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}

⚔️SLOT 2⚔️
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}


${epa}`,
                    mentions: yd
                })

            } break



            //// Ativadores

            case 'bemvindo':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (Number(args[0]) === 1) {
                    if (isWelkom) return reply('Ja esta ativo')
                    welkom.push(from)
                    fs.writeFileSync('./database/group/ativadores/welkom.json', JSON.stringify(welkom))
                    reply(' Ativou com sucesso o recurso de bem vindo neste grupo 📝')
                } else if (Number(args[0]) === 0) {
                    if (!isWelkom) return reply('Ja esta Desativado')
                    pesquisar = from
                    processo = welkom.indexOf(pesquisar)
                    while (processo >= 0) {
                        welkom.splice(processo, 1)
                        processo = welkom.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./database/group/ativadores/welkom.json', JSON.stringify(welkom))
                    reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
                } else {
                    reply("1 para ativar, 0 para desativar")
                }
                break

            case 'antisticker':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (Number(args[0]) === 1) {
                    if (isAntiSticker) return reply('Já Esta ativo')
                    antisticker.push(from)
                    fs.writeFileSync('./database/group/ativadores/antisticker.json', JSON.stringify(antisticker))
                    reply('🌸Ativou com sucesso o recurso de anti-sticker nesse grupo🌸')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiSticker) return reply('Ja esta Desativado.')
                    antisticker.splice(from, 1)
                    fs.writeFileSync('./database/group/ativadores/antisticker.json', JSON.stringify(antisticker))
                    reply('🌸Desativou com sucesso o recurso de anti-sticker nesse grupo 🌸')
                } else {
                    if (isAntiSticker) {
                        buttons02 = [
                            { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌸] DESATIVAR [🌸]' }, type: 1 }
                        ]
                    } else {
                        buttons02 = [
                            { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🌸] ATIVAR [🌸]' }, type: 1 }
                        ]
                    }
                    buttonMessage02 = {
                        text: `╭═─────═⌘═────═╮   
👑 𝐀𝐍𝐓𝐈 STICKER 👑

𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}

𝐆𝐑𝐔𝐏𝐎: ${groupName}
╰═─────═⌘═────═╯
`,
                        footer: `STATUS DO ANTI-STICKER AGORA:${isAntiSticker ? 'ATIVADO' : 'DESATIVAR'}\n`,
                        //buttons: buttons02,
                        headerType: 4,
                        contextInfo: { forwardingScore: 999, isForwarded: true }
                    }
                    client.sendMessage(from, buttonMessage02, { quoted: info })
                }
                break

            case 'antiimg':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (Number(args[0]) === 1) {
                    if (isAntiImg) return reply('Já Esta ativo')
                    antiimg.push(from)
                    fs.writeFileSync('./database/group/ativadores/antiimg.json', JSON.stringify(antiimg))
                    reply('🌸ativou com sucesso o recurso de anti imagem nesse grupo🌸')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiImg) return reply('Ja esta Desativado.')
                    antiimg.splice(from, 1)
                    fs.writeFileSync('./database/group/ativadores/antiimg.json', JSON.stringify(antiimg))
                    reply('🌸Desativou com sucesso o recurso de anti imagem nesse grupo🌸')
                } else {
                    if (isAntiImg) {
                        buttons002 = [
                            { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌸] DESATIVAR [🌸]' }, type: 1 }
                        ]
                    } else {
                        buttons002 = [
                            { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🌸] ATIVAR [🌸]' }, type: 1 }
                        ]
                    }
                    buttonMessage02 = {
                        text: `╭═─────═⌘═────═╮   
👑 𝐀𝐍𝐓𝐈 𝐈𝐌𝐀𝐆𝐄𝐌 👑

𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}

𝐆𝐑𝐔𝐏𝐎: ${groupName}
╰═─────═⌘═────═╯`,
                        footer: `STATUS DO ANTI-IMG AGORA:${isAntiImg ? 'ATIVADO' : 'DESATIVADO'}\n`,
                        //buttons: buttons002,
                        headerType: 4,
                        contextInfo: { forwardingScore: 999, isForwarded: true }
                    }
                    client.sendMessage(from, buttonMessage02, { quoted: info })
                }
                break

                case 'antivideo':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (Number(args[0]) === 1) {
                    if (isAntiVid) return reply('Ja esta ativo🤝')
                    antivid.push(from)
                    fs.writeFileSync('./database/group/ativadores/antivideo.json', JSON.stringify(antivid))
                    reply('🌸Ativou com sucesso o recurso de anti video neste grupo✔🌸')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiVid) return reply('Ja esta Desativado')
                    antivid.splice(from, 1)
                    fs.writeFileSync('./database/group/ativadores/antivideo.json', JSON.stringify(antivid))
                    reply('🌸Desativou com sucesso o recurso de anti video neste grupo🌸️')
                } else {
                    if (isAntiVid) {
                        buttons02 = [
                            { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌸] DESATIVAR [🌸]' }, type: 1 }
                        ]
                    } else {
                        buttons02 = [
                            { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🌸] ATIVAR [🌸]' }, type: 1 }
                        ]
                    }
                    buttonMessage02 = {
                        text: `╭═─────═⌘═────═╮   
👑 𝐀𝐍𝐓𝐈 𝐕𝐈𝐃𝐄𝐎 👑

𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}

𝐆𝐑𝐔𝐏𝐎: ${groupName}
╰═─────═⌘═────═╯ `,
                        footer: `STATUS DO ANTIVIDEO AGORA: ${isAntiVid ? 'ATIVADO' : 'DESATIVADO'}\n`,
                        //buttons: buttons02,
                        headerType: 4,
                        contextInfo: { forwardingScore: 999, isForwarded: true }
                    }
                    client.sendMessage(from, buttonMessage02, { quoted: info })
                }
                break

            case 'antiaudio':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (Number(args[0]) === 1) {
                    if (isAntiAudio) return reply('🤝Ja esta ativo🤝')
                    antiaudio.push(from)
                    fs.writeFileSync('./database/group/ativadores/antiaudio.json', JSON.stringify(antiaudio))
                    reply('🌸Ativou com sucesso o recurso de anti audio neste grupo🌸️')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiAudio) return reply('🤝Ja esta Desativado🤝')
                    antiaudio.splice(from, 1)
                    fs.writeFileSync('./database/group/ativadores/antiaudio.json', JSON.stringify(antiaudio))
                    reply('🌸Desativou com sucesso o recurso de anti audio neste grupo🌸')
                } else {
                    if (isAntiAudio) {
                        buttons02 = [
                            { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌸] DESATIVAR [🌸]' }, type: 1 }
                        ]
                    } else {
                        buttons02 = [
                            { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🌸] ATIVAR [🌸]' }, type: 1 }
                        ]
                    }
                    buttonMessage02 = {
                        text: `╭═──────═⌘═────═╮   
👑 𝐀𝐍𝐓𝐈 𝐀𝐔𝐃𝐈𝐎👑

𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}

𝐆𝐑𝐔𝐏𝐎: ${groupName}
╰═──────═⌘═────═╯
`,
                        footer: `STATUS DO ANTI-AUDIO: AGORA ${isAntiAudio ? 'ATIVADO' : 'DESATIVADO'}\n`,
                        //buttons: buttons02,
                        headerType: 4,
                        contextInfo: { forwardingScore: 999, isForwarded: true }
                    }
                    client.sendMessage(from, buttonMessage02, { quoted: info })
                }
                break

            case 'antidocumento':
            case 'antidoc':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (Number(args[0]) === 1) {
                    if (Antidoc) return reply('🌸Ja esta ativo🌸')
                    antidoc.push(from)
                    fs.writeFileSync('./database/group/ativadores/antidoc.json', JSON.stringify(antidoc))
                    reply('🌸Ativou com sucesso o recurso de anti documento neste grupo 🌸')
                } else if (Number(args[0]) === 0) {
                    if (!Antidoc) return reply('🌸Ja esta Desativado🌸')
                    pesquisar = from
                    processo = antidoc.indexOf(pesquisar)
                    while (processo >= 0) {
                        antidoc.splice(processo, 1)
                        processo = antidoc.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./database/group/ativadores/antidoc.json', JSON.stringify(antidoc))
                    reply('🌸Desativou com sucesso o recurso de anti documento neste grupo🌸')
                } else {
                    if (Antidoc) {
                        buttons02 = [
                            { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌸] DESATIVAR [🌸]' }, type: 1 }
                        ]
                    } else {
                        buttons02 = [
                            { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🌸] ATIVAR [🌸]' }, type: 1 }
                        ]
                    }
                    buttonMessage02 = {
                        text: `╭═──────═⌘═────═╮   
👑 𝐀𝐍𝐓𝐈 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎 👑

𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}


𝐆𝐑𝐔𝐏𝐎: ${groupName}
╰═──────═⌘═────═╯
`,
                        footer: `STATUS DO ANTIDOC AGORA:${Antidoc ? 'ATIVADO' : 'DESATIVADO'}\n`,
                        //buttons: buttons02,
                        headerType: 4,
                        contextInfo: { forwardingScore: 999, isForwarded: true }
                    }
                    client.sendMessage(from, buttonMessage02, { quoted: info })
                }
                break

            case 'antipv':
                if (!isOwner) return reply(ptbr.dono())
                if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                if (Number(args[0]) === 1) {
                    if (isAntiPv) return reply('Ja esta ativo')
                    antipv.push('Ativado')
                    fs.writeFileSync('./database/group/ativadores/antipv.json', JSON.stringify(antipv))
                    reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
                } else if (Number(args[0]) === 0) {
                    if (!isAntiPv) return reply('Ja esta Desativado')
                    pesquisar = 'Ativado'
                    processo = antipv.indexOf(pesquisar)
                    while (processo >= 0) {
                        antipv.splice(processo, 1)
                        processo = antipv.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./database/group/ativadores/antipv.json', JSON.stringify(antipv))
                    reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
                } else {
                    enviar('1 para ativar, 0 para desativar')
                }
                break

            case 'autoban':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (args.length < 1) return reply('🥋autoban 1 pra ativar,e autoban 0 pra desativar 🥋')
                if (Number(args[0]) === 1) {
                    if (islista) return reply("🥋Já está ativado🥋")
                    var ind = dbids.indexOf(from)
                    if (islista) {
                        lista[ind].actived = true
                    } else {
                        lista.push({
                            groupId: from,
                            actived: true,
                            number: []
                        })
                    }
                    fs.writeFileSync('./functions/lista.json', JSON.stringify(lista, null, 2) + '\n')
                    reply(`🌸Ativou com sucesso o recurso de autoban neste grupo🌸`)
                } else if (Number(args[0]) === 0) {
                    if (!islista) return reply("🥋Já está Desativado.🥋")
                    var ind = dbids.indexOf(from)
                    if (islista) {
                        lista[ind].actived = false
                    } else {
                        lista.push({
                            groupId: from,
                            actived: false,
                            number: []
                        })
                    }
                    fs.writeFileSync('./functions/lista.json', JSON.stringify(lista, null, 2) + '\n')
                    reply(`🌸Desativou com sucesso o recurso de autoban neste grupo🌸`)
                } else {
                    reply('1 para ativar, 0 para desativar')
                }
                break

            case 'listban':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                var ind = dbids.indexOf(from)
                if (!islista) return reply('Nenhum Número não foi adicionado')
                teks = '🌸Números que vou moer na porrada se voltar 😡\n'
                for (i = 0; i < lista[ind].number.length; ++i) {
                    teks += `➤ *${lista[ind].number[i]}*\n`
                }
                teks += '*Esses ai vou descer meu martelo do ban 🥵*'
                reply(teks)
                break

            case 'addlistanegra':
            case 'addlista':
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (args.length < 1) return reply('Cade o número?')
                var ind = dbids.indexOf(from)
                if (islista) {
                    listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
                    var numind = lista[ind].number.indexOf(listng)
                    if (numind >= 0) return reply('🌸este Número ja esta incluso🌸')
                    lista[ind].number.push(listng)
                } else {
                    listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
                    lista.push({
                        groupId: from,
                        actived: false,
                        number: [listng]
                    })
                }
                fs.writeFileSync('./functions/lista.json', JSON.stringify(lista, null, 2) + '\n')
                reply(`🌸Número adicionado a lista de autoban com sucesso 🌸`)
                break

            case 'dellistanegra':
            case 'dellista':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (args.length < 1) return reply('🌸Diga o numero sem espaço, + ou traço🌸')
                if (isNaN(args[0])) return reply('🌸Diga o numero sem espaço, + ou traço🌸')
                var ind = dbids.indexOf(from)
                if (!islista) return reply('Nenhum Número não foi adicionado')
                var numind = lista[ind].number.indexOf(args[0])
                if (numind < 0) return reply('🌸Esse número não está incluso na lista de autoban😑')
                lista[ind].number.splice(numind, 1)
                fs.writeFileSync('./functions/lista.json', JSON.stringify(lista, null, 2) + '\n')
                reply(`🌸Número removido a lista de autoban com sucesso 🌸`)
                break

            case 'linkgp':
            case 'linkgroup':
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isGroup) return reply(ptbr.grupo())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                let metadata = await client.groupMetadata(from)
                linkgc = await client.groupInviteCode(from)
                reply(` ${metadata.participants.length ? metadata.participants.length : "undefined"} PARTICIPANTES DO GRUPO🌸  🌸LINK DO GRUPO🌸 ${groupMetadata.subject}🌸https://chat.whatsapp.com/` + linkgc)
                break

            case 'promover':
            case 'promote':
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())

                if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('🌸Marque ou responda a mensagem de quem você quer promover🌸')
                mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
                if (botNumber.includes(mentioned)) return reply("😑")

                let responsedm = await client.groupParticipantsUpdate(from, [mentioned], 'promote')
                if (responsedm[0].status === "200") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} Agora é Adm.️`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                else if (responsedm[0].status === "404") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} não está no grupo️`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                else client.sendMessage(from, { text: `😥Parece que deu erro😥️`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                break

            case "rebaixar":
                if (!isGroupAdmins) return reply(ptbr.admin());
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin());
                if (
                    info.message.extendedTextMessage === undefined ||
                    info.message.extendedTextMessage === null
                )
                    return reply(
                        "🌸Marque ou responda a mensagem de quem você quer tirar o admin🌸"
                    );
                mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    ? info.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    : info.message.extendedTextMessage.contextInfo.participant;
                if (botNumber.includes(mentioned))
                    return reply("😑 marque outra pessoa");
                let responsepm = await client.groupParticipantsUpdate(
                    from,
                    [mentioned],
                    "demote"
                );
                if (responsepm[0].status === "406")
                    client.sendMessage(from, {
                        text: `@${mentioned.split("@")[0]
                            } criou esse grupo e não pode ser removido(a) da lista de admins.️`,
                        mentions: [mentioned, sender],
                        contextInfo: { forwardingScore: 999, isForwarded: true },
                    });
                else if (responsepm[0].status === "200")
                    client.sendMessage(from, {
                        text: `@${mentioned.split("@")[0]} 😥não e mais adm do grupo😥`,
                        mentions: [mentioned, sender],
                        contextInfo: { forwardingScore: 999, isForwarded: true },
                    });
                else if (responsepm[0].status === "404")
                    client.sendMessage(from, {
                        text: `@${mentioned.split("@")[0]} não está no grupo😑️`,
                        mentions: [mentioned, sender],
                        contextInfo: { forwardingScore: 999, isForwarded: true },
                    });
                else
                    client.sendMessage(from, {
                        text: `Parece que deu erro️`,
                        mentions: [sender],
                        contextInfo: { forwardingScore: 999, isForwarded: true },
                    });
                break;

            case 'reviver':
            case 'add':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isOwner) return reply(ptbr.dono())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o usuario para adicionar')
                response2 = await client.groupParticipantsUpdate(from, [menc_prt], "add")
                reply('🌸USUÁRIO ADICIONADO COM SUCESSO 🌸')
                break

            case 'sairgp':
                if (isGroup && !isOwner && !info.key.fromMe) return reply(ptbr.dono())
                try {
                    client.groupLeave(from)
                } catch (erro) {
                    reply(String(erro))
                }
                break

            case 'abrirgp':
            case 'fechagp':
            case 'grupo':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (args[0] === 'a') {
                    reply(`*GRUPO ABERTO COM SUCESSO*`)
                    await client.groupSettingUpdate(from, 'not_announcement')
                } else if (args[0] === 'f') {
                    reply(`*GRUPO FECHADO COM SUCESSO*`)
                    await client.groupSettingUpdate(from, 'announcement')
                }
                break

            case 'novolink':
            case 'redefinir':
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isGroup) return reply(ptbr.grupo())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                try {
                    await client.groupRevokeInvite(from)
                    reply('🌸LINK DO GRUPO REDEFINIDO🌸')
                } catch (e) {
                    console.log(e)
                    reply(`ERRO`)
                }
                break

            case 'setfotogp':
            case 'fotogp':
                addFilter(from)
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (!isQuotedImage) return reply(`Use: ${prefix + command} Marque uma foto`)
                ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
                rane = getRandom('.' + await getExtension(ftgp.mimetype))
                buffimg = await getFileBuffer(ftgp, 'image')
                fs.writeFileSync(rane, buffimg)
                medipp = rane
                await client.updateProfilePicture(from, { url: medipp })
                reply(`🌸FOTO DO GRUPO ALTERADA COM SUCESSO🌸`)
                break

            case 'nomegp':
                {
                    if (!isGroup) return reply(ptbr.grupo())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                    blat = args.join(" ")
                    client.groupUpdateSubject(from, `${blat}`)
                    client.sendMessage(from, { text: '🌸NOME DO GRUPO ALTERADO COM SUCESSO 🌸' }, { quoted: info }).catch((err) => {
                        reply(`erro`);
                    })
                }
                break

            case 'descgp':
            case 'descriçãogp':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                blabla = args.join(" ")
                client.groupUpdateDescription(from, `${blabla}`)
                client.sendMessage(from, { text: 'Sucesso, alterou a descrição do grupo' }, { quoted: info })
                break


            case 'setfotogp':
            case 'fotogp':
                addFilter(from)
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
                ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
                rane = getRandom('.' + await getExtension(ftgp.mimetype))
                buffimg = await getFileBuffer(ftgp, 'image')
                fs.writeFileSync(rane, buffimg)
                medipp = rane
                await client.updateProfilePicture(from, { url: medipp })
                reply(`Foto do grupo alterada com sucesso`)
                break

            case 'fotobot':
                if (!isOwner) return reply(ptbr.dono())
                if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
                buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
                await client.updateProfilePicture(botNumber, buff)
                reply('Obrigado pelo novo perfil vlw')
                break


            case 'autofig-gp':
            case 'autofig':
                if (!isGroup) return reply(ptbr.grupo());
                if (!isGroupAdmins) return reply(ptbr.admin());
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin());
                if (Number(args[0]) === 1) {
                    if (isAutoSticker) return reply('Já está ativo');
                    autosticker.push(from);
                    fs.writeFileSync('./functions/autosticker.json', JSON.stringify(autosticker));
                    reply('🌸 Ativou com sucesso o recurso de auto fig 🌸');
                } else if (Number(args[0]) === 0) {
                    if (!isAutoSticker) return reply('Já está desativado');
                    pesquisar = from;
                    processo = autosticker.indexOf(pesquisar);
                    while (processo >= 0) {
                        autosticker.splice(processo, 1);
                        processo = autosticker.indexOf(pesquisar);
                    }
                    fs.writeFileSync('./functions/autosticker.json', JSON.stringify(autosticker));
                    reply('🌸 Desativou com sucesso o recurso de auto fig de grupo 🌸');
                }
                break;

            case 'criargp':          //case by: Bielzinho-bot
                if (!isOwner) return reply(ptbr.dono())
                const gp = args.join(' ')
                if (!gp) return reply('*Escreva o nome do grupo que vc quer criar....*')
                var group = await client.groupCreate(`${gp}`, [sender])
                reply(`*Grupo criado com sucesso*\n*Nome do grupo :* *${gp}*`)
                client.sendMessage(group.gid, `Bem vindo ao grupo amigo(a)`, MessageType.text, {quoted: info})
                break


            case 'autoreação':
            case 'autoreacao':
            case 'autoreact':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (Number(args[0]) === 1) {
                    if (isAutoReact) return reply('Já está ativado')
                    autoreact.push(from)
                    fs.writeFileSync('./functions/autoreact.json', JSON.stringify(autoreact))
                    reply('[🌸] Ativou com sucesso o recurso de auto reação neste grupo [🌸]')
                } else if (Number(args[0]) === 0) {
                    if (!isAutoReact) return reply('Já está desativado')
                    pesquisar = from
                    processo = autoreact.indexOf(pesquisar)
                    while (processo >= 0) {
                        autoreact.splice(processo, 1)
                        processo = autoreact.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./functions/autoreact.json', JSON.stringify(autoreact))
                    reply('🌸Desativou com sucesso o recurso de auto reação nesse grupo🌸')
                } else {
                    if (isAutoReact) {
                        buttons02 = [{ buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌸] DESATIVAR[🌸]' }, type: 1 }]
                    } else {
                        buttons02 = [{ buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🌸] ATIVAR [🌸]' }, type: 1 }]
                    }
                    buttonMessage02 = {
                        text: `╭═─────═⌘═────═╮   
👑 𝐀𝐔𝐓𝐎 𝐑𝐄𝐀ÇÃ𝐎 👑

𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}

𝐆𝐑𝐔𝐏𝐎: ${groupName}
╰═─────═⌘═────═╯`,
                        footer: `STATUS DO AUTO-REACT AGORA ${isAutoReact ? 'ATIVADO' : 'DESATIVADO'}\n`,
                        //buttons: buttons02,
                        headerType: 4,
                        contextInfo: { forwardingScore: 999, isForwarded: true }
                    }
                    client.sendMessage(from, buttonMessage02, { quoted: info })
                }
                break

            case 'leave':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                const leaveMessage = {
                    text: `O bot saiu do grupo: ${groupName}`,
                    footer: `${nomeBot}`,
                    headerType: 1
                }

                client.sendMessage(from, leaveMessage)
                client.leaveGroup(groupId)
                break

            case 'mutegp': case 'mutargp': case 'mgp':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                const muteMessage = {
                    text: `O bot silenciou o grupo: ${groupName}`,
                    footer: `${nomeBot}`,
                    headerType: 1
                }

                client.sendMessage(from, muteMessage)
                client.groupSettingChange(groupId, GroupSettingChange.messageSend, false)
                break

            case 'unmutegp': case 'desmutargp': case 'dmgp':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                const unmuteMessage = {
                    text: `O bot destilenciou o grupo: ${groupName}`,
                    footer: `${nomeBot}`,
                    headerType: 1
                }
                client.sendMessage(from, unmuteMessage)
                client.groupSettingChange(groupId, GroupSettingChange.messageSend, true)
                break

            case 'mute': case 'm': case 'mutar':
                if(!isGroup) return reply(ptbr.grupo())
                if(!isGroupAdmins) return reply(ptbr.admin())
                if(!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if(q.length <= 12) return reply('*❕Marque o número que deseja mutar.*')
                reagir(from, "🤐")
                await sleep(1000)
                mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
                if(isMuted) {
                var ind = GroupsMutedActived.indexOf(from)
                for (let _ of mentioned) {
                teks = `*_🔇 Usuário mutado:_* @${_.split('@')[0]}
                *_👤 Ação do adm:_* [ ${pushname} ]`
                muted[ind].numbers.push(_)
                }
                fs.writeFileSync('./database/user/muted.json', JSON.stringify(muted, null, 2))
                teks += '\n-\n*Se Você falar algo, você vai ser banido do grupo.*'
                mentions(teks, mentioned, true)
                } else {
                const data = {
                jid: from,
                numbers: mentioned
                }
                muted.push(data)
                fs.writeFileSync('./database/user/muted.json', JSON.stringify(muted, null, 2) + '\n')
                for (let _ of mentioned) {
                teks = `*_🔇 Usuário mutado:_* @${_.split('@')[0]}
                *_👤 Ação do adm:_* [ ${pushname} ]`
                }
                teks += '\n-\n*Se Você falar algo, você vai ser banido do grupo.*'
                mentions(teks, mentioned, true)
                }
                break;

            case 'desmute': case 'unmute': case 'desmutar':
                if(!isGroup) return reply(ptbr.grupo())
                if(!isGroupAdmins) return reply(ptbr.admin())
                if(!isBotGroupAdmins) return reply(ptbr.Botadmin())
                textin = args.join(" ")
                if(!textin) return reply('*❕Marque o número que deseja desmutar.*')
                reagir(from, "🤪")
                await sleep(1000)
                mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
                var ind = GroupsMutedActived.indexOf(from)
                if(isMuted) {
                for(let _ of mentioned) {
                if(muted[ind].numbers.indexOf(_) >= 0) {
                var rmind = muted[ind].numbers.indexOf(_)
                muted[ind].numbers.splice(rmind, 1)
                }
                }
                fs.writeFileSync('./database/user/muted.json', JSON.stringify(muted, null, 2) + '\n')
                for (let _ of mentioned) {
                teks = `*_🔊 Usuário desmutado:_* @${_.split('@')[0]}
                *_👤 Ação do adm:_* [ ${pushname} ]`
                }
                teks += '\n-\n* agora você pode falar a vontade no grupo!*'
                mentions(teks, mentioned, true)
                } else {
                const data = {
                jid: from,
                numbers: []
                }
                muted.push(data)
                fs.writeFileSync('./database/user/muted.json', JSON.stringify(muted, null, 2) + '\n')
                for (let _ of mentioned) {
                teks = `*_🔊 Usuário desmutado:_* @${_.split('@')[0]}
                *_👤 Ação do adm:_* [ ${pushname} ]`
                }
                teks += '\n-\n*Agora você pode falar a vontade no grupo!*'
                mentions(teks, mentioned, true)
                }
                break;
                            

            case "gp":
            case "msgdiretagp": {
                texto = args.join(' ')
                texto1 = texto.split('/')[0] || 'Indefinido'
                texto2 = texto.split('/')[1] || 'Indefinido'
                if (!isOwner) return
                if (!texto.includes("/")) return reply(`Digite o texto que vai aparecer Exemplo: /msgdireta iddogp/TXT
tem que ter a / e o id do grupo destinado senão não vai.`)
                let buttonMessage = {
                    image: { url: imagemdomenu },
                    caption: (`${texto2}`),
                    footer: ` `,
                    headerType: 4
                }
                client.sendMessage(`${texto1}@g.us`, buttonMessage)
            }
                break

            case 'tagall':
            case 'marcar': {
                if (!isGroup) return reply(resposta.group)
                if (!isGroupAdmins) return reply(ptbr.admin())
                let metadata = await client.groupMetadata(from)
                let teks = `
\n ${metadata.participants.length ? metadata.participants.length : "undefined"} participantes do grupo
\n ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `┃❖┃@${mem.id.split('@')[0]}\n`
                }
                client.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: live })
            }
                break

                /// sticker 
            case 'fstiker':
            case 'fsticker':
            case 'f':
            case 's':
            case 'stickergif':
            case "sticker":
            case 'sgif':
            case 'figu':
            case 'st':
            case 'stk':
                {
                    (async function () {
                        var legenda = q ? q?.split("/")[0] : ` `
                        var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `  `
                        var BotStkNome = `🤖Feito por\n💀Solicitado por\n⏰Dia:\n⏰Hora:\n👹Dono:\n📱Numero:`
                        var BotStkLegenda = `${nomeBot}\n${pushname}\n${dataz}\n${hora}\n${nomeDono}\n${numeroDono}` 
                        if (isMedia && !info.message.videoMessage || isQuotedImage) {
                            var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
                            rane = getRandom('.' + await getExtension(encmedia.mimetype))
                            buffimg = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, buffimg)
                            rano = getRandom('.webp')
                            exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                                fs.unlinkSync(rane)
                                // "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
                                var json = {
                                    "sticker-pack-name": BotStkNome,
                                    "sticker-pack-publisher": BotStkLegenda
                                }
                                var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                                var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                                var exif = Buffer.concat([exifAttr, jsonBuff])
                                exif.writeUIntLE(jsonBuff.length, 14, 4)
                                let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111) + ".temp.exif"
                                fs.writeFileSync(`./${nomemeta}`, exif)
                                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                                    client.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                                    fs.unlinkSync(nomemeta)
                                    fs.unlinkSync(rano)
                                })
                            })
                        } else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
                            var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
                            rane = getRandom('.' + await getExtension(encmedia.mimetype))
                            buffimg = await getFileBuffer(encmedia, 'video')
                            fs.writeFileSync(rane, buffimg)
                            rano = getRandom('.webp')
                            await ffmpeg(`./${rane}`)
                                .inputFormat(rane.split('.')[1])
                            exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                                fs.unlinkSync(rane)
                                let json = {
                                    "sticker-pack-name": BotStkNome,
                                    "sticker-pack-publisher": BotStkLegenda
                                }
                                let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                                let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                                let exif = Buffer.concat([exifAttr, jsonBuff])
                                exif.writeUIntLE(jsonBuff.length, 14, 4)
                                let nomemeta = "temp.exif"
                                fs.writeFileSync(`./${nomemeta}`, exif)
                                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                                    client.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                                    fs.unlinkSync(nomemeta)
                                    fs.unlinkSync(rano)
                                })
                            })
                        } else {
                            reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
                        }
                    })().catch(e => {
                        console.log(e)
                        reply(ptbr.erro())
                        try {
                            if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
                            if (fs.existsSync(rano)) fs.unlinkSync(rano);
                            if (fs.existsSync(media)) fs.unlinkSync(media);
                        } catch { }
                    })
                }
                break

            case 'togif':
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                if(!isQuotedSticker) return reply('Marque a figurinha animada!')
                try {
                if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
                buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
                reply('Aguarde, estou convertendo a figurinha para o formato gif.')
                a = await webp_mp4(buff)
                client.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: live}).catch(e => {
                reply("Erro ao realizar o envio do sticker!") 
                })
                DLT_FL(buff)
                }
                } catch {
                reply(ptbr.erro())
                }
                break
                
            case 'toimg':
                if (!isQuotedSticker) return reply('Marca uma Figurinha!!')
                reagir(from, '⏱️')
                buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
                try {   
                client.sendMessage(from, {image: buff}, {quoted: info})
                } catch(e) {
                console.log(e)
                reply(ptbr.erro())
                }
                break

            case 'attp':
                if(!q.trim()) return reply(`*_❕Coloque o texto que você quiser!_*\n- *🧑‍🏫 Por exemplo:* ${prefix + command} klaus`)
                reply(`fazendo`)
                client.sendMessage(from, {sticker: {url: `http://yurimodz-apis.xyz:44040/api/attp?texto=${q}&apikey=Yurizinn200`}}, {quoted: info}).catch(e => {
                return reply(ptbr.erro());
                })
                break

            case 'rankgostosos':
            case 'rankgostoso':
                if (!isGroup) return reply(ptbr.grupo())
                member = []
                const p01 = groupMembers
                const p02 = groupMembers
                const p03 = groupMembers
                const p04 = groupMembers
                const p05 = groupMembers
                const o01 = p01[Math.floor(Math.random() * p01.length)]
                const o02 = p02[Math.floor(Math.random() * p02.length)]
                const o03 = p03[Math.floor(Math.random() * p03.length)]
                const o04 = p04[Math.floor(Math.random() * p04.length)]
                const o05 = p05[Math.floor(Math.random() * p05.length)]
                luy = `
Parados!🤚🤚\n\n1=🤚🤭@${o01.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o02.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o03.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o04.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o05.id.split('@')[0]}🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: ${nomeBot}`
                member.push(o01.id)
                member.push(o02.id)
                member.push(o03.id)
                member.push(o04.id)
                member.push(o05.id)
                mentions(luy, member, true)
                break

            case 'rankgay':
                if (!isGroup) return reply(ptbr.grupo())
                membr = []
                var porcentagem = `${Math.floor(Math.random() * 105)}`
                const gay1 = groupMembers
                const gay2 = groupMembers
                const gay3 = groupMembers
                const gay4 = groupMembers
                const gay5 = groupMembers
                var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                const gays1 = gay1[Math.floor(Math.random() * gay1.length)]
                const gays2 = gay2[Math.floor(Math.random() * gay2.length)]
                const gays3 = gay3[Math.floor(Math.random() * gay3.length)]
                const gays4 = gay4[Math.floor(Math.random() * gay4.length)]
                const gays5 = gay5[Math.floor(Math.random() * gay5.length)]
                rankzingay = `
*Esses são os Gays🏳️‍🌈 do grupo:*\n${groupName}\n
*╭────────────*
*│* 🏳️‍🌈 @${gays1.id.split('@')[0]}
*│➥ ${porcent} Gay Padrão*
*│* 🏳️‍🌈 @${gays2.id.split('@')[0]}
*│➥${porcent2}Gay Incubado*
*│* 🏳️‍🌈 @${gays3.id.split('@')[0]}
*│➥ ${porcent3} Gay Barbie*
*│* 🏳️‍🌈 @${gays4.id.split('@')[0]}
*│➥ ${porcent4} Gay Ativo*
*│* 🏳️‍🌈 @${gays5.id.split('@')[0]}
*│➥ ${porcent5} Gay Passivo*
*╰────────────*
\n*🔥${nomeBot}🔥*`
                membr.push(gays1.id)
                membr.push(gays2.id)
                membr.push(gays3.id)
                membr.push(gays4.id)
                membr.push(gays5.id)
                client.sendMessage(from, { text: rankzingay, mentions: membr }, { quoted: live })
                break
            case 'rankcorno':
                if (!isGroup) return reply(ptbr.grupo())
                var porcentagem = `${Math.floor(Math.random() * 105)}`
                membr = []
                const corno1 = groupMembers
                const corno2 = groupMembers
                const corno3 = groupMembers
                const corno4 = groupMembers
                const corno5 = groupMembers
                var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
                const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
                const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
                const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
                const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
                rankzincorno = `
*Esses são os Cornos🐂 do grupo:*\n${groupName}\n
*╭────────────*
*│* 🐂 @${cornos1.id.split('@')[0]}
*│➥ ${porcent} Corno Comum*
*│* 🐂 @${cornos2.id.split('@')[0]}
*│➥ ${porcent2} Corno Manso*
*│* 🐂 @${cornos3.id.split('@')[0]}
*│➥ ${porcent3} Corno Conformado*
*│* 🐂 @${cornos4.id.split('@')[0]}
*│➥ ${porcent4} Corno Hiper-Chifrudo*
*│* 🐂 @${cornos5.id.split('@')[0]}
*│➥ ${porcent5} Mestre Do Free Fire*
*╰────────────*
\n*🔥${nomeBot}🔥*`
                membr.push(cornos1.id)
                membr.push(cornos2.id)
                membr.push(cornos3.id)
                membr.push(cornos4.id)
                membr.push(cornos5.id)
                client.sendMessage(from, { text: rankzincorno, mentions: membr }, { quoted: live })
                break

            case 'rankhetero':
                if (!isGroup) return reply(ptbr.grupo())
                var porcentagem = `${Math.floor(Math.random() * 105)}`
                membr = []
                const hetero1 = groupMembers
                const hetero2 = groupMembers
                const hetero3 = groupMembers
                const hetero4 = groupMembers
                const hetero5 = groupMembers
                var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
                const heteros1 = hetero1[Math.floor(Math.random() * hetero1.length)]
                const heteros2 = hetero2[Math.floor(Math.random() * hetero2.length)]
                const heteros3 = hetero3[Math.floor(Math.random() * hetero3.length)]
                const heteros4 = hetero4[Math.floor(Math.random() * hetero4.length)]
                const heteros5 = hetero5[Math.floor(Math.random() * hetero5.length)]
                rankzinhetero = `
*Esses são os Héteros💥 do grupo:*\n${groupName}\n
*╭────────────*
*│* 💥 @${heteros1.id.split('@')[0]}
*│➥ ${porcent} Hétero Comum*
*│* 💥 @${heteros2.id.split('@')[0]}
*│➥ ${porcent2} Hétero Mandrake*
*│* 💥 @${heteros3.id.split('@')[0]}
*│➥ ${porcent3} Hétero Curioso*
*│* 💥 @${heteros4.id.split('@')[0]}
*│➥ ${porcent4} Hétero Top*
*│* 💥 @${heteros5.id.split('@')[0]}
*│➥ ${porcent5} Hétero Cis*
*╰────────────*
\n*🔥${nomeBot}🔥*`
                membr.push(heteros1.id)
                membr.push(heteros2.id)
                membr.push(heteros3.id)
                membr.push(heteros4.id)
                membr.push(heteros5.id)
                client.sendMessage(from, { text: rankzinhetero, mentions: membr }, { quoted: live })
                break

            case 'vesgo': // Sem Fotos
                if (!isGroup) return reply(ptbr.grupo())
                const aletttb = `${Math.floor(Math.random() * 105)}`
                reply('Aguarde, confiscando sua porcentagem...')
                await delay(5000)
                reply(`Sua Porcentagem De Vesgo é De : ${aletttb}%`)
                brea        
            case 'bebado': // Sem Fotos
                if (!isGroup) return reply(ptbr.grupo())
                const alettb = `${Math.floor(Math.random() * 105)}`
                reply('Aguarde, confiscando sua porcentagem...')
                await delay(5000)
                reply(`Sua Porcentagem De bebado é De : ${alettb}%`)
                brea        
            case 'feio': // Sem Fotos
                if (!isGroup) return reply(ptbr.grupo())
                const aletb = `${Math.floor(Math.random() * 105)}`
                reply('Aguarde, confiscando sua porcentagem...')
                await delay(5000)
                reply(`Sua Porcentagem De Feio é De : ${aletb}%`)
                break

            case 'lindo':
                if (!isGroup) return reply(ptbr.grupo())
                const aletc = `${Math.floor(Math.random() * 105)}`
                reply('Aguarde, confiscando sua porcentagem...')
                await delay(5000)
                reply(`Sua Porcentagem De Lindo(a) é De : ${aletc}%`)
                break

            case 'gostoso':
                if (!isGroup) return reply(ptbr.grupo())
                const aletd = `${Math.floor(Math.random() * 105)}`
                reply('Aguarde, confiscando sua porcentagem...')
                await delay(5000)
                reply(`Sua Porcentagem De Gostoso(a) é De : ${aletd}%`)
                break

            case 'gostosa': {
                if (!isGroup) return reply(ptbr.grupo())
                const aletd1 = `${Math.floor(Math.random() * 105)}`
                reply('Aguarde, confiscando sua porcentagem...')
                await delay(5000)
                reply(`Sua Porcentagem De Gostoso(a) é De : ${aletd1}%`)
                }
                break

            case 'gado':
                if (!isGroup) return reply(ptbr.grupo())
                const alete = `${Math.floor(Math.random() * 105)}`
                reply('Aguarde, confiscando sua porcentagem...')
                await delay(5000)
                reply(`Sua Porcentagem De Gado(a) é De : ${alete}%`)
                break

            case 'punheteiro':
                if (!isGroup) return reply(ptbr.grupo())
                const aletl = `${Math.floor(Math.random() * 105)}`
                reply('Aguarde, confiscando sua porcentagem...')
                await delay(5000)
                reply(`Sua Porcentagem De punheteiro(a) é De : ${aletl}%`)
                break


            case 'gay':// Sem Fotos
                if (!isGroup) return reply(ptbr.grupo())
                const aleta = `${Math.floor(Math.random() * 105)}`
                reply('Aguarde, confiscando sua porcentagem...')
                await delay(5000)
                reply(`Sua Porcentagem De Gay é De : ${aleta}%`)
                break

            case 'alma-gemeas':
                if (!isGroup) return reply(ptbr.grupo())
                membr = []
                const suamae121 = groupMembers
                const suamae251 = groupMembers
                const teupai117 = suamae121[Math.floor(Math.random() * suamae121.length)]
                const teupai251 = suamae251[Math.floor(Math.random() * suamae251.length)]
                var shipted11 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`, `13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
                const shipteddd = shipted11[Math.floor(Math.random() * shipted11.length)]
                jet = `*Hmmm....  alma-gemeas eles 2 💘💘*\n\n1= @${teupai117.id.split('@')[0]}\n2= @${teupai251.id.split('@')[0]}\ncom uma porcentagem de: ${shipteddd}`
                membr.push(teupai117.id)
                membr.push(teupai251.id)
                mentions(jet, membr, true)
                break

            case 'shipo':
                if (!isGroup) return reply(ptbr.grupo())
                if (q.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
                membrr = []
                const suamae111 = groupMembers
                const suamae211 = groupMembers
                const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
                const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
                var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`, `13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
                const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
                jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]}\n2 = ${q}\ncom uma porcentagem de: ${shiptedd}`
                membrr.push(teupai111.id)
                membrr.push(teupai211.id)
                mentions(jet, membrr, true)
                break

            case "Menudownload":
            case "menudownload":
            case "download":
                client.sendMessage(from, { react: { text: `💫`, key: info.key } })
                /*
                const buuuuuuuttons = [
                //  {buttonId: 'id', buttonText: {displayText: '[👑]  [👑]'}, type: 1},
                  {buttonId: `${prefix}menuadm`, buttonText: {displayText: '[💦] 𝙈𝙀𝙉𝙐 𝘼𝘿𝙈 [💦]'}, type: 1},
                  {buttonId: `${prefix}infodono`, buttonText: {displayText: '[🍷] 𝘿𝙊𝙉𝙊 [🍷]'}, type: 1}
                ]
                */
                const buottonMeessage = {
                    image: { url: imagemdomenu },
                    caption: `╭─⊣〘 ${nomeBot} 〙
║
╠➽USER: ${pushname}
╠➽𝐕𝐄𝐑𝐒Ã𝐎: 2.5
╠➽𝐍𝐎𝐌𝐄:  ${pushname}
║
║╭─⊣〘 MENUS 〙
║
╠➽${prefix}playmp3 (link)
╠➽${prefix}playmp4 (link)
╠➽${prefix}Playaudio (nome da musica)
╠➽${prefix}Playvideo (nome do video)
║
╚════• 〘${nomeBot}〙•═════╝
`,
                    footer: `  `,
                    ///    buttons: buuuuuuuttons,
                    headerType: 4
                }

                client.sendMessage(from, buottonMeessage)

                break

            case 'figfundo':
            case 'figvideo':
            case 'figusemfundo':
            case 'sfundo':{
                if (!isQuotedImage) return reply(`Marque uma imagem`)
                if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
                    manu = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info = message.imageMessage
                    buff = await getFileBuffer(manu, 'image')
                    bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
                    const anus = args.join(' ').split('|')
                    satu = anus[0] !== '' ? anus[0] : `${pushname}`
                    sd = `CRIADO POR ↓${nomeBot}`
                    dua = typeof anus[1] !== 'undefined' ? anus[1] : `${sd}`
                    var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
                    var sti = new Buffer.from(mantap, 'base64');
                    client.sendMessage(from, { sticker: sti }, { quoted: info })
                } else {
                    return reply(`So imagem mn -_-`)
                }
            }break

            case 'rename':
            case 'roubar':
                if (!isQuotedSticker) return reply('Marque uma figurinha...')
                encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
                var kls = q
                var pack = kls.split("/")[0];
                var author2 = kls.split("/")[1];
                if (!q) return reply('*E o autor e o nome do pacote?*')
                if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
                if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
                bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
                var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
                var sti = new Buffer.from(mantap, 'base64');
                client.sendMessage(from, { sticker: sti, contextInfo: { externalAdReply: { title: `${pack}|${author2}`, body: "", previewType: "PHOTO", thumbnail: sti } } }, { quoted: live })
                    .catch((err) => {
                        reply(`❎ Error, tenta mais tarde`);
                    })
                break

            case 'emoji': {
                if (!args.join(" ")) return reply('CADÊ O EMOJI?')
                emoji.get(args.join(" ")).then(async (emoji) => {
                    let mese = await client.sendMessage(from, { image: { url: emoji.images[4].url }, caption: "PRONTO!" }, { quoted: m })
                    await client.sendMessage(from, { text: `!s` }, { quoted: live })
                }).catch(e => {
                    reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI AÍ...")
                })
            }
                break

            //CASSINO E JOGOS
            case 'cassino':
                const soto = [
                    '🍊 : 🍒 : 🍐',
                    '🍒 : 🔔 : 🍊',
                    '🍇 : 🍇 : 🍇',
                    '🍊 : 🍋 : 🔔',
                    '🔔 : 🍒 : 🍐',
                    '🔔 : 🍒 : 🍊',
                    '🍊 : 🍋 : ??',
                    '🍐 : 🍒 : 🍋',
                    '🍐 : 🍐 : 🍐',
                    '🍊 : 🍒 : 🍒',
                    '🔔 : 🔔 : 🍇',
                    '🍌 : 🍒 : 🔔',
                    '🍐 : 🔔 : 🔔',
                    '🍊 : 🍋 : 🍒',
                    '🍋 : 🍋 : 🍌',
                    '🔔 : 🔔 : 🍇',
                    '🔔 : 🍐 : 🍇',
                    '🔔 : 🔔 : 🔔',
                    '🍒 : 🍒 : 🍒',
                    '🍌 : 🍌 : 🍌'
                ]
                const mining = Math.ceil(Math.random() * 200) + 1
                var somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
                if ((somtoy2 == '🥑 : 🥑 : 🥑') || (somtoy2 == '🍉 : 🍉 : 🍉') || (somtoy2 == '🍓 : 🍓 : 🍓') || (somtoy2 == '🍎 : 🍎 : 🍎') || (somtoy2 == '🍍 : 🍍 : 🍍') || (somtoy2 == '🥝 : 🥝 : 🥝') || (somtoy2 == '🍑 : 🍑 : 🍑') || (somtoy2 == '🥥 : 🥥 : 🥥') || (somtoy2 == '🍋 : 🍋 : 🍋') || (somtoy2 == '🍐 : ?? : 🍐') || (somtoy2 == '🍌 : 🍌 : 🍌') || (somtoy2 == '🍒 : 🍒 : 🍒') || (somtoy2 == '🔔 : 🔔 : 🔔') || (somtoy2 == '🍊 : 🍊 : 🍊') || (somtoy2 == '🍇 : 🍇 : 🍇')) {
                    var Vitória = "Você ganhou 🔮"
                } else {
                    var Vitória = "Você perdeu..."
                }
                
                let butttons = [
                  {buttonId: `${prefix}cassino`, buttonText: {displayText: '💦PRÓXIMO💦'}, type: 1},
                  ]
                templateMassage = {
                    text: `
╔═════🥇︎═════╗
┣► ${somtoy2}◄┛
╚═════🥇︎═════╝

*${Vitória}*`,
                    footer: `${nomeBot}`,
                    headerType: 1
                }
                client.sendMessage(from, templateMassage)
            
                if (Vitória == "Você ganhou!!!") {
                    reply('Parabéns')
                }
                break

            case 'chance':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isUser) return reply(ptbr.user(prefix, pushname, nomeBot))
                var avb = body.slice(7)
                if (args.length < 1) return client.sendMessage(from, { text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay` }, { quoted: info })
                random = `${Math.floor(Math.random() * 100)}`
                hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
                await client.sendMessage(from, { text: hasil, contextInfo: { mentionedJid: [sender] } }, { quoted: info })
                break

            case 'gadometro':
                if (!isGroup) return reply(ptbr.grupo())
                var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
                var gado = chifre[Math.floor(Math.random() * chifre.length)]
                gadop = `${Math.floor(Math.random() * 100)}`
                hisil = `VOCÊ É:\n\n${gado}`
                reply(hisil)
                break

            case 'pau'://Jogos
                if (!isGroup) return reply(ptbr.grupo())
                randommmm = `${Math.floor(Math.random() * 35)}`
                const tamanho = randommmm
                if (tamanho < 13) { pp = 'só a fimose' } else if (tamanho == 13) { pp = 'passou da média😳' } else if (tamanho == 14) { pp = 'passou da média😳' } else if (tamanho == 15) { pp = 'eita, vai pegar manga?' } else if (tamanho == 16) { pp = 'eita, vai pegar manga?' } else if (tamanho == 17) { pp = 'calma man, a mina não é um poço😳' } else if (tamanho == 18) { pp = 'calma man, a mina não é um poço😳' } else if (tamanho == 19) { pp = 'calma man, a mina não é um poço😳' } else if (tamanho == 20) { pp = 'você tem um poste no meio das pernas' } else if (tamanho == 21) { pp = 'você tem um poste no meio das pernas' } else if (tamanho == 22) { pp = 'você tem um poste no meio das pernas' } else if (tamanho == 23) { pp = 'você tem um poste no meio das pernas' } else if (tamanho == 24) { pp = 'você tem um poste no meio das pernas' } else if (tamanho > 25) {
                    pp = 'vai procurar petróleo com isso?'
                }
                hasil = `SEU PAU TEM ${randommmm}CM\n\n${pp}`
                reply(hasil)
                break

            case 'gay1':
                if (!isGroup) return reply(ptbr.grupo())
                if (args.length < 1) return reply('marque o gay do gp!')
                rate = body.slice(5)
                var ti = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
                var kl = ti[Math.floor(Math.random() * ti.length)]
                reply('COMO VOCÊ É GAY: *' + rate + '*\n\nSUA PORCENTAGEM GAY : ' + kl + '%\n ESSE AÍ AMA DÁ O CU')
                break

            case 'casar':
                if(!isGroup) return reply(ptbr.grupo())
                if (!isUser) return reply(ptbr.user(prefix, pushname, nomeBot))
                reagir(from, '💍')
                if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
                mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
                pru = '.\n'
                for (let _ of mentioned) {
                pru += `@${_.split('@')[0]}\n`
                }
                susp = `Parabens, Agora Voce Pegou Prisão Perpétua, Digo, se Casou Com @${mentioned[0].split('@')[0]}` 
                jrq = await getBuffer(`${casalzin}`)
                await client.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: info})
                break

            case 'minerardima':
            case 'minerardiamante':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isUser) return reply(ptbr.user(prefix, pushname, nomeBot))
                const minerardima = `${Math.floor(Math.random() * 105)}`

                client.sendMessage(from, {image: fs.readFileSync('./funções/rpg/image/diamante.jpg'), caption: `

                    *┏ 「️ ⛏️ MINERIOS ⛏️* 」  
                    *│*
                    *│▢ 💎 DIAMANTE* [${minerardima}]
                *│*
                    *┗ 「️⛏️ MINERIOS ⛏️*」  
                    `},{quoted: info})
                break

                /// rpg

            case 'banco': { 
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                var saldo = checkATMuser(sender)
                client.sendMessage(from, {image: fs.readFileSync('./funções/rpg/image/banco.jpg'), caption: `
                『 👤 』 *NOME: ${pushname}*
                『 🏛️ 』 *BANCO: NUBANK*
                『 💵 』 *DINHEIRO: ${saldo}*
                『 🏡 』 *CASA: ${iscasa? "SIM ✅" : "NÃO ❌"}*
                『 🤑 』 *RICO: ${istagrico? "SIM ✅" : "NÃO ❌"}*
                `},{quoted: info})
                }
                break

            case 'money':
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                client.sendMessage(from, {react: {text: `💵`, key: info.key}}) 
                client.sendMessage(from, {video: {url: `https://telegra.ph/file/7d1a76c9d628836f27e8d.mp4`}, gifPlayback: true, caption: `
                ╭━➪_MONEY_
                │◦➛𝗡𝗼𝗺𝗲 : ${pushname}
                │◦➛𝗡𝘂𝗺𝗲𝗿𝗼 : ${sender.split("@")[0]}
                │◦➛𝗗𝗶𝗻𝗵𝗲𝗶𝗿𝗼 : ${checkATMuser(sender)}
                ╰━━━━━━━━
                `
                },{quoted: info})
                break

                case 'hero': case 'lot':
                    if (!isGroup) return reply(ptbr.grupo(pushname))
                    if (!isUser) return reply(ptbr.user(pushname))
                    try {
                    ppimg = await client.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
                    } catch {
                    ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
                    }
                    try {
                    client.sendMessage(from, {video: {url: `https://telegra.ph/file/b1febb2db7a727eee9d7d.mp4`}, gifPlayback: true, caption: ` 
                    ┏━──────「🕴️」──────━┓
                    │          *SEU INVENTÁRIO*
                    │
                    │ *${isCarab? "⛑️" : "❌"} : CAPACETE*
                    │
                    │ *${isPalitor? "👔" : "❌"} : PALETÓ*
                    │
                    │ *${iscasa? "🏡" : "❌"} : CASA*
                    │
                    │ *${isCaussa? "👖" : "❌"} : CALÇA*
                    │
                    │ *${isaguacoco? "💧" : "❌"} : AGUA DE COCO*
                    │
                    │ *${isSapato? "👞" : "❌"} : SAPATO*
                    │
                    │ *${isespada? "⚔" : "❌"} : ESPADA*
                    │
                    │
                    │
                    ╠━━━━━━━━━━━━━━━━━━━━━━━
                    │             *TAGS*
                    ╠━━━━━━━━━━━━━━━━━━━━━━━
                    │
                    │
                    │> RICO: ${istagrico? "SIM ✅" : "NÃO ❌"}
                    │
                    │
                    ┗━──────「🕴️」──────━┛
                    `},{quoted: info})
                    } catch (e) {
                    console.log(e)
                    }
                    break

            case 'tomaraguacoco':
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                if(!JSON.stringify(aguacoco).includes(sender)) return reply(`VOCE NAO TEM AGUA DE COCO INFINITO USE  ${prefix}aguacoco`)
                aguadd = Math.floor((Math.random() * 4) * 3);
                reply(`VOCE TOMOU UMA AGUA DE COCO\n\nMATOU [ ${aguadd}% ] DA SUA SEDE `)
                break

            case 'aguacoco':{
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                const dinheiro = checkATMuser(sender)
                const checkxpr = checkATMuser(sender, dinheiro) 
                const quantidader = `100`
                if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR AGUA DE COCO INFINITO*\n\n*PREÇO: ${quantidader}*`)
                var [comprar] = q.split("")
                if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
                aguacoco.push(`${sender}`)
                fs.writeFileSync('./database/user/compras/aguacoco.json', JSON.stringify(aguacoco))
                addKoinUser(sender, - quantidader)
                reply(`AGUA DE COCO COMPRADA COM SUCESSO* 🌍\n\n*CUSTO 💰: ${quantidader}*`)
                }
                break
            
            case 'capacete':{
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                const dinheiro = checkATMuser(sender)
                const checkxpr = checkATMuser(sender, dinheiro) 
                const quantidader = `400`
                var [comprar] = q.split("")
                if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
                if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR A CAPACETE DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
                carab.push(`${sender}`)
                fs.writeFileSync('./database/user/compras/carab.json', JSON.stringify(carab))
                addKoinUser(sender, - quantidader)
                reply(`*CAPACETE COMPRADO COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
                }
                break
                
            case 'calça':{
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                const dinheiro = checkATMuser(sender)
                const checkxpr = checkATMuser(sender, dinheiro) 
                const quantidader = `200`
                if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR CALÇA DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
                var [comprar] = q.split("")
                if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
                caussa.push(`${sender}`)
                fs.writeFileSync('./database/user/compras/calça.json', JSON.stringify(caussa))
                addKoinUser(sender, - quantidader)
                reply(`*CALÇA COMPRADA COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
                }
                break
                
            case 'sapatos':
            case 'sapato': 
                {
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                const dinheiro = checkATMuser(sender)
                const checkxpr = checkATMuser(sender, dinheiro) 
                const quantidader = `100`
                if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR SAPATOS DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
                var [comprar] = q.split("")
                if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
                sapato.push(`${sender}`)
                fs.writeFileSync('./database/user/compras/sapato.json', JSON.stringify(sapato))
                addKoinUser(sender, - quantidader)
                reply(`*SAPATO COMPRADO COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
                }
                break
                
            case 'paleto':{
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                const dinheiro = checkATMuser(sender)
                const checkxpr = checkATMuser(sender, dinheiro) 
                const quantidader = `700`
                if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR PALITOR DE TRABALHO*\n\n*PREÇO: ${quantidader}*`)
                var [comprar] = q.split("")
                if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
                palitor.push(`${sender}`)
                fs.writeFileSync('./database/user/compras/palitor.json', JSON.stringify(palitor))
                addKoinUser(sender, - quantidader)
                reply(`*paletó COMPRADO COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
                }
                break

            case 'espada':   case 'comprarespada':{
                const dinheiro = checkATMuser(sender)
                const checkxpr = checkATMuser(sender, dinheiro) 
                const quantidader = `7000`
                if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR UMA ESPADA*\n\n*PREÇO: ${quantidader}*`)
                var [comprar] = q.split("")
                if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
                espada.push(`${sender}`)
                fs.writeFileSync('./database/user/compras/espada.json', JSON.stringify(espada))
                addKoinUser(sender, - quantidader)
                reply(`*ESPADA COMPRADA COM SUCESSO*\n\n*CUSTO 💰: ${quantidader}*`)
                }
                break

            case 'pix':
                        if (!isGroup) return reply(ptbr.grupo(pushname))
                        if (!isUser) return reply(ptbr.user(pushname))
                        if (args.length < 1) return reply(`Modo certo de se usar ${prefix}pix @ | valor`)
                        if (!q.includes('/')) return reply(`Você precisa colocar o valor que deseja transferir.\n\nExemplo:\n\n*${prefix}Pix @pessoa / 3000*`)
                        const tujuan = q.substring(0, q.indexOf('/') - 1)
                        const jumblah = q.substring(q.lastIndexOf('/') + 1)
                        if(isNaN(jumblah)) return await reply('O valor precisa está em números...')
                        if (jumblah < 50 ) return reply(`transfrência mínima e de 50 Coins`)
                        if (checkATMuser(sender) < jumblah) return reply(`Você não tem Coins suficiente para fazer uma transferência, você precisa ter no minímo 1000 de Coins`)
                        const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                        fee = 0.00 *  jumblah //IMPOSTO CADA 1 DE DINHERO, ALMENTA E CAI NA SUA CONTA, TODA VEZ QUÊ ALGUÉM FAZER TRANSFERENCIA
                        hasiltf = jumblah - fee
                        addKoinUser(tujuantf, hasiltf)
                        confirmATM(sender, jumblah)
                        addKoinUser('5524999304661@s.whatsapp.net', fee)
                                
                                pingaa = `*TRANSFERÊNCIA REALIZADA*

                [🚹]> ORIGEM: *${sender.split("@")[0]}*
                [🗽]> DESTINARIO: *${tujuan}*
                [💵]> VALOR DA TRANSFERÊNCIA: *${jumblah}*
                [🗒]> BANCO: ${nomeBot}
                [⚠]> TARIFA: *0,00*
                `;
                            
                client.sendMessage(from, {image: fs.readFileSync('./funções/rpg/image/banco.jpg'), caption: pingaa}, {quoted: info})
                break

                case 'minerar': {
                    if (!isGroup) return reply(ptbr.grupo(pushname))
                    if (!isUser) return reply(ptbr.user(pushname))
                    // Verificar se o arquivo JSON existe, e criar se não existir
                    if (!fs.existsSync('./database/user/cooldown/pescarCooldown.json')) {
                        fs.writeFileSync('./database/user/cooldown/pescarCooldown.json', JSON.stringify({}));
                    }
                
                    // Carregar o objeto pescarCooldown do arquivo JSON
                    const pescarCooldown = JSON.parse(fs.readFileSync('./database/user/cooldown/pescarCooldown.json', 'utf8'));
                
                    const currentTimePescar = Date.now();
                    const lastPescarTime = pescarCooldown[sender] || 0;
                    const timeSinceLastPescar = currentTimePescar - lastPescarTime;
                    const pescarCooldownTime = 5 * 60 * 1000; // 5 minutos em milissegundos
                
                    if (timeSinceLastPescar < pescarCooldownTime) {
                        const remainingTime = (pescarCooldownTime - timeSinceLastPescar) / 1000;
                        return reply(`Aguarde ${remainingTime.toFixed(0)} segundos antes de minerar novamente.`);
                    }
                
                    reply(`*OLÁ ${pushname}, AGUARDE 5 SEGUNDOS PARA CONCLUÍR A MINERAÇÃO**`);
                        // Atualizar o tempo da última pescaria no arquivo JSON
                    pescarCooldown[sender] = currentTimePescar;
                    fs.writeFileSync('./database/user/cooldown/pescarCooldown.json', JSON.stringify(pescarCooldown));
                    await sleep(5000);
                    lagoostas = Math.floor((Math.random() * 150) + 40);
                    carranguejos = Math.floor((Math.random() * 150) + 30);
                    camaroes = Math.floor((Math.random() * 150) + 40);
                    mexilhao = Math.floor((Math.random() * 150) + 50);
                    var resultadoresultadoo = lagoostas + carranguejos + camaroes + mexilhao;
                
                    try {
                        picc = await client.profilePictureUrl(from, "image");
                    } catch(e) {
                        picc = 'https://telegra.ph/file/9651f2a3a24c15ef71dd1.mp4';
                    }
                
                    ds = await getBuffer(picc);
                
                    let thumbInfo = `
                *┏━── *「️ 🔰  M I N E  🔰 」*  ─━┓*
                *│▢ Total de PEDRAS: ${lagoostas}*
                *│▢ Total de DIAMANTES: ${carranguejos}*
                *│▢ Total de OUROS: ${camaroes}*
                *│▢ Total de FERRO: ${mexilhao}*
                *│▢ *Resultado Final: ${resultadoresultadoo}*
                *┗━── *「️ 🔰  M I N E  🔰 」*  ─━┛*
                [㕚] *Isso significa que foi adicionado em sua carteira R$${resultadoresultadoo},00 em coins!*
                `;
                
             client.sendMessage(from,  {image: ds, caption: `${thumbInfo}`}, {quoted: info});
                    addKoinUser(sender, +resultadoresultadoo);
                }
                    break

            case 'trabalhar':
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                minerag = Math.floor((Math.random() * 10) * 150);
                client.sendMessage(from, {image: fs.readFileSync('./funções/rpg/image/trabalhar.jpg'), caption: `

                *Você Trabalhou e ganhou R$${minerag} Reais*

                `},{quoted: info})
                addKoinUser(sender, + minerag)
                break

            case 'pescar':
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                pescando = Math.floor((Math.random() * 10) * 150);
                const lagostas = `${Math.floor(Math.random() * 105)}`
                const caranguejos = `${Math.floor(Math.random() * 105)}`
                const mexilhão = `${Math.floor(Math.random() * 105)}`
                const peixe = `${Math.floor(Math.random() * 105)}`

                client.sendMessage(from, {image: fs.readFileSync('./funções/rpg/image/pescar.jpg'), caption: `
                ┏━── *「️ 🎣️ 𝐏 𝐄 𝐒 𝐂 𝐀 🎣 」*  ─━┓
                │▢ Total de Lagostas: ${lagostas}
                │▢ Total de Caranguejos: ${caranguejos}
                │▢ Total de peixe:${peixe}
                │▢ Total de Mexilhão: ${mexilhão}
                ┗━── *「️ 🎣️ 𝐏 𝐄 𝐒 𝐂 𝐀 🎣 」*  ─━┛



                E GANHOU ${pescando}R$ 😉 🎣 `},{quoted: info})

                addKoinUser(sender, + pescando)

                break

            case 'churrasco': {
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                // Verificar se o arquivo JSON existe, e criar se não existir
                    if (!fs.existsSync('./database/user/cooldown/prenderCooldown.json')) {
                        fs.writeFileSync('prenderCooldown.json', JSON.stringify({}));
                    }
                
                    // Carregar o objeto prenderCooldown do arquivo JSON
                    const prenderCooldown = JSON.parse(fs.readFileSync('./database/user/cooldown/prenderCooldown.json', 'utf8'));
                
                    const currentTimeprender = Date.now();
                    const lastprenderTime = prenderCooldown[sender] || 0;
                    const timeSinceLastprender = currentTimeprender - lastprenderTime;
                    const prenderCooldownTime = 5 * 60 * 1000; // 5 minutos em milissegundos
                
                    if (timeSinceLastprender < prenderCooldownTime) {
                        const remainingTime = (prenderCooldownTime - timeSinceLastprender) / 1000;
                        return reply(`Aguarde ${remainingTime.toFixed(0)} segundos vc estar preso`);
                    }
                    // Verificar se o arquivo JSON existe, e criar se não existir
                    if (!fs.existsSync('./database/user/cooldown/churrascoCooldown.json')) {
                        fs.writeFileSync('./database/user/cooldown/churrascoCooldown.json', JSON.stringify({}));
                    }
                
                    // Carregar o objeto churrascoCooldown do arquivo JSON
                    const churrascoCooldown = JSON.parse(fs.readFileSync('./database/user/cooldown/churrascoCooldown.json', 'utf8'));
                
                    const currentTimeChurrasco = Date.now();
                    const lastChurrascoTime = churrascoCooldown[sender] || 0;
                    const timeSinceLastChurrasco = currentTimeChurrasco - lastChurrascoTime;
                    const churrascoCooldownTime = 5 * 60 * 1000; // 5 minutos em milissegundos
                
                    if (timeSinceLastChurrasco < churrascoCooldownTime) {
                        const remainingTime = (churrascoCooldownTime - timeSinceLastChurrasco) / 1000;
                        return reply(`Aguarde ${remainingTime.toFixed(0)} segundos antes de fazer outro churrasco.`);
                    }
                
                    reply(`*OLÁ [ ${pushname} ] AGUARDE 5 SEGUNDOS*`)
                    await sleep (5000);
                    contrafile = Math.floor((Math.random() * 150) + 50);
                    assinhadefrango = Math.floor((Math.random() * 150) + 30);
                    filebigno = Math.floor((Math.random() * 150) + 40);
                    pikanha = Math.floor((Math.random() * 150) + 50);
                    var resultado1 = contrafile + assinhadefrango + filebigno + pikanha;
                
                    addFilter(from);
                
                    try {
                        picc = await client.profilePictureUrl(from, "image");
                    } catch(e) {
                        picc = 'https://telegra.ph/file/2bf2e198407f9b8bfbcd0.jpg';
                    }
                
                    ds = await getBuffer(picc);
                
                    let thumbInfo = `
                *┏ *「️🍖 𝐂 𝐇 𝐔 𝐑 𝐑 𝐀 𝐒 𝐂 𝐎 🍖」  ┓*
                *│▢ Carne - Picanha Argentina: ${contrafile}*
                *│▢ Carne - Contra Filé: ${assinhadefrango}*
                *│▢ Carne - Asinhas de Frango: ${filebigno}*
                *│▢ Carne - Filé Mignon: ${pikanha}*
                *┗ 「️🍖 𝐂 𝐇 𝐔 𝐑 𝐑 𝐀 𝐒 𝐂 𝐎 🍖」  ┛*
                [㕚] *Foram vendidas hoje por você em nosso açougue: ${resultado1} peças de carne por você. Parabéns!*
                [㕚] *Isso significa que foi adicionado em sua carteira R$${resultado1},00 em coins!*
                `;
                
                    client.sendMessage(from,  {image: ds, caption: `${thumbInfo}`}, {quoted: info});
                    addKoinUser(sender, +resultado1);
                
                    // Atualizar o tempo do último churrasco no arquivo JSON
                    churrascoCooldown[sender] = currentTimeChurrasco;
                    fs.writeFileSync('./database/user/cooldown/churrascoCooldown.json', JSON.stringify(churrascoCooldown));
            }
                    break

            case 'tagrico':{
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                const dinheiro = checkATMuser(sender)
                const checkxpr = checkATMuser(sender, dinheiro) 
                const quantidader = `6000`
                if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR TAG DE RICO*\n\n*PREÇO: ${quantidader}*`)
                var [comprar] = q.split("")
                if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
                tagrico.push(`${sender}`)
                fs.writeFileSync('./database/user/compras/tagrico.json', JSON.stringify(tagrico))
                addKoinUser(sender, - quantidader)
                reply(`*TAG RICO COMPRADO  COM SUCESSO* 💰💲💵\n\n*CUSTO 💰: ${quantidader}*`)
                }
                break

            case 'alugarcasa':
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                if(!JSON.stringify(casa).includes(sender)) return reply(`VOCE NAO TEM UMA CASA USE  ${prefix}casa`)
                casaluge = Math.floor((Math.random() * 10) * 30);
                casapronta = Math.floor((Math.random() * 10) * 500);
                reply(`VOCE ALUGOU A CASA POR ${casaluge} DIAS\n\nVOCE GANHOU  R$${casapronta}`)
                addKoinUser(sender, + casapronta)
                break

            case 'casa':{
                if (!isGroup) return reply(ptbr.grupo(pushname))
                if (!isUser) return reply(ptbr.user(pushname))
                const dinheiro = checkATMuser(sender)
                const checkxpr = checkATMuser(sender, dinheiro) 
                const quantidader = `300000`
                if (checkxpr < quantidader) return reply(`*${pushname} VC NAO TEM DINHEIRO SUFICIENTE PARA COMPRAR CASA*\n\n*PREÇO: ${quantidader}*`)
                var [comprar] = q.split("")
                if(!q.includes("")) return reply(`Cade a espaço mano?\nExemplo: ${prefix + command} comprar`)  
                casa.push(`${sender}`)
                fs.writeFileSync('./database/user/casa/casa.json', JSON.stringify(casa))
                addKoinUser(sender, - quantidader)
                reply(`*CASA COMPRADO COM SUCESSO* 😃\n\n*CUSTO 💰: ${quantidader}*`)
                }
                break

                /////

            case 'Fazernick': case 'fazernick': case 'gerarnick':
                let { styletext } = require('./funções/lib/scraper.js')
                if (!q) return reply("kd o texto?")
                let anu = await styletext(q)
                let text = `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐍𝐈𝐂𝐊𝐒: ${q}\n\n`
                for (let i of anu) {
                    text += `➥ ${i.result}\n\n`
                }
                reply(text)
                break

            case 'getquoted':
            case 'getinfo':
            case 'get':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
                break

            case 'encurtalink':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                if (args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://www.youtube.com/channel/UCgKrNnrbNPJIOjJOgIXe1vQ`)
                try {
                    link = args[0]
                    anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    reply(`${anu.data}`)
                } catch (e) {
                    emror = String(e)
                    reply(`${e}`)
                }
                break

            case 'ddd':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                if (args.length < 1) return reply(`Use ${prefix + command} 21`)
                ddd = body.slice(5)
                ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
                dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
                for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
                client.sendMessage(from, { text: dddlist }, { quoted: info })
                break

            case 'listagp':
                try {
                    if (!isOwner) return reply(ptbr.dono())
                    let getGroups = await client.groupFetchAllParticipating()
                    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                    if (q.includes("-l") || q.includes("--list")) {
                        array_gps = [];
                        for (let a of groups) {
                            try {
                                array_gps.push({
                                    title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
                                    description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}`,
                                    rowId: `${prefix + command} ${a.id}`
                                })
                            } catch { }
                        }
                        buttonmessage02 = {
                            title: `Lista de grupos`,
                            text: `Selecione um grupo para mais detalhes`,
                            buttonText: "Selecionar",
                            sections: [
                                {
                                    rows: array_gps
                                }
                            ]
                        }
                        client.sendMessage(from, buttonmessage02, { quoted: info })
                    } else if (q && args[0].endsWith("g.us")) {
                        try {
                            let infogp = await client.groupMetadata(`${args[0]}`)
                            try {
                                ppUrl = await client.profilePictureUrl(`${args[0]}`, 'image')
                            } catch { ppUrl = "https://telegra.ph/file/41634a68c48c40189dbf7.jpg" }
                            try {
                                linkgc = await client.groupInviteCode(infogp.id)
                                linkgp = 'https://chat.whatsapp.com/' + linkgc
                            } catch { linkgp = "Bot não é admin" }
                            txt =
                                `𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${infogp.subject}
𝗗𝗼𝗻𝗼: ${infogp.owner ? infogp.owner : "Não tem"}
𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${infogp.participants.length}
𝗜𝗱: ${infogp.id}
𝗟𝗶𝗻𝗸: ${linkgp}
`
                            await client.sendMessage(from, { image: { url: ppUrl }, caption: txt, thumbnail: null, mentions: [sender] }, { quoted: info })
                        } catch { }
                    } else {
                        txt = "━━━━━━━━━━━━━━━━━━\n"
                        array_owners = [];
                        for (let a of groups) {
                            txt += `𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${a.subject}
𝗗𝗼𝗻𝗼 / 𝗰𝗿𝗶𝗮𝗱𝗼𝗿: @${a.owner ? a.owner.split("@")[0] : "Não tem"}
𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}
𝗜𝗱: ${a.id}\n━━━━━━━━━━━━━━━━━━\n
`
                            if (a.owner !== undefined) {
                                array_owners.push(`${a.owner}`)
                            }
                        }
                        client.sendMessage(from, { text: txt, mentions: array_owners })
                    }
                } catch {
                    reply("Hmm deu erro")
                }
                break

            case 'banghost':
            case 'banghosts':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isOwner) return reply(ptbr.dono())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (q.length < 1) return reply(`Exemplo: ${prefix}banghosts 0\n\nEle vai banir todos aqueles que tá com 0 mensagens, mas faça isso apenas se passou um tempo com o bot armazenando mensagem dos membros ativos do grupo.`)
                async function banghst() {
                    if (groupIdscount.indexOf(from) >= 0) {
                        for (let obj of groupMembers) {
                            if (numbersIds.indexOf(obj.id) >= 0) {
                                var indnum = numbersIds.indexOf(obj.id)
                                if (countMessage[ind].numbers[indnum].messages <= args[0]) {
                                    if (groupAdmins.includes(obj.id)) return mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
                                    if (numerodono.includes(obj.id)) return mentions(`@${obj.id} ta liberado da inspeção por ser dono`, [obj.id], true)
                                    client.groupParticipantsUpdate(from, [obj.id], 'remove')
                                }
                            }
                        }
                    }
                }
                setInterval(banghst, 1000)
                break

                case 'inativo':  
                    if (!isGroup) return reply(ptbr.grupo())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                    if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
                    await LIMPARDOCNT_QUEMJASAIU()
                    var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
                    blue = []; for (i of countMessage[i2].numbers) {
                    if(i.messages <= q.trim())
                    if(i.figus <= q.trim())
                    if(i.cmd_messages <= q.trim())
                    if(!groupAdmins.includes(i.id))
                    if(!numerodono.includes(i.id))
                    if(i.id != numeroBot)
                    if(groupMembers.map(i => i.id).includes(i.id))
                    blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
                    if(!groupMembers.map(a => a.id == i.id))
                    if(i.id.length > 5)
                    blue.push(i.id)}
                    if(blue.length == 0) return reply(`Não tem pessoas com ${q}  mensagens..`)
                    bli = `Usuários com ${q.trim()} mensagem(ns) pra baixo..\n\n`
                    for (ac = 0; ac < blue.length; ac++) {
                    bli += `${ac +1} - _ Usuário: @${blue[ac].split("@")[0]}\n\n`
                    }
                    mention(bli)
                    break

                case 'atividades': case 'atividade':
                    try{
                    if (!isGroup) return reply(ptbr.grupo())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                    if(isGroup && groupIdscount.indexOf(from) >= 0) {
                    var ind = groupIdscount.indexOf(from)
                    teks = `*Atividade dos membros do grupo:*\n\n`
                    mem = []
                    for(let obj of groupMembers) {
                    if(numbersIds.indexOf(obj.id) >=0) {
                    var indnum = numbersIds.indexOf(obj.id)
                    teks += `*• Membro:* @${countMessage[ind].numbers[indnum].id.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
                    } else {
                    teks += `*• Membro:* @${obj.id.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
                    }
                    mem.push(obj.id)
                    }
                    client.sendMessage(from, {text: teks, contextInfo:{mentionedJid: mem}}, {quoted: info})
                    } else return reply('*Nada foi encontrado*')
                    } catch (e){
                    console.log(e)
                    }
                    break;

                case 'check':
                    if (!isGroup) return reply(ptbr.grupo())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                    if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
                    var ind = groupIdscount.indexOf(from)
                    if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
                    mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
                    if(numbersIds.indexOf(mentioned[0]) >= 0) {
                    var indnum = numbersIds.indexOf(mentioned[0])
                    mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
                    }
                    else {
                    mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
                    }
                    break

            case 'seradm': {
                if (!isOwner) return reply(ptbr.dono())
                reply(`Agora vc é adm do grupo.`)
                kiceed = sender
                client.groupParticipantsUpdate(from, [kiceed], 'promote')
                }
                break

            case 'serpremium': case 'servip': case 'virarpremium':
                if (!isOwner) return reply(ptbr.dono())
                premium.push(`${numeroDono}@s.whatsapp.net`)
                fs.writeFileSync('./database/user/premium/premium.json', JSON.stringify(premium))
                reply(`Pronto ${pushname} você foi adicionado na lista premium.`)
                break

            case 'sermembro': {
                if (!isOwner) return reply(ptbr.dono())
                reply(`Agora vc não é mais adm do grupo.`)
                kicee = sender
                await client.groupParticipantsUpdate(from, [kicee], 'demote')
                }
                break

            case 'donoctt':
                client.sendMessage(from, { displayName: nomeDono, contacts: { contacts: [{ vcard: "BEGIN:VCARD\n" + "VERSION:3.0\n" + "FN:Klaus\n" + "ORG:teste\n" +
                                "TEL;waid=5524999304661:+55 24 99940-4661\n" +
                                "END:VCARD"                  
                }]}})
                await sleep(1000)
                await client.sendMessage(from, {text: `Olá ${pushname}, Esta ai o contato do meu Dono.`}, {quoted: info})
                await delay(2000)
                reagir(from, '✅')
                break
              //  case '000': {
                    if (!isGroup) return reply(ptbr.grupo())
                    if (isOwner) return reply('calma lá né paizão')
                    if (isGroupAdmins) return reply('tá querendo se matar porra?')
                    await client.sendMessage(from, { text: 'Codigo de Auto Destruição Aceito' }, { quoted: info })
                    setTimeout(async function () {
                        client.groupParticipantsUpdate(from, [sender], 'remove')
                    }, 10000)
               // }
                    break
                    
            case 'fotobot':
                if (!isOwner) return reply(ptbr.dono())
                if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
                buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
                await client.updateProfilePicture(botNumber, buff)
                reply('Obrigado pelo novo perfil vlw')
                break

            case 'reviverqr':
                if (!isOwner) return reply(ptbr.dono())
                exec("cd conexão akame.json* && rm -rf pre-key* sender* session*")
                setTimeout(async () => {
                    reply("Reiniciando..")
                    setTimeout(async () => {
                        process.exit()
                    }, 1200)
                }, 1000)
                break

            case 'reiniciar':
                if (!isOwner) return reply(ptbr.dono())
                client.sendMessage(from,{text: `_Ok Reiniciando Isso vai levar alguns segundos..._`}, {quoted: info})
                setTimeout(() => {process.exit(0)}, 3000)
                break

            case 'addpremium':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isOwner) return reply(ptbr.dono())
                if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return
                if (!budy.includes("@55")) {
                    mentioned = info.message.extendedTextMessage.contextInfo.participant
                    bla = premium.includes(mentioned)
                    if (bla) return reply("*Este número já está incluso..*")
                    premium.push(`${mentioned}`)
                    fs.writeFileSync('./database/user/premium/premium.json', JSON.stringify(premium))
                    client.sendMessage(from, { text: `👑@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑` }, { quoted: info })
                } else {
                    mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
                    bla = premium.includes(mentioned)
                    if (bla) return reply("*Este número já está incluso..*")
                    premium.push(`${mentioned}`)
                    fs.writeFileSync('./database/user/premium/premium.json', JSON.stringify(premium))
                    tedtp = args.join(" ").replace("@", "")
                    client.sendMessage(from, { text: `👑@${tedtp} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [mentioned] }, { quoted: info })
                }
                break

            case 'delpremium':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isOwner) return reply(ptbr.dono())
                if (!budy.includes("@55")) {
                    num = info.message.extendedTextMessage.contextInfo.participant
                    bla = premium.includes(num)
                    if (!bla) return reply("*Este número não está incluso na lista premium..*")
                    pesquisar = num
                    processo = premium.indexOf(pesquisar)
                    while (processo >= 0) {
                        premium.splice(processo, 1)
                        processo = premium.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./database/user/premium/premium.json', JSON.stringify(premium))
                    client.sendMessage(from, { text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..` }, { quoted: info })
                } else {
                    mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
                    bla = premium.includes(mentioned)
                    if (!bla) return reply("*Este número não está incluso na lista premium..*")
                    pesquisar = mentioned
                    processo = premium.indexOf(pesquisar)
                    while (processo >= 0) {
                        premium.splice(processo, 1)
                        processo = premium.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./database/user/premium/premium.json', JSON.stringify(premium))
                    client.sendMessage(from, { text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..` }, { quoted: info })
                }
                break

            case 'gerarcpf':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                cp1 = `${Math.floor(Math.random() * 300) + 600}`
                cp2 = `${Math.floor(Math.random() * 300) + 600}`
                cp3 = `${Math.floor(Math.random() * 300) + 600}`
                cp4 = `${Math.floor(Math.random() * 30) + 60}`
                cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
                await client.sendMessage(from, { text: `CPF GERADO COM SUCESSO  ${cpf}` }, { quoted: info })
                break

            case 'listafake':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                teks = '𝗙𝗔𝗞𝗘𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢  \n'
                men = []
                for (let mem of groupMembers) {
                    if (!mem.id.startsWith(55)) {
                        teks += `➤ @${mem.id.split('@')[0]}\n`
                        men.push(mem.id)
                    }
                }
                if (teks.indexOf('➤') < 0) return reply(' 𝗡𝗲𝗻𝗵𝘂𝗺 𝗙𝗮𝗹𝘀𝗼 𝗗𝗲𝘁𝗲𝗰𝘁𝗮𝗱𝗼')
                client.sendMessage(from, { text: teks, mentions: men })
                break

            case 'listabr':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                teks = '𝗕𝗥𝗔𝗦𝗜𝗟𝗘𝗜𝗥𝗢𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢 \n'
                men = []
                for (let mem of groupMembers) {
                    if (mem.id.startsWith(55)) {
                        teks += `➤ @${mem.id.split('@')[0]}\n`
                        men.push(mem.id)
                    }
                }
                if (teks.indexOf('➤') < 0) return reply('*NENHUM NÚMERO BR FOI ENCONTRADO*')
                client.sendMessage(from, { text: teks, mentions: men })
                break

            case 'ddd':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                if (args.length < 1) return reply(`Use ${prefix + command} 21`)
                ddd = body.slice(5)
                ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
                dddlist = `LISTA DE CIDADES ${ddds.data.state} COM ESTE DDD ${q}~\n\n`
                for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
                client.sendMessage(from, { text: dddlist }, { quoted: info })
                break

            case 'encurtalink':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                if (args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://www.youtube.com/channel/UCgKrNnrbNPJIOjJOgIXe1vQ`)
                try {
                    link = args[0]
                    anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    reply(`${anu.data}`)
                } catch (e) {
                    emror = String(e)
                    reply(`${e}`)
                }
             //   await limitAdd(sender)
                break

            case 'google': {
                if (!q) return reply(`Examplo : ${prefix}Google bot de WhatsApp`)
                reply(ptbr.wait())
                let google = require('google-it')
                google({ 'query': q }).then(res => {
                    let teks = `Google Pesquisa \n\n`
                    for (let g of res) {
                        teks += `⭔ *Titulo* : ${g.title}\n`
                        teks += `⭔ *Descrição* : ${g.snippet}\n`
                        teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                    }
                    reply(teks)
                })
            }
                break

            case 'correio':
                {
                    txt = args.join(" ")
                    if (!txt) return reply(`Exemplo: ${prefix + command} +55 00.../Oi amor, sdds`)
                    let txt1 = txt.split("/")[0].replace(/\D/g, '');
                    let txt2 = txt.split("/")[1];
                    if (!txt1) return reply('Cade o número da pessoa?')
                    if (!txt2) return reply('Cade a mensagem do correio??')
                    let [result] = await client.onWhatsApp(txt1)
                    if (!result) return reply(`Número inválido`)
                    bla =
                        `╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧Correio anônimo. 
┞┧Msg: ${txt2}
┞┧
╰┄━┄━┄━┄━┄━╮`
                    client.sendMessage(result.jid, { text: bla })
                    reply(`Mensagem enviada com sucesso para wa.me/${result.jid.split("@")[0]}`)
                }
                break

            case 'metadinha':
            case 'metadinha2':
            case 'metadinha3':
                if (!isGroup) return reply(ptbr.grupo())
                anuu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')

                random = anuu[Math.floor(Math.random() * anuu.length)]
                let buttonssMessssage = {
                    image: { url: random.male },
                    caption: `🥶MASCULINO🥶`,
                    footer: `${nomeBot}`,
                    headerType: 4
                }
                await client.sendMessage(from, buttonssMessssage, { quoted: info }).catch(err => {
                    return ('Error!')
                })
                let buttonssMesssage = {
                    image: { url: random.female },
                    caption: `🌸FEMININO🌸`,
                    footer: `${nomeBot}`,
                    headerType: 4
                }
                await client.sendMessage(from, buttonssMesssage, { quoted: info }).catch(err => {
                    return ('Error!')
                })
                break

                case 'ping': case 'speed': {
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isUser) return reply(ptbr.user())
                    reagir(from, "🏃🏻")
                    await sleep(1000)
                    r = (Date.now() / 1000) - info.messageTimestamp
                    uptime = process.uptime()
                    hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
                    respon = `⏱️ *Velocidade de Resposta:* ${String(r.toFixed(3))} _segundos._\n🤖 *O bot se encontra online por:* ${kyun(uptime)}\n💻 *Sistema Operacional:* ${infoSystem.type()}\n📂 *Versão:* ${infoSystem.release()}\n💾 *Memoria RAM total:* ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n💾 *Memoria RAM disponível:* ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)}GB`.trim()
                    await client.sendMessage(from, { image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, caption: respon, mentions: [sender]}, {quoted: info}) 
                    }
                    break     

            case 'convite':
                if (!q) return reply("cadê o link do grupo?")
                cnvt = args.join(" ")
                reply(`🥳convite enviado com sucesso para meu dono🥳`)
                sendBtext(`${numeroDono}@s.whatsapp.net`, `🌸convite para entra em um grupo🌸\n\nLink do grupo: ${cnvt}\n\nNúmero dele(a) : wa.me/${sender.split("@")[0]}`, `${nomeBot}️`, [
                    { buttonId: `${prefix}entrar ${cnvt}`, buttonText: { displayText: `🔮ACEITA🔮` }, type: 1 },
                    { buttonId: `${prefix}recusar ${sender}`, buttonText: { displayText: `🔮RECUSAR🔮` }, type: 1 }], live)
                break

            case 'recusar':
                if (!isOwner) return reply(ptbr.dono())
                client.sendMessage(q, { text: `Olá,seu convite foi recusado 😪` })
                break

            case 'join': case 'entrar':
                if (!isOwner) return reply(ptbr.dono())
                string = args.join(' ')
                if (!string) return reply('Insira um link de convite ao lado do comando.')
                if (string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.')) {
                    link = string.split('app.com/')[1]
                    try {
                        await client.groupAcceptInvite(`${link}`)
                    } catch (erro) {
                        if (String(erro).includes('resource-limit')) {
                            reply('O grupo já está com o alcance de 257 membros.')
                        }
                        if (String(erro).includes('not-authorized')) {
                            reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
                        }
                    }
                }
                break

            case 'listapremium': case 'premiumlist': case 'listapremium':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                tkks = '╭────*「 *PREMIUM USER👑* 」\n'
                for (let V of premium) {
                    tkks += `│+  @${V.split('@')[0]}\n`
                }
                tkks += `│+ Total : ${premium.length}\n╰──────*「 *${nomeBot}* 」*────`
                reply(tkks.trim())
                break

            case 'casal':
                if (!isGroup) return reply(ptbr.grupo())
                membr = []
                const suamae11 = groupMembers
                const suamae21 = groupMembers
                const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
                const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
                var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`, `13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
                const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
                jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
                membr.push(teupai11.id)
                membr.push(teupai21.id)
                mentions(jet, membr, true)
                break

            case 'leveling':
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                if (args.length < 1) return reply('digite 1 para ativar ou 0 para desativar ')
                if (Number(args[0]) === 1) {
                    if (isLevelingOn) return reply('o level está ativo')
                    levelingOn.push(from)
                    fs.writeFileSync('./database/group/ativadores/nivel.json', JSON.stringify(levelingOn))
                    reply('O level foi ativo no grupo ✔️')
                } else if (Number(args[0]) === 0) {
                    levelingOn.splice(from, 1)
                    fs.writeFileSync('./database/group/ativadores/nivel.json', JSON.stringify(levelingOn))
                    reply('O level foi desativado com sucesso neste grupo✔️')
                } else {
                    reply('1 para ativar, 0 para desativar ')
                }
                break

            case 'anagrama':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
                if (args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
                if (args.join(' ') === '1') {
                    if (fs.existsSync(`./functions/anagrama-${from}.json`)) {
                        let dataAnagrama2 = JSON.parse(fs.readFileSync(`./functions/anagrama-${from}.json`))
                        reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)
                    } else {
                        fs.writeFileSync(`./functions/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)

                        let atr = {
                            image: { url: logo },
                            caption: `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`,
                            lfooter: `${nomeBot}`,
                            buttons: buttons,
                            headerType: 4
                        }


                        client.sendMessage(from, atr)
                    }
                } else if (args.join(' ') === '0') {
                    if (!fs.existsSync(`./functions/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
                    fs.unlinkSync(`./functions/anagrama-${from}.json`)
                    reply("desativado com sucesso")
                }
             //   await limitAdd(sender)
                break

             //   case 'ttc': case 'ttt': case 'tictactoe': {
                    if(!isGroup) reply(ptbr.grupo())
                    if(!isUser) reply(ptbr.user(prefix, pushname, nomeBot))
                    let TicTacToe = require("./lib/tictactoe.js")
                    this.game = this.game ? this.game : {}
                    if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(sender))) reply ('Você ainda está no jogo')
                    let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                    if (room) {
                    reply('Parceiro Encontrado!')
                    room.o = from
                    room.game.playerO = sender
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
                    if (room.x !== room.o) await client.sendMessage(room.x, str, from, { mentions: parseMention(str) } )
                    await client.sendMessage(room.o, str, from, { mentions: parseMention(str) } )
                    } else {
                    room = {
                    id: 'tictactoe-' + (+new Date),
                    x: from,
                    o: '',
                    game: new TicTacToe(sender, 'o'),
                    state: 'WAITING'
                    }
                    if (q) room.name = text
                    reply('Esperando um parceiro' + (q ? ` digite o comando abaixo ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                    }
                 //   }
                    break

             //   case 'delttc': case 'delttt': {
                    if(!isGroup) return reply(ptbr.grupo())
                    if(!isUser) return reply(ptbr.user(prefix, pushname, nomeBot))
                    this.game = this.game ? this.game : {}
                    try {
                    if (this.game) {
                    delete this.game
                    client.sendMessage(from, `Excluiu sessão de TTT com sucesso`, m)
                    } else if (!this.game) {
                    reply(`Sessão de TTT não existe`)
                    } else throw '?'
                    } catch (e) {
                    reply('danificado')
                    }
                 //   }
                    break

            case 'level':
                if (!isLevelingOn) return reply(ptbr.levelnoton(pushname))
                reply(`
Ola ${pushname} aqui estão suas informações

Patente: ${role}
Level: ${getLevel}
porcentagem: ${per}
`)
                break




            case 'perfil':
                try {
                    ppimg = await client.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
                } catch (e) {
                    ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
                }
                var conselho = palavras[Math.floor(Math.random() * palavras.length)]
                const nivelgado = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                const nivelgado2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
                const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))]
                const gostosura = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                const gostosura2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
                const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))]
                const programa = Math.ceil(Math.random() * 10000)
                perfil = await getBuffer(ppimg)
                reply(ptbr.wait())
                try {
                    client.sendMessage(from, {
                        image: perfil,
                        caption: `「 🔥 ~_*PERFIL*_~ 🌈 」

📄 *Nome* : ${pushname}
🐂 *Número* : ${sender.split("@")[0]}
🔮 *Wa.me* : https://wa.me/${sender.split("@")[0]}
🌂 *Grupo*: ${groupName}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}`
                    }, { quoted: live })
                } catch (e) {
                    console.log("erro")
                    reply(resposta.erro)
                }
                break

            case 'report':
            case 'bug':
                if (!q) return enviar('Ex: bug no menu adm..')
                reply(`Obrigada pela colaboração, o bug foi reportado aos meus criadores...
💦🍷bugs falsos nao serão respondidos`)
                let templateMesssage = {
                    image: {
                        url: imagemdomenu,
                        quoted: live
                    },
                    caption: `💦️𝗨𝗺 𝗕𝘂𝗴️💦\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
                    footer: 'Noelle_md'
                }
                client.sendMessage(`${numeroDono}@s.whatsapp.net`, templateMesssage)
                break
            case 'novocmd':
                if (!q) return enviar('Ex: novocmd coloca antilink')
                reply(`Obrigada pela colaboração, a sua idea foi reportada aos meus criadores 😊`)
                const qp = args.join(" ")
                let templateMessage = {
                    image: {
                        url: imagemdomenu,
                        quoted: live
                    },
                    caption: `💦IDEIA DE CMD♨💦\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
                    footer: 'Noelle_md'
                }
                client.sendMessage(`${numeroDono}@s.whatsapp.net`, templateMessage)
                break

            case 'ban':
            case 'kick':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin())

                const frases = JSON.parse(fs.readFileSync('./functions/frases.json'))
                const clover = frases[Math.floor(Math.random() * frases.length)]

                if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('𝙢𝙖𝙧𝙦𝙪𝙚 𝙖 𝙢𝙚𝙣𝙨𝙖𝙜𝙚𝙢 𝙤𝙪 𝙖 𝙥𝙚𝙨𝙨𝙤𝙖 𝙦𝙪𝙚 𝙫𝙘 𝙙𝙚𝙨𝙚𝙟𝙖 𝙧𝙚𝙢𝙤𝙫𝙚𝙧 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤')
                if (info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
                    mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
                    if (sender.includes(mentioned)) return reply("😑")
                    if (botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né, mas estou decepcionado com você')
                    let responseb = await client.groupParticipantsUpdate(from, [mentioned], 'remove')
                    if (responseb[0].status === "200") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} ${clover}`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                    else if (responseb[0].status === "406") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                    else if (responseb[0].status === "404") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                    else client.ontextInfoe(from, { text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                } else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
                    mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
                    if (mentioned.includes(sender)) return reply("😑")
                    if (mentioned.length > 1) {
                        if (mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai banir todo mundo mesmo?`)
                        sexocomrato = 0
                        for (let banned of mentioned) {
                            await sleep(100)
                            let responseb2 = await client.groupParticipantsUpdate(from, [banned], 'remove')
                            if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
                        }
                        client.sendMessage(from, { text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                    } else {
                        let responseb3 = await client.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
                        if (responseb3[0].status === "200") client.sendMessage(from, { text: `@${mentioned[0].split("@")[0]} ${clover}`, mentions: [mentioned[0], sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                        else if (responseb3[0].status === "406") client.sendMessage(from, { text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                        else if (responseb3[0].status === "404") client.sendMessage(from, { text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                        else client.sendMessage(from, { text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                    }
                }
                break
                case 'add': {
                    if(!isGroup) return reply(ptbr.grupo())
                    if (!isBotGroupAdmins) return reply(ptbr.Botadmin())
                    if (!isAdmins) return reply(ptbr.admin())
                   let users = quoted ? quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                   await client.groupParticipantsUpdate(from, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
               break
            case 'ia':
                try {
                    let openai = await ia(q)
                    let response = openai[0].resposta
                    delay(1000)
                    enviar(response)
                } catch (e) {
                    console.log(e)
                    reply('Erro')
                }
                break

            case 'tiktok':
                if (!q.includes("tiktok")) return reply(`Ops, insira o link, só baixo vídeos / audios do ${command} com link`)
                sendBtext(from, "𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐃𝐞 𝐕𝐢́𝐝𝐞𝐨 / 𝐀𝐮𝐝𝐢𝐨 [ 𝐓𝐈𝐊𝐓𝐎𝐊 ]\n𝐄𝐬𝐜𝐨𝐥𝐡𝐚 𝐮𝐦𝐚 𝐝𝐚𝐬 𝐨𝐩𝐜̧𝐨̃𝐞𝐬 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚", `✨`, [
                    { buttonId: `${prefix}ttk ${q}`, buttonText: { displayText: `𝐀𝐔𝐃𝐈𝐎` }, type: 100 },
                    { buttonId: `${prefix}ttk2 ${q}`, buttonText: { displayText: `𝐕𝐈𝐃𝐄𝐎` }, type: 100 }
                ], live)
                break;


            case "ppt":
                if (!isGroup) return reply(ptbr.grupo())
                if (args.length < 1) return reply('exemplo: /ppt pedra')
                ppt = ["pedra", "papel", "tesoura"]
                ppy = ppt[Math.floor(Math.random() * ppt.length)]
                ppg = Math.floor(Math.random() * 50)
                pptb = ppy
                pph = `Você ganhou ${ppg} em money`
                if ((pptb == "pedra" && args == "papel") ||
                    (pptb == "papel" && args == "tesoura") ||
                    (pptb == "tesoura" && args == "pedra")) {
                    var vit = "vitoria"
                } else if ((pptb == "pedra" && args == "tesoura") ||
                    (pptb == "papel" && args == "pedra") ||
                    (pptb == "tesoura" && args == "papel")) {
                    var vit = "derrota"
                } else if ((pptb == "pedra" && args == "pedra") ||
                    (pptb == "papel" && args == "papel") ||
                    (pptb == "tesoura" && args == "tesoura")) {
                    var vit = "empate"
                } else if (vit = "undefined") {
                    return reply("deu erro...")
                }
                if (vit == "vitoria") {
                    var tes = "Vitória do jogador"
                }
                if (vit == "derrota") {
                    var tes = "A vitória é do bot"
                }
                if (vit == "empate") {
                    var tes = "O jogo terminou em empate"
                }
                reply(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
                if (tes == "Vitória do jogador") {
                    reply(pph)
                }
                break

            case 'gpwhatsapp':
            case 'gruposwhats':
            case 'gruposwa':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                if (!q) return reply("Cadê o título da pesquisa?")
                axios.get(`https://marcos025.onrender.com/api/pesquisa/gpwhatsapp?nome=${q}&apikey=XANAX-VNCS$`)
                    .then(e => {
                        try {
                            d = e.data;
                            txt = '';
                            no = 0;
                            for (let i of d) {
                                no += 1;
                                txt += `✓ 🏷 𝘕𝘰𝘮𝘦⧽ ${i.nome}\n× 🈹 𝘋𝘦𝘴𝘤𝘳𝘪𝘤̧𝘢̃𝘰⧽ ${i.descrição}\n× 🔗 𝘓𝘪𝘯𝘬⧽ ${i.link}\n\n`;
                            }
                            client.sendMessage(from, { image: { url: `${logo}` }, caption: txt })
                        } catch (err) {
                            reply(`Nenhum resultado foi encontrado.`)
                        }
                    }).catch(err => {
                        reply('Ops, eu acho que a api ou módulo caiu!')
                        console.log(err);
                    });
                break

            case "jokenpo":
                if (!isGroup) return reply(ptbr.admin());
                if (args.length < 1) return reply(`Exemplo: ${prefix}jokenpo pedra`);

                const opptions = ["pedra", "papel", "tesoura"];
                const botChoice = opptions[Math.floor(Math.random() * opptions.length)];
                const userChoice = args[0].toLowerCase();

                let resuult;
                let reward = 0;

                if (!opptions.includes(userChoice)) {
                    resuult = "Opção inválida, escolha entre pedra, papel ou tesoura.";
                } else if (botChoice === userChoice) {
                    resuult = "Empate!";
                } else if (
                    (botChoice === "pedra" && userChoice === "tesoura") ||
                    (botChoice === "papel" && userChoice === "pedra") ||
                    (botChoice === "tesoura" && userChoice === "papel")
                ) {
                    resuult = "Você perdeu!";
                } else {
                    resuult = "Você ganhou!";
                    reward = Math.floor(Math.random() * 50);
                }

                let message = `O bot escolheu: ${botChoice}\nVocê escolheu: ${userChoice}\n\n${resuult}`;

                if (reward > 0) {
                    message += `\n\nParabéns! Você ganhou 🥳💥🌸️`;
                    // Aqui você pode adicionar sua lógica para dar a recompensa ao usuário.
                }
                reply(message);
                break

            case "adivinhação":
                if (!isGroup) return reply(ptbr.grupo())
                if (args.length < 1) return reply(`Exemplo: ${prefix} adivinhacao 50`)
                const num = Math.floor(Math.random() * 100) + 1
                const guess = parseInt(args[0])
                if (isNaN(guess)) return reply('Digite um número válido.')
                if (guess < 1 || guess > 100) return reply('O número deve estar entre 1 e 100.')
                if (guess === num) {
                    const premio = Math.floor(Math.random() * 50) + 1
                    reply(`Parabéns, você acertou! O número era ${num}.\nVocê ganhou ${premio} em dinheiro.`)
                } else {
                    reply(`Que pena, você errou. O número era ${num}. Tente novamente.`)
                }
                break

            case 'avalie':
                if (!q) return enviar(`Ex: ${prefix} avaliação bot muito top..`)
                reply(`Avaliacão enviada com sucesso.`)
                let templateMeesssage = {
                    image: {
                        url: imagemdomenu,
                        quoted: live
                    },
                    caption: `*💦️Avaliação💦*\nDo Número: @${sender.split('@')[0]},\nAvaliacão:\n${q}`,
                    footer: 'Noelle_md'
                }
                client.sendMessage(`${numeroDono}@s.whatsapp.net`, templateMeesssage)
                break

            case 'gtts':
                if (!isGroup) return reply(ptbr.grupo())
                if (args.length < 1) return reply(`Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`)
                const gtts = require('./functions/funções/gtts.js')(args[0])
                if (args.length < 2) return reply('Falta colocar o código do idioma!')
                dtt = body.slice(8)
                ranm = getRandom('.mp3')
                rano = getRandom('.ogg')
                if (dtt.length > 4000) return reply('Para reduzir spam o máximo de letras permitidas são 4000!')
                gtts.save(ranm, dtt, function () {
                    exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                        fs.unlinkSync(ranm)
                        buffer = fs.readFileSync(rano)
                        client.sendMessage(from, { audio: buffer, ptt: true }, { quoted: live })
                        fs.unlinkSync(rano)
                    })
                })
                break

            case 'calcular':
                const resultzx = eval(q)
                await sleep(1000)
                reply(`${resultzx}`)
                break

            case 'ranklevel':
            case 'rl':
            case 'rank':
                nivel.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `
┏ ✘🌖 ${nomeBot} 🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${nivel[i].id.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ${nivel[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${nivel[i].level}
┗ ──────「★」──────┚\n`

                    }
                    leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
                    client.sendMessage(from, { text: leaderboardlvl, sendEphemeral: true }, { quoted: live })
                } catch (err) {
                    console.error(err)
                    await reply(`Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
                }
                break

            case 'clima':
            case 'tempo':
                client.sendMessage(from, { react: { text: `📡`, key: info.key } })
                if (args.length < 1) return reply(`*Sintaxe correta para uso:* ${prefix + command} nome da cidade\n• Caso tenha algum acento, retire ok?`)
                cidade = body.slice(7)
                clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=f5c0840c2457fbb64188a6d4be05618f&units=metric&lang=pt_br`)
                if (clima.error) return reply(resposta.erro)
                jr = `🌞 Temperatura agora: ${clima.data.main.temp}ºC
🏙️ Cidade: ${clima.data.name}
🔥 Temperatura Máxima: ${clima.data.main.temp_max}°C
❄ Temperatura Mínima: ${clima.data.main.temp_min}°C
🌦 Clima: ${clima.data.weather[0].description}
💧 Umidade de ar: ${clima.data.main.humidity}% 
🌫 Ventos: ${clima.data.wind.speed}  

Solicitado por: ${pushname}`
                await client.sendMessage(from, { text: jr }, { quoted: info, contextInfo: { "mentionedJid": jr } })
                break


            case 'bangp':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isOwner) return reply(ptbr.dono())
                if (isBanchat) return reply(`Este grupo ja está banido`)
                bancht.push(from)
                fs.writeFileSync('./functions/banchat.json', JSON.stringify(bancht))
                reply(`Grupo banido com sucesso`)
                break

            case 'unbangp':
                if (!isGroup) return reply(ptbr.grupo())
                if (!isOwner) return reply(ptbr.dono())
                let cur = bancht.indexOf(from)
                bancht.splice(cur, 1)
                fs.writeFileSync('./functions/banchat.json', JSON.stringify(bancht))
                reply(`Grupo desbanido com sucesso...`)
                break

            case "limpar": case "clear":
                if (!isGroup) return reply(ptbr.grupo())
                if (!isGroupAdmins) return reply('comando apenas para admins')
                reply(`L I M P A N D U 😎🤙\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ${nomeBot}`)
                break

            case 'wallpaperanime':
                if (!isPremium) return reply(ptbr.premium(prefix, pushname))
                {
                    json = JSON.parse(fs.readFileSync('./functions/fotos/wall.json').toString())
                    random = json[Math.floor(Math.random() * json.length)]
                    let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🌸️PROXIMO🌸️'}, type: 1},
                ]
                    templateMassage = {
                        image: {
                            url: random,
                            quoted: live
                        },
                        caption: `${command}`,
                        footer: `${nomeBot}`,
                    }
                    client.sendMessage(from, templateMassage)
                }
                break

            case 'deletar': case 'delete': case 'del':  case 'd': case 'apagar':
                if(!isGroupAdmins) return reply(ptbr.admin(pushname))
                if (!isBotGroupAdmins) return reply(ptbr.Botadmin(pushname, nomebot))
                if (!isUser) return reply(ptbr.user(pushname))
                if(!menc_prt) return reply("❕Marque a mensagem do usuário que deseja apagar...")
                client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
                await sleep(1000)
                reagir(from, "🧯")
                break

            case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
                if (!isOwner) return reply(ptbr.dono())
                if (!q) return reply(`Texto onde?\n\nExemplo : ${prefix + command} BOM DIA `)
                let getGroups = await client.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                for (let i of anu) {
                    await sleep(150)
                    let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
                    client.sendMessage(i, { text: txt })
                }
                reply(ptbr.sucesso())
            }
                break

            case "arma": {
                bancoDeDados = {
                    "M1887": {
                        "nome": "M1887",
                        "descrição": "Uma espingarda de cano duplo que inflige danos massivos em curta distância.",
                        "dano": "Alto",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 2
                    },
                    "AK47": {
                        "nome": "AK47",
                        "descrição": "Rifle de assalto de alta potência com alta taxa de disparo e precisão moderada.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Alta",
                        "capacidade_do_pente": 30
                    },
                    "AWM": {
                        "nome": "AWM",
                        "descrição": "Rifle de precisão capaz de derrubar inimigos com um único tiro.",
                        "dano": "Extremo",
                        "alcance": "Longo",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 5
                    },
                    "Groza": {
                        "nome": "Groza",
                        "descrição": "Rifle de assalto altamente poderoso com uma taxa de disparo e precisão excepcionais.",
                        "dano": "Alto",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Muito alta",
                        "capacidade_do_pente": 30
                    },
                    "UMP45": {
                        "nome": "UMP45",
                        "descrição": "Submetralhadora de alta cadência de tiro, equilibrada em termos de dano e controle de recuo.",
                        "dano": "Moderado",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Alta",
                        "capacidade_do_pente": 25
                    },
                    "M1014": {
                        "nome": "M1014",
                        "descrição": "Uma espingarda de combate próxima com uma taxa de disparo e dano impressionantes.",
                        "dano": "Muito alto",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 6
                    },
                    "M60": {
                        "nome": "M60",
                        "descrição": "Metralhadora com alto poder de fogo, ideal para suprimir inimigos e combates a média distância.",
                        "dano": "Alto",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 60
                    },
                    "XM8": {
                        "nome": "XM8",
                        "descrição": "Rifle de assalto de alta eficiência, com ótimo equilíbrio entre dano, alcance e taxa de disparo.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Alta",
                        "capacidade_do_pente": 30
                    },
                    "SCAR": {
                        "nome": "SCAR",
                        "descrição": "Rifle de assalto confiável, com boa precisão e controle de recuo.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Média",
                        "capacidade_do_pente": 30
                    },
                    "M4A1": {
                        "nome": "M4A1",
                        "descrição": "Rifle de assalto versátil e equilibrado, adequado para várias situações de combate.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Média",
                        "capacidade_do_pente": 30
                    },
                    "SVD": {
                        "nome": "SVD",
                        "descrição": "Rifle de precisão semi-automático, com ótimo alcance e dano significativo.",
                        "dano": "Alto",
                        "alcance": "Longo",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 10
                    },
                    "MP5": {
                        "nome": "MP5",
                        "descrição": "Submetralhadora compacta e precisa, adequada para combates em espaços confinados.",
                        "dano": "Moderado",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Alta",
                        "capacidade_do_pente": 30
                    },
                    "SPAS12": {
                        "nome": "SPAS12",
                        "descrição": "Uma espingarda de ação por bombeamento, eficaz a curta distância com alto dano.",
                        "dano": "Alto",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 6
                    },
                    "KAR98K": {
                        "nome": "KAR98K",
                        "descrição": "Rifle de precisão de ação por ferrolho, com excelente precisão e dano letal.",
                        "dano": "Extremo",
                        "alcance": "Longo",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 5
                    },
                    "M249": {
                        "nome": "M249",
                        "descrição": "Metralhadora leve com grande capacidade de munição, ideal para controle de área.",
                        "dano": "Alto",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 100
                    },
                    "Thompson": {
                        "nome": "Thompson",
                        "descrição": "Submetralhadora clássica de alta cadência de tiro e bom controle de recuo.",
                        "dano": "Moderado",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Alta",
                        "capacidade_do_pente": 30
                    },
                    "VSS": {
                        "nome": "VSS",
                        "descrição": "Rifle de assalto silencioso com escopo integrado e baixo recuo.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Média",
                        "capacidade_do_pente": 15
                    },
                    "MP40": {
                        "nome": "MP40",
                        "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                        "dano": "Moderado",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Muito alta",
                        "capacidade_do_pente": 30
                    },
                    "AUG": {
                        "nome": "AUG",
                        "descrição": "Rifle de assalto com excelente precisão, alcance e taxa de disparo.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Alta",
                        "capacidade_do_pente": 30
                    },
                    "G18": {
                        "nome": "G18",
                        "descrição": "Pistola automática com alta taxa de disparo, ideal para combate próximo.",
                        "dano": "Moderado",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Muito alta",
                        "capacidade_do_pente": 20
                    },
                    "P90": {
                        "nome": "P90",
                        "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                        "dano": "Moderado",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Muito alta",
                        "capacidade_do_pente": 50
                    },
                    "Desert Eagle": {
                        "nome": "Desert Eagle",
                        "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                        "dano": "Alto",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Média",
                        "capacidade_do_pente": 7
                    },
                    "Vector": {
                        "nome": "Vector",
                        "descrição": "Submetralhadora compacta com alta cadência de tiro e boa precisão.",
                        "dano": "Moderado",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Muito alta",
                        "capacidade_do_pente": 30
                    },
                    "M14": {
                        "nome": "M14",
                        "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                        "dano": "Alto",
                        "alcance": "Longo",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 10
                    },
                    "CG15": {
                        "nome": "CG15",
                        "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 1
                    },
                    "USP": {
                        "nome": "USP",
                        "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Média",
                        "capacidade_do_pente": 12
                    },
                    "M1873": {
                        "nome": "M1873",
                        "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                        "dano": "Alto",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 2
                    },
                    "AN94": {
                        "nome": "AN94",
                        "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Alta",
                        "capacidade_do_pente": 30
                    },
                    "M79": {
                        "nome": "M79",
                        "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                        "dano": "Extremo",
                        "alcance": "Longo",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 1
                    },
                    "M14": {
                        "nome": "M14",
                        "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                        "dano": "Alto",
                        "alcance": "Longo",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 10
                    },
                    "CG15": {
                        "nome": "CG15",
                        "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 1
                    },
                    "USP": {
                        "nome": "USP",
                        "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Média",
                        "capacidade_do_pente": 12
                    },
                    "M1873": {
                        "nome": "M1873",
                        "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                        "dano": "Alto",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 2
                    },
                    "AN94": {
                        "nome": "AN94",
                        "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Alta",
                        "capacidade_do_pente": 30
                    },
                    "M79": {
                        "nome": "M79",
                        "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                        "dano": "Extremo",
                        "alcance": "Longo",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 1
                    },
                    "M82B": {
                        "nome": "M82B",
                        "descrição": "Rifle de precisão de ação por ferrolho com alto dano e capacidade de penetração.",
                        "dano": "Extremo",
                        "alcance": "Longo",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 5
                    },
                    "P90": {
                        "nome": "P90",
                        "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                        "dano": "Moderado",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Muito alta",
                        "capacidade_do_pente": 50
                    },
                    "Desert Eagle": {
                        "nome": "Desert Eagle",
                        "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                        "dano": "Alto",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Média",
                        "capacidade_do_pente": 7
                    },
                    "M1887": {
                        "nome": "M1887",
                        "descrição": "Espingarda de ação por ferrolho com alto dano em combates de curta distância.",
                        "dano": "Extremo",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 2
                    },
                    "XM8": {
                        "nome": "XM8",
                        "descrição": "Rifle de assalto com boa precisão e cadência de tiro.",
                        "dano": "Moderado",
                        "alcance": "Médio",
                        "taxa_de_disparo": "Média",
                        "capacidade_do_pente": 30
                    },
                    "KAR98K": {
                        "nome": "KAR98K",
                        "descrição": "Rifle de precisão de ação por ferrolho com alto dano e precisão.",
                        "dano": "Extremo",
                        "alcance": "Longo",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 5
                    },
                    "M79": {
                        "nome": "M79",
                        "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                        "dano": "Extremo",
                        "alcance": "Longo",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 1
                    },
                    "MP40": {
                        "nome": "MP40",
                        "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                        "dano": "Moderado",
                        "alcance": "Curto",
                        "taxa_de_disparo": "Muito alta",
                        "capacidade_do_pente": 30
                    },
                    "M14": {
                        "nome": "M14",
                        "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                        "dano": "Alto",
                        "alcance": "Longo",
                        "taxa_de_disparo": "Baixa",
                        "capacidade_do_pente": 10
                    }
                }


                const armaPesquisada = args.join(" "); // Substitua pelo valor desejado
                let resultado = null;

                for (const arma in bancoDeDados) {
                    if (arma.toLowerCase() === armaPesquisada.toLowerCase()) {
                        resultado = bancoDeDados[arma];
                        break;
                    }
                }

                if (resultado) {
                    reply(`*${resultado.nome}*\n*${resultado.descrição}*\n\n*Dano: ${resultado.dano}*\n\n*Alcance: ${resultado.alcance}*\n\n*Taxa de Disparo: ${resultado.taxa_de_disparo}*\n\n*Capacidade do Pente: ${resultado.capacidade_do_pente}*`);
                } else {
                    reply('Erro: Arma não encontrada no banco de dados.');
                }
            } break


            default:
                if (isCmd && command) {
                    const buttonMessage = { text: `comando inexistente...` }
                    client.sendMessage(from, { react: { text: `❌️`, key: info.key } })
                }

        }

    } catch (e) {
        console.log(e)
    }
}