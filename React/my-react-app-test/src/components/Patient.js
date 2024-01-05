import Layout from "./Layout";
import React, {useState} from "react";
import axios from "axios";

function Patients() {

    const [patients, setPatients] = useState([]);

    const findPatient = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3006/Patient')
            .then(response => {
                setPatients(response.data);
                console.log("loading data")
            })
            .catch(error => {
                console.error('Error fetching patients:', error);
            });
    }
    return (<>

        <Layout/>

        <head>
            <title>CareNexa Patients</title>
        </head>

        <main>
            <h1>PATIENTS</h1>
            <form onSubmit={findPatient}>
                <button type='submit' >Find patients</button>
            </form>
            <ul>
                {patients.map(patient => (
                    <li key={`${patient.forename}-${patient.surname}`}>
                        {patient.forename} - {patient.surname}
                    </li>
                ))}
            </ul>
        </main>
    </>)
};

export default Patients