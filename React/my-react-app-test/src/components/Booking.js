import Layout from "./Layout";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Booking() {

    const [bookings, setBookings] = useState([]);

    /*
    useEffect( (e) => {
        // Fetch appointments from your API
        e.preventDefault();
         axios.get('http://localhost:3006/Booking')
            .then(response => {
                setBookings(response.data);
            })
            .catch(error => {
                console.error('Error fetching appointments:', error);
            });
    }, []);
*/

    const findBooking = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3006/Booking')
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
            <form onSubmit={findBooking}>
                <button type='submit' >Find booking</button>
            </form>
            <ul>
                {bookings.map(booking => (
                    <li key={`${booking.patientBooking}-${booking.time}`}>
                        {booking.patientBooking} - {booking.time}
                    </li>

                ))}
            </ul>
        </main>
    </>)



};

export default Booking