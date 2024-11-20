import React from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/NavTabs.css';

const NavTabs = () => {
    return (
        <nav className="nav-tabs">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/customers">Customers</NavLink></li>
                <li><NavLink to="/bills">Bills</NavLink></li>
                <li><NavLink to="/plans">Plans</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavTabs;
