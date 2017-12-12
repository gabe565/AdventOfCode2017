'use strict'

const log = (list, pos) => {
    list.forEach((e, i) => {
        if (i === pos) process.stdout.write(`[${e}] `)
        else process.stdout.write(`${e} `)
    })
    console.log()
}

const read = filename => {
    const fs = require('fs')

    let path = __dirname + '/' + filename
    let data = fs.readFileSync(path, 'utf8')
    return data.replace(/\r?\n$/, '').split(',').map(Number)
}

const hashFile = (filename, max, debug) => {
    return hashString(read(filename), max, debug)
}

const hashString = (lengths, max, debug) => {
    let list = [...Array(max).keys()]
    let pos = 0
    let skip = 0
    lengths.forEach(length => {
        let end = pos + length

        let copy = list.slice(pos, end)
        if (end > list.length)
            copy = copy.concat(list.slice(0, end % list.length))

        copy.reverse().forEach((e, i) => {
            let repl = (pos + i) % list.length
            list[repl] = e
        })

        pos = (pos + length + skip++) % list.length

        if (debug)
            log(list, pos) 
    })
    return list[0] * list[1]
}

module.exports = {
    hashString: hashString,
    hashFile: hashFile,
    _read: read
}
