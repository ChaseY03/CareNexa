/*const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors);

 */
const mysql = require('mysql');
const express = require("express");
const cors = require("cors");

const con = mysql.createConnection({
    user: 'carenexa',
    password: 'carenexa2024',
    database: 'carenexa',
    host: '35.224.98.153'
    //socketPath: '/cloudsql/carenexa:us-central1:carenexa-db'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});