const express = require ("express");
const bodyParser = require ("body-parser");
const ejs = require ("ejs");

const app = express();
app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use( express.static( "public" ) );

app.get("/",function(req,res){
  res.render("home");
})

app.get("/home",function(req,res){
  res.render("home");
})

app.get("/contactUs",function(req,res){
  res.render("contactUs");
})

app.get("/theTeam",function(req,res){
  res.render("theTeam");
})

app.listen(process.env.PORT || 3000,function(){
  console.log("server is running on port 3000");
});
