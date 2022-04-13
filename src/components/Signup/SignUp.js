import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const heandelEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const heandlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const heandelCpasswordBlur = event => {
        setConfirmPassword(event.terget.value);
    }

    const heandleCreateUser = event => {
        event.preventDefault();
        // if(password !== confirmPassword){
        //     setError('Does not match');
        //     return;
        // }
    
       
        createUserWithEmailAndPassword(email,password);
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='from-title'>Sign Up</h1>
                <form onSubmit={heandleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={heandelEmailBlur} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={heandlePasswordBlur} type="password" name="password"  required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={heandelCpasswordBlur} type="password" name="confirm-password" required />
                    </div>
                    <p style={{ color: 'red' }} > {error}</p>
                    <input className='form-submit' type="submit" value="Signup" />
                </form>

                <p>Already have an Account? <Link className='form-link' to='/login'>Login</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;