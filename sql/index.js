const express = require('express');
var app = express();
const db = require('./db/dboper');


app.post('/items', (req, res) => {
    let productid = req.body.products.productID;
    let productname = req.body.products.productName;
    let productDescription = req.body.products.productDescription;
    let result = db.insertItems(productid, productname, productDescription);
    if (result) {
        res.json({ "RESULT": result });
    }
    else {
        res.json({
            "ERROR": "There is an error occured while fetching data from the database.",
        });

    }
});


app.get('/show', async (req, res) => {
    let result = await db.showproducts();
    if (result) {
        res.json({ "RESULT": result });
    }
    else {
        res.json({
            "ERROR": "There is an error occured while fetching data from the database.",
        });


    }
});
app.post('/orders', async (req, res) => {
    let orderid = req.body.orders.orderID;
    let userid = req.body.orders.userid;
    let ordersummary = req.body.orders.ordersummary;
    let price = req.body.orders.price;
    let insert = await db.insertorders(orderid, userid, ordersummary, price);
    if (insert) {
        res.json({ "result": insert });
    }
    else {
        res.json({ "err": JSON.stringify(err) });
    }
});




app.get('/showorders', async (req, res) => {
    let result = await db.orderslist();
    if (result) {
        res.json({ "RESULT": result });
    }
    else {
        res.json({
            "ERROR": "There is an error occured while fetching data from the database.",
            "ERROR_DESCRIPTION": JSON.stringify(err.body)
        });

    }
});

app.post('/user', async (req, res) => {
    let userid = req.body.users.userID;
    let useremail = req.body.users.userEmail;
    let result = await db.userdetails(userid, useremail)
    if (result) {
        res.json({ "RESULT": result });
    }
    else {
        res.json({
            "ERROR": "There is an error occured while fetching data from the database.",

        });

    }
});
app.get('/userdetails', async (req, res) => {
    let result = await db.showuserdetails();
    if (result) {
        res.json({ "RESULT": result });
    }
    else {
        res.json({
            "ERROR": "There is an error occured while fetching data from the database.",

        });
    }
});
app.listen(4000, () => {
    console.log('Server is running at port 4000');
})