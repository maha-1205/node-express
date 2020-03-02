
const db = require('./promise');
module.exports = {
    showproducts: async () => {
        const connection = await db.getConnection();
        const prod = await connection.query(`SELECT *FROM products;`);
        if (prod) {
            console.log("result shown :", prod);
        }
        connection.close();
        return prod;
    },
    insertitems: async (productid, productname, productDescription) => {
        const connection = await db.getConnection();
        const query = await connection.query(`INSERT INTO products VALUES(${productid},${productname},${productDescription});`);
        if (query) {
            console.log("result shown :", query);
        }
        connection.close();
        return query;
    },



    insertorders: async (orderid, userid, ordersummary, price) => {
        const connection = await db.getConnection();
        let data = await connection.query(`INSERT INTO orders VALUES(${orderid},${userid},${ordersummary},${price});`);
        if (data) {
            console.log("result shown :", data);
        }
        connection.close();
        return data;

    },

    orderslist: async () => {
        const connection = await db.getConnection();
        let query = await connection.query("SELECT * FROM orders;");
        if (query) {
            console.log("result shown :", query);
        }
        connection.close();
        return query;
    },



    userdetails: async (userid, userEmail) => {
        const connection = await db.getConnection();
        let query = await connection.query(`INSERT INTO users VALUES(${userid},${userEmail});`);

        if (query) {
            console.log("result shown :", query);

        }
        connection.close();
        return query;
    },
    showuserdetails: async () => {
        try {
            const connection = await db.getConnection();
            let query = await connection.query("SELECT * FROM users;");
            if (query) {
                console.log("result shown :", query);
            }
            connection.close();
            return query;
        }
        catch (err) {
            console.log("There is an error occured: ", err);

        }
    }
}


