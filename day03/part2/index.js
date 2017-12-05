#!/usr/bin/env node
'use strict'

const _  = require('lodash')
const fs = require('fs')

function calc(n) {
    let spiral = {
        data: [[1]],
        rows: 1,
        cols: 1,
        center: { row: 0, col: 0 },
        loc: { row: 0, col: 0 },
        move: function(direction) {
            if (direction.byRow())
                this.addRow(direction)
            else
                this.addCol(direction)

            this.loc.row += direction.toMovementObj().row
            this.loc.col += direction.toMovementObj().col
            return this.loc
        },
        insert: function(n, direction) {
            this.move(direction)
            direction.next()

            spiral[this.loc.row][this.loc.col] = n
        },
        addRow: function(direction) {
            let row = []
            if (direction.toString() === 'down') {
                this.data.unshift(row)
            } else if (direction.toString() === 'up') {
                this.data.push(row)
                ++this.center.row
            } else {
                throw 'Moving in the wrong direction!'
            }
        },
        addCol: function(direction) {
            if (direction.toString() === 'right') {
                _.forEach(this.data, row => {
                    row.push(undefined)
                })
            } else if (direction.toString() === 'left') {
                _.forEach(this.data, row => {
                    row.unshift(undefined)
                })
                ++this.center.col
            } else {
                throw 'Moving in the wrong direction!'
            }
        }
    }

    let direction = {
        current: 1,
        strings: ['up', 'right', 'down', 'left'],
        next: function() {
            return this.current = (this.current + 1) % 4
        },
        toString: function() {
            return this.strings[this.current]
        },
        toMovementObj: function() {
            switch(this.current) {
                case 0:
                    return { row: -1, col: 0 }
                case 1:
                    return { row: 0, col: 1 }
                case 2:
                    return { row: 1, col: 0 }
                case 3:
                    return { row: 0, col: -1 }
            }
        },
        byCol: function() {
            return (this.current === 1 || this.current === 3)
        },
        byRow: function() {
            return !this.byCol()
        }
    }

    spiral.insert(1, direction)
    spiral.insert(3, direction)
    console.log(spiral.data)
}

// calc(1)
// calc(6)
calc(12)
// calc(23)
// calc(1024)
// calc(361527)
