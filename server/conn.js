/*const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors);
*/

const mysql = require('mysql');
const express = require("express");
const cors = require("cors");
const Console = require("console");

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());

const conn = mysql.createConnection({
    user: 'carenexa',
    password: 'carenexa2024',
    database: 'carenexa',
    host: '35.224.98.153',
    //socketPath: "/cloudsql/carenexa:us-central1:carenexa-db"
});

const pool = mysql.createPool({
    user: 'carenexa',
    password: 'carenexa2024',
    database: 'carenexa',
    host: '35.224.98.153',
    port: '3306',
});


app.post('/Staff', (req, res)=>{
    console.log("Finding login info")
    const sql = "SELECT * FROM Staff WHERE `employeeID` = ? AND `lastName` = ?";
    pool.query(sql,[req.body.employeeID, req.body.lastName],(err, data) => {
        if (err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        }
        else {
            return res.json("Fail");
        }

    })
})

app.post('/FindPatient', (req, res) => {
    console.log("Finding patient forenames");
    const sql = "SELECT * FROM `Patient` WHERE `forename` = ?";
    const values = [req.body.forename];

    pool.query(sql, values, (err, data) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (data.length > 0) {
            console.log("Patients fetched successfully");
            return res.status(200).json(data); // Send patient data
        } else {
            return res.status(404).json({ message: "Patient not found" });
        }
    });
});


/* auto load bookings
app.get('/Booking', (req, res) => {
    console.log("auto Finding booking info");
    const sql = "SELECT * FROM `Booking`";
    pool.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching bookings:", err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log("Bookings fetched successfully");
            res.status(200).json(data);
        }
    })
    });*/

app.post('/Booking', (req, res) => {
    console.log("Finding booking info");
    const sql = "SELECT * FROM `Booking`";
    pool.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching bookings:", err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log("Bookings fetched successfully");
            res.status(200).json(data);
        }
    });
})

app.post('/Billing', (req, res) => {
    console.log("Finding billing info");
    const sql = "SELECT * FROM `Billing`";
    pool.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching bookings:", err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log("Billing fetched successfully");
            res.status(200).json(data);
        }
    });
})

app.post('/Patient', (req, res) => {
    console.log("Finding patient info");
    const sql = "SELECT * FROM `Patient`";
    pool.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching bookings:", err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log("Patients fetched successfully");
            res.status(200).json(data);
        }
    });
})



app.set('port'|| 3006);
app.listen(3006, () =>{
    console.log("Listening");

})

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})


/*
const mysql = require('promise-mysql');
const fs = require('fs');
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json);

// createTcpPool initializes a TCP connection pool for a Cloud SQL
// instance of MySQL.
const createTcpPool = async config => {
    // Note: Saving credentials in environment variables is convenient, but not
    // secure - consider a more secure solution such as
    // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
    // keep secrets safe.
    const dbConfig = {
        host: '35.224.98.153', // e.g. '127.0.0.1'
        port: '3306', // e.g. '3306'
        user: 'carenexa', // e.g. 'my-db-user'
        password: 'carenexa2024', // e.g. 'my-db-password'
        database: 'carenexa-db', // e.g. 'my-database'
        // ... Specify additional properties here.
        ...config,
    };
    app.set('port', process.env.PORT || 3006);
    app.listen(3006, () =>{
        console.log("Listening");

    })
    // Establish a connection to the database.
    return mysql.createPool(dbConfig);
};*/