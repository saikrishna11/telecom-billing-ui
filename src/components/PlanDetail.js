import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { getPlanById } from '../api';

function PlanDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [plan, setPlan] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        // axios.get(`${process.env.REACT_APP_API_URL}/plans/${id}`)
        //     .then(response => {
        //         setPlan(response?.data);
        //     })
        //     .catch(error => console.error('Error fetching plan:', error));
        const fetchPlan = async () => {
                try {
                    const response = await getPlanById(id);
                    setPlan(response?.data);
                    setName(response?.data?.name);
                    setPrice(response?.data?.price);
                } catch (error) {
                    console.error("Error fetching plan:", error);
                    setError("Failed to load plan details.");
                } finally {
                    setLoading(false);
                }
            };
            fetchPlan();
        }, [id]);

        const handleEdit = async () => {
            const updatedPlan = { name, price };
            await updatedPlan(id, updatedPlan);
            navigate('/'); 
        };

        if (loading) return <div>Loading...</div>; 
        if (error) return <div>{error}</div>; 

    // return (
    //     <div>
    //         <h2>Plan Details</h2>
    //         <p>Name: {plan.name}</p>
    //         <p>Price: ${plan.price}</p>
    //         <button onClick={() => {/* function to edit plan */}}>Edit Plan</button>
    //     </div>
    // );

    return (
        <div className="plan-details">
            <h2>Plan Details</h2>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Price: </label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <button onClick={handleEdit}>Save</button>
        </div>
    );
}

export default PlanDetail;
