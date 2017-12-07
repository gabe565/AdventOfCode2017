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
        it('test data should be ' + 'tknk', () => {
            assert.equal('tknk', part1(read('input.txt')))
        })
    })
    describe('Part 2', () => {
        it('test data should be ' + 'tknk', () => {
            assert.equal('tknk', part2(read('input.txt')))
        })
        // doTest(part2, '1212', 6)
        // doTest(part2, '1221', 0)
        // doTest(part2, '123425', 4)
        // doTest(part2, '123123', 12)
        // doTest(part2, '12131415', 4)
    })
})
