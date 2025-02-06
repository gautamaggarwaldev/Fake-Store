import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UPI = () => {
    const [upiId, setUpiId] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1); // Step 1: UPI ID, Step 2: OTP
    const navigate = useNavigate();

    // Handle UPI ID submission
    const handleUPIIdSubmit = (e) => {
        e.preventDefault();
        setStep(2); // Move to OTP entry step
    };

    // Handle OTP submission
    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Simulate the process of OTP submission
        setTimeout(() => {
            // After OTP submission, redirect to loading page
            navigate('/loading');
            
            // Redirect to success page after a few seconds
            setTimeout(() => {
                navigate('/payment-success');
            }, 3000); // 3 seconds for loading
        }, 1000); // Simulate OTP processing time
    };

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Enter UPI Payment Details</h1>

            {/* UPI ID Step */}
            {step === 1 && (
                <form onSubmit={handleUPIIdSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="upi-id" className="text-lg font-medium">Enter UPI ID</label>
                        <input
                            type="text"
                            id="upi-id"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
                        Proceed to OTP
                    </button>
                </form>
            )}

            {/* OTP Step */}
            {step === 2 && (
                <form onSubmit={handleOtpSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="otp" className="text-lg font-medium">Enter OTP</label>
                        <input
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
                        Submit OTP
                    </button>
                </form>
            )}
        </div>
    );
};

export default UPI;
