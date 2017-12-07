'use strict'

const _ = require('lodash')

let uneven

function calcWeight(node) {
    let weight = 0
    let weights = []
    if (node.nodes) {
        node.nodes.forEach(e => {
            weight += calcWeight(e)
            weights.push(e.weight)
        })
    }
    weight += parseInt(node.weight)
    node.combined = weight
    if (_.uniq(weights).length !== 1) {
        uneven = node
    }
    return weight
}

module.exports = function(data) {
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
    let root = null
    extract.forEach(e => {
        let found = _.find(extract, { children: [e.name] })
        if (found) {
            if (!found.nodes)
                found.nodes = []
            found.nodes.push(e)
        }
    })
    extract.forEach(e => {
        delete e.children
        if (!_.find(extract, { nodes: [e] })) {
            root = e
        }
    })
    calcWeight(root)
    console.log(JSON.stringify(root, null, 2))
    // let weights = []
    // root.nodes.forEach(e => {
    //     weights.push({ name: e.name, weight: calcWeight(e)})
    // })
    //console.log(JSON.stringify(weights, null, 4))
    console.log(uneven)
    return root.name
}
