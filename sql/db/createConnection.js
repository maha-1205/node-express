const mysql = require('mysql');
const config = {

    host: 'localhost',
    user: 'root',
    password: 'Vijay5krishn@',
    database: 'dominos',
    connectionLimit: 20

}
var con = mysql.createPool(config);

module.exports = {
    connection: con,
}