'use strict'

const assert = require('assert')

const part1 = require('./part1')
const part2 = require('./part2')

const doTest = (fn, input, result) => {
    it(`[${input}] should take ${result} cycles`, () => {
        assert.equal(result, fn(input))
    })
}

describe('Day 6: Memory Reallocation', () => {
    describe('Part 1', () => {
        doTest(part1, '0 2 7 0', 5)
    })
    describe('Part 2', () => {
        doTest(part2, '0 2 7 0', 4)
    })
})
