import { useContext, useState } from "react";
import { AppContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import backButton from "../assets/backButton.svg";

function Payment() {
    const appContext = useContext(AppContext);
    const [cardDetails, setCardDetails] = useState({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Handle form input changes
    const handleChange = (e) => {
        setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input
    };

    // Validate and proceed to loading page
    const handlePayment = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!cardDetails.name.trim()) newErrors.name = "Cardholder name is required";
        if (!/^\d{16}$/.test(cardDetails.cardNumber)) newErrors.cardNumber = "Enter a valid 16-digit card number";
        if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiry)) newErrors.expiry = "Enter expiry as MM/YY";
        if (!/^\d{3}$/.test(cardDetails.cvv)) newErrors.cvv = "Enter a valid 3-digit CVV";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            navigate("/loading"); // Redirect to the Loading page
        }
    };

    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-6">
                {/* Back Button */}
                <div className="flex items-center gap-4 mb-6">
                    <Link to="/" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                        <img src={backButton} alt="back-btn" className="w-6 h-6" />
                    </Link>
                    <h1 className="text-2xl font-semibold text-gray-800">Payment</h1>
                </div>

                {/* Payment Section */}
                <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Payment Details</h2>

                    {/* Card Details Form */}
                    <form onSubmit={handlePayment} className="space-y-4">
                        <div>
                            <label className="block text-gray-600 text-sm mb-1">Cardholder Name</label>
                            <input
                                type="text"
                                name="name"
                                value={cardDetails.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="John Doe"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-600 text-sm mb-1">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={cardDetails.cardNumber}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="**** **** **** ****"
                                maxLength="16"
                            />
                            {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-gray-600 text-sm mb-1">Expiry Date</label>
                                <input
                                    type="text"
                                    name="expiry"
                                    value={cardDetails.expiry}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="MM/YY"
                                    maxLength="5"
                                />
                                {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
                            </div>

                            <div className="w-1/2">
                                <label className="block text-gray-600 text-sm mb-1">CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    value={cardDetails.cvv}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="123"
                                    maxLength="3"
                                />
                                {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                            </div>
                        </div>

                        {/* Pay Now Button */}
                        <button
                            type="submit"
                            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg transition"
                        >
                            Pay Now
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Payment;
