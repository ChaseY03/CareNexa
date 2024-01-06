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
            const response = await axios.post('http://localhost:3006/FindPatient', patientID)
                .then(res => {
                    if (res.data === "Success"){
                        setPatients(response.data);
                        // alert("Logged in"); //DEV CODE REMOVE LATER
                    }else {
                        alert("No patients found");
                    }
                })
                .catch(err => console.log(err))


            /*
            if (response.data.length > 0) {
                // Assuming data is an array of patients
                setPatients(response.data);
                console.log("Patients found:", response.data);
            }
            else {
                alert("No matching data");
                console.log("No matching data");
            }
            console.log("Loading data");

             */
        }

        catch (error) {
            console.error('Error fetching patients:', error);
        }


    };

    const findPatientFore = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3006/FindPatientFore', forename);

            if (response.data.length > 0) {
                // Assuming data is an array of patients
                setPatients(response.data);
                console.log("Patients found:", response.data);
            }
            else {
                alert("No matching data");
                console.log("No matching data");
            }
            console.log("Loading data");
        }
        catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    const findPatientSur = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3006/FindPatientSur', surname);
            if (response.data.length > 0) {
                // Assuming data is an array of patients
                setPatients(response.data);
                console.log("Patients found:", response.data);
            }
            else if(response==="none"){

            }
            else {
                alert("No matching data");
                console.log("No matching data");
            }

            console.log("Loading data");
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    const findPatientDOB = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3006/FindPatientDOB', DOB);

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


    return (<>

        <Layout/>

        <head>
            <title>CareNexa Patients</title>
        </head>

        <main>
            <h1>PATIENTS</h1>

            <form onSubmit={findAllPatients}>
                <button type='submit' >Find all</button>
            </form>

            <form action="" onSubmit={findPatientID} className="patientID-form">
                <div>
                    <input type='textbox' placeholder='patientID' name='patientID' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <form action="" onSubmit={findPatientFore} className="patientfore-form">
                <div>
                    <input type='textbox' placeholder='forename' name='forename' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <form action="" onSubmit={findPatientSur} className="patientSur-form">
                <div>
                    <input type='textbox' placeholder='surname' name='surname' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
                </div>
            </form>

            <form action="" onSubmit={findPatientDOB} className="patientDOB-form">
                <div>
                    <input type='textbox' placeholder='date of birth (yyyymmdd)' name='DOB' onChange={takeInput} autoComplete='off' required />
                    <button type='Search' className={"search-button"}>Search</button>
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