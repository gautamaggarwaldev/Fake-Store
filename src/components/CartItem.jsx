import star from "../assets/star.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import { useContext } from "react";
import { AppDispatchContext } from "../App.jsx";
import { Link } from "react-router-dom";

function CartItem({ product, quantity }) {

    const appDispatch = useContext(AppDispatchContext);

    // add item to cart
    const addItem = () => {
        appDispatch({
            type: 'ADD_ITEM',
            payload: { productId: product.id },
        });
    };

    // remove item from cart
    const removeItem = () => {
        appDispatch({
            type: 'REMOVE_ITEM',
            payload: { productId: product.id },
        });
    };

    return (
        <div className="flex flex-col bg-white shadow-md rounded-lg p-4">
            {/* Product Image */}
            <Link role="button" to={`/products/${product.id}`} className="flex justify-center">
                <div className="w-40 h-40">
                    <img src={product.image} alt="product-image" className="object-contain w-full h-full rounded-lg" />
                </div>
            </Link>

            {/* Product Details */}
            <div className="mt-4 flex flex-col items-center text-center">
                <h1 className="text-lg font-semibold text-gray-800">{product.title}</h1>
                <div className="text-xl font-bold text-gray-900 mt-1">Rs {product.price}</div>

                {/* Rating & Category */}
                <div className="flex items-center gap-2 mt-2">
                    <img src={star} alt="star" className="w-5 h-5" />
                    <span className="text-gray-700 font-medium">{product.rating.rate}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">{product.category}</div>
            </div>

            {/* Product Description */}
            <p className="text-sm text-gray-600 mt-3 line-clamp-3">{product.description}</p>

            {/* Quantity Controls */}
            <div className="flex items-center justify-center mt-4 space-x-4">
                <button onClick={removeItem} className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
                    <img src={minus} alt="minus" className="w-5 h-5" />
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button onClick={addItem} className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600">
                    <img src={plus} alt="plus" className="w-5 h-5 text-white" />
                </button>
            </div>
        </div>
    );
};

export default CartItem;