import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Header from './components/Header';
import Home from './components/Home';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import BillList from './components/BillList';
import PlanList from './components/PlanList';
import PlanDetail from './components/PlanDetail';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div>
                <NavTabs />
                <Routes>
                    <Route path="/" element={<><Header title="Home" theme="home" /><Home /></>} />
                    <Route path="/customers" element={<><Header title="Customers" theme="customers" /><CustomerList /></>} />
                    <Route path="/customers/:id" element={<><Header title="Customer Details" theme="customers" /><CustomerDetails /></>} />
                    <Route path="/bills" element={<><Header title="Bills" theme="bills" /><BillList /></>} />
                    <Route path="/plans" element={<><Header title="Plans" theme="plans" /><PlanList /></>} />
                    <Route path="/plans/:id" element={<><Header title="Plan Details" theme="plans" /> <PlanDetail /></>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
