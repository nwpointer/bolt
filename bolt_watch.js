#!/usr/bin/env node
var {render, exec} = require('./bolt_util.js');
var chokidar = require('chokidar');
var process = require('process');

chokidar.watch('./pages').on('change', (path) => {
  console.log('exec: ', path);
  exec(`./bolt_file.js ${path}`)
});

process.on('SIGINT', function () {
    console.log('\nexit');
    process.exit(0)
});
