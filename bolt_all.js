#!/usr/bin/env node
var pathApply = require('./pathApply.js');
var render = require('./bolt_util.js').render;

// re-render all
pathApply('./pages', render);
