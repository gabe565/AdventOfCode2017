'use strict'

const Hex = (q, r, s) => ({q: q, r: r, s: s})

const directions = {
    se: Hex( 1, -1,  0),
    ne: Hex( 1,  0, -1),
    n:  Hex( 0,  1, -1),
    nw: Hex(-1,  1,  0),
    sw: Hex(-1,  0,  1),
    s:  Hex( 0, -1,  1)
}

const direction = str => directions[str]
const add      = (a, b) => Hex(a.q + b.q, a.r + b.r, a.s + b.s)
const subtract = (a, b) => Hex(a.q - b.q, a.r - b.r, a.s - b.s)
const length   = (hex)  => Math.trunc((Math.abs(hex.q) + Math.abs(hex.r) + Math.abs(hex.s)) / 2)
const distance = (a, b) => length(subtract(a, b))
const move     = (a, d) => add(a, direction(d))

module.exports = {
    Hex:       Hex,
    direction: direction,
    add:       add,
    subtract:  subtract,
    distance:  distance,
    move:      move
}
