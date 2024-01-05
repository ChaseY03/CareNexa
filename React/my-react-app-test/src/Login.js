import React, {useState} from 'react';
import './App.css';
import CredentialCheck from './LoginValidater'
import axios from "axios";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./components/Home";
import { useNavigate } from 'react-router-dom';

function Login(){

    const [input, setInput] = useState({
        employeeID : '',
        lastName : ''
    })
    //const [result, setResult] = useState({})
    //const [result, setResult] = useState(false)
    const navigate = useNavigate();
    const checkCredential = async (e) => {
        e.preventDefault();
        console.log(input); //DEV CODE REMOVE LATER
        await axios.post('http://localhost:3006/Staff', input)
            .then(res => {
                if (res.data === "Success"){
                    navigate('Home');
                   // alert("Logged in"); //DEV CODE REMOVE LATER
                }else {
                    alert("No login found");
                }
            })
            .catch(err => console.log(err))
    }

    const takeInput = (e) => {
        setInput(prev => ({...prev,[e.target.name]: [e.target.value]}))
    }
    return (

        <div className="App">
            <img src="./CareNexaLogo.svg" alt="CareNexa logo" className="login-logo" />
            <form action="" onSubmit={checkCredential} className="login-form">
                <div>
                    <input type='textbox' placeholder='Username' name='employeeID' onChange={takeInput} autoComplete='off' required />
                </div>
                <div>
                    <input type='password' placeholder='Password' name='lastName' onChange={takeInput} required />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login

