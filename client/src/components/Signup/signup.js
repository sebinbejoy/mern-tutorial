import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./signup.css";

const SignUpForm = () => {

    const [userData, setUserData] = useState({ firstName: '', lastName: '', empid: '', email: '', username: '', password: '' });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:5000/api/signup';
            const { userData: res } = await axios.post(url, userData);
            navigate('/login');
        } catch (error) {
            if(error.response && error.response.status>=400 && error.response.status<=500)
                setError(error.response.data.message);
        }
    }

    return (
        <div className='page_signup'>
            <form className='cover_signup' onSubmit={handleSubmit}>
                <h1>Sign up</h1>

                <label>First Name</label>
                <input type="text" required value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
                <label>Last Name</label>
                <input type="text" required value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
                <label>Employee ID</label>
                <input type="text" required value={userData.empid} onChange={(e) => setUserData({ ...userData, empid: e.target.value })} />
                <label>Email</label>
                <input type="text" required value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                <label>Username</label>
                <input type="text" required value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                <label>Password</label>
                <input type="password" required value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />

                {error && <div>{error}</div>}
                
                <button type='submit'>Submit</button>
                
                <h3>Already have an account?</h3>
                <Link to='/login'>Sign in</Link>
            </form>
        </div>
    )
}

export default SignUpForm;