'use strict'

const _ = require('lodash')

module.exports = data => {
    let extract = []
    let result = []
    data.forEach(e => {
        let [, name, weight, children] = e.match(/^(.+?) \((\d+?)\)(?: \-> (.*))?$/)
        if (children) children = children.split(', ')
        else children = null
        extract.push({
            name: name,
            weight: weight,
            children: children
        })
    })
    extract.forEach(e => {
        let found = _.find(extract, { children: [e.name] })
        if (found) {
            if (!found.nodes)
                found.nodes = []
            found.nodes.push(e)
            if (!_.includes(result, found)) {
                result.push(found)
            }
        }
    })
    let root = null
    result.forEach(e => {
        delete e.children
        if (!_.find(result, { nodes: [e] })) {
            root = e
        }
    })
    return root.name
}
