const http = require('http');

const fs = require('fs');
const url = require('url');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});



const hostname = '127.0.0.1';
const port = 3000;
app.listen(3000);
const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');

  fs.readFile('./healthy.html', (err, data) => {
      if(err){
        res.write("File not found!");
      }else{
        res.write(data);
      }
      res.end();
  });
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);


  
  
});
