import Layout from "./Layout";
import React, {useState} from "react";
import axios from 'axios';

function Settings() {

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

    const addNewBillingEntry = async (e) => {
        e.preventDefault();

        // Assuming you have some data for the new billing entry
        const newBillingData = {
            location: '3',
            time: '9999',
            StaffemployeeID: '2',
            patientBooking: '2'
        };

        try {
            // Make a POST request to the endpoint for creating new billing entries
            const response = await axios.post('http://localhost:3006/CreateBillingEntry', newBillingData);

            // Assuming the server returns the created billing entry
            const createdBillingEntry = response.data;

            // You can do something with the createdBillingEntry if needed

            console.log("New billing entry added successfully");
        } catch (error) {
            console.error('Error adding new billing entry:', error);
        }
    };


    return (<>
        <Layout/>

        <head>
            <title>CareNexa Settings</title>
        </head>

        <main>
            <h1>SETTINGS</h1>

            <form action="" onSubmit={addNewBillingEntry}>
                <div>
                    <input type='textbox' placeholder='department' name='patientBilling' onChange={takeInput} autoComplete='off'/>
                    <input type='textbox' placeholder='time' name='patientBilling' onChange={takeInput} autoComplete='off'/>
                    <input type='textbox' placeholder='employee ID#' name='patientBilling' onChange={takeInput} autoComplete='off'/>
                    <input type='textbox' placeholder='booking ref#' name='patientBilling' onChange={takeInput} autoComplete='off'/>

                    <button type='Submit' className={"search-button"}>Search</button>
                </div>
            </form>
        </main>
    </>)
};

export default Settings