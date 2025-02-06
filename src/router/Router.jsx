import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home.jsx'
import Product from '../pages/Product.jsx'
import Cart from '../pages/Cart.jsx'
import Payment from "../pages/Payment.jsx";
import LoadingPage from "../pages/LoadingPage.jsx";
import PaymentSuccess from "../pages/PaymentSuccess.jsx";

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
]);