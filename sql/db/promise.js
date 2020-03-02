const util = require('util');
const mysql = require('mysql');
const pool = require('./createConnection').connection;
pool.getConnection = util.promisify(pool.getConnection);
module.exports = {
    getConnection: async () => {
        const connection = await pool.getConnection();
        return {
            query(sql, args) {
                return util.promisify(connection.query)
                    .call(connection, sql, args);
            },
            close() {
                return util.promisify(connection.release).call(connection);
            }
        };
    }
}

