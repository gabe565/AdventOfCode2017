'use strict'

const assert = require('assert')

const read  = require('./read')
const part1 = require('./part1')
const part2 = require('./part2')

describe('Day 7: Recursive Circus', () => {
    describe('Part 1', () => {
        it('bottom of the tower should be "tknk"', () => {
            assert.equal('tknk', part1(read('test.txt')))
        })
    })
    describe('Part 2', () => {
        it('fixed weight should be 60', () => {
            assert.equal(60, part2(read('test.txt')))
        })
    })
})
