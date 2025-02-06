import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function PaymentSuccess() {
    const [orderId, setOrderId] = useState("");

    // Generate a random order ID when the component loads
    useEffect(() => {
        const generateOrderId = () => {
            return "ORD-" + Math.floor(100000 + Math.random() * 900000);
        };
        setOrderId(generateOrderId());
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center"
            >
                {/* Animated Checkmark */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-16 h-16 mx-auto flex items-center justify-center bg-green-500 text-white rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L9 11.586l6.293-6.293a1 1 0 0 1 1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </motion.div>

                {/* Payment Success Message */}
                <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                    Payment Successful! 🎉
                </h2>
                <p className="text-gray-600 mt-2">Thank you for your purchase.</p>

                {/* Dynamic Order ID */}
                <div className="mt-4 p-3 bg-gray-100 rounded-lg text-gray-700">
                    <span className="font-semibold">Order ID:</span> {orderId}
                </div>

                {/* Continue Shopping Button */}
                <Link
                    to="/"
                    className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition"
                >
                    Continue Shopping
                </Link>
            </motion.div>
        </div>
    );
}

export default PaymentSuccess;
