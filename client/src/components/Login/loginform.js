import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./loginform.css";

const LoginForm = () => {

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:5000/api/auth';
            const res = await axios.post(url, userData);
            localStorage.setItem("token", res.data);
            localStorage.setItem("username", userData.username);
            window.location = '/';
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500)
                setError(error.response.data.message);
        }
    }

    return (
        <div className='page_login'>
            
                <form className='cover_login' onSubmit={handleSubmit}>
                    <h1>Sign in</h1>
                    <span>
                        <label>Username </label>
                        <input type="text" required value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                    </span>
                    <span>
                        <label>Password </label>
                        <input type="password" required value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                    </span>
                    {error && <div>{error}</div>}
                    <button type='submit'>Sign in</button>

                    <h3>Create a new account?</h3>
                    <Link to='/signup'>Sign up</Link>
                </form>
            
        </div>
    )
}

export default LoginForm;