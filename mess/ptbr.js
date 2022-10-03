const fs = require('fs');


 
exports.wait = () => {
	return`𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗮𝗻𝗱𝗼⌛️`
}

exports.tterro = () => {
	return `Você deve digitar ${prefixo}ppt pedra, ${prefixo}ppt papel ou ${prefixo}ppt tesoura`
}

exports.waitmusic = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitfig = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos.`
}

exports.waitgif = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos\nA criação de stickergif leva de 10 segundos á 1 minuto dependendo do tamanho do gif\nLimite de 10 segundos por gif.`
}

exports.waitsfw = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar o hentai em até 2 minutos\nTente novamente caso não envie.`
}

exports.waitpor = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar a img\nTente novamente caso não envie.`
}

exports.waitimg= () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar criar e enviar a imagem\nO processo dura no mínimo 10 segundos\nTente novamente caso não envie.`
}

exports.success = () => {
	return`❬ ✔ ❭ Sucesso 🖤`
}

exports.levelalreadyon = () => {
	return`❬ ✔ ❭ *leveling* *já ativo*`
}

exports.levelon = () => {
	return`❬ ✔ ❭ *leveling* *ativado*`
}

exports.leveloff = () => {
	return`❬ X ❭  *leveling* *desativado*`
}

exports.levelnoton = () => {
	return`❬ X ❭ *leveling não ativado*`
}

exports.levelnol = () => {
	return`Você está level 0... \njá se registrou para começar ganhar XP?`
}

exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} Seu limite acabou*\n*Para conseguir mais limite compre ou passe de nível*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 SEU LIMITE 」*
*seu limite restante : ${limitCounts}*

NOTA : para obter mais limite. você pode passar de nível ou comprar`
}

exports.reall = (pushname, sender, real) => {
	return`*┏⊱ 「 DINHEIRO 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinheiro* : ${real}\n┗━━━━━━━━━━`
}

exports.wrongf = () => {
	return`*「❌ERROR❌」*\n\n*Formato errado ou o texto esta em branco!!*`
}

exports.clears = () => {
	return`*「 CHAT LIMPO✅」*`
}

exports.banned = () => {
	return`🚫 | Você foi banido de usar comandos pelo meu criador`
}

exports.public = () => {
	return`🚫 | 𝙊 𝙪𝙨𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙩á 𝙥𝙧𝙞𝙫𝙖𝙙𝙤 𝙢𝙡𝙠`
}

exports.stick = () => {
	return`❌𝗘𝗥𝗥𝗢 𝗮𝗼 𝗽𝗿𝗼𝗰𝗲𝘀𝘀𝗮𝗿❌, 𝘁𝗲𝗻𝘁𝗲 𝗻𝗼𝘃𝗮𝗺𝗲𝗻𝘁𝗲❗️`
}

exports.Lv = () => {
	return`link invalido mlk☹️`
}

exports.group = () => {
	return`[❗] ${pushname} 𝗘𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝘀ó 𝗽𝗼𝗱𝗲 𝘀𝗲𝗿 𝘂𝘀𝗮𝗱𝗼 𝗲𝗺 𝗴𝗿𝘂𝗽𝗼𝘀! ❌`
}

exports.premium = () => {
	return `[❗]𝗣𝗘𝗗𝗜𝗗𝗢 𝗔𝗣𝗘𝗡𝗔𝗦 𝗣𝗔𝗥𝗔 𝗣𝗥𝗘𝗠𝗜𝗨𝗠[❗] 𝙋𝙖𝙧𝙖 𝙨𝙚 𝙩𝙤𝙧𝙣𝙖𝙧 𝙥𝙧𝙚𝙢𝙞𝙪𝙢, 𝙪𝙨𝙚 ${prefixo}𝙫𝙞𝙥 𝙤𝙪 𝙪𝙨𝙚 ${prefixo}𝙤𝙬𝙣𝙚𝙧 𝙥𝙖𝙧𝙖 𝙛𝙖𝙡𝙖𝙧 𝙘𝙤𝙢 𝙤 𝙙𝙤𝙣𝙤`
}

exports.ownerG = () => {
	return`[❗] 𝐃𝐨𝐧𝐨? 𝗘𝘀𝘁𝗲 é 𝘂𝗺 𝗿𝗲𝗰𝘂𝗿𝘀𝗼 𝗲𝘀𝗽𝗲𝗰𝗶𝗮𝗹 𝗽𝗮𝗿𝗮 𝗼 Dono`
}

exports.admin = () => {
	return`[❗] 𝗘𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝘀ó 𝗽𝗼𝗱𝗲 𝘀𝗲𝗿 𝘂𝘀𝗮𝗱𝗼 𝗽𝗼𝗿 𝗮𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿𝗲𝘀 𝗱𝗲 𝗴𝗿𝘂𝗽𝗼! ❌`
}

exports.Botadmin = () => {
	return`[❗] 𝗘𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝘀ó 𝗽𝗼𝗱𝗲 𝘀𝗲𝗿 𝘂𝘀𝗮𝗱𝗼 𝗾𝘂𝗮𝗻𝗱𝗼 𝗼 𝗯𝗼𝘁 𝘀𝗲 𝘁𝗼𝗿𝗻𝗮 𝗮𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿! ❌'`
}

exports.userB = () => {
	return`「 ℹ️ | 𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗲-𝘀𝗲 」 \n\nO͓̽l͓̽á͓̽ *${pushname}*!\n𝗩𝗼𝗰ê 𝗻ã𝗼 𝗲𝘀𝘁á 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗱𝗼(𝗮) 𝗻𝗼 𝗡𝗘𝗞𝗢𝗕𝗢𝗧...\n\n𝗣𝗮𝗿𝗮 𝘀𝗲 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝘂𝘀𝗲 ${prefixo}𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝗡𝗼𝗺𝗲|𝗜𝗱𝗮𝗱𝗲\n𝗘𝘅𝗲𝗺𝗽𝗹𝗼 : ${prefixo}𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝗸𝗹𝗮𝘂𝘀|𝟮𝟬`
}

exports.nsfw = () => {
	return`🚫funções NSFW desativadas nesse grupo🚫`
}

exports.antinofap = () => {
	return`🚫nada de punhetão esse mês mlk, função de antifap ativada🚫`
}

exports.erro = () => {
	return`❌ocorreu um erro❌\n\nTente novamente.`
}


