var express = require('express');
var path =  require('path');
var logger = require ('morgan')
var bodyParser = require('body-parser')
var redis = require ('redis')

var app = express()

app.set ('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(logger('dev'))
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){
    var uuid = 'null';
    res.render('index',{
      uuid:uuid
    })
})
app.post('/uuid/new',function(req, res){
  var uuid ="asgasglasgnkasklgnaskl";
  res.render('index',{
    uuid:uuid
  })
})
app.post('/uuid/send',function(req,res){
  var send_uuid = req.body.send_uuid;
  console.log(send_uuid);
  res.send('UUID SENT')
})

app.listen(3000);

console.log("send-uuid running on port 3000")
