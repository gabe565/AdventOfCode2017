'use strict'

module.exports = input => {
    let memory  = input.replace(/\r?\n$/, '').split(/\s+/).map(Number)
    let history = new Map()
    let size = memory.length
    let pc = 0

    while (!history.has(memory.toString())) {
        history.set(memory.toString(), pc)
        let val = Math.max(...memory)
        let key = memory.indexOf(val)
        memory[key] = 0
        let curr = (key + 1) % size
        while (val > 0) {
            ++memory[curr]
            --val
            curr = (curr + 1) % size
        }
        ++pc
    }
    let first = history.get(memory.toString())
    
    return pc - first
}
