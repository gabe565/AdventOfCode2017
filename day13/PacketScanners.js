'use strict'

const cloneDeep = require('lodash/cloneDeep')
const fs   = require('fs')
const path = require('path')

function fromFile(filename) {
    let filepath = path.join(__dirname, filename)
    let data = fs.readFileSync(filepath, 'utf8').replace(/\r?\n$/, '').split(/\r?\n/)
    let result = []
    data.forEach(line => {
        let [, k, height] = line.match(/^(\d+?): (\d*)$/)
        result[k] = {
            height: Number(height),
            location: 0,
            increasing: true
        }
    })
    return result
}

function moveScanners(firewall) {
    firewall.forEach(v => {
        if (v !== undefined) {
            if (v.increasing && v.location === v.height - 1) {
                v.increasing = false
            } else if (!v.increasing && v.location === 0) {
                v.increasing = true
            }
            
            v.location += (v.increasing) ? 1 : -1
        }
    })
}

function gotCaught(input, wait = 0) {
    let firewall = cloneDeep(input)
    let caught = false
    let loc = -1
    for (let i = 0; i < wait; i++) {
        moveScanners(firewall)
    }
    while (loc < firewall.length) {
        ++loc
        if (firewall[loc] !== undefined && firewall[loc].location === 0) {
            return true
        }

        moveScanners(firewall)
    }
    return false
}

function getScanner(height, time) {
    return time % (height * 2) - 2
}

function getPenalty(input, wait = 0) {
    let firewall = cloneDeep(input)
    let penalty = 0
    let loc = -1
    for (let i = 0; i < wait; i++) {
        moveScanners(firewall)
    }
    while (loc < firewall.length) {
        ++loc
        if (firewall[loc] !== undefined && firewall[loc].location === 0)
            penalty += loc * firewall[loc].height

        moveScanners(firewall)
    }
    return penalty
}

function part1(filename) {
    let firewall = fromFile(filename)

    return getPenalty(firewall)
}

function part2(filename) {
    let firewall = fromFile(filename)
    let wait = 0
    let penalty
    while (penalty !== 0) {
        // penalty = firewall.length - wait % (
    }
    return wait
}

module.exports = { part1, part2 }
