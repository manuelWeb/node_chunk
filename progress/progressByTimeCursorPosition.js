'use srtict'
var emoji = require('node-emoji')

const sec = 10
let counter = 0

const display = (count) => {
  const progress = '●'.repeat(count).padEnd(sec, '+')
  const sun = count === sec ? '😅 soleil ☀︎' : ''
  const cmd = counter !== 1 ? '\x1b[1f' : ''

  // clear console
  process.stdout.write('\033c');
  console.log(`${cmd}${progress} Une, deux, trois ${sun}`);
}

setInterval(() => {
  // clear console
  process.stdout.write('\033c');
  counter++
  display(counter)

  counter === sec && process.exit(0)
}, 1000);