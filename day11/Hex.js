'use strict'

class Hex {
    constructor(q = 0, r = 0, s = 0) {
        this.q = q
        this.r = r
        this.s = s
        return this
    }

    add (b) {
        this.q += b.q
        this.r += b.r
        this.s += b.s
        return this
    }

    subtract(b) {
        this.q -= b.q
        this.r -= b.r
        this.s -= b.s
        return this
    }

    scale(b) {
        this.q *= b.q
        this.r *= b.r
        this.s *= b.s
        return this
    }

    length() {
        return Math.trunc((Math.abs(this.q) + Math.abs(this.r) + Math.abs(this.s)) / 2)
    }

    distance(b) {
        return this.subtract(b).length()
    }

    move(dir) {
        this.add(Hex.direction(dir))
        return this
    }
}

Hex.direction = function(dir) {
    const directions = {
        se: new Hex( 1, -1,  0),
        ne: new Hex( 1,  0, -1),
        n:  new Hex( 0,  1, -1),
        nw: new Hex(-1,  1,  0),
        sw: new Hex(-1,  0,  1),
        s:  new Hex( 0, -1,  1)
    }

    return directions[dir]
}

module.exports = Hex
