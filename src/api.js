const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
};

const createHeaders = (contentType = 'application/json') => ({
    'Content-Type': contentType,
});

export const getCustomers = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/customers`);
    return handleResponse(response);
};

export const getCustomerById = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/customers/${id}`);
    return handleResponse(response);
};

export const updateCustomer = async (id, data) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/customers/${id}`, {
        method: 'PUT',
        headers: createHeaders(),
        body: JSON.stringify(data),
    });
    return handleResponse(response);
};

export const deleteCustomerById = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/customers/${id}`, {
        method: 'DELETE',
    });
    return handleResponse(response);
};

export const getBills = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/bills`);
    return handleResponse(response);
};

export const getBillById = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/bills/${id}`);
    return handleResponse(response);
};

export const updateBill = async (id, data) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/bills/${id}`, {
        method: 'PUT',
        headers: createHeaders(),
        body: JSON.stringify(data),
    });
    return handleResponse(response);
};

export const deleteBillById = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/bills/${id}`, {
        method: 'DELETE',
    });
    return handleResponse(response);
};

export const getPlans = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/plans`);
    return handleResponse(response);
};

export const getPlanById = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/plans/${id}`);
    return handleResponse(response);
};

export const updatePlan = async (id, data) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/plans/${id}`, {
        method: 'PUT',
        headers: createHeaders(),
        body: JSON.stringify(data),
    });
    return handleResponse(response);
};

export const deletePlanById = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/plans/${id}`, {
        method: 'DELETE',
    });
    return handleResponse(response);
};
