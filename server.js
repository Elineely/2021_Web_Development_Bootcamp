var express = require("express");
var app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello, there!</h1>");
  console.log(request);
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
