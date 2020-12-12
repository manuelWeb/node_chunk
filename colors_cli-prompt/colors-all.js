'use strict';

const colors = [30, 31, 32, 33, 34, 35, 36, 37]
const brightColors = [90, 91, 92, 93, 94, 95, 96, 97]
  ;

[...colors, ...brightColors].forEach(code => {
  const color = `\x1b[${code}m`
  const bgColor = `\x1b[30;${code + 10}m`
  const reset = '\x1b[0m'

  console.log(`${color}Hello ${bgColor}world!${reset}`);
});