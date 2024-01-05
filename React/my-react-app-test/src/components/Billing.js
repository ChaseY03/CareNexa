import Layout from "./Layout";
import React, {useState} from "react";
import axios from "axios";

function Billing() {

    const [billings, setBillings] = useState([]);

    const findBooking = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3006/Billings')
            .then(response => {
                setBillings(response.data);
                console.log("loading data")
            })
            .catch(error => {
                console.error('Error fetching billings:', error);
            });
    }

    return (<>

        <Layout/>

        <head>
            <title>CareNexa Billing</title>
        </head>

        <main>
            <h1>BILLING</h1>
            <form onSubmit={findBooking}>
                <button type='submit' >Find booking</button>
            </form>
            <ul>
                {billings.map(billing => (
                    <li key={`${billing.patientBooking}-${billing.time}`}>
                        {billing.patientBooking} - {billing.time}
                    </li>
                ))}
            </ul>
        </main>
    </>)
};

export default Billing