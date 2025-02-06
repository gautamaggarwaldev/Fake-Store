import React, { useState } from "react";
import { Link } from "react-router-dom";
import WheelComponent from "../components/SpinWheel"; // Import the Spinwheel component
import Confetti from "react-confetti"; // Import react-confetti library

function Spinwheel() {
    const [spinResult, setSpinResult] = useState(null);

    const handleSpin = (prize) => {
        setSpinResult(prize);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-semibold mb-4">Spin & Win Rewards! 🎉</h1>

            {/* Spin Wheel Component */}
            <WheelComponent onSpinEnd={handleSpin} />

            {/* Show reward message if user wins */}
            {spinResult && (
                <>
                    {/* Party popper effect (Confetti) */}
                    <Confetti numberOfPieces={200} gravity={0.2} />

                    <p className="mt-4 text-lg font-medium text-green-600">
                        🎁 Congratulations! You won: {spinResult}
                    </p>
                </>
            )}

            {/* Go back to Home or Orders */}
            <Link to="/" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
                Continue Shopping
            </Link>
        </div>
    );
}

export default Spinwheel;
