#!/usr/bin/env node
var pathApply = require('./pathApply.js');
var {render, exec} = require('./bolt_util.js');

// re-render all
pathApply('./pages', render);
exec('cp -r ./assets ./site/assets')
