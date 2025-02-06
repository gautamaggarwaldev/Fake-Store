import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const PaymentMethodSelection = () => {
    const navigate = useNavigate();

    // Handle QR page navigation
    const handleQRPageNavigation = (method) => {
        navigate(`/payment-qr?method=${method}`);
    };
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Choose Payment Method</h1>

                {/* Payment Options */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                    {/* Payment Option Cards */}
                    <Link
                        to="/loading"
                        className="payment-option-card group bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 ease-in-out"
                    >
                        <img
                            src="../../public/assets/cod.png"
                            alt="COD"
                            className="w-20 h-20 object-cover mb-4 group-hover:scale-105 transition-all duration-200"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-200">Cash on Delivery</h3>
                    </Link>

                    <Link
                        to="/upi-payment"
                        className="payment-option-card group bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 ease-in-out"
                    >
                        <img
                            src="../../public/assets/upi.jpg"
                            alt="UPI"
                            className="w-20 h-20 object-cover mb-4 group-hover:scale-105 transition-all duration-200"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-200">UPI</h3>
                    </Link>

                    <Link
                        to="#"
                        onClick={() => handleQRPageNavigation('paytm')}
                        className="payment-option-card group bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 ease-in-out"
                    >
                        <img
                            src="../../public/assets/paytm.jpg"
                            alt="Paytm"
                            className="w-20 h-20 object-cover mb-4 group-hover:scale-105 transition-all duration-200"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-200">Paytm</h3>
                    </Link>

                    <Link
                        to="#"
                        onClick={() => handleQRPageNavigation('phonepe')}
                        className="payment-option-card group bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 ease-in-out"
                    >
                        <img
                            src="../../public/assets/phonepe.png"
                            
                            alt="PhonePe"
                            className="w-20 h-20 object-cover mb-4 group-hover:scale-105 transition-all duration-200"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-200">PhonePe</h3>
                    </Link>

                    <Link
                        to="#"
                        onClick={() => handleQRPageNavigation('gpay')}
                        className="payment-option-card group bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 ease-in-out"
                    >
                        <img
                            src="../../public/assets/gpay.png"
                            alt="GPay"
                            className="w-20 h-20 object-cover mb-4 group-hover:scale-105 transition-all duration-200"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-200">GPay</h3>
                    </Link>

                    <Link
                        to="/payment?method=credit-card"
                        className="payment-option-card group bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 ease-in-out"
                    >
                        <img
                            src="../../public/assets/cc.jpg"
                            alt="Credit Card"
                            className="w-20 h-20 object-cover mb-4 group-hover:scale-105 transition-all duration-200"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-200">Credit Card</h3>
                    </Link>

                    <Link
                        to="/payment?method=debit-card"
                        className="payment-option-card group bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 ease-in-out"
                    >
                        <img
                            src="../../public/assets/dc.jpg"
                            alt="Debit Card"
                            className="w-20 h-20 object-cover mb-4 group-hover:scale-105 transition-all duration-200"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-200">Debit Card</h3>
                    </Link>

                    <Link
                        to="/emi-payment"
                        className="payment-option-card group bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 ease-in-out"
                    >
                        <img
                            src="../../public/assets/emi.jpg"
                            alt="EMI"
                            className="w-20 h-20 object-cover mb-4 group-hover:scale-105 transition-all duration-200"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-200">EMI</h3>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default PaymentMethodSelection;
