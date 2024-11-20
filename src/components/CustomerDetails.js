import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCustomerById, updateCustomer } from '../api';
import './../styles/CustomerDetails.css';

const CustomerDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await getCustomerById(id);
                setCustomer(response?.data);
                setName(response?.data?.name);
                setEmail(response?.data?.email);
                setPhone(response?.data?.phone);
            } catch (error) {
                console.error("Error fetching customer:", error);
                setError("Failed to load customer details.");
            } finally {
                setLoading(false);
            }
        };
        fetchCustomer();
    }, [id]);

    const handleEdit = async () => {
        const updatedCustomer = { name, email, phone };
        await updateCustomer(id, updatedCustomer);
        navigate('/'); 
    };

    if (loading) return <div>Loading...</div>; 
    if (error) return <div>{error}</div>; 

    return (
        <div className="customer-details">
            <h2>Customer Details</h2>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone: </label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <button onClick={handleEdit}>Save</button>
        </div>
    );
};

export default CustomerDetails;
