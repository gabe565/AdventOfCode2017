'use strict'

const assert = require('assert')

const part1 = require('./part1')
const part2 = require('./part2')

function doTest(fn, input, result) {
    it('passphrase "' + input + '" should be ' + (result ? 'valid' : 'invalid'), () => {
        assert.equal(result, fn(input))
    })
}

describe('Day 4: High-Entropy Passphrases', () => {
    describe('Part 1', () => {
        doTest(part1, ['aa bb cc dd ee'], 1)
        doTest(part1, ['aa bb cc dd aa'], 0)
        doTest(part1, ['aa bb cc dd aaa'], 1)
    })
    describe('Part 2', () => {
        doTest(part2, ['abcde fghij'], 1)
        doTest(part2, ['abcde xyz ecdab'], 0)
        doTest(part2, ['a ab abc abd abf abj'], 1)
        doTest(part2, ['iiii oiii ooii oooi oooo'], 1)
        doTest(part2, ['oiii ioii iioi iiio'], 0)
    })
})
