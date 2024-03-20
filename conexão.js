const { match } = require('assert');
const { clear } = require('console');
const { connected } = require('process');
try {

    const { default: makeWASocket, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys');
    const mimetype = require("mime-types")
    const fs = require('fs');
    const P = require('pino');
    const chalk = require('chalk')
    const moment = require('moment-timezone')
    const clc = require('cli-color')
    const NodeCache = require('node-cache');
    const cheerio = require("cheerio");
    const readline = require("readline");
    const axios = require('axios');
    const ffmpeg = require('fluent-ffmpeg');
    let bancht = JSON.parse(fs.readFileSync('./functions/banchat.json'));
    const infoBot = JSON.parse(fs.readFileSync('./config/config.json'));
    const imagemdomenu = "https://telegra.ph/file/41e27ca006bb7488f155d.png"
    const { palavras } = require('./functions/conselhos.js');
    const { fromBuffer } = require("file-type");
    const bye_group2 = JSON.parse(fs.readFileSync('./functions/byegp.json'));
    const { insert, response } = require('./functions/simi.js');
    const premium = JSON.parse(fs.readFileSync('./database/user/premium/premium.json'));
    const antidoc = JSON.parse(fs.readFileSync('./database/group/ativadores/antidoc.json'))
    const antiimg = JSON.parse(fs.readFileSync('./database/group/ativadores/antiimg.json'))
    const lista = JSON.parse(fs.readFileSync('./functions/lista.json'))
    const sotoy = JSON.parse(fs.readFileSync('./functions/sotoy.json'))
    const antiaudio = JSON.parse(fs.readFileSync('./database/group/ativadores/antiaudio.json'))
    const antisticker = JSON.parse(fs.readFileSync('./database/group/ativadores/antisticker.json'))
    const antivid = JSON.parse(fs.readFileSync('./database/group/ativadores/antivideo.json'))
    const autoreact = JSON.parse(fs.readFileSync('./database/group/ativadores/autoreact.json'))
    const antifake = JSON.parse(fs.readFileSync('./database/group/ativadores/antifake.json'))
    const { menu, menuadm, menudono, menuanime, wallpaper, menurpg, lojarpg, downloader, modificadores } = require('./menus/menu.js')
    const { runtime } = require("./functions/myfunc.js")
    const { convertSticker } = require("./functions/swm.js");
    const { isUrl } = require("./functions/lib/myfunc.js")
    const { EmojiAPI } = require("emoji-api")
    const autofigu = JSON.parse(fs.readFileSync('./database/group/ativadores/autofigu.json'))
    let autosticker = JSON.parse(fs.readFileSync('./database/group/ativadores/autosticker.json'));
    const { menuprem } = require("./functions/menuprem.js")
    const { palavrasANA, quizanime, quizanimais } = require('./functions/jogos.js');
    const { exec, spawn, execSync } = require("child_process")
    const speed = require("performance-now");
    const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) }
    const { getBuffer, getRandom, getExtension } = require('./functions/lib/functions.js');
    const { fetchJson } = require("./functions/lib/fetcher.js")
    const { validmove, setGame } = require('./functions/tictactoe/index.js');
    const { TextoDoBemvindo } = require("./info/TextoDoBemvindo.js")
    const { TextoDoSaiu } = require("./info/TextoDoBemvindo.js")
    const { Error } = JSON.parse(fs.readFileSync('./functions/Erro.json'))
    

    var prefix = infoBot.prefix //prefixo 
    var nomeBot = infoBot.nomeBot// nome do bot 
    var NomeBot = infoBot.nomeBot// nome do bot 
    var nomeDono = infoBot.nomeDono// nome do dono 
    var numeroDono = infoBot.owner
    var NomeDoBot = nomeBot
    const groupIdWelcomed = []
    const welcome_group = JSON.parse(fs.readFileSync('./functions/welcomegp.json'));
    const antipv = JSON.parse(fs.readFileSync('./database/group/ativadores/antipv.json'))
    const antilinkgp = JSON.parse(fs.readFileSync('./database/group/ativadores/antilinkgp.json'))
    const progp = JSON.parse(fs.readFileSync('./functions/pro.json'))
    const welkom = JSON.parse(fs.readFileSync('./database/group/ativadores/welkom.json'));
    const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
    const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
    const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
    const welkom2 = JSON.parse(fs.readFileSync('./database/group/ativadores/welkom.json'));
    const welcome_group2 = JSON.parse(fs.readFileSync('./functions/welcomegp.json'));

    function DLT_FL(file) {
        try {
            fs.unlinkSync(file);
        } catch (error) {
            return;
        }
    }


    const color = (text, color) => {
        return !color ? chalk.green(text) : chalk.keyword(color)(text)
    }
    const cfonts = require('cfonts')
    const banner = cfonts.render(('Lady|BOT'),
        {
            font: "block",
            align: "center",
            gradient: ["red", "blue"]
        })


    const usePairingCode = process.argv.includes('--use-pairing-code')
    const msgRetryCounterCache = new NodeCache();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    async function starts() {

        const { state, saveCreds } = await useMultiFileAuthState('./WhatsApp-Conexao')
        const { version } = await fetchLatestBaileysVersion();
        const question = (text) => new Promise((resolve) => rl.question(text, resolve));
        const store = makeInMemoryStore({
            logger: P().child({
                level: 'debug',
                stream: 'store'
            })
        })


        const client = makeWASocket({
            version,
            logger: P({ level: "silent" }),
            usePairingCode,
            mobile: false,
            browser: ["FireFox (linux)"],
            auth: state,
            msgRetryCounterCache,
            defaultQueryTimeoutMs: undefined,
            getMessage: async (key) => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id)
                    return msg.message || undefined
                } return {
                    conversation: "bot"
                }
            },
            patchMessageBeforeSending: (message) => {
                const requiresPatch = !!(message.buttonsMessage || message.listMessage);
                if (requiresPatch) {
                    message = {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadataVersion: 2,
                                    deviceListMetadata: {},
                                }, ...message
                            }
                        }
                    }
                }
                return message;
            }
        });

        function limparNumero(entrada) {
            const numeros = entrada.replace(/\D/g, '');
            const numeroLimpo = numeros.replace(/^(\d{2})(9)?(\d{8,9})$/, '$1$3');
            return numeroLimpo;
        }

        if (!client.authState.creds.registered) {
            const phoneNumber = await question(`\nDigite seu número do WhatsApp:\nEx: ("+55 75 9865-6060")\n `);
            const numeroLimpo = limparNumero(phoneNumber);
            const code = await client.requestPairingCode(numeroLimpo);
            console.log(`Seu código de conexão é: \n\n${code}\n~>`);
            console.log(`Abra seu WhatsApp, vá em ("Aparelhos Conectados > Conectar um novo Aparelho > Conectar usando Número.")`)
        } else {
            console.log('connected...')
        }

        console.log('[ NekoBot V4 Online ]')
        store.bind(client.ev)

        client.ev.on("creds.update", saveCreds)
        store.bind(client.ev)
        client.ev.on("chats.set", () => {
            console.log("Tem conversas", store.chats.all())
        })
        client.ev.on("contacts.set", () => {
            console.log("Tem contatos", Object.values(store.contacts))
        })

        client.ev.on("connection.update", (update) => {
            const { connection, lastDisconnect } = update
            if (connection === "close") {
                const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
                console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
                if (shouldReconnect) {
                    starts()
                }

            } else if (connection === "open") {
                console.log(chalk.keyword("red")("Conectado com sucesso!"));
            }
        })
        async function getMessage(key) {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg?.message
            }
            return {
                conversation: "aaa"
            }
        }
        const cliente = client
        client.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return client.sendMessage(jid, { poll: { name, values, selectableCount } }) }
        const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
        const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
        const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

        client.ev.on('messages.update', async chatUpdate => {
            const info = chatUpdate[0];
            const pushname = info.pushName ? info.pushName : ''
            const origem = info.key.remoteJid;
            const from = origem;

            for (const { key, update } of chatUpdate) {
                if (update && update.pollUpdates && key.fromMe) {
                    const pollCreation = await getMessage(key)
                    if (pollCreation) {
                        const pollUpdate = await getAggregateVotesInPollMessage({
                            message: pollCreation,
                            pollUpdates: update.pollUpdates,
                        })
                        var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
                        console.log(toCmd)
                        if (toCmd == undefined) return
                        var prefCmd = prefix + toCmd
                        const enviar = (texto) => {
                            return client.sendMessage(origem, { text: texto });
                        };
                        const reply = enviar;
                        //console.log(prefCmd)
                        //======\\
                        switch (prefCmd) {

                            case prefix + "teste":
                                client.sendMessage(origem, { text: 'deu certo' }, { quoted: null })
                                break

                            case prefix + "menu": {
                                //case "menu":{
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
                                client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                                client.sendMessage(from, {
                                    image: fotomenus,
                                    caption: menu(prefix, nomeBot, pushname)
                                })
                            } break

                            case prefix + "adms": {
                                //case "menuadm":{
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
                                client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                                client.sendMessage(from, {
                                    image: fotomenus,
                                    caption: menuadm(prefix, nomeBot, pushname)
                                })
                            } break

                            case prefix + "anime": {
                                //case "menuanime":{
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
                                client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                                client.sendMessage(from, {
                                    image: fotomenus,
                                    caption: menuanime(prefix, nomeBot, pushname)
                                })
                            } break

                            case prefix + "rpg": {
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
                                client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                                client.sendMessage(from, {
                                    image: fotomenus,
                                    caption: menurpg(prefix, pushname, nomeBot)
                                })
                            } break

                            case prefix + "loja rpg": {
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
                                client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                                client.sendMessage(from, {
                                    image: fotomenus,
                                    caption: lojarpg(prefix, pushname, nomeBot)
                                })
                            } break

                            case prefix + "downloader": {
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
                                client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                                client.sendMessage(from, {
                                    image: fotomenus,
                                    caption: downloader(prefix, pushname, nomeBot)
                                })
                            } break

                            case prefix + "dono":
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

                            case prefix + "modificadores": {
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
                                client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                                client.sendMessage(from, {
                                    image: fotomenus,
                                    caption: modificadores(prefix, pushname, nomeBot)
                                })
                            } break
                            
                            case prefix + "wallpaper": {
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

                            default:

                        };
                        //========\\
                    }
                }
            }
        })
        client.ev.on('messages.upsert', async connection => {
            const info = connection.messages[0];
            if (connection.type != 'notify') return;
            if (info.key.remoteJid === 'status@broadcast') return;
            require('./comandos.js')(client, info, connection, prefix, nomeBot, NomeBot, NomeDoBot, nomeDono, numeroDono, color, DLT_FL)
        });

        client.ev.on('group-participants.update', async (anu) => {
            //console.log(anu)
            ale = anu
            conn = client

            const grpmdt = await client.groupMetadata(ale.id);

            const isGroup2 = grpmdt.id.endsWith('@g.us');

            const GroupMetadata_ = isGroup2 ? await client.groupMetadata(ale.id) : "";
            const mdata_ = isGroup2 ? await client.groupMetadata(ale.id) : "";

                if(antifake.includes(ale.jid)) {
                try {
                if (ale.action == 'add'){
                num = ale.participants[0]
                if(!num.split('@')[0].startsWith(55)) {
                client.sendMessage(mdata_.id, ' ⛹️⛹️numeros estrangeiros não sao Permitidos neste grupo, consulte um Administrador👋🏌️', MessageType.text)
                setTimeout(async function () {
                client.groupRemove(mdata_.id, [num])}, 1000)
                } 
            }
            } catch (err) {
            console.log(err)
            }
            }

            if (welkom2.includes(ale.id)) {
                try {
                    let metadata = await client.groupMetadata(anu.id)
                    let participants = anu.participants
                    for (let num of participants) {
                        try {
                            ppimg = await client.profilePictureUrl(anu.participants[0])
                        } catch {
                            ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
                        }
                        memb = metadata.participants.length
                        if (anu.action == 'add') {
                            num = anu.participants[0]

                            client.sendMessage(anu.id,
                                {
                                    image: { url: 'https://telegra.ph/file/91734dc02ee089ecc883b.jpg' },
                                    caption: `❤Bem♤vindo(a) 𝘢𝘰 𝘨𝘳𝘶𝘱𝘰: ${pushName}\n*${metadata.subject}*\nLEIA REGRAS E SEJA BEM VINDO(A)\n\n\n${NomeDoBot}`,
                                    headerType: 4
                                })

                            //})



                        } else if (anu.action == 'remove') {

                            client.sendMessage(anu.id,
                                {
                                    image: { url: 'https://telegra.ph/file/91734dc02ee089ecc883b.jpg' },
                                    caption: `OLA POVO DO GRUPO:\n*${metadata.subject}*\n\nO Membro: ${pushName} @${num.split('@')[0]}\n\nSaiu do Grp ou foi Banido.`,
                                    headerType: 4
                                })

                            //})

                        }
                    }
                } catch (err) {
                    console.log(err)
                }

            }

        })

    }
    starts();

} catch (error) {
    console.error("Ocorreu um erro:", error);
}
