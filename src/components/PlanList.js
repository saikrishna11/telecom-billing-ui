import React, { useEffect, useState } from 'react';
import { deletePlanById, getPlans } from '../api';
import './../styles/Lists.css';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const PlanList = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await getPlans();
            setPlans(response?.data || []);
        } catch (error) {
            console.error("Error fetching customers:", error);
            setError("Failed to load customers. Please try again.");
        } finally {
            setLoading(false);
        }
        };
        fetchPlans();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deletePlanById(id);
            setPlans(plans.filter(plan => plan.id !== id));
        } catch (error) {
            console.error("Error deleting plan:", error);
        }
    };

    if (loading) {
        return <p>Loading...</p>; 
    }

    const columns = [
        // {
        //     name: 'Plan Name',
        //     selector: row => row.name,  
        //     sortable: true,  
        // },
        {
            name: 'Plan Name',
            cell: row => (
                <Link to={`/plans/${row.id}`} className="view-details-link">{row.name}</Link>
            ),
            button: true,  
        },
        {
            name: 'Price',
            selector: row => `$${row.price}`,  
            sortable: true,  
        },
        {
            name: 'Action',
            cell: row => (
                <div>
                    {/* <Link to={`/plan/${row.id}`} className="view-details-link">
                        View Details
                    </Link> */}
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
            <h2>Plan List</h2>
            <DataTable
                title="Available Plans"
                columns={columns}
                data={plans}  
                pagination  
                highlightOnHover  
                pointerOnHover  
            />
        </div>
    );
};

export default PlanList;
