import React, { useContext } from 'react'
import { useState } from 'react'
import Axios from 'axios';
import { LoginContext } from '../../App';

function SignupBox () {
  const loginContext = useContext(LoginContext);
  
  const [credentials, setCreadentials] = useState({username:'', password:''});
     const callSignup = () =>{
        
        Axios
          .post("http://localhost:5000/users/signup", credentials)
          .then(res => {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("name", res.data.name);
              loginContext.setLoginStatus({type:"LOGGED_IN", payload: res.data.name});
          })
          .catch(err => console.error(err));
          
     };
     
        return (
            <div className="signup-box p-4 mt-4">
                 <input onChange={e=>{setCreadentials({...credentials, username:e.target.value})}} type="text" placeholder="username" className="form-control radius-none mb-3" required />
                 <input onChange={e=>{setCreadentials({...credentials, password:e.target.value})}} type="password" placeholder="password" className="form-control radius-none" required />
                 <div className="d-flex justify-content-between align-items-center mt-3">
                     <button onClick={callSignup} className="btn default-btn btn-login-inverse default-radius font-size-sm">sign up</button>
                 </div>
            </div>
        )
    
}

export default SignupBox
