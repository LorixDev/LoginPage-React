import React, { useState } from 'react';
import '../index.css';


function LoginForm({ loginMode, setLoginMode, Register, Login, error }) {
    const [details, setDetails] = useState({name: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        (loginMode) ? Register(details) : Login(details)
    }

    return (
        <div className="wrapper">
            <form className="LoginDiv" onSubmit={submitHandler}>
                {(error !== "") ? (<div><h5>{error}</h5></div>) : ""}

                <h1 className="title no-select">{
                    (loginMode) ? "Sign Up" : "Login"
                }</h1>
                
                <div className="UsernameDiv">
                    <p className="title no-select">{"Username"}</p>
                    <input type="text" maxLength={12} className="input" placeholder="Username" spellCheck={false} onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>

                <div className="PasswordDiv">
                    <p className="title no-select">{"Password"}</p>
                    <input type="password" maxLength={12} className="input" placeholder="Password" spellCheck={false} onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                
                <input type="submit" value={
                    (loginMode) ? "Sign Up" : "Login"
                } className="LoginButton no-select" />

                <p className="signup no-select" onClick={
                    (loginMode) ? () => setLoginMode(false) : () => setLoginMode(true)
                }>{
                    (loginMode) ? "or Login" : "or Sign Up"
                }</p>

            </form>

        </div>
        
    )
}

export default LoginForm;