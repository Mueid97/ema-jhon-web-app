import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='from-title'>Login</h1>
                <form action="">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-jhon? <Link className='form-link' to='/signup'>Create an Account</Link> </p>
            </div>
        </div>
    );
};

export default Login;