#!/usr/bin/env node

const _  = require('lodash')
const fs = require('fs')

function calc(loc) {
    var sqrt = Math.sqrt(loc)
    var corner = loc
    while (!_.isInteger(sqrt) || !(sqrt % 2)) {
        sqrt = Math.sqrt(++corner)
    }
    var width = sqrt
    var worst = width - 1
    var best = worst / 2
    var temp = worst
    var down = true
    for (var i = corner; i > loc; i--) {
        if (temp <= best)
            down = false
        else if (temp >= worst)
            down = true

        if (down)
            temp--
        else
            temp++
    }
    var steps = temp
    console.log(
`┌ number : ${ loc }
│ corner : ${ corner }
│ width  : ${ width }
│ worst  : ${ worst }
│ best   : ${ best }
└ steps  : ${ steps }
`)
}

calc(1)
calc(6)
calc(12)
calc(23)
calc(1024)
calc(361527)
