#!/usr/bin/env node

const fs = require('fs')
const _ = require('lodash')

const debug = process.argv[2]

function toArray(input) {
    var data = fs.readFileSync(input, 'utf8')
    var arr = _.filter(_.split(data, /\r?\n/), _.size)
    var result = _.map(arr, (val) => {
        var split = _.split(val, /\s+/)
        return _.map(split, _.toInteger)
    })
    return result
}

function calc(input) {
    var data = toArray(input)
    var result = _.map(data, (row) => {
        var sorted = _.sortBy(row)
        var begin = 0
        var end = sorted.length - 1
        var curr
        while (!_.isInteger(curr) && end > 0) {
            curr = sorted[end] / sorted[begin]
            if (++begin >= end) {
                begin = 0
                --end
            }
        }
        return curr
    })
    console.log(_.sum(result))
}

if (debug) {
    calc('test.csv')
} else {
    calc('../input.csv')
}
