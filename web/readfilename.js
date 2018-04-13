var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// `bodyParser` includes `multipart`
app.use(bodyParser.raw());
 
var fs = require('fs');

var http = require('http'),  //;

    util = require('util'),
    os = require('os');

var server = http.createServer(function(req, res) {  
  res.writeHead(200, {'Content-Type': 'text/html'
  });
  //res.write('<!doctype html>\n<html lang="en">\n' + 
  //  '\n<meta charset="utf-8">\n<title>C++ and node.js</title>\n' + 
  //  '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
  //  '\n\n<h1>C++ Web App using Node.js </h1>\n' + 
  //  '<div id="content"><p>Input Data File </p><ul><li>"average" </li></ul></div>' + 
  //  '\n\n');
 
   res.end(
      '<form action="/upload" enctype="multipart/form-data" method="post">'+
      '<input type="text" name="title"><br>'+
      '<input type="file" name="upload" multiple="multiple"><br>'+
      '<input type="submit" value="Upload">'+
      '</form>'
    );

  //res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  //res.write('<input type="file" name="upload"><br>');
  //res.write('<input type="submit">');
  //res.write('</form>');
  
  console.log('1');
  fs.rename('input.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });

  //var srcFile = "upload";
  //var destFile = "input.csv";
 
 fs.writeFileSync('input.txt', fs.readFileSync('upload'));
  
//var copyFileSync = function(upload, 'input.csv', encoding) {
  //  var content = fs.readFileSync(upload, encoding);
  // fs.writeFileSync('input.csv', content, encoding);
  //};

  app.get('/', function(req, res, next){ //app.post
  // assuming <input type="file" name="upload">
 console.log('2');

    var path = req.files.upload.path;
console.log('3');
    //var name = req.files.upload.name;
    //console.log(path);
    console.log("name");

  // copy...
    next()
  });
  
  //var fs = require('fs');
  //var json = require('json');
  readme = fs.readFile('name','utf8',function(err, data){
//console.log(data)
    writeme = fs.writeFile('input.txt', data);
    
  });
});


var port = process.env.PORT || 5000;
server.listen(port, function() {
  console.log("Listening on " + port);
});

//server.listen(3000, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:3000');