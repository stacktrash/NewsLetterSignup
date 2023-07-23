//npm i body-parser express request
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require('https');
const app = express();

app.use(express.static("public")); //tells server to go to public directory and use css and images.
//without this, our css and images aren't put on the website
app.use(bodyParser.urlencoded({extended: true}));




app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html")


});
app.post("/", function(req, res){
  const firstName = req.body.Fname;
  const lastName = req.body.Lname;
  const email = req.body.email;
  console.log("help");
  console.log(firstName, lastName, email);

  const data = {
    members:[
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }
  const url = '' //Insert mail chimp api. More info at https://mailchimp.com/developer/marketing/docs/fundamentals/
  const jsonData = JSON.stringify(data); //takes data from data and turns it into a json string

  const options = {
    method: "POST",
    auth: ""; //input your own auth
  }

  const request = https.request(url, options, function(response){ //request data from mailchimp server, recieve response
    //console.log(JSON.parse(data).errors[0].error);
    if (response.statusCode === 200){
      //res.send("sucessfully subscribed!!"); //if email subscribed sucessfully, send the following message
      res.sendFile(__dirname + "/success.html")
    }
    else {//res.send("there was an error with signup, please try again")
      res.sendFile(__dirname + "/failure.html")
    }
    response.on("data", function(data){ //checks data from response
      console.log(JSON.parse(data))
    })

    app.post("/failure", function(req, res){
      res.redirect("/");
    })
  })
  request.write(jsonData);     //https://stackoverflow.com/questions/40537749/how-do-i-make-a-https-post-in-node-js-without-any-third-party-module
  //comment out request.write to test failure
  request.end();
})
app.listen(process.env.PORT || 3000, function(){
  console.log("server is running on port 3000");
})
