import Layout from "./Layout";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Booking() {


    const [bookingID, setbookingID] = useState({
        bookingID : ''
    })
    const [location, setlocation] = useState({
        location : ''
    })
    const [time, settime] = useState({
        time : ''
    })
    const [StaffemployeeID, setStaffemployeeID] = useState({
        StaffemployeeID : ''
    })
    const [patientBooking, setpatientBooking] = useState({
        patientBooking : ''
    })
    const [bookings, setBookings] = useState([]);

    const takeInput = (e) => {
        setbookingID(prev => ({...prev,[e.target.name]: [e.target.value]}))
        setlocation(prev => ({...prev,[e.target.name]: [e.target.value]}))
        settime(prev => ({...prev,[e.target.name]: [e.target.value]}))
        setStaffemployeeID(prev => ({...prev,[e.target.name]: [e.target.value]}))
        setpatientBooking(prev => ({...prev,[e.target.name]: [e.target.value]}))
    }

    const findBookingID = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindBookingID', bookingID)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setBookings(res.data.data);  // Set the state here
                        console.log(res.data);
                    }
                    else {
                        setBookings([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching patients:', error);

        }
    };

    const findLocation = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindLocation', location)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setBookings(res.data.data);  // Set the state here
                        console.log(res.data);
                    }
                    else {
                        setBookings([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching patients:', error);

        }
    };

    const findTime = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindTime', time)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setBookings(res.data.data);  // Set the state here
                        console.log(res.data);
                    }
                    else {
                        setBookings([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching patients:', error);

        }
    };

    const findStaffemployeeID = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindStaffemployeeID', StaffemployeeID)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setBookings(res.data.data);  // Set the state here
                        console.log(res.data);
                    }
                    else {
                        setBookings([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    const findpatientBooking = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindpatientBooking', patientBooking)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setBookings(res.data.data);  // Set the state here
                        console.log(res.data);
                    }
                    else {
                        setBookings([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching patients:', error);

        }
    };

    const findAllBookings = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3006/FindAllBookings')
            .then(response => {
                setBookings(response.data);
                console.log("loading data")
            })
            .catch(error => {
                console.error('Error fetching appointments:', error);
            });
    }

    return (<>
            <head>
                <title>CareNexa Bookings</title>
            </head>
            <Layout/>

            <main>
                <h1>BOOKINGS</h1>
                <form onSubmit={findAllBookings}>
                    <button type='submit' className={"search-button"}>Find all</button>
                </form>

                <form action="" onSubmit={findBookingID}>
                    <div>
                        <input type='textbox' placeholder='bookingID' name='bookingID' onChange={takeInput} autoComplete='off' required />
                        <button type='Search' className={"search-button"}>Search</button>
                    </div>
                </form>

                <form action="" onSubmit={findLocation}>
                    <div>
                        <input type='textbox' placeholder='department' name='location' onChange={takeInput} autoComplete='off' required />
                        <button type='Search' className={"search-button"}>Search</button>
                    </div>
                </form>

                <form action="" onSubmit={findTime}>
                    <div>
                        <input type='textbox' placeholder='time' name='time' onChange={takeInput} autoComplete='off' required />
                        <button type='Search' className={"search-button"}>Search</button>
                    </div>
                </form>

                <form action="" onSubmit={findStaffemployeeID}>
                    <div>
                        <input type='textbox' placeholder='employee ID#' name='StaffemployeeID' onChange={takeInput} autoComplete='off' required />
                        <button type='Search' className={"search-button"}>Search</button>
                    </div>
                </form>

                <form action="" onSubmit={findpatientBooking}>
                    <div>
                        <input type='textbox' placeholder='booking ref#' name='patientBooking' onChange={takeInput} autoComplete='off' required />
                        <button type='Search' className={"search-button"}>Search</button>
                    </div>
                </form>

                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Department</th>
                        <th>Time</th>
                        <th>Staff ID</th>
                        <th>Patient Booking</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(bookings) && bookings.length > 0 ? (
                        bookings.map((Booking) => (
                            <tr key={Booking.bookingID}>
                                <td>{Booking.bookingID}</td>
                                <td>{Booking.location}</td>
                                <td>{Booking.time}</td>
                                <td>{Booking.StaffemployeeID}</td>
                                <td>{Booking.patientBooking}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No bookings found</td>
                        </tr>
                    )}
                    </tbody>
                </table>

            </main>
        </>
    )
};

export default Booking