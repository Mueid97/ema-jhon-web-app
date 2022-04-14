import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const heandleNameBlur = event =>{
        setName(event.target.value);
    }

    
    const heandleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const heandelPhoneNumberBlur = event => {
        setPhone(event.terget.value);
    }
    
    

    const heandleCreateUser = event => {
        event.preventDefault();
        const shipping={ email, name, address, phone}
        console.log(shipping);
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='from-title'>Shipping Information</h1>
                <form onSubmit={heandleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={heandleNameBlur} type="text" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={heandleAddressBlur} type="text" name="address"  required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={heandelPhoneNumberBlur} type="text" name="phone" required />
                    </div>
                    <p style={{ color: 'red' }} > {error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping"></input>
                </form>

                <p>Already have an Account? <Link className='form-link' to='/login'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Shipment;