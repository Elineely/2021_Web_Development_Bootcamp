const express = require("express");
const bodyParser = require("body-parser");

const app = express( );

app.use(bodyParser.urlencoded({extended : true}));

app.listen(3000,function(){
  console.log("Server is running on port 3000.");
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height) /100;

  var result = (weight / (height * height));

  console.log(result);
  res.send("Your BMI result is " + result);
});
