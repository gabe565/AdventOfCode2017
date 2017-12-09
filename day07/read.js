'use strict'

const fs = require('fs')

module.exports = input => {
    let path = __dirname + '/' + input
    let data = fs.readFileSync(path, 'utf8')
    let arr  = data.replace(/\r?\n$/, '').split(/\n/)
    return arr
}
