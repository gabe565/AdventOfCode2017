'use strict'

module.exports = passphrases => {
    var correct = passphrases.filter(val => {
        var words = val.split(/\s+/).map(val => val.split('').sort().join(''))
        var correct = words.filter((el, i, self) => i === self.indexOf(el))
        return words.toString() == correct.toString()
    })
    return correct.length
}
