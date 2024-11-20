import React from 'react';
import './../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to the Telecom Billing System</h2>
            <p>
                This application allows you to manage customers, view bills, and explore available plans.
            </p>
            <p>
                Use the tabs above to navigate through different functionalities.
            </p>
        </div>
    );
};

export default Home;
