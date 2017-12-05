#!/usr/bin/env node
'use strict'

const _ = require('lodash')
const fs = require('fs')

const filename = '../input.txt'
const data = fs.readFileSync(filename, 'utf8')

var passphrases = _.filter(_.split(data, /\r?\n/), _.size)

var correct = _.filter(passphrases, (val) => {
    var words = _.map(_.split(val, /\s+/), (val) => {
        return _.join(_.sortBy(val), '')
    })
    var correct = _.uniq(words)
    return _.isEqual(words, correct)
})

console.log('Entries: ' + _.size(passphrases))
console.log('Correct: ' + _.size(correct))
