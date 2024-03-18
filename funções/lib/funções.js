const axios = require('axios');
const mimetype = require('mime-types');

exports.getBuffer = (url, options) => new Promise(async (resolve, reject) => {
    options ? options : {}
    await axios({ method: "get", url, headers: { "DNT": 1, "Upgrade-Insecure-Request": 1 }, ...options, responseType: "arraybuffer" }).then((res) => {
        resolve(res.data)
    }).catch(reject)
})

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.getExtension = async (type) => {
    return await mimetype.extension(type)
}