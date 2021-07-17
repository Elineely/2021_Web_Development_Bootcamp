const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));


app.get("/", function(req, res){

  res.sendfile(__dirname + "/indexWeather.html");

});

app.post("/", function(req, res){
  var query = req.body.cityName;
  const appid = "abaf6b7affaaf80dc46cf5afd8ac3545";
  const units = "metric";

  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units="+ units +"&appid="+ appid ;

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){

      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log(temp);
      console.log(description);
      res.write("<h1>The temperature in "+ query +" is " + temp + " degrees Celcius now.</h1>");
      res.write("<p>The weather is currently " + description +".</p>");
      res.write("<img src = "+imageURL+">");
      res.send();
    });
  });
});




app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
