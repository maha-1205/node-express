const express = require('express');
const mysql = require('mysql');
const bodyparse = require('body-parser');
var app = express();
app.use(bodyparse.json());

var connection = mysql.createConnection({

    host:'localhost',
    user: 'root',
    password: 'Vijay5krishn@',
    database :'test'
});

connection.connect(function(err) {
if(err){
    console.log('Error'+ JSON.stringify(err,undefined,2));
}
else{
    console.log('Connected');
}
});
app.get('/create', (req,res)=> {

    var data = "INSERT INTO sailors( sid, sname, rating, age ) VALUES ( 10, 'Dustin', 7, 45.0 ) "
    connection.query(data,function(err) {
        if(err){
            throw err;
        }
        else{
        console.log('record inserted');
        
        }
    });
});

    app.get('/see',(req,res) => {

        connection.query("SELECT * FROM sailors",function(err ,result, fields) {

            if(err){
            throw err;
            }
            else{
                console.log(result);
            }

        });
    });
app.listen(3000 );

