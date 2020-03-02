var express=require('express');
var app=express();

app.get('/add',function(req,res)
{
var num1 = parseInt(req.query.num1);
var num2 = parseInt(req.query.num2);
var sum = num1 + num2;
res.json({
    "sum":sum
});
});

app.get('/sub',function(req,res)
{
    var num1 = parseInt(req.query.num1);
var num2 = parseInt(req.query.num2);
    var sub = num1-num2;
    res.json({
       "sub":sub 
    });
});
app.get('/mul',function(req,res)
{
    var num1 = parseInt(req.query.num1);
var num2 = parseInt(req.query.num2);
    var mul = num1*num2;
    res.json({
       "mul":mul 
    });
});
app.get('/div',function(req,res)
{
    var num1 = parseInt(req.query.num1);
var num2 = parseInt(req.query.num2);
    var div = num1/num2;
    res.json({
       "div":div
    });
});





var server=app.listen(3000,function() {});