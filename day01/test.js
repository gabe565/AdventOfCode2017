'use strict'

const assert = require('assert')

const part1 = require('./part1')
const part2 = require('./part2')

function doTest(fn, input, result) {
    it(input + ' should be ' + result, () => {
        assert.equal(result, fn(input))
    })
}

describe('Day 1: Inverse Captcha', () => {
    describe('Part 1', () => {
        doTest(part1, '1122', 3)
        doTest(part1, '1111', 4)
        doTest(part1, '1234', 0)
        doTest(part1, '91212129', 9)
    })
    describe('Part 2', () => {
        doTest(part2, '1212', 6)
        doTest(part2, '1221', 0)
        doTest(part2, '123425', 4)
        doTest(part2, '123123', 12)
        doTest(part2, '12131415', 4)
    })
})
