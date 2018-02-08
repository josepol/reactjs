import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <header>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/profile'>Profile</Link>
        <br/>
        <Link to='/login'>Login</Link>
    </header>
)

export default Menu;