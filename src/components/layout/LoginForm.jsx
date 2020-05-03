import React from 'react'

 const LoginForm = () => {
    return (
        <div className='login-form'>
            <div>
                <input className='input input1 ' type='text' placeholder='Username'/>
            </div>
            <div>
                <input className='input input2' type='text' placeholder='Password'/>
            </div>
    
            <div className='d-flex justify-content-between align-items-center mx-4 my-4'>
                <div>
                    <a href="" className='font-white'>Create Account</a>
                </div>
                <div>
                    <button className='btn btn-login-inverse'>Log in</button>
                </div>
            </div>
            
        </div>
    )
}

export default LoginForm
