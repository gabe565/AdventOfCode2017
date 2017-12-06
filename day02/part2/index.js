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
    let result = data.map(row => {
        let sorted = row.sort((a, b) => a - b)
        let begin = 0
        let end = sorted.length - 1
        let curr
        while (!Number.isInteger(curr) && end > 0) {
            curr = sorted[end] / sorted[begin]
            if (++begin >= end) {
                begin = 0
                --end
            }
        }
        return curr
    })
    console.log(result.reduce((ac, curr) => ac + curr))
}

if (debug) {
    calc(__dirname + '/test.csv')
} else {
    calc(__dirname + '/../input.csv')
}
