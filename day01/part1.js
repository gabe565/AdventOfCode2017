'use strict'

module.exports = input => {
    let arr = input.split('').map(Number)
    let result = arr.filter((val, key) => {
        let next = arr[(key + 1) % arr.length]
        return val === next
    })
    let sum = result.reduce((t, n) => t + n, 0)
    return sum
}
