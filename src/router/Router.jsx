import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home.jsx'
import Product from '../pages/Product.jsx'
import Cart from '../pages/Cart.jsx'

export const createRouter = createBrowserRouter([
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
]);