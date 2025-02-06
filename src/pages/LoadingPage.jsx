import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoadingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/payment-success"); // Redirect to Payment Success after 3 sec
        }, 3000);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
            <p className="mt-4 text-lg text-gray-700">Processing Payment...</p>
        </div>
    );
}

export default LoadingPage;
