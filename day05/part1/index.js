#!/usr/bin/env node
'use strict'

const _  = require('lodash')
const fs = require('fs')

const filepath = '../input.txt'

function fromFile(path) {
    let data = fs.readFileSync(path, 'utf8')
    let split = _.filter(_.split(data, /\r?\n/), _.size)
    let memory = _.map(split, _.toInteger)
    return memory
}

function calc(memory) {
    let size = _.size(memory)
    let loc = 0
    let pc = 0

    while (loc < size) {
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
