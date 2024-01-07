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
                        setBills(res.data.data);
                    }
                    else {
                        setBills([]);
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
                        setBills(res.data.data);
                    }
                    else {
                        setBills([]);
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
                        setBills(res.data.data);
                    }
                    else {
                        setBills([]);
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
                        setBills(res.data.data);
                    }
                    else {
                        setBills([]);
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
                        setBills(res.data.data); 
                    }
                    else {
                        setBills([]);
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
                    <input type='textbox' placeholder='patient ref#' name='patientBilling' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <table>
                <thead>
                <tr>
                    <th>Treatment ID</th>
                    <th>Cost</th>
                    <th>Pay Status</th>
                    <th>Treatment Type</th>
                    <th>Patient #</th>

                </tr>
                </thead>
                <tbody>
                {Array.isArray(bills) && bills.length > 0 ? (
                    bills.map((Billing) => (
                        <tr key={Billing.treatmentID}>
                            <td>{Billing.treatmentID}</td>
                            <td>{Billing.cost}</td>
                            <td>{Billing.payStatus}</td>
                            <td>{Billing.treatmentType}</td>
                            <td>{Billing.patientBilling}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">No Bills found</td>
                    </tr>
                )}
                </tbody>
            </table>

        </main>
    </>)
};

export default Billing