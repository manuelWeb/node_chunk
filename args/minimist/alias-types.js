'use strict'
const parse = require('minimist')
const typedArg = {
  string: ['lang', 'env'],
  boolean: ['token'],
  alias: { l: 'lang', e: 'env', t: 'token' },
  default: { lang: ['FR', 'BF', 'BV', 'NL', 'DE', 'UK',], env: 'preprod' }
}

const args = parse(process.argv.slice(2), typedArg)
const env_ = args.e === 'preprod' || args.e === 'prod' ? args.e : `env is \x1b[32mprod or preprod\x1b[0m not \x1b[31m${args.e}\x1b[0m`


console.log(
  Array.isArray(args.l) ? 'choix langues: ' : 'choix langue: ',
  args.l, ' - choix environement: ', env_,
  ' - token: ', args.t);