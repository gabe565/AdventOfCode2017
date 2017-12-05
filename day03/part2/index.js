#!/usr/bin/env node
'use strict'

const _  = require('lodash')
const fs = require('fs')

function calc(n) {
    var curr = 1
    var last = 1
    for (var i = 0; i < n; i++) {
        var temp = curr
        curr += last
        last = temp
    }
    console.log(curr)
}

calc(1)
calc(6)
calc(12)
calc(23)
calc(1024)
calc(361527)
