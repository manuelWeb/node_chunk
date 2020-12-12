'use strict';

console.log(process.argv);
console.log(process.argv.slice(2));

// ➜ node minimist/argv.js hello --country FR --fast

/*
// log1, log2.
[
  '/Users/Manuel/.nvm/versions/node/v13.12.0/bin/node',
  '/Users/Manuel/Documents/sites/JStrain/node/args/minimist/argv.js',
  'hello',
  '--country',
  'FR',
  '--fast'
]
[ 'hello', '--country', 'FR', '--fast' ]
*/