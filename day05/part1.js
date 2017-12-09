'use strict'

module.exports = memory => {
    let loc = 0
    let pc = 0

    while (loc < memory.length) {
        let last = loc
        loc += memory[loc]
        ++memory[last]
        ++pc
    }
    return pc
}
