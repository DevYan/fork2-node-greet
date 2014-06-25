greet = require '../lib/inde.js'
parseArgs = require 'minimist'

modules.exports = ->
  argv = parseArgs process.argv.slice 2
  console.log greet argv._,argv.drunk
