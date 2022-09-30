/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Contact Me on wa.me/6282113821188
   * Follow https://github.com/nazedev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['5524999304661']
global.ownernomer = "5524999304661"
global.premium = ['5524999304661']
global.packname = 'Sticker Feito por Neko Bot Vadia'
global.author = 'NekoBot'
global.sessionName = 'NekoBotQr'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Concluído',
     admin: 'Recurso especial de administração de grupo!',
     botAdmin: 'Bot deve ser administrador primeiro!',
     premime: 'Recursos premium especiais se você quiser se registrar, digite aluguel',
     owner: 'Recursos especiais do bot do proprietário',
     group: 'Recurso usado apenas para grupo!',
     private: 'Recurso usado apenas para bate-papo privado!',
     bot: 'Recurso somente para usuários do número do bot',
     wait: 'Carregando...',
     endLimit: 'Seu limite diário expirou, o limite será redefinido a cada 12 horas',
}


global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./lib/naze.png')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
