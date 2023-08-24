const { createPool } = require('mysql2');
require("dotenv").config();

// Connection to database
const db = createPool ({
    host: process.env.db_host,
    port: process.env.db_post,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_name,
    multipleStatements: true,
    waitForConnections: true,
    queueLimit: 0,
    connectionLimit: 60
});

db.getConnection((error) => {
    if(error){
        console.log(error);
} else{
    console.log("Database connected successfully");

}
})

module.exports = db;