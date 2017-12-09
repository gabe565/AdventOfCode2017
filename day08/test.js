'use strict'

const assert = require('assert')

const read  = require('./read')
const part1 = require('./part1')
const part2 = require('./part2')

const doTest = (fn, input, result) => {
    it(input + ' should be ' + result, () => {
        assert.equal(result, fn(input))
    })
}

describe('Day 8: I Heard You Like Registers', () => {
    describe('Part 1', () => {
        it('max result should be 1', () => {
            assert.equal(1, part1(read('test.txt')))
        })
    })
    describe('Part 2', () => {
        it('max ever should be 10', () => {
            assert.equal(10, part2(read('test.txt')))
        })
    })
})
