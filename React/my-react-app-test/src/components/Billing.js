import Layout from "./Layout";
import React, {useState} from "react";
import axios from "axios";

function Billing() {
    const [treatmentID, settreatmentID] = useState({
        treatmentID : ''
    })
    const [cost, setcost] = useState({
        cost : ''
    })
    const [payStatus, setpayStatus] = useState({
        payStatus : ''
    })
    const [treatmentType, settreatmentType] = useState({
        treatmentType : ''
    })
    const [patientBilling, setpatientBilling] = useState({
        patientBilling : ''
    });
    const [bills, setBills] = useState([]);

    const takeInput = (e) => {
        settreatmentID(prev => ({...prev,[e.target.name]: [e.target.value]}))
        setcost(prev => ({...prev,[e.target.name]: [e.target.value]}))
        setpayStatus(prev => ({...prev,[e.target.name]: [e.target.value]}))
        settreatmentType(prev => ({...prev,[e.target.name]: [e.target.value]}))
        setpatientBilling(prev => ({...prev,[e.target.name]: [e.target.value]}))
    }

    const findtreatmentID = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindtreatmentID', treatmentID)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setBills(res.data.data);  // Set the state here
                        console.log(res.data);
                    }
                    else {
                        setBills([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching treatment ID:', error);

        }
    };

    const findcost = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/Findcost', cost)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setBills(res.data.data);  // Set the state here
                        console.log(res.data);
                    }
                    else {
                        setBills([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching cost:', error);

        }
    };

    const findpayStatus = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindpayStatus', payStatus)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setBills(res.data.data);  // Set the state here
                        console.log(res.data);
                    }
                    else {
                        setBills([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching pay status:', error);

        }
    };

    const findtreatmentType = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindtreatmentType', treatmentType)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setBills(res.data.data);  // Set the state here
                        console.log(res.data);
                    }
                    else {
                        setBills([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching treatment type:', error);

        }
    };

    const findpatientBilling = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindpatientBilling', patientBilling)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setBills(res.data.data);  // Set the state here
                        console.log(res.data);
                    }
                    else {
                        setBills([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching patient bills:', error);

        }
    };

    const FindallBillings = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3006/FindAllBillings')
            .then(response => {
                setBills(response.data);
                console.log("loading data")
            })
            .catch(error => {
                console.error('Error fetching Bills:', error);
            });
    }

    return (<>

        <Layout/>

        <head>
            <title>CareNexa Billing</title>
        </head>

        <main>
            <h1>BILLING</h1>

            <form onSubmit={FindallBillings}>
                <button type='submit' className={"search-button"}>Find all</button>
            </form>

            <form action="" onSubmit={findtreatmentID}>
                <div>
                    <input type='textbox' placeholder='treatment id' name='treatmentID' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <form action="" onSubmit={findcost}>
                <div>
                    <input type='textbox' placeholder='cost' name='cost' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <form action="" onSubmit={findpayStatus}>
                <div>
                    <input type='textbox' placeholder='pay status (1/0)' name='payStatus' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <form action="" onSubmit={findtreatmentType}>
                <div>
                    <input type='textbox' placeholder='treatment type' name='treatmentType' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <form action="" onSubmit={findpatientBilling}>
                <div>
                    <input type='textbox' placeholder='patient number' name='patientBilling' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <ul>
                {Array.isArray(bills) && bills.length > 0 ? (
                    bills.map((Billing) => (
                        <li
                            key={`${Billing.treatmentID}-${Billing.cost}-${Billing.payStatus}-${Billing.treatmentType}-${Billing.patientBilling}`}
                        >
                            {Billing.treatmentID} - {Billing.cost} - {Billing.payStatus} - {Billing.treatmentType} - {Billing.patientBilling}
                        </li>
                    ))
                ) : (
                    <li>No Bills found</li>
                )}
            </ul>

        </main>
    </>)
};

export default Billing