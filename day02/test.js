'use strict'

const assert = require('assert')

const read  = require('./read')
const part1 = require('./part1')
const part2 = require('./part2')

function doTest(fn, input, result) {
    it(input + ' should be ' + result, () => {
        assert.equal(result, fn(input))
    })
}

describe('Day 1: Inverse Captcha', () => {
    describe('Part 1', () => {
        doTest(part1, read('part1.csv'), 18)
    })
    describe('Part 2', () => {
        doTest(part2, read('part2.csv'), 9)
    })
})
