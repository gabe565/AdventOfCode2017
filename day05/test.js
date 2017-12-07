'use strict'

const assert = require('assert')

const part1 = require('./part1')
const part2 = require('./part2')

function doTest(fn, input, result) {
    it('memory [' + input + '] should take ' + result + ' steps', () => {
        assert.equal(result, fn(input))
    })
}

describe('Day 5: A Maze of Twisty Trampolines, All Alike', () => {
    describe('Part 1', () => {
        doTest(part1, [0, 3, 0, 1, -3], 5)
    })
    describe('Part 2', () => {
        doTest(part2, [0, 3, 0, 1, -3], 10)
    })
})
