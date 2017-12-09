#!/usr/bin/env node
'use strict'

module.exports = data => {
    let differences = data.map((val, key) => {
        let max = Math.max(...val)
        let min = Math.min(...val)
        return max - min
    })
    let sum = differences.reduce((t, n) => t + n, 0)
    return sum
}
