import { usePoints } from "../context/PointsContext";

function ProgressBar() {
  const { points } = usePoints();
  const progress = Math.min((points / 1000) * 100, 100); // Max is 1000 points

  return (
    <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden mt-4">
      <div className="bg-blue-500 h-full" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default ProgressBar;
