import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EMI = () => {
    const [selectedPlan, setSelectedPlan] = useState('');
    const navigate = useNavigate();

    // Handle EMI plan selection
    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    };

    // Handle EMI plan submission (after selecting the plan)
    const handlePlanSubmit = (e) => {
        e.preventDefault();
        // Redirect to the loading page after selecting the EMI plan
        navigate('/loading');
        
        // Simulate payment success after a delay
        setTimeout(() => {
            navigate('/payment-success');
        }, 3000); // 3 seconds for loading
    };

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Select EMI Plan</h1>
            <p className="text-xl text-gray-700 mb-4">Choose the number of months for your EMI plan.</p>

            {/* EMI Plan Options */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {['3', '6', '12', '18', '24'].map((months) => (
                    <div
                        key={months}
                        onClick={() => handlePlanSelect(months)}
                        className={`border rounded-lg p-6 cursor-pointer transition-all duration-300 ease-in-out ${selectedPlan === months ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                    >
                        <h3 className="text-2xl font-semibold">{months} Months</h3>
                    </div>
                ))}
            </div>

            <button
                onClick={handlePlanSubmit}
                disabled={!selectedPlan}
                className={`mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition ${!selectedPlan && 'opacity-50 cursor-not-allowed'}`}
            >
                Confirm Plan and Proceed to Payment
            </button>
        </div>
    );
};

export default EMI;
