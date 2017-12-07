'use strict'

const assert = require('assert')

const part1 = require('./part1')
//const part2 = require('./part2')

function doTest(fn, input, result) {
    it('steps to ' + input + ' should be ' + result, () => {
        assert.equal(result, fn(input))
    })
}

describe('Day 3: Spiral Memory', () => {
    describe('Part 1', () => {
        doTest(part1, 1, 0)
        doTest(part1, 6, 1)
        doTest(part1, 12, 3)
        doTest(part1, 23, 2)
        doTest(part1, 1024, 31)
    })
})
