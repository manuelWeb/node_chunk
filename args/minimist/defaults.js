'use strict'
const parse = require('minimist');
const options = { default: { coutry: 'FR' } };

const args = parse(process.argv.slice(2), options);

console.log(args);

