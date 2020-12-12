'use strict'
const parse = require('minimist')
const alias = { 'c': 'country' }

const args = parse(process.argv.slice(2), { alias })
console.log(args);