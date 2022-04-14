import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const heandelEmail = event =>{
        setEmail(event.target.value);
    }

    const heandlePassword = event =>{
        setPassword(event.target.value);
    }
    
    if(user){
        navigate('/shop');
    }

    const hendalSubmit= event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='from-title'>Login</h1>
                <form onSubmit={hendalSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={heandelEmail} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={heandlePassword} type="password" name="password" id="" required/>
                </div>
                <p style={{color: 'red'}} >{error?.message}</p>
                {
                    loading && <p>Loading.....</p>
                }
                <input className='form-submit' type="submit" value="Login"/>
                </form>
                <p>New to Ema-jhon? <Link className='form-link' to='/signup'>Create an Account</Link> </p>
            </div>
        </div>
    );
};

export default Login;