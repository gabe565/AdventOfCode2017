'use strict'

module.exports = passphrases => {
    let correct = passphrases.filter((val) => {
        var words = val.split(/\s+/)
        var correct = words.filter((el, i, self) => i === self.indexOf(el))
        return words.toString() == correct.toString()
    })
    return correct.length
}
