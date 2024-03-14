const fs = require('fs')
const nivel = JSON.parse(fs.readFileSync("./database/user/nivel/nivel.json"));

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(nivel).forEach((i) => {
                if (nivel[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                nivel[position].xp += amount
                fs.writeFileSync('./database/user/nivel/nivel.json', JSON.stringify(nivel))
            }
}
        const getLevelingXp = (userId) => {
            let position = false
            Object.keys(nivel).forEach((i) => {
                if (nivel[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return nivel[position].xp
            }
}
        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(nivel).forEach((i) => {
                if (nivel[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return nivel[position].level
            }
}
        const getLevelingId = (userId) => {
            let position = false
            Object.keys(nivel).forEach((i) => {
                if (nivel[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return nivel[position].jid
            }
}
        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(nivel).forEach((i) => {
                if (nivel[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                nivel[position].level += amount
                fs.writeFileSync('./database/user/nivel/nivel.json', JSON.stringify(nivel))
            }
}
        const addLevelingId = (userId) => {
            const obj = { jid: userId, xp: 1, level: 1 }
            nivel.push(obj)
            fs.writeFileSync('./database/user/nivel/nivel.json', JSON.stringify(nivel))
}

module.exports = {
    addLevelingXp,
    getLevelingXp,
    getLevelingLevel,
    getLevelingId,
    addLevelingLevel,
    addLevelingId
}