import React, { Component } from 'react';
import defaultLogo from "../../images/logo-v2.png";

export class MyNav extends Component {
    render() {
        return (
           <nav>
               <div className="mynavbar d-flex justify-content-between align-items-center px-3 py-2">
                   <div className="logo-wrap">
                       <img src={defaultLogo} width="85" className="img-fluid" alt="TVtalks"/>
                   </div>
                   <div className="btn-wrap">
                       <button className="btn btn-login mr-3">Log in</button>
                       <button className="btn">Sign up</button>
                   </div>
               </div>
           </nav>
        )
    }
}

export default MyNav
