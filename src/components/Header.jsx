import viewCart from '../assets/viewCart.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
          <div className="text-xl font-bold">GGs Store</div>
          <Link
            to="/cart"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            <img src={viewCart} alt="cart-icon" className="w-6 h-6" />
            <span>View Cart</span>
          </Link>
        </header>
    );
};

export default Header;
