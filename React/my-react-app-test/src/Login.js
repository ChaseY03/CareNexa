import React, {useState} from 'react';
import './Login.css';
import CredentialCheck from './LoginValidater'
import axios from "axios";

function Login(){

    const [input, setInput] = useState({
        username : '',
        password : ''
    })
    //const [username, setUsername] = useState('')
    //const [password, setPassword] = useState('')
    const [result, setResult] = useState({})

    const checkCredential = async (event) => {
        event.preventDefault();
        setResult(CredentialCheck(input));
        console.log(input);
    }

    const takeInput = (event) => {
        setInput(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }
    return (
        <div>
            <form action="" onSubmit={checkCredential}>
                <div>
                <input type='textbox' placeholder='Username' name='username' onChange={takeInput}/>
                {result.username && <span>{result.username}</span>}
                </div>
                <div>
                <input type='password' placeholder='Password' name='password' onChange={takeInput}/>
                {result.password && <span>{result.password}</span>}
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
};

export default Login

