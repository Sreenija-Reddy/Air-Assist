const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',  // Change this if your DB is hosted elsewhere
    user: 'root',  // Replace with your MySQL username
    password: 'Sreenija24',  // Replace with your MySQL password
    database: 'air_assist_db',  // Replace with your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
