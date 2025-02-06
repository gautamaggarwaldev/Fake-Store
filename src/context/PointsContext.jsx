import { createContext, useContext, useState } from "react";

// Create Context
const PointsContext = createContext();

export function PointsProvider({ children }) {
  const [points, setPoints] = useState(() => {
    return Number(localStorage.getItem("points")) || 0;
  });

  const addPoints = (amount) => {
    const newPoints = points + amount;
    setPoints(newPoints);
    localStorage.setItem("points", newPoints);
  };

  return (
    <PointsContext.Provider value={{ points, addPoints }}>
      {children}
    </PointsContext.Provider>
  );
}

export function usePoints() {
  return useContext(PointsContext);
}
