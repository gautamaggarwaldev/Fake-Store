import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "10% Off" },
  { option: "50 Bonus Points" },
  { option: "₹50 Cashback" },
  { option: "Try Again" },
  { option: "Free Delivery" },
  { option: "₹100 Off" },
];

const SpinWheel = ({ onSpinEnd }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="flex flex-col items-center">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          onSpinEnd(data[prizeNumber].option);
        }}
      />

      <button
        onClick={handleSpinClick}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Spin Now!
      </button>
    </div>
  );
};

export default SpinWheel;
