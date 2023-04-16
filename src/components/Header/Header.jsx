import React, { useContext } from 'react';
import logo from '../../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {

    const {user} = useContext(AuthContext)
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
                   user && <span className='text-white'>Welcome, {user.email}</span>
                }
            </div>
        </nav>
    );
};

export default Header;