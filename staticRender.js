require('babel-register')({
  presets: [
    'es2015',
    'stage-0',
    'react'
  ]
})

var React = require('react')
var ReactDOMServer = require('react-dom/server')
var path = require('path')

module.exports = function(i,o){
  // var page = require(i);
  console.log('hia')
  // console.log(page)
  // var html = ReactDOMServer.renderToStaticMarkup(page);
  // fs.writeFileSync(o,html,{encoding:'utf8'})
}
