import React, { useContext } from 'react';
import defaultLogo from "../../images/logo-v2.png";
import { LoginContext } from '../../App';

function MyNav () {
    const loginContext = useContext(LoginContext);

    const handleLogout = ()=>{
        localStorage.clear();
        loginContext.setLoginStatus({type:"LOGGED_OUT"});
    }
  
        return (
           <nav className="mynavbar">
               <div className="d-flex justify-content-between align-items-center px-3 py-1">
                   <div className="logo-wrap">
                       <img src={defaultLogo} width="85" className="img-fluid" alt="TVtalks"/>
                   </div>
                   <div className="btn-wrap">
                       {loginContext.loginStatus.isLoggedIn?(
                           <React.Fragment>
                           <span className="text-muted text-uppercase font-weight-bold">{loginContext.loginStatus.name}</span>
                           <button onClick={handleLogout} className="btn default-btn btn-login default-radius ml-3">Log out</button>
                           </React.Fragment>
                       ):(
                       null
                       )}
                       
                       {/* <button className="btn default-btn default-radius">Sign up</button> */}
                   </div>
               </div>
           </nav>
        )
    
}

export default MyNav
