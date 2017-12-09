'use strict'

const fs = require('fs')

module.exports = filename => {
    var path = __dirname + '/' + filename
    let data = fs.readFileSync(path, 'utf8')
    let arr = data.replace(/\r?\n$/, '').split(/\r?\n/)
    let result = arr.map(line => line.split(/\s+/).map(Number))
    return result
}
