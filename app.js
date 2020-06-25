const express = require ("express");
const bodyParser = require ("body-parser");
const ejs = require ("ejs");

const app = express();
app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use( express.static( "public" ) );

function wedShow(req,res){
  res.render("wedFrame");
}

app.get("/",function(req,res){
  res.render("home");
})

app.get("/home",function(req,res){
  res.render("home");
})

app.get("/contactUs",function(req,res){
  res.render("contactUs");
})

app.get("/wedFrame",function(req,res){
  res.render("wedFrame");
})

app.get("/portraitFrame",function(req,res){
  res.render("portraitFrame");
})

app.get("/preWedFrame",function(req,res){
  res.render("preWedFrame");
})

app.get("/newPhotoFrame",function(req,res){
  res.render("newPhotoFrame");
})

app.get("/babyFrame",function(req,res){
  res.render("babyFrame");
})

app.get("/theTeam",function(req,res){
  res.render("theTeam");
})

app.get("/aboutUs",function(req,res){
  res.render("aboutUs");
})

app.listen(process.env.PORT || 3000,function(){
  console.log("server is running on port 3000");
});
