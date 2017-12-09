'use strict'

module.exports = input => {
    let registers = {}
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
    })
    let arr = Object.keys(registers).map(i => registers[i]);
    let max = Math.max(...arr)
    return max
}
