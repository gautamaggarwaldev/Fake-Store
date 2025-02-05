import backbutton from '../assets/backButton.svg';
import star from '../assets/star.svg';
import cart from '../assets/addCart.svg';
import bolt from '../assets/bolt.svg';
import { AppContext, AppDispatchContext } from '../App.jsx'
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
function Product() {

    const appContext = useContext(AppContext);
    const appDispatch = useContext(AppDispatchContext);

    // get product id from url
    const { productId } = useParams();
    const currentProduct = appContext.products[Number(productId)];

    // add item handle
    const addItem = () => {
        appDispatch({
            type: "ADD_ITEM",
            payload: { productId: Number(productId) },
        });
    };

    return (
        <>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6">
                {/* Back Button & Title */}
                <div className="flex items-center gap-4 mb-6">
                    <Link
                        role="button"
                        to="/"
                        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                    >
                        <img src={backbutton} alt="back" className="w-6 h-6" />
                    </Link>
                    <h1 className="text-2xl font-semibold text-gray-800">Product Details</h1>
                </div>

                {/* Loading State */}
                {appContext.isLoading ? (
                    <p className="text-center text-gray-600">Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-md rounded-lg p-6">
                        {/* Product Image */}
                        <div className="flex justify-center">
                            <img
                                src={currentProduct?.image}
                                alt="image"
                                className="w-64 h-64 object-contain rounded-lg"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col gap-4">
                            {/* Title & Price */}
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">{currentProduct?.title}</h1>
                                <p className="text-xl font-semibold text-gray-700">₹{currentProduct?.price}</p>
                            </div>

                            {/* Rating & Category */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <img src={star} alt="star" className="w-5 h-5" />
                                    <span className="text-gray-700">{currentProduct?.rating.rate}</span>
                                </div>
                                <span className="bg-gray-200 px-3 py-1 text-gray-700 rounded-md text-sm">
                                    {currentProduct?.category}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm">{currentProduct?.description}</p>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-4 mt-4">
                                <button
                                    onClick={addItem}
                                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-lg transition"
                                >
                                    <img src={cart} alt="cart" className="w-5 h-5" />
                                    <span>Add to Cart</span>
                                </button>

                                <Link
                                    role="button"
                                    onClick={addItem}
                                    to="/cart"
                                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-lg transition"
                                >
                                    <img src={bolt} alt="bolt" className="w-5 h-5" />
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};

export default Product;
