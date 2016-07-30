#!/usr/bin/env node
var filePath = process.argv[2]
var pathApply = require('./pathApply.js');
var render = require('./bolt_util.js').render;

// re-render all
if(filePath){
  render(filePath);
} else {
  console.log('nah.')
}
