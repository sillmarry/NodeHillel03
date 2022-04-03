
const { info, warn, error } = require('./utils/logger')
const { seek, fileSeekerEventEmitter } = require('./utils/FileSeeker')
const logEvent = require('./utils/EventsLogger')
const EventEmitter = require('events')
const yargs = require('yargs')
const process = require('process')
const path = require('path')
const args = yargs(process.argv).argv
let verbose = false

verbose = args.verbose

if(!args.dir || !args.target) {
  error('--dir and --target are required')
  if(verbose) logEvent('error', '--dir and --target are required')
  process.exit(1)
}
else {
  seek(args.target, args.dir)
}

fileSeekerEventEmitter.addListener('success', targetPath => {
  info('Target has been found by path: ', targetPath)
  if(verbose) logEvent('success', 'Target has been found by path: ' + targetPath)
})

fileSeekerEventEmitter.addListener('fail', message => {
  error(message)
  if(verbose) logEvent('fail', message)
})
