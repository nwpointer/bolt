var fs = require('fs');
var path= require('path');
var config = require('./config.js');

var exec = function(cmd){
  return require('child_process').exec(cmd, (err)=>{
    if(err) console.log(err);
  })
};

function isFile(target){
  return fs.statSync(target).isFile()
}

function isDirectory(target){
  return fs.statSync(target).isDirectory()
}

function changeFileType(filePath, newExt){
  var filePathObject = path.parse(filePath);
  var newPath = path.join(filePathObject.root, filePathObject.dir, filePathObject.name) + '.' + newExt;
  return newPath;
}

function destination(filePath){
  var dest = changeFileType(filePath, 'html').replace('pages', 'site')
  try {
    isDirectory(path.dirname('./'+dest))
  } catch (e) {
    var cmd = `mkdir -p ./${path.dirname(dest)}`;
    exec(cmd)
  }
  return dest
}

function render(filePath){
  var renderCmd = './node_modules/static-react/bin/static-react.js';
  var flag = config.renderMode === 'toString' ? '-h' : '';
  var cmd = `${renderCmd} ${flag} ./${filePath} > ./${destination(filePath)}`;
  console.log('exec:', cmd);
  exec(cmd);
}

module.exports = {
  exec,
  isFile,
  isDirectory,
  changeFileType,
  destination,
  render
}
