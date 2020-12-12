'use srtict'

let counter = 0

const display = (count) => {
  const progress = '•'.repeat(count).padEnd(3, '.')
  const sun = count === 3 ? '☀' : ''

  console.log(`${progress} Une, deux, trois ${sun}`);
}

setInterval(() => {
  counter++
  display(counter)

  counter === 3 && process.exit(0)
}, 1000);