import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';  // You can use any QR code library

const PaymentQR = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
    const [isPaymentComplete, setIsPaymentComplete] = useState(false);
    const { method } = new URLSearchParams(location.search).get('method') || 'paytm';

    // Timer Countdown
    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else {
                clearInterval(timer);
                navigate('/payment-timeout');
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, navigate]);

    const handlePaymentCompletion = () => {
        setIsPaymentComplete(true);
        // Navigate to loading page first
        navigate('/loading');

        // After a few seconds, redirect to payment success
        setTimeout(() => {
            navigate('/payment-success');
        }, 3000); // 3 seconds for loading page
    };

    if (isPaymentComplete) return null; // Don't display QR if payment is complete

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Scan the QR Code to Pay</h1>
            <div className="mt-8 mb-10 ml-130">
                {/* <QRCode value={`payment:${method}`} size={350} className='flex items-center justify-center'/> */}
                <img src='../../public/assets/qr.png'/>
            </div>

            <p className="text-xl text-gray-700 mb-4">Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>

            {/* Simulate payment complete button (can be replaced by a real payment callback) */}
            <button
                onClick={handlePaymentCompletion}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
                Complete Payment
            </button>
        </div>
    );
};

export default PaymentQR;
