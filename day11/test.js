'use strict'

const assert = require('assert')

const HexEd = require('./HexEd')

describe('Day 11: Hex Ed', () => {
    describe('Part 1', () => {
        let data = [
            ['ne,ne,ne', 3],
            ['ne,ne,sw,sw', 0],
            ['ne,ne,s,s', 2],
            ['se,sw,se,sw,sw', 3],
        ]
        data.forEach(([input, result]) => {
            it(`"${input}" should be ${result} steps away`, () => {
                assert.equal(result, HexEd.part1.fromString(input))
            })
        })
    })
    describe('Part 2', () => {
        let data = [
            ['ne,ne,ne', 3],
            ['ne,ne,sw,sw', 2],
            ['ne,ne,s,s', 2],
            ['se,sw,se,sw,sw', 3],
        ]
        data.forEach(([input, result]) => {
            it(`"${input}" should have been ${result} furthest away`, () => {
                assert.equal(result, HexEd.part2.fromString(input))
            })
        })
    })
})
