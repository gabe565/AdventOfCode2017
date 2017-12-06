#!/usr/bin/env node
'use strict'

const fs = require('fs')

const debug = process.argv[2]

function toArray(input) {
    let data = fs.readFileSync(input, 'utf8')
    let arr = data.replace(/\r?\n$/, '').split(/\r?\n/)
    let result = arr.map(line => line.split(/\s+/).map(Number))
    return result
}

function calc(input) {
    let data = toArray(input)
    let differences = data.map((val, key) => {
        let max = Math.max(...val)
        let min = Math.min(...val)
        return max - min
    })
    console.log(differences.reduce((ac, curr) => ac + curr))
}

if (debug) {
    calc(__dirname + '/test.csv')
} else {
    calc(__dirname + '/../input.csv')
}
