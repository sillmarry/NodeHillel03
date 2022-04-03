
const fs = require('fs')
const path = require('path')

function logEvent(eventName, eventContent) {
  const UTCTime = new Date().toUTCString()
  const log = '[' + UTCTime + ']' + '[' + eventName + ']' + eventContent
  const newLineChar = require('os').EOL
  //fs.writeFile('./events.log', log, { flag: 'a+' }, err => { process.exit(1) })
  fs.appendFileSync('./events.log', `${newLineChar}${log}`)
}

module.exports = logEvent
