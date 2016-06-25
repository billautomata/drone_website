var fs = require('fs')

var express = require('express')
var app = express()

app.use('/', express.static('./'))

var port = 8000

module.exports = app.listen(port, '0.0.0.0', function(){
  console.log(['listening',port].join(' '))
})
