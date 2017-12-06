#!/usr/bin/env node
'use strict'

const fs = require('fs')

const filepath = __dirname + '/../input.txt'

function fromFile(path) {
    let data = fs.readFileSync(path, 'utf8')
    let split = data.replace(/\r?\n$/, '').split(/\r?\n/)
    let memory = split.map(Number)
    return memory
}

function calc(memory) {
    let loc = 0
    let pc = 0

    while (loc < memory.length) {
        let last = loc
        loc += memory[loc]
        ++memory[last]
        ++pc
    }
    console.log('  Program Counter: ' + pc)
}

console.log('Test')
calc([0, 3, 0, 1, -3])

console.log('Input')
let data = fs.readFileSync(filepath, 'utf8')
let memory = fromFile(filepath)
calc(memory)
