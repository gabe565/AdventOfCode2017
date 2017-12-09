'use strict'

module.exports = input => {
    let skip = false
    let garbage = false
    let discarded = 0
    let groups = {
        nested: 0,
        total: 0
    }
    input.split('').forEach(e => {
        if (skip)
            skip = false
        else if (e === '!')
            skip = true
        else if (e === '>')
            garbage = false
        else if (garbage)
            ++discarded
        else if (e === '<')
            garbage = true
        else if (e === '{')
            ++groups.nested
        else if (e === '}') {
            groups.total += groups.nested--
        }
    })
    return discarded
}
