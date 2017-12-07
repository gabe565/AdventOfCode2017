'use strict'

module.exports = function(memory) {
    let loc = 0
    let pc = 0

    while (loc < memory.length) {
        let last = loc
        loc += memory[loc]
        if (memory[last] >= 3)
            --memory[last]
        else 
            ++memory[last]
        ++pc
    }
    return pc
}
