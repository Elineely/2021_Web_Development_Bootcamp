const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.sendfile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const data = {
    members: [
      {
        email: email,
        status:"subscribrd",
        merge_fields :{
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);


  const url = "https://us6.api.mailchimp.com/3.0/lists" + listId ;

  const listId =  "0802067a02";

  const options = {
    method: "POST",
    auth: "leeny:ceb44d2550700b9984caf80426d079db-us6"
  }

  const request = https.request(url, options, function(response) {
    if (response.statusCode === 200 ){
      res.sendfile(__dirname + "/success.html");
    } else{
      res.sendfile(__dirname + "/failure.html");
    }

    response.on("data", function(data){
      console.log(JASON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});

app.post("/failure",function(req, res){
  res.redirect("/");
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});


//mailchimp API key
//ceb44d2550700b9984caf80426d079db-us6

//List Id
//0802067a02
