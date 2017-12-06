#!/usr/bin/env node
'use strict'

const fs = require('fs')

const filename = __dirname + '/../input.txt'
const data = fs.readFileSync(filename, 'utf8')

var passphrases = data.replace(/\r?\n$/, '').split(/\r?\n/)

var correct = passphrases.filter(val => {
    var words = val.split(/\s+/).map(val => val.split('').sort().join(''))
    var correct = words.filter((el, i, self) => i === self.indexOf(el))
    return words.toString() == correct.toString()
})

console.log('Entries: ' + passphrases.length)
console.log('Correct: ' + correct.length)
