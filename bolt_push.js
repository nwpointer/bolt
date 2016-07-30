#!/usr/bin/env node
var exec = require('./bolt_util.js').exec;
var config = require('./config.js');

exec(`aws s3 cp --recursive site s3://${config.bucket}`)
