import Layout from "./Layout";
import React, {useState} from "react";
import axios from "axios";


function Patients() {
    const [patientID, setpatientID] = useState({
        patientID : ''
    })
    const [forename, setforename] = useState({
        forename : ''
    })
    const [surname, setsurname] = useState({
        surname : ''
    })
    const [DOB, setDOB] = useState({
        DOB : ''
    })
    const [patients, setPatients] = useState([]);

    const takeInput = (e) => {
        setpatientID(prev => ({...prev,[e.target.name]: [e.target.value]}))
        setforename(prev => ({...prev,[e.target.name]: [e.target.value]}))
        setsurname(prev => ({...prev,[e.target.name]: [e.target.value]}))
        setDOB(prev => ({...prev,[e.target.name]: [e.target.value]}))
    }

    const findPatientID = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindPatient', patientID)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setPatients(res.data.data);  // Set the state here
                        console.log(res.data);
                    }
                    else {
                        setPatients([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching patients:', error);

        }
    };

    const findPatientFore = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindPatientFore', forename)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setPatients(res.data.data);
                        console.log(res.data);
                    }
                    else {
                        setPatients([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching patients:', error);

        }
    }

    const findPatientSur = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindPatientSur', surname)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setPatients(res.data.data);
                        console.log(res.data);
                    }
                    else {
                        setPatients([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching patients:', error);

        }
    };

    const findPatientDOB = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/FindPatientDOB', DOB)
                .then(res => {
                    if (res.data && res.data.status === "Found") {
                        setPatients(res.data.data);
                        console.log(res.data);
                    }
                    else {
                        setPatients([]);
                        console.log(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        catch (error) {
            console.error('Error fetching patients:', error);

        }
    };

    const findAllPatients = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3006/FindAllPatient')
            .then(response => {
                setPatients(response.data);
                console.log("loading data")
            })
            .catch(error => {
                console.error('Error fetching appointments:', error);
            });
    }
    /*
     * The <table> section in return() is a table displaying results from the search queries,
     * if data is found matching what is wanted then it will display all details of patient(s),
     * if nothing matches the case, then it will follow the 2nd conditional check and display 'no patients found'
     *
     */

    return (<>

        <Layout/>

        <head>
            <title>CareNexa Patients</title>
        </head>

        <main style={{ width: '100%', minHeight: '100vh' }}>
            <h1>PATIENTS</h1>

            <form onSubmit={findAllPatients}>
                <button type='submit' className={"search-button"}>Find all</button>
            </form>

            <form action="" onSubmit={findPatientID}>
                <div>
                    <input type='textbox' placeholder='patient ID#' name='patientID' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <form action="" onSubmit={findPatientFore}>
                <div>
                    <input type='textbox' placeholder='forename' name='forename' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <form action="" onSubmit={findPatientSur}>
                <div>
                    <input type='textbox' placeholder='surname' name='surname' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <form action="" onSubmit={findPatientDOB}>
                <div>
                    <input type='textbox' placeholder='date of birth (yyyymmdd)' name='DOB' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Forename</th>
                    <th>Surname</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Dial Code</th>
                    <th>Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {Array.isArray(patients) && patients.length > 0 ? (
                    patients.map((Patient) => (
                        <tr key={Patient.patientID}>
                            <td>{Patient.patientID}</td>
                            <td>{Patient.forename}</td>
                            <td>{Patient.surname}</td>
                            <td>{Patient.dateOfBirth}</td>
                            <td>{Patient.gender}</td>
                            <td>{Patient.countryCode}</td>
                            <td>{Patient.phoneNumber}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="8">No patients found</td>
                    </tr>
                )}
                </tbody>
            </table>

        </main>
    </>)
};

export default Patients