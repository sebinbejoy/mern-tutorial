import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (

        <div className='navbar'>
            <h1>Welcome User</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Addblog'>Add Blog</Link></li>
                <li><Link to='/Bugbounty'>Bug Bounty Program</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </div>

    )
}

export default Navbar;