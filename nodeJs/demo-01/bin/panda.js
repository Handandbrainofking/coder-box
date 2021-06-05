#!/usr/bin/env node

const program = require('commander')
const version = require('../package.json').version

program.version(version)
program
  .command('generate')
  .description('auto generate ...')
  .action(require('../lib/generate'))

  program.parse(process.argv)