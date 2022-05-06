import React, { useState, useEffect, useRef } from 'react';
import LoginForm from './Components/LoginForm';
import './index.css';

function App() {
  let adminUser = useRef({
    "Admin": {
      name: "Admin",
      password: "Admin"
    }
  })


  const [user, setUser] = useState({name: "", password: ""});
  const [error, setError] = useState("");

  const [loginMode, setLoginMode] = useState(false);
  

  useEffect(()=>{
    const User = localStorage.getItem("User");
    setUser(User ? JSON.parse(User) : {name: "", password: ""});
  }, []);


  const Register = details => {
    
    if (!adminUser.current.hasOwnProperty(details.name)) {
      adminUser.current[details.name] = details;
      localStorage.setItem("Admin", JSON.stringify(adminUser));


      setError("Register Succesfully");
    }else setError("Username already registered");

  }

  const Login = details => {
    if(adminUser.current.hasOwnProperty(details.name) && adminUser.current[details.name].password === details.password) {
      setUser({
        name: details.name,
        password: details.password
      })

      localStorage.setItem("User", JSON.stringify({name: details.name, password: details.password}));

      setError("");
      
    } else{
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({name: "", password: ""});

    localStorage.setItem("User", JSON.stringify({name: "", password: ""}));
  }

  return (
    <div>
      {(user.name !== "") ?
        <div>
          <h1>Welcome {user.name}</h1>
          <button onClick={() => Logout()} >Logout</button>
        </div>
          : 
        <LoginForm loginMode={loginMode} setLoginMode={setLoginMode} Login={Login} Register={Register} error={error} />
      }
    </div>
    
  );
}

export default App;
