var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "Maha Lakshmi",
    password : "123456789"
});

con.connect(function(err) {
if(err)
throw err;
console.log("Connected!");
con.query("Create database",function(err,result) {
if(err)
throw err;
console.log("Database created");

});


});