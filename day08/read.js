'use strict'

const fs = require('fs')

module.exports = filename => {
    let path = __dirname + '/' + filename
    let data = fs.readFileSync(path, 'utf8')
    return data.replace(/\r?\n$/, '').split(/\r?\n/)
}
