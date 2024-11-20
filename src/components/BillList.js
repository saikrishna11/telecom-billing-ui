import React, { useEffect, useState } from 'react';
import { getBills } from '../api';
import './../styles/Lists.css';

const BillList = () => {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        const fetchBills = async () => {
            const response = await getBills();
            setBills(response.data);
        };
        fetchBills();
    }, []);

    return (
        <div className="bill-list">
            <h2>Bill List</h2>
            <ul>
                {bills.map(bill => (
                    <li key={bill.id}>{bill.description} - ${bill.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default BillList;
