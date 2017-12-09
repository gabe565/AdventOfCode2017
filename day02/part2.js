#!/usr/bin/env node
'use strict'

module.exports = data => {
    let result = data.map(row => {
        let sorted = row.sort((a, b) => a - b)
        let begin = 0
        let end = sorted.length - 1
        let curr
        while (!Number.isInteger(curr) && end > 0) {
            curr = sorted[end] / sorted[begin]
            if (++begin >= end) {
                begin = 0
                --end
            }
        }
        return curr
    })
    let sum = result.reduce((t, n) => t + n, 0)
    return sum
}
