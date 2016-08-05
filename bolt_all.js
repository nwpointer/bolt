#!/usr/bin/env node
var pathApply = require('./pathApply.js');
var {render, exec} = require('./bolt_util.js');
var config = require('./config.js');

// re-render all
pathApply('./pages', render);
if(config.renderMode === 'toString'){
  console.log('we should webpack the stuffs you know and copy to site/');
}
exec('cp -r ./assets ./site/assets')
