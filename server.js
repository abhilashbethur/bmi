const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
    res.sendFile(__dirname+ "/index.html");
})

app.get("/bmi", function(req,res){
    res.sendFile(__dirname+"/bmi.html");
})

app.post("/bmi",function(req,res){
    var we = Number(req.body.w);
    var he = Number(req.body.h);
    var bmi = we/(he*he);
    res.send("BMI " + bmi);    
})

app.post("/",function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1+n2;
    res.send("result " +result);
});

app.listen(3000, function(){
    console.log("3000 running");
});