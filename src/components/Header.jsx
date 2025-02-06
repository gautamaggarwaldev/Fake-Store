import viewCart from '../assets/viewCart.svg';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';
import { usePoints } from '../context/PointsContext';

function Header() {

  const { points } = usePoints();

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="text-3xl font-bold">
        <Link to="/">
          GGs Store
        </Link>
      </div>
      <Link
        to="/cart"
        className="flex items-center mr-4 gap-2 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition duration-300 ml-270"
      >
        <img src={viewCart} alt="cart-icon" className="w-6 h-6" />
        <span>View Cart</span>
      </Link>
      <DarkMode />
      <div className="flex justify-between p-1 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-lg mt-2 font-semibold text-gray-800 dark:text-white">My Store</h1>
        <p className="text-gray-800 dark:text-white ml-2 text-xl">Points: {points}</p>
      </div>
    </header>
  );
};

export default Header;
