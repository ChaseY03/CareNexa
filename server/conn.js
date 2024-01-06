const mysql = require('mysql');
const express = require("express");
const cors = require("cors");

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

//LOGIN SQL
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

//BOOKING SQL
const findBookingBy = (field, value, res) => {
    console.log(`Finding booking by ${field}`);
    const sql = `SELECT * FROM \`Booking\` WHERE \`${field}\` = ?`;
    const queryValue = [value];

    pool.query(sql, queryValue, (err, data) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (data.length > 0) {
            console.log("Bookings fetched successfully");
            return res.status(200).json({ status: "Found", data });
        }
        else {
            const message = `No bookings found with ${field}=${value}`;
            return res.json({status: "Not found", message});

        }
    });
};
app.post('/FindpatientBooking', (req, res) => {
    findBookingBy('patientBooking', req.body.patientBooking, res);
});
app.post('/FindStaffemployeeID', (req, res) => {
    findBookingBy('StaffemployeeID', req.body.StaffemployeeID, res);
});
app.post('/FindTime', (req, res) => {
    findBookingBy('time', req.body.time, res);
});
app.post('/FindLocation', (req, res) => {
    findBookingBy('location', req.body.location, res);
});
app.post('/FindBookingID', (req, res) => {
    findBookingBy('bookingID', req.body.bookingID, res);
});

app.post('/FindAllBookings', (req, res) => {
    console.log("Finding booking info");
    const sql = "SELECT * FROM `Booking`";
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

//PATIENT SQL
const findPatientBy = (field, value, res) => {
    console.log(`Finding patient by ${field}`);
    const sql = `SELECT * FROM \`Patient\` WHERE \`${field}\` = ?`;
    const queryValue = [value];

    pool.query(sql, queryValue, (err, data) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (data.length > 0) {
            console.log("Patients fetched successfully");
            return res.status(200).json({ status: "Found", data });
        }
        else {
            const message = `No patient found with ${field}=${value}`;
            return res.json({status: "Not found", message});

        }
    });
};
app.post('/FindPatient', (req, res) => {
    findPatientBy('patientID', req.body.patientID, res);
});
app.post('/FindPatientFore', (req, res) => {
    findPatientBy('forename', req.body.forename, res);
});
app.post('/FindPatientSur', (req, res) => {
    findPatientBy('surname', req.body.surname, res);
});
app.post('/FindPatientDOB', (req, res) => {
    findPatientBy('dateOfBirth', req.body.dateOfBirth, res);
});

app.post('/FindAllPatient', (req, res) => {
    console.log("Finding patient info");
    const sql = "SELECT * FROM `Patient`";
    pool.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching patients:", err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log("Patients fetched successfully");
            res.status(200).json(data);
        }
    });
})

//BILLING SQL
const findBillingsBy = (field, value, res) => {
    console.log(`Finding billings by ${field}`);
    const sql = `SELECT * FROM \`Billing\` WHERE \`${field}\` = ?`;
    const queryValue = [value];

    pool.query(sql, queryValue, (err, data) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (data.length > 0) {
            console.log("Bookings fetched successfully");
            return res.status(200).json({ status: "Found", data });
        }
        else {
            const message = `No bookings found with ${field}=${value}`;
            return res.json({status: "Not found", message});

        }
    });
};
app.post('/FindtreatmentID', (req, res) => {
    findBillingsBy('treatmentID', req.body.treatmentID, res);
});
app.post('/Findcost', (req, res) => {
    findBillingsBy('cost', req.body.cost, res);
});
app.post('/FindpayStatus', (req, res) => {
    findBillingsBy('payStatus', req.body.payStatus, res);
});
app.post('/FindtreatmentType', (req, res) => {
    findBillingsBy('treatmentType', req.body.treatmentType, res);
});
app.post('/FindpatientBilling', (req, res) => {
    findBillingsBy('patientBilling', req.body.patientBilling, res);
});

app.post('/FindAllBillings', (req, res) => {
    console.log("Finding billing info");
    const sql = "SELECT * FROM `Billing`";
    pool.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching billings:", err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log("Bills fetched successfully");
            res.status(200).json(data);
        }
    });
})

//Server Listening Log
app.set('port'|| 3006);
app.listen(3006, () =>{
    console.log("Listening");
})

//Server Connected Log
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