// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname+ '/dist/my-app'));

// app.get('*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/my-app/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 3000);

var express = require('express');
var app     = express();
var path    = require('path');

// Angular
app.use(express.static(path.resolve(__dirname, '../dist'))); //1
app.get('*', function (req, res) { //2
  var indexFile = path.resolve(__dirname,'../dist/index.html');
  res.sendFile(indexFile);
});

// Server
var port = process.env.PORT || 3000; //3
app.listen(port, function(){
  console.log('listening on port:' + port);
});