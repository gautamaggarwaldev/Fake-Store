import React from 'react';
import { Link } from 'react-router-dom';

const PaymentTimeout = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold text-red-500 mb-4">Payment Timeout</h1>
            <p className="text-xl text-gray-700 mb-6">Your payment time has expired. Please try again.</p>
            <Link to="/payment-method-selection" className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition">
                Go Back to Payment Methods
            </Link>
        </div>
    );
};

export default PaymentTimeout;
