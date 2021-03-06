import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class LoginBox extends Component {
    render() {
        return (
            <div className="login-box p-4">
                 <input type="text" placeholder="username" class="form-control radius-none mb-3" />
                 <input type="password" placeholder="password" class="form-control radius-none" />
                 <div className="d-flex justify-content-between align-items-center mt-3">
                     <a className="font-size-sm" href="#">CREATE ACCOUNT</a>
                     <button className="btn btn-login-inverse radius-default font-size-sm">Log in</button>
                 </div>
            </div>
        )
    }
}

export default LoginBox
