import Layout from "./Layout";
import React, {useState} from "react";
import axios from 'axios';

function AddData() {
    const [newdata, setnewData] = useState({
        location: '',
        time: '',
        StaffemployeeID: '',
        patientBooking: ''
    })


    const takeInput = (e) => {
        setnewData(prev => ({...prev,[e.target.name]: [e.target.value]}))
    }

    const addNewBookingEntry = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/CreateBookingEntry', newdata)
                .then (res => {
                    if(res.data.status === "Added"){
                        alert("New booking entry added");
                    }
                    else{
                        alert("Error adding, contact admin")
                    }
                })
        }
        catch (error) {
            console.error('Error adding new booking entry:', error);
        }
    };


    return (<>
        <Layout/>

        <head>
            <title>CareNexa Settings</title>
        </head>

        <main>
            <h1>Add data</h1>

            <form action="" onSubmit={addNewBookingEntry} className={"login-form"}>
                <div>
                    <input type='textbox' placeholder='department' name='location' onChange={takeInput} autoComplete='off' required/>
                    <input type='textbox' placeholder='time' name='time' onChange={takeInput} autoComplete='off' required/>
                    <input type='textbox' placeholder='employee ID#' name='StaffemployeeID' onChange={takeInput} autoComplete='off' required/>
                    <input type='textbox' placeholder='booking ref#' name='patientBooking' onChange={takeInput} autoComplete='off' required/>

                    <button type='Submit' className={"search-button"}>Add booking</button>
                </div>
            </form>
        </main>
    </>)
};

export default AddData