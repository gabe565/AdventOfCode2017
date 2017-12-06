#!/usr/bin/env node
'use strict'

const fs = require('fs')

function calc(input) {
    let memory  = input.replace(/\r?\n$/, '').split(/\s+/).map(Number)
    console.log(memory.toString())
    let history = new Map()
    let size = memory.length
    let pc = 0

    while (!history.has(memory.toString())) {
        history.set(memory.toString(), pc)
        let val = Math.max(...memory)
        let key = memory.indexOf(val)
        memory[key] = 0
        let curr = (key + 1) % size
        while (val > 0) {
            ++memory[curr]
            --val
            curr = (curr + 1) % size
        }
        ++pc
    }
    let first = history.get(memory.toString())
    console.log('Count : ' + pc)
    console.log('Cycles: ' + (pc - first))
}

console.log('Tests')
calc('0 2 7 0')
console.log('\nInput')
var data = fs.readFileSync('input.txt', 'utf8')
calc(data)
