import { useContext } from 'react';
import { AppDispatchContext } from '../App.jsx';

import bolt from '../assets/bolt.svg';
import star from '../assets/star.svg';
import addCart from '../assets/addCart.svg';
import { Link } from 'react-router-dom';

const Items = ({ product }) => {
    const { id, title, price,rating, image } = product;
    const appDispatch = useContext(AppDispatchContext);

    const addItem = () => {
        appDispatch({
            type: 'ADD_ITEM',
            payload: { productId: product.id },
        });
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg transition hover:shadow-lg">
            {/* Product Link */}
            <Link
                to={`/products/${id}`}
                role="button"
                className="block hover:scale-105 transition duration-300"
            >
                <div className="flex flex-col items-center">
                    {/* Product Image */}
                    <div className="w-40 h-40">
                        <img
                            src={image}
                            alt="product image"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Product Title */}
                    <div className="text-lg font-semibold text-gray-800 mt-2 text-center">
                        {title}
                    </div>

                    {/* Price & Rating */}
                    <div className="flex justify-between items-center w-full mt-2 px-4">
                        <div className="text-xl font-bold text-green-600">{`Rs ${price}`}</div>
                        <div className="flex items-center gap-1 text-yellow-500">
                            <img src={star} alt="star" className="w-5 h-5" />
                            <span className="text-sm font-medium">{rating.rate}</span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-4">
                {/* Buy Now Button */}
                <Link
                    to={`/cart`}
                    role="button"
                    onClick={addItem}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    <img src={bolt} alt="bolt-icon" className="w-5 h-5" />
                    <span>Buy Now</span>
                </Link>

                {/* Add to Cart Button */}
                <button
                    onClick={addItem}
                    className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
                >
                    <img src={addCart} alt="add-to-cart" className="w-5 h-5" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );

};

export default Items;
