
const chalk = require('chalk')

function info(...args) {
  console.log('INFO: ', chalk.green(...args))
}

function warn(...args) {
  console.log('WARNING: ', chalk.yellow(...args))
}

function error(...args) {
  console.log('ERROR: ', chalk.red(...args))
}

module.exports = {
  info,
  warn,
  error
}
