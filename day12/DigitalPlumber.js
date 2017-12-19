'use strict'

const fs   = require('fs')
const path = require('path')

function fromFile(filename) {
    let filepath = path.join(__dirname, filename)
    let data = fs.readFileSync(filepath, 'utf8')
    let arr = data.replace(/\r?\n$/, '').split(/\r?\n/)
    let result = {}
    arr.forEach(line => {
        let [, k, vals] = line.match(/^(\d+?) <-> (.*)$/)
        result[k] = vals.split(', ').map(Number)
    })
    return result
}

function group(data, loc, result = []) {
    if (!result.includes(loc)) {
        result.push(loc)
        data[loc].forEach(e => {
            group(data, e, result)
        })
    }
    return result
}

function part1(filename) {
    let data = fromFile(filename)
    let first = group(data, 0)
    return first.length
}

function part2(filename) {
    let data = fromFile(filename)
    let grouped = []
    let groups = []
    for (let [k, v] of Object.entries(data)) {
        v.forEach(v => {
            if (!grouped.includes(v)) {
                let curr = group(data, v)
                grouped = grouped.concat(curr)
                groups.push(curr)
            }
        })
    }
    return groups.length
}

module.exports = { part1, part2 }
