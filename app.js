const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=[];

// var curday=today.getDay();
// var day="";


app.get("/",function(req,res){

  var today=new Date();
  var options={
    weekday:"long",
    month:"long",
    day:"numeric",
  };
  var day=today.toLocaleString("en-us",options);
  res.render("list",{kindofday:day,newListItem:items}) ;

});

app.post("/",function(req,res){
 item=req.body.newItem;
 items.push(item);
// console.log(item);
res.redirect("/")

});

app.listen(3000,function(){
  console.log("Server is up and running");
});
