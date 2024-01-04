import React, {useState} from 'react';
import './Login.css';
import CredentialCheck from './LoginValidater'

function Login(){
    const [input, setInput] = useState({
        username : '',
        password : ''
    })
    const [result, setResult] = useState({})

    const checkCredential = (event) => {
        event.preventDefault();
        setResult(CredentialCheck(input));
    }

    const takeInput = (event) => {
        setInput(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }
    return (
        <div>
            <form action="" onSubmit={checkCredential}>
                <div>
                <input type='textbox' placeholder='Username' name='Username' onChange={takeInput}/>
                {result.username && <span>{result.username}</span>}
                </div>
                <div>
                <input type='password' placeholder='Password' name='Password' onChange={takeInput}/>
                {result.password && <span>{result.password}</span>}
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
};

export default Login

