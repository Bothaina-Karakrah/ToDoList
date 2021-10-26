//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

//global variabls
//const array allow to push to array put not assign
const items=[];

app.get("/", function(req, res){
  //today
  let day = date.getDate();

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });

});
//end get


app.post("/", function(req, res){
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});
//end post


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
