'use strict'

const fs   = require('fs')
const path = require('path')

const Hex  = require('./Hex')

function read(filename) {
    let filepath = path.join(__dirname, filename)
    let data = fs.readFileSync(filepath, 'utf8')
    return data.replace(/\r?\n$/, '')
}

/**
 * Part 1
 **/
function part1(input) {
    let movements = input.split(',')
    let loc = new Hex(0, 0, 0)
    movements.forEach(e => {
        loc.move(e)
    })
    return loc.distance(new Hex(0, 0, 0))
}

/**
 * Part 2
 **/
function part2(input) {
    let movements = input.split(',')
    let loc = new Hex(0, 0, 0)
    let furthest = 0
    movements.forEach(e => {
        loc.move(e)
        let distance = loc.distance(new Hex(0, 0, 0))
        if (distance > furthest)
            furthest = distance
    })
    return furthest
}

module.exports = {
    part1: {
        fromFile: input => part1(read(input)),
        fromString: part1,
    },
    part2: {
        fromFile: input => part2(read(input)),
        fromString: part2,
    },
}
