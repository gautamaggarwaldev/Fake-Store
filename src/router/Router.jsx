import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home.jsx'
import Product from '../pages/Product.jsx'
import Cart from '../pages/Cart.jsx'
import Payment from "../pages/Payment.jsx";
import LoadingPage from "../pages/LoadingPage.jsx";
import PaymentSuccess from "../pages/PaymentSuccess.jsx";
import Spinwheel from "../pages/Spinwheel.jsx";
import PaymentMethodSelection from "../pages/PaymentMethodSelection.jsx";
import PaymentQR from "../pages/PaymentQr.jsx";
import PaymentTimeout from "../pages/PaymentTimeout.jsx";
import UPI from "../pages/UPI.jsx";
import EMI from "../pages/EMI.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products/:productId",
        element: <Product />,
    }, 
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/payment-method",
        element: <PaymentMethodSelection />,
    },
    {
        path: "/payment",
        element: <Payment />,
    },
    {
        path: "/loading",
        element: <LoadingPage />,
    },
    {
        path: "/payment-success",
        element: <PaymentSuccess />,
    },
    {
        path: "/spinwheel",
        element: <Spinwheel />,
    },
    {
        path: "/payment-qr",
        element: <PaymentQR />,
    },
    {
        path: "/payment-timeout",
        element: <PaymentTimeout />,
    },
    {
        path: "/upi-payment",
        element: <UPI />,
    },
    {
        path: "/emi-payment",
        element: <EMI />,
    },
]);