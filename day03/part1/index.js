#!/usr/bin/env node
'use strict'

const _  = require('lodash')
const fs = require('fs')

function calc(loc) {
    var sqrt = _.ceil(Math.sqrt(loc))
    if (sqrt % 2 === 0) ++sqrt
    var corner = Math.pow(sqrt, 2)
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
└ = steps: ${ steps }
`)
}

calc(1)
calc(6)
calc(12)
calc(23)
calc(1024)
calc(361527)
