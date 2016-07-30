var fs = require('fs');
var path= require('path');
var {isFile, isDirectory} = require('./bolt_util.js')

function pathApply(filePath, f){
  // Applies a function f recursivly to all files under that path
  fs.readdirSync(filePath).map(i=>{
    var target = path.join(filePath, i)
    if(isFile(target)){
      f(target)
    }
    else if(isDirectory(target)){
      pathApply(target, f)
    }
    else{
      throw new Error(target + ' not found')
    }
  })
}

module.exports = pathApply
