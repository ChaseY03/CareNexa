import React, {useState} from 'react';
import './App.css';
import CredentialCheck from './LoginValidater'
import axios from "axios";

function Login(){

    const [input, setInput] = useState({
        username : '',
        password : ''
    })
    //const [username, setUsername] = useState('')
    //const [password, setPassword] = useState('')
    // {result.username && <span>{result.username}</span>}
    //{result.password && <span>{result.password}</span>}
    //const [result, setResult] = useState({})
    const [result, setResult] = useState(false)

    const checkCredential = async (e) => {
        e.preventDefault();
        //setResult(CredentialCheck(input));
        CredentialCheck(input);
        console.log(input); //DEV CODE REMOVE LATER
        setResult(true);
        setInput('');

    }

    const takeInput = (e) => {
        setInput(prev => ({...prev,[e.target.name]: [e.target.value]}))
    }
    return (
        <>
            {result ? (
                <p>logged in</p>

            ):(
                <div className={"App"}>
                    <img src={"./CareNexaLogo.svg"} alt={"CareNexa logo"} className={"login-logo"}/>
                    <form action="" onSubmit={checkCredential} className={"login-form"}>
                        <div>
                            <input type='textbox' placeholder='Username' name='username'
                                   onChange={takeInput} autoComplete='off' required/>
                        </div>
                        <div>
                            <input type='password' placeholder='Password' name='password'
                                   onChange={takeInput} required/>
                        </div>
                        <button type='submit'>Login</button>
                    </form>
                </div> )}
        </>
    )
}

export default Login

