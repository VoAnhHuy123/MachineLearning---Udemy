var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const predict = require('./index');

const fs = require('fs');
app.use(express.static('./ContactFrom_v4'));
app.use(bodyParser.json());
app.get('/', function(req, res){
  res.sendFile('./ContactFrom_v4/index.html', {root: __dirname})
    // fs.readFile('./ContactFrom_v4/index.html', (err, data) => {
    //     if(err){
    //       res.write("File not found!");
    //     }else{
    //       res.write(data);
    //     }
    //     res.end();
    // });
  
    // var username = req.params.username;
   
    // res.send(username);
  });
  app.post('/predict',urlencodedParser, function(req, res){
      
      var a = req.body.height;
      var b = req.body.weight;
      var c = req.body.gender;
      console.log(a, b, c);
      // console.log(a);
      var f = predict(c, a, b);
      res.send(f);
    
  })
 
app.listen(3000);