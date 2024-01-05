import Layout from "./Layout";
import React, {useState} from "react";
import axios from "axios";

function Billing() {

    const [billings, setBillings] = useState([]);

    const findBilling = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3006/Billing')
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
            <form onSubmit={findBilling}>
                <button type='submit' >Find billings</button>
            </form>
            <ul>
                {billings.map(billing => (
                    <li key={`${billing.treatmentID}-${billing.cost}-${billing.payStatus}`}>
                        {billing.treatmentID} - {billing.cost} - {billing.payStatus}
                    </li>
                ))}
            </ul>
        </main>
    </>)
};

export default Billing