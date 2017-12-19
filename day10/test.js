'use strict'

const assert = require('assert')

const part1 = require('./part1')
const part2 = require('./part2')

describe('Day 10: Knot Hash', () => {
    describe('Part 1', () => {
        let data = [
            [[3, 4, 1, 5], 5, 12],
            [[256], 256, 64770],
            [[0], 256, 0],
        ]
        data.forEach(([lens, size, result]) => {
            it(`${size} values and knot lengths of [${lens}] should be ${result}`, () => {
                assert.equal(result, part1.hashString(lens, size))
            })
        })
    })
    describe('Part 2', () => {
        describe('Helper Functions', () => {
            [
                ['1,2,3', [49, 44, 50, 44, 51, 17, 31, 73, 47, 23]]
            ].forEach(([input, result]) => {
                it(`toHex should convert '${input}' into ${result}`, () => {
                    assert.deepEqual(result, part2.toHex(input))
                })
            })
        })
        let data = [
            ['', 'a2582a3a0e66e6e86e3812dcb672a272'],
            ['AoC 2017', '33efeb34ea91902bb2f59c9920caa6cd'],
            ['1,2,3', '3efbe78a8d82f29979031a4aa0b16a9d'],
            ['1,2,4', '63960835bcdc130f0b66d7ff4f6a5a8e']
        ]
        data.forEach(([input, result]) => {
            it(`hash of '${input}' should be ${result}`, () => {
                assert.equal(result, part2.hashString(input))
            })
        })
    })
})
