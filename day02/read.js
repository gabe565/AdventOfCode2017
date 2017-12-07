'use strict'

const fs = require('fs')

module.exports = function(input) {
    var path = __dirname + '/' + input
    let data = fs.readFileSync(path, 'utf8')
    let arr = data.replace(/\r?\n$/, '').split(/\r?\n/)
    let result = arr.map(line => line.split(/\s+/).map(Number))
    return result
}
