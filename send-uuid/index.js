var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var uuid = require("uuid");
var app = express();
const redis = require('redis')

const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);
// let config = require('./dbconfig')
// let connection = mysql.createConnection(config);

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected to mysql db');
// });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  var uuid = "null";
  res.render("index", {
    uuid: uuid
  });
});
app.get("/uuid/new", function(req, res) {
  var uuid_gen = uuid.v4();
  res.render("index", {
    uuid: uuid_gen
  });
});
app.get('/visits',function(req, res){
  client.get('visits',function(err,visits){
    if(err){
      console.log(err);
    }
    else {
      var post_number= visits;
      res.render('visit',{
        post_number: post_number
      })
    }
  })
});
app.post("/uuid/send", function(req, res) {
  var send_uuid = req.body.send_uuid;
  var DataBaseHandler = require("./DataBaseHandler");
  var dataBaseHandler = new DataBaseHandler();
  var connection = dataBaseHandler.createConnection();
  let sql =
    `INSERT INTO uuid_table(uuid)
           VALUES('` +
    send_uuid +
    `')`;

  // execute the insert statment
  connection.query(sql, (err, results, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.render('sent', {
        send_uuid:send_uuid
      })
      client.get('visits', (err, visits) => {
        client.set('visits', parseInt(visits) + 1)
    })
    }
  });
});
app.listen(8080);
console.log("send-uuid running on port 8080");
