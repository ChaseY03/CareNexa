import React, {useState} from 'react';
import './Login.css';
import './LoginValidater'
function Login(){
    const [input, setInput] = useState({
        username : '',
        password : ''
    })
    const [result, setResult] = useState({ })
    const checkCredential = (event) => {
        event.preventDefault();
        setResult(checkCredential(input));
    }

    const takeInput = (event) => {
        setInput(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }
    return (
        <div>
            <form onSubmit={checkCredential}>
                <input type='textbox' placeholder={"Username"} name={"Usernametxt"} onChange={takeInput}/>
                <input type='password' placeholder={"Password"} name={"Passwordtxt"} onChange={takeInput}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
};

export default Login

