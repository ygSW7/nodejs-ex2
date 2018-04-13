var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var types = [
  {
    title: "standalone_fileH",
    description: "Execute C++ executable as a child process, using an input and output file.  Based on /cpp/standalone_flex_fileH"
  },
  ];


types.forEach(function (type) {
    app.use('/'+type.title, require('./routes/' + type.title));
});

app.get('/', function (req, res) {
  res.render('index', { routes: types});
});

/*
var router = express.Router();

var express = require('express');
var path = require('path')
var router = express.Router();
var temp = require('temp');
var fs = require('fs');
*/
/*
//var type = path.basename(__filename).slice(0, -3)
var http = require('http');
 
var server = http.createServer(function(req, res) {  
  res.writeHead(200, {'Content-Type': 'text/html'
  });
  res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>C++ and node.js</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h1>C++ Web App using Node.js NAN </h1>\n' + 
    '<div id="content"><p>Rain Fall Stat Data </p><ul><li>"average" </li><li>"mean"</li><li>"median"</li><li>"standard_deviation"</li></ul></div>' + 
    '\n\n');
  

  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
});

router.get('/', function(req, res) {
  res.render('primes', {target:type});
});

router.post('/', function(req, res) {
    var exec = require('child_process').exec;
    var execFile = require('child_process').execFile
    var program = "../cpp/standalone_flex_fileH/build/Release/standalone_flex_fileH";
    var under = parseInt(req.body.under);

//temp.mkdir('node_example', function(err, dirPath) {
    //  var inputPath = path.join(__dirPath, 'input.txt');
    //  var outputPath = path.join(__dirPath, 'output.txt');
        
        var inputPath = path.join(__dirname, 'input.csv');
        var outputPath = path.join(__dirname, 'output.csv');
        console.log("inputPath " + inputPath);
 	console.log("outputPath " + outputPath);

    //  fs.writeFile(inputPath, under, function(err) {
    //    if (err) throw err;
        var primes = execFile(program, [inputPath, outputPath], function(error) {
            if (error ) throw error;
            fs.readFile(outputPath, function(err, data) {
              if (err) throw err;
              var primes = data.toString().split('\n').slice(0, -3)
                              .map(function (line) {
                                  return parseInt(line);
                              });
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                results: primes
              }));

              //exec('rm -m ' + dirPath, function(error) {             
              //exec('del ' + __dirname, function(error) {

              //  if (error) throw error;
              //  console.log("Removed " + dirPath);
             // })
          });
        });
      //});
   // });
});


module.exports = router;
*/

var server = app.listen(3000, function () {
  console.log('Web server listing at http://localhost:%s', server.address().port);
});
