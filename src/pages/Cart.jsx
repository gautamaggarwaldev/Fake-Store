import backButton from '../assets/backButton.svg';
import add from '../assets/plus.svg';
import plan from '../assets/plane.svg';
import { useContext } from 'react';
import { AppContext } from '../App.jsx';
import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem.jsx';

function Cart() {

    const appContext = useContext(AppContext);

    return (
        <>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6">
                {/* Back Button & Title */}
                <div className="flex items-center gap-4 mb-6">
                    <Link role="button" to="/" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                        <img src={backButton} alt="back-btn" className="w-6 h-6" />
                    </Link>
                    <h1 className="text-2xl font-semibold text-gray-800">Cart</h1>
                </div>

                {/* Cart Items */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    {appContext.isLoading ? (
                        <p className="text-center text-gray-600">Loading...</p>
                    ) : (
                        <ul className="space-y-4">
                            {appContext.cart?.products?.length !== 0 ? (
                                appContext.cart?.products?.map((item) => (
                                    <CartItem
                                        key={item.productId}
                                        product={appContext.products[item.productId]}
                                        quantity={item.quantity}
                                    />
                                ))
                            ) : (
                                <p className="text-center text-gray-600">No items in cart</p>
                            )}

                            {/* Buy More Button */}
                            <Link
                                to="/"
                                className="flex items-center gap-2 text-blue-500 font-medium hover:underline mt-4"
                            >
                                <img src={add} alt="add" className="w-5 h-5" />
                                <p>Buy More</p>
                            </Link>
                        </ul>
                    )}
                </div>

                {/* Cart Summary */}
                <section className="bg-white shadow-md rounded-lg p-6 mt-6">
                    <ul className="space-y-3 text-lg font-medium">
                        <li className="flex justify-between border-b pb-2">
                            <span className="text-gray-700">Subtotal</span>
                            <span className="text-gray-900 font-semibold">₹{Math.round(appContext?.cart?.subtotal)}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                            <span className="text-gray-700">Discount</span>
                            <span className="text-green-500 font-semibold">-₹100</span>
                        </li>
                        <li className="flex justify-between text-xl font-semibold">
                            <span>Total</span>
                            <span className="text-gray-900">₹{Math.max(Math.round(appContext?.cart?.subtotal - 100), 0)}</span>
                        </li>
                    </ul>

                    {/* Checkout Button */}
                    <button
                        disabled={appContext.cart?.products?.length === 0}
                        className={`w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-lg transition ${appContext.cart?.products?.length === 0
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
                            }`}
                    >
                        <img src={plan} alt="checkout" className="w-5 h-5" />
                        <Link to="/payment" role='button'>Checkout</Link>
                    </button>
                </section>
            </main>
        </>
    );

};

export default Cart;
