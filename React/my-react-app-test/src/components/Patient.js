import Layout from "./Layout";
import React, {useState} from "react";
import axios from "axios";


function Patients() {

    const [input, setInput] = useState({
        forename : ''
    })

    const [patients, setPatients] = useState([]);

    const findPatientID = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3006/Patient', input)
            .then(response => {
                if (response.data === "Found"){
                    setPatients(response.data);
                }else {
                    alert("No matching data");
                }

                console.log("loading data")
            })
            .catch(error => {
                console.error('Error fetching patients:', error);
            });
    }

    const takeInput = (e) => {
        setInput(prev => ({...prev,[e.target.name]: [e.target.value]}))
    }

    return (<>

        <Layout/>

        <head>
            <title>CareNexa Patients</title>
        </head>

        <main>
            <h1>PATIENTS</h1>

            <form action="" onSubmit={findPatientID} className="patientID-form">
                <div>
                    <input type='textbox' placeholder='forename' name='forename' onChange={takeInput} autoComplete='off' required />
                </div>
                <div>
                    <button type='Search'>Search</button>
                </div>
            </form>

            <ul>
                {patients.map(Patient => (
                    <li key={`${Patient.forename}`}>
                        {Patient.forename}
                    </li>

                ))}
            </ul>

        </main>
    </>)
};

export default Patients