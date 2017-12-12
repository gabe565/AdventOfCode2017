'use strict'

const max = 256
const rounds = 64

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
    return data.replace(/\r?\n$/, '')
}

const toHex = str => {
    return str.split('').map(e => e.charCodeAt(0)).concat([17, 31, 73, 47, 23])
}

const hashFile = (filename, debug) => {
    return hashString(read(filename), debug)
}

const hashString = (input, debug) => {
    let lengths = toHex(input)
    let list = [...Array(max).keys()]
    let pos = 0
    let skip = 0

    for (let i = 0; i < rounds; i++) {
        lengths.forEach(len => {
            let end = pos + len

            let copy = list.slice(pos, end)
            if (end > list.length)
                copy = copy.concat(list.slice(0, end % list.length))

            copy.reverse().forEach((e, k) => {
                let repl = (pos + k) % list.length
                list[repl] = e
            })

            pos = (pos + len + skip++) % list.length
        })


        if (debug)
            log(list, pos) 
    }

    let chunked = []
    for (let i = 0; i < max / 16; i++) {
        let begin = i * 16
        let end = begin + 16
        let slice = list.slice(begin,end)
        chunked.push(slice)
    }

    let dense = chunked.map(e => {
        let xor = e.reduce((r, v) => r ^= v, 0)
        let hex = xor.toString(16)
        return (hex.length === 1) ? '0' + hex : hex;
    }).join('')
    return dense
}

module.exports = {
    hashString: hashString,
    hashFile: hashFile,
    _read: read,
    _toHex: toHex
}
