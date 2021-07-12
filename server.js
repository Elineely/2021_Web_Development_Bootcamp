var express = require("express");
var app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello, there!</h1>");
  console.log(request);
});

app.get("/contact", function(request, response){
  response.send("<h2>Contact Me : fakemail.gmail.com </h2>");
});

app.get("/about", function(requset, response){
  response.send("<h1>Surin Lee</h1> </br> <i>a baby developer 👶🏻 👩🏻‍💻 </i>");
});

app.get("/hobby", function(requset, response){
  response.send("<h3> I Do love taking a walk with my doggie little sister.</h3>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
