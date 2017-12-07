'use strict'
const fs = require('fs')
const part2 = require('./part2')

// let data = fs.readFileSync('input.txt', 'utf8')
// data = data.replace(/\r?\n$/, '').split(/\n/)
// part2(data)

// console.log()
let data = fs.readFileSync('part1.txt', 'utf8')
data = data.replace(/\r?\n$/, '').split(/\n/)
part2(data)
