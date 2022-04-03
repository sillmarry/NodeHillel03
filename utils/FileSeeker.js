
const { info, warn, error } = require('./logger')
const fs = require('fs')
const path = require('path')
const EventEmitter = require('events')
const fileSeekerEventEmitter = new EventEmitter()

async function seek(target, dirPath) {
  await fs.readdir(dirPath, (err, files) => {
    if(err) {
      fileSeekerEventEmitter.emit('fail', err)
      process.exit(1)
    }
    else {
      isTargetFound = false
      files.forEach(file => {
        if(file === target) {
          isTargetFound = true
          fileSeekerEventEmitter.emit('success', path.join(dirPath, target))
        }
      })
      if(!isTargetFound) fileSeekerEventEmitter.emit('fail', 'Target has not been found')
    }
  })
}

module.exports = {
  seek,
  fileSeekerEventEmitter
}
