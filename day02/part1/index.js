#!/usr/bin/env node

const _ = require('lodash')
const fs = require('fs')

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
    var differences = _.map(data, (val, key) => {
        var max = _.max(val)
        var min = _.min(val)
        return max - min
    })
    console.log(_.sum(differences))
}

if (debug) {
    calc('test.csv')
} else {
    calc('../input.csv')
}
