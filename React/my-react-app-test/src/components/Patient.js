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

        try {
            const response = await axios.post('http://localhost:3006/FindPatient', input);

            if (response.data.length > 0) {
                // Assuming data is an array of patients
                setPatients(response.data);
                console.log("Patients found:", response.data);
            } else {
                alert("No matching data");
                console.log("No matching data");
            }

            console.log("Loading data");
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };


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
                    <button type='Search'>Search</button>
                </div>
                <div>

                </div>
            </form>

            <ul>
                {patients.map(Patient => (
                    <li key={`${Patient.patientID}-${Patient.forename}-${Patient.surname}-${Patient.dateOfBirth}-
                    ${Patient.gender}-${Patient.countryCode}-${Patient.phoneNumber}`}>
                        {Patient.patientID} - {Patient.forename} - {Patient.surname} - {Patient.dateOfBirth} - {Patient.gender} - {Patient.countryCode} {Patient.phoneNumber}
                    </li>

                ))}
            </ul>

        </main>
    </>)
};

export default Patients