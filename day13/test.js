'use strict'

const assert = require('assert')

const PacketScanners = require('./PacketScanners')

describe('Day 13: Packet Scanners', () => {
    describe('Part 1', () => {
        it(`test.txt should have a penalty of 24`, () => {
            assert.equal(24, PacketScanners.part1('test.txt'))
        })
    })
    // describe('Part 2', () => {
    //     it(`test.txt should wait 10 ps to get a penalty of 0`, () => {
    //         assert.equal(10, PacketScanners.part2('test.txt'))
    //     })
    // })
})
