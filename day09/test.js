'use strict'

const assert = require('assert')

const read  = require('./read')
const part1 = require('./part1')
const part2 = require('./part2')

const part1Test = (input, result) => {
    it(`"${input}" should be ${result} groups`, () => {
        assert.equal(result, part1(input))
    })
}

const part2Test = (input, result) => {
    it(`"${input}" should discard ${result} characters`, () => {
        assert.equal(result, part2(input))
    })
}

describe('Day 9: Stream Processing', () => {
    describe('Part 1', () => {
        let data = [
            ['<>', 0],
            ['<random characters>', 0],
            ['<<<<>', 0],
            ['<{!>}>', 0],
            ['<!!>', 0],
            ['<!!!>>', 0],
            ['<{o"i!a,<{i<a>', 0],
            ['{}', 1],
            ['{{{}}}', 6],
            ['{{},{}}', 5],
            ['{{{},{},{{}}}}', 16],
            ['{<a>,<a>,<a>,<a>}', 1],
            ['{{<ab>},{<ab>},{<ab>},{<ab>}}', 9],
            ['{{<!!>},{<!!>},{<!!>},{<!!>}}', 9],
            ['{{<a!>},{<a!>},{<a!>},{<ab>}}', 3]
        ]
        data.forEach(([input, result]) => {
            part1Test(input, result)
        })
    })
    describe('Part 2', () => {
        let data = [
            ['<>', 0],
            ['<random characters>', 17],
            ['<<<<>', 3],
            ['<{!>}>', 2],
            ['<!!>', 0],
            ['<!!!>>', 0],
            ['<{o"i!a,<{i<a>', 10]
        ]
        data.forEach(([input, result]) => {
            part2Test(input, result)
        })
    })
})
