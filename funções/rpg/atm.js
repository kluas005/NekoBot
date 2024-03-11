const fs = require('fs');
const dinheiro = JSON.parse(fs.readFileSync("./database/user/dinheiro/dinheiro.json"));

const checkATMuser = (sender) => {

    let position = false
    Object.keys(dinheiro).forEach((i) => {
    if (dinheiro[i].id === sender) {
    position = i
    }
    })
    if (position !== false) {
    return dinheiro[position].dinheiro
    }
    }
    
    const confirmATM = (sender, amount) => {
    
    let position = false
    Object.keys(dinheiro).forEach((i) => {
    if (dinheiro[i].id === sender) {
    position = i
    }
    })
    if (position !== false) {
    dinheiro[position].dinheiro -= amount
    fs.writeFileSync('./database/user/dinheiro/dinheiro.json', JSON.stringify(dinheiro))
    }
    }
    
    
    const addKoinUser = (sender, amount) => {
    
    let position = false
    Object.keys(dinheiro).forEach((i) => {
    if (dinheiro[i].id === sender) {
    position = i
    }
    })
    if (position !== false) {
    dinheiro[position].dinheiro += amount
    fs.writeFileSync('./database/user/dinheiro/dinheiro.json', JSON.stringify(dinheiro))
    }
    }
    
    const addATM = (sender) => {
    
    const obj = {
     id: sender,
     dinheiro: 0
    };
    dinheiro.push(obj)
    fs.writeFileSync('./database/user/dinheiro/dinheiro.json', JSON.stringify(dinheiro))
    }

module.exports = {
    checkATMuser,
    confirmATM,
    addKoinUser,
    addATM
}