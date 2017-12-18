'use strict'

const assert = require('assert')

const DigitalPlumber = require('./DigitalPlumber')

describe('Day 12: Digital Plumber', () => {
    describe('Part 1', () => {
        it(`test.txt should have 6 programs connected to 0`, () => {
            assert.equal(6, DigitalPlumber.part1('test.txt'))
        })
    })
    describe('Part 2', () => {
        it(`test.txt should have 2 total groups`, () => {
            assert.equal(2, DigitalPlumber.part2('test.txt'))
        })
    })
})
