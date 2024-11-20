import React from 'react';
import './../styles/Header.css';

const Header = ({ title, theme }) => {
    return (
        <header className={`header ${theme}`}>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;
