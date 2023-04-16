import React, { useContext } from 'react';
import logo from '../../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }
    
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                {
                   user && <span className='text-white ml-2'>Welcome, {user.email}<button onClick={handleLogout} className='text-black ml-2 bg-yellow-50 p-2 rounded-lg'>Logout</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;