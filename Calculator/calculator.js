const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, function(){
  console.log("Server is runing on port 3000");
});

app.use(bodyParser.urlencoded({extended : true}));
//bodyParser를 이용할 때 마다 requie와 함께 꼭 써야 하는 부분

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2

  res.send("The result of the calculation is " + result +".");
});
