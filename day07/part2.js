'use strict'

const _ = require('lodash')

let uneven

const calcWeight = node => {
    let weight = 0
    let weights = []
    if (node.children) {
        node.children.forEach(e => {
            weight += calcWeight(e)
            weights.push(e.weight.single)
        })
    }
    weight += node.weight.single
    node.weight.combined = weight
    // if (_.uniq(weights).length !== 1) {
    //     uneven = node
    // }
    return weight
}

const getRegular = ([x, y, z]) => {
    if (x.weight.combined == y.weight.combined)
        return x.weight.combined
    else
        return z.weight.combined
}

const fixUnbalanced = node => {
    if (node.children) {
        let regular = getRegular(node.children)
        let different = node.children.findIndex(e => e.weight.combined !== regular)
        if (different === -1) {
            return null
        } else {
            let next = fixUnbalanced(node.children[different])
            if (next !== null)
                return next
            else {
                let difference = Math.abs(regular - node.children[different].weight.combined)
                let fixed = Math.abs(node.children[different].weight.single - difference)
                return fixed
            }
        }
    } else {
        return null
    }
}

module.exports = data => {
    let extract = data.map(e => {
        let [, name, weight, children] = e.match(/^(.+?) \((\d+?)\)(?: \-> (.*))?$/)
        if (children) children = children.split(', ')
        else children = null
        return {
            name: name,
            weight: {
                single: parseInt(weight),
            },
            children: children
        }
    })
    let root = null
    extract.forEach(e => {
        let found = _.find(extract, { children: [e.name] })
        if (found) {
            let i = _.indexOf(found.children, e.name)
            found.children[i] = e
        }
    })
    extract.forEach(e => {
        if (!_.find(extract, { children: [e] })) {
            root = e
        }
    })
    calcWeight(root)
    return fixUnbalanced(root)
}
