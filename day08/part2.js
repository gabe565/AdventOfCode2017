'use strict'

module.exports = function(input) {
    let registers = {}
    let max = 0
    input.map(e => {
        let [register, command, number,, cond_register, conditional, cond_number] = e.split(/\s+/)
        if (!registers[register]) {
            registers[register] = 0
        }
        return {
            register: register,
            command: command,
            number: parseInt(number),
            cond: {
                register: cond_register,
                cond: conditional,
                number: parseInt(cond_number)
            }
        }
    }).forEach(e => {
        if(eval(`registers.${e.cond.register} ${e.cond.cond} ${e.cond.number}`)) {
            registers[e.register] += (e.command === 'inc' ? 1 : -1) * e.number
        }
        if (registers[e.register] > max)
            max = registers[e.register]
    })
    return max
}
