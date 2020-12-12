'use strict'

const parse = require('minimist');
const args = parse(process.argv.slice(2));

console.log(args);

// → node display-args.js --country FR --fast
// → { _: [], country: 'FR', fast: true }