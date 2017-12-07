'use strict'

module.exports = function(loc) {
    var sqrt = Math.ceil(Math.sqrt(loc))
    if (sqrt % 2 === 0) ++sqrt
    var corner = Math.pow(sqrt, 2)
    var width = sqrt
    var worst = width - 1
    var best = worst / 2
    var steps = worst
    var down = true
    for (var i = corner; i > loc; i--) {
        if (steps <= best)
            down = false
        else if (steps >= worst)
            down = true

        if (down)
            steps--
        else
            steps++
    }
    return steps
//     console.log(
// `┌ number : ${ loc }
// │ corner : ${ corner }
// │ width  : ${ width }
// │ worst  : ${ worst }
// │ best   : ${ best }
// └ = steps: ${ steps }
// `)
}
