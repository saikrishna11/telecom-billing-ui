import React, { useEffect, useState } from 'react';
import { deleteCustomerById, getCustomers } from '../api';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import './../styles/Lists.css';
import { FaTrash } from 'react-icons/fa';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await getCustomers();
                setCustomers(response?.data || []); 
            } catch (error) {
                console.error("Error fetching customers:", error);
                setError("Failed to load customers. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchCustomers();
    }, []);

    if (loading) {
        return <p>Loading...</p>; 
    }

    const handleDelete = async (id) => {
        try {
            await deleteCustomerById(id);
            setCustomers(customers.filter(customer => customer.id !== id));
        } catch (error) {
            console.error("Error deleting Customer:", error);
        }
    };


    const columns = [
        {
            name: 'Customer Name',
            cell: row => (
                <Link to={`/customers/${row.id}`}>{row.name}</Link>
            ),
            button: true,  
        },
        {
            name: 'Email',
            selector: row => `${row.email}`,  
            sortable: true,  
        },
        {
            name: 'Phone Number',
            selector: row => `${row.phone}`,  
            sortable: true,  
        },
        {
            name: 'Action',
            cell: row => (
                <div>
                    <button
                        onClick={() => handleDelete(row.id)}  
                        className="delete-button"
                    >
                        <FaTrash />
                    </button>
                </div>
            ),
            button: true,
        },
    ];

    return (
        <div className="plan-list">
            <h2>Customer List</h2>
            <DataTable
                title="Available Plans"
                columns={columns}
                data={customers}  
                pagination  
                highlightOnHover  
                pointerOnHover  
            />
        </div>
    );
};

export default CustomerList;
